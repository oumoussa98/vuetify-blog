import type { Post } from "@/types/posts";
import db from "@/services/db";

async function getPosts(): Promise<Post[]> {
  return db.posts.orderBy("date").reverse().toArray();
}

async function getPost(id: number): Promise<Post | undefined> {
  return db.posts.get(id);
}

async function addPost(newPost: Omit<Post, "id">): Promise<number | undefined> {
  return db.posts.add(newPost);
}

async function updatePost(post: Post): Promise<void> {
  await db.posts.update(post.id!, post);
}

async function deletePost(id: number): Promise<void> {
  await db.posts.delete(id);
}

export default {
  getPosts,
  addPost,
  updatePost,
  deletePost,
  getPost,
};
