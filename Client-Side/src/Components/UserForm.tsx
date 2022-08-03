// mui used components
import { Box, TextField, Typography, Button, Stack } from "@mui/material";

// importing formik methods which is the form validator.
import { useFormik } from "formik";

// creating userName valid state.
import { useState , useContext } from "react";

// importing routing method from react.
import { useNavigate } from "react-router-dom";

import styled from '@emotion/styled';
import { RoutingContext } from "../Context/RoutingContext";



const StyledButtonElement = styled(Button)(() => ({
  backgroundImage:  'linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)',
  border:'0px',
  borderRadius:'8px',
  boxShadow:'rgba(151, 65, 252, 0.2) 0 15px 30px -5px',
  boxSizing:'border-box',
  color:'#FFFFFF',
  display:'flex',
  alignItems:'center',
  fontSize:'20px',
  justifyContent:'center',
  lineHeight:'1em',
  maxWidth:'100%',
  minWidth:'200px',
  padding:'19px 24px',
  textDecoration:'none',
  touchAction:'manipulation',
  whiteSpace:'nowrap',
  cursor:'pointer'
  }));



const UserForm = () => {

  const { setUserNameHandler } = useContext(RoutingContext)

  const Navigate = useNavigate();

  const [userNameIsValid, setUserNameIsValid] = useState(false);

  // creating error state
  const [ErrorMessage, setErrorMessage] = useState("");

  const SubmitHandler = (event: any) => {
    event.preventDefault();
    if (userNameIsValid) {
      setUserNameHandler() // changing the state in context
      localStorage.setItem("username", JSON.stringify(formik.values.userName));
      startTest();
    }else {
      setErrorMessage('Invalid user name');
    }
  };


  const startTest = () => {

    localStorage.setItem("status", "inProgress");
    Navigate("/test");
  };

  const validate = (values: any) => {
    const errors = {
      userName: "",
    };

    if (!values.userName.trim()) {
      errors.userName = "Required";
      setErrorMessage("Required");
      setUserNameIsValid(false);
    } else if (values.userName.trim().length < 4) {
      errors.userName = "Minimum name is 4 characters";
      setErrorMessage("Minimum name is 4 characters");
      setUserNameIsValid(false);
    } else if (values.userName.trim().length > 20) {
      errors.userName = "It's too long name";
      setErrorMessage("It's too long name");
      setUserNameIsValid(false);
    } else if (isFinite(values.userName)) {
      errors.userName = "Invalid user name";
      setErrorMessage("Invalid user name");
    } else {
      setUserNameIsValid(true);
      setErrorMessage("");
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
    },
    validate,
    onSubmit: SubmitHandler,
  });

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={SubmitHandler}
      sx={{
        "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
          color: "white",
        },
        width: { xl: "40%", lg: "40%", md: "40%", sm: "40%", xs: "70%" },
    
        paddingRight: "auto",
        paddingLeft: "auto",
      }}
    >
      <Stack
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        sx={{ height: "100%", width: "100%" }}
        gap={3}
      >
        <TextField
          required
          // onKeyPress={onKeyPressEnterHandler}
          id="userName"
          label="Name"
          name="userName"
          placeholder="Enter your name"
          autoComplete="off"
          InputLabelProps={{ style: { color: "white" } }}
          FormHelperTextProps={{ style: { display: "none" } }}
          sx={{
            backgroundColor: "rgba(37, 40, 48, 0.9)",
            color: "white !important",
            borderRadius: "3px",
            width: "100%",
          }}
          onChange={formik.handleChange}
          error={!!formik.errors.userName && formik.touched.userName}
          helperText={formik.errors.userName}
          value={formik.values.userName}
          onBlur={formik.handleBlur}
        />

        {ErrorMessage && (
          <Typography
          color='red'
            sx={{ fontWeight: "900px"
            // , color: "rgba(37, 40, 48, 0.9)"
           }}
          >
            {ErrorMessage}
          </Typography>
        )}


        <StyledButtonElement onClick={SubmitHandler}  >Start Now</StyledButtonElement>
      </Stack>
    </Box>
  );
};

export default UserForm;
