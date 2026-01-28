import { Instagram, Twitter, Mail, Mountain } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 px-8 border-t border-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Mountain className="text-secondary" />
              <span className="font-serif text-3xl font-bold tracking-tighter text-primary">WILDER</span>
            </div>
            <p className="text-muted-foreground max-w-sm font-serif italic text-lg">
              "To walk in nature is to witness a thousand miracles."
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Journal</a></li>
              <li><a href="#" className="hover:text-primary">Stockists</a></li>
              <li><a href="#" className="hover:text-primary">Sustainability</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Shipping</a></li>
              <li><a href="#" className="hover:text-primary">Returns</a></li>
              <li><a href="#" className="hover:text-primary">Size Guide</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-primary/5 gap-8">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            © 2024 Wilder Outdoor Goods. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Instagram size={18} className="text-primary hover:text-secondary cursor-pointer" />
            <Twitter size={18} className="text-primary hover:text-secondary cursor-pointer" />
            <Mail size={18} className="text-primary hover:text-secondary cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
