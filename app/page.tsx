'use client';

import { useState } from 'react';
import { Menu, X, ArrowRight, CheckCircle2, TrendingUp, Target, BarChart3, Zap, Users, Mail } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', newsletterEmail);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#home" className="text-2xl font-bold text-[#0b0f19] tracking-tight">
                Arovis
              </a>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-sm font-medium text-[#0b0f19] hover:text-[#6d4cff] transition-colors">
                Home
              </a>
              <a href="#about" className="text-sm font-medium text-[#0b0f19] hover:text-[#6d4cff] transition-colors">
                About Us
              </a>
              <a href="#services" className="text-sm font-medium text-[#0b0f19] hover:text-[#6d4cff] transition-colors">
                Services
              </a>
              <a href="#contact" className="text-sm font-medium text-[#0b0f19] hover:text-[#6d4cff] transition-colors">
                Contact Us
              </a>
            </div>

            {/* Hiring Button - Right */}
            <div className="hidden md:block">
              <a
                href="#hiring"
                className="inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#6d4cff] to-[#8b5cf6] rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                We're hiring
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#0b0f19] hover:text-[#6d4cff] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a
                href="#home"
                className="block px-3 py-2 text-base font-medium text-[#0b0f19] hover:text-[#6d4cff] hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-base font-medium text-[#0b0f19] hover:text-[#6d4cff] hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-base font-medium text-[#0b0f19] hover:text-[#6d4cff] hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-base font-medium text-[#0b0f19] hover:text-[#6d4cff] hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </a>
              <a
                href="#hiring"
                className="block px-3 py-2 text-base font-medium text-white bg-[#6d4cff] rounded-lg text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                We're hiring
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6d4cff]/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#6d4cff]/10 border border-[#6d4cff]/20 mb-8">
            <span className="text-sm font-medium text-[#6d4cff]">Built for teams who hate guesswork</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0b0f19] mb-6 leading-tight tracking-tight">
            We build growth systems<br />that don't guess.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Arovis is AI-powered growth infrastructure for advertisers and publishers who care about real performance — not vanity metrics.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#6d4cff] rounded-full hover:bg-[#5a3de6] hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Let's get started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0b0f19] mb-6">About Arovis</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're a team of growth engineers, data scientists, and performance marketers who got tired of platforms that optimize for the wrong things. So we built something better.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#6d4cff]/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#6d4cff]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0b0f19] mb-3">Precision-Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                Every decision backed by real data, not vanity metrics. We optimize for outcomes that actually matter to your business.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#6d4cff]/10 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#6d4cff]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0b0f19] mb-3">AI-Powered</h3>
              <p className="text-gray-600 leading-relaxed">
                Machine learning models that adapt in real-time, finding opportunities humans miss and scaling what works.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#6d4cff]/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#6d4cff]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0b0f19] mb-3">Growth-Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                Built specifically for teams that need to move fast, test aggressively, and scale winners without the overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 1 - Image Right */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-[#6d4cff]/10 text-[#6d4cff] text-sm font-medium mb-4">
                Smart Automation
              </div>
              <h2 className="text-4xl font-bold text-[#0b0f19] mb-6">Campaign Intelligence That Actually Works</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Stop wasting time on manual optimizations. Our AI analyzes thousands of data points in real-time to automatically adjust bids, targeting, and creative for maximum performance.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#6d4cff] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Automated bid optimization across all major ad platforms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#6d4cff] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Real-time creative testing and rotation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#6d4cff] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Predictive budget allocation to winning campaigns</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#6d4cff]/20 to-[#8b5cf6]/20 rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-32 h-32 text-[#6d4cff]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 - Image Left */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-square bg-gradient-to-br from-[#6d4cff]/20 to-[#8b5cf6]/20 rounded-2xl flex items-center justify-center">
                <Users className="w-32 h-32 text-[#6d4cff]" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 rounded-full bg-[#6d4cff]/10 text-[#6d4cff] text-sm font-medium mb-4">
                Deep Analytics
              </div>
              <h2 className="text-4xl font-bold text-[#0b0f19] mb-6">Insights You Can Actually Use</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Move beyond surface-level metrics. Get actionable insights that tell you not just what happened, but why it happened and what to do next.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#6d4cff] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Attribution modeling that actually reflects customer journeys</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#6d4cff] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cohort analysis and lifetime value predictions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#6d4cff] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom dashboards that show what matters to you</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Center CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#6d4cff] to-[#8b5cf6] rounded-3xl p-12 sm:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to stop guessing?</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Join the teams already using Arovis to drive real, measurable growth.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#6d4cff] bg-white rounded-full hover:bg-gray-50 hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Get started today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Arovis Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0b0f19] mb-6">Why Choose Arovis</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're not just another analytics platform. We're your growth partner, built by people who've actually scaled businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-[#6d4cff] mb-2">10x</div>
              <div className="text-sm font-medium text-[#0b0f19] mb-2">Faster Optimization</div>
              <p className="text-sm text-gray-600">Make decisions in minutes, not weeks</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-[#6d4cff] mb-2">24/7</div>
              <div className="text-sm font-medium text-[#0b0f19] mb-2">Automated Monitoring</div>
              <p className="text-sm text-gray-600">Never miss an opportunity or threat</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-[#6d4cff] mb-2">50+</div>
              <div className="text-sm font-medium text-[#0b0f19] mb-2">Integrations</div>
              <p className="text-sm text-gray-600">Connect all your marketing tools</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-[#6d4cff] mb-2">99.9%</div>
              <div className="text-sm font-medium text-[#0b0f19] mb-2">Uptime Guarantee</div>
              <p className="text-sm text-gray-600">Enterprise-grade reliability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0b0f19] mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">
              Have questions? Want to see a demo? Let's talk about how Arovis can accelerate your growth.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-[#0b0f19] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6d4cff] focus:border-transparent outline-none transition-all"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-[#0b0f19] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6d4cff] focus:border-transparent outline-none transition-all"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-[#0b0f19] mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6d4cff] focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about your growth goals..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 text-base font-semibold text-white bg-[#6d4cff] rounded-lg hover:bg-[#5a3de6] hover:shadow-lg transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Hiring Section */}
      <section id="hiring" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#6d4cff]/10 via-transparent to-transparent">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#6d4cff]/20 border border-[#6d4cff]/30 mb-6">
            <span className="text-sm font-medium text-[#6d4cff]">Join Our Team</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0b0f19] mb-6">We're Hiring</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Looking for talented engineers, data scientists, and growth marketers who want to build the future of performance marketing. Remote-friendly, competitive compensation, and real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#6d4cff] rounded-full hover:bg-[#5a3de6] hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Full-Screen Footer */}
      <footer className="bg-[#0b0f19] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Arovis</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                AI-powered growth infrastructure for teams who care about real performance.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#hiring" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-4">Get growth insights delivered to your inbox.</p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-[#6d4cff] focus:border-transparent outline-none text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#6d4cff] text-white rounded-lg hover:bg-[#5a3de6] transition-colors text-sm font-medium flex items-center justify-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Arovis. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
