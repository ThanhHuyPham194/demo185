import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from "gsap";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import MainLayout from "./layouts/MainLayout/MainLayout";
import ContactPage from "./pages/ContactPage/ContactPage";
import Home from "./pages/Home/index";
import IntroPage from "./pages/IntroPage/IntroPage";
import ActivityNewsDetail from "./pages/NewsPage/ActivityNews/ActivityNewsDetail/ActivityNewsDetail";
import NewsPage from "./pages/NewsPage/NewsPage";
import PropagateNewsDetail from "./pages/NewsPage/PropagateNews/PropagateNewsDetail/PropagateNewsDetail";
import RelicsNewsDetail from "./pages/NewsPage/RelicsNews/RelicsNewsDetail/RelicsNewsDetail";
import Relic from "./pages/Relic/Relic";
import Relics from "./pages/Relics/Relics";
import ScrollToTop from "./utils/ScrollToTop";
function App() {
  useEffect(() => {
    gsap.fromTo('.banner', { opacity: 0 }, { opacity: 1, duration: 3.5, delay: 4.5 });
    gsap.fromTo('.banner .title .overlay', { height: '100%' }, { height: 0, duration: 1, delay: 4.8 });
    gsap.fromTo('.banner .title-address', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 4.8 });
  }, []);
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: false,
      duration: 1000,
    });
    document.querySelectorAll("img").forEach((img) => {
      img.addEventListener('load', () => {
        AOS.refresh();
      });
    });
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/relics" element={<Relics />}></Route>
            <Route path="/relics/:relicId" element={<Relic />}></Route>
            <Route path="/introduce" element={<IntroPage />}/>

            <Route path="/contact" element={<ContactPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/propagate" element={<PropagateNewsDetail />}></Route>
            <Route path="/news/activity" element={<ActivityNewsDetail />}></Route>
            <Route path="/news/relics" element={<RelicsNewsDetail />}></Route>
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;

