import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { TestTube, User, Key, MessageCircle } from "lucide-react";

const TestForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    identifier: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'identifier' ? value.toLowerCase() : value
    }));
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez saisir votre prénom",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.identifier.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez choisir un identifiant",
        variant: "destructive"
      });
      return false;
    }

    if (formData.identifier.length < 8) {
      toast({
        title: "Erreur",
        description: "L'identifiant doit contenir au moins 8 caractères",
        variant: "destructive"
      });
      return false;
    }

    if (/[A-Z]/.test(formData.identifier)) {
      toast({
        title: "Erreur",
        description: "L'identifiant ne doit pas contenir de majuscules",
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
      const message = `Bonjour, je souhaite demander un test gratuit pour Wario TV.%0A%0AInformations :%0A- Prénom : ${formData.firstName}%0A- Identifiant souhaité : ${formData.identifier}%0A%0AMerci !`;
      
      const whatsappUrl = `https://wa.me/+33123456789?text=${message}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Demande envoyée !",
        description: "Votre demande de test gratuit a été transmise via WhatsApp. Notre équipe vous répondra rapidement.",
      });

      // Reset form
      setFormData({
        firstName: "",
        identifier: ""
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
    <section id="test" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Essai <span className="bg-gradient-primary bg-clip-text text-transparent">Gratuit</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Testez nos services gratuitement avant de vous abonner. 
            Remplissez le formulaire et recevez vos accès rapidement.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-card border-border shadow-2xl animate-slide-in">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-wario-purple/20 flex items-center justify-center">
                <TestTube className="w-8 h-8 text-wario-purple" />
              </div>
              <CardTitle className="text-2xl font-bold">Demande de test gratuit</CardTitle>
              <CardDescription>
                Complétez les informations ci-dessous pour recevoir vos accès d'essai
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="bg-background border-border focus:border-wario-purple"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="identifier" className="flex items-center space-x-2">
                    <Key className="w-4 h-4" />
                    <span>Identifiant souhaité *</span>
                  </Label>
                  <Input
                    id="identifier"
                    name="identifier"
                    type="text"
                    placeholder="Minimum 8 caractères, sans majuscules"
                    value={formData.identifier}
                    onChange={handleInputChange}
                    className="bg-background border-border focus:border-wario-purple"
                    minLength={8}
                    pattern="[^A-Z]*"
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    Choisissez un identifiant unique (8 caractères minimum, sans majuscules)
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity group"
                  disabled={isSubmitting}
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  {isSubmitting ? "Envoi en cours..." : "Demander un test gratuit"}
                </Button>

                <div className="text-center text-sm text-muted-foreground space-y-2">
                  <p className="flex items-center justify-center space-x-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>Votre demande sera envoyée directement via WhatsApp</span>
                  </p>
                  <p>Notre équipe vous répondra dans les plus brefs délais</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestForm;