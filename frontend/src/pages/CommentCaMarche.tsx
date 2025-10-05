import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Steps } from "@/components/Steps";
import { CTABanner } from "@/components/CTABanner";
import {
  CreditCard,
  Phone,
  Settings,
  Bot,
  BarChart3,
} from "lucide-react";
import { SEO } from '@/components/SEO';

const CommentCaMarche = () => {
  const steps = [
    {
      number: 1,
      icon: CreditCard,
      title: "Souscrivez en ligne",
      description: "Choisissez votre formule et validez le paiement sécurisé. Processus simple et rapide, en quelques clics seulement.",
    },
    {
      number: 2,
      icon: Phone,
      title: "Numéro & routage",
      description: "Attribution d'un numéro Ringover ou connexion de votre numéro existant via portage. Configuration automatique du routage vers l'IA.",
    },
    {
      number: 3,
      icon: Settings,
      title: "Configuration express",
      description: "Définissez votre message d'accueil, vos horaires d'ouverture, les règles de transfert et alimentez la FAQ avec vos informations métier.",
    },
    {
      number: 4,
      icon: Bot,
      title: "IA en service",
      description: "L'assistant décroche automatiquement, comprend les demandes et répond en langage naturel. Disponible 24/7 sans intervention humaine.",
    },
    {
      number: 5,
      icon: BarChart3,
      title: "Suivi en temps réel",
      description: "Accédez aux journaux enrichis, transcriptions détaillées, résumés automatiques et statistiques d'utilisation via le portail client.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Comment ça marche - Call2Call" />
      <Header />
      <main>
        <section className="section-y bg-gradient-to-b from-brand-50/30 to-white">
          <div className="container-px">
            <div className="mx-auto max-w-3xl text-center">
              <div className="eyebrow mb-4">Comment ça marche</div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                De la souscription à la mise en service en 5 étapes
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Un parcours simple et guidé pour démarrer avec Call2Call en moins de 24 heures.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-px">
            <div className="mx-auto max-w-4xl">
              <Steps steps={steps} />
            </div>
          </div>
        </section>

        <section className="section-y bg-surface">
          <div className="container-px">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Architecture technique</h2>
              <p className="text-muted-foreground">
                Comprendre comment fonctionnent ensemble Ringover et Call2Call
              </p>
            </div>

            <div className="mx-auto max-w-5xl">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="card text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 mx-auto">
                    <Phone className="h-8 w-8 text-brand" />
                  </div>
                  <h3 className="mb-2 font-semibold">1. Appel entrant</h3>
                  <p className="text-sm text-muted-foreground">
                    Le client appelle votre numéro géré par Ringover
                  </p>
                </div>

                <div className="card text-center border-brand shadow-brand">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand mx-auto">
                    <Bot className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-2 font-semibold">2. Traitement IA</h3>
                  <p className="text-sm text-muted-foreground">
                    Call2Call répond, comprend et traite la demande en temps réel
                  </p>
                </div>

                <div className="card text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 mx-auto">
                    <BarChart3 className="h-8 w-8 text-brand" />
                  </div>
                  <h3 className="mb-2 font-semibold">3. Journalisation</h3>
                  <p className="text-sm text-muted-foreground">
                    Transcription, résumé et enrichissement disponibles dans le portail
                  </p>
                </div>
              </div>

              <div className="card-glass mt-8 p-6">
                <p className="text-sm text-center text-muted-foreground">
                  <strong>Important :</strong> Ringover gère la téléphonie et stocke les enregistrements bruts. 
                  Call2Call traite l'intelligence conversationnelle et n'héberge que les métadonnées et transcriptions 
                  (conformité RGPD complète).
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-px">
            <div className="mx-auto max-w-4xl">
              <div className="card">
                <h2 className="mb-6 text-2xl font-bold">Intégrations disponibles</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 font-semibold">Calendriers</h3>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Synchronisation bidirectionnelle pour la prise de rendez-vous automatique
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <div className="pill">Google Calendar</div>
                      <div className="pill">Microsoft Outlook</div>
                      <div className="pill">Apple Calendar</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold">CRM & ERP</h3>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Connectez vos outils métier pour enrichir le contexte client
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <div className="pill">HubSpot</div>
                      <div className="pill">Salesforce</div>
                      <div className="pill">Pipedrive</div>
                      <div className="pill">API REST</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold">Automatisation</h3>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Créez des workflows personnalisés sans code
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <div className="pill">Zapier</div>
                      <div className="pill">Make</div>
                      <div className="pill">Webhooks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTABanner
          title="Prêt à démarrer ?"
          description="Suivez ces 5 étapes simples et lancez votre standard intelligent dès aujourd'hui."
          primaryText="Commencer maintenant"
          primaryLink="/ecommerce"
          secondaryText="Voir les tarifs"
          secondaryLink="/pricing"
        />
      </main>
      <Footer />
    </div>
  );
};

export default CommentCaMarche;