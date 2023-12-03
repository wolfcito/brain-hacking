import { useAccount } from "wagmi";
import { IUseEnterApp } from "./useEnterApp.interfaces";

export default function useEnterApp() : IUseEnterApp {
    const { isConnected } = useAccount();
    return {
        isConnected
    }
}