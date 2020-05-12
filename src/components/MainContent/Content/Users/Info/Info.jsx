import React from "react";
import {InfoBox, InfoButton, PhotoUsers} from "./InfoStyled";
import UsersPhoto from "../../../../../assets/userphoto.png";
import Preloader from "../../../../common/Preloader/Preloader";
import {Link} from "react-router-dom";

const Info = props => {
  if (props.users.length === 0) {
    props.getUsers(props.page, props.count);
  }
  let pageCount = Math.ceil(props.totalCount / props.count);
  let onChangePage = page => {
    props.getUsers(page, props.count);
  };
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  let usersBox = props.users.map(u => (
    <InfoBox>
      <Link to={"/profile/" + u.id}>
        <PhotoUsers
          src={u.photos.small != null ? u.photos.small : UsersPhoto}
          alt={"UsersPhoto"}
        />
      </Link>
      <div>{u.name}</div>
      <div>{u.uniqueUrlName}</div>
      <div>{u.status}</div>
      <div>{u.id}</div>
      <div>
        {u.followed ? (
          <InfoButton
            disabled={props.isFollowing.some(id => id === u.id)}
            onClick={() => {
              props.Unfollow(u.id);
            }}
          >
            unfollow
          </InfoButton>
        ) : (
          <InfoButton
            disabled={props.isFollowing.some(id => id === u.id)}
            onClick={() => {
              props.Follow(u.id);
            }}
          >
            follow
          </InfoButton>
        )}
      </div>
    </InfoBox>
  ));
  return (
    <InfoBox>
      <InfoBox>{props.isFetching ? <Preloader /> : null}</InfoBox>
      {pages.map(p => {
        return <div onClick={() => onChangePage(p)}>{p}</div>;
      })}
      <InfoBox>{usersBox}</InfoBox>
    </InfoBox>
  );
};

export default Info;
