import { Tv, MessageCircle, Shield, Clock } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Tv className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Wario TV
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Votre divertissement sans limite. Plus de 12 ans d'expérience 
              dans le domaine du divertissement numérique premium.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('offers')}
                  className="text-muted-foreground hover:text-wario-purple transition-colors"
                >
                  Nos Offres
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('catalog')}
                  className="text-muted-foreground hover:text-wario-purple transition-colors"
                >
                  Catalogue
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('test')}
                  className="text-muted-foreground hover:text-wario-purple transition-colors"
                >
                  Test Gratuit
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('support')}
                  className="text-muted-foreground hover:text-wario-purple transition-colors"
                >
                  Support
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Nos Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Wario TV Max - 50€/an</li>
              <li>Wario Pro - 50€/an</li>
              <li>IBO Player Pro - 60€ total</li>
              <li>Support technique inclus</li>
            </ul>
          </div>

          {/* Contact & Garanties */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Garanties</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-wario-blue" />
                <span className="text-sm text-muted-foreground">Service fiable</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-wario-purple" />
                <span className="text-sm text-muted-foreground">12+ ans d'expérience</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-wario-red" />
                <span className="text-sm text-muted-foreground">Support réactif</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Wario TV. Tous droits réservés. Service de divertissement premium.
            </p>
            <p className="text-sm text-muted-foreground italic">
              "Technologie fiable et éprouvée depuis plus de 12 ans"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;