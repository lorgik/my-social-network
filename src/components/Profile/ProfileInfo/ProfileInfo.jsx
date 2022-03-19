import classes from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

let avatar = 'http://sun9-20.userapi.com/sun9-86/s/v1/if1/JygeoxXgnUnZyoLLCmkqMUik_vLWURO7Vpdjv_rdMKiR07AtdZ39-6kT-CCry5TKae7FwrV0.jpg?size=200x200&quality=96&crop=0,0,600,600&ava=1';
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.avatar} src={props.profile.photos.large || avatar} alt="avatar"/>
                <p className={classes.name}>{props.profile.fullName}</p>
                <p>{props.profile.aboutMe}</p>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
};

export default ProfileInfo;