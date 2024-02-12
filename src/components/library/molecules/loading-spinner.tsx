import { CSSProperties } from "react"
import { Image } from "../atoms/image"

export interface Props {
    className?: string
    style?: CSSProperties
    children?: React.ReactNode
}



export const LoadingSpinner = (props: Props) => {
    const {
        className, style, children
    } = props;


    return (
        <div
            className={`${className !== undefined ? className : ""}`}
            style={style}>
            <Image
                className={"animate-spin"}
                src={"SpinnerIcon"} />
        </div>
    );
};
