import { Stack } from '@mui/material';
import React from 'react';

import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircleProgressBar = ({percent} : {percent: number}) => {
   
    return (
        <Stack sx={{width: '150px', height: '150px' }}>
        <CircularProgressbar minValue={0} maxValue={100}  value={percent} text={`${percent}%`} styles={buildStyles({textColor:'#ff0084' , pathColor:'#ff0084'})} />
        </Stack>
    );
};

export default CircleProgressBar;