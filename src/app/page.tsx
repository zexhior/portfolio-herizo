import FooterComponent from "@/components/footer/footer";
import NavbarComponent from "@/components/navbar/navbar";
import { Inter } from "next/font/google";
import ContactPage from "./contacts/contacts";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-oswald",
});

const Home = () => {
  return (
    <div className={`${inter.className}flex flex-col`}>
      <NavbarComponent />
      <FooterComponent />
    </div>
  );
};

export default Home;
