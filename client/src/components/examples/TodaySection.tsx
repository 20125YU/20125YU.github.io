import TodaySection from '../TodaySection'
import artworkImage from '@assets/generated_images/Sunset_ocean_painting_a897a4e1.png'

export default function TodaySectionExample() {
  return (
    <TodaySection
      latestDiary={{
        id: "1",
        title: "創作的喜悅",
        excerpt: "今天完成了新的系列作品，心中充滿了成就感。每一筆都是情感的流露，每一個色彩都承載著故事。",
        date: "2024年11月7日",
        content: "# 創作的喜悅\n\n今天完成了新的系列作品，心中充滿了成就感。"
      }}
      latestArtwork={{
        id: "1",
        title: "暮色海洋",
        url: artworkImage,
        date: "2024年8月",
        description: "夕陽下的海洋，用柔和的粉色和桃色描繪出平靜的景象。"
      }}
    />
  )
}
