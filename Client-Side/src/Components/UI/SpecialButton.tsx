import styled from "@emotion/styled";
import { Button } from "@mui/material";



const SpecialButton = ({children , action , bgcolor}:{children:String , action:any , bgcolor:String|null}) => {


  const StyledButton = styled(Button)(() => ({
    color:'#263238',
    backgroundColor:`${ bgcolor? bgcolor : 'white'}`,
    

    '&:hover':{
      backgroundColor:'white',
      color:'black'
    }
    }));
    return (
        <StyledButton variant='contained' onClick={action} disableElevation >{children}</StyledButton>
    );
};

export default SpecialButton;


