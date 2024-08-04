import { Pinecone, Trolley } from "@/components/icons";
import { BorderAll, Person } from "@mui/icons-material";
import { Container, Stack, Typography, Box } from "@mui/material";

export const Header = () => {
  return (
    <Container>
      <Stack
        direction={`row`}
        alignItems={"center"}
        // spacing={`315px`}
        justifyContent={`center`}
        maxWidth={"1258px"}
      >
        {/* Left part */}
        {/* Logo, Home, Menu, Delivery */}
        <Stack
          direction={`row`}
          alignItems={"center"}
          spacing={`0px`}
          justifyContent={`center`}
        >
          <Box>
            <Pinecone />
          </Box>
          <Stack
            direction={`row`}
            alignItems={"center"}
            spacing={`8px`}
            justifyContent={`center`}
          >
            <Typography>Нүүр</Typography>
            <Typography>Хоолны цэс</Typography>
            <Typography>Хүргэлтийн бүс</Typography>
          </Stack>
        </Stack>

        {/* Right part */}
        {/* Search box, Cart, Login */}
        <Stack
          direction={`row`}
          alignItems={"center"}
          spacing={`0px`}
          justifyContent={`center`}
        >
          <Box
            sx={{ ":focus": { outline: "none" } }}
            component={"input"}
            placeholder="Хайх"
            height={31}
            width={`200px`}
            border={1}
            borderColor="black"
            fontSize={14}
          ></Box>
          <Trolley />
          <Typography>Сагс</Typography>
          <Person />
          <Typography>Нэвтрэх</Typography>
        </Stack>
      </Stack>
    </Container>
  );
};
