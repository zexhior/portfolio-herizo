import FooterComponent from "@/components/footer/footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-oswald",
});

const Home = () => {
  return (
    <div className={inter.className}>
      <FooterComponent />
    </div>
  );
};

export default Home;
