import { motion } from 'motion/react';
import imgIllustration from "figma:asset/b8e73351bce1a48d0d6d4c970536ecfe243f8bc2.png";
import imgIllustration1 from "figma:asset/34087925000d97f4c2f757f61dd05e28a2e2be35.png";
import imgIllustration2 from "figma:asset/916c34ded2eb5d7d683acb702d7e90838e3e4e9a.png";

const features = [
  {
    title: 'Content that works',
    description:
      'Get Microsoft-curated content that\'s ready to go. With Intelligent Importer, your existing knowledge fuels discovery and helps your community find answers faster through Related Questions.',
    image: imgIllustration,
  },
  {
    title: 'The power of community',
    description:
      'Build a vibrant community where knowledge thrives. From authoritative answers to shared learnings and guidance — it\'s where your organization connects, learns, and leads.',
    image: imgIllustration1,
  },
  {
    title: 'Measure what matters',
    description:
      'Understand how your organization feels about AI. Use built-in analytics to track engagement — and see 1.4x higher Copilot usage with an active community.',
    image: imgIllustration2,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Zero setup, preloaded content, insights on demand
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empower your organization to innovate faster with a trusted Copilot community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-[0px_1.6px_3.6px_0px_rgba(0,0,0,0.13),0px_0.3px_0.9px_0px_rgba(0,0,0,0.11)] hover:shadow-[0px_3.2px_7.2px_0px_rgba(0,0,0,0.13),0px_0.6px_1.8px_0px_rgba(0,0,0,0.11)] transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-32 h-32 object-contain"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}