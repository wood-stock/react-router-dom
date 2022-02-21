import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate(); //вместо useHistory для навигации по истории
  const goBack = () => navigate(-1); //на 1 шаг назад, можно указать конкретный адрес, но это можно и link
  // const goHome = () => navigate('/', { replace: true, state: {} }); //если передаем адрес, то можем вторым параметром пердать объект с replace - false по умолчанию если true то это движение не запишется в истории. И state можем туда передать что угодно

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);
  return (
    <>
      {post && (
        <>
          <button onClick={goBack}>назад</button>
          {/* фу так делать - navigate('/') используй Link */}
          {/* <button onClick={goHome}>домой</button> */}
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/blog/${id}/edit`}>Edit</Link>
        </>
      )}
    </>
  );
};

export default PostPage;
