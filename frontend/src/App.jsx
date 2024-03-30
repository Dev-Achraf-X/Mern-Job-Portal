import HeaderComp from "./components/headerComp";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import MyJobsPage from "./pages/myJobsPage.jsx";
import PostJob from "./pages/PostJob.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import SalaryPage from "./pages/SalaryPage.jsx";

function App() {
  return (
    <div>
      <HeaderComp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-jobs" element={<MyJobsPage />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/salary" element={<SalaryPage />} />
      </Routes>
    </div>
  );
}

export default App;
