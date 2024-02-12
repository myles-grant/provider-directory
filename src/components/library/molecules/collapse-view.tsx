import React, { CSSProperties, useState } from "react"
import { Image } from "../atoms/image"
import { Button } from "../atoms/button/button"

export interface Props {
    className?: string
    style?: CSSProperties
    children?: React.ReactNode
    collapseView: React.ReactNode
    expandedView: React.ReactNode
    collapseLabel?: string
    expandedLabel?: string
}



export const CollapseView = (props: Props) => {
    const {
        className,
        style,
        children,
        collapseView,
        expandedView,
        collapseLabel = "More",
        expandedLabel = "Less"
    } = props;

    const [isCollapse, setIsCollapse] = useState(true)

    return (
        <div
            className={`${className !== undefined ? className : ""}`}
            style={style}>
            <Button
                style={{
                    textAlign: "left",
                    backgroundColor: "transparent",
                    color: "blue"
                }}
                onClick={() => {
                    setIsCollapse(prev => !prev)
                }}>
                {isCollapse ? collapseLabel : expandedLabel}
            </Button>
            {
                isCollapse ? collapseView : expandedView
            }
        </div>
    );
};
