import { FaShieldAlt, FaCog, FaLeaf, FaChartLine } from "react-icons/fa";

const features = [
  {
    icon: FaShieldAlt,
    title: "Uncompromising Safety",
    description: "Built to the highest international safety standards with advanced protection mechanisms.",
  },
  {
    icon: FaCog,
    title: "Precision Engineering",
    description: "German-inspired engineering excellence for reliable operation in critical applications.",
  },
  {
    icon: FaLeaf,
    title: "Sustainable Solutions",
    description: "Eco-friendly designs with reduced environmental impact and improved energy efficiency.",
  },
  {
    icon: FaChartLine,
    title: "Smart Monitoring",
    description: "IoT-enabled systems with real-time monitoring and predictive maintenance capabilities.",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Why Choose Us</h2>
          <div className="h-1 w-20 bg-siemens-teal-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-siemens-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with proven reliability to deliver switchgear solutions that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-siemens-gray-50 transition-all duration-300 group hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-siemens-teal-400 to-siemens-teal-600 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6">
                  <Icon className="text-white text-4xl" />
                </div>
                <h3 className="text-xl font-bold text-siemens-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-siemens-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
