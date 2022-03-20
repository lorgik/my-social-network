import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";

const Profile = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    return (
        <div>
            <ProfileInfo isOwner={isOwner} profile={profile}
                         status={status} updateStatus={updateStatus}
                         savePhoto={savePhoto} saveProfile={saveProfile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;