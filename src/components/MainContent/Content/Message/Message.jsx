import AddMessage from "./AddMessage/AddMessage";
import {addMessage, updateNewMessageText} from "../../../../redux/dialogs_reducer";
import {connect} from "react-redux";

let mapStateToProps = state => {
    return {
        dialogs: state.dialogs.dialogs,
        newMessageText: state.dialogs.newMessageText
    };
};
// const mapDispatchToProps = dispatch => {
//   return {
//     AddMessage: () => {
//       dispatch(addMessage());
//     },
//     updateNewMessageText: text => {
//       dispatch(updateNewMessageText(text));
//     }
//   };
// };
const Message = connect(mapStateToProps, {addMessage, updateNewMessageText})(
    AddMessage
);

export default Message;
