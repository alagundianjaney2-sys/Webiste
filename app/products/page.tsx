import type { Metadata } from "next";
import { FaBolt, FaIndustry } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
import { GiElectric } from "react-icons/gi";

export const metadata: Metadata = {
  title: "Products | Electric Switchgear Solutions",
  description: "Explore our comprehensive range of electric switchgear products including low, medium, and high voltage solutions.",
};

const productCategories = [
  {
    id: "low-voltage",
    title: "Low Voltage Switchgear",
    voltage: "Up to 1kV",
    description: "Comprehensive low voltage switchgear solutions for reliable power distribution and protection in commercial and industrial applications.",
    icon: FaBolt,
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Modular design for easy installation",
      "Compact footprint saves space",
      "High short-circuit withstand capability",
      "Comprehensive protection features",
      "Easy maintenance and service access",
      "Smart metering integration",
    ],
    applications: ["Commercial Buildings", "Industrial Plants", "Data Centers", "Infrastructure"],
  },
  {
    id: "medium-voltage",
    title: "Medium Voltage Switchgear",
    voltage: "1kV - 36kV",
    description: "Advanced medium voltage switchgear featuring gas-insulated and air-insulated technologies for superior performance and safety.",
    icon: MdElectricBolt,
    gradient: "from-siemens-teal-500 to-siemens-teal-700",
    features: [
      "Gas-insulated switchgear (GIS)",
      "Air-insulated switchgear (AIS)",
      "Arc-resistant design options",
      "Compact and modular construction",
      "Digital monitoring and control",
      "Environmentally friendly SF6 alternatives",
    ],
    applications: ["Power Distribution", "Industrial Facilities", "Renewable Energy", "Marine Applications"],
  },
  {
    id: "high-voltage",
    title: "High Voltage Switchgear",
    voltage: "Above 36kV",
    description: "State-of-the-art high voltage switchgear for transmission and distribution networks requiring maximum reliability.",
    icon: GiElectric,
    gradient: "from-indigo-500 to-purple-600",
    features: [
      "Advanced circuit breaker technology",
      "SF6-free environmentally conscious options",
      "Remote monitoring and diagnostics",
      "Maximum reliability and safety",
      "Minimal maintenance requirements",
      "Seismic-resistant design options",
    ],
    applications: ["Power Transmission", "Substations", "Heavy Industry", "Utilities"],
  },
  {
    id: "distribution",
    title: "Distribution Boards & Panels",
    voltage: "Various",
    description: "Complete range of distribution boards and control panels designed for efficient power distribution and circuit protection.",
    icon: FaIndustry,
    gradient: "from-emerald-500 to-teal-600",
    features: [
      "Customizable configurations",
      "Intelligent load management",
      "Energy monitoring capabilities",
      "Surge protection integration",
      "Modular busbar systems",
      "IP-rated enclosures for harsh environments",
    ],
    applications: ["Buildings", "Manufacturing", "Critical Infrastructure", "Renewable Integration"],
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-siemens-teal-500 to-siemens-teal-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
            Innovative electric switchgear solutions engineered for reliability, safety, and performance across all voltage levels.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-siemens-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {productCategories.map((category, index) => {
              const Icon = category.icon;
              return (
              <div
                key={category.id}
                id={category.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-lg shadow-xl p-12 text-center hover:shadow-2xl transition-shadow duration-300">
                    <div className={`inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br ${category.gradient} rounded-3xl mb-6 shadow-xl`}>
                      <Icon className="text-white text-7xl" />
                    </div>
                    <div className="inline-block bg-siemens-teal-100 text-siemens-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      {category.voltage}
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold text-siemens-gray-900 mb-4">
                    {category.title}
                  </h2>
                  <p className="text-lg text-siemens-gray-600 mb-6">
                    {category.description}
                  </p>

                  <h3 className="text-xl font-bold text-siemens-gray-900 mb-3">Key Features:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-siemens-teal-500 mr-2 mt-1">✓</span>
                        <span className="text-siemens-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-bold text-siemens-gray-900 mb-3">Applications:</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.applications.map((app, idx) => (
                      <span
                        key={idx}
                        className="bg-siemens-gray-200 text-siemens-gray-800 px-4 py-2 rounded-full text-sm"
                      >
                        {app}
                      </span>
                    ))}
                  </div>

                  <button className="btn-primary">Request Quote</button>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-siemens-gray-900 mb-6">
            Need Help Choosing the Right Solution?
          </h2>
          <p className="text-lg text-siemens-gray-600 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you select the perfect switchgear solution for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="btn-primary">
              Contact Our Experts
            </a>
            <a href="#" className="btn-outline">
              Download Catalog
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
