import HeaderText from '../../components/atoms/HeaderText';
import Jumbotron from '../../components/organism/Jumbotron';
import TouristDetail from '../../components/organism/TouristDetail';

const Tourism = () => {
  return (
    <>
      <Jumbotron
        imgUrl="/assets/images/img-jumbotron.png"
        text="Detail Tourism Page"
      />
      <HeaderText text="My Tourism" />
      <TouristDetail />
    </>
  );
};

export default Tourism;
