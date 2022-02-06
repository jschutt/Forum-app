import PostList from '../components/PostList.jsx'
import Header from '../components/Header.jsx'


const Home = ({posts}) => {
    return (
        <>
            <Header title={'Home page'}/>
            <PostList posts={posts}/>
        </>
    )
}

export default Home;