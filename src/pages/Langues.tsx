import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import { Globe, Check, Languages, MessageCircle, Clock } from "lucide-react";
import { SEO } from '@/components/SEO';

const Langues = () => {
  const supportedLanguages = [
    { code: "fr", name: "Français", level: "Natif", available: true },
    { code: "en", name: "Anglais", level: "Avancé", available: true },
    { code: "es", name: "Espagnol", level: "Avancé", available: true },
    { code: "de", name: "Allemand", level: "Intermédiaire", available: true },
    { code: "it", name: "Italien", level: "Intermédiaire", available: true },
    { code: "pt", name: "Portugais", level: "Intermédiaire", available: true },
    { code: "nl", name: "Néerlandais", level: "Basique", available: true },
    { code: "ar", name: "Arabe", level: "Basique", available: false },
    { code: "zh", name: "Chinois", level: "Basique", available: false },
  ];

  const plansLanguageSupport = [
    {
      name: "Starter & Basic",
      languages: 1,
      features: ["1 langue au choix", "Détection automatique", "Support standard"]
    },
    {
      name: "Standard",
      languages: 2,
      features: ["2 langues au choix", "Détection automatique", "Support prioritaire", "Basculer entre langues"]
    },
    {
      name: "Pro",
      languages: 3,
      features: ["3 langues au choix", "Détection automatique", "Support prioritaire", "Basculer entre langues", "Personnalisation avancée"]
    },
    {
      name: "Enterprise",
      languages: 5,
      features: ["5 langues au choix", "Détection automatique", "Support 24/7", "Basculer entre langues", "Personnalisation avancée", "Langues personnalisées sur demande"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Langues Supportées - Call2Call" />
      <Header />
      <main>
        <section className="section-y bg-gradient-to-b from-brand-50/30 to-white">
          <div className="container-px">
            <div className="mx-auto max-w-3xl text-center">
              <div className="eyebrow mb-4">Langues</div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Service multilingue 24h/24
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Votre assistant IA parle la langue de vos clients, où qu'ils soient dans le monde.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-px">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Langues supportées</h2>
              <p className="text-muted-foreground">
                De 1 à 5 langues selon votre formule, avec détection automatique
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {supportedLanguages.map((lang, index) => (
                <div key={lang.code} className="card hover-lift">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50">
                        <Globe className="h-6 w-6 text-brand" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{lang.name}</h3>
                        <p className="text-sm text-muted-foreground">{lang.level}</p>
                      </div>
                    </div>
                    {lang.available ? (
                      <Check className="h-6 w-6 text-green-500" />
                    ) : (
                      <Clock className="h-6 w-6 text-gray-300" />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {lang.available ? "Disponible" : "Bientôt disponible"}
                    </span>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-surface-2">
                      {lang.code.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y bg-surface">
          <div className="container-px">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Support par formule</h2>
              <p className="text-muted-foreground">
                Choisissez le nombre de langues adapté à votre activité internationale
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {plansLanguageSupport.map((plan, index) => (
                <div key={index} className="card text-center">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-primary">{plan.languages}</div>
                    <div className="text-sm text-muted-foreground">langue{plan.languages > 1 ? 's' : ''}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-px">
            <div className="mx-auto max-w-4xl">
              <div className="card bg-brand-50 border-brand-200">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-brand">
                      <Languages className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2">Détection automatique</h3>
                    <p className="text-muted-foreground mb-4">
                      Notre IA détecte automatiquement la langue de l'appelant et répond dans la même langue. 
                      Aucune configuration requise de votre part.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      <span className="chip bg-white text-brand border-brand-200">
                        Reconnaissance vocale
                      </span>
                      <span className="chip bg-white text-brand border-brand-200">
                        Naturel et fluide
                      </span>
                      <span className="chip bg-white text-brand border-brand-200">
                        Accents régionaux
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-y bg-surface">
          <div className="container-px">
            <div className="mx-auto max-w-3xl text-center">
              <div className="card">
                <MessageCircle className="mx-auto mb-4 h-12 w-12 text-brand" />
                <h2 className="mb-4 text-2xl font-bold">Besoin d'une langue spécifique ?</h2>
                <p className="text-muted-foreground mb-6">
                  Nous ajoutons régulièrement de nouvelles langues. Contactez-nous si vous avez besoin 
                  d'une langue non encore supportée.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/support" className="btn-primary">
                    Demander une langue
                  </a>
                  <a href="/pricing" className="btn-outline">
                    Voir les formules
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTABanner
          title="Prêt à parler la langue de vos clients ?"
          description="Choisissez votre formule et démarrez avec le nombre de langues adapté à votre business international."
          primaryText="Démarrer l'essai gratuit"
          primaryLink="/ecommerce"
          secondaryText="Comparer les formules"
          secondaryLink="/pricing"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Langues;