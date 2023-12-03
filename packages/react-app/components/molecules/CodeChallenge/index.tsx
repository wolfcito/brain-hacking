import CodeTask from "../CodeTask";
import { ICodeChallengeProps } from "./CodeChallenge.interfaces";

export default function CodeChallenge({ description, link, title, task }: ICodeChallengeProps) {
    return (<section className="flex flex-row w-full bg-black" style={{ height: "500px" }} >
        <article className="basis-1/4 ml-10 text-justify text-white font-medium">
            <h2>{title}</h2>
            <p>{description}</p>
            <label>
                {task}
            </label>
            <CodeTask />
        </article>
        <div className="basis-3/4 w-full mr-10 h-full">
            <iframe src={link}
                title={title}
                className="w-full mx-5 my-2 px-3 h-full"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
        </div>
    </section>)
}