import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, onPageChanged, totalItemsCount, pageSize, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalItemsCount} pageSize={pageSize} />

            { props.users.map(u => <User user={u}
                                         followingInProgress={props.followingInProgress}
                                         follow={props.follow}
                                         unfollow={props.unfollow}
                                         key={u.id} />
            ) }
        </div>
    )
}

export default Users;