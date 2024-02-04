import { useState } from 'react';
import Button from '../../atoms/Button';
import Modal from '../../atoms/Modal';
import InputForm from '../../atoms/InputForm';
import { useFormik } from 'formik';
import { axiosInstance } from '../../../utils/axiosInstance';
import { useAuthHeader } from 'react-auth-kit';
import toast from 'react-hot-toast';

const AddTourist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = useAuthHeader();
  const formik = useFormik({
    initialValues: {
      tourist_name: '',
      tourist_email: '',
      tourist_location: '',
    },
    onSubmit: async (values) => {
      try {
        await axiosInstance
          .post('/Tourist', values, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: token(),
            },
          })
          .then(() => {
            toast.success('Tourist added successfully');
            setIsOpen(false);
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
    <section className="mb-10 flex items-center justify-end">
      <Modal
        title="Add Tourist"
        openModal={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
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
            {formik.isSubmitting ? 'Please wait...' : 'Submit'}
          </Button>
        </form>
      </Modal>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-fit bg-primary-1 text-white p-2 rounded-lg"
      >
        Add Tourist
      </Button>
    </section>
  );
};

export default AddTourist;
