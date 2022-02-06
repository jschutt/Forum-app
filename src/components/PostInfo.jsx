import style from './css/PostInfo.module.css'

const PostInfo = ({ comments, postInfo }) => {
  return (
    <>
      <h2>{postInfo.title}</h2>
      <p>{postInfo.body}</p>
      <>
        {comments.map((comment, i) =>
          comment.postId === postInfo.id ? <div className={style.commentContainer} key={i}>
          <p>{comment.body}</p>
          <p>{comment.name}</p>
          <p>{comment.email}</p>
          </div>
          : null
        )}
      </>
    </>
  );
};

export default PostInfo;
