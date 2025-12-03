import { JSX } from "react";
import { Database, Tables } from "./supabase/types";
import { AUTHORS } from "./CONSTANT";

// Simplified types for posts without sections/blocks
export type FrontendPost = Omit<Tables<"posts">, "created_at" | "id"> & { id?: number };

export interface CategoryCard {
  name: string;
  // Using string type instead of the non-existent Category enum
  slug: string;
  description?: string;
  icon?: JSX.Element;
}

export type PostFieldTypes = {
  [K in keyof Tables<"posts">]: Tables<"posts">[K];
};

export type Author = (typeof AUTHORS)[number]["id"];

export interface URLOptions{
  subjectSlug: string | null;
  classSlug: string | null;
  chapterSlug: string | null;
  topicSlug: string;
}

// app/dashboard/posts/sectionsTypes.ts

export interface Paragraph {
  id: string;
  type: "paragraph";
  content: string;
}

export interface CodeBlock {
  id: string;
  type: "code";
  content: string;
  subtitle?: string;
  language?: string;
}

export interface ListGroupItem {
  id: string;
  content: string;
}

export interface ListGroupBlock {
  id: string;
  type: "list-group";
  subtitle: string;
  items: ListGroupItem[];
}

export type ContentBlock = Paragraph | CodeBlock | ListGroupBlock;

export interface Section {
  id: string;
  title: string;
  contentBlocks: ContentBlock[];
}
