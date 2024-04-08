import HeaderComp from "./components/headerComp";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import MyJobsPage from "./pages/myJobsPage.jsx";
import PostJob from "./pages/PostJob.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import SalaryPage from "./pages/SalaryPage.jsx";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./contexts/AuthContext.jsx";

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <div>
      <HeaderComp />
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <HomePage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/my-jobs"
          element={
            isAuthenticated ? <MyJobsPage /> : <Navigate to={"/login"} />
          }
        />
        <Route
          path="/post-job"
          element={isAuthenticated ? <PostJob /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={!isAuthenticated ? <LoginPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/sign-up"
          element={!isAuthenticated ? <SignupPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/salary"
          element={
            isAuthenticated ? <SalaryPage /> : <Navigate to={"/login"} />
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
