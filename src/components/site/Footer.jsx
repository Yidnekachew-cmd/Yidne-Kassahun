import Logo from "../Logo";
import { NAV_LINKS } from "./NavBar";
import { useContent } from "../../lib/content";

const Footer = () => {
  const { profile } = useContent().content;
  return (
    <footer className="border-t border-white/10 bg-brand-ink">
      <div className="container-x flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
        <Logo className="h-14 w-auto" light />
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-brand-mist hover:text-brand-cream">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-center font-mono text-xs text-brand-muted md:text-right">
          <span className="text-brand-pass">✓</span> all checks passing · © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
