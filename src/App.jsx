import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/home-page';
import BlogPage from './pages/blog-page';
import AboutPage from './pages/about-page';
import NotFoundPage from './pages/nof-found-page';
import Layout from './components/layout';
import PostPage from './pages/post-page';
import CreatePost from './pages/create-post-page';
import EditPost from './pages/edit-post-page';
import LoginPage from './pages/login-page';
import RequireAuth from './hoc/RequireAuth';
import AuthProvider from './hoc/AuthProvider';
const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog/:id' element={<PostPage />} />
          <Route path='blog/:id/edit' element={<EditPost />} />
          <Route
            path='blog/new'
            element={
              <RequireAuth>
                <CreatePost />
              </RequireAuth>
            }
          />
          <Route path='about' element={<AboutPage />}>
            {/* если роуты вложены здесь в route, то path='about/*' не нужен */}
            <Route path='contacts' element={<p>Контакты</p>} />
            <Route path='tituls' element={<p>Титулы</p>} />
          </Route>
          <Route path='about-us' element={<Navigate to='/about' replace />} />
          {/* Navigate для переадресации replace чтоб не отображать переадресацию в истории*/}
          <Route path='login' element={<LoginPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};
export default App;
