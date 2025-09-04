import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Film, Tv, Tv2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import NobodyImage from "@/assets/Films/Nobody2.jpg";
import DesjourImage from "@/assets/Films/Des jours meilleurs.jpg";
import PopeyeImage from "@/assets/Films/Popeye the Slayer Man (2025).jpg";
import azmatImage from "@/assets/Series/azmat.jpg";
import goImage from "@/assets/Series/Gözleri Karadeniz.jpg";
import amandaImage from "@/assets/Series/The Twisted Tale of Amanda Knox 2025.jpg";
import canImage from "@/assets/Chaines/CAN-2025.jpg";
import francematchImage from "@/assets/Chaines/France.jpg";

interface Item {
  id: string;
  title: string;
  description: string;
  image: string;
  rating?: string;
  episodes?: string;
  date?: string;
  time?: string;
  icon: any;
  color: string;
}

interface Category {
  title: string;
  data: Item[];
}

const AutoCarousel = ({
  items,
  delay = 4000,
  expandedMap,
  toggleExpanded
}: {
  items: Item[];
  delay?: number;
  expandedMap: { [key: string]: boolean };
  toggleExpanded: (id: string) => void;
}) => {
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => api.scrollNext(), delay);
    return () => clearInterval(interval);
  }, [api, delay]);

  return (
    <Carousel opts={{ align: "start", loop: true }} setApi={setApi}>
      <CarouselContent>
        {items.map(item => {
          const expanded = !!expandedMap[item.id];
          const IconComponent = item.icon;

          return (
            <CarouselItem key={item.id}>
              <Card className={`relative bg-gradient-card border-border hover:shadow-2xl hover:scale-105 hover:ring-2 hover:ring-${item.color} transition-all duration-300 group`}>
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                </div>

                <CardContent className="p-4">
                  <div className="flex justify-center mb-3">
                    <div className={`w-12 h-12 rounded-full bg-${item.color}/20 flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 text-${item.color}`} />
                    </div>
                  </div>

                  <CardTitle className="text-lg font-bold text-center mb-2">{item.title}</CardTitle>

                  <p className={`text-muted-foreground text-sm mb-3 ${expanded ? "" : "line-clamp-3"}`}>
                    {item.description}
                  </p>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-primary font-medium">
                      {item.icon === Tv2 && item.date && item.time
                        ? `${item.date} - ${item.time}`
                        : item.rating
                        ? item.rating
                        : item.episodes
                        ? item.episodes
                        : item.time}
                    </span>
                    <Button size="sm" variant="ghost" onClick={() => toggleExpanded(item.id)}>
                      {expanded ? "Voir moins ↑" : "Voir plus →"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};

const NewReleases = () => {
  const [expandedMap, setExpandedMap] = useState<{ [key: string]: boolean }>({});

  const toggleExpanded = (id: string) => {
    setExpandedMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const newMovies: Item[] = [
    { id: "movie1", title: "Nobody 2", description: "Un père en quête de repos en famille se retrouve en pleine bataille contre une dangereuse criminelle… Des vacances qui tournent vite au cauchemar. Action brutale, humour grinçant et cascadeur aguerri, Bob Odenkirk reprend du service dans cette suite explosive.", image: NobodyImage, rating: "7.2/10", icon: Film, color: "wario-purple" },
    { id: "movie2", title: "Popeye the Slayer Man (2025)", description: "Un groupe d'amis s'aventure dans une usine abandonnée de conserves d'épinards, mais ils réveillent une légende terrifiante : Popeye, l'homme marin devenu tueur impitoyable.", image: PopeyeImage, rating: "6/10", icon: Film, color: "wario-blue" },
    { id: "movie3", title: "Des jours meilleurs (2025)", description: "Trois femmes aux parcours chaotiques s'unissent pour participer au Rallye des Dunes dans le désert marocain. Une aventure humaine, pleine d'humour et d'émotion, qui les mène vers la rédemption et la solidarité.", image: DesjourImage, rating: "7/10", icon: Film, color: "wario-red" },
  ];

  const newSeries: Item[] = [
    { id: "series1", title: "The Twisted Tale of Amanda Knox 2025", description: "Plongez dans un thriller psychologique haletant inspiré d'une histoire vraie. Cette nouvelle adaptation de 2025 revisite l’affaire Amanda Knox avec des rebondissements inédits, entre manipulations, faux-semblants et quête de vérité. Une série qui vous tiendra en haleine du premier au dernier épisode.", image: amandaImage, episodes: "10 épisodes", icon: Tv, color: "wario-green" },
    { id: "series2", title: "Compte à rebours", description: "Un drame palpitant où chaque décision compte. Entre amour, trahisons et secrets, les personnages se retrouvent face à un compte à rebours implacable qui peut tout changer. Une série pleine d’émotions et de rebondissements.", image: azmatImage, episodes: "30 épisodes", icon: Tv, color: "wario-blue" },
    { id: "series3", title: "Gözleri Karadeniz", description: "Un drame turc intense se déroulant sur les rives de la mer Noire. Il raconte le combat d’une femme pour échapper à la violence et trouver refuge auprès d’une famille qui défie les traditions. Amour, courage et espoir se mêlent dans une histoire émouvante et bouleversante.", image: goImage, episodes: "64 épisodes", icon: Tv, color: "wario-purple" },
  ];

  const newChannels: Item[] = [
    { id: "chan1", title: "Guinée vs Algérie", description: "Match de qualification pour la Coupe du Monde 2026. L’Algérie affronte la Guinée à Casablanca suite à la relocalisation du match. Enjeu : rester en tête du groupe et se rapprocher de la qualification.", date: "8 septembre 2025", image: canImage, time: "À confirmer", icon: Tv2, color: "wario-red" },
    { id: "chan2", title: "Zambie vs Maroc", description: "Qualification pour la Coupe du Monde 2026. Le Maroc se déplace à Lusaka pour affronter la Zambie et consolider sa place dans le groupe. Un match décisif avec beaucoup de pression.", date: "8 septembre 2025", image: canImage, time: "9h (heure locale Lusaka)", icon: Tv2, color: "wario-green" },
    { id: "chan3", title: "France vs Islande", description: "Match de qualification pour la Coupe du Monde 2026 (UEFA). La France reçoit l’Islande au Parc des Princes pour consolider sa place dans le groupe et viser la qualification directe.", date: "9 septembre 2025", image: francematchImage, time: "20h45 (heure locale Paris)", icon: Tv2, color: "wario-blue" },
  ];

  const categories: Category[] = [
    { title: "Nouveaux Films", data: newMovies },
    { title: "Nouvelles Séries", data: newSeries },
    { title: "Événements TV", data: newChannels },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nouveautés</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez les derniers films, séries et événements TV disponibles sur Wario TV
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {categories.map((category, index) => (
            <AutoCarousel
              key={category.title}
              items={category.data}
              delay={4000 + index * 1000} // décalage par catégorie
              expandedMap={expandedMap}
              toggleExpanded={toggleExpanded}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewReleases;
