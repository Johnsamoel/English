import React from 'react';
import { Typography , Stack } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const RightAnswer:React.FC = () => {
    return (
   <Stack justifyContent='center' alignItems='center' gap={1}>
          <CheckCircleOutlineIcon fontSize="medium"  color='success'/>
          <Typography color="#2e7d32">Right Answer</Typography>
        </Stack> 
    );
};

export default RightAnswer;