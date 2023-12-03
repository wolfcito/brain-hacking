import { HeartIcon } from '@heroicons/react/24/solid'
import { ICodingTestLIfeProps } from "./CodingTestLIfe.interfaces";

export default function CodingTestLIfe({ lifes }: ICodingTestLIfeProps) {
    return (
        <div className="basis-1/6 flex flex-inline items-center h-4 ">
            <strong className="basic-1 text-white font-bold">{lifes}</strong>
           <HeartIcon className="basic-1 h-6 w-6 text-red-500 m-0"/> 
        </div>
    )
}