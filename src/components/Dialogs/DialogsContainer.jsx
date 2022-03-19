import {connect} from "react-redux";
import {addMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageBody) => {
            dispatch(addMessageCreator(newMessageBody));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);