import { IProgressCodingProps } from "./ProgressCoding.interfaces";

export default function ProgressCoding({ value, color }: IProgressCodingProps) {
  return (
    <div className="basis-5/6 px-3 mx-4">
      <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600 ">
        <div className="h-5 bg-primary text-center text-white rounded-lg font-semibold" style={{ width: `${value}%`, background: color }}> {value}% Completado</div>
      </div>
    </div>
  );
} 