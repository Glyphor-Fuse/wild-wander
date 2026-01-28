import { motion } from "framer-motion";
import { Mountain, ShoppingBag, Menu } from "lucide-react";

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference"
    >
      <div className="flex items-center gap-2">
        <Mountain className="text-accent" />
        <span className="font-serif text-2xl font-bold tracking-tighter text-background">WILDER</span>
      </div>
      
      <nav className="hidden md:flex items-center gap-12 text-sm font-semibold tracking-widest text-background uppercase">
        <a href="#" className="hover:text-accent transition-colors">Expeditions</a>
        <a href="#" className="hover:text-accent transition-colors">Archive</a>
        <a href="#" className="hover:text-accent transition-colors">Ethos</a>
      </nav>

      <div className="flex items-center gap-6 text-background">
        <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-accent" />
        <Menu className="w-5 h-5 cursor-pointer md:hidden" />
        <button className="hidden md:block border border-background px-4 py-1 text-xs uppercase hover:bg-background hover:text-primary transition-all">
          Member Club
        </button>
      </div>
    </motion.header>
  );
}
