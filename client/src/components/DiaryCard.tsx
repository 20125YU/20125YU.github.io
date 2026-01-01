import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, CloudRain, Smile, Sparkles } from "lucide-react";
import { Link } from "wouter";

interface DiaryCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  mood?: "happy" | "calm" | "inspired" | "melancholic";
  imageUrl?: string;
}

const moodIcons = {
  happy: { icon: Smile, label: "開心", color: "text-chart-2" },
  calm: { icon: Heart, label: "平靜", color: "text-chart-3" },
  inspired: { icon: Sparkles, label: "靈感", color: "text-chart-1" },
  melancholic: { icon: CloudRain, label: "憂鬱", color: "text-chart-4" },
};

export default function DiaryCard({
  id,
  title,
  excerpt,
  date,
  mood,
  imageUrl,
}: DiaryCardProps) {
  const MoodIcon = mood ? moodIcons[mood].icon : null;

  return (
    <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all" data-testid={`card-diary-${id}`}>
      {imageUrl && (
        <div className="aspect-[16/9] overflow-hidden bg-muted">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span data-testid="text-diary-date">{date}</span>
          </div>
          {mood && MoodIcon && (
            <Badge variant="secondary" className="gap-1.5">
              <MoodIcon className={`w-3.5 h-3.5 ${moodIcons[mood].color}`} />
              {moodIcons[mood].label}
            </Badge>
          )}
        </div>

        <h3 className="font-serif text-2xl font-medium" data-testid="text-diary-title">
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed line-clamp-3" data-testid="text-diary-excerpt">
          {excerpt}
        </p>

        <Link 
          href={`/diary/${id}`} 
          className="text-primary hover:underline font-medium inline-block" 
          data-testid="link-read-more"
        >
          閱讀更多 →
        </Link>
      </div>
    </Card>
  );
}
