import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addMessageThunk } from '../../../../redux/dialogs_reducer';
import { MessageContent, NewMess } from './AddMessageStyled';

const MessageForm = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field
          component={'input'}
          type="text"
          name={'message'}
          placeholder="New Message"
        />
        <button disabled={pristine || submitting}>Add Post</button>
      </form>
    </div>
  );
};
const MessageReduxForm = reduxForm({
  form: 'message',
})(MessageForm);

const MessageContainer = (props) => {
  let NewMessage = props.dialogs.map((m) => (
    <NewMess key={m.id}>{m.message}</NewMess>
  ));
  const onSubmit = (formData) => {
    props.addMessageThunk(formData.message);
  };
  return (
    <MessageContent>
      <MessageReduxForm onSubmit={onSubmit} />
      <div>{NewMessage}</div>
    </MessageContent>
  );
};

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs.dialogs,
  };
};
export default connect(mapStateToProps, { addMessageThunk })(MessageContainer);
