import { Box, Stack } from "@mui/material"
import not_found from '../Assets/not_found.png';



const NotFound = () => {
    return (
        <Stack sx={{
        width: "100%",
        position:"relative",
          height:"100vh"}}>

            <Box component="img" src={not_found} sx={{ maxHeight: "100%", maxWidth: "100%" , position:"absolute",
         top:"50%",
         left:"50%",
         transform: "translate(-50%,-50%)",}} />
        </Stack>

    )
}
export default NotFound;