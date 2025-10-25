import { Card } from "@/components/ui/card";
import { Lightbulb, Check } from "lucide-react";

const tips = [
  "Mention your registered email ID",
  "Include your ServiceSeekerID",
  "Attach screenshots if possible",
  "Avoid duplicate submissions",
];

export const HelpfulTips = () => {
  return (
    <section className="py-12 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8">
          <div className="flex items-start gap-4">
            <div className="bg-accent/10 p-3 rounded-lg">
              <Lightbulb className="h-6 w-6 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4">Tips for Quick Resolution</h3>
              <ul className="space-y-3">
                {tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
