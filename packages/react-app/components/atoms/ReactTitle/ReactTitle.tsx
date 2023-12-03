import { IReactTitleProps } from "./ReactTitle.interfaces";
import { ReactTitleStylesDefault } from "./ReactTitle.styles";


export default function ReactTitle({ styles = ReactTitleStylesDefault } : IReactTitleProps) {
    return (<h1  style={styles} className="float-right" >Aprende con React</h1>)
}