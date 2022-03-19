import {connect} from "react-redux";
import {addPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps,
    {addPost})(MyPosts);

export default MyPostsContainer;
