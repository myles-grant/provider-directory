import { CSSProperties } from "react"

interface Props {
    className?: string
    style?: CSSProperties
    children?: React.ReactNode
    size?: "1" | "2" | "3" | "4"
}

export const Body = (props: Props) => {
    const {
        className,
        style,
        children,
        size = "1"
    } = props;

    const bodySize: { [key in typeof size]: string } = {
        4: "text-body-4",
        3: "text-body-3",
        2: "text-body-2",
        1: "text-body-1",
    }

    return (
        <p
            className={`${bodySize[size]} ${className !== undefined ? className : ""}`}
            style={style}>
            {children}
        </p>
    )
}