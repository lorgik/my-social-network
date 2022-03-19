import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Users.module.css";

let avatar = 'https://sun9-20.userapi.com/sun9-86/s/v1/if1/JygeoxXgnUnZyoLLCmkqMUik_vLWURO7Vpdjv_rdMKiR07AtdZ39-6kT-CCry5TKae7FwrV0.jpg?size=200x200&quality=96&crop=0,0,600,600&ava=1';

let User = ({user, followingInProgress, unfollow, follow}) => {
    debugger
    return (
        <div key={user.id}>
            <div className={classes.user}>
                <NavLink to={'/profile/' + user.id}>
                    <img className={classes.userPhoto}
                         src={user.photos.small != null ? user.photos.small : avatar}
                         alt="avatar"/>
                </NavLink>
                <div>
                    <p>
                        <div className={classes.name}>{user.name}</div>
                        <div>{user.status}</div>
                    </p>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress
                            .some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}>
                            Unfollow</button>
                        : <button disabled={followingInProgress
                            .some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>
                            Follow</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default User;