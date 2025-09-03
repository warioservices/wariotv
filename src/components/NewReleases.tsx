import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Film, Tv, Tv2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { toast } from "@/hooks/use-toast";
import NobodyImage from "@/assets/Films/Nobody2.jpg";
import DesjourImage from "@/assets/Films/Des jours meilleurs.jpg"
import PopeyeImage from "@/assets/Films/Popeye the Slayer Man (2025).jpg"

const NewReleases = () => {
  const carouselRefs = useRef<any[]>([]);

  // Auto-scroll setup for each carousel
  useEffect(() => {
    const intervals = carouselRefs.current.map((api, index) => {
      if (api) {
        return setInterval(() => {
          api.scrollNext();
        }, 4000 + index * 500); // Différents timings pour chaque carousel
      }
      return null;
    });

    return () => {
      intervals.forEach(interval => {
        if (interval) clearInterval(interval);
      });
    };
  }, []);

  // Données placeholder pour les nouveautés
  const newMovies = [
    {
      id: 1,
      title: "Nobody 2",
      description: "Un père en quête de repos en famille se retrouve en pleine bataille contre une dangereuse criminelle… Des vacances qui tournent vite au cauchemar. Action brutale, humour grinçant et cascadeur aguerri, Bob Odenkirk reprend du service dans cette suite explosive.",
      image:NobodyImage,
      rating: "7.2/10",
    },
    {
      id: 2,
      title: "Popeye the Slayer Man (2025)", 
      description: "Un groupe d'amis s'aventure dans une usine abandonnée de conserves d'épinards, mais ils réveillent une légende terrifiante : Popeye, l'homme marin devenu tueur impitoyable.",
      image: PopeyeImage,
      rating: "6/10"
    },
    {
      id: 3,
      title: "Des jours meilleurs (2025)",
      description: "Trois femmes aux parcours chaotiques s'unissent pour participer au Rallye des Dunes dans le désert marocain. Une aventure humaine, pleine d'humour et d'émotion, qui les mène vers la rédemption et la solidarité.",
      image: DesjourImage,
      rating: "7/10"
    }
  ];

  const newSeries = [
    {
      id: 1,
      title: "Nouvelle Série 1",
      description: "Une série dramatique sur la vie moderne avec un casting exceptionnel.",
      image: "/placeholder.svg",
      episodes: "8 épisodes"
    },
    {
      id: 2,
      title: "Nouvelle Série 2",
      description: "Une série de science-fiction qui repousse les limites de l'imagination.",
      image: "/placeholder.svg", 
      episodes: "12 épisodes"
    },
    {
      id: 3,
      title: "Nouvelle Série 3",
      description: "Un crime thriller avec des rebondissements à chaque épisode.",
      image: "/placeholder.svg",
      episodes: "6 épisodes"
    }
  ];

  const newChannels = [
    {
      id: 1,
      title: "Match de Football",
      description: "Finale de la Champions League - Real Madrid vs Manchester City",
      image: "/placeholder.svg",
      time: "20h45"
    },
    {
      id: 2,
      title: "Documentaire Nature",
      description: "Découvrez les secrets de la faune africaine dans ce documentaire exclusif.",
      image: "/placeholder.svg",
      time: "21h30"
    },
    {
      id: 3,
      title: "Concert Live",
      description: "Concert exceptionnel de musique classique depuis l'Opéra de Paris.",
      image: "/placeholder.svg",
      time: "22h15"
    }
  ];

  const categories = [
    {
      title: "Nouveaux Films",
      icon: Film,
      data: newMovies,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "Nouvelles Séries", 
      icon: Tv,
      data: newSeries,
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      title: "Événements TV",
      icon: Tv2, 
      data: newChannels,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nouveautés
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez les derniers films, séries et événements TV disponibles sur Wario TV
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card key={categoryIndex} className={`${category.bgColor} border-0 shadow-lg`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-background/80 ${category.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Carousel
                    className="w-full"
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    setApi={(api) => {
                      carouselRefs.current[categoryIndex] = api;
                    }}
                  >
                    <CarouselContent>
                      {category.data.map((item) => (
                        <CarouselItem key={item.id}>
                          <div className="space-y-4">
                            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                              <img 
                                src={item.image} 
                                 alt={`Pochette ${item.title}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                            <div className="space-y-2">
                              <h4 className="font-semibold text-lg">{item.title}</h4>
                              <p className="text-sm text-muted-foreground line-clamp-3">
                                {item.description}
                              </p>
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-primary font-medium">
                                  {'rating' in item ? item.rating : 
                                   'episodes' in item ? item.episodes : 
                                   item.time}
                                </span>
                                 <button 
                                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                                  onClick={() => {
                                    const meta = 'rating' in item ? `Note: ${item.rating}` : ('episodes' in item ? item.episodes : item.time);
                                    toast({
                                      title: item.title,
                                      description: `${meta} — ${item.description}`,
                                    });
                                  }}
                                >
                                  Voir plus →
                                </button>
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewReleases;