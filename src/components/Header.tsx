import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Tv, Play, HelpCircle, Users } from "lucide-react";
import logoImage from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={logoImage} 
              alt="Logo Wario TV"
              className="h-8 rounded-lg object-cover cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("offers")}
              className="text-foreground hover:text-wario-purple transition-colors"
            >
              Offres
            </button>
            <button
              onClick={() => scrollToSection("catalog")}
              className="text-foreground hover:text-wario-purple transition-colors"
            >
              Catalogue
            </button>
            <button
              onClick={() => scrollToSection("test")}
              className="text-foreground hover:text-wario-purple transition-colors"
            >
              Test Gratuit
            </button>
            <button
              onClick={() => scrollToSection("support")}
              className="text-foreground hover:text-wario-purple transition-colors"
            >
              Support
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection("test")}
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              Essayer Gratuitement
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("offers")}
                className="text-left text-foreground hover:text-wario-purple transition-colors"
              >
                Offres
              </button>
              <button
                onClick={() => scrollToSection("catalog")}
                className="text-left text-foreground hover:text-wario-purple transition-colors"
              >
                Catalogue
              </button>
              <button
                onClick={() => scrollToSection("test")}
                className="text-left text-foreground hover:text-wario-purple transition-colors"
              >
                Test Gratuit
              </button>
              <button
                onClick={() => scrollToSection("support")}
                className="text-left text-foreground hover:text-wario-purple transition-colors"
              >
                Support
              </button>
              <Button
                onClick={() => scrollToSection("test")}
                className="bg-gradient-primary hover:opacity-90 transition-opacity mt-4"
              >
                Essayer Gratuitement
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
