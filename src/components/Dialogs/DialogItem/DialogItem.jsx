import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={classes.item + ' ' + classes.active}>
      <img className={classes.avatar} src="https://otvet.imgsmail.ru/download/82490434_b9e81044812cca4b853871617c6997a6_800.png" alt="avatar"/>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  )
};

export default DialogItem;