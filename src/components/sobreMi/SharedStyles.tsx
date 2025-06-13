export default function SharedStyles() {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        
        .prose h4 {
          color: var(--text);
          font-weight: 600;
        }
        
        .prose p {
          color: var(--muted-text);
        }
      `
    }} />
  );
}
