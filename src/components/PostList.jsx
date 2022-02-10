import style from "./css/PostList.module.css";
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'

const Posts = ({ posts }) => {

  const [searchValue, setSearchValue] = useState(0);
  const [checkSearch, setCheckSearch] = useState();

  const getSearchValue = () => {
    let value = +document.querySelector("#postSearch").value;
    setSearchValue(value);
    console.log(value)
  };

  // const checkSearchValue = () => {
  //   if(searchValue > 100 || searchValue < 1){
  //     setCheckSearch(false);
  //     alert("Please select a number between 1-100");
  //   } else {
  //     setCheckSearch(true);
  //   }
  //   console.log(checkSearch)
  // }

  return (
    <>
      <div className={style.searchTitleContainer}>
        <h3 className={style.postTitle}>List of posts</h3>
        <div className={style.searchContainer}>
          <label htmlFor="postSearch">Post#</label>
          <input
            type="number"
            onChange={getSearchValue}
            className={style.postInput}
            id="postSearch"
            placeholder="1-100"
          />
          <Link to={`/post/${searchValue}`}>
          <button
            className={style.postSearchBtn}
          >
            Search
          </button>
          </Link>
        </div>
      </div>
      <ul className={style.postListContainer}>
        {posts &&
          posts.map((post) => (
            <Link
              className={style.postLink}
              to={`/post/${post.id}`}
              state={{ postInfo: { ...post } }}
              key={post.id}
            >
              <li className={style.postContainer}>
                <p className={style.postTitleNumber}>Post #{post.id}</p>
                {post.title}
              </li>
            </Link>
          ))}
      </ul>
    </>
  );
};

export default Posts;
