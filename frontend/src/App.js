import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PropertySelectorPage from "@/pages/PropertySelectorPage";
import ThusharaPage from "@/pages/ThusharaPage";
import PearlNestPage from "@/pages/PearlNestPage";
import PalakkayamThattuPage from "@/pages/PalakkayamThattuPage";
import PaithalmalaPage from "@/pages/PaithalmalaPage";
import { Toaster } from "@/components/ui/sonner";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App min-h-screen bg-background">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<PropertySelectorPage />} />
          <Route path="/thushara" element={<ThusharaPage />} />
          <Route path="/pearlnest" element={<PearlNestPage />} />
          <Route path="/palakkayam-thattu" element={<PalakkayamThattuPage />} />
          <Route path="/paithalmala" element={<PaithalmalaPage />} />
          <Route path="*" element={<PropertySelectorPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
