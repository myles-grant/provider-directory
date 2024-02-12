import { CSSProperties } from "react"
import { Header } from "../atoms/text/header"
import { Label } from "../atoms/text/label"
import { Body } from "../atoms/text/body"
import { Button } from "../atoms/button/button"
import { Image } from "../atoms/image"

interface Props {
    className?: string
    style?: CSSProperties
    children?: React.ReactNode
    header?: {
        title?: string
        subtitle?: string
        image?: string
    }
    body?: {
        message?: string
    }
    footer?: {
        message?: string
    }
    onClick?: () => void
}

export const Card = (props: Props) => {
    const {
        className,
        style,
        header,
        body,
        footer,
        children = <></>,
        onClick
    } = props;

    return (
        <div
            className={`bg-white p-4 mb-3 rounded ${onClick !== undefined ? " hover:cursor-pointer " : ""} ${className !== undefined ? className : ""}`}
            style={style}
            onClick={() => {
                if (onClick) {
                    onClick()
                }
            }}>
            {
                header ? (
                    <div className={"flex flex-row py-1 items-center"}>
                        {
                            header.image !== undefined ? (
                                <div className="mr-4">
                                    <Image src={header.image as any} />
                                </div>
                            ) : <></>
                        }
                        <div>
                            {
                                header.title !== undefined ? (
                                    <Header size={"4"}>
                                        {header.title}
                                    </Header>
                                ) : <></>
                            }
                            {
                                header.subtitle !== undefined ? (
                                    <Label size={"3"}>
                                        {header.subtitle}
                                    </Label>
                                ) : <></>
                            }
                        </div>
                    </div>
                ) : <></>
            }
            {
                body ? (
                    <div className={"py-1"}>
                        {
                            body.message !== undefined ? (
                                <Body
                                    className="truncate overflow-hidden"
                                    size={"3"}>
                                    {body.message}
                                </Body>
                            ) : <></>
                        }
                    </div>
                ) : <></>
            }
            {
                footer ? (
                    <div className={"py-3"}>
                        {
                            footer.message !== undefined ? (
                                <Button
                                    style={{ color: "var(--primary-500)" }}
                                    isDisabled>
                                    {footer.message}
                                </Button>
                            ) : <></>
                        }
                    </div>
                ) : <></>
            }
            {children}
        </div>
    )
}