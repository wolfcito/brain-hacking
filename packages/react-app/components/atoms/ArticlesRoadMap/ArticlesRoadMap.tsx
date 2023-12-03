import { useId } from "react";
import { IArticlesRoadMapProps } from "./ArticlesRoadMap.interface";
import Image from "next/image";

export default function ArticlesRoadMap({ articles }: IArticlesRoadMapProps) {
    const idArticlesRoadMap = useId()

    return articles.map((art, index) => <article key={`${idArticlesRoadMap}-${index}`}  >
        <h2 className="flex justify-center">{art.title}</h2>
        <div className="flex justify-center columns-2 items-center">
            {
                (index % 2 == 0) ?
                    <>
                        <Image src={art.image.path} alt={art.title} width={art.image.width} height={art.image.heigth} className="rounded-full" />
                        <p className="text-xl max-w-prose text-center mx-8">{art.paragraph}</p>
                    </> :
                    <>
                        <p className="text-xl max-w-prose text-center mx-8">{art.paragraph}</p>
                        <Image src={art.image.path} alt={art.title} width={art.image.width} height={art.image.heigth} className="rounded-full" />
                    </>
            }
        </div>
    </article>)
}