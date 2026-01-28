import { motion } from "framer-motion";
import { Wind, Compass, Tent, Trees } from "lucide-react";

const features = [
  {
    icon: <Wind />,
    title: "Aerodynamic Tech",
    desc: "Engineered for high-altitude resistance and thermal efficiency."
  },
  {
    icon: <Compass />,
    title: "Eco-Precision",
    desc: "100% recycled polymers meeting military-grade specifications."
  },
  {
    icon: <Tent />,
    title: "Nomadic DNA",
    desc: "Designed for those who find home in transition."
  },
  {
    icon: <Trees />,
    title: "Forest First",
    desc: "Every purchase reforests 10sqm of biodiversity corridors."
  }
];

export function FeaturesSection() {
  return (
    <section className="px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 group"
          >
            <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              {f.icon}
            </div>
            <h3 className="font-serif text-2xl text-primary">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
