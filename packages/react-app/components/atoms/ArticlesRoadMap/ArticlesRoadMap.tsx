import { IArticlesRoadMapProps } from './ArticlesRoadMap.interface'
import Image from 'next/image'

export function ArticlesRoadMap({ articles }: IArticlesRoadMapProps) {
  return (
    <>
      {articles.map((art, index) => (
        <article key={crypto.randomUUID()}>
          <h2 className="flex justify-center">{art.title}</h2>
          <div className="flex columns-2 items-center justify-center">
            {index % 2 == 0 ? (
              <>
                <Image
                  src={art.image.path}
                  alt={art.title}
                  width={art.image.width}
                  height={art.image.heigth}
                  className="rounded-full"
                />
                <p className="mx-8 max-w-prose text-center text-xl">
                  {art.paragraph}
                </p>
              </>
            ) : (
              <>
                <p className="mx-8 max-w-prose text-center text-xl">
                  {art.paragraph}
                </p>
                <Image
                  src={art.image.path}
                  alt={art.title}
                  width={art.image.width}
                  height={art.image.heigth}
                  className="rounded-full"
                />
              </>
            )}
          </div>
        </article>
      ))}
    </>
  )
}
