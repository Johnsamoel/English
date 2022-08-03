import { Typography } from '@mui/material';
import styled from "@emotion/styled";


const Styledtext = styled(Typography)(() => ({
    fontWeight:'bold',
    textAlign:'center',
    backgroundImage: `linear-gradient(to left, #30CFD0 35%, #ff0084 100%)`,
    WebkitBackgroundClip:'text',
    WebkitTextFillColor:'transparent',
   
    }));

const GradientText = ({children}:{children:any} ) => {
    return (
        <Styledtext sx={{ fontSize:{ xl:'2rem' , lg:'2rem' , md:'2rem' , sm:'2rem' , xs:'1.5rem'}}} >{children}</Styledtext>
        );
};

export default GradientText;


