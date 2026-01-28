import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { BannerSection } from "@/components/BannerSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { NatureGallery } from "@/components/NatureGallery";
import { Footer } from "@/components/Footer";
import LiquidEther from "@/components/ui/LiquidEther";

export default function Index() {
  return (
    <div className="relative min-h-screen grainy-overlay">
      <div className="fixed inset-0 -z-10 opacity-30">
        <LiquidEther />
      </div>
      
      <Header />
      
      <main>
        <BannerSection />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="py-24"
        >
          <FeaturesSection />
        </motion.div>

        <ProductShowcase />
        
        <NatureGallery />
      </main>

      <Footer />
    </div>
  );
}
