import { useFormik } from 'formik';
import Button from '../../../components/atoms/Button';
import InputForm from '../../../components/atoms/InputForm';
import AuthLayout from '../../../components/template/AuthLayout';
import { axiosInstance } from '../../../utils/axiosInstance';
import { IAPIResponse } from '../../../utils/interface';
import { useIsAuthenticated, useSignIn } from 'react-auth-kit';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

interface IAPILogin {
  $id: string;
  Id: string;
  Name: string;
  Email: string;
  Token: string;
}
const Login = () => {
  const signIn = useSignIn();
  const isLoggedIn = useIsAuthenticated();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        await axiosInstance
          .post('/authaccount/login', values)
          .then((res: { data: IAPIResponse<IAPILogin> }) => {
            signIn({
              authState: {
                id: res.data?.data.Id,
                name: res.data?.data.Name,
                email: res.data?.data.Email,
              },
              expiresIn: 3600,
              token: res.data?.data.Token,
              tokenType: 'Bearer',
            });
          })
          .then(() => {
            toast('Login success', {
              icon: '👏',
              style: {
                borderRadius: '10px',
              },
            });
          })
          .then(() => {
            setTimeout(() => {
              window.location.href = '/';
            }, 500);
          });
      } catch (error) {
        console.log(error);
        toast('Login failed: Email or password is incorrect', {
          icon: '❌',
          style: {
            borderRadius: '10px',
          },
        });
      }
    },
  });
  if (isLoggedIn()) {
    return <Navigate to="/" replace />;
  }

  return (
    <AuthLayout isLogin>
      <form
        className="border p-5 rounded-lg flex flex-col gap-3"
        onSubmit={formik.handleSubmit}
      >
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
          {formik.isSubmitting ? 'Please wait...' : 'Login'}
        </Button>
      </form>
    </AuthLayout>
  );
};

export default Login;
