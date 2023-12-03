import HomeContentTitle from "../molecules/IndexMainTitle/HomeContentTitle";
import RoadMap from "../molecules/RoadMap/RoadMap";
import Donations from "../molecules/Donations";
import EnterApp from "../molecules/EnterApp";

export default function HomeContent() {
    return (
        <main>
            <HomeContentTitle />
            <EnterApp />
            <hr  />
            <RoadMap />
            <Donations />
        </main>
    )
}