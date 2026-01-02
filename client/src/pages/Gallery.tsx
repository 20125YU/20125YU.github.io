import { useState } from "react";
import Navigation from "@/components/Navigation";
import ArtworkCard from "@/components/ArtworkCard";
import ArtworkModal from "@/components/ArtworkModal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import contentData from "@/data/content.json";
import type { Image } from "@/types/content";

export default function Gallery() {
  const [selectedArtwork, setSelectedArtwork] = useState<Image | null>(null);
  const [category, setCategory] = useState("all");

  const artworks = contentData.images as Image[];
  const filteredArtworks =
    category === "all"
      ? artworks
      : artworks.filter((a) => a.category === category);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">作品集</h1>
          <p className="text-muted-foreground text-lg">我的創作旅程與藝術探索</p>
        </div>

        <Tabs value={category} onValueChange={setCategory} className="mb-8">
          <TabsList>
            <TabsTrigger value="all" data-testid="tab-all">全部</TabsTrigger>
            <TabsTrigger value="水彩" data-testid="tab-watercolor">水彩</TabsTrigger>
            <TabsTrigger value="油畫" data-testid="tab-oil">油畫</TabsTrigger>
            <TabsTrigger value="壓克力" data-testid="tab-acrylic">壓克力</TabsTrigger>
            <TabsTrigger value="水墨" data-testid="tab-ink">水墨</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredArtworks.map((artwork) => (
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
      </main>

      <ArtworkModal
        artwork={selectedArtwork}
        open={!!selectedArtwork}
        onOpenChange={(open) => !open && setSelectedArtwork(null)}
      />
    </div>
  );
}
