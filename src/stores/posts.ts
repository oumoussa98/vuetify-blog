import { defineStore } from "pinia";
import { ref } from "vue";
import type { Post } from "@/types/posts";
import postsAPI from "@/services/api";

export const usePostsStore = defineStore("posts", () => {
  const posts = ref<Post[]>([]);
  const filter = reactive({ query: "", tag: "" });

  const filteredPosts = computed(() => {
    return posts.value.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  });

  async function fetchPosts() {
    posts.value = await postsAPI.getPosts();
  }

  async function fetchPost(postId: number) {
    return postsAPI.getPost(postId);
  }

  async function createPost(post: Omit<Post, "id" | "date">) {
    const newPost = { ...post, date: new Date().toISOString() };
    await postsAPI.addPost(newPost);

    posts.value.unshift(newPost);
  }

  async function updatePost(id: number, updatedPost: Omit<Post, "date">) {
    await postsAPI.updatePost({ ...updatedPost, id, date: new Date().toISOString() });

    const index = posts.value.findIndex((p) => p.id === updatedPost.id);
    posts.value[index] = { ...posts.value[index], ...updatedPost };
  }

  async function deletePost(postId: number) {
    await postsAPI.deletePost(postId);

    posts.value = posts.value.filter((p) => p.id !== postId);
  }

  return {
    posts,
    filter,
    filteredPosts,
    fetchPosts,
    createPost,
    updatePost,
    deletePost,
    fetchPost,
  };
});
