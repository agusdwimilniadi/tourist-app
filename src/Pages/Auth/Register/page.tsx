import { useFormik } from 'formik';
import Button from '../../../components/atoms/Button';
import InputForm from '../../../components/atoms/InputForm';
import AuthLayout from '../../../components/template/AuthLayout';
import { axiosInstance } from '../../../utils/axiosInstance';
import { useIsAuthenticated } from 'react-auth-kit';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

const Register = () => {
  const isLoggedIn = useIsAuthenticated();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
    },
    onSubmit: async (values) => {
      try {
        await axiosInstance
          .post('/authaccount/registration', values)
          .then(() => {
            toast('Register success', {
              icon: '👏',
              style: {
                borderRadius: '10px',
              },
            });
          })
          .then(() => {
            setTimeout(() => {
              window.location.href = '/login';
            }, 500);
          });
      } catch (error) {
        console.log(error);
        toast('Register failed: Email or User is already exist', {
          icon: '❌',
          style: {
            borderRadius: '10px',
          },
        });
      }
    },
  });
  if (isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }
  return (
    <AuthLayout>
      <form
        className="border p-5 rounded-lg flex flex-col gap-3"
        onSubmit={formik.handleSubmit}
      >
        <InputForm
          type="text"
          placeholder="Enter your Name"
          required
          name="name"
          label="Name"
          onChange={formik.handleChange}
          value={formik.values.name}
          autoComplete="off"
        />
        <InputForm
          type="email"
          placeholder="Enter your email"
          required
          name="email"
          label="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          autoComplete="off"
        />
        <InputForm
          type="password"
          label="Password"
          name="password"
          required
          placeholder="Enter your password"
          onChange={formik.handleChange}
          value={formik.values.password}
          autoComplete="off"
        />
        <Button type={formik.isSubmitting ? 'button' : 'submit'}>
          {formik.isSubmitting ? 'Please wait...' : 'Register'}
        </Button>
      </form>
    </AuthLayout>
  );
};

export default Register;
