import React from 'react';
import { InfoBox, InfoButton, PhotoUsers } from './InfoStyled';
import UsersPhoto from '../../../../../assets/userphoto.png';
import Preloader from '../../../../common/Preloader/Preloader';
import { Link } from 'react-router-dom';

const Info = (props) => {
  let pageCount = Math.ceil(props.totalCount / props.count);
  let onChangePage = (page) => {
    props.getUsers(page, props.count);
  };
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
    <InfoBox>
      <InfoBox>{props.isFetching ? <Preloader /> : null}</InfoBox>
      {pages.map((p, ind) => {
        return (
          <div key={ind} onClick={() => onChangePage(p)}>
            {p}
          </div>
        );
      })}
      {props.users.map((u, ind) => (
        <InfoBox key={ind}>
          <Link to={`/profile/${u.id}`}>
            <PhotoUsers
              src={u.photos.small != null ? u.photos.small : UsersPhoto}
              alt={'UsersPhoto'}
            />
          </Link>
          <div>{u.name}</div>
          <div>
            {u.followed ? (
              <InfoButton
                disabled={props.isFollowing.some((id) => id === u.id)}
                onClick={() => {
                  props.Unfollow(u.id);
                }}>
                Unfollow
              </InfoButton>
            ) : (
              <InfoButton
                disabled={props.isFollowing.some((id) => id === u.id)}
                onClick={() => {
                  props.Follow(u.id);
                }}>
                Follow
              </InfoButton>
            )}
          </div>
        </InfoBox>
      ))}
    </InfoBox>
  );
};

export default Info;
