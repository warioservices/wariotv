import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { HeadphonesIcon, User, Key, MessageCircle, Clock, Shield } from "lucide-react";

const Support = () => {
  const [formData, setFormData] = useState({
    identifier: "",
    firstName: "",
    problem: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.identifier.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez saisir votre identifiant",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.firstName.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez saisir votre prénom",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.problem.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez décrire votre problème",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const message = `Bonjour, j'ai besoin d'aide concernant mon abonnement Wario TV.%0A%0AInformations :%0A- Identifiant : ${formData.identifier}%0A- Prénom : ${formData.firstName}%0A- Problème : ${formData.problem}%0A%0AMerci pour votre aide !`;
      
      const whatsappUrl = `https://wa.me/+33123456789?text=${message}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Demande envoyée !",
        description: "Votre demande de support a été transmise via WhatsApp. Notre équipe vous répondra rapidement.",
      });

      // Reset form
      setFormData({
        identifier: "",
        firstName: "",
        problem: ""
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="support" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Service <span className="bg-gradient-primary bg-clip-text text-transparent">Après-Vente</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Notre équipe de support est là pour vous aider. 
            Contactez-nous pour toute question ou problème technique.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Support Info */}
          <div className="space-y-8 animate-slide-in">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-wario-blue" />
                  <span>Support Professionnel</span>
                </CardTitle>
                <CardDescription>
                  Plus de 12 ans d'expérience pour vous accompagner
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-wario-purple mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Réponse rapide</h4>
                    <p className="text-sm text-muted-foreground">
                      Notre équipe répond généralement sous 2 heures
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MessageCircle className="w-5 h-5 text-wario-blue mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Contact direct</h4>
                    <p className="text-sm text-muted-foreground">
                      Communication directe via WhatsApp pour une assistance personnalisée
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <HeadphonesIcon className="w-5 h-5 text-wario-red mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Support technique</h4>
                    <p className="text-sm text-muted-foreground">
                      Aide à l'installation, configuration et résolution de problèmes
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="font-semibold text-lg mb-4">Problèmes fréquents</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Installation et configuration de l'application</li>
                <li>• Problèmes de connexion ou de qualité</li>
                <li>• Activation et renouvellement d'abonnement</li>
                <li>• Questions sur les fonctionnalités</li>
                <li>• Support multi-appareils</li>
              </ul>
            </div>
          </div>

          {/* Support Form */}
          <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-gradient-card border-border shadow-2xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-wario-red/20 flex items-center justify-center">
                  <HeadphonesIcon className="w-8 h-8 text-wario-red" />
                </div>
                <CardTitle className="text-2xl font-bold">Contactez le support</CardTitle>
                <CardDescription>
                  Décrivez votre problème et nous vous aiderons rapidement
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="identifier" className="flex items-center space-x-2">
                      <Key className="w-4 h-4" />
                      <span>Identifiant fourni par l'équipe *</span>
                    </Label>
                    <Input
                      id="identifier"
                      name="identifier"
                      type="text"
                      placeholder="Votre identifiant Wario TV"
                      value={formData.identifier}
                      onChange={handleInputChange}
                      className="bg-background border-border focus:border-wario-red"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>Prénom *</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Votre prénom"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="bg-background border-border focus:border-wario-red"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="problem">
                      Description du problème *
                    </Label>
                    <Textarea
                      id="problem"
                      name="problem"
                      placeholder="Décrivez votre problème en détail pour que nous puissions mieux vous aider..."
                      value={formData.problem}
                      onChange={handleInputChange}
                      className="bg-background border-border focus:border-wario-red min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-wario-red hover:bg-wario-red/90 text-white transition-colors group"
                    disabled={isSubmitting}
                  >
                    <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    {isSubmitting ? "Envoi en cours..." : "Envoyer au support"}
                  </Button>

                  <div className="text-center text-sm text-muted-foreground">
                    <p className="flex items-center justify-center space-x-2">
                      <MessageCircle className="w-4 h-4" />
                      <span>Votre demande sera envoyée directement via WhatsApp</span>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;