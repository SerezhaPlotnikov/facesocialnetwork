import InputPost from "./InputPost/InputPost";
import {addPost, updateNewPostText} from "../../../../redux/posts_reducer";
import {connect} from "react-redux";

let mapStateToProps = state => {
    return {
        posts: state.news.posts,
        newPostText: state.news.newPostText
    };
};
// let mapDispatchToProps = dispatch => {
//   return {
//     AddPost: () => {
//       dispatch(addPost());
//     },
//     updateNewPostText: text => {
//       dispatch(updateNewPostText(text));
//     }
//   };
// };
const News = connect(mapStateToProps, {addPost, updateNewPostText})(
    InputPost
);

export default News;
