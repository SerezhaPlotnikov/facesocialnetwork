import React from "react";
import {InfoBox, PhotoUsers} from "./ProfileInfoStyled";
import UsersPhoto from "../../../../../assets/userphoto.png";
import Preloader from "../../../../common/Preloader/Preloader";

const ProfileInfo = props => {
    if (!props.profile) {
        return <Preloader/>;
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