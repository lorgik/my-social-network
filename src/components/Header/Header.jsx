import {NavLink} from "react-router-dom";
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img className={classes.logo}
                 src="https://st2.depositphotos.com/4398873/7554/v/600/depositphotos_75544575-stock-illustration-elegant-cat-logo.jpg"
                 alt="logo"/>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div className={classes.loginSide}>
                        <span>{props.login}</span>
                        {<img className={classes.avatar} src={props.userPhoto} alt="avatar"/> && <img className={classes.avatar} src="http://sun9-20.userapi.com/sun9-86/s/v1/if1/JygeoxXgnUnZyoLLCmkqMUik_vLWURO7Vpdjv_rdMKiR07AtdZ39-6kT-CCry5TKae7FwrV0.jpg?size=200x200&quality=96&crop=0,0,600,600&ava=1" alt="avatar"/>}
                        <button onClick={props.logout}>Log out</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;