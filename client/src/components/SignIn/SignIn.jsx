import React from "react";
import { Formik } from "formik";
import { validate } from "../../utils/validate";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const initialValues = {
  username: "",
  password: "",
  type_of_home: null,
  showPassword: false,
};

const SignIn = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    const { showPassword, ...input } = values;
    console.log(input);
    setSubmitting(false);
  };

  return (
    <div>
      <Grid
        container
        justifyContent="center"
        component="main"
        sx={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={4}>
          <Box
            sx={{
              my: 10,
              mx: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={handleSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <TextField
                    required
                    margin="normal"
                    fullWidth
                    id="username"
                    label="Username"
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.username}
                    error={Boolean(
                      errors.username && touched.username && errors.username
                    )}
                    helperText={errors.username}
                  />
                  <TextField
                    required
                    margin="normal"
                    fullWidth
                    id="password"
                    label="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.username}
                    error={Boolean(
                      errors.password && touched.password && errors.password
                    )}
                    helperText={errors.password}
                  />
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Type of Home</FormLabel>
                    <RadioGroup
                      row
                      aria-label="type_of_home"
                      name="type_of_home"
                      value={values.type_of_home}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value={true}
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value={false}
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={isSubmitting}
                  >
                    Sign Up
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="/reset" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/signup" variant="body2">
                        Don't have an account? Sign Up
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;