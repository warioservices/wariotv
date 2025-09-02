import { Button } from "@/components/ui/button";
import { Play, Star, Shield, Zap } from "lucide-react";
import footballBg from "@/assets/football-bg.jpg";
import seriesBg from "@/assets/series-bg.jpg";
import moviesBg from "@/assets/movies-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center pt-20 relative overflow-hidden">
      {/* Animated floating background images */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 w-96 h-56 rounded-lg opacity-30 animate-floating-bg"
          style={{
            backgroundImage: `url(${footballBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animationDelay: '0s'
          }}
        />
        <div 
        
          className="absolute top-1/2 w-96 h-56 rounded-lg opacity-30 animate-floating-bg"
          style={{
            backgroundImage: `url(${seriesBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animationDelay: '5s'
          }}
        />
        <div 
          className="absolute top-3/4 w-96 h-56 rounded-lg opacity-30 animate-floating-bg"
          style={{
            backgroundImage: `url(${moviesBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animationDelay: '10s'
          }}
        />
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Toutes vos chaînes, films et séries réunis au même endroit
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Découvrez une expérience de divertissement premium avec nos abonnements 
              Wario TV. Plus de 12 ans d'expertise pour vous offrir la meilleure qualité.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity group"
                onClick={() => scrollToSection('test')}
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Commencer l'essai gratuit
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-wario-purple text-wario-purple hover:bg-wario-purple hover:text-white"
                onClick={() => scrollToSection('offers')}
              >
                Voir les offres
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <Shield className="w-8 h-8 text-wario-blue mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Fiable & Sécurisé</p>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-wario-purple mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Ultra Rapide</p>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-wario-red mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">12+ ans d'expérience</p>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in">
            <div className="bg-gradient-card p-8 rounded-2xl shadow-2xl border border-border backdrop-blur-sm">
              <div className="bg-gradient-primary p-6 rounded-xl mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Technologie Éprouvée
                </h3>
                <p className="text-white/80">
                  Nos abonnements reposent sur une technologie fiable et éprouvée avec plus de 12 ans d'expérience, 
                  offrant stabilité et qualité exceptionnelle.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-wario-blue rounded-full"></div>
                  <span className="text-foreground">Catalogue mondial diversifié</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-wario-purple rounded-full"></div>
                  <span className="text-foreground">Support client réactif</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-wario-red rounded-full"></div>
                  <span className="text-foreground">Installation simple et rapide</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-wario-purple/20 rounded-full blur-xl animate-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-wario-blue/20 rounded-full blur-xl animate-glow" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;