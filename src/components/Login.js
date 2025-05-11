import React from "react";
import login_img from "../assets/png/login.png";
import logo from "../assets/png/logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, TextField, Button } from "@mui/material";

export const Login = () => {
  const formik = useFormik({
    initialValues: { login: "", password: "" },
    validationSchema: Yup.object({
      login: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^.*(?=.{10,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Password must contain at least 10 characters, one uppercase, one lowercase, one digit, and one special character"
        ),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex w-full w-[50%] h-auto mt-24 border-4 border-red-700 rounded-lg shadow-lg overflow-hidden">
        {/* LEFT - Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src={login_img}
            alt="Login Banner"
            className="w-full h-full object-fill"
          />
        </div>

        {/* RIGHT - Login Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-400">
          <div className=" shadow-xl p-8 text-white flex flex-col justify-center">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <img src={logo} alt="Logo" className="h-14" />
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-start text-black">Login</h2>
            <p className="text-yellow-400 text-start text-xs -mt-2 mb-6">
              Enter your details below
            </p>

            {/* Form */}
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              className="space-y-2"
            >
              <TextField
                id="login"
                name="login"
                label="Email"
                fullWidth
                variant="standard"
                value={formik.values.login}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.login && Boolean(formik.errors.login)}
                helperText={formik.touched.login && formik.errors.login}
                InputLabelProps={{ style: { color: "#fff" } }}
                InputProps={{ style: { color: "#fff" } }}
              />

              <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                InputLabelProps={{ style: { color: "#fff" } }}
                InputProps={{ style: { color: "#fff" } }}
              />

              <div className="text-right text-sm text-blue-800 hover:underline-offset-1 cursor-pointer">
                Forgot password?
              </div>

              <Button
                type="submit"
                fullWidth
                className="bg-gradient-to-r from-blue-300 via-blue-400 via-blue-500 via-blue-500 via-blue-600 via-blue-800 to-blue-200 text-white font-semibold py-1 rounded-full hover:text-blue-900"
              >
                LOGIN
              </Button>
            </Box>

            <div className="text-center text-sm mt-2">
              Don’t have an account?{" "}
              <span className="text-yellow-400 hover:underline cursor-pointer">
                Signup
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};