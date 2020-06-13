import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { MessageContent, NewMess } from './AddMessageStyled';

const AddMessage = (props) => {
	let NewMessage = props.dialogs.map((m) => (
		<NewMess key={m.id}>{m.message}</NewMess>
	));
	const onSubmit = (formData) => {
		// MessageThunk(formData)
	};
	return (
		<MessageContent>
			<MessageReduxForm onSubmit={onSubmit} />
			<div>{NewMessage}</div>
		</MessageContent>
	);
};

const MessageInput = (props) => {
	const { handleSubmit, pristine, submitting } = props;
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Field
					component={'input'}
					type='text'
					name={'message'}
					placeholder='New Message'
				/>
				<button disabled={pristine || submitting} type='button'>
					Add Post
				</button>
			</form>
		</div>
	);
};
const MessageReduxForm = reduxForm({
	form: 'message',
})(MessageInput);

export default AddMessage;
