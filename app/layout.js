import "styles/global.css";
import { Header, Footer } from "components";

export const metadata = {
  title: "Netew Medya",
  description: "Netew Medya",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="tr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
