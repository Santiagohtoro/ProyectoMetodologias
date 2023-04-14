import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';


const Page = () => {


  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      userName: '',
      name: '',
      cc: '',
      password: '',
      submit: null
    },
    validationSchema: Yup.object({
      userName: Yup
        .string()
        .max(255)
        .required('Nombre de usuario requerido'),
      name: Yup
        .string()
        .max(255)
        .required('Nombre requerido'),
      cc: Yup
        .string()
        .min(6)
        .required('Cedula de ciudadania requerida'),
      password: Yup
        .string()
        .min(7)
        .max(255)
        .required('Contraseña requerida')
    }),
    onSubmit: async (values, helpers) => {
      let val = {
        identification: values.cc,
        name: values.name, 
        password: values.password,
        username: values.userName
      }
      try { await fetch("http://localhost:8080/auth/signup",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(val)
            });
        router.push('/');
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  return (
    <>
      <Head>
        <title>
          Registro | Net SysInformation
        </title>
      </Head>
      <Box
        sx={{
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%'
          }}
        >
          <div>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography variant="h4">
                Register
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                Already have an account?
                &nbsp;
                <Link
                  component={NextLink}
                  href="/"
                  underline="hover"
                  variant="subtitle2"
                >
                  Log in
                </Link>
              </Typography>
            </Stack>
            <form
              noValidate
              onSubmit={formik.handleSubmit}
            >
              <Stack spacing={3}>
                <TextField
                  error={!!(formik.touched.userName && formik.errors.userName)}
                  fullWidth
                  helperText={formik.touched.userName && formik.errors.userName}
                  label="Nombre de usuario"
                  name="userName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.userName}
                />
                <TextField
                  error={!!(formik.touched.name && formik.errors.name)}
                  fullWidth
                  helperText={formik.touched.name && formik.errors.name}
                  label="Nombre"
                  name="name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                <TextField
                  error={!!(formik.touched.cc && formik.errors.cc)}
                  fullWidth
                  helperText={formik.touched.cc && formik.errors.cc}
                  label="Cedula de Ciudadania"
                  name="cc"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.cc}
                />

                <TextField
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Contraseña"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />
              </Stack>
              {formik.errors.submit && (
                <Typography
                  color="error"
                  sx={{ mt: 3 }}
                  variant="body2"
                >
                  {formik.errors.submit}
                </Typography>
              )}
              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                variant="contained"
              >
                Continue
              </Button>
            </form>
          </div>
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <AuthLayout>
    {page}
  </AuthLayout>
);

export default Page;
