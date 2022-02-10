import style from './css/PostInfo.module.css'
import {useParams} from 'react-router-dom'

const PostInfo = ({ comments, postInfo }) => {

  const {id} = useParams();

  return (
    <>
    {id < 1 || id > 100 ? <h2 className={style.errorPostTitle}>Post couldn't be found, try searching for something else.</h2> : null}
    <div className={id < 1 || id > 100 ? style.mainPostContainerHide : style.mainPostContainer}>
    <h2 className={style.mainTitle}>{postInfo.title}</h2>
      <p className={style.mainBody}>{postInfo.body}</p>
      <div className={style.authorImg}>
      <img src="https://placekitten.com/110/110" alt="" />
      <p className={style.authorTitle}>Author #{postInfo.userId}</p>
    </div>
    </div>
    <h3 className={style.commentTitle}>{id < 1 || id > 100 ? "" : "Comments"}</h3>
      <>
        {comments.map((comment, i) =>
          comment.postId === postInfo.id ? <div className={style.commentContainer} key={i}>
          <p className={style.commentBody}>{comment.body}</p>
          <p className={style.commentName}><strong>Name: </strong>{comment.name}</p>
          <p className={style.commentEmail}><strong>Email: </strong>{comment.email}</p>
          <img src="https://placekitten.com/90/90" alt="Profile picture" className={style.commentImg}/>
          </div>
          : null
        )}
      </>
    </>
  );
};

export default PostInfo;
