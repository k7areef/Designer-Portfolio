import { Route, Routes } from "react-router-dom";
// Pages:
import HomePage from "@pages/HomePage";
import AboutPage from "@pages/AboutPage";
import WorksPage from "@pages/WorksPage";
import ContactPage from "@pages/ContactPage";
// Common Components:
import NavigationBar from "@components/layout/NavigationBar";
import Footer from "@components/layout/Footer";

function App() {
  return (
    <div className="App bg-soft-peach-92 text-grey-10 min-h-screen">
      {/* Navigation Bar */}
      <NavigationBar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App;