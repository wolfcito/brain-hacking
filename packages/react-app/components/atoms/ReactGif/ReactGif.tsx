import Image from "next/image";
import { IReactGifProps } from "./ReactGif.interfaces";

export default function ReactGif({ width, height }: IReactGifProps) {
   return (<Image src="/assets/img/react.gif" alt="react" width={width} height={height} />);
}