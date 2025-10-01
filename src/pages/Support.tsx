import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { CTABanner } from "@/components/CTABanner";
import { Mail, MessageCircle, Book, HelpCircle } from "lucide-react";
import { SEO } from '@/components/SEO';

const Support = () => {
  const faqItems = [
    {
      question: "Comment démarrer avec Call2Call ?",
      answer:
        "Il suffit de souscrire en ligne, choisir votre formule et suivre les 5 étapes de configuration. Vous recevrez un numéro Ringover ou pourrez connecter votre numéro existant. La mise en service complète prend moins de 24 heures.",
    },
    {
      question: "Puis-je tester Call2Call avant de m'engager ?",
      answer:
        "Oui ! Nous offrons un essai gratuit de 14 jours sur toutes les formules. Aucun prélèvement n'est effectué pendant la période d'essai et vous pouvez annuler à tout moment en 1 clic.",
    },
    {
      question: "Comment l'IA apprend-elle sur mon entreprise ?",
      answer:
        "Lors de la configuration initiale, vous alimentez une FAQ avec vos informations métier (services, tarifs, horaires, etc.). L'IA s'appuie sur cette base de connaissances pour répondre aux questions courantes. Vous pouvez enrichir la FAQ à tout moment depuis le portail.",
    },
    {
      question: "Que se passe-t-il si l'IA ne peut pas répondre ?",
      answer:
        "L'IA peut transférer l'appel vers un humain selon vos règles : détection de mots-clés comme 'urgent', en dehors des horaires configurés, ou si elle ne comprend pas la demande après 2 tentatives.",
    },
    {
      question: "Les enregistrements sont-ils accessibles ?",
      answer:
        "Les enregistrements audio bruts sont stockés par Ringover (votre partenaire télécom). Call2Call vous donne accès aux transcriptions textuelles et aux résumés IA via le portail client.",
    },
    {
      question: "Comment fonctionne la prise de rendez-vous automatique ?",
      answer:
        "L'IA se connecte à votre calendrier Google ou Outlook en lecture/écriture. Elle propose des créneaux disponibles, confirme le RDV avec le client et l'ajoute automatiquement à votre agenda avec les informations de contact.",
    },
    {
      question: "Puis-je changer de formule en cours d'abonnement ?",
      answer:
        "Oui, vous pouvez upgrader ou downgrader à tout moment depuis le portail. Le changement est immédiat et la facturation est ajustée au prorata du temps restant.",
    },
    {
      question: "Call2Call supporte-t-il plusieurs langues ?",
      answer:
        "Oui, selon votre formule : de 1 langue (Starter/Basic) à 5 langues (Enterprise). L'IA détecte automatiquement la langue de l'appelant et répond dans celle-ci.",
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer:
        "Oui, nous appliquons les meilleures pratiques de sécurité : chiffrement SSL/TLS, authentification MFA, hébergement en Europe (conformité RGPD), audits réguliers. Les enregistrements audio restent chez Ringover.",
    },
    {
      question: "Comment puis-je contacter le support ?",
      answer:
        "Vous pouvez créer un ticket via le formulaire ci-dessous ou nous envoyer un email à support@call2call.fr. Notre équipe répond sous 24h ouvrées (48h le week-end).",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Support - Call2Call" />
      <Header />
      <main>
        <section className="section-y bg-gradient-to-b from-brand-50/30 to-white">
          <div className="container-px">
            <div className="mx-auto max-w-3xl text-center">
              <div className="eyebrow mb-4">Support</div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Comment pouvons-nous vous aider ?
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Consultez notre FAQ ou contactez-nous directement. 
                Nous sommes là pour répondre à vos questions.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-px">
            <div className="mb-12 grid gap-6 md:grid-cols-3">
              <div className="card text-center hover-lift">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50">
                  <Book className="h-8 w-8 text-brand" />
                </div>
                <h3 className="mb-2 font-semibold">Centre d'aide</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Guides, tutoriels et documentation complète
                </p>
                <a href="#faq" className="text-sm font-medium text-primary hover:underline">
                  Voir la FAQ
                </a>
              </div>

              <div className="card text-center hover-lift">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50">
                  <MessageCircle className="h-8 w-8 text-brand" />
                </div>
                <h3 className="mb-2 font-semibold">Créer un ticket</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Réponse sous 24h ouvrées par notre équipe
                </p>
                <a href="#contact" className="text-sm font-medium text-primary hover:underline">
                  Nous contacter
                </a>
              </div>

              <div className="card text-center hover-lift">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50">
                  <Mail className="h-8 w-8 text-brand" />
                </div>
                <h3 className="mb-2 font-semibold">Email direct</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Pour toute question urgente ou spécifique
                </p>
                <a
                  href="mailto:support@call2call.fr"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  support@call2call.fr
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section-y bg-surface">
          <div className="container-px">
            <div className="mb-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand">
                <HelpCircle className="h-8 w-8 text-white" />
              </div>
              <h2 className="mb-4 text-3xl font-bold">Questions fréquentes</h2>
              <p className="text-muted-foreground">
                Les réponses aux questions les plus courantes sur Call2Call
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <FAQ items={faqItems} />
            </div>
          </div>
        </section>

        <section id="contact" className="section-y">
          <div className="container-px">
            <div className="mx-auto max-w-2xl">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold">Créer un ticket</h2>
                <p className="text-muted-foreground">
                  Décrivez votre problème ou votre question, nous vous répondrons dans les plus brefs délais
                </p>
              </div>

              <div className="card">
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
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
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-xl border border-input bg-white px-4 py-3 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                      placeholder="jean.dupont@entreprise.fr"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Sujet
                    </label>
                    <select className="w-full rounded-xl border border-input bg-white px-4 py-3 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20">
                      <option>Question technique</option>
                      <option>Problème de facturation</option>
                      <option>Configuration IA</option>
                      <option>Intégration calendrier</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full rounded-xl border border-input bg-white px-4 py-3 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                      placeholder="Décrivez votre problème ou votre question en détail..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Envoyer le ticket
                  </button>

                  <p className="text-center text-sm text-muted-foreground">
                    Nous vous répondrons sous 24h ouvrées
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        <CTABanner
          title="Besoin d'aide pour démarrer ?"
          description="Créez votre compte et bénéficiez d'un accompagnement personnalisé pour configurer votre IA."
          primaryText="Commencer maintenant"
          primaryLink="/ecommerce"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Support;