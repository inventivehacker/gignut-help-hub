import { Mail, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

export const SupportChannels = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Need personal assistance?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Support</h3>
            <a href="mailto:support@gignut.com" className="text-accent hover:underline text-lg font-medium">
              support@gignut.com
            </a>
            <p className="text-muted-foreground mt-2">Replies within 24 hours, Mon–Sat</p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Help Center</h3>
            <p className="text-accent text-lg font-medium">Self-service answers</p>
            <p className="text-muted-foreground mt-2">Available 24x7</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
