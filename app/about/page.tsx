import type { Metadata } from "next";
import { FaIndustry, FaAward, FaUsers, FaGlobeAmericas } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Us | Electric Switchgear Solutions",
  description: "Learn about our company, our mission, and our commitment to delivering world-class electric switchgear solutions.",
};

const stats = [
  { icon: FaIndustry, value: "30+", label: "Years Experience" },
  { icon: FaAward, value: "500+", label: "Projects Completed" },
  { icon: FaUsers, value: "200+", label: "Expert Engineers" },
  { icon: FaGlobeAmericas, value: "50+", label: "Countries Served" },
];

const values = [
  {
    title: "Innovation",
    description: "Continuously advancing technology to meet evolving industry needs and exceed customer expectations.",
  },
  {
    title: "Quality",
    description: "Uncompromising commitment to manufacturing excellence and product reliability in every solution we deliver.",
  },
  {
    title: "Safety",
    description: "Prioritizing the safety of people and infrastructure through rigorous testing and certification processes.",
  },
  {
    title: "Sustainability",
    description: "Developing eco-friendly solutions that minimize environmental impact while maximizing energy efficiency.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-siemens-teal-500 to-siemens-teal-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
            Leading the industry in electric switchgear innovation and excellence since 1994
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-siemens-gray-700 leading-relaxed">
              <p>
                Founded over three decades ago, Electric Switchgear Solutions has grown from a small engineering firm into a global leader in power distribution technology. Our journey has been driven by a relentless commitment to innovation, quality, and customer satisfaction.
              </p>
              <p>
                We specialize in designing and manufacturing state-of-the-art electric switchgear systems that power critical infrastructure worldwide. From commercial buildings to industrial facilities, our solutions ensure reliable, safe, and efficient power distribution.
              </p>
              <p>
                With a team of over 200 expert engineers and technicians, we combine cutting-edge technology with time-tested engineering principles to deliver products that meet the highest international standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-siemens-gray-50 to-siemens-teal-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-siemens-teal-500 to-siemens-teal-700 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Icon className="text-white text-4xl" />
                  </div>
                  <div className="text-4xl font-bold text-siemens-teal-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-siemens-gray-700 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-2xl font-bold text-siemens-teal-500 mb-4">
                  {value.title}
                </h3>
                <p className="text-siemens-gray-700">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-siemens-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-siemens-teal-500">Our Mission</h2>
              <p className="text-lg text-siemens-gray-300 leading-relaxed">
                To provide innovative, reliable, and sustainable electric switchgear solutions that empower our clients to build safer, more efficient infrastructure while contributing to a cleaner energy future.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-siemens-teal-500">Our Vision</h2>
              <p className="text-lg text-siemens-gray-300 leading-relaxed">
                To be the global benchmark for excellence in electric switchgear technology, recognized for our innovation, quality, and commitment to advancing the power distribution industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-siemens-gray-900 mb-6">
            Join Us on Our Journey
          </h2>
          <p className="text-lg text-siemens-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're looking for a career opportunity or a partnership, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="btn-primary">
              Get in Touch
            </a>
            <a href="#" className="btn-outline">
              Careers
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
