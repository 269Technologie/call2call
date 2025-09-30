import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check, CreditCard, User, Lock } from "lucide-react";
import { PricingCard } from "@/components/PricingCard";

const Ecommerce = () => {
  const [selectedPlan, setSelectedPlan] = useState("Standard");
  const [step, setStep] = useState(1);

  const plans = [
    { name: "Starter", price: 49, calls: 1, languages: 1 },
    { name: "Basic", price: 99, calls: 2, languages: 1 },
    { name: "Standard", price: 199, calls: 5, languages: 2, popular: true },
    { name: "Pro", price: 399, calls: 10, languages: 3 },
    { name: "Enterprise", price: 890, calls: 30, languages: 5 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-y">
        <div className="container-px">
          <div className="mx-auto max-w-6xl">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-4">
                {[
                  { num: 1, label: "Formule" },
                  { num: 2, label: "Numéro" },
                  { num: 3, label: "Compte" },
                  { num: 4, label: "Paiement" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          step >= s.num
                            ? "bg-brand text-white"
                            : "border-2 border-border bg-white text-muted-foreground"
                        }`}
                      >
                        {step > s.num ? <Check className="h-5 w-5" /> : s.num}
                      </div>
                      <span className="hidden text-sm font-medium md:inline">
                        {s.label}
                      </span>
                    </div>
                    {i < 3 && (
                      <div
                        className={`h-0.5 w-12 ${
                          step > s.num ? "bg-brand" : "bg-border"
                        }`}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step 1: Plan Selection */}
            {step === 1 && (
              <div className="animate-fade-in">
                <div className="mb-8 text-center">
                  <h1 className="mb-4 text-3xl font-bold">
                    Choisissez votre formule
                  </h1>
                  <p className="text-muted-foreground">
                    Sélectionnez le plan adapté à votre volume d'appels
                  </p>
                </div>

                <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  {plans.map((plan) => (
                    <div
                      key={plan.name}
                      onClick={() => setSelectedPlan(plan.name)}
                      className={`cursor-pointer ${
                        selectedPlan === plan.name ? "ring-2 ring-brand rounded-2xl" : ""
                      }`}
                    >
                      <PricingCard {...plan} />
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setStep(2)}
                    className="btn-primary"
                  >
                    Continuer
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Number Selection */}
            {step === 2 && (
              <div className="animate-fade-in">
                <div className="mb-8 text-center">
                  <h1 className="mb-4 text-3xl font-bold">
                    Configuration du numéro
                  </h1>
                  <p className="text-muted-foreground">
                    Choisissez comment obtenir votre numéro de téléphone
                  </p>
                </div>

                <div className="mx-auto max-w-2xl space-y-4">
                  <div className="card hover-lift cursor-pointer border-2 border-brand">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand">
                        <Check className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 font-semibold">
                          Attribuer un nouveau numéro Ringover
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Nous vous attribuons instantanément un nouveau numéro
                          français. Configuration automatique et mise en service
                          immédiate.
                        </p>
                        <div className="mt-3">
                          <span className="badge-brand">Recommandé</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card hover-lift cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-2">
                        <User className="h-6 w-6 text-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 font-semibold">
                          Connecter mon numéro existant
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Portage de votre numéro actuel vers Ringover. Délai de
                          1 à 5 jours ouvrés selon l'opérateur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-center gap-4">
                  <button
                    onClick={() => setStep(1)}
                    className="btn-outline"
                  >
                    Retour
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="btn-primary"
                  >
                    Continuer
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Account Creation */}
            {step === 3 && (
              <div className="animate-fade-in">
                <div className="mb-8 text-center">
                  <h1 className="mb-4 text-3xl font-bold">Créez votre compte</h1>
                  <p className="text-muted-foreground">
                    Quelques informations pour finaliser votre inscription
                  </p>
                </div>

                <div className="card mx-auto max-w-2xl">
                  <form className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium">
                          Prénom
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-xl border border-input bg-white px-4 py-3 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                          placeholder="Jean"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium">
                          Nom
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-xl border border-input bg-white px-4 py-3 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                          placeholder="Dupont"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Email professionnel
                      </label>
                      <input
                        type="email"
                        className="w-full rounded-xl border border-input bg-white px-4 py-3 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                        placeholder="jean.dupont@entreprise.fr"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Nom de l'entreprise
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-input bg-white px-4 py-3 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                        placeholder="Mon Entreprise SARL"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Mot de passe
                      </label>
                      <input
                        type="password"
                        className="w-full rounded-xl border border-input bg-white px-4 py-3 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                        placeholder="••••••••"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="terms"
                        className="mt-1 h-4 w-4 rounded border-border text-brand focus:ring-2 focus:ring-brand/20"
                      />
                      <label htmlFor="terms" className="text-sm text-muted-foreground">
                        J'accepte les{" "}
                        <a href="#" className="text-brand hover:underline">
                          conditions générales
                        </a>{" "}
                        et la{" "}
                        <a href="#" className="text-brand hover:underline">
                          politique de confidentialité
                        </a>
                      </label>
                    </div>
                  </form>
                </div>

                <div className="mt-8 flex justify-center gap-4">
                  <button onClick={() => setStep(2)} className="btn-outline">
                    Retour
                  </button>
                  <button onClick={() => setStep(4)} className="btn-primary">
                    Continuer
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Payment */}
            {step === 4 && (
              <div className="animate-fade-in">
                <div className="mb-8 text-center">
                  <h1 className="mb-4 text-3xl font-bold">Paiement sécurisé</h1>
                  <p className="text-muted-foreground">
                    Essai gratuit de 14 jours, puis{" "}
                    {plans.find((p) => p.name === selectedPlan)?.price}€/mois HT
                  </p>
                </div>

                <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
                  {/* Payment Form */}
                  <div className="card">
                    <h2 className="mb-6 flex items-center gap-2 text-xl font-bold">
                      <CreditCard className="h-5 w-5" />
                      Informations de paiement
                    </h2>

                    <form className="space-y-6">
                      <div>
                        <label className="mb-2 block text-sm font-medium">
                          Numéro de carte
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-xl border border-input bg-white px-4 py-3 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-medium">
                            Date d'expiration
                          </label>
                          <input
                            type="text"
                            className="w-full rounded-xl border border-input bg-white px-4 py-3 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                            placeholder="MM/AA"
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium">
                            CVV
                          </label>
                          <input
                            type="text"
                            className="w-full rounded-xl border border-input bg-white px-4 py-3 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                            placeholder="123"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 rounded-xl bg-surface p-4">
                        <Lock className="h-5 w-5 text-brand" />
                        <p className="text-sm text-muted-foreground">
                          Paiement 100% sécurisé via Stripe
                        </p>
                      </div>
                    </form>
                  </div>

                  {/* Order Summary */}
                  <div>
                    <div className="card">
                      <h2 className="mb-6 text-xl font-bold">
                        Récapitulatif de commande
                      </h2>

                      <div className="space-y-4 border-b border-border pb-6">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Formule</span>
                          <span className="font-medium">{selectedPlan}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Appels simultanés
                          </span>
                          <span className="font-medium">
                            {
                              plans.find((p) => p.name === selectedPlan)
                                ?.calls
                            }
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Langues</span>
                          <span className="font-medium">
                            {
                              plans.find((p) => p.name === selectedPlan)
                                ?.languages
                            }
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3 py-6">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Essai gratuit
                          </span>
                          <span className="font-medium text-green-600">
                            14 jours
                          </span>
                        </div>
                        <div className="flex justify-between text-xl font-bold">
                          <span>Total après essai</span>
                          <span className="text-primary">
                            {
                              plans.find((p) => p.name === selectedPlan)
                                ?.price
                            }
                            €/mois
                          </span>
                        </div>
                      </div>

                      <div className="rounded-xl bg-brand-50 p-4 text-sm">
                        <p className="font-medium text-brand">
                          Aucun prélèvement pendant 14 jours
                        </p>
                        <p className="mt-1 text-brand/80">
                          Annulation possible à tout moment en 1 clic
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-center gap-4">
                  <button onClick={() => setStep(3)} className="btn-outline">
                    Retour
                  </button>
                  <button className="btn-primary">
                    Confirmer et démarrer l'essai
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Ecommerce;
