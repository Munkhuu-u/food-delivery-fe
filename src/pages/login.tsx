import { ClosedEye } from "@/components/icons";
import { Box, Stack, Typography } from "@mui/material";

const login = () => {
  return (
    <Stack padding={4} alignItems={"center"} border={1} bgcolor={"pink"}>
      <Typography>Hongoroo eniig haraa cool bainuu hha 😎😎😎</Typography>
      <Typography>Нэвтрэх</Typography>
      <Stack>
        <Typography>Имейл</Typography>
        <Box> </Box>
        <Box
          component={"input"}
          placeholder="И мейл хаягаа оруулна уу"
          height={31}
          width={`200px`}
          border={`none`}
          fontSize={14}
        ></Box>
      </Stack>
      <Stack>
        <Typography>Нууц үг</Typography>
        <Box> </Box>
        <Box
          component={"input"}
          placeholder="Нууц үг"
          height={31}
          width={`200px`}
          border={`none`}
          fontSize={14}
        ></Box>
        <ClosedEye />
        <Typography>Нууц үг сэргээх</Typography>
      </Stack>
    </Stack>
  );
};

export default login;
