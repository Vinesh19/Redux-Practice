// "id": 1,
//    "title": "His mother had always taught him",
//    "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto.",
//    "tags": [
//     "history",
//     "american",
//     "crime"
//    ],
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPostAction } from "../store/posts/action";

const CreatePost = () => {
  const post = {
    userId: "",
    title: "",
    body: "",
    tags: [],
  };

  const [postData, setPostData] = useState(post);
  const [toggleButton, setToggleButton] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => setToggleButton(!toggleButton);

  const handleCreatePost = (e) => {
    e.preventDefault();
    const post = {...postData};
    dispatch(createPostAction(post));
    console.log("data", post);
  };

  const handleTags = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const tags = value.split(',').map(tag => tag.trim());
    setPostData({
      ...postData,
      [name]: tags,
    })
  }

  const Form = () => {
    return (
      <div className="bg-slate-200 w-80 m-auto p-5">
        <h1 className="text-center">Add New Post</h1>
        <form className="flex flex-col justify-center items-center"
        onSubmit={handleCreatePost}>
          <label className="bg-transparent block">
            ID :
            <input
              type="number"
              name="userId"
              value={postData.userId}
              onChange={handleChange}
              className="bg-transparent m-2 border border-gray-500 ml-6"
            ></input>
          </label>

          <label>
            Title :
            <input
              type="text"
              name="title"
              value={postData.title}
              onChange={handleChange}
              className="bg-transparent m-2 border border-gray-500 ml-3"
            ></input>
          </label>

          <label>
            Body :
            <input
              type="text"
              name="body"
              value={postData.body}
              onChange={handleChange}
              className="bg-transparent m-2 border border-gray-500"
            ></input>
          </label>

          <label>
            Tags :
            <input
              type="text"
              name="tags"
              value={postData.tags.join(', ')}
              onChange={handleTags}
              className="bg-transparent m-2 border border-gray-500 ml-4"
            ></input>
          </label>

          <button type="submit" className="border border-green-600 p-1.5 m-2">
            Create Post
          </button>
        </form>
      </div>
    );
  };

  return (
    <div>
      <button onClick={handleClick}
      className="text-white bg-green-500 m-2 p-1.5"
      >Create</button>
      {toggleButton && <Form />}
    </div>
  );
};

export default CreatePost;
