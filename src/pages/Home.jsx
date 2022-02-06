import PostList from '../components/PostList.jsx'
import Header from '../components/Header.jsx'

const Home = ({posts}) => {
    return (
        <div>
            <Header title={'Home page'}/>
            <PostList posts={posts}/>
        </div>
    )
}

export default Home;