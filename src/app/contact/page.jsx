"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { PhoneAndroid } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { Input } from "@/components/ui/input";

export default function Contact() {
  const [formStatus, setFormStatus] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const formRef = useRef();

  const SERVICE_ID = "service_u861zjh";
  const TEMPLATE_ID = "template_l7n7cu1";
  const PUBLIC_KEY = "EYjZPvB2Kv3urKZ5u";

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    setFormErrors({});

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setFormStatus("success");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("Failed to send email:", error.text);
        setFormStatus("error");
        setFormErrors({
          general: "Failed to send your message. Please try again later.",
        });
      });
  };

  return (
    <main className="min-h-screen bg-gray-700 text-gray-300">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 h-70 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-700 opacity-20"></div>
        <div className="absolute inset-0 bg-gray-700 from-gray-900/0 to-gray-900"></div>

        <div className="relative z-10 text-center md:text-left max-w-6xl px-4 md:px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(
                  64deg,
                  rgba(139, 172, 223, 1) 0%,
                  rgba(177, 211, 233, 1) 50%,
                  rgb(251, 246, 156) 90%
                )`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Have a project in mind or questions about our services? We'd love to
            hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Information */}
            <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-300 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Email Button */}
                <a
                  href="mailto:elijah@unitywall.co"
                  className="flex items-center space-x-4 border border-transparent rounded-lg p-4 hover:bg-blue-900 transition relative"
                  style={{
                    borderRadius: "1rem",
                  }}
                >
                  <div className="text-blue-400 text-3xl">
                    <Email />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-300">
                      Email
                    </h3>
                    <p className="text-gray-300">
                      <a
                        href="mailto:elijah@unitywall.co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-blue-400"
                      >
                        support@unitywall.co
                      </a>
                    </p>
                    <p className="text-gray-300 text-sm mt-1">
                      We usually respond within 24 hours
                    </p>
                  </div>
                  <style jsx>{`
                    a::before {
                      content: "";
                      position: absolute;
                      inset: 0;
                      border-radius: 1rem;
                      border: 2px solid transparent;
                      background: linear-gradient(
                          64deg,
                          rgba(139, 172, 223, 1) 0%,
                          rgba(177, 211, 233, 1) 50%,
                          rgb(251, 246, 156) 90%
                        )
                        border-box;
                      -webkit-mask: linear-gradient(#fff 0 0) padding-box,
                        linear-gradient(#fff 0 0);
                      -webkit-mask-composite: destination-out;
                      mask-composite: exclude;
                      pointer-events: none;
                    }
                  `}</style>
                </a>

                {/* Phone Button */}
                <a
                  href="https://wa.me/16154243176"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 border border-transparent rounded-lg p-4 hover:bg-blue-900 transition relative"
                  style={{
                    borderRadius: "1rem",
                  }}
                >
                  <div className="text-blue-400 text-3xl">
                    <PhoneAndroid />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-200">
                      Phone
                    </h3>
                    <p className="text-gray-300">
                      <a
                        href="tel:+16154243176"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-blue-400"
                      >
                        +1 (615)-424-3176
                      </a>
                    </p>
                    <p className="text-gray-300 text-sm mt-1">
                      Text or <span className="text-green-400">WhatsApp</span>{" "}
                      for quick responses
                    </p>
                  </div>
                  <style jsx>{`
                    a::before {
                      content: "";
                      position: absolute;
                      inset: 0;
                      border-radius: 1rem;
                      border: 2px solid transparent;
                      background: linear-gradient(
                          64deg,
                          rgba(139, 172, 223, 1) 0%,
                          rgba(177, 211, 233, 1) 50%,
                          rgb(251, 246, 156) 90%
                        )
                        border-box;
                      -webkit-mask: linear-gradient(#fff 0 0) padding-box,
                        linear-gradient(#fff 0 0);
                      -webkit-mask-composite: destination-out;
                      mask-composite: exclude;
                      pointer-events: none;
                    }
                  `}</style>
                </a>

                {/* LinkedIn Button */}
                <a
                  href="https://linkedin.com/company/unitywall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 border border-transparent rounded-lg p-4 hover:bg-blue-900 transition relative"
                  style={{
                    borderRadius: "1rem",
                  }}
                >
                  <div className="text-blue-300 text-3xl">
                    <LinkedInIcon />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-300">
                      Connect with Us
                    </h3>
                    <p className="text-gray-300">
                      <a
                        href="https://linkedin.com/company/unitywall"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-blue-400"
                      >
                        UnityWall on LinkedIn
                      </a>
                    </p>
                    <p className="text-gray-300 text-sm mt-1">
                      Follow for updates and opportunities
                    </p>
                  </div>
                  <style jsx>{`
                    a::before {
                      content: "";
                      position: absolute;
                      inset: 0;
                      border-radius: 1rem;
                      border: 2px solid transparent;
                      background: linear-gradient(
                          64deg,
                          rgba(139, 172, 223, 1) 0%,
                          rgba(177, 211, 233, 1) 50%,
                          rgb(251, 246, 156) 90%
                        )
                        border-box;
                      -webkit-mask: linear-gradient(#fff 0 0) padding-box,
                        linear-gradient(#fff 0 0);
                      -webkit-mask-composite: destination-out;
                      mask-composite: exclude;
                      pointer-events: none;
                    }
                  `}</style>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-300 mb-6">
                Send Us a Message
              </h2>

              <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-300 mb-2">Your Name</label>
                  <Input type="text" name="user_name" required />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">
                    Your Email Address
                  </label>
                  <Input type="email" name="user_email" required />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Subject</label>
                  <Input type="text" name="subject" required />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                    required
                  ></textarea>
                </div>

                <div>
                  <motion.button
                    type="submit"
                    className="cta-button-full w-full"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 40px rgba(59, 130, 246, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    disabled={formStatus === "sending"}
                  >
                    {formStatus === "sending" ? (
                      <span>Sending...</span>
                    ) : formStatus === "success" ? (
                      <span>Message Sent!</span>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </motion.button>
                </div>

                {formStatus === "success" && (
                  <div className="text-green-400 text-center">
                    Thanks for reaching out! We'll get back to you soon.
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="text-red-400 text-center">
                    {formErrors.general ||
                      "An error occurred. Please try again later."}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-20 px-4 md:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-2 text-center bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(
                64deg,
                rgba(139, 172, 223, 1) 0%,
                rgba(177, 211, 233, 1) 50%,
                rgb(251, 246, 156) 90%
              )`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Please note that we do not begin any work without a signed contract.
          </motion.p>

          <div className="space-y-6">
            {[
              {
                question:
                  "What information do you need to start a website project?",
                answer:
                  "To get started, we typically need your business goals, target audience, design preferences, content requirements, and technical specifications. We'll guide you through this process during our initial consultation.",
              },
              {
                question: "How long does it take to develop a website?",
                answer:
                  "Project timelines vary based on complexity. A simple website might take 2-4 weeks, while more complex projects can take 2-3 months. We'll provide a detailed timeline during our planning phase.",
              },
              {
                question: "Do you offer website maintenance after launch?",
                answer:
                  "Yes, we offer comprehensive maintenance packages that include security updates, performance optimization, content updates, and technical support to keep your site running smoothly.",
              },
              {
                question: "What are your payment terms?",
                answer:
                  "We typically require a 50% deposit to begin work, with the remaining balance due upon project completion. Continual updates and maintenance will be separately billed. If it suits your business model, we can also establish a profit sharing agreement instead of / in addition to a flat fee.",
              },
              {
                question:
                  "Do you offer a consultation before starting a project?",
                answer:
                  "Yes, we offer a free 30-minute consultation to discuss your needs and determine the best approach for your website. Contact us to schedule your consultation and find out more.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-300 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
