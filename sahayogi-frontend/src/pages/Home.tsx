import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { ArrowRight, Activity, Globe, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans relative overflow-hidden">
      <Navbar />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-primary/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-secondary/5 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent/5 blur-3xl rounded-full pointer-events-none"></div>

      {/* HERO SECTION */}
      <div className="relative bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
            SAHAYOGI <br />
            <span className="text-brand-accent">SYNC</span>
          </h1>
          <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto mb-10 drop-shadow">
            Sahayogi Sync uses Graph Theory and Machine Learning to distribute
            aid where it matters most, leaving no one behind in the dark.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/dashboard"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center gap-2"
            >
              Launch Dashboard <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-black/20 backdrop-blur-sm border border-white/30 text-white rounded-xl font-bold text-lg hover:bg-black/30 hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Decorative Background Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full mix-blend-overlay filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2 animate-pulse"></div>
      </div>

      {/* FEATURES PREVIEW SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-text">
            Why Sahayogi Sync?
          </h2>
          <p className="text-brand-muted mt-2">
            Solving the "Last Mile" problem in disaster relief.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-8 border border-white/10 rounded-2xl shadow-glass bg-brand-surface/50 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-brand-primary to-brand-secondary w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
              <Activity className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-brand-text mb-2">
              Real-Time Analytics
            </h3>
            <p className="text-brand-muted">
              Instantly process household data to identify vulnerability
              hotspots.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 border border-white/10 rounded-2xl shadow-glass bg-brand-surface/50 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-brand-secondary to-brand-accent w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
              <Globe className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-brand-text mb-2">
              Network Mapping
            </h3>
            <p className="text-brand-muted">
              Visualizes community connections to find isolated families.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 border border-white/10 rounded-2xl shadow-glass bg-brand-surface/50 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(217,70,239,0.2)] hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-brand-accent to-brand-primary w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(217,70,239,0.3)]">
              <Shield className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-brand-text mb-2">
              Fair Distribution
            </h3>
            <p className="text-brand-muted">
              Ensures resources reach the elderly, disabled, and marginalized
              first.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
