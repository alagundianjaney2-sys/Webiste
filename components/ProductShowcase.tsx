import Link from "next/link";
import { FaBolt, FaIndustry, FaNetworkWired, FaServer } from "react-icons/fa";
import { MdElectricBolt, MdPowerSettingsNew } from "react-icons/md";
import { GiElectric } from "react-icons/gi";

const products = [
  {
    id: 1,
    title: "Low Voltage Switchgear",
    description: "Reliable protection and control for electrical distribution systems up to 1kV.",
    features: ["Compact Design", "Easy Maintenance", "High Safety Standards"],
    icon: FaBolt,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Medium Voltage Switchgear",
    description: "Advanced solutions for power distribution in the 1kV to 36kV range.",
    features: ["Gas-Insulated", "Arc-Resistant", "Modular System"],
    icon: MdElectricBolt,
    gradient: "from-siemens-teal-500 to-siemens-teal-700",
  },
  {
    id: 3,
    title: "High Voltage Switchgear",
    description: "Cutting-edge technology for transmission and distribution above 36kV.",
    features: ["SF6-Free Options", "Digital Monitoring", "Maximum Reliability"],
    icon: GiElectric,
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    id: 4,
    title: "Distribution Boards",
    description: "Complete power distribution and circuit protection solutions.",
    features: ["Customizable", "Smart Metering", "Energy Efficient"],
    icon: FaNetworkWired,
    gradient: "from-emerald-500 to-teal-600",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-16 bg-siemens-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Our Product Range</h2>
          <p className="text-lg text-siemens-gray-600 max-w-3xl mx-auto">
            Comprehensive electric switchgear solutions designed for reliability, safety, and performance in demanding industrial applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
            <div key={product.id} className="card group hover:scale-105 transition-all duration-300">
              <div className={`h-2 bg-gradient-to-r ${product.gradient}`}></div>
              <div className="p-6">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${product.gradient} rounded-2xl mb-4 shadow-lg transform group-hover:rotate-6 transition-all duration-300`}>
                  <Icon className="text-white text-4xl" />
                </div>
                <h3 className="text-xl font-bold text-siemens-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-siemens-gray-600 mb-4">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-siemens-gray-700">
                      <span className="text-siemens-teal-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/products"
                  className="text-siemens-teal-500 hover:text-siemens-teal-600 font-semibold inline-flex items-center"
                >
                  Learn More →
                </Link>
              </div>
            </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
