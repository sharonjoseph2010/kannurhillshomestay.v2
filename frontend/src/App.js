import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PropertyPage from "./pages/PropertyPage";
import GuidePage from "./pages/GuidePage";
import { THUSHARA, PEARLNEST, GUIDES } from "./data/site";

/* Router-agnostic: index.js wraps this in BrowserRouter, the build-time
   prerender (scripts/prerender.js) wraps it in StaticRouter. */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path={THUSHARA.path} element={<PropertyPage p={THUSHARA} />} />
      <Route path={PEARLNEST.path} element={<PropertyPage p={PEARLNEST} />} />
      {Object.values(GUIDES).map((g) => (
        <Route key={g.slug} path={g.path} element={<GuidePage g={g} />} />
      ))}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
