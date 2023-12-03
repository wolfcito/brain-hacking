import useHomeContent from "@/hooks/HomeContent/useHomeContent";
import HomeContentTitle from "../molecules/IndexMainTitle/HomeContentTitle";
import RoadMap from "../molecules/RoadMap/RoadMap";

export default function HomeContent() {
    const { } = useHomeContent();
    return (
        <main >
            <HomeContentTitle />
            <hr  />
            <RoadMap />
        </main>
    )
}