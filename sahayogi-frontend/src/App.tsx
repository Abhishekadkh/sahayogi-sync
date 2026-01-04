import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivateRoute from "./components/ProtectedRoute";

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <div className="relative z-10 flex flex-col min-h-screen">
      {!isLoginPage && <Navbar />}
      <main className={`flex-grow ${!isLoginPage ? "pt-20" : ""}`}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-brand-bg text-brand-text overflow-x-hidden">
      {/* 1. THE SHARED GLOW (Navbar Colors) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-primary/20 blur-[130px] rounded-full pointer-events-none z-0 mix-blend-screen" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-brand-secondary/10 blur-[110px] rounded-full pointer-events-none z-0" />

      {/* 2. THE SHARED GRID */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}
