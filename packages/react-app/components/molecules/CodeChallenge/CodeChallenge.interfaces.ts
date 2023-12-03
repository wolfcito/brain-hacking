import { ReactNode } from "react";

export interface ICodeChallengeProps {
    title: string,
    description: ReactNode,
    task: string,
    link: string
}