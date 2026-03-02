import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropertySelectorPage from "@/pages/PropertySelectorPage";
import ThusharaPage from "@/pages/ThusharaPage";
import PearlNestPage from "@/pages/PearlNestPage";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="App min-h-screen bg-background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PropertySelectorPage />} />
          <Route path="/thushara" element={<ThusharaPage />} />
          <Route path="/pearlnest" element={<PearlNestPage />} />
          <Route path="*" element={<PropertySelectorPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
