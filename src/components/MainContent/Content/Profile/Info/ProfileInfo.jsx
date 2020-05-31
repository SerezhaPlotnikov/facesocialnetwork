import React, { useEffect, useState } from 'react';
import { InfoBox, PhotoUsers } from './ProfileInfoStyled';
import UsersPhoto from '../../../../../assets/userphoto.png';
import Preloader from '../../../../common/Preloader/Preloader';
import { Field, reduxForm } from 'redux-form';

const Profile = (props) => {
	const { profile, isOwner } = props;
	const [status, setStatus] = useState(props.status);
	const [editStatus, setEditStatus] = useState(false);
	const [editProfile, setEditProfile] = useState(false);
	useEffect(() => setStatus(props.status), [props.status]);
	let updateStatusFunc = () => {
		setEditStatus(false);
		if (status !== props.status) {
			props.updateStatus(status);
		}
	};
	let onStatusChange = (e) => {
		setStatus(e.target.value);
	};
	const onSubmit = (formData) => {
		console.log(formData);
		// props.updateProfile(formData);
	};
	if (!profile) {
		return <Preloader />;
	}
	return (
		<InfoBox>
			<div>
				<PhotoUsers
					src={profile.photos.small != null ? profile.photos.small : UsersPhoto}
					alt={UsersPhoto}
				/>
			</div>
			<div>
				{!editStatus ? (
					<div onDoubleClick={() => setEditStatus(true)}>
						{status !== null ? status : 'Add status'}
					</div>
				) : (
					<div>
						<input
							autoFocus={true}
							onBlur={updateStatusFunc}
							onChange={onStatusChange}
							value={status}
						/>
					</div>
				)}
			</div>
			{!isOwner && !editProfile ? (
				<div>
					<button onClick={() => setEditProfile(true)}>Edit Profile</button>
					<UserInfo {...props} />
				</div>
			) : (
				<EditProfileReduxForm onSubmit={onSubmit} />
			)}
		</InfoBox>
	);
};

const UserInfo = (props) => {
	const { profile } = props;
	return (
		<div>
			<div>{profile.aboutMe}</div>
			<div>{profile.userId}</div>
			<div>{profile.lookingForAJob}</div>
			<div>{profile.lookingForAJobDescription}</div>
			<div>{profile.fullName}</div>
			<div>{profile.contacts.github}</div>
			<div>{profile.contacts.vk}</div>
			<div>{profile.contacts.facebook}</div>
			<div>{profile.contacts.instagram}</div>
			<div>{profile.contacts.twitter}</div>
			<div>{profile.contacts.website}</div>
			<div>{profile.contacts.youtube}</div>
			<div>{profile.contacts.mainLink}</div>
		</div>
	);
};

const ProfileEditer = (props) => {
	const { handleSubmit } = props;
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Field
					component='input'
					name='fullName'
					type='text'
					placeholder='Full name'
				/>
				<Field component='input' name='lookingForAJob' type='checkbox' />
				<Field
					component='input'
					name='lookingForAJobDescription'
					type='text'
					placeholder='lookingForAJobDescription name'
				/>
				<Field
					component='input'
					name='lookingForAJob'
					type='text'
					placeholder='Full name'
				/>
				<button>Update profile</button>
			</form>
		</div>
	);
};

const EditProfileReduxForm = reduxForm({
	form: 'updateProfile',
})(ProfileEditer);

export default Profile;
