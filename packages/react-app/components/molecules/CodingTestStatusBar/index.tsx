import CodingTestLIfe from "@/components/atoms/CodingTestLifes";
import ProgressCoding from "@/components/atoms/ProgressCoding";
import { ICodingTestStatusBarProps } from "./CodingTestStatusBar.interfaces";

export default function CodingTestStatusBar({ challengeIndex } : ICodingTestStatusBarProps) {
    return (
        <section className="flex flex-row gap-4 my-2">
            <ProgressCoding value={(challengeIndex  + 1) * 25 } color="#66DA00" />
            <CodingTestLIfe lifes="5" />
        </section>
    )
}