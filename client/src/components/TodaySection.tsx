import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

import type { Diary, Image } from "@/types/content";

interface TodaySectionProps {
  latestDiary?: Diary;
  latestArtwork?: Image;
}

export default function TodaySection({ latestDiary, latestArtwork }: TodaySectionProps) {
  if (!latestDiary && !latestArtwork) return null;

  return (
    <div className="bg-accent/30 border-y border-border py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="w-6 h-6 text-primary" />
          <h2 className="font-serif text-3xl md:text-4xl font-light">今日創作</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {latestDiary && (
            <Card className="p-6 md:p-8 space-y-4" data-testid="card-today-diary">
              <Badge variant="secondary" className="w-fit">最新日記</Badge>
              <h3 className="font-serif text-2xl font-medium" data-testid="text-today-diary-title">
                {latestDiary.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed line-clamp-4">
                {latestDiary.excerpt}
              </p>
              <p className="text-sm text-muted-foreground">{latestDiary.date}</p>
            </Card>
          )}

          {latestArtwork && (
            <Card className="overflow-hidden" data-testid="card-today-artwork">
              <Badge variant="secondary" className="absolute top-4 left-4 z-10">最新作品</Badge>
              <div className="aspect-[4/3] bg-muted">
                <img
                  src={latestArtwork.url}
                  alt={latestArtwork.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-medium" data-testid="text-today-artwork-title">
                  {latestArtwork.title}
                </h3>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
