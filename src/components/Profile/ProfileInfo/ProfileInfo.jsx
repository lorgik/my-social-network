import {useState} from "react";
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

let avatar = 'https://sun9-20.userapi.com/sun9-86/s/v1/if1/JygeoxXgnUnZyoLLCmkqMUik_vLWURO7Vpdjv_rdMKiR07AtdZ39-6kT-CCry5TKae7FwrV0.jpg?size=200x200&quality=96&crop=0,0,600,600&ava=1';
const ProfileInfo = ({profile, savePhoto, isOwner, status, updateStatus, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);


    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        )
    }

    return (
        <div className={classes.content}>
            <div>
                <img className={classes.avatar} src={profile.photos.large || avatar} alt="avatar"/>
                { isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
                { editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData profile={profile} isOwner={isOwner}
                                   goToEditMode={() => {setEditMode(true)}} />}

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <button onClick={goToEditMode}>edit</button>}
            <p className={classes.name}>Full name: {profile.fullName}</p>
            <p>{profile.aboutMe}</p>
            <div>
                Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
                <div>
                    My professional skills: {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                About me: {profile.aboutMe}
            </div>
            <div>
                Contacts: {Object.keys(profile.contacts).map(key => {
                return (
                    <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                )})}
            </div>
        </div>
    )
};

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={classes.contact}>
            {contactTitle}: {contactValue}
        </div>
    )
}

export default ProfileInfo;