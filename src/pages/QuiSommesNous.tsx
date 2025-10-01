import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import { Users, Target, Heart, Award } from "lucide-react";
import { SEO } from '@/components/SEO';

const QuiSommesNous = () => {
  const values = [
    {
      icon: Target,
      title: "Notre mission",
      description: "Révolutionner la relation client grâce à l'intelligence artificielle, en offrant une disponibilité 24/7 et des réponses pertinentes pour chaque entreprise."
    },
    {
      icon: Heart,
      title: "Notre vision",
      description: "Un monde où aucune opportunité commerciale n'est perdue, où chaque appel est traité avec l'attention et l'efficacité qu'il mérite."
    },
    {
      icon: Users,
      title: "Notre équipe",
      description: "Des experts en IA, téléphonie et expérience client réunis pour créer la solution de standard intelligent la plus aboutie du marché."
    },
    {
      icon: Award,
      title: "Nos valeurs",
      description: "Innovation, fiabilité, transparence et engagement client sont au cœur de chaque décision que nous prenons."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Qui sommes-nous - Call2Call" />
      <Header />
      <main>
        <section className="section-y bg-gradient-to-b from-blue-50/30 to-white">
          <div className="container-px">
            <div className="mx-auto max-w-3xl text-center">
              <div className="eyebrow mb-4">Qui sommes-nous</div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Call2Call, l'expert en standard IA
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Nous transformons la manière dont les entreprises gèrent leurs appels téléphoniques grâce à une intelligence artificielle conversationnelle avancée.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-px">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div key={index} className="card text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                    <value.icon className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="mb-3 font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y bg-surface">
          <div className="container-px">
            <div className="mx-auto max-w-4xl">
              <div className="card">
                <h2 className="mb-6 text-2xl font-bold">Notre histoire</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Fondée en 2023, Call2Call est née d'un constat simple : les entreprises perdent quotidiennement des opportunités commerciales à cause de lignes téléphoniques non répondues, de standards saturés ou d'horaires d'ouverture limités.
                  </p>
                  <p>
                    Notre équipe, forte de 10 ans d'expérience dans l'IA conversationnelle et la téléphonie d'entreprise, a développé une solution qui combine la puissance de l'intelligence artificielle avec la fiabilité des infrastructures Ringover.
                  </p>
                  <p>
                    Aujourd'hui, nous accompagnons plus de 500 entreprises dans leur transformation digitale, de l'artisan indépendant à la grande entreprise, toutes unies par une même exigence : offrir à leurs clients une expérience téléphonique exceptionnelle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-px">
            <div className="mx-auto max-w-4xl">
              <div className="card bg-blue-50 border-blue-200">
                <div className="text-center">
                  <h2 className="mb-4 text-2xl font-bold">Notre partenariat Ringover</h2>
                  <p className="text-muted-foreground mb-6">
                    Call2Call s'appuie sur l'expertise et l'infrastructure de Ringover, leader européen de la téléphonie d'entreprise, pour garantir une qualité d'appel et une fiabilité incomparables.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="chip bg-white text-blue-500 border-blue-200">Infrastructure fiable</div>
                    <div className="chip bg-white text-blue-500 border-blue-200">Qualité audio HD</div>
                    <div className="chip bg-white text-blue-500 border-blue-200">Support technique 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTABanner
          title="Prêt à rejoindre l'aventure ?"
          description="Découvrez comment Call2Call peut transformer votre relation client."
          primaryText="Démarrer l'essai gratuit"
          primaryLink="/ecommerce"
          secondaryText="Voir les fonctionnalités"
          secondaryLink="/fonctionnalites"
        />
      </main>
      <Footer />
    </div>
  );
};

export default QuiSommesNous;