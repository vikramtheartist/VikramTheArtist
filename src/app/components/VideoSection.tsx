import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { Button } from './ui/button';

export function VideoSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Learn more about the Copilot community
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gradient-to-br from-blue-100 to-purple-100 group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NzI0MzAwOTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Copilot Community Demo"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="flex items-center justify-center size-20 rounded-full bg-white shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Play className="size-8 text-blue-600 ml-1" fill="currentColor" />
              </button>
            </div>

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="text-lg font-medium">
                See how organizations are transforming their AI adoption with Copilot communities
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 size-24 bg-blue-200 rounded-full blur-3xl opacity-40" />
          <div className="absolute -bottom-4 -left-4 size-32 bg-purple-200 rounded-full blur-3xl opacity-40" />
        </motion.div>
      </div>
    </section>
  );
}
