import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-siemens-teal-500 via-siemens-teal-600 to-siemens-teal-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Power Your Project?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Contact our expert team today to discuss your electric switchgear requirements and discover the perfect solution for your needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="bg-white text-siemens-teal-500 hover:bg-siemens-gray-100 font-semibold py-4 px-10 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            Get in Touch
          </Link>
          <Link
            href="/products"
            className="border-2 border-white text-white hover:bg-white hover:text-siemens-teal-500 font-semibold py-4 px-10 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  );
}
