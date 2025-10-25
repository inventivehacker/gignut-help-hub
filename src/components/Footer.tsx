import { Linkedin, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
            Privacy Policy
          </a>
          <span className="text-muted-foreground">•</span>
          <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
            Terms
          </a>
          <span className="text-muted-foreground">•</span>
          <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
            Cookie Policy
          </a>
          <span className="text-muted-foreground">•</span>
          <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
            About Gignut
          </a>
          <span className="text-muted-foreground">•</span>
          <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
            Contact Us
          </a>
        </div>

        <div className="flex justify-center gap-6 mb-6">
          <a
            href="#"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="h-6 w-6" />
          </a>
        </div>

        <p className="text-center text-muted-foreground italic">
          "Support that listens, solves, and builds trust — the Gignut way."
        </p>
      </div>
    </footer>
  );
};
