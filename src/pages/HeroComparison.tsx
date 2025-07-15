import { useState } from 'react';
import { motion } from 'framer-motion';
import EnhancedHero from '../components/sections/EnhancedHero';
import Hero from '../components/sections/Hero';

export default function HeroComparison() {
  const [showEnhanced, setShowEnhanced] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toggle Controls */}
      <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4">
        <h3 className="text-sm font-semibold mb-3 text-gray-800">
          Hero Section Comparison
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => setShowEnhanced(false)}
            className={`px-3 py-2 text-xs rounded-md transition-all ${
              !showEnhanced 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Current Version
          </button>
          <button
            onClick={() => setShowEnhanced(true)}
            className={`px-3 py-2 text-xs rounded-md transition-all ${
              showEnhanced 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Enhanced Version
          </button>
        </div>
      </div>

      {/* Hero Section Display */}
      <motion.div
        key={showEnhanced ? 'enhanced' : 'current'}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {showEnhanced ? <EnhancedHero /> : <Hero />}
      </motion.div>

      {/* Comparison Information */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Current Version Features */}
          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              Current Version
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Soft gradient background
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Basic scroll animations
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Clear messaging hierarchy
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Professional color palette
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">-</span>
                Text-only trust indicators
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">-</span>
                Limited visual engagement
              </li>
            </ul>
          </div>

          {/* Enhanced Version Features */}
          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              Enhanced Version
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Professional illustrations (unDraw.co)
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Advanced Framer Motion animations
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Interactive trust badges
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Modern UI components (Lucide icons)
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Enhanced CTA buttons with micro-interactions
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Improved visual hierarchy and engagement
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Grid-based responsive layout
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Performance optimized animations
              </li>
            </ul>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Enhanced Technology Stack
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <h4 className="font-semibold text-gray-800">Framer Motion</h4>
              <p className="text-sm text-gray-600 mt-1">
                Physics-based animations and micro-interactions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <h4 className="font-semibold text-gray-800">unDraw.co</h4>
              <p className="text-sm text-gray-600 mt-1">
                Professional illustrations customized for psychology
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <h4 className="font-semibold text-gray-800">Lucide React</h4>
              <p className="text-sm text-gray-600 mt-1">
                Clean, professional icon system
              </p>
            </div>
          </div>
        </div>

        {/* Implementation Benefits */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-sm border">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Expected Improvements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">15-20%</div>
              <div className="text-sm text-gray-600">Bounce Rate Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">25-30%</div>
              <div className="text-sm text-gray-600">Session Duration Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">10-15%</div>
              <div className="text-sm text-gray-600">Conversion Rate Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">20%</div>
              <div className="text-sm text-gray-600">Mobile Engagement Increase</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
