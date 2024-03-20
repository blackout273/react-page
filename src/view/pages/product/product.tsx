import { ReactNode, ReactElement } from "react";
import style from "./product.module.css";
import { useProduct } from "./useProduct";
import { ProductController } from "./product.types";

const Product = (): ReactElement => {
    // Component logic data
    const {
        estado,
        saveRef,
        handleButtonInput,
        dealWithIt
    }: ProductController = useProduct();

    const allLinks: ReactNode | null = !estado ? null : estado.map(value => {
        return (
            <div
                key={value.id}
                className={style.responseSecundaryContainer}
            >
                <a
                    onMouseOver={() => window.alert(value.link)}
                    className={style.linkSecundaryContainer}
                    href={value.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    {value.link}
                </a>
                <div className={style.actionBarSecundaryContainer}>
                    <button
                        className={style.buttonRemoveItem}
                        onClick={() => dealWithIt("remover", value)}
                    >
                        Remover
                    </button>
                    <button
                        className={style.buttonEditItem}
                        onClick={() => dealWithIt("editar", value)}
                    >
                        Editar
                    </button>
                </div>
            </div>
        )
    });

    return (
        <div className={style.mainContainer}>
            <div className={style.formMainContainer}>
                <label>
                    Links
                </label>
                <input
                    ref={saveRef}
                    placeholder="www.roubarpadaria.com.br" />

                <button
                    onClick={async () => await handleButtonInput(saveRef)}
                    className={style.formMainContainerButton}
                >
                    Adicionar
                </button>
            </div>
            <div className={style.secundaryContainer}>
                {allLinks}
            </div>
        </div>
    )
}

export default Product