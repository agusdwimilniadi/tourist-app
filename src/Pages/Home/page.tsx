import { useSignOut } from 'react-auth-kit';

const Home = () => {
  const signOut = useSignOut();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default Home;
