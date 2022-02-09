import { useParams, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import PostInfo from "../components/PostInfo.jsx";
import style from '../components/css/PostInfo.module.css'

const Post = (props) => {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    let fetchData = async (url, myState) => {
      let response = await fetch(url);
      let data = await response.json();
      myState(data);
    };

    if (!location.state) {
      fetchData(`https://jsonplaceholder.typicode.com/posts/${id}`, setPost);
    } else {
      setPost(location.state.postInfo);
    }
    fetchData(
      `https://jsonplaceholder.typicode.com/comments`,
      setComments
    );
  }, []);

  return (
    <>
      <Header title={`Cat post #${id}`} />
      <Link to="/">
        <button className={style.backBtn}>Back to posts</button>
      </Link>
      <PostInfo postInfo={post} comments={comments} />
    </>
  );
};

export default Post;
