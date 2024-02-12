import { CSSProperties } from "react"
import styles from "./styles.module.css"

interface Props {
    className?: string
    style?: CSSProperties
    label?: string
    type?: "primary" | "secondary" | "neutral"
    size?: "small" | "medium" | "large" | "xlarge"
    isDisabled?: boolean
    onClick?: () => void
    children?: React.ReactNode
    delegate?: Delegate
}


interface Delegate {
    onButtonClicked?: () => void
}

export const Button = (props: Props) => {
    const {
        className,
        label,
        style,
        type = "primary",
        size = "medium",
        children,
        isDisabled,
        delegate,
        onClick = () => { }
    } = props;

    const buttonStates: { [key in typeof type]: string } = {
        primary: "text-white bg-primary-500 hover:bg-primary-400 disabled:bg-neutral-400 active:bg-primary-600 focus:border-info",
        secondary: "text-primary-500 border-primary-500 border-2 bg-neutral hover:bg-primary-100 disabled:text-neutral-400 disabled:border-neutral-300 focus:border-info active:bg-primary-400 active:border-primary-500  active:text-primary-500",
        neutral: "text-primary-500 border-primary-500 border-2 bg-neutral hover:bg-primary-100 disabled:text-neutral-400 disabled:border-neutral-300 focus:border-info active:bg-primary-400 active:border-primary-500  active:text-primary-500",
    }

    const buttonSize: { [key in typeof size]: string } = {
        small: "text-button-4",
        medium: "text-button-3",
        large: "text-button-2",
        xlarge: "text-button-1",
    }

    return (
        <button
            className={`${styles.button} ${styles[`button-${size}`]} ${buttonSize[size]} ${buttonStates[type]} ${className !== undefined ? className : ""}`}
            style={style}
            disabled={isDisabled}
            onClick={() => {
                onClick()
                if (delegate && delegate.onButtonClicked) {
                    delegate.onButtonClicked()
                }
            }}>
            {label}
            {children}
        </button>
    )
}