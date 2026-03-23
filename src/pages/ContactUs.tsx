import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight,
  Send,
  MessageSquare,
  Globe,
  ShieldCheck
} from 'lucide-react';
import { Button } from '../components/Button';
import { MarketTickerStrip } from '../components/MarketTickerStrip';

const ContactCard = ({ icon: Icon, title, content, subContent }: { icon: any, title: string, content: string[], subContent?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] relative overflow-hidden group flex flex-col items-center text-center"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-gold/10 transition-colors" />
    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-7 h-7 text-white" />
    </div>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <div className="space-y-1 mb-4">
      {content.map((line, i) => (
        <p key={i} className="text-white font-bold text-sm">{line}</p>
      ))}
    </div>
    {subContent && <p className="text-white/40 text-xs leading-relaxed">{subContent}</p>}
  </motion.div>
);

export const ContactUs = () => {
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fullName = (form.elements.namedItem('fullName') as HTMLInputElement)?.value?.trim() ?? '';
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value?.trim() ?? '';
    const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value?.trim() ?? '';
    const queryType = (form.elements.namedItem('queryType') as HTMLSelectElement)?.value ?? '';
    const subject =
      (form.elements.namedItem('subject') as HTMLInputElement)?.value?.trim() || 'Contact from oneFX website';
    const description = (form.elements.namedItem('description') as HTMLTextAreaElement)?.value?.trim() ?? '';

    const body = `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nQuery type: ${queryType}\n\n${description}`;
    window.location.href = `mailto:support@onefx.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const tickerAssets = [
    { symbol: 'EUR/USD', price: '1.15690', change: '-0.00142', percent: '-0.12%', trend: 'down' as const, flags: ['eu', 'us'] },
    { symbol: 'GBP/USD', price: '1.38420', change: '+0.00215', percent: '+0.15%', trend: 'up' as const, flags: ['gb', 'us'] },
    { symbol: 'USD/JPY', price: '110.250', change: '+0.450', percent: '+0.41%', trend: 'up' as const, flags: ['us', 'jp'] },
    { symbol: 'XAU/USD', price: '2024.50', change: '+12.30', percent: '+0.61%', trend: 'up' as const, flags: ['un', 'us'] },
    { symbol: 'BTC/USD', price: '64250.00', change: '+1240.00', percent: '+1.98%', trend: 'up' as const, flags: ['un', 'us'] },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-[calc(5rem+32px)] pb-24 bg-[#1A0B2E] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
          
          {/* Diagonal Streaks */}
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-px bg-linear-to-r from-transparent via-white/10 to-transparent w-[200%]"
              style={{
                top: `${20 + i * 15}%`,
                left: '-50%',
                transform: 'rotate(-45deg)',
                animation: `diagonal-streaks ${10 + i * 2}s linear infinite`,
                animationDelay: `${i * 2}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight"
            >
              Get in <span className="text-gold">Touch</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl text-white/80 leading-relaxed max-w-2xl"
            >
              Reach out to our expert support team for fast, transparent answers to your trading, account, or partnership queries.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ContactCard 
              icon={Mail}
              title="Email Support"
              content={["compliance@onefx.com", "support@onefx.com"]}
              subContent="Contact our customer support team anytime. We do our best to respond within 2 hours."
            />
            <ContactCard 
              icon={Phone}
              title="Phone Support"
              content={["+35725248954"]}
              subContent="No matter where you are globally, connecting with us is easy."
            />
            <ContactCard 
              icon={Clock}
              title="Office Timing"
              content={["8am to 4pm", "Friday until 2:30PM"]}
              subContent="Monday to Thursday"
            />
            <ContactCard 
              icon={MapPin}
              title="Office Address"
              content={["Christaki Kranou 46, Office 2", "Limassol, Cyprus"]}
              subContent="Registration No: 2025-00468"
            />
          </div>
        </div>
      </section>

      <MarketTickerStrip assets={tickerAssets} />

      {/* Contact Form Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-[#1A1B23] mb-8 leading-tight">
                Connect with us & <br />
                experience the difference
              </h2>
              <p className="text-lg text-dark/60 mb-12 leading-relaxed max-w-md">
                At oneFX, we are dedicated to providing a seamless trading experience. Our support team is here to assist you with any inquiries or issues you may encounter.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Globe, title: "Global Presence", desc: "Serving traders across 150+ countries worldwide." },
                  { icon: ShieldCheck, title: "Secure & Regulated", desc: "Your funds are protected with top-tier security protocols." },
                  { icon: Send, title: "Fast Execution", desc: "Experience ultra-low latency and lightning-fast trades." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-[#1A1B23] font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-dark/40 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#F8F9FA] rounded-[3rem] p-10 md:p-12 border border-gray-100 shadow-sm"
            >
              <form className="space-y-8" onSubmit={handleContactSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-dark ml-1">Full Name*</label>
                    <input 
                      name="fullName"
                      type="text" 
                      placeholder="Enter your full name"
                      className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-dark focus:outline-none focus:border-gold transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-dark ml-1">E-mail address*</label>
                    <input 
                      name="email"
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-dark focus:outline-none focus:border-gold transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-dark ml-1">Phone*</label>
                    <input 
                      name="phone"
                      type="tel" 
                      placeholder="000 000 00 00"
                      className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-dark focus:outline-none focus:border-gold transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-dark ml-1">Type of Query</label>
                    <div className="relative">
                      <select name="queryType" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-dark focus:outline-none focus:border-gold transition-all appearance-none">
                        <option>Select your type</option>
                        <option>General Inquiry</option>
                        <option>Technical Support</option>
                        <option>Account Opening</option>
                        <option>Partnership</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ArrowRight className="w-4 h-4 text-dark/40 rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-dark ml-1">Subject</label>
                  <input 
                    name="subject"
                    type="text" 
                    placeholder="Let us know how we can help you"
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-dark focus:outline-none focus:border-gold transition-all"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-dark ml-1">Description</label>
                  <textarea 
                    name="description"
                    rows={5}
                    placeholder="Please tell us more about your question"
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-dark focus:outline-none focus:border-gold transition-all resize-none"
                  />
                </div>

                <Button type="submit" className="px-12 py-5 text-lg font-bold bg-linear-to-r from-[#E5C384] to-[#A67C37] border-none text-white rounded-full hover:opacity-90 transition-opacity">
                  Submit
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-[#0A0B10] relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full -translate-y-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            >
              Power Your Trading <br />
              <span className="text-gold">Journey Today</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 mb-12 leading-relaxed"
            >
              Access Forex, Shares, Commodities and Metals with advanced platform.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button to="/signup" className="px-12 py-6 text-xl font-bold bg-white text-dark border-none rounded-full hover:bg-gray-100 transition-all group">
                Open an Account
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
