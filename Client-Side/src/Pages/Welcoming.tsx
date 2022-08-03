// import mui components to be used.

import { Box, Stack , Grid, Typography } from "@mui/material";

import { useEffect } from "react";

import bgImage from '../Assets/studens.jpg';


// import my components.
import UserForm from "../Components/UserForm";
import SchoolIcon from '@mui/icons-material/School';


const Welcoming = () => {


  useEffect(() => {
    localStorage.setItem("status", "start");
  }, []);



  return (
    <Grid container sx={{  color:"white" , height:"100vh"  }}>
    {/*  left item */}
    <Grid item xl={6} lg={6} md={6}  sx={{ display:{ xl:'block' , lg:'block' , md:'block' , sm:'none' , xs:'none'}}} >
      <Box sx={{width:'100%' , height:'100%' , backgroundImage:`url(${bgImage})`, backgroundRepeat:'no-repeat' , backgroundSize:'cover' , clipPath:  'polygon(0 0, 100% 0%, calc(100% - 10vw) 100%, 0% 100%)'  }}></Box>
    </Grid>
    {/* right item */}
    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} >
    <Stack justifyContent='center' alignItems='center' gap={7} sx={{height:'100%' , width:'100%' , }}>
      <SchoolIcon sx={{color:'#30CFD0' , fontSize:'3rem'}}/>
      <Typography sx={{color:"#30CFD0" , fontSize:{ xl:'2rem' , lg:'2rem' , md:'2rem' , sm:'2rem' , xs:'1.5rem' , textAlign:"center" }}}>Get ready for college admission now</Typography>
      <UserForm  />
    </Stack>
    </Grid>
    </Grid>
  );
};

export default Welcoming;
