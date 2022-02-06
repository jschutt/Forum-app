import style from './css/PostInfo.module.css'

const PostInfo = ({ comments, postInfo }) => {
  return (
    <div>
      <h2>{postInfo.title}</h2>
      <p>{postInfo.body}</p>
      <div>
        {comments.map((comment, i) =>
          comment.postId === postInfo.id ? <div className={style.commentContainer} key={i}>
          <p>{comment.body}</p>
          <p>{comment.name}</p>
          <p>{comment.email}</p>
          </div>
          : null
        )}
      </div>
    </div>
  );
};

export default PostInfo;
