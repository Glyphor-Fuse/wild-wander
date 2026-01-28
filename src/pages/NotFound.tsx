import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-9xl font-serif text-primary opacity-20">404</h1>
        <p className="text-2xl font-serif -mt-12 mb-8">Lost in the wild.</p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-secondary transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Return Home</span>
        </Link>
      </motion.div>
    </div>
  );
}
