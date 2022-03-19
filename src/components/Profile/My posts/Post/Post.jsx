import classes from './Post.module.css';

let avatar = 'https://sun1.ufanet.userapi.com/s/v1/ig2/DDlHTZiRFwT5iQx5OD38NeNrcb-5FY3tvGe5vSv5b6ZpzXSg588-xS70zUNZInCA_4wpILdQz6-4kGbgkn74Hzfs.jpg?size=200x200&quality=96&crop=10,15,2133,2133&ava=1'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src={avatar} alt="ava"/>
            <div className={classes.message}>
                {props.message}
            </div>
            <div>
                {props.likes}
                <span> &#x2764;</span>
            </div>
        </div>
    )
}

export default Post;