import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar";
import { SearchPage } from "./pages/SearchPage";
import { DetailsPage } from "./pages/DetailsPage";

export const MovieApp = () => {
  return (
    // Define the routes for the pages that I need (Using React Router DOM)
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search/:searchInput" element={<SearchPage />} />
          <Route path="/details/:serieId" element={<DetailsPage />} />

          {/* All routes that doesn't match any path, will be redirected to Most Popular Shows / Home Page */}
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};
