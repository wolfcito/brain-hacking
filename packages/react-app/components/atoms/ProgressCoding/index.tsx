import { Progress } from "@material-tailwind/react";
import { IProgressCodingProps } from "./ProgressCoding.interfaces";

export default function ProgressCoding({value}: IProgressCodingProps) {
    return (
        <div className="flex w-full flex-col gap-4">
          <Progress value={value} variant="gradient" />
        </div>
      );
} 