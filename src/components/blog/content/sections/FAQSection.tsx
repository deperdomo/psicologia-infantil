import type { BlogArticle } from '../../../../types/blog';
import { formatText } from '../../../../utils/blog/textFormatter';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface FAQSectionProps {
  article: BlogArticle;
}

export default function FAQSection({ article }: FAQSectionProps) {
  if (!article.faq_data || !article.faq_data.length) return null;

  return (
    <section className="mb-10">
      <h3 className="prose-h3">Preguntas frecuentes</h3>
      <div className="space-y-3">
        {article.faq_data.map((faq: any, index: number) => (
          <FAQItem key={index} pregunta={faq.pregunta} respuesta={faq.respuesta} />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ pregunta, respuesta }: { pregunta: string; respuesta: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group border-b border-gray-200 py-4 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between cursor-pointer prose-strong group-open:text-blue-600"
      >
        <span className="flex items-center text-left">
          <span className="mr-3 text-blue-600 font-bold text-sm">Q:</span>
          {pregunta}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-2 text-gray-400"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
  {open && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <div className="pt-2 leading-relaxed flex">
        <span className="mr-3 mt-7.5 text-green-600 font-bold text-sm">A:</span>
        <div className="prose-p">
          {formatText(respuesta)}
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}
