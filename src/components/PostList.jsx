import { Link} from "react-router-dom";

const Posts = ({ posts }) => {
  return (
    <ul>
      {posts && posts.map((post) => (
        <li key={post.id}>
          <Link to={`/post/${post.id}`} state={{ postInfo: {...post}}}>
            {post.title}
            </Link>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
