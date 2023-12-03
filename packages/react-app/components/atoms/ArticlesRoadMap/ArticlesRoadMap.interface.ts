export interface IArticle {
  title: string
  paragraph: string
  image: {
    path: any
    width: number
    heigth: number
  }
}

export interface IArticlesRoadMapProps {
  articles: IArticle[]
}
