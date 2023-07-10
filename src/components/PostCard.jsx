const PostCard = (props) => {
    const { data } = props;
  
    return (
      <div className='border rounded p-4 m-4'>
        <h3 className='font-bold'>{data.title}</h3>
        <p className='my-4'>{data.body}</p>
        <p className=''>
          {data.tags.map((tag) => (
            <span key={tag} className='bg-green-200 rounded-full px-2 py-1 mx-1'>
              {tag}
            </span>
          ))}
        </p>
      </div>
    );
  };
  
  export default PostCard;