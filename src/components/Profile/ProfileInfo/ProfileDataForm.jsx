import {reduxForm} from "redux-form";
import classes from './ProfileInfo.module.css';
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import style from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <button>save</button>
            { error && <div className={style.formSummaryError}> {error} </div> }

            <div>
                Full name: {createField('Full name', 'fullName', [], Input)}
            </div>
            <div>
                Looking for a job: {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>
            <div>
                My professional skills: {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                About me: {createField('About me:', 'aboutMe', [], Textarea)}
            </div>
            <div>
                Contacts: {Object.keys(profile.contacts).map(key => {
                return (
                    <div className={classes.contact}>
                        {key}: {createField(key, 'contacts.' + key, [], Input)}
                    </div>
                )})}
            </div>
        </form>
    )
};

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataReduxForm;