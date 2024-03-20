import { MutableRefObject } from "react"

export type Data = {
    id: string,
    link?: string
}

export type ProductController = {
    estado:            Data[],
    saveRef:           MutableRefObject<HTMLInputElement | null>,
    handleButtonInput: CallableFunction,
    dealWithIt:        CallableFunction
}
