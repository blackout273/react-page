import style from "./Product.module.css"
import { MutableRefObject, RefObject, useEffect, useRef, useState } from "react"

interface Data {
    id: Number,
    link: String
}

const Product = () => {
    const [estado, setEstado] = useState([{ id: 0, link: "" }])
    const saveRef = useRef<HTMLInputElement>(null);

    const mock = [
        {
            id: 1,
            link: "www.sexogratisputacom.com.br"
        },
        {
            id: 2,
            link: "www.lavagemdedinheiro.org"
        },
        {
            id: 3,
            link: "www.google.com.br"
        }
    ]
    function handleButtonInput(event: RefObject<HTMLInputElement>) {
        const { current } = event

        console.log(current?.value)
    }
    function dealWithIt(command: String, value: Data) {
        switch (command) {
            case "editar":
                break;
            case "remover":
                setEstado(estado.filter(data => data.id !== value.id))
                break;
        }
    }
    useEffect(() => {
        setEstado(mock)
    }, [])
    return (
        <div className={style.productContainer}>
            <div className={style.containerFormLinks}>
                <label>Links</label>
                <input
                    ref={saveRef}
                    placeholder="www.roubarpadaria.com.br" />

                <button
                    onClick={() => handleButtonInput(saveRef)}
                    className={style.productContainerButton}
                >Adicionar</button>

            </div>
            <div className={style.containerResponseForm}>
                {
                    estado.map(value => {
                        return (<>

                            <a className={style.itemResponseForm} key={value.id} href={value.link} target="_blank"> {value.link}</a>
                            <div className={style.actionBar}>
                                <button className={style.buttonRemoveItem} onClick={() => dealWithIt("remover", value)}>Remover</button>
                                <button className={style.buttonEditItem} onClick={() => dealWithIt("editar", value)}>Editar</button>
                            </div>

                        </>

                        )
                    })
                }

            </div>
        </div>
    )
}
export default Product