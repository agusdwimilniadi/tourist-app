import HeaderText from '../../components/atoms/HeaderText';
import AddTourist from '../../components/organism/AddTourist';
import Jumbotron from '../../components/organism/Jumbotron';
import ListTourist from '../../components/organism/ListTourist';

const Home = () => {
  return (
    <>
      <Jumbotron
        imgUrl="/assets/images/img-jumbotron.png"
        text="Welcome to TouristApp"
      />
      <HeaderText text="Tourist Data" />
      <AddTourist />
      <ListTourist />
    </>
  );
};

export default Home;
