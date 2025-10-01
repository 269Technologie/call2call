import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeatureCard } from "@/components/FeatureCard";
import { CTABanner } from "@/components/CTABanner";
import {
  Bot,
  Calendar,
  FileText,
  Phone,
  MessageSquare,
  Globe,
  BarChart3,
  Settings,
  Database,
  Users,
  Shield,
  Sparkles,
} from "lucide-react";
import { SEO } from '@/components/SEO';

const Fonctionnalites = () => {
  const coreFeatures = [
    {
      icon: Bot,
      title: "IA 24/7",
      description: "L'assistant se présente au nom de l'entreprise, comprend les demandes et répond en langage naturel. Disponible jour et nuit, sans interruption.",
    },
    {
      icon: Calendar,
      title: "Prise de rendez-vous",
      description: "Synchronisation bidirectionnelle avec Google Calendar et Microsoft Outlook. Proposition de créneaux, confirmation et gestion des annulations automatiques.",
    },
    {
      icon: FileText,
      title: "Suivi dossier & FAQ",
      description: "Connecteurs vers vos CRM et ERP (exemples génériques disponibles). Base de connaissances personnalisable pour répondre aux questions récurrentes.",
    },
    {
      icon: Phone,
      title: "Transfert intelligent",
      description: "Transfert vers un humain selon des règles précises : détection d'urgence, plages horaires définies, ou mots-clés spécifiques.",
    },
  ];

  const advancedFeatures = [
    {
      icon: MessageSquare,
      title: "Transcriptions & résumés",
      description: "Transcription automatique de chaque appel avec résumé structuré en bullet points. Facilite le suivi et la recherche d'informations.",
    },
    {
      icon: Globe,
      title: "Multi-langue",
      description: "Support de 1 à 5 langues selon votre formule. L'IA détecte automatiquement la langue de l'appelant et répond dans celle-ci.",
    },
    {
      icon: BarChart3,
      title: "Dashboard & statistiques",
      description: "Journal d'appels enrichi avec durée, sentiment, tags et statut. Statistiques détaillées : volume, taux de décroché, motifs d'appel.",
    },
    {
      icon: Settings,
      title: "Configuration express",
      description: "Interface intuitive pour configurer le message d'accueil, les horaires, les règles de transfert et la FAQ en quelques clics.",
    },
    {
      icon: Database,
      title: "Connecteurs métier",
      description: "Intégrations natives avec vos outils : CRM, ERP, calendriers, messagerie. API ouverte pour connecter vos applications spécifiques.",
    },
    {
      icon: Users,
      title: "Gestion multi-utilisateurs",
      description: "Rôles et droits d'accès configurables : administrateur, utilisateur standard, ou simple lecteur. Parfait pour les équipes.",
    },
    {
      icon: Shield,
      title: "Sécurité renforcée",
      description: "Authentification multi-facteurs (MFA), accès HTTPS, conformité RGPD complète. Les enregistrements restent chez votre partenaire télécom.",
    },
    {
      icon: Sparkles,
      title: "Évolution continue",
      description: "Nouvelles fonctionnalités IA régulières, mise à jour automatique, support réactif et montée en charge sans friction.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Fonctionnalités - Call2Call" />
      <Header />
      <main>
        <section className="section-y bg-gradient-to-b from-brand-50/30 to-white">
          <div className="container-px">
            <div className="mx-auto max-w-3xl text-center">
              <div className="eyebrow mb-4">Fonctionnalités</div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Une IA conversationnelle complète pour votre standard
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Découvrez toutes les capacités de Call2Call pour transformer 
                votre accueil téléphonique en avantage compétitif.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-px">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold">Fonctionnalités principales</h2>
              <p className="text-lg text-muted-foreground">
                Les capacités essentielles de votre réceptionniste IA.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {coreFeatures.map((feature, index) => (
                <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 50}ms` }}>
                  <FeatureCard {...feature} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y bg-surface">
          <div className="container-px">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold">Fonctionnalités avancées</h2>
              <p className="text-lg text-muted-foreground">
                Des outils puissants pour optimiser votre gestion téléphonique.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {advancedFeatures.map((feature, index) => (
                <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 50}ms` }}>
                  <FeatureCard {...feature} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-px">
            <div className="card-glass mx-auto max-w-4xl p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold">
                Intégration complète avec votre écosystème
              </h2>
              <p className="mb-6 text-muted-foreground">
                Call2Call s'intègre naturellement avec vos outils existants : 
                Google Calendar, Microsoft 365, HubSpot, Salesforce, et bien d'autres.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="pill">Google Calendar</div>
                <div className="pill">Microsoft 365</div>
                <div className="pill">HubSpot</div>
                <div className="pill">Salesforce</div>
                <div className="pill">Zapier</div>
                <div className="pill">API REST</div>
              </div>
            </div>
          </div>
        </section>

        <CTABanner
          title="Découvrez Call2Call en action"
          description="Testez toutes ces fonctionnalités gratuitement pendant 14 jours, sans engagement."
          primaryText="Démarrer l'essai gratuit"
          primaryLink="/ecommerce"
          secondaryText="Voir les tarifs"
          secondaryLink="/pricing"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Fonctionnalites;