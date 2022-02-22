import { Link, useMatch } from 'react-router-dom';
const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  }); //возвращает true если ссылка совпадает (активна)
  return (
    <Link to={to} {...props} style={{ color: match ? 'red' : 'white' }}>
      {children}
    </Link>
  );
};
export default CustomLink;
