import { useSelector } from "react-redux";
import { selectPostIds } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";
import { useGetPostsQuery } from "./postsSlice";



const PostsList = () => {
    const {
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostsQuery()
    
    // const posts = useSelector(selectAllPosts);
    const orderedPostIds = useSelector(selectPostIds)
    // const postsStatus = useSelector(getPostsStatus);
    // const error = useSelector(getPostsError);

    // useEffect(() => {
    //     if(postsStatus === 'idle'){
    //         dispatch(fetchPosts())
    //     }
    // }, [postsStatus, dispatch])

    // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    // const renderedPosts = orderedPosts.map(post => (
        
    // ))

    let content;
    // postsStatus === 'loading'
    // postsStatus === 'succeeded'
    // postsStatus === 'failed'
    if(isLoading) {
        content = <p>"Loading..."</p>;
    } else if (isSuccess) {
        // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId}/>)
    } else if(isError) {
        content = <p>{error}</p>;
    }


    return (
        <section>
            {content}
        </section>
    )
}

export default PostsList