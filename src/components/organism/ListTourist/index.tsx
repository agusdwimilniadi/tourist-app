import { useEffect, useState } from 'react';
import CardTourist from '../../molecules/CardTourist';
import { axiosInstance } from '../../../utils/axiosInstance';
import { useAuthHeader } from 'react-auth-kit';
import { IDataTourist } from '../../../utils/interface';
import CardTouristSkeleton from '../../molecules/CardTourist/CardTouristSkeleton';
import Button from '../../atoms/Button';

const ListTourist = () => {
  const [dataTourist, setDataTourist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const authHeader = useAuthHeader();
  const getData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axiosInstance.get(`/Tourist?page=${page}`, {
        headers: {
          Authorization: authHeader(),
        },
      });
      setDataTourist(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleNextPage = () => {
    setPage(page + 1);
    getData();
  };
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      getData();
    }
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 rounded-lg">
        {isLoading ? (
          <>
            <CardTouristSkeleton />
            <CardTouristSkeleton />
          </>
        ) : (
          dataTourist.map((item: IDataTourist) => (
            <CardTourist key={item.id} data={item} />
          ))
        )}
      </section>
      <section>
        <div className="flex items-center justify-between my-10">
          <Button
            onClick={handlePrevPage}
            className="w-[100px] bg-primary-1 text-white rounded py-1"
          >
            Prev
          </Button>
          <div>Page {page}</div>
          <Button
            onClick={handleNextPage}
            className="w-[100px] bg-primary-1 text-white rounded py-1"
          >
            Next
          </Button>
        </div>
      </section>
    </>
  );
};

export default ListTourist;
