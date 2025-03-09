import type { Post } from "@/types/posts";
import Dexie, { type EntityTable } from "dexie";

const db = new Dexie("PostsDatabase") as Dexie & {
  posts: EntityTable<Post, "id">;
};

// Schema declaration:
db.version(1).stores({
  posts: "++id, title, text, author, date",
});

export default db;
