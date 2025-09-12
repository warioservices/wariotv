import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Film, Tv, Tv2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import NobodyImage from "@/assets/Films/Nobody2.jpg";
import McWalterImage from "@/assets/Films/MCWALTER.jpg";
import PopeyeImage from "@/assets/Films/Popeye the Slayer Man (2025).jpg";
import azmatImage from "@/assets/Series/azmat.jpg";
import goImage from "@/assets/Series/Gözleri Karadeniz.jpg";
import amandaImage from "@/assets/Series/The Twisted Tale of Amanda Knox 2025.jpg";
import ufcImage from "@/assets/Chaines/UFCseptembre.jpg";
import arsenalImage from "@/assets/Chaines/arsenalcity.jpg";
import loscImage from "@/assets/Chaines/losc.jpg"

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
    <div className="overflow-x-hidden">
      <Carousel opts={{ align: "start", loop: true }} setApi={setApi}>
        <CarouselContent className="gap-4">
          {items.map(item => {
            const expanded = !!expandedMap[item.id];
            const IconComponent = item.icon;

            return (
              <CarouselItem
                key={item.id}
                className="w-full sm:w-[250px] md:w-full flex-shrink-0"
              >
                <Card
                  className={`relative w-full bg-gradient-card border-border
                    hover:shadow-2xl sm:hover:scale-105 hover:ring-2 hover:ring-${item.color}
                    transition-all duration-300 group`}
                >
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <CardContent className="p-4">
                    <div className="flex justify-center mb-3">
                      <div className={`w-12 h-12 rounded-full bg-${item.color}/20 flex items-center justify-center`}>
                        <IconComponent className={`w-6 h-6 text-${item.color}`} />
                      </div>
                    </div>

                    <CardTitle className="text-lg font-bold text-center mb-2">
                      {item.title}
                    </CardTitle>

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
    </div>
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
    {
  id: "movie3",
  title: "McWalter (2025)",
  description: "McWalter, agent légendaire de l'agence secrète américaine NUS, est accusé à tort d'une série d'attaques mondiales. Pour prouver son innocence, il s'enfuit et se lance dans une course effrénée pour déjouer une conspiration mondiale, tout en étant poursuivi par ses anciens coéquipiers.",
  image: McWalterImage, // remplacer par la variable ou le lien de l'image du film
  rating: "7/10",
  icon: Film,
  color: "wario-red"
}

  ];

  const newSeries: Item[] = [
    { id: "series1", title: "The Twisted Tale of Amanda Knox 2025", description: "Plongez dans un thriller psychologique haletant inspiré d'une histoire vraie. Cette nouvelle adaptation de 2025 revisite l’affaire Amanda Knox avec des rebondissements inédits, entre manipulations, faux-semblants et quête de vérité. Une série qui vous tiendra en haleine du premier au dernier épisode.", image: amandaImage, episodes: "10 épisodes", icon: Tv, color: "wario-green" },
    { id: "series2", title: "Compte à rebours", description: "Un drame palpitant où chaque décision compte. Entre amour, trahisons et secrets, les personnages se retrouvent face à un compte à rebours implacable qui peut tout changer. Une série pleine d’émotions et de rebondissements.", image: azmatImage, episodes: "30 épisodes", icon: Tv, color: "wario-blue" },
    { id: "series3", title: "Gözleri Karadeniz", description: "Un drame turc intense se déroulant sur les rives de la mer Noire. Il raconte le combat d’une femme pour échapper à la violence et trouver refuge auprès d’une famille qui défie les traditions. Amour, courage et espoir se mêlent dans une histoire émouvante et bouleversante.", image: goImage, episodes: "64 épisodes", icon: Tv, color: "wario-purple" },
  ];

  const newChannels: Item[] = [
   {
  id: "chan1",
  title: "LOSC Lille vs Paris Saint-Germain",
  description: "Match de la 7e journée de Ligue 1. Le PSG, invaincu cette saison, se déplace au Stade Pierre-Mauroy pour affronter Lille, qui reste sur une série de 2 victoires et 1 nul. Un choc entre deux équipes en forme.",
  date: "5 octobre 2025",
  image: loscImage,
  time: "20h45 (heure locale Lille)",
  icon: "Tv2",
  color: "wario-blue"
},

    {
  id: "chan2",
  title: "Diego Lopes vs. Jean Silva",
  description: "Dans le cadre de l'événement 'Noche UFC 3', Diego Lopes (26-7) affronte Jean 'Lord' Silva (16-2) dans un combat poids plume très attendu. Lopes, classé numéro 2, cherche à rester dans la course au titre après une défaite par décision contre Alexander Volkanovski. Silva, classé numéro 10, est un frappeur puissant avec une série de victoires par KO et soumission, visant à se propulser vers une chance au titre.",
  date: "13 septembre 2025",
  image: ufcImage,
  time: "21h (heure locale San Antonio)",
  icon: "Tv2",
  color: "wario-red"
},

{
  id: "chan3",
  title: "Arsenal vs Manchester City",
  description: "Confrontation majeure en Premier League entre deux géants du football anglais. Arsenal, actuellement 3e, accueille Manchester City, 13e, au Emirates Stadium. Un match crucial pour les deux équipes en ce début de saison.",
  date: "21 septembre 2025",
  image: arsenalImage,
  time: "16h30 (heure locale Londres)",
  icon: "Tv2",
  color: "wario-blue"
}
,
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

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
