import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Создать пост</h1>
      <button onClick={() => signOut(() => navigate('/', { replace: true }))}>
        Log out
      </button>
    </div>
  );
};

export default CreatePost;
