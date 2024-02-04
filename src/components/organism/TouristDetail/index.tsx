import { useParams } from 'react-router-dom';
import IdentityLabel from '../../atoms/IdentityLabel';
import Image from '../../atoms/Images';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../../../utils/axiosInstance';
import { useAuthHeader } from 'react-auth-kit';
import { IDataTourist } from '../../../utils/interface';
import date from 'date-and-time';

const TouristDetail = () => {
  const [dataTourist, setDataTourist] = useState<IDataTourist>();
  const params = useParams();
  const authHeader = useAuthHeader();

  const getData = async () => {
    try {
      const { data } = await axiosInstance.get(`/Tourist/${params.id}`, {
        headers: {
          Authorization: authHeader(),
        },
      });
      setDataTourist(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [params.id]);
  return (
    <section className="text-center mb-10">
      <Image
        src={dataTourist?.tourist_profilepicture || '#'}
        alt="img-tourist"
        className="w-40 rounded-full mx-auto mb-5"
      />
      <IdentityLabel label="Tourist Name" text={dataTourist?.tourist_name} />
      <IdentityLabel label="Tourist Email" text={dataTourist?.tourist_email} />
      <IdentityLabel
        label="Tourist Location"
        text={dataTourist?.tourist_location}
      />
      <IdentityLabel
        label="Tourist Registered at"
        text={
          dataTourist?.createdat
            ? date.format(new Date(dataTourist.createdat), 'DD MMMM YYYY')
            : 'N/A'
        }
      />
    </section>
  );
};

export default TouristDetail;
