import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Star, AlertTriangle, Wifi, ShoppingCart } from "lucide-react";

const Recommendations = () => {
  const [isOpen, setIsOpen] = useState(false);

  const recommendations = [
    {
      rank: 1,
      name: "Xiaomi Mi TV Box S",
      rating: 5,
      description: "Notre recommandation #1",
      details: "Hyper fiable et testé par nos équipes pendant des années. Vous pouvez l'acheter en toute sécurité sur Amazon.",
      pros: ["Très fiable", "Qualité d'image excellente", "Disponible sur Amazon", "Testé par nos clients"],
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      color: "border-green-500"
    },
    {
      rank: 2,
      name: "Clé Xiaomi HD/4K",
      rating: 4,
      description: "Deuxième choix avec conditions",
      details: "Pas très pratique et fiabilité limitée si votre antenne réseau est éloignée. Fonctionne bien uniquement si vous êtes proche de votre box internet.",
      pros: ["Prix attractif", "Format compact"],
      cons: ["Pas très fiable si réseau loin", "Moins pratique", "Dépendant de la proximité WiFi"],
      icon: <Wifi className="w-6 h-6 text-orange-500" />,
      color: "border-orange-500"
    },
    {
      rank: 3,
      name: "Chromecast Google HD/4K",
      rating: 4,
      description: "Troisième choix recommandé",
      details: "Une bonne alternative avec la qualité Google, disponible en version HD et 4K selon vos besoins.",
      pros: ["Qualité Google", "Choix HD/4K", "Interface simple", "Prix abordable"],
      icon: <Star className="w-6 h-6 text-blue-500" />,
      color: "border-blue-500"
    },
    {
      rank: 4,
      name: "Clé Amazon Fire TV Stick HD/4K",
      rating: 3.5,
      description: "Quatrième choix",
      details: "Une alternative correcte avec l'écosystème Amazon. Interface fluide mais dépendante des services Amazon.",
      pros: ["Interface Amazon", "Prix compétitif", "Choix HD/4K", "Télécommande vocale"],
      cons: ["Orienté services Amazon", "Publicités intégrées", "Moins universel"],
      icon: <ShoppingCart className="w-6 h-6 text-purple-500" />,
      color: "border-purple-500"
    },
    {
      rank: "❌",
      name: "Boîtier X96",
      rating: 1,
      description: "Non recommandé",
      details: "Nous sommes désolés mais c'est de mauvaise qualité. C'est un ancien modèle, nous recommandons d'acheter un modèle plus récent pour profiter d'une meilleure qualité d'image et vidéo.",
      cons: ["Mauvaise qualité", "Ancien modèle", "Qualité d'image médiocre", "Non testé par nos équipes"],
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      color: "border-red-500"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Recommandations Boîtiers TV
          </h2>
          <p className="text-muted-foreground mb-6">
            Pour nos clients avec des télés non-connectées, voici nos recommandations testées par notre équipe et nos clients pendant des années
          </p>
          
          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="outline"
            className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Voir nos recommandations
            {isOpen ? (
              <ChevronUp className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            ) : (
              <ChevronDown className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            )}
          </Button>
        </div>

        {isOpen && (
          <div className="grid gap-6 animate-in slide-in-from-top-4 duration-500">
            {recommendations.map((item, index) => (
              <Card key={index} className={`${item.color} border-2 hover:scale-102 transition-all duration-300 hover:shadow-lg`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-bold">
                            #{item.rank}
                          </span>
                          {item.name}
                        </CardTitle>
                        <CardDescription className="font-medium text-sm mt-1">
                          {item.description}
                        </CardDescription>
                      </div>
                    </div>
                    {item.rating > 1 && (
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(item.rating) ? "text-yellow-500 fill-yellow-500" : 
                              i === Math.floor(item.rating) && item.rating % 1 !== 0 ? "text-yellow-500 fill-yellow-500/50" :
                              "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4">{item.details}</p>
                  
                  {item.pros && (
                    <div className="mb-3">
                      <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">✓ Avantages :</h4>
                      <ul className="space-y-1">
                        {item.pros.map((pro, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {item.cons && (
                    <div>
                      <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">⚠ Inconvénients :</h4>
                      <ul className="space-y-1">
                        {item.cons.map((con, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
            
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-2">💡 Notre Conseil</h3>
                <p className="text-muted-foreground">
                  Ces recommandations sont basées sur des années de tests avec nos clients. 
                  Pour une expérience optimale, nous conseillons fortement le <strong>Xiaomi Mi TV Box S</strong> 
                  disponible sur Amazon.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-secondary/5 to-accent/5 border-secondary/20">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-2">📱 Utilisation Mobile</h3>
                <p className="text-muted-foreground">
                  Nos clients peuvent aussi utiliser leur abonnement sur leur téléphone en toute tranquillité, 
                  quelque soit le type : <strong>Android ou Apple</strong> ! 
                  Profitez de vos contenus partout et à tout moment.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default Recommendations;