import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import type { LoginResponse } from "../types/api"; // ADDED 'type' keyword

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data: LoginResponse = await res.json();

      if (data.status === "success") {
        localStorage.setItem("auth_token", data.token || "");
        navigate("/home");
      } else {
        setError("Invalid Credentials");
      }
    } catch {
      setError("Server is offline (Check Port 3001)");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-primary/20 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 bg-brand-surface/80 backdrop-blur-xl p-8 rounded-2xl shadow-glass border border-white/10 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-gradient-to-br from-brand-primary to-brand-accent rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.3)]">
            <ShieldCheck className="h-10 w-10 text-white" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-brand-text mb-6">
          Sahayogi Admin Portal
        </h2>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg mb-4 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-brand-text mb-2">
              Username
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-3 bg-brand-bg/50 border border-white/20 rounded-lg text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300"
              placeholder="admin"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-text mb-2">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full px-4 py-3 bg-brand-bg/50 border border-white/20 rounded-lg text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300"
              placeholder="sahayogi2025"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.4)] text-white font-bold text-lg hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
