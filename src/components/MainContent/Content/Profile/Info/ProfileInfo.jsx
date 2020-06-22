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
	const onSubmit = (profile) => {
		props.updateProfile(profile);
		setEditProfile(false);
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
						{status ? status : 'Add status'}
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
			{isOwner && !editProfile ? (
				<button onClick={() => setEditProfile(true)}>Edit Profile</button>
			) : (
				<div></div> //костяль
			)}
			{!editProfile ? (
				<UserInfo {...props} />
			) : (
				<EditProfileReduxForm
					initialValues={profile}
					profile={profile}
					onSubmit={onSubmit}
				/>
			)}
		</InfoBox>
	);
};

const UserInfo = (props) => {
	const { profile } = props;
	return (
		<div>
			{/* {Object.keys(profile).map((key) => {
				return <div>{key}</div>;
			})} */}
			<div>
				<b>About me: </b>
				{profile.aboutMe}
			</div>
			<div>
				<b>User Id: </b>
				{profile.userId}
			</div>
			<div>
				<b>Looking for a job: </b>
				{profile.lookingForAJob}
			</div>
			<div>
				<b>Description: </b>
				{profile.lookingForAJobDescription}
			</div>
			<div>
				<b>Full name: </b>
				{profile.fullName}
			</div>
			<div>
				<b>GitHub: </b>
				{profile.contacts.github}
			</div>
			<div>
				<b>Vk: </b>
				{profile.contacts.vk}
			</div>
			<div>
				<b>Facebook: </b>
				{profile.contacts.facebook}
			</div>
			<div>
				<b>Insta: </b>
				{profile.contacts.instagram}
			</div>
			<div>
				<b>Twitter: </b>
				{profile.contacts.twitter}
			</div>
			<div>
				<b>Website: </b>
				{profile.contacts.website}
			</div>
			<div>
				<b>Youtube: </b>
				{profile.contacts.youtube}
			</div>
			<div>
				<b>mainLink: </b>
				{profile.contacts.mainLink}
			</div>
		</div>
	);
};

const ProfileEditer = (props) => {
	const { handleSubmit, profile } = props;
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
					name='aboutMe'
					type='text'
					placeholder='About Me'
				/>
				<div>
					<b>Contacts: </b>
					{Object.keys(profile.contacts).map((k, ind) => {
						return (
							<Field
								key={ind}
								component='input'
								name={'contacts.' + k}
								type='text'
								placeholder={k}
							/>
						);
					})}
				</div>

				<button>Update profile</button>
			</form>
		</div>
	);
};

const EditProfileReduxForm = reduxForm({
	form: 'updateProfile',
})(ProfileEditer);

export default Profile;
