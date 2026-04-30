/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  CheckCircle, 
  MessageCircle, 
  BookOpen, 
  FileText, 
  Search, 
  PenTool, 
  ScrollText, 
  ShieldCheck, 
  GraduationCap, 
  Clock, 
  Quote 
} from "lucide-react";

export default function App() {
  const services = [
    { 
      title: "Assignment Writing", 
      icon: "📚", 
      desc: "Custom-written assignments following your specific unit criteria and university guidelines.",
      pricing: "from £25"
    },
    { 
      title: "Report Writing", 
      icon: "📊", 
      desc: "Detailed academic and business reports with professional structure, data analysis, and citations.",
      pricing: "from £28"
    },
    { 
      title: "Dissertation Writing", 
      icon: "🎓", 
      desc: "Comprehensive support for proposals, methodology, results, and full chapters. Expert guidance.",
      pricing: "from £30"
    },
    { 
      title: "Essay Writing", 
      icon: "✍️", 
      desc: "Argued, researched essays from undergraduate to PhD level across all academic disciplines.",
      pricing: "from £22"
    },
    { 
      title: "Literature Review", 
      icon: "🔍", 
      desc: "In-depth critical analysis of existing research to build a solid foundation for your study.",
      pricing: "from £27"
    },
    { 
      title: "Proofreading & Editing", 
      icon: "✨", 
      desc: "Polish your work with native UK editing. Fixing grammar, syntax, and ensuring flow.",
      pricing: "from £10"
    }
  ];

  const pricingData = [
    { service: "Assignment Writing", standard: "£25", urgent: "£35" },
    { service: "Report Writing", standard: "£28", urgent: "£38" },
    { service: "Dissertation Writing", standard: "£30", urgent: "£42" },
    { service: "Essay Writing", standard: "£22", urgent: "£32" },
    { service: "Literature Review", standard: "£27", urgent: "£37" },
    { service: "Proofreading & Editing", standard: "£10", urgent: "£15" },
  ];

  const testimonials = [
    {
      name: "Sarah K.",
      uni: "University of Manchester",
      text: "The dissertation help I received was outstanding. The level of research and academic tone was exactly what my professors were looking for. Highly recommend!"
    },
    {
      name: "James T.",
      uni: "King's College London",
      text: "Turned a complex assignment around in 48 hours when I was struggling. Quality didn't drop and it was 100% plagiarism-free. Life safer!"
    },
    {
      name: "Chloe R.",
      uni: "University of Edinburgh",
      text: "Excellent proofreading service. They caught small errors I missed and significantly improved the flow of my literature review."
    }
  ];

  const scrollVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const whatsappLink = "https://wa.me/8801300434385";

  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10 py-4 shadow-xl">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-white font-serif text-xl md:text-2xl font-bold italic tracking-tight">
              ReportAssistantHub <span className="text-gold">UK</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-white/90 font-medium tracking-wide items-center">
            <a href="#home" className="hover:text-gold transition-colors">Home</a>
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#pricing" className="hover:text-gold transition-colors">Pricing</a>
            <a href="#why-us" className="hover:text-gold transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy px-5 py-2 rounded-full font-bold hover:bg-white transition-all transform hover:scale-105"
            >
              Get Quote
            </a>
          </div>
          {/* Mobile menu button could go here, but focusing on mobile-friendly layout first */}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="mesh-gradient min-h-[85vh] flex items-center relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-7xl text-white mb-6 leading-tight">
                Expert Academic Writing — <span className="text-gold">Tailored for UK Students</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed font-light">
                Confidential, UK-based professional writing help. Elevate your grades with custom research and high-quality assignments delivered on time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#pricing"
                  className="bg-gold text-navy px-8 py-4 rounded-xl text-lg font-bold hover:bg-white transition-all text-center"
                >
                  Get a Free Quote
                </a>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-8 py-4 rounded-xl text-lg font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 top-0 w-1/3 hidden lg:flex items-center justify-center opacity-20 pointer-events-none">
          <BookOpen className="w-64 h-64 text-white" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck className="w-10 h-10 text-gold" />, title: "100% Plagiarism Free", desc: "Original content only." },
              { icon: <LockIcon className="w-10 h-10 text-gold" />, title: "Strictly Confidential", desc: "Your safety is our priority." },
              { icon: <GraduationCap className="w-10 h-10 text-gold" />, title: "UK-Based Experts", desc: "Native university writers." },
              { icon: <Clock className="w-10 h-10 text-gold" />, title: "On-Time Delivery", desc: "Never miss a deadline." },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={scrollVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-navy">Our Specialized Services</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto italic">Comprehensive academic support across all levels and disciplines.</p>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                variants={scrollVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative bg-white border border-gray-200 p-8 rounded-3xl hover:border-gold hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{service.desc}</p>
                <div className="flex justify-between items-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="font-bold text-navy">{service.pricing} per page</span>
                  <a href="#pricing" className="text-gold font-bold flex items-center gap-1 hover:underline">
                    See Pricing &rarr;
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-navy text-white">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Honest, Performance-Based Pricing</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">High-quality academic help that remains affordable for students.</p>
        </div>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white/5 rounded-3xl overflow-hidden border border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-white/10 text-gold uppercase tracking-wider text-sm font-bold">
                  <tr>
                    <th className="px-6 py-4">Service Type</th>
                    <th className="px-6 py-4">Standard (5-7 Days)</th>
                    <th className="px-6 py-4">Urgent (24-48 Hours)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {pricingData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-6 font-medium">{row.service}</td>
                      <td className="px-6 py-6">from <span className="text-gold font-bold">{row.standard}</span> / pg</td>
                      <td className="px-6 py-6">from <span className="text-gold font-bold">{row.urgent}</span> / pg</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-white/5 p-6 border-t border-white/10">
              <div className="grid md:grid-cols-2 gap-4 text-sm text-white/60">
                <p>• Prices based on 2,000 words per page (approx).</p>
                <p>• Discounts available for bulk orders (over 10,000 words).</p>
                <p>• Dissertation fee includes proposal & conclusions.</p>
                <p>• All prices include full references & bibliography.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-navy px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white transition-all shadow-lg"
            >
              Order Now via WhatsApp
            </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-navy italic">Voices of Success</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                variants={scrollVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl relative shadow-md"
              >
                <Quote className="absolute top-6 left-6 w-10 h-10 text-gold/20" />
                <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed">
                   "{t.text}"
                </p>
                <div className="flex items-center gap-4 border-t pt-6">
                  <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center font-bold text-navy">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">{t.name}</h4>
                    <p className="text-sm text-gray-500 uppercase tracking-tighter">{t.uni}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white border-t">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-navy rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Need Immediate Help?</h2>
              <p className="text-xl text-white/70 mb-12">Our support team is available 24/7 to discuss your project requirements. Get a personalized quote in minutes.</p>
              
              <div className="flex justify-center">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#25D366] text-white px-10 py-6 rounded-3xl text-2xl font-bold flex items-center gap-4 hover:scale-105 transition-transform"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-8 h-8"
                  >
                    <path d="M12.031 6.172c-2.277 0-4.14 1.841-4.14 4.119 0 0.814 0.237 1.572 0.648 2.222l-0.692 2.531 2.585-0.678c0.493 0.286 1.062 0.449 1.66 0.449 2.277 0 4.14-1.841 4.14-4.119s-1.851-4.124-4.101-4.124zm0 0.547c1.975 0 3.585 1.597 3.585 3.571s-1.61 3.571-3.585 3.571c-0.569 0-1.109-0.14-1.583-0.384l-0.113-0.059-1.523 0.4 0.407-1.488-0.063-0.103c-0.366-0.589-0.575-1.285-0.575-2.029 0.001-1.974 1.611-3.479 3.447-3.479zm0-6.719c-6.627 0-12 5.373-12 12 0 2.115 0.547 4.09 1.503 5.823l-1.503 5.485 5.617-1.474c1.789 1.139 3.91 1.766 6.383 1.766 6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 1c6.075 0 11 4.925 11 11s-4.925 11-11 11c-2.158 0-4.156-0.627-5.845-1.701l-0.113-0.071-3.21 0.842 0.858-3.131-0.082-0.134c-1.32-2.13-2.108-4.63-2.108-7.305 0-6.075 4.925-11 11-11z"/>
                  </svg>
                  Chat on WhatsApp — We Reply Fast!
                </a>
              </div>
            </div>
            {/* Visual fluff */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white/50 py-12 border-t border-white/5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-white font-serif text-xl font-bold mb-2">ReportAssistantHub <span className="text-gold">UK</span></h3>
            <p className="text-sm">Expert help for students worldwide.</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-white/70 mb-4">© 2025 ReportAssistantHub UK. All rights reserved.</p>
            <p className="max-w-md text-[10px] uppercase tracking-widest text-white/30 text-center">
              Our services are provided for research and reference purposes only. We encourage ethical use of our materials in accordance with your university's policies.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors underline underline-offset-4">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors underline underline-offset-4">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[999] bg-[#25D366] w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center text-white animate-whatsapp"
        aria-label="Contact us on WhatsApp"
      >
        <svg 
           viewBox="0 0 24 24" 
           fill="currentColor" 
           className="w-8 h-8 md:w-10 md:h-10"
         >
           <path d="M12.031 6.172c-2.277 0-4.14 1.841-4.14 4.119 0 0.814 0.237 1.572 0.648 2.222l-0.692 2.531 2.585-0.678c0.493 0.286 1.062 0.449 1.66 0.449 2.277 0 4.14-1.841 4.14-4.119s-1.851-4.124-4.101-4.124zm0 0.547c1.975 0 3.585 1.597 3.585 3.571s-1.61 3.571-3.585 3.571c-0.569 0-1.109-0.14-1.583-0.384l-0.113-0.059-1.523 0.4 0.407-1.488-0.063-0.103c-0.366-0.589-0.575-1.285-0.575-2.029 0.001-1.974 1.611-3.479 3.447-3.479zm0-6.719c-6.627 0-12 5.373-12 12 0 2.115 0.547 4.09 1.503 5.823l-1.503 5.485 5.617-1.474c1.789 1.139 3.91 1.766 6.383 1.766 6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 1c6.075 0 11 4.925 11 11s-4.925 11-11 11c-2.158 0-4.156-0.627-5.845-1.701l-0.113-0.071-3.21 0.842 0.858-3.131-0.082-0.134c-1.32-2.13-2.108-4.63-2.108-7.305 0-6.075 4.925-11 11-11z"/>
         </svg>
      </a>
    </div>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  );
}
