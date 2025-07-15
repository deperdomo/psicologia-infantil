import { motion, type Variants } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Heart, Shield, Award, BookOpen, ArrowDown } from 'lucide-react';
import UnDrawIllustration from '../illustrations/UnDrawIllustration';

export default function EnhancedHero() {
  const { elementRef: heroRef } = useScrollAnimation<HTMLElement>();
  const { elementRef: titleRef } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: subtitleRef } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: buttonsRef } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: trustRef } = useScrollAnimation<HTMLDivElement>();

  // Animation variants for Framer Motion
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] py-24 lg:py-32 overflow-hidden min-h-screen flex items-center"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      
      {/* Floating Background Elements */}
      <motion.div 
        animate={{ y: [-20, 20, -20] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 left-10 w-72 h-72 bg-[var(--highlight)]/10 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ y: [-20, 20, -20] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl"
      />
      
      {/* Decorative Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-[var(--highlight)]/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Enhanced Main Heading */}
            <motion.div 
              ref={titleRef}
              variants={itemVariants}
              className="space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-[var(--text)] backdrop-blur-sm border border-white/30"
              >
                <Heart className="w-4 h-4 mr-2 text-[var(--highlight)]" />
                Especialista en Psicología Infantil
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text)] leading-tight">
                Acompañando la infancia con
                <motion.span 
                  className="block text-[var(--highlight)] mt-2"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  ternura, límites y herramientas emocionales
                </motion.span>
              </h1>
            </motion.div>

            {/* Enhanced Subtitle */}
            <motion.div 
              ref={subtitleRef}
              variants={itemVariants}
            >
              <p className="text-lg md:text-xl text-[var(--muted-text)] leading-relaxed font-light max-w-2xl">
                En este espacio encontrarás acompañamiento profesional para niñas, niños y sus familias,
                en momentos de cambio, conflicto o malestar emocional.
              </p>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              ref={buttonsRef}
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="/reserva-cita"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[var(--highlight)] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[var(--highlight)] to-[var(--button-hover)]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Pedir cita o escribir ahora</span>
                </span>
              </motion.a>
              
              <motion.a
                href="/blog"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[var(--highlight)] bg-white/80 backdrop-blur-sm border-2 border-[var(--highlight)]/30 rounded-xl hover:bg-[var(--highlight)] hover:text-white transition-all duration-300"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Ver recursos gratuitos
              </motion.a>
            </motion.div>

            {/* Enhanced Trust Indicators */}
            <motion.div 
              ref={trustRef}
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8"
            >
              {[
                { icon: Shield, text: "Psicóloga Colegiada", subtext: "Colegio Oficial" },
                { icon: Heart, text: "Especialista en Infancia", subtext: "+15 años experiencia" },
                { icon: Award, text: "Enfoque Humanista", subtext: "Terapia respetuosa" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center space-x-3 p-4 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30"
                >
                  <div className="flex-shrink-0">
                    <item.icon className="w-6 h-6 text-[var(--highlight)]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--text)]">
                      {item.text}
                    </div>
                    <div className="text-xs text-[var(--muted-text)]">
                      {item.subtext}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main illustration container */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-96 bg-gradient-to-br from-white/40 to-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/30 overflow-hidden"
              >
                <UnDrawIllustration 
                  name="family-time" 
                  className="w-4/5 h-4/5"
                  color="var(--highlight)"
                />
              </motion.div>
              
              {/* Decorative elements around illustration */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-[var(--highlight)]/30 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-[var(--accent)]/40 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              />
              
              {/* Professional badge overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute top-4 left-4 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/50"
              >
                <UnDrawIllustration 
                  name="certificate" 
                  className="w-10 h-10"
                  color="var(--highlight)"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-xs text-[var(--muted-text)] font-medium">Desplázate para explorar</span>
            <div className="w-6 h-10 border-2 border-[var(--highlight)]/60 rounded-full flex justify-center">
              <ArrowDown className="w-4 h-4 text-[var(--highlight)] mt-1" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
