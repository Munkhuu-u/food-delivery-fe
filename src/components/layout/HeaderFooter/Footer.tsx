import { Button, Container, Divider, Stack, Typography } from "@mui/material";
import {
  FoodDelivery,
  FooterBackgroundPattern,
  Facebook,
  Instagram,
  Twitter,
} from "@/components/icons";

const footerMenu = [
  "Нүүр",
  "Холбоо барих",
  "Хоолны цэс",
  "Үйлчилгээний нөхцөл",
  "Хүргэлтийн бүс",
  "Нууцлалын бодлого",
];

export const Footer = () => {
  return (
    <Container maxWidth="xl" color="primary">
      {/* <FooterBackgroundPattern /> */}
      <Stack alignItems={"center"} spacing={"40px"}>
        <FoodDelivery />
        <Stack direction={"row"} spacing={"95px"}>
          {footerMenu.map((menu) => {
            return <Button>{menu}</Button>;
          })}
        </Stack>
        <Stack direction={"row"} spacing={"18px"}>
          <Facebook />
          <Instagram />
          <Twitter />
        </Stack>
        <Divider />
        <Stack alignItems={"center"} spacing={1}>
          <Typography>© 2024 Pinecone Foods LLC</Typography>
          <Typography>Зохиогчийн эрх хуулиар хамгаалагдсан.</Typography>
        </Stack>
      </Stack>
    </Container>
  );
};
