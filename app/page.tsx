import Image from "next/image";
import BottomNav from "./components/newsLine";
import Hero from "./components/homePage/Hero";
import NewsToday from "./components/homePage/newsToday";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <main>
        <div>
          <BottomNav />
          <Hero />
          <NewsToday />
        </div>
      </main>
      <Footer />
    </>
  );
}
