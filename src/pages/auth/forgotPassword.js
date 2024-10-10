import React from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ForgotPassword = () => {
  const navigate = useNavigate();

  // Formik validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
  });

  // Formik form handler
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form Submitted:', values);
      // navigate("/");
    },
  });

  return (
    <>
      <Box className="auth-wrapper relative">
        <Container>
          <Stack
            gap={2}
            className="relative"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h1"
              component="h1"
              className="primary-text fw-600"
            >
              Logo
            </Typography>
            <Paper className="paper-ui">
              <form onSubmit={formik.handleSubmit}>
                <Stack gap={2} p={2}>
                  <Box>
                    <Typography
                      variant="h1"
                      component="h1"
                      className="primary-text fw-600"
                    >
                      Forgot Password
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      className="para-text"
                    >
                      Enter your email to reset your password.
                    </Typography>
                  </Box>
                  <Box className="field-wrapper">
                    <Typography variant="body1" component="label">
                      Email Id
                    </Typography>
                    <TextField
                      className="input-ui"
                      placeholder="Enter Email Id"
                      fullWidth
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Box>
                  <Box className="field-wrapper">
                    <Button
                      className="btn primary-btn w-full"
                      type="submit"
                      disabled={!formik.isValid || formik.isSubmitting}
                    >
                      Send
                    </Button>
                  </Box>
                </Stack>
              </form>
            </Paper>
            <Typography
              variant="body1"
              className="cursor-pointer green-hover"
              component="label"
              onClick={() => navigate('/')}
            >
              Back To Sign In
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default ForgotPassword;
