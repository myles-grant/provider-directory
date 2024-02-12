import { CSSProperties, useEffect, useState } from "react"

interface Props<T> {
    items: T[],
    render: (item: T, index: number) => React.ReactNode
    emptyListRender?: React.ReactNode
    className?: string
    listItemClassName?: string
    style?: CSSProperties
    listItemStyle?: CSSProperties
}

export const List = <T extends any>(props: Props<T>) => {
    const {
        items,
        style,
        listItemStyle,
        render,
        emptyListRender = <div></div>,
        className,
        listItemClassName,
    } = props;

    const [listItems, setListItems] = useState(items)

    useEffect(() => {
        if (items !== undefined) {
            setListItems(items)
        }
    }, [items])

    return (
        <ul
        className={`${className !== undefined ? className : ""}`}
            style={style}>
            {
                listItems.map((item, index) => {
                    return (
                        <li
                            key={JSON.stringify(item) + "-" + index}
                            className={listItemClassName !== undefined ? listItemClassName : ""}
                            style={listItemStyle}>
                            {render(item, index)}
                        </li>
                    )
                })
            }
        </ul>
    )
}