import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 p-12 text-center shadow-2xl"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="size-4" />
              Start Your AI Journey Today
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to lead your organization's AI journey?
            </h2>
            
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Your verified Copilot community is one click away.
            </p>
            
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Create a Copilot community today
              <ArrowRight className="ml-2 size-5" />
            </Button>
          </div>

          {/* Decorative circles */}
          <div className="absolute top-0 right-0 size-64 bg-purple-500 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 size-64 bg-blue-400 rounded-full blur-3xl opacity-20" />
        </motion.div>
      </div>
    </section>
  );
}
