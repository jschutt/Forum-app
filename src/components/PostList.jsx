import style from "./css/PostList.module.css";
import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
  return (
    <>
      <h3 className={style.postTitle}>List of posts</h3>
      <ul className={style.postListContainer}>
        {posts &&
          posts.map((post) => (
            <Link
              className={style.postLink}
              to={`/post/${post.id}`}
              state={{ postInfo: { ...post } }} key={post.id}
            >
              <li className={style.postContainer}>
                <strong>#{post.id}</strong> {post.title}
              </li>
            </Link>
          ))}
      </ul>
    </>
  );
};

export default Posts;
