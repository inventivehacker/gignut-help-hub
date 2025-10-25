import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "How do I post a requirement on Gignut?",
    answer: "To post a requirement, log in to your account, click on 'Post Requirement' button, fill in the details about the service you need, and submit. Verified professionals will then be able to view and respond to your requirement.",
  },
  {
    question: "How will I know when professionals respond?",
    answer: "You'll receive email notifications whenever a professional responds to your requirement. You can also check your dashboard to view all responses in one place.",
  },
  {
    question: "Can I edit or delete my requirement later?",
    answer: "Yes, you can edit or delete your requirement at any time from your dashboard. Simply navigate to 'My Requirements', find the requirement you want to modify, and use the edit or delete options.",
  },
  {
    question: "Are my contact details visible to anyone?",
    answer: "Your contact details are only shared with professionals you choose to connect with. Your privacy is protected by our secure platform, and you control who can see your information.",
  },
  {
    question: "How do I contact Gignut Support?",
    answer: "You can contact our support team via email at support@gignut.com, or use the support ticket form below. We typically respond within 24 hours on business days (Monday to Saturday).",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-12 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <Card className="p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
};
