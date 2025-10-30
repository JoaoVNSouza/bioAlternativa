import { LucideIcon } from "lucide-react";

interface SocialIconProps {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const SocialIcon = ({ icon: Icon, href, label }: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative p-3 rounded-full border border-border hover:border-primary transition-all duration-300 hover:scale-110"
    >
      <Icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors duration-300" />
    </a>
  );
};
