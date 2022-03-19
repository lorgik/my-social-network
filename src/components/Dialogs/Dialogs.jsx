import React from "react";
import {Redirect} from "react-router-dom";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData
        .map( dialog =>
            <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messagesElements = state.messagesData
        .map( message =>
            <Message message={message.message} key={message.id} />);


    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }

    if (!props.isAuth) {
        return <Redirect to={'/login'} />
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                <div>{ messagesElements }</div>
                <AddMessageReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name='newMessageBody'
                   placeholder='Enter your message' validate={[required, maxLength50]} />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

const AddMessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm);


export default Dialogs;