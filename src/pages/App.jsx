import { useSelector, useDispatch } from "react-redux";
import PostCard from "../components/PostCard";
import { useEffect } from "react";
import { getPostAction } from "../store/posts/action";
import CreatePost from "../components/CreatePost";

function App() {
  const posts = useSelector((state) => state?.post?.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostAction());
  }, [dispatch]);

  return (
    <>
      <h2 className="text-center text-xl mt-2">Welcome to the posts page!</h2>
      <CreatePost />
      <section>
        {posts.map((post) => (
          <PostCard data={post} key={post.id} />
        ))}
      </section>
    </>
  );
}

export default App;
