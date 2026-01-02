import { useRoute } from "wouter";
import Navigation from "@/components/Navigation";
import MarkdownContent from "@/components/MarkdownContent";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, CloudRain, Smile, Sparkles } from "lucide-react";
import contentData from "@/data/content.json";
import type { Diary, Mood } from "@/types/content";

const moodIcons = {
  happy: { icon: Smile, label: "開心", color: "text-chart-2" },
  calm: { icon: Heart, label: "平靜", color: "text-chart-3" },
  inspired: { icon: Sparkles, label: "靈感", color: "text-chart-1" },
  melancholic: { icon: CloudRain, label: "憂鬱", color: "text-chart-4" },
};

export default function DiaryDetail() {
  const [, params] = useRoute("/diary/:id");
  const diaries = contentData.diaries as Diary[];
  const diary = diaries.find((d) => d.id === params?.id);

  if (!diary) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">找不到日記</h1>
          <p className="text-muted-foreground">您要查看的日記不存在。</p>
        </main>
      </div>
    );
  }

  const MoodIcon = diary.mood ? moodIcons[diary.mood].icon : null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <article>
          <header className="mb-8">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{diary.date}</span>
              </div>
              {diary.mood && MoodIcon && (
                <Badge variant="secondary" className="gap-1.5">
                  <MoodIcon className={`w-3.5 h-3.5 ${moodIcons[diary.mood].color}`} />
                  {moodIcons[diary.mood].label}
                </Badge>
              )}
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-light mb-6">
              {diary.title}
            </h1>

            {diary.imageUrl && (
              <div className="aspect-[16/9] rounded-lg overflow-hidden bg-muted mb-8">
                <img
                  src={diary.imageUrl}
                  alt={diary.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </header>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <MarkdownContent content={diary.content} />
          </div>
        </article>
      </main>
    </div>
  );
}
