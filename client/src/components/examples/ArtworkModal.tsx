import { useState } from 'react'
import ArtworkModal from '../ArtworkModal'
import { Button } from '@/components/ui/button'
import artworkImage from '@assets/generated_images/Abstract_warm_tones_painting_3ddd9525.png'

export default function ArtworkModalExample() {
  const [open, setOpen] = useState(false)

  const artwork = {
    id: "1",
    title: "溫暖的抽象",
    url: artworkImage,
    date: "2024年10月",
    category: "油畫",
    description: "這幅作品靈感來自秋天的溫暖色調，使用大地色系營造出寧靜而溫馨的氛圍。筆觸簡約而富有層次，試圖表達內心的平和與安寧。"
  }

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)} data-testid="button-open-modal">
        打開作品詳情
      </Button>
      <ArtworkModal
        artwork={artwork}
        open={open}
        onOpenChange={setOpen}
        onPrevious={() => console.log('Previous')}
        onNext={() => console.log('Next')}
      />
    </div>
  )
}
