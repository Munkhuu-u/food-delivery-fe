import { Pinecone, Trolley, Search } from "@/components/icons";
import { BorderAll, Fullscreen, Person } from "@mui/icons-material";
import { Container, Stack, Typography, Box } from "@mui/material";

const headerMenus = ["НҮҮР", "ХООЛНЫ ЦЭС", "ХҮРГЭЛТИЙН БҮС"];

export const Header = () => {
  return (
    <Container>
      <Stack
        direction={`row`}
        alignItems={"left"}
        justifyContent={`space-between`}
        maxWidth={"Fullscreen"}
        paddingX={"24px"}
        paddingY={"8px"}
      >
        {/* Left part */}
        {/* Logo, Home, Menu, Delivery */}
        <Stack
          direction={`row`}
          alignItems={"center"}
          spacing={"24px"}
          justifyContent={`center`}
        >
          <Box>
            <Pinecone />
          </Box>
          <Stack
            direction={`row`}
            alignItems={"center"}
            spacing={2}
            justifyContent={`center`}
          >
            {headerMenus.map((menu) => {
              return (
                <Stack paddingX={"16px"} paddingY={"8px"}>
                  <Typography>{menu}</Typography>
                </Stack>
              );
            })}
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
          <Stack
            border={1}
            borderColor="black"
            direction={"row"}
            borderRadius={2}
            alignItems={"center"}
            paddingX={2}
            paddingY={1}
            spacing={1}
          >
            <Search />
            <Box
              sx={{ ":focus": { outline: "none" } }}
              component={"input"}
              placeholder="Хайх"
              border={"none"}
              fontSize={14}
            ></Box>
          </Stack>
          <Stack
            spacing={"9px"}
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            paddingX={4}
            paddingY={2}
          >
            <Trolley />
            <Typography>Сагс</Typography>
          </Stack>
          <Stack
            spacing={"9px"}
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Person />
            <Typography>Нэвтрэх</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
