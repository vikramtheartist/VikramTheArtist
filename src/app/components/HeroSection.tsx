import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import imgBannerImg from "figma:asset/7a9f925e7c13e4d82aa389b2b7c241f6d1b958d8.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Fuel AI transformation—create a verified Copilot community instantly
            </h1>
            
            <div className="flex items-start gap-2 mb-6">
              <Sparkles className="size-5 text-orange-500 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Organizations with an active Copilot community see a 30% higher adoption rate.</span>
              </p>
            </div>
            
            <div className="flex flex-col gap-4 mb-8">
              <Button size="lg" className="bg-[#006CBF] hover:bg-[#005a9e] text-white w-fit px-6">
                Create a Copilot community
              </Button>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm text-gray-900">Already created a Copilot community?</p>
              <button className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
                Apply adoption features to an existing community.
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-end overflow-hidden"
          >
            <img
              src={imgBannerImg}
              alt="Copilot Community"
              className="w-[130%] object-cover object-left"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}