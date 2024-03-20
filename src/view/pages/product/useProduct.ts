import { RefObject, useRef, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { Data, ProductController } from "./product.types"

const mock: Data[] = [
    {
        id: uuidv4(),
        link: `www.${uuidv4()}.com`
    }
]

export const useProduct = (): ProductController => {
    const [estado, setEstado] = useState<Data[]>(mock);
    const saveRef = useRef<HTMLInputElement | null>(null);

    function trulyLink(value: string): boolean {
        const regEx: RegExp = /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/[^\s]*)?$/;

        return regEx.test(value);
    }

    // async function validLink(value: string): Promise<boolean> {
    //     return await fetch(`/api/${value}`, {
    //         headers: {
    //             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36',
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(resp => {
    //         return resp.ok && resp.status === 200 ? true : false
    //     }).catch(e => {
    //         return e && false
    //     })
    // }

    async function handleButtonInput(event: RefObject<HTMLInputElement>): Promise<void | undefined> {
        if (!event.current) {
            return;
        }

        const { value } = event.current;

        let isLink: boolean = trulyLink(value);

        if (!isLink && (value === undefined)) {
            return;
        };

        // let isValidLink: boolean = await validLink(value)

        // if (!isValidLink) {
        //     return 
        // }

        let newData: Data = {
            id: uuidv4(),
            link: value
        };

        setEstado(prevState => {
            return [...prevState, newData]
        });
    }

    function dealWithIt(
        command: string,
        value: Data
    ): void {
        switch (command) {
            case "editar":
                break;
            case "remover":
                setEstado(estado?.filter(data => {
                    return data.id !== value.id
                }))

                break;
        }
    }

    return {
        estado,
        saveRef,
        handleButtonInput,
        dealWithIt
    }
}
