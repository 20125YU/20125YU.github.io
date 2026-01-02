import { useState } from "react";
import Navigation from "@/components/Navigation";
import BackgroundDecor from "@/components/BackgroundDecor";
import ArtworkCard from "@/components/ArtworkCard";
import DiaryCard from "@/components/DiaryCard";
import TodaySection from "@/components/TodaySection";
import ArtworkModal from "@/components/ArtworkModal";
import contentData from "@/data/content.json";
import type { Diary, Image } from "@/types/content";

export default function Home() {
  const [selectedArtwork, setSelectedArtwork] = useState<Image | null>(null);
  
  const artworks = contentData.images as Image[];
  const diaries = contentData.diaries as Diary[];

  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundDecor />
      <Navigation />

      <TodaySection
        latestDiary={diaries[0]}
        latestArtwork={artworks[0]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">畫畫影片</h2>
        <p className="text-muted-foreground mb-4">以下示範一段畫畫過程（可替換為你的影片）。</p>
        <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-sm">
          <iframe
            title="畫畫示範影片"
            src="https://www.youtube.com/embed/M7lc1UVf-VE"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <section className="mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">最新作品</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {artworks.slice(0, 3).map((artwork) => (
              <ArtworkCard
                key={artwork.id}
                id={artwork.id}
                title={artwork.title}
                imageUrl={artwork.url}
                date={artwork.date}
                category={artwork.category}
                onClick={() => setSelectedArtwork(artwork)}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">最新日記</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {diaries.slice(0, 2).map((diary) => (
              <DiaryCard key={diary.id} {...diary} />
            ))}
          </div>
        </section>
      </main>

      <ArtworkModal
        artwork={selectedArtwork}
        open={!!selectedArtwork}
        onOpenChange={(open) => !open && setSelectedArtwork(null)}
      />
    </div>
  );
}
