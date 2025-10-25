import { MessageSquare, Users, Lock, CreditCard, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  {
    icon: MessageSquare,
    title: "Posting Requirements",
    description: "How to create and manage your service requests",
  },
  {
    icon: Users,
    title: "Managing Responses",
    description: "Viewing, shortlisting, or contacting professionals",
  },
  {
    icon: Lock,
    title: "Privacy & Safety",
    description: "How your data and communication are protected",
  },
  {
    icon: CreditCard,
    title: "Payments & Credits",
    description: "Understanding payments, refunds, and credits",
  },
  {
    icon: Phone,
    title: "Contact Support",
    description: "When to reach our support team directly",
  },
];

export const QuickHelpCategories = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Browse Customer Support Topics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
