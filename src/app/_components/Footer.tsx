import { footerLinks } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-accent-foreground py-8 md:py-12">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-start gap-x-6 gap-y-3 text-xs md:text-sm text-white">
          {footerLinks.map((text, index) => (
            <li key={index}>
              <a
                href="#"
                className="hover:underline transition-all duration-300 font-family-jp block"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
