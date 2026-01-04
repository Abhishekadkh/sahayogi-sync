import { Link, useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, Home, Info, Phone, LogOut } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); // To highlight the active tab

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    navigate("/");
  };

  const navLinks = [
    { to: "/home", icon: Home, label: "Home" },
    { to: "/about", icon: Info, label: "About" },
    { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/contact", icon: Phone, label: "Contact" },
  ];

  return (
    // GLASS EFFECT HEADER
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/60 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link to="/home" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Sahayogi Sync Logo"
              className="h-8 w-8 object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <span className="font-bold text-xl tracking-tight text-white uppercase">
              Sahayogi<span className="text-brand-primary">Sync</span>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`
                    relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${
                      isActive
                        ? "text-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)] border border-white/10"
                        : "text-brand-muted hover:text-white hover:bg-white/5 border border-transparent"
                    }
                  `}
                >
                  <link.icon
                    size={16}
                    className={isActive ? "text-brand-primary" : ""}
                  />
                  {link.label}
                </Link>
              );
            })}

            <div className="h-6 w-px bg-white/10 mx-4" />

            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              className="group flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-transparent hover:bg-red-500/10 hover:border-red-500/30 transition-all duration-300"
            >
              <LogOut
                size={16}
                className="text-brand-muted group-hover:text-red-400 transition-colors"
              />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-muted group-hover:text-red-400">
                Logout
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
