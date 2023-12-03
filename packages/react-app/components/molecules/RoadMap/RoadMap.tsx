import { ArticlesRoadMap } from '@/components/atoms/ArticlesRoadMap/ArticlesRoadMap'
import { articlesRoadMap } from '@/constants/articles'

export default function RoadMap() {
  return (
    <section>
      <ArticlesRoadMap articles={articlesRoadMap} />
    </section>
  )
}
