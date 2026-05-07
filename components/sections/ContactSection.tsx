"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, CheckCircle, AlertCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import toast from "react-hot-toast";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      // EmailJS integration - replace with your IDs:
      // import emailjs from '@emailjs/browser';
      // await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);

      // Simulate sending for demo
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      toast.success("Message sent! I'll get back to you soon. 🚀");
    } catch {
      toast.error("Failed to send. Please email me directly.");
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full bg-[#0a1628] border border-white/10 text-white placeholder-[#8892b0]/50 rounded-xl px-4 py-3.5 text-sm font-mono focus:outline-none focus:border-[#00e5ff]/50 focus:ring-1 focus:ring-[#00e5ff]/20 transition-all duration-200";

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute right-0 bottom-0 w-72 h-72 bg-[#00e5ff]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="05"
          title="Contact"
          subtitle="Have a project in mind? Let's connect."
        />

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-12"
        >
          <p className="text-[#8892b0] text-lg leading-relaxed">
            I'm currently open to new opportunities and collaborations. Whether
            you have a project idea, job offer, or just want to say hi — my
            inbox is always open!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl border border-white/5 p-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/20 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-[#00e5ff]" />
                </div>
                <div>
                  <p className="font-mono text-xs text-[#8892b0] mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:harshrana15april2020@gmail.com"
                    className="text-white text-sm hover:text-[#00e5ff] transition-colors"
                  >
                    harshrana15april2020@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/20 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-[#00e5ff]" />
                </div>
                <div>
                  <p className="font-mono text-xs text-[#8892b0] mb-1">
                    Location
                  </p>
                  <p className="text-white text-sm">Chennai, Tamil Nadu, India</p>
                  <p className="text-[#8892b0] text-xs mt-0.5">
                    Open to remote worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Availability badge */}
            <div className="glass rounded-2xl border border-[#00e5ff]/20 p-6 bg-[#00e5ff]/3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-mono text-xs text-green-400 font-semibold tracking-wider">
                  AVAILABLE FOR WORK
                </span>
              </div>
              <p className="text-[#8892b0] text-sm">
                Currently looking for internship & full-time opportunities.
                Response time: within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl border border-[#00e5ff]/20 p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]"
              >
                <CheckCircle size={48} className="text-[#00e5ff] mb-4" />
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-[#8892b0] mb-6">
                  Thanks for reaching out. I'll get back to you soon!
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="font-mono text-sm text-[#00e5ff] border border-[#00e5ff]/30 px-6 py-2 rounded-xl hover:bg-[#00e5ff]/10 transition-all"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl border border-white/5 p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-mono text-xs text-[#8892b0] mb-2 block">
                      NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-[#8892b0] mb-2 block">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-[#8892b0] mb-2 block">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-[#8892b0] mb-2 block">
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="group w-full py-4 bg-[#00e5ff] text-[#030712] font-bold rounded-xl hover:bg-[#00e5ff]/90 transition-all duration-300 hover:shadow-neon flex items-center justify-center gap-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#030712] border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send
                        size={15}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-center text-[#8892b0] text-xs font-mono">
                  Or email me directly at{" "}
                  <a
                    href="mailto:harshrana@example.com"
                    className="text-[#00e5ff] hover:underline"
                  >
                    harshrana15april2020@gmail.com
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
