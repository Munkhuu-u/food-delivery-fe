import {
  Container,
  Stack,
  Typography,
  Box,
  TextField,
  FormControl,
} from "@mui/material";

export default function signup() {
  return (
    <Container>
      <Stack
        marginTop={"76px"}
        marginBottom={"199px"}
        bgcolor={"green"}
        spacing={"24px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* Profile and name section */}
        <Stack bgcolor={"red"} spacing={"40px"} alignItems={"center"}>
          <p>Profile</p>
          <p>USER NAME</p>
        </Stack>
        {/* Name, Contact number, E-mail and buttons */}
        <Stack
          spacing={"16px"}
          bgcolor={"blue"}
          paddingTop={"20px"}
          paddingX={"16px"}
        >
          <FormControl>
            <Typography fontSize={"14px"}>Нэр</Typography>
            <TextField
              sx={{
                backgroundColor: "#F7F7F8",
              }}
              fullWidth
              id="fullWidth"
              placeholder="Нэрээ оруулна уу"
            />
          </FormControl>
          {/* <Box bgcolor={"purple"}>Box 1</Box> */}
          <Box bgcolor={"yellow"}>Box 2</Box>
          <Box bgcolor={"orange"}>Box 3</Box>
        </Stack>
      </Stack>
    </Container>
  );
}
