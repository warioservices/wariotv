import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Zap, Crown } from "lucide-react";

const Offers = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const offers = [
    {
      name: "Wario TV Max",
      price: "50€",
      period: "par an",
      description: "L'abonnement complet pour tous vos divertissements",
      features: [
        "Catalogue mondial complet",
        "Qualité HD/4K maximale",
        "Support client réactif",
        "Installation simple et rapide",
        "Mise à jour automatique"
      ],
      icon: Crown,
      color: "wario-purple",
      popular: true
    },
    {
      name: "Wario Pro",
      price: "50€",
      period: "par an",
      description: "Version professionnelle avec le même contenu premium",
      features: [
        "Catalogue mondial complet",
        "Qualité HD/4K maximale",
        "Support client réactif",
        "Installation simple et rapide",
        "Mise à jour automatique"
      ],
      icon: Zap,
      color: "wario-blue",
      popular: false
    },
    {
      name: "IBO Player Pro",
      price: "60€",
      period: "total",
      description: "Solution idéale pour TV Samsung, LG et autres TV non-Google TV",
      features: [
        "Application IBO Player Pro à vie",
        "Compatible TV Samsung, LG, etc.",
        "Abonnement 1 an inclus",
        "Interface optimisée pour TV",
        "Installation sans Play Store"
      ],
      icon: Star,
      color: "wario-red",
      popular: false,
      bundle: true
    }
  ];

  return (
    <section id="offers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nos <span className="bg-gradient-primary bg-clip-text text-transparent">Abonnements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choisissez l'abonnement qui vous correspond. Tous nos services sont garantis 
            par plus de 12 ans d'expérience dans le domaine du divertissement numérique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {offers.map((offer, index) => {
            const IconComponent = offer.icon;
            return (
              <Card 
                key={offer.name}
                className={`relative bg-gradient-card border-border hover:shadow-2xl hover:scale-105 hover:ring-2 hover:ring-${offer.color} transition-all duration-300 group ${
                  offer.popular ? 'ring-2 ring-wario-purple scale-105' : ''
                } animate-slide-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {offer.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white px-4 py-1">
                    Le plus populaire
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${offer.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-8 h-8 text-${offer.color}`} />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold">{offer.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {offer.description}
                  </CardDescription>
                  
                  <div className="mt-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-bold text-foreground">{offer.price}</span>
                      <div className="text-left">
                        <span className="text-muted-foreground text-sm block">{offer.period}</span>
                        {offer.bundle && (
                          <span className="text-xs text-wario-red">App + Abonnement</span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {offer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full mt-6 bg-gradient-primary hover:opacity-90 transition-opacity"
                    onClick={() => scrollToSection('test')}
                  >
                    Essayer Gratuitement
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 p-6 bg-card rounded-xl border border-border max-w-4xl mx-auto">
          <p className="text-muted-foreground italic">
            "Nos abonnements reposent sur une technologie fiable et éprouvée avec plus de 12 ans d'expérience, 
            offrant stabilité et qualité exceptionnelle pour votre divertissement quotidien."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offers;