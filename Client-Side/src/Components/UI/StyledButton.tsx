import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { ButtonProps } from '../../Types/words';




const StyledButton:React.FC<ButtonProps> = ({children , bgColor , action}) => {
    
    const StyledButtonElement = styled(Button)(() => ({
        backgroundImage: bgColor? '' : 'linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)',
        backgroundColor:bgColor? bgColor : '' ,
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

    return (
        <StyledButtonElement onClick={action}>{children}</StyledButtonElement>
    );
};

export default StyledButton;


