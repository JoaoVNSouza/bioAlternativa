import { Instagram } from "lucide-react";

interface BrandCardProps {
  name: string;
  description: string;
  instagramUrl: string;
}

export const BrandCard = ({ name, description, instagramUrl }: BrandCardProps) => {
  return (
    <a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full max-w-md mx-auto"
    >
      <div className="relative p-6 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 text-left">
            <h3 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
          <Instagram className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300 flex-shrink-0" />
        </div>
      </div>
    </a>
  );
};
