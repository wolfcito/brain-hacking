export interface IArticle {
    title: string
    paragraph: string;
    image: {
        path: string;
        width: number;
        heigth: number;
    }

}

export interface IArticlesRoadMapProps {
    articles: IArticle[];
}