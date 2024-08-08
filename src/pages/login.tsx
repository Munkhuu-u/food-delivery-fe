import { ClosedEye } from "@/components/icons";
import { Box, Stack, Typography, TextField } from "@mui/material";

const login = () => {
  return (
    <Stack padding={4} alignItems={"center"} border={1} bgcolor={"pink"}>
      <Typography>Hongoroo eniig haraa cool bainuu hha 😎😎😎</Typography>
      <Typography>Нэвтрэх</Typography>
      <Stack>
        <Typography>Имейл</Typography>
        <TextField
          id="outlined-password-input"
          placeholder="И мейл хаягаа оруулна уу"
          //   type="password"
          //   autoComplete="current-password"
        />
      </Stack>
      <Stack>
        <Typography>Нууц үг</Typography>
        <TextField
          id="outlined-password-input"
          //   label="Password"
          placeholder="Нууц үг"
          type="password"
          autoComplete="current-password"
        ></TextField>
        <ClosedEye />
        <Typography>Нууц үг сэргээх</Typography>
      </Stack>
    </Stack>
  );
};

export default login;
