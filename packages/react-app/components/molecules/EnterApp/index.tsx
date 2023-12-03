import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import { ROUTES } from "@/constants/routes";

export default function EnterApp() {
    const { isConnected } = useAccount();
    const routre = useRouter();

    const handleClickEnterApp = () => routre.push(ROUTES.CODING.INDEX)

    if(!isConnected)
        return null;

    return (<div className="flex flex-col justify-center items-center content-center">
        <button onClick={handleClickEnterApp} className="basis-1/2 rounded-md w-1/6 my-2" disabled={!isConnected}>Ingresar</button>
    </div>
    )

}