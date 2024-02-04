import { useAuthHeader, useAuthUser } from 'react-auth-kit';
import HeaderText from '../../components/atoms/HeaderText';
import IdentityLabel from '../../components/atoms/IdentityLabel';
import Jumbotron from '../../components/organism/Jumbotron';
import Image from '../../components/atoms/Images';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../../utils/axiosInstance';

interface UserData {
  avatar: string;
}

const Profile = () => {
  const [dataUser, setDataUser] = useState<UserData | null>(null);

  const user = useAuthUser();
  const authHeader = useAuthHeader();

  const getData = async () => {
    try {
      const { data } = await axiosInstance.get(`/users/${user()?.id}`, {
        headers: {
          Authorization: authHeader(),
        },
      });
      console.log(data);
      setDataUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Jumbotron
        imgUrl="/assets/images/img-jumbotron.png"
        text="My Profile Page"
      />
      <HeaderText text="My Profile" />
      <section className="text-center">
        {dataUser && (
          <Image
            src={dataUser.avatar || '#'}
            alt="img-tourist"
            className="w-40 rounded-full mx-auto mb-5"
          />
        )}
        <IdentityLabel label="Name" text={user()?.name} />
        <IdentityLabel label="Email" text={user()?.email} />
      </section>
    </>
  );
};

export default Profile;
