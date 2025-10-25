import { Card } from "@/components/ui/card";
import { AlertCircle, Mail, MapPin } from "lucide-react";

export const EscalationContact = () => {
  return (
    <div>
      <Card className="p-8 border-l-4 border-l-accent">
          <div className="flex items-start gap-4">
            <div className="bg-accent/10 p-3 rounded-lg">
              <AlertCircle className="h-6 w-6 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-4">
                If unresolved within 3 working days:
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-lg">Grievance Officer: Udayan Trivedi</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:grievance@gignut.com" className="text-accent hover:underline">
                    grievance@gignut.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
    </div>
  );
};
