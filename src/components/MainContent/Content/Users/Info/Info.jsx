import React from 'react';
import ReactPaginate from 'react-paginate';
import {
  InfoBox,
  InfoButton,
  PhotoUsers,
  InfoContainer,
  Pag,
} from './InfoStyled';
import UsersPhoto from '../../../../../assets/userphoto.png';
import Preloader from '../../../../common/Preloader/Preloader';
import { Link } from 'react-router-dom';

const Info = (props) => {
  let pageCount = Math.ceil(props.totalCount / props.count);
  let onChangePage = ({ selected }) => {
    const sel = selected + 1; // костыль из-за того что список начинается с 0 а на сервере с 1
    props.getUsers(sel, props.count);
  };
  // let pages = [];
  // for (let i = 1; i <= pageCount; i++) {
  //   pages.push(i);
  // }
  return (
    <div>
      <Pag>{props.isFetching ? <Preloader /> : null}</Pag>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onChangePage}
        containerClassName={'pagination'}
        activeClassName={'active'}
        forcePage={props.page}
        initialPage={props.page}
      />
      {/* <Pag>
        {pages.map((p, ind) => {
          return (
            <div key={ind} onClick={() => onChangePage(p)}>
              {p}
            </div>
          );
        })}
      </Pag> */}
      <InfoBox>
        {props.users.map((u, ind) => (
          <InfoContainer key={ind}>
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
          </InfoContainer>
        ))}
      </InfoBox>
    </div>
  );
};

export default Info;
