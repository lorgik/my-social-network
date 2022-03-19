import classes from "./FormsControls.module.css";
import {Field} from "redux-form";

export const Textarea = ({input, meta: {touched, error}}) => {
    const hasError = touched && error;

    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
            <div>
                <textarea {...input} />
            </div>
            { hasError && <span>{error}</span> }
        </div>
    )
}

export const Input = ({input, meta: {touched, error}}) => {

    const hasError = touched && error;

    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
            <div>
                <input {...input} />
            </div>
            { hasError && <span>{error}</span> }
        </div>
    )
}

export const createField = (placeholder, name, validator, component, props = {}, text = '') => {
    return (
        <div>
            <Field placeholder={placeholder} name={name}
                   component={component} validate={validator} {...props}/> {text}
        </div>
    )
}