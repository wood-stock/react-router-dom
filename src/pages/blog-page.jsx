import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import BlogFilter from '../components/BlogFilter';
const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  // const useLocation = useLocation(); //объет, содержит hash,key,pathname,search,state
  const [searchParams, setSearchParams] = useSearchParams();
  //useSearchParams хук для работы с поисковыми запросами через URLSearchParams
  //через первую сущность мы получаем доступ к методам URLSearchParams
  //через вторую передаем гет запрос в объекте ключ - значение
  const postQuery = searchParams.get('post') || '';
  //получаем доступ к гет запросу из адресной строки
  const latest = searchParams.has('latest');
  //проверяем есть ли такой параметр в запросе (тк чекбокс true/false)
  const startsFrom = latest ? 80 : 1;

  return (
    <>
      <h1>Blog</h1>
      <BlogFilter
        setSearchParams={setSearchParams}
        postQuery={postQuery}
        latest={latest}
      />
      <Link to='/blog/new'>Add new post</Link>
      {posts
        .filter(
          (post) => post.title.includes(postQuery) && post.id >= startsFrom
        )
        .map(({ id, title }) => (
          <Link key={id} to={`/blog/${id}`}>
            <li>{title}</li>
          </Link>
        ))}
    </>
  );
};
export default BlogPage;
