import ReactGif from "@/components/atoms/ReactGif/ReactGif";
import ReactTitle from "@/components/atoms/ReactTitle/ReactTitle";

export default function HomeContentTitle() {
    return (<div className="flex justify-center items-center">
        <ReactGif width={90} height={90} />
        <ReactTitle />
    </div>)
}