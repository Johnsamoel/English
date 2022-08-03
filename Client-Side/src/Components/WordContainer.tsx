// import some mui components for styling.
import { Typography, Stack } from "@mui/material";
import { Box } from "@mui/system";




// import word container props interface to use generic functions
import { WordContainerProps } from "../Types/words";










const WordContainer: React.FC<WordContainerProps> = ({
  children,
  bgc,
  word,
  counter,
}) => {
  

  return (
    <Box
      sx={{
        width: { lg: "400px", md: "400px", sm: "400px", xs: "300px" },
        height: { lg: "150px", md: "150px", sm: "100px", xs: "100px" },
        backgroundColor: `${bgc}`,
        color: "black",
        borderRadius: "15px",
      }}
    >
      <Stack
        gap={{ md: 1, xs: 5 }}
        sx={{
          width: "100%",
          height: {
            xl: "80%",
            lg: "150px",
            md: "150px",
            sm: "100px",
            xs: "100px",
          },
          flexDirection: { md: "column", xs: "row-reverse" },
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          align="center"
          
          sx={{
            color:"#30CFD0",
            fontSize: {
              xl: "2rem",
              lg: "2rem",
              md: "2rem",
              sm: "1.8rem",
              xs: "1.5rem",
            },
            letterSpacing: "1.3px",
            fontWeight: "bolder",
          }}
        >
          {children?.toString().toUpperCase()}
        </Typography>

      </Stack>



    </Box>
  );
};

export default WordContainer;
