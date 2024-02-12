import { CSSProperties } from "react"

interface Props {
    className?: string
    style?: CSSProperties
    children?: React.ReactNode
    size?: "1" | "2" | "3" | "4" | "5" | "6"
}

export const Label = (props: Props) => {
    const {
        className,
        style,
        children,
        size = "1"
    } = props;

    const labelSize: { [key in typeof size]: string } = {
        6: "text-label-6",
        5: "text-label-5",
        4: "text-label-4",
        3: "text-label-3",
        2: "text-label-2",
        1: "text-label-1",
    }
    return (
        <label
            className={`${labelSize[size]} ${className !== undefined ? className : ""}`}
            style={style}>
            {children}
        </label>
    )
}