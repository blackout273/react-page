import { Link } from "react-router-dom"
import style from "./HeaderNavigation.module.css"

const HeaderNavigation = () => {
    return (
        <div className={style.headerNavigation}>

            <Link className={style.headerNavigationTitle} to="/">Home</Link>

            <ul className={style.headerNavigationItems}>
                <li ><Link className={style.headerNavigationLink} to="/product">produto</Link></li>
                <li ><Link className={style.headerNavigationLink} to="/about">Sobre</Link></li>
            </ul>
        </div>
    )

}
export default HeaderNavigation