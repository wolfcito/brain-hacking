import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import { ROUTES } from "@/constants/routes";

export default function EnterApp() {
    const { isConnected } = useAccount();
    const routre = useRouter();

    const handleClickEnterApp = () => routre.push(ROUTES.CODING.INDEX)

    return (<div className="flex flex-col justify-center items-center content-center">
        <button onClick={handleClickEnterApp} className={`basis-1/2 rounded-md w-1/6 my-2 ${isConnected? "bg-cyan-900": "bg-gray-500 hover:bg-gray-500"}`} disabled={!isConnected}>Ingresar</button>
    </div>
    )

}