import PostList from '../components/PostList.jsx'
import Header from '../components/Header.jsx'


const Home = ({posts}) => {
    return (
        <>
            <Header title={`The Cat's Forum`}/>
            <PostList posts={posts}/>
        </>
    )
}

export default Home;