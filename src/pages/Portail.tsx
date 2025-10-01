import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import {
  Phone,
  Clock,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  MoreHorizontal,
  Settings,
  Calendar,
  MessageSquare,
  BarChart3,
} from "lucide-react";
import { SEO } from '@/components/SEO';

const Portail = () => {
  const mockCalls = [
    {
      id: 1,
      caller: "Jean Martin",
      number: "+33 6 12 34 56 78",
      duration: "3:24",
      sentiment: "positive",
      status: "resolved",
      tags: ["RDV", "Urgent"],
      time: "Il y a 12 min",
    },
    {
      id: 2,
      caller: "Sophie Dubois",
      number: "+33 6 98 76 54 32",
      duration: "2:15",
      sentiment: "neutral",
      status: "callback",
      tags: ["Devis"],
      time: "Il y a 45 min",
    },
    {
      id: 3,
      caller: "Pierre Lefèvre",
      number: "+33 6 45 67 89 01",
      duration: "1:42",
      sentiment: "positive",
      status: "resolved",
      tags: ["Info"],
      time: "Il y a 2h",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Portail client - Call2Call" />
      <Header />
      <main>
        <section className="section-y bg-gradient-to-b from-brand-50/30 to-white">
          <div className="container-px">
            <div className="mx-auto max-w-3xl text-center">
              <div className="eyebrow mb-4">Portail client</div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Gérez votre standard en temps réel
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Un dashboard complet pour configurer votre IA, consulter les appels 
                et optimiser vos performances.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-px">
            <div className="mb-8 rounded-xl border border-border bg-white p-4 shadow-lg">
              <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
                <div>
                  <h2 className="text-2xl font-bold">Vue d'ensemble</h2>
                  <p className="text-sm text-muted-foreground">
                    Dernières 24 heures
                  </p>
                </div>
                <button className="btn-outline">
                  <Settings className="h-4 w-4" />
                  Configurer l'IA
                </button>
              </div>

              <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="card">
                  <div className="mb-2 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-brand" />
                    <span className="text-sm text-muted-foreground">
                      Appels traités
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-primary">24</div>
                  <div className="mt-1 flex items-center gap-1 text-sm text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span>+12% vs hier</span>
                  </div>
                </div>

                <div className="card">
                  <div className="mb-2 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-brand" />
                    <span className="text-sm text-muted-foreground">
                      Durée moy.
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-primary">2:34</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Par appel
                  </div>
                </div>

                <div className="card">
                  <div className="mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand" />
                    <span className="text-sm text-muted-foreground">
                      Résolus
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-primary">21</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    87.5%
                  </div>
                </div>

                <div className="card">
                  <div className="mb-2 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-brand" />
                    <span className="text-sm text-muted-foreground">
                      Satisfaction
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-primary">4.8</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    / 5.0
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                  <MessageSquare className="h-5 w-5" />
                  Journal d'appels
                </h3>

                <div className="space-y-3">
                  {mockCalls.map((call) => (
                    <div
                      key={call.id}
                      className="flex items-center gap-4 rounded-xl border border-border p-4 transition-colors hover:bg-surface"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50">
                        <Phone className="h-6 w-6 text-brand" />
                      </div>

                      <div className="flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <span className="font-semibold">{call.caller}</span>
                          <span
                            className={`badge ${
                              call.sentiment === "positive"
                                ? "badge-brand"
                                : "bg-surface-2"
                            }`}
                          >
                            {call.sentiment === "positive" ? "😊" : "😐"}
                          </span>
                        </div>
                        <div className="mb-2 text-sm text-muted-foreground">
                          {call.number} • {call.duration} • {call.time}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {call.tags.map((tag, i) => (
                            <span key={i} className="chip text-xs">
                              {tag}
                            </span>
                          ))}
                          <span
                            className={`chip text-xs ${
                              call.status === "resolved"
                                ? "bg-green-100 text-green-700"
                                : "bg-amber-100 text-amber-700"
                            }`}
                          >
                            {call.status === "resolved"
                              ? "Résolu"
                              : "À rappeler"}
                          </span>
                        </div>
                      </div>

                      <button className="btn-ghost h-10 w-10 p-0">
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-y bg-surface">
          <div className="container-px">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Fonctionnalités du portail
              </h2>
              <p className="text-muted-foreground">
                Tout ce dont vous avez besoin pour piloter votre standard
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
                  <MessageSquare className="h-6 w-6 text-brand" />
                </div>
                <h3 className="mb-2 font-semibold">
                  Transcriptions complètes
                </h3>
                <p className="text-sm text-muted-foreground">
                  Chaque appel est transcrit automatiquement avec identification
                  des interlocuteurs et timestamps.
                </p>
              </div>

              <div className="card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
                  <BarChart3 className="h-6 w-6 text-brand" />
                </div>
                <h3 className="mb-2 font-semibold">Résumés automatiques</h3>
                <p className="text-sm text-muted-foreground">
                  L'IA génère un résumé structuré en bullet points avec les
                  informations clés de chaque conversation.
                </p>
              </div>

              <div className="card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
                  <Calendar className="h-6 w-6 text-brand" />
                </div>
                <h3 className="mb-2 font-semibold">
                  Gestion des rendez-vous
                </h3>
                <p className="text-sm text-muted-foreground">
                  Vue calendrier intégrée avec les RDV pris par l'IA,
                  modifications et annulations en un clic.
                </p>
              </div>

              <div className="card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
                  <Settings className="h-6 w-6 text-brand" />
                </div>
                <h3 className="mb-2 font-semibold">Configuration IA</h3>
                <p className="text-sm text-muted-foreground">
                  Personnalisez le ton, le message d'accueil, les règles de
                  transfert et la FAQ directement depuis le portail.
                </p>
              </div>

              <div className="card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
                  <TrendingUp className="h-6 w-6 text-brand" />
                </div>
                <h3 className="mb-2 font-semibold">Statistiques avancées</h3>
                <p className="text-sm text-muted-foreground">
                  Tableaux de bord interactifs avec graphiques, tendances et
                  export CSV/Excel.
                </p>
              </div>

              <div className="card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
                  <CheckCircle2 className="h-6 w-6 text-brand" />
                </div>
                <h3 className="mb-2 font-semibold">Gestion abonnement</h3>
                <p className="text-sm text-muted-foreground">
                  Changez de formule, mettez à jour vos moyens de paiement ou
                  annulez votre abonnement en 1 clic.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-px">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold">
                  Configuration intuitive
                </h2>
                <p className="text-muted-foreground">
                  Personnalisez votre IA en quelques clics
                </p>
              </div>

              <div className="card">
                <div className="space-y-6">
                  <div>
                    <label className="mb-2 block font-semibold">
                      Message d'accueil
                    </label>
                    <textarea
                      className="w-full rounded-xl border border-input bg-surface p-4 text-sm"
                      rows={3}
                      placeholder="Bonjour, vous êtes bien chez [Entreprise]. Je suis l'assistant virtuel. Comment puis-je vous aider aujourd'hui ?"
                    ></textarea>
                  </div>

                  <div>
                    <label className="mb-2 block font-semibold">
                      Horaires d'ouverture
                    </label>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border border-border bg-white p-4">
                        <div className="mb-2 text-sm font-medium">
                          Lundi - Vendredi
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          9h00 - 18h00
                        </div>
                      </div>
                      <div className="rounded-xl border border-border bg-white p-4">
                        <div className="mb-2 text-sm font-medium">
                          Week-end
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <AlertCircle className="h-4 w-4" />
                          Fermé
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block font-semibold">
                      Règles de transfert
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between rounded-xl border border-border bg-white p-4">
                        <span className="text-sm">
                          Transférer si mot-clé "urgent"
                        </span>
                        <div className="chip bg-green-100 text-green-700">
                          Actif
                        </div>
                      </div>
                      <div className="flex items-center justify-between rounded-xl border border-border bg-white p-4">
                        <span className="text-sm">
                          Transférer en dehors des horaires
                        </span>
                        <div className="chip bg-green-100 text-green-700">
                          Actif
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTABanner
          title="Accédez au portail dès aujourd'hui"
          description="Créez votre compte et découvrez la puissance de Call2Call."
          primaryText="Commencer maintenant"
          primaryLink="/ecommerce"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Portail;