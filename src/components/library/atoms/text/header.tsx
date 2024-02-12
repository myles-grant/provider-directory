import { CSSProperties } from "react"

interface Props {
    className?: string
    style?: CSSProperties
    children?: React.ReactNode
    size?: "1" | "2" | "3" | "4" | "5"
}

export const Header = (props: Props) => {
    const {
        className,
        style,
        children,
        size = "1"
    } = props;

    const render = ((_size: typeof size) => {
        switch (_size) {
            case "1": return <h1></h1>
            case "2": return <h2></h2>
            case "3": return <h3></h3>
            case "4": return <h4></h4>
            case "5": return <h5></h5>
        }
    })(size)

    const headerSize: { [key in typeof size]: string } = {
        5: "text-header-5",
        4: "text-header-4",
        3: "text-header-3",
        2: "text-header-2",
        1: "text-header-1",
    }
    return (
        <render.type
            className={`${headerSize[size]} ${className !== undefined ? className : ""}`}
            style={{
                ...style
            }}>
            {children}
        </render.type>
    )
}