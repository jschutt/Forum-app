import style from './css/Header.module.css'

const Header = (props) => {
    return (
        <div className={style.siteHeader}>
            <h1 className={style.title}>{props.title}</h1>
        </div>
    )
}

export default Header;