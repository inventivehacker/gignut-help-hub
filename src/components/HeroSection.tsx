import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <section className="text-center py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Need help using Gignut as a Customer?
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
        We're here to ensure your experience — from posting requirements to connecting with verified experts — is smooth, secure, and successful.
      </p>
      <div className="max-w-2xl mx-auto flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="text"
            placeholder="Type your question or issue..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="pl-10 py-6 text-base"
          />
        </div>
        <Button onClick={handleSearch} size="lg" className="px-8">
          Search Help Articles
        </Button>
      </div>
    </section>
  );
};
