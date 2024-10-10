import React, { useState } from 'react';
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
const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
                <Box className="field-wrapper">
                  <Typography variant="body1" component="label">
                    Username
                  </Typography>
                  <TextField
                    className="input-ui"
                    placeholder="Enter Username"
                    fullWidth
                  />
                </Box>
                <Box className="field-wrapper">
                  <Typography variant="body1" component="label">
                    Password
                  </Typography>
                  <TextField
                    className="input-ui"
                    placeholder="Enter Password"
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <EyeOff /> : <Eye />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Stack
                  className="field-wrapper remember-forgot-wrapper"
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="Remember Me"
                    labelPlacement="end"
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
                <Box className="field-wrapper">
                  <Button
                    className="btn primary-btn w-full"
                    onClick={() => navigate('/dashboard')}
                  >
                    Sign In
                  </Button>
                </Box>
              </Stack>
            </Paper>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Login;
