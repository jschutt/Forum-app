import style from './css/PostList.module.css'
import { Link} from "react-router-dom";


const Posts = ({ posts }) => {
  return (
    <>
    <h3 className={style.postTitle}>List of posts</h3>
    <ul className={style.postListContainer}>
      {posts && posts.map((post) => (
        <li className={style.postContainer} key={post.id}>
          <Link className={style.postLink} to={`/post/${post.id}`} state={{ postInfo: {...post}}}>
            {post.title}
            </Link>
        </li>
      ))}
    </ul>
    </>
  );
};

export default Posts;
