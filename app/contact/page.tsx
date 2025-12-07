"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: "Visit Us",
    details: ["123 Industrial Park", "Tech City, TC 12345", "United States"],
  },
  {
    icon: FaPhone,
    title: "Call Us",
    details: ["+1 (555) 123-4567", "+1 (555) 123-4568", "Mon-Fri: 8am-6pm"],
  },
  {
    icon: FaEnvelope,
    title: "Email Us",
    details: ["info@electricswitchgear.com", "sales@electricswitchgear.com", "support@electricswitchgear.com"],
  },
  {
    icon: FaClock,
    title: "Business Hours",
    details: ["Monday - Friday: 8am - 6pm", "Saturday: 9am - 2pm", "Sunday: Closed"],
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-siemens-teal-500 to-siemens-teal-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
            Get in touch with our team of experts. We're here to help with your electric switchgear needs.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-siemens-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-siemens-teal-100 rounded-full mb-4">
                    <Icon className="text-siemens-teal-500 text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold text-siemens-gray-900 mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-siemens-gray-600 mb-1">
                      {detail}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-heading text-center mb-12">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-siemens-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-siemens-gray-300 rounded focus:outline-none focus:border-siemens-teal-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-siemens-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-siemens-gray-300 rounded focus:outline-none focus:border-siemens-teal-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-siemens-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-siemens-gray-300 rounded focus:outline-none focus:border-siemens-teal-500 transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-siemens-gray-700 font-semibold mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-siemens-gray-300 rounded focus:outline-none focus:border-siemens-teal-500 transition-colors"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-siemens-gray-700 font-semibold mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-siemens-gray-300 rounded focus:outline-none focus:border-siemens-teal-500 transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="product">Product Information</option>
                  <option value="quote">Request a Quote</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Opportunities</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-siemens-gray-700 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-siemens-gray-300 rounded focus:outline-none focus:border-siemens-teal-500 transition-colors resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-siemens-gray-200">
        <div className="h-full flex items-center justify-center">
          <div className="text-center">
            <FaMapMarkerAlt className="text-siemens-teal-500 text-6xl mx-auto mb-4" />
            <p className="text-xl text-siemens-gray-700">
              Interactive Map Would Be Displayed Here
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
