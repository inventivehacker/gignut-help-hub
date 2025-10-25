import { HeroSection } from "@/components/HeroSection";
import { QuickHelpCategories } from "@/components/QuickHelpCategories";
import { FAQSection } from "@/components/FAQSection";
import { SupportChannels } from "@/components/SupportChannels";
import { SupportTicketForm } from "@/components/SupportTicketForm";
import { EscalationContact } from "@/components/EscalationContact";
import { HelpfulTips } from "@/components/HelpfulTips";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <QuickHelpCategories />
      <FAQSection />
      <SupportChannels />
      
      {/* Combined section with form on left and info boxes on right */}
      <section className="py-12 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left column - Support Ticket Form */}
            <div>
              <SupportTicketForm />
            </div>
            
            {/* Right column - Escalation and Tips */}
            <div className="space-y-8">
              <EscalationContact />
              <HelpfulTips />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
