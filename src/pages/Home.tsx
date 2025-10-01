import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { FeatureCard } from "@/components/FeatureCard";
import { CTABanner } from "@/components/CTABanner";
import {
  Bot,
  Calendar,
  FileText,
  Phone,
  Globe,
  BarChart3,
  Shield,
  Zap,
} from "lucide-react";
import { SEO } from '@/components/SEO';

const Home = () => {
  const features = [
    {
      icon: Bot,
      title: "IA conversationnelle 24/7",
      description: "Se présente au nom de votre entreprise, gère questions, filtres et consignes en langage naturel.",
    },
    {
      icon: Calendar,
      title: "Prise de rendez-vous",
      description: "Synchronisation Google/Outlook avec gestion automatique des créneaux et annulations.",
    },
    {
      icon: FileText,
      title: "Suivi dossier & FAQ",
      description: "Connecteurs CRM/ERP et base de connaissances personnalisée pour répondre à vos clients.",
    },
    {
      icon: Phone,
      title: "Transfert intelligent",
      description: "Vers un humain selon des règles précises : urgence, plages horaires, mots-clés.",
    },
    {
      icon: Globe,
      title: "Multi-langue",
      description: "De 1 à 5 langues selon votre formule, pour servir tous vos clients internationaux.",
    },
    {
      icon: BarChart3,
      title: "Dashboard complet",
      description: "Journal d'appels enrichi, statistiques d'usage, transcriptions et résumés automatiques.",
    },
  ];

  const stats = [
    { value: "99.5%", label: "Disponibilité" },
    { value: "< 3s", label: "Temps de réponse" },
    { value: "95%", label: "Satisfaction" },
    { value: "24/7", label: "Service continu" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Header />
      
      <main>
        <Hero />

        <section className="section-y bg-surface">
          <div className="container-px">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="stat">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-px">
            <div className="text-center mb-16">
              <div className="eyebrow mb-3">Fonctionnalités</div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Ne manquez plus aucun appel
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                IA connectée à votre téléphonie et vos outils métier
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} link="/fonctionnalites" />
              ))}
            </div>
          </div>
        </section>

        <section className="section-y bg-gradient-to-br from-blue-50 to-blue-50/50">
          <div className="container-px">
            <div className="card max-w-3xl mx-auto text-center">
              <div className="pill inline-flex mb-6 shadow-md bg-blue-100 text-blue-500 border-blue-200">
                <Zap className="h-4 w-4 text-blue-500" />
                <span className="font-medium text-blue-500">Partenariat Ringover</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Téléphonie fournie par Ringover
              </h2>
              <p className="text-lg text-muted-foreground">
                Ringover gère vos numéros et enregistrements. Call2Call apporte l'intelligence IA.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-px">
            <div className="card max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Enregistrements chez Ringover
                  </h3>
                  <p className="text-muted-foreground">
                    Call2Call n'héberge que les métadonnées et transcriptions. Conformité RGPD garantie.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="badge bg-blue-100 text-blue-500 border-blue-200 font-semibold">RGPD</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTABanner
          title="Prêt à ne manquer aucun appel ?"
          description="Essayez Call2Call gratuitement."
          primaryText="Démarrer l'essai"
          primaryLink="/ecommerce"
          secondaryText="Voir le portail"
          secondaryLink="/portail"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;