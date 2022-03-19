import React from "react";
import {Field, reduxForm} from "redux-form";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo((props) => {

    let postsElements = [...props.postsData]
        .reverse()
        .map(post => <Post message={post.message} likes={post.likesCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    };

    return (
        <div className={classes.posts}>
            <h3>My posts</h3>
            <div>
                <AddPostReduxForm onSubmit={onAddPost}/>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} placeholder='Enter your post'
                   name='newPostText' validate={[required, maxLength10]} />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const AddPostReduxForm = reduxForm({
    form: 'profileAddPostForm'
})(AddNewPostForm)

export default MyPosts;