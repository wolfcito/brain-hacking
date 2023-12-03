import HomeContentTitle from "../molecules/IndexMainTitle/HomeContentTitle";
import RoadMap from "../molecules/RoadMap/RoadMap";
import Donations from "../molecules/Donations";

export default function HomeContent() {
    return (
        <main>
            <HomeContentTitle />
            <hr  />
            <RoadMap />
            <Donations />
        </main>
    )
}