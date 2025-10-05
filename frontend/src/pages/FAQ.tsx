import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import { HelpCircle, Search, ChevronDown } from "lucide-react";
import { SEO } from '@/components/SEO';
import { useState } from "react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Démarrage & Configuration",
      items: [
        {
          question: "Comment démarrer avec Call2Call ?",
          answer: "Il suffit de souscrire en ligne, choisir votre formule et suivre les 5 étapes de configuration. Vous recevrez un numéro Ringover ou pourrez connecter votre numéro existant. La mise en service complète prend moins de 24 heures."
        },
        {
          question: "Puis-je tester Call2Call avant de m'engager ?",
          answer: "Oui ! Nous offrons un essai gratuit de 14 jours sur toutes les formules. Aucun prélèvement n'est effectué pendant la période d'essai et vous pouvez annuler à tout moment en 1 clic."
        },
        {
          question: "Comment configurer l'IA pour mon entreprise ?",
          answer: "Lors de la configuration initiale, vous alimentez une FAQ avec vos informations métier (services, tarifs, horaires, etc.). L'IA s'appuie sur cette base de connaissances pour répondre aux questions courantes. Vous pouvez enrichir la FAQ à tout moment depuis le portail."
        }
      ]
    },
    {
      title: "Fonctionnalités & Utilisation",
      items: [
        {
          question: "Comment fonctionne la prise de rendez-vous automatique ?",
          answer: "L'IA se connecte à votre calendrier Google ou Outlook en lecture/écriture. Elle propose des créneaux disponibles, confirme le RDV avec le client et l'ajoute automatiquement à votre agenda avec les informations de contact."
        },
        {
          question: "Que se passe-t-il si l'IA ne peut pas répondre ?",
          answer: "L'IA peut transférer l'appel vers un humain selon vos règles : détection de mots-clés comme 'urgent', en dehors des horaires configurés, ou si elle ne comprend pas la demande après 2 tentatives."
        },
        {
          question: "Call2Call supporte-t-il plusieurs langues ?",
          answer: "Oui, selon votre formule : de 1 langue (Starter/Basic) à 5 langues (Enterprise). L'IA détecte automatiquement la langue de l'appelant et répond dans celle-ci."
        },
        {
          question: "Puis-je personnaliser le message d'accueil ?",
          answer: "Absolument ! Vous pouvez personnaliser complètement le message d'accueil, le ton de l'IA, et même créer différents scénarios selon les horaires ou types d'appelants."
        }
      ]
    },
    {
      title: "Facturation & Abonnements",
      items: [
        {
          question: "Puis-je changer de formule en cours d'abonnement ?",
          answer: "Oui, vous pouvez upgrader ou downgrader à tout moment depuis le portail. Le changement est immédiat et la facturation est ajustée au prorata du temps restant."
        },
        {
          question: "L'essai gratuit nécessite-t-il une carte bancaire ?",
          answer: "Oui, une carte bancaire est requise pour l'essai gratuit, mais aucun prélèvement ne sera effectué pendant les 14 jours. Vous pouvez annuler à tout moment."
        },
        {
          question: "Que se passe-t-il si je dépasse mes appels simultanés ?",
          answer: "Les appels supplémentaires sont mis en attente ou redirigés selon votre configuration. Nous vous recommandons de passer à une formule supérieure si cela arrive régulièrement."
        }
      ]
    },
    {
      title: "Sécurité & Données",
      items: [
        {
          question: "Mes données sont-elles sécurisées ?",
          answer: "Oui, nous appliquons les meilleures pratiques de sécurité : chiffrement SSL/TLS, authentification MFA, hébergement en Europe (conformité RGPD), audits réguliers. Les enregistrements audio restent chez Ringover."
        },
        {
          question: "Les enregistrements sont-ils accessibles ?",
          answer: "Les enregistrements audio bruts sont stockés par Ringover (votre partenaire télécom). Call2Call vous donne accès aux transcriptions textuelles et aux résumés IA via le portail client."
        },
        {
          question: "Où sont hébergées mes données ?",
          answer: "Toutes les données sont hébergées dans des datacenters situés en France et en Europe, garantissant le respect du RGPD et l'absence de transfert hors UE."
        }
      ]
    },
    {
      title: "Support & Assistance",
      items: [
        {
          question: "Comment puis-je contacter le support ?",
          answer: "Vous pouvez créer un ticket via notre formulaire de contact ou nous envoyer un email à support@call2call.fr. Notre équipe répond sous 24h ouvrées (48h le week-end)."
        },
        {
          question: "Quels sont les horaires du support ?",
          answer: "Notre support est disponible du lundi au vendredi de 9h à 18h. Pour les formules Enterprise, un support 24/7 est disponible."
        },
        {
          question: "Proposez-vous une formation ?",
          answer: "Oui, nous proposons des sessions de formation en ligne et une documentation complète pour vous aider à tirer le meilleur parti de Call2Call."
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <SEO title="FAQ - Call2Call" />
      <Header />
      <main>
        <section className="section-y bg-gradient-to-b from-brand-50/30 to-white">
          <div className="container-px">
            <div className="mx-auto max-w-3xl text-center">
              <div className="eyebrow mb-4">FAQ</div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Questions fréquentes
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Trouvez rapidement des réponses à vos questions sur Call2Call
              </p>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-px">
            <div className="mx-auto max-w-4xl">
              <div className="card mb-8 p-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Rechercher dans la FAQ..."
                    className="w-full rounded-xl border border-input bg-white py-3 pl-12 pr-4 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-8">
                {filteredCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="card">
                    <h2 className="mb-6 text-2xl font-bold">{category.title}</h2>
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => {
                        const globalIndex = categoryIndex * 10 + itemIndex;
                        const isOpen = openItems.includes(globalIndex);
                        
                        return (
                          <div key={itemIndex} className="rounded-xl border border-border bg-white">
                            <button
                              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-surface"
                              onClick={() => toggleItem(globalIndex)}
                            >
                              <span className="font-semibold pr-8">{item.question}</span>
                              <ChevronDown 
                                className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`}
                              />
                            </button>
                            {isOpen && (
                              <div className="border-t border-border p-6">
                                <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {filteredCategories.length === 0 && (
                <div className="card text-center py-12">
                  <HelpCircle className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                  <h3 className="mb-2 text-xl font-semibold">Aucun résultat trouvé</h3>
                  <p className="text-muted-foreground">
                    Aucune question ne correspond à votre recherche. Essayez d'autres termes ou contactez notre support.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section-y bg-surface">
          <div className="container-px">
            <div className="mx-auto max-w-4xl text-center">
              <div className="card bg-brand-50 border-brand-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand">
                  <HelpCircle className="h-8 w-8 text-white" />
                </div>
                <h2 className="mb-4 text-2xl font-bold">Vous ne trouvez pas votre réponse ?</h2>
                <p className="mb-6 text-muted-foreground">
                  Notre équipe support est là pour vous aider rapidement
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <a href="/support#contact" className="btn-primary">
                    Contacter le support
                  </a>
                  <a href="mailto:support@call2call.fr" className="btn-outline">
                    support@call2call.fr
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTABanner
          title="Prêt à essayer Call2Call ?"
          description="Découvrez comment notre IA peut transformer votre standard téléphonique."
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

export default FAQ;