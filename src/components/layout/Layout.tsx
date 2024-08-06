import { Header, Footer } from "./HeaderFooter";

export const Layout = ({ children }: { children: any }) => {
  return (
    <div>
      <Header />
      {/* <main style={{ flexGrow: 1 }}>{children}</main> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};
