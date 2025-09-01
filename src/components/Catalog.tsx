import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Heart, Tv, Gamepad2 } from "lucide-react";

const Catalog = () => {
  const categories = [
    {
      title: "Films et séries francophones",
      description: "Pour France, Belgique, Suisse, Canada et tous les pays francophones",
      icon: Globe,
      color: "wario-blue",
      features: [
        "Films français récents et classiques",
        "Séries TV populaires",
        "Documentaires et émissions",
        "Contenu pour toute la famille"
      ]
    },
    {
      title: "Feuilletons et chaînes arabes",
      description: "Pour Maghreb et Moyen-Orient",
      icon: Heart,
      color: "wario-purple",
      features: [
        "Feuilletons arabes populaires",
        "Chaînes d'information",
        "Programmes culturels",
        "Contenu religieux et éducatif"
      ]
    },
    {
      title: "Feuilletons turcs doublés",
      description: "Modablaja - Séries turques en arabe",
      icon: Tv,
      color: "wario-red",
      features: [
        "Séries turques populaires",
        "Doublage en arabe de qualité",
        "Nouveaux épisodes réguliers",
        "Genres variés : drame, romance, action"
      ]
    },
    {
      title: "Toutes les chaînes de football",
      description: "Nationales et internationales",
      icon: Gamepad2,
      color: "wario-blue",
      features: [
        "Championnats européens",
        "Ligues nationales",
        "Compétitions internationales",
        "Analyse et commentaires"
      ]
    }
  ];

  return (
    <section id="catalog" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Un catalogue <span className="bg-gradient-primary bg-clip-text text-transparent">pour tous</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Wario TV, c'est la garantie d'un catalogue riche et varié. Que vous soyez francophone ou arabophone, 
            amateur de feuilletons turcs ou passionné de football, profitez d'un accès privilégié à vos films, 
            séries et chaînes préférés, où que vous soyez.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className="bg-gradient-card border-border hover:shadow-2xl transition-all duration-300 group animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 mb-4 rounded-full bg-${category.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-8 h-8 text-${category.color}`} />
                  </div>
                  
                  <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {category.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 bg-${category.color} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card p-8 rounded-2xl border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Technologie Mondiale
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Grâce à notre infrastructure mondiale et nos 12 années d'expérience, nous vous offrons 
              un accès stable et de qualité à un contenu diversifié, adapté à toutes les cultures 
              et préférences. Notre service s'adapte à vos besoins, où que vous soyez dans le monde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;