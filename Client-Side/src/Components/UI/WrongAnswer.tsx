import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import { Typography , Stack } from '@mui/material';

const WrongAnswer:React.FC = () => {
    return (
         <Stack justifyContent='center' alignItems='center' gap={1}>
          <ErrorOutlineIcon fontSize="medium"  color='error'/>
          <Typography color="error">Wrong Answer</Typography>
        </Stack> 
    );
};

export default WrongAnswer;