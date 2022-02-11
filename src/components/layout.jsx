import { NavLink, Outlet } from 'react-router-dom';
import CustomLink from './custom-link';
const Layout = () => (
  <>
    <header>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <CustomLink to='/blog'>Blog</CustomLink>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? 'customActive' : '')}
        >
          About
        </NavLink>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>

    <footer>2022</footer>
  </>
);
export default Layout;
