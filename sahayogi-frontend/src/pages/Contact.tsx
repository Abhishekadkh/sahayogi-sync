import Navbar from "../components/Navbar";
import { Mail, User } from "lucide-react";

export default function Contact() {
  const contacts = [
    { name: "Abhishek Adhikari", email: "abhishekkadh@gmail.com" },
    { name: "Vansh Adhikari", email: "vanshvvv9765@gmail.com" },
    { name: "Ashim Dangal", email: "ashimdangal01@gmail.com" },
    { name: "Ganga Raj Adhikari", email: "anmoladk888@gmail.com" },
  ];

  return (
    <div className="min-h-screen bg-brand-bg relative overflow-hidden">
      <Navbar />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-secondary/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-brand-accent/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <h1 className="text-3xl font-bold text-center mb-12 text-brand-text">
          Our Team
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-brand-surface/80 backdrop-blur-xl p-6 rounded-2xl shadow-glass border border-white/10 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                  <User className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-brand-text mb-2">
                  {contact.name}
                </h3>
                <div className="flex items-center gap-2 text-brand-muted">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">{contact.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-brand-text">
            Get in Touch
          </h2>
          <div className="max-w-2xl mx-auto bg-brand-surface/80 backdrop-blur-xl p-8 rounded-2xl shadow-glass border border-white/10">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-brand-text mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-white/20 rounded-lg shadow-sm p-3 bg-brand-bg/50 text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-text mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full border border-white/20 rounded-lg shadow-sm p-3 bg-brand-bg/50 text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-text mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full border border-white/20 rounded-lg shadow-sm p-3 bg-brand-bg/50 text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-3 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:scale-105 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
