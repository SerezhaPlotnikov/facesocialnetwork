import React, { useEffect, useState } from "react";
import { InfoBox, PhotoUsers } from "./ProfileInfoStyled";
import UsersPhoto from "../../../../../assets/userphoto.png";
import Preloader from "../../../../common/Preloader/Preloader";
// import {Redirect} from "react-router-dom";

const ProfileInfo = props => {
  // if(!props.isAuth){return <Redirect to={"/login"}/>}
  const [status, setStatus] = useState(props.status);
  const [editMode, setEditMode] = useState(false);
  useEffect(() => setStatus(props.status), [props.status]);
  let updateStatusFunc = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  let onStatusChange = e => {
    setStatus(e.target.value);
  };
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <InfoBox>
      <div>
        <PhotoUsers
          src={
            props.profile.photos.small != null
              ? props.profile.photos.small
              : UsersPhoto
          }
          alt={UsersPhoto}
        />
      </div>
      <div>
        {!editMode ? (
          <div onDoubleClick={() => setEditMode(true)}>
            {status || "Add status"}
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
      <div>{props.profile.aboutMe}</div>
      <div>{props.profile.userId}</div>
      <div>{props.profile.lookingForAJob}</div>
      <div>{props.profile.lookingForAJobDescription}</div>
      <div>{props.profile.fullName}</div>
      <div>{props.profile.contacts.github}</div>
      <div>{props.profile.contacts.vk}</div>
      <div>{props.profile.contacts.facebook}</div>
      <div>{props.profile.contacts.instagram}</div>
      <div>{props.profile.contacts.twitter}</div>
      <div>{props.profile.contacts.website}</div>
      <div>{props.profile.contacts.youtube}</div>
      <div>{props.profile.contacts.mainLink}</div>
    </InfoBox>
  );
};

export default ProfileInfo;
