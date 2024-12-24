import FooterComponent from "@/components/footer/footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"], // Optionnel : ajoutez des variantes
  weight: ["400", "700"], // Optionnel : précisez les poids
  variable: "--font-oswald", // Optionnel : créez une variable CSS
});

const Home = () => {
  return (
    <div className={inter.className}>
      <FooterComponent />
    </div>
  );
};

export default Home;
