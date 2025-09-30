import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-y">
        <div className="container-px">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-8 text-4xl font-bold">Mentions légales</h1>

            <div className="card space-y-8">
              <section>
                <h2 className="mb-4 text-2xl font-semibold">Éditeur du site</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Raison sociale :</strong> Call2Call SAS</p>
                  <p><strong>Siège social :</strong> 123 Avenue de l'Innovation, 75001 Paris, France</p>
                  <p><strong>Capital social :</strong> 50 000 €</p>
                  <p><strong>RCS :</strong> Paris B 123 456 789</p>
                  <p><strong>SIRET :</strong> 123 456 789 00012</p>
                  <p><strong>TVA intracommunautaire :</strong> FR12 123456789</p>
                  <p><strong>Email :</strong> contact@call2call.fr</p>
                  <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Directeur de publication</h2>
                <p className="text-muted-foreground">
                  Le directeur de la publication est M. Jean Dupont, Président de Call2Call SAS.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Hébergement</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Hébergeur :</strong> OVH SAS</p>
                  <p><strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France</p>
                  <p><strong>Téléphone :</strong> 1007</p>
                  <p><strong>Site web :</strong> <a href="https://www.ovh.com" className="text-primary hover:underline">www.ovh.com</a></p>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Partenariat télécom</h2>
                <p className="text-muted-foreground">
                  La téléphonie (numéros, acheminement des appels, enregistrements bruts) est fournie 
                  par Ringover ou un partenaire télécom équivalent. Call2Call n'est pas un opérateur 
                  télécom mais un fournisseur de services d'intelligence conversationnelle et de portail client.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Propriété intellectuelle</h2>
                <p className="text-muted-foreground">
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, etc.) 
                  est la propriété exclusive de Call2Call SAS ou de ses partenaires. Toute reproduction, 
                  distribution, modification, adaptation, retransmission ou publication, même partielle, 
                  de ces différents éléments est strictement interdite sans l'accord exprès par écrit 
                  de Call2Call SAS.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Données personnelles</h2>
                <p className="text-muted-foreground">
                  Call2Call SAS s'engage à respecter la vie privée de ses utilisateurs et à protéger 
                  leurs données personnelles conformément au Règlement Général sur la Protection des 
                  Données (RGPD). Pour plus d'informations, consultez notre{" "}
                  <a href="/legal/confidentialite" className="text-primary hover:underline">
                    politique de confidentialité
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Cookies</h2>
                <p className="text-muted-foreground">
                  Ce site utilise des cookies pour améliorer l'expérience utilisateur et réaliser 
                  des statistiques de visite. En poursuivant votre navigation, vous acceptez 
                  l'utilisation de cookies. Vous pouvez à tout moment modifier vos préférences 
                  dans les paramètres de votre navigateur.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Crédits</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Conception et développement :</strong> Call2Call SAS</p>
                  <p><strong>Illustrations :</strong> Freepik, Unsplash</p>
                  <p><strong>Icônes :</strong> Lucide Icons</p>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Droit applicable</h2>
                <p className="text-muted-foreground">
                  Les présentes mentions légales sont soumises au droit français. En cas de litige, 
                  les tribunaux français seront seuls compétents.
                </p>
              </section>
            </div>

            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>Dernière mise à jour : 30 septembre 2025</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
