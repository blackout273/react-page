import { Link } from "react-router-dom"
import s from "./HeaderNavigation.module.css"

const HeaderNavigation = () => {
    return (
        <div className={s.headerNavigation}>

            <Link className={s.headerNavigationTitle} to="/">Home</Link>

            <ul className={s.headerNavigationItems}>
                <li ><Link className={s.headerNavigationLink} to="/product">produto</Link></li>
                <li ><Link className={s.headerNavigationLink} to="/about">Sobre</Link></li>
            </ul>
        </div>
    )

}
export default HeaderNavigation