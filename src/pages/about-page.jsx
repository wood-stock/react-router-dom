import { Outlet, Link } from 'react-router-dom';
const AboutPage = () => (
  <>
    <h1>About</h1>
    <ul>
      <li>
        <Link to='contacts'>Контакты</Link>
      </li>
      <li>
        <Link to='tituls'>Титулы</Link>
      </li>
    </ul>

    {/* <Routes>
      <Route path='contacts' element={<p>Контакты</p>} />
      <Route path='tituls' element={<p>Титулы</p>} />
    </Routes> */}
    <Outlet />
  </>
);
export default AboutPage;
