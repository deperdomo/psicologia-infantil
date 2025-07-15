import { motion } from 'framer-motion';

interface UnDrawIllustrationProps {
  name: string;
  className?: string;
  color?: string;
}

export const UnDrawIllustration: React.FC<UnDrawIllustrationProps> = ({ 
  name, 
  className = "", 
  color = "#E06B74" 
}) => {
  // Family Time illustration optimized for child psychology
  const FamilyTimeIllustration = () => (
    <svg
      viewBox="0 0 400 300"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background elements */}
      <motion.circle
        cx="350"
        cy="50"
        r="30"
        fill={color}
        opacity="0.1"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      {/* Main family illustration */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Parent figure */}
        <ellipse cx="150" cy="120" rx="40" ry="60" fill={color} opacity="0.8"/>
        
        {/* Child figure */}
        <ellipse cx="200" cy="140" rx="25" ry="40" fill={color} opacity="0.6"/>
        
        {/* Heart symbol representing care */}
        <motion.path
          d="M180 90 Q175 85 170 90 Q165 85 160 90 Q165 100 180 110 Q195 100 200 90 Q195 85 190 90 Q185 85 180 90Z"
          fill={color}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.g>

      {/* Decorative elements */}
      <motion.circle
        cx="80"
        cy="200"
        r="8"
        fill={color}
        opacity="0.3"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
      <motion.circle
        cx="320"
        cy="180"
        r="12"
        fill={color}
        opacity="0.2"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      />
    </svg>
  );

  // Professional badge illustration
  const CertificateIllustration = () => (
    <svg
      viewBox="0 0 100 100"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.rect
        x="20"
        y="30"
        width="60"
        height="40"
        rx="5"
        fill={color}
        opacity="0.8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.circle
        cx="50"
        cy="50"
        r="8"
        fill="white"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.path
        d="M45 50 L48 53 L55 46"
        stroke={color}
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </svg>
  );

  // Mindfulness/emotional support illustration
  const MindfulnessIllustration = () => (
    <svg
      viewBox="0 0 200 200"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Meditation pose figure */}
      <motion.circle
        cx="100"
        cy="80"
        r="20"
        fill={color}
        opacity="0.7"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.ellipse
        cx="100"
        cy="130"
        rx="30"
        ry="40"
        fill={color}
        opacity="0.6"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      
      {/* Peaceful emanating waves */}
      {[1, 2, 3].map((i) => (
        <motion.circle
          key={i}
          cx="100"
          cy="100"
          r={40 + i * 15}
          stroke={color}
          strokeWidth="1"
          fill="none"
          opacity="0.3"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            delay: i * 0.5 
          }}
        />
      ))}
    </svg>
  );

  // Render appropriate illustration
  const renderIllustration = () => {
    switch (name) {
      case 'family-time':
        return <FamilyTimeIllustration />;
      case 'certificate':
        return <CertificateIllustration />;
      case 'mindfulness':
        return <MindfulnessIllustration />;
      default:
        return <FamilyTimeIllustration />;
    }
  };

  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {renderIllustration()}
    </motion.div>
  );
};

export default UnDrawIllustration;
