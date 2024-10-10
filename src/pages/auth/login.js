import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EyeOff from '../../assets/icons/eyeOff';
import Eye from '../../assets/icons/eye';
import { login } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import {
  getRememberMeStorage,
  removeRememberMeStorage,
  setRememberMeStorage,
} from '../../utils/rememberMe';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const storedCredentials = getRememberMeStorage();
  const formik = useFormik({
    initialValues: {
      username: storedCredentials?.email || '',
      password: storedCredentials?.password || '',
      rememberMe: Boolean(storedCredentials),
    },
    validationSchema,
    onSubmit: (values) => {
      const credentials = {
        username: values.username,
        password: values.password,
      };
      dispatch(login(credentials))
        .unwrap()
        .then(() => {
          if (values.rememberMe) {
            setRememberMeStorage(values);
          } else {
            removeRememberMeStorage();
          }
          navigate('/dashboard');
        })
        .catch((error) => {
          console.error('Login failed:', error);
        });
    },
  });

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

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
                      Sign In
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      className="para-text"
                    >
                      Enter your details to sign in to your account.
                    </Typography>
                  </Box>

                  {/* Username field */}
                  <Box className="field-wrapper">
                    <Typography variant="body1" component="label">
                      Username
                    </Typography>
                    <TextField
                      className="input-ui"
                      placeholder="Enter Username"
                      fullWidth
                      id="username"
                      name="username"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.username &&
                        Boolean(formik.errors.username)
                      }
                      helperText={
                        formik.touched.username && formik.errors.username
                      }
                    />
                  </Box>

                  {/* Password field */}
                  <Box className="field-wrapper">
                    <Typography variant="body1" component="label">
                      Password
                    </Typography>
                    <TextField
                      className="input-ui"
                      placeholder="Enter Password"
                      fullWidth
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {!showPassword ? <EyeOff /> : <Eye />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>

                  {/* Remember Me and Forgot Password */}
                  <Stack
                    className="field-wrapper remember-forgot-wrapper"
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          id="rememberMe"
                          name="rememberMe"
                          checked={formik.values.rememberMe}
                          onChange={formik.handleChange}
                        />
                      }
                      label="Remember Me"
                    />
                    <Typography
                      variant="body1"
                      component="label"
                      className="cursor-pointer green-hover"
                      onClick={() => navigate('/forgot-password')}
                    >
                      Forgot Password?
                    </Typography>
                  </Stack>

                  {/* Submit button */}
                  <Box className="field-wrapper">
                    <Button className="btn primary-btn w-full" type="submit">
                      Sign In
                    </Button>
                  </Box>
                </Stack>
              </form>
            </Paper>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Login;
