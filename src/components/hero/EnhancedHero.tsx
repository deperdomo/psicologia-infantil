import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Shield, Award, Heart } from 'lucide-react';
import { UnDrawIllustration } from './UnDrawIllustration';

interface EnhancedHeroProps {
  onGetStarted?: () => void;
  onLearnMore?: () => void;
}

export const EnhancedHero: React.FC<EnhancedHeroProps> = ({
  onGetStarted,
  onLearnMore
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const trustIndicators = [
    {
      icon: Shield,
      text: "Psicóloga",
      description: "Especialista en intervención emocional y familiar"
    },
    {
      icon: Award,
      text: "Especialista Certificada",
      description: "Máster en Psicología Infantil y Juvenil"
    },
    {
      icon: Heart,
      text: "+200 Familias",
      description: "Han confiado en nosotros"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-pink-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-yellow-300 rounded-full blur-2xl"></div>
      </div>

      <motion.div
        className="container mx-auto px-6 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              Consulta online y presencial
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-5xl lg:text-6xl font-bold font-heading text-gray-900 leading-tight"
              variants={itemVariants}
            >
              Acompañamos el{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600 font-serif" style={{ fontFamily: 'Merriweather, serif' }}>
                desarrollo emocional
                </span>{' '}
              de tu hijo
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-gray-600 leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              Psicología infantil especializada con enfoque integral. 
              Creamos un espacio seguro donde los niños pueden expresarse 
              y desarrollar herramientas emocionales para la vida.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6"
              variants={itemVariants}
            >
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200"
                  
                >
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <indicator.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{indicator.text}</p>
                    <p className="text-xs text-gray-600">{indicator.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button
                onClick={onGetStarted}
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Solicitar Consulta
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={onLearnMore}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Conocer más
              </motion.button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              className="flex items-center space-x-4 pt-6"
              variants={itemVariants}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gradient-to-br from-blue-400 to-pink-400 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center space-x-1 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm font-semibold text-gray-900 ml-2">4.9/5</span>
                </div>
                <p className="text-xs text-gray-600">
                  Más de 200 familias satisfechas
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Illustration Column */}
          <motion.div
            className="relative flex justify-center"
            variants={imageVariants}
          >
            {/* Main Illustration */}
            <div className="relative">
              <UnDrawIllustration 
                name="family-time"
                className="w-full max-w-lg h-auto"
                primaryColor="#3B82F6"
                accentColor="#EC4899"
              />
              
              {/* Elementos decorativos sutiles */}
              <motion.div
                className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-60 blur-sm"
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="absolute -bottom-4 -right-4 w-14 h-14 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full opacity-50 blur-sm"
                animate={{
                  y: [0, 8, 0],
                  scale: [1, 0.9, 1]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />

              <motion.div
                className="absolute top-1/3 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full opacity-40 blur-sm"
                animate={{
                  x: [0, 4, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex flex-col items-center space-y-2 text-gray-400">
            <span className="text-xs font-medium">Descubre más</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-300 rounded-full mt-2"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
