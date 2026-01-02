import Navigation from "@/components/Navigation";
import DiaryCard from "@/components/DiaryCard";
import contentData from "@/data/content.json";
import type { Diary } from "@/types/content";

export default function Diary() {
  const diaries = contentData.diaries as Diary[];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">創作日記</h1>
          <p className="text-muted-foreground text-lg">記錄每一天的創作與生活</p>
        </div>

        <div className="space-y-8">
          {diaries.map((diary) => (
            <DiaryCard key={diary.id} {...diary} />
          ))}
        </div>
      </main>
    </div>
  );
}
