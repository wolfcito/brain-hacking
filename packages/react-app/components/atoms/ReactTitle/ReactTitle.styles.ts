import { CSSProperties } from "react";
import { Alumni_Sans } from "next/font/google"

export const aluminiSans = Alumni_Sans({
    weight: "600",
    display: "swap",
    style: ["italic"],
    subsets: ["latin"]
})

export const ReactTitleStylesDefault : CSSProperties = {
    textTransform: "uppercase",
    fontSize: "75px",
    marginLeft: "10px",
    marginTop: "0px",
    ...aluminiSans.style
}