import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import { Check, Sparkles, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from '@/components/SEO';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: 49,
      features: [
        "1 appel simultané",
        "1 langue",
        "Transcriptions illimitées",
        "Prise de rendez-vous",
        "Dashboard client",
        "Support par email",
      ],
    },
    {
      name: "Basic",
      price: 99,
      popular: true,
      features: [
        "2 appels simultanés",
        "1 langue",
        "Transcriptions illimitées",
        "Prise de rendez-vous",
        "Intégration CRM",
        "Dashboard client",
        "Support prioritaire",
      ],
    },
    {
      name: "Standard",
      price: 199,
      features: [
        "5 appels simultanés",
        "2 langues",
        "Transcriptions illimitées",
        "Prise de rendez-vous",
        "Intégration CRM & ERP",
        "API d'accès",
        "Dashboard client avancé",
        "Support prioritaire",
      ],
    },
    {
      name: "Pro",
      price: 399,
      features: [
        "10 appels simultanés",
        "3 langues",
        "Transcriptions illimitées",
        "Toutes intégrations",
        "API complète",
        "Transferts intelligents avancés",
        "Analytics avancés",
        "Support dédié",
      ],
    },
    {
      name: "Enterprise",
      price: 890,
      features: [
        "30 appels simultanés",
        "5 langues",
        "Transcriptions illimitées",
        "Toutes intégrations",
        "API complète",
        "IA personnalisée",
        "SLA garanti",
        "Account manager dédié",
        "Support 24/7",
      ],
    },
  ];

  const faqs = [
    {
      question: "Puis-je changer de formule en cours d'abonnement ?",
      answer: "Oui, vous pouvez upgrader ou downgrader à tout moment. Le changement est immédiat et la facturation est ajustée au prorata."
    },
    {
      question: "L'essai gratuit nécessite-t-il une carte bancaire ?",
      answer: "Oui, une carte bancaire est requise pour l'essai gratuit, mais aucun prélèvement ne sera effectué pendant les 14 jours. Vous pouvez annuler à tout moment."
    },
    {
      question: "Que se passe-t-il si je dépasse mes appels simultanés ?",
      answer: "Les appels supplémentaires sont mis en attente ou redirigés selon votre configuration. Nous vous recommandons de passer à une formule supérieure si cela arrive régulièrement."
    },
    {
      question: "Les enregistrements sont-ils inclus dans le prix ?",
      answer: "Non, les enregistrements et numéros sont facturés séparément par Ringover ou votre partenaire télécom. Call2Call facture uniquement l'intelligence IA et le portail client."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Tarifs - Call2Call" />
      <Header />
      <main>
        <section className="section-y bg-gradient-to-b from-brand-50/50 to-background">
          <div className="container-px">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">Tarifs transparents</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Des formules pour chaque besoin
              </h1>
              <p className="text-xl text-muted-foreground">
                De l'artisan indépendant à l'entreprise, trouvez la formule qui vous correspond. Sans engagement, changez quand vous voulez.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-px">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {plans.slice(0, 3).map((plan, index) => (
                <PricingCard key={index} plan={plan} />
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {plans.slice(3, 5).map((plan, index) => (
                <PricingCard key={index + 3} plan={plan} />
              ))}
            </div>

            <div className="card max-w-4xl mx-auto bg-surface-2/50">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                    <Info className="h-5 w-5 text-brand" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">À propos de la facturation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Ringover facture</strong> les numéros et l'enregistrement brut des appels séparément. 
                    <strong className="text-foreground"> Call2Call</strong> enrichit ces appels avec l'IA conversationnelle et le portail client. 
                    Les deux abonnements sont distincts et complémentaires.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-y bg-surface">
          <div className="container-px">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground text-center mb-12">Questions fréquentes</h2>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="card hover-lift">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTABanner
          title="Prêt à commencer ?"
          description="Essayez Call2Call gratuitement pendant 14 jours. Aucun engagement, annulation en 1 clic."
          primaryText="Démarrer l'essai gratuit"
          primaryLink="/ecommerce"
        />
      </main>
      <Footer />
    </div>
  );
};

const PricingCard = ({ plan }: { plan: any }) => {
  return (
    <div
      className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col h-full ${
        plan.popular
          ? "bg-gradient-to-br from-primary to-primary/90 text-white shadow-xl scale-105"
          : "bg-card border border-border hover:border-primary/50 hover:shadow-lg"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-primary text-sm font-semibold shadow-md">
          Le plus populaire
        </div>
      )}

      <div className="mb-6">
        <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-foreground"}`}>
          {plan.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-primary"}`}>
            {plan.price}€
          </span>
          <span className={`${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>
            /mois HT
          </span>
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {plan.features.map((feature: string, i: number) => (
          <li key={i} className="flex items-start gap-3">
            <Check
              size={20}
              className={`mt-0.5 flex-shrink-0 ${plan.popular ? "text-white" : "text-primary"}`}
            />
            <span className={`text-sm ${plan.popular ? "text-white/90" : "text-muted-foreground"}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Link
        to="/ecommerce"
        className={`block text-center px-6 py-3 rounded-xl font-medium transition-all ${
          plan.popular
            ? "bg-white text-primary hover:bg-white/90 shadow-md"
            : "bg-gradient-to-r from-primary to-primary/90 text-white hover:opacity-90 shadow-md"
        }`}
      >
        Choisir {plan.name}
      </Link>
    </div>
  );
};

export default Pricing;