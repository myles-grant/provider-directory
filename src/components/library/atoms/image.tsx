import { CSSProperties } from "react"
import { assets } from "../../../assets/index"

interface Props {
    className?: string
    style?: CSSProperties
    src: keyof typeof assets
    alt?: string
}

export const Image = (props: Props) => {
    const {
        className,
        style,
        src,
        alt
    } = props;

    const source = assets[src]
    return (
        <img
            className={`${className !== undefined ? className : ""}`}
            style={style}
            src={source}
            alt={alt} />
    )
}