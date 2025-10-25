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
      <SupportTicketForm />
      <EscalationContact />
      <HelpfulTips />
      <Footer />
    </div>
  );
};

export default Index;
