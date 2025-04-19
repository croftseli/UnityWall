"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { PhoneAndroid } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { Input } from "@/components/ui/input"; // Updated import to use the new Input component

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
    <main className="min-h-screen bg-gray-900 text-gray-200">
      {/* Hero Section */}
      <section className="relative h-70 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900"></div>

        <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in <span className="text-blue-400">Touch</span>
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
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Information */}
            <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-blue-300 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-blue-400 text-3xl mt-1">
                    <Email />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-200">
                      Email
                    </h3>
                    <p className="text-gray-400">support@unitywall.co</p>
                    <p className="text-gray-400 mt-1">
                      We usually respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-blue-400 text-3xl mt-1">
                    <PhoneAndroid />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-200">
                      Phone
                    </h3>
                    <p className="text-gray-400">+1 (615)-424-3176</p>
                    <p className="text-gray-400 mt-1">
                      Text or WhatsApp for quick responses
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-blue-400 text-3xl mt-1">
                    <LinkedInIcon />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-200">
                      Connect with Us
                    </h3>
                    <a
                      href="https://linkedin.com/company/unitywall"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 block hover:text-blue-400 transition-colors"
                    >
                      linkedin.com/company/unitywall
                    </a>
                    <p className="text-gray-400 mt-1">
                      Follow for updates and opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-blue-300 mb-6">
                Send Us a Message
              </h2>

              <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-300 mb-2">Your Name</label>
                  <Input
                    type="text"
                    name="user_name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">
                    Your Email Address
                  </label>
                  <Input
                    type="email"
                    name="user_email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    required
                  />
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
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex justify-center items-center"
                    disabled={formStatus === "sending"}
                  >
                    {formStatus === "sending" ? (
                      <span>Sending...</span>
                    ) : formStatus === "success" ? (
                      <span>Message Sent!</span>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </button>
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
      <section className="py-20 px-4 md:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-blue-300 mb-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Frequently Asked Questions
          </motion.h2>

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
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-300 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}