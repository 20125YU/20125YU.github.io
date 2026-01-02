export type Mood = "happy" | "calm" | "inspired" | "melancholic";

export interface Diary {
  id: string;
  title: string;
  date: string;
  mood?: Mood;
  imageUrl?: string;
  excerpt: string;
  content: string;
}

export interface Image {
  id: string;
  title: string;
  url: string;
  date: string;
  category?: string;
  description: string;
}
