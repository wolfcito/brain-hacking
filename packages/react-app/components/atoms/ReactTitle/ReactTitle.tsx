import { IReactTitleProps } from './ReactTitle.interfaces'
import { ReactTitleStylesDefault } from './ReactTitle.styles'

export default function ReactTitle({
  styles = ReactTitleStylesDefault,
}: IReactTitleProps) {
  return (
    <h1 style={styles} className="text-center">
      Despierta tu genialidad
    </h1>
  )
}
