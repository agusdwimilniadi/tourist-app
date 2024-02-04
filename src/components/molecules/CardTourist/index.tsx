import { useState } from 'react';
import Button from '../../atoms/Button';
import IdentityLabel from '../../atoms/IdentityLabel';
import Image from '../../atoms/Images';
import Modal from '../../atoms/Modal';
import { IDataTourist } from '../../../utils/interface';
import date from 'date-and-time';
import { axiosInstance } from '../../../utils/axiosInstance';
import { useAuthHeader } from 'react-auth-kit';
import toast from 'react-hot-toast';
import InputForm from '../../atoms/InputForm';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

const CardTourist = ({ data }: { data: IDataTourist }) => {
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const token = useAuthHeader();
  // HANDLE UPDATE
  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await axiosInstance
        .delete(`/Tourist/${data.id}`, {
          headers: {
            Authorization: token(),
          },
        })
        .then(() => {
          toast.success('Tourist deleted successfully');
          setIsOpenDelete(!isOpenDelete);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        });
    } catch (error) {
      console.log(error);
      toast.error('Error deleting tourist');
    } finally {
      setIsLoading(false);
    }
  };

  // HANDLE DELETE
  const formik = useFormik({
    initialValues: {
      tourist_name: data.tourist_name,
      tourist_email: data.tourist_email,
      tourist_location: data.tourist_location,
    },
    onSubmit: async (values) => {
      try {
        await axiosInstance
          .put(`/Tourist/${data.id}`, values, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: token(),
            },
          })
          .then(() => {
            toast.success('Tourist added successfully');
            setIsOpenUpdate(false);
            formik.resetForm();
          })
          .then(() => {
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          });
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <div className=" shadow-lg flex-row sm:flex-row sm:items-center justify-start p-3 gap-3">
        <div>
          <Image
            src={data.tourist_profilepicture}
            alt="profile-user"
            className="w-20 rounded-full mx-auto"
          />
        </div>
        <div className="flex flex-col gap-4 mx-10">
          <div className="flex flex-col gap-4">
            <IdentityLabel label="Name" text={data.tourist_name} />
            <IdentityLabel label="Location" text={data.tourist_location} />
            <IdentityLabel
              label="Registered at"
              text={`${date.format(new Date(data.createdat), 'DD MMMM YYYY')}`}
            />
          </div>

          <div className="flex gap-3">
            <Button
              variant="primary"
              onClick={() => setIsOpenUpdate(!isOpenUpdate)}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={() => setIsOpenDelete(!isOpenDelete)}
            >
              Delete
            </Button>
          </div>
          <div>
            <Link to={`/tourism/${data.id}`}>
              <Button>Detail</Button>
            </Link>
          </div>
        </div>
      </div>
      {/* MODAL DELETE */}
      <Modal
        title="Delete Tourist"
        isOpen={isOpenDelete}
        openModal={() => setIsOpenDelete(!isOpenDelete)}
      >
        Are you sure to delete{' '}
        <span className="font-semibold">{data.tourist_name}</span> ?
        <div className="flex gap-3 mt-5">
          <Button variant="primary" onClick={handleDelete}>
            {isLoading ? 'Deleting...' : 'Yes'}
          </Button>
          <Button
            variant="danger"
            onClick={() => setIsOpenDelete(!isOpenDelete)}
          >
            No
          </Button>
        </div>
      </Modal>

      {/* MODAL UPDATE */}
      <Modal
        title="Edit Tourist"
        openModal={() => setIsOpenUpdate(!isOpenUpdate)}
        isOpen={isOpenUpdate}
      >
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
          <InputForm
            label="Name"
            name="tourist_name"
            type="text"
            required
            placeholder="Add tourist name"
            onChange={formik.handleChange}
            value={formik.values.tourist_name}
          />
          <InputForm
            label="Email"
            name="tourist_email"
            type="email"
            required
            placeholder="Add tourist email"
            onChange={formik.handleChange}
            value={formik.values.tourist_email}
          />
          <InputForm
            label="Location"
            name="tourist_location"
            type="text"
            required
            placeholder="Add tourist location"
            onChange={formik.handleChange}
            value={formik.values.tourist_location}
          />

          <Button
            type={formik.isSubmitting ? 'button' : 'submit'}
            variant="primary"
          >
            {formik.isSubmitting ? 'Please wait...' : 'Update'}
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default CardTourist;
