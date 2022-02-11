import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/home-page';
import BlogPage from './pages/blog-page';
import AboutPage from './pages/about-page';
import NotFoundPage from './pages/nof-found-page';
import Layout from './components/layout';
import PostPage from './pages/post-page';
import CreatePost from './pages/create-post-page';
import EditPost from './pages/edit-post-page';
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path='blog' element={<BlogPage />}></Route>
          <Route path='blog/:id' element={<PostPage />}></Route>
          <Route path='blog/:id/edit' element={<EditPost />}></Route>
          <Route path='blog/new' element={<CreatePost />}></Route>
          <Route path='about' element={<AboutPage />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </>
  );
};
export default App;
