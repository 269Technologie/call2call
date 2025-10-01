import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import { Calendar, User, ArrowRight, MessageCircle } from "lucide-react";
import { SEO } from '@/components/SEO';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Comment l'IA révolutionne la relation client téléphonique",
      excerpt: "Découvrez comment les assistants vocaux IA transforment l'expérience client et boostent la productivité des entreprises.",
      author: "Marie Lambert",
      date: "15 mars 2024",
      category: "IA & Innovation",
      readTime: "5 min",
      image: "/blog/ia-relation-client.jpg"
    },
    {
      id: 2,
      title: "Standard téléphonique : 5 erreurs à éviter en 2024",
      excerpt: "Les pièges courants dans la gestion des appels entrants et comment les éviter avec une solution moderne.",
      author: "Thomas Dubois",
      date: "8 mars 2024",
      category: "Conseils",
      readTime: "4 min",
      image: "/blog/erreurs-standard.jpg"
    },
    {
      id: 3,
      title: "Call2Call x Ringover : un partenariat gagnant",
      excerpt: "Pourquoi avoir choisi Ringover comme partenaire téléphonie et comment cette alliance bénéficie à nos clients.",
      author: "Sarah Chen",
      date: "1 mars 2024",
      category: "Actualités",
      readTime: "6 min",
      image: "/blog/partenariat-ringover.jpg"
    },
    {
      id: 4,
      title: "RGPD et enregistrements d'appels : ce qu'il faut savoir",
      excerpt: "Tout sur la conformité des solutions de téléphonie IA et la protection des données personnelles.",
      author: "Pierre Martin",
      date: "22 février 2024",
      category: "Sécurité",
      readTime: "7 min",
      image: "/blog/rgpd-appels.jpg"
    },
    {
      id: 5,
      title: "Témoignage client : comment Call2Call a boosté notre CA",
      excerpt: "Retour d'expérience d'une PME qui a augmenté son taux de conversion de 35% avec notre solution.",
      author: "Lucie Moreau",
      date: "15 février 2024",
      category: "Cas client",
      readTime: "8 min",
      image: "/blog/temoignage-client.jpg"
    },
    {
      id: 6,
      title: "Multi-langues : servir vos clients internationaux 24/7",
      excerpt: "Comment notre solution multi-langues vous permet d'étendre votre marché à l'international sans contrainte.",
      author: "David Leroy",
      date: "8 février 2024",
      category: "Fonctionnalités",
      readTime: "5 min",
      image: "/blog/multi-langues.jpg"
    }
  ];

  const categories = [
    "Tous les articles",
    "IA & Innovation",
    "Conseils",
    "Actualités",
    "Sécurité",
    "Cas client",
    "Fonctionnalités"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Blog & Actualités - Call2Call" />
      <Header />
      <main>
        <section className="section-y bg-gradient-to-b from-blue-50/30 to-white">
          <div className="container-px">
            <div className="mx-auto max-w-3xl text-center">
              <div className="eyebrow mb-4">Blog & Actualités</div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Insights et actualités Call2Call
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Découvrez nos articles sur l'IA conversationnelle, la relation client et les tendances de la téléphonie d'entreprise.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-px">
            <div className="mb-8 flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`chip ${
                    index === 0 
                      ? "bg-blue-500 text-white border-blue-500" 
                      : "bg-white text-muted-foreground border-border hover:border-blue-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <article key={article.id} className="card hover-lift group">
                  <div className="mb-4 aspect-video w-full overflow-hidden rounded-xl bg-blue-50">
                    <div className="flex h-full items-center justify-center">
                      <MessageCircle className="h-12 w-12 text-blue-200" />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <span className="chip bg-blue-50 text-blue-500 border-blue-200 text-xs">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="mb-3 font-semibold group-hover:text-blue-500 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="mb-4 text-sm text-muted-foreground">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <span>{article.readTime}</span>
                  </div>

                  <button className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-600">
                    Lire l'article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="btn-outline">
                Charger plus d'articles
              </button>
            </div>
          </div>
        </section>

        <section className="section-y bg-surface">
          <div className="container-px">
            <div className="card bg-blue-50 border-blue-200 max-w-4xl mx-auto">
              <div className="text-center">
                <h2 className="mb-4 text-2xl font-bold">Restez informé</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Recevez nos derniers articles et actualités directement dans votre boîte email.
                </p>
                <div className="flex max-w-md mx-auto gap-4">
                  <input
                    type="email"
                    placeholder="Votre email professionnel"
                    className="flex-1 rounded-xl border border-blue-200 bg-white px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                  <button className="btn-primary whitespace-nowrap">
                    S'abonner
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTABanner
          title="Prêt à transformer votre standard téléphonique ?"
          description="Rejoignez les centaines d'entreprises qui font confiance à Call2Call."
          primaryText="Démarrer l'essai gratuit"
          primaryLink="/ecommerce"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;