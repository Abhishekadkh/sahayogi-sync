import Navbar from "../components/Navbar";
import {
  Heart,
  Shield,
  Activity,
  Target,
  Award,
  Code,
  Database,
  Brain,
} from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Abhishek Adhikari",
      email: "abhishekkadh@gmail.com",
      avatar: "AA",
    },
    {
      name: "Vansh Adhikari",
      email: "vanshvvv9765@gmail.com",
      avatar: "VA",
    },
    {
      name: "Ashim Dangal",
      email: "ashimdangal01@gmail.com",
      avatar: "AD",
    },
    {
      name: "Ganga Raj Adhikari",
      role: "",
      email: "anmoladk888@gmail.com",
      avatar: "GA",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg relative overflow-hidden">
      <Navbar />

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-primary/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-secondary/5 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-accent/5 blur-3xl rounded-full pointer-events-none"></div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent py-24 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            About Sahayogi Sync
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 drop-shadow leading-relaxed">
            Revolutionizing disaster relief through cutting-edge AI, machine
            learning, and social network analysis. Bridging the critical gap
            between crisis response and equitable aid distribution.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-sm font-semibold">AI-Powered</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-sm font-semibold">Real Impact</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-brand-surface/80 backdrop-blur-xl p-8 rounded-2xl shadow-glass border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center">
                <Target className="text-white h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-brand-text">
                Our Mission
              </h2>
            </div>
            <p className="text-brand-muted text-lg leading-relaxed mb-6">
              To revolutionize disaster relief by leveraging artificial
              intelligence and data science to ensure that aid reaches the most
              vulnerable populations first. We believe that in times of crisis,
              technology should serve humanity's most pressing needs.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-brand-muted">
                  Eliminate aid distribution inefficiencies through intelligent
                  algorithms
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-brand-muted">
                  Prioritize vulnerable populations using social network
                  analysis
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-brand-muted">
                  Provide real-time insights for disaster response teams
                </p>
              </div>
            </div>
          </div>

          <div className="bg-brand-surface/80 backdrop-blur-xl p-8 rounded-2xl shadow-glass border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-secondary rounded-xl flex items-center justify-center">
                <Award className="text-white h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-brand-text">Our Vision</h2>
            </div>
            <p className="text-brand-muted text-lg leading-relaxed mb-6">
              A world where technology bridges the gap between disaster response
              and equitable aid distribution. We envision a future where
              AI-driven systems ensure that no one is left behind in times of
              crisis.
            </p>
            <div className="bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 p-4 rounded-lg border border-white/10">
              <p className="text-brand-text font-semibold text-center">
                "Every life matters. Every aid package counts."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-text mb-4">
            Technology Stack
          </h2>
          <p className="text-xl text-brand-muted max-w-3xl mx-auto">
            Built with cutting-edge technologies to ensure scalability,
            reliability, and real-time performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-brand-surface/80 backdrop-blur-xl p-8 rounded-2xl shadow-glass border border-white/10 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <Brain className="text-white h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-brand-text text-center">
              AI & Machine Learning
            </h3>
            <ul className="space-y-3 text-brand-muted">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                Graph Theory Algorithms
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                Social Network Analysis
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                Predictive Modeling
              </li>
            </ul>
          </div>

          <div className="bg-brand-surface/80 backdrop-blur-xl p-8 rounded-2xl shadow-glass border border-white/10 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              <Code className="text-white h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-brand-text text-center">
              Full Stack Development
            </h3>
            <ul className="space-y-3 text-brand-muted">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                React & TypeScript Frontend
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                FastAPI and Expressjs Backend
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                Real-time Data Processing
              </li>
            </ul>
          </div>

          <div className="bg-brand-surface/80 backdrop-blur-xl p-8 rounded-2xl shadow-glass border border-white/10 hover:shadow-[0_0_30px_rgba(217,70,239,0.2)] hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-pink-500 to-red-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(217,70,239,0.3)]">
              <Database className="text-white h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-brand-text text-center">
              Data & Analytics
            </h3>
            <ul className="space-y-3 text-brand-muted">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                NetworkX Graph Processing
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                Interactive Visualizations
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                Real-time Dashboards
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Core Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-text mb-4">
            Core Features
          </h2>
          <p className="text-xl text-brand-muted max-w-3xl mx-auto">
            Advanced capabilities that set Sahayogi Sync apart from traditional
            aid distribution systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 border border-white/10 rounded-2xl shadow-glass bg-brand-surface/50 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-red-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
              <Heart className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-brand-text">
              Fair Allocation
            </h3>
            <p className="text-brand-muted leading-relaxed">
              Algorithms prioritize the most vulnerable populations—elderly,
              children, and those with disabilities—ensuring equitable
              distribution of limited resources.
            </p>
          </div>

          <div className="text-center p-8 border border-white/10 rounded-2xl shadow-glass bg-brand-surface/50 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-brand-primary to-brand-secondary w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
              <Activity className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-brand-text">
              Smart Analysis
            </h3>
            <p className="text-brand-muted leading-relaxed">
              Our AI analyzes complex social connections and community networks
              to identify "isolated" households that traditional supply chains
              often overlook.
            </p>
          </div>

          <div className="text-center p-8 border border-white/10 rounded-2xl shadow-glass bg-brand-surface/50 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
              <Shield className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-brand-text">
              Rapid Response
            </h3>
            <p className="text-brand-muted leading-relaxed">
              From CSV data upload to actionable relief maps in seconds. Our
              system transforms raw data into life-saving decisions with
              unprecedented speed.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-text mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-brand-muted max-w-3xl mx-auto">
            A passionate group of young engineering students dedicated to
            leveraging technology for social good.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-brand-surface/80 backdrop-blur-xl p-6 rounded-2xl shadow-glass border border-white/10 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                <span className="text-white font-bold text-lg">
                  {member.avatar}
                </span>
              </div>
              <h3 className="text-lg font-bold text-brand-text mb-2">
                {member.name}
              </h3>
              <p className="text-brand-primary font-medium text-sm mb-3">
                {member.role}
              </p>
              <p className="text-brand-muted text-xs">{member.email}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="bg-gradient-to-r from-brand-primary/20 via-brand-secondary/20 to-brand-accent/20 backdrop-blur-xl p-12 rounded-2xl shadow-glass border border-white/10 text-center">
          <h2 className="text-3xl font-bold text-brand-text mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-brand-muted mb-8 max-w-2xl mx-auto">
            Join us in revolutionizing disaster relief. Experience the power of
            AI-driven aid distribution.
          </p>
          <div className="flex justify-center gap-4 flex-wrap"></div>
        </div>
      </div>
    </div>
  );
}
