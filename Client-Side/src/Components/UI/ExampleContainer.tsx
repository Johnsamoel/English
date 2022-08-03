import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { ExampleContainerProps } from '../../Types/words';

const ExampleContainer:React.FC<ExampleContainerProps> = ({bgc , Example}) => {



    return (
        <Box
        sx={{
          width: { lg: "400px", md: "400px", sm: "400px", xs: "300px" },
          height: { lg: "150px", md: "150px", sm: "100px", xs: "100px" },
          backgroundColor: `${bgc}`,
          color: "black",
          borderRadius: "15px",
          boxSizing:'border-box',
        }}
      >
        <Stack  justifyContent='space-around' alignItems='center' sx={{width:'100%' , height:'100%'}} >
         <Typography
          align="center"
          
          sx={{
            fontSize:{lg:'1.3rem' , md:'1.3rem' , sm:'1.3rem' , xs:'1rem'} ,
            fontWeight: "bolder",
            textOverflow:'ellipsis',
            padding:"0.5rem",
            color:'#30CFD0'
          }}
        >
          {Example}
        </Typography>
        </Stack>
        </Box>
    );
};

export default ExampleContainer