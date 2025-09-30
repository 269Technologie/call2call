import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Confidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-y">
        <div className="container-px">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-8 text-4xl font-bold">Politique de confidentialité</h1>

            <div className="card space-y-8">
              <section>
                <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
                <p className="text-muted-foreground">
                  Call2Call SAS (ci-après "nous", "notre", "Call2Call") s'engage à protéger et 
                  respecter votre vie privée. Cette politique de confidentialité explique comment 
                  nous collectons, utilisons, partageons et protégeons vos données personnelles 
                  conformément au Règlement Général sur la Protection des Données (RGPD).
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Responsable du traitement</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Raison sociale :</strong> Call2Call SAS</p>
                  <p><strong>Adresse :</strong> 123 Avenue de l'Innovation, 75001 Paris, France</p>
                  <p><strong>Email :</strong> privacy@call2call.fr</p>
                  <p><strong>DPO (Délégué à la Protection des Données) :</strong> dpo@call2call.fr</p>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Données collectées</h2>
                <p className="mb-4 text-muted-foreground">
                  Nous collectons et traitons les catégories de données personnelles suivantes :
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 font-semibold">Données d'identification</h3>
                    <p className="text-sm text-muted-foreground">
                      Nom, prénom, email, numéro de téléphone, entreprise
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Données de connexion</h3>
                    <p className="text-sm text-muted-foreground">
                      Adresse IP, logs de connexion, données de navigation
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Données d'utilisation</h3>
                    <p className="text-sm text-muted-foreground">
                      Métadonnées d'appels (date, heure, durée, numéro appelant), transcriptions, 
                      résumés IA, statistiques d'utilisation
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Données de facturation</h3>
                    <p className="text-sm text-muted-foreground">
                      Informations de paiement (traitées par notre prestataire Stripe), 
                      historique de facturation
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">
                  Important : enregistrements audio
                </h2>
                <div className="rounded-xl bg-brand-50 p-6">
                  <p className="text-sm text-brand">
                    <strong>Call2Call ne stocke PAS les enregistrements audio bruts.</strong> 
                    Ces enregistrements restent chez Ringover ou votre partenaire télécom. 
                    Call2Call stocke uniquement les métadonnées, transcriptions textuelles 
                    et résumés générés par l'IA.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Finalités du traitement</h2>
                <p className="mb-4 text-muted-foreground">
                  Vos données personnelles sont collectées et traitées pour les finalités suivantes :
                </p>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Fournir et gérer le service Call2Call (IA conversationnelle, portail client)</li>
                  <li>Traiter et répondre aux appels téléphoniques via l'IA</li>
                  <li>Gérer les rendez-vous et synchronisations calendrier</li>
                  <li>Générer des transcriptions et résumés d'appels</li>
                  <li>Améliorer la qualité du service et des réponses IA</li>
                  <li>Assurer la facturation et la gestion des abonnements</li>
                  <li>Répondre à vos demandes de support</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Base légale</h2>
                <p className="text-muted-foreground">
                  Le traitement de vos données repose sur les bases légales suivantes :
                </p>
                <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
                  <li><strong>Exécution du contrat :</strong> fourniture du service Call2Call</li>
                  <li><strong>Intérêt légitime :</strong> amélioration du service, sécurité</li>
                  <li><strong>Consentement :</strong> cookies non essentiels, marketing</li>
                  <li><strong>Obligation légale :</strong> comptabilité, conservation légale</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Durée de conservation</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Transcriptions et métadonnées d'appels :</strong> 3 ans</p>
                  <p><strong>Données de compte utilisateur :</strong> Durée du contrat + 3 ans</p>
                  <p><strong>Statistiques agrégées :</strong> 1 an</p>
                  <p><strong>Données de facturation :</strong> 10 ans (obligation légale)</p>
                  <p><strong>Logs de connexion :</strong> 1 an</p>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  À l'issue de ces délais, vos données sont supprimées de manière sécurisée.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Partage des données</h2>
                <p className="mb-4 text-muted-foreground">
                  Vos données peuvent être partagées avec :
                </p>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li><strong>Ringover ou partenaire télécom :</strong> pour la téléphonie et l'enregistrement</li>
                  <li><strong>Stripe :</strong> pour le traitement des paiements</li>
                  <li><strong>Hébergeur (OVH) :</strong> pour l'hébergement sécurisé</li>
                  <li><strong>Prestataires cloud (AWS, Google) :</strong> pour l'infrastructure</li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  Tous nos sous-traitants sont conformes RGPD et ont signé des DPA 
                  (Data Processing Agreements). Aucune donnée n'est transférée hors de l'UE.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Vos droits</h2>
                <p className="mb-4 text-muted-foreground">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                  <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
                  <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                  <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement pour des raisons légitimes</li>
                  <li><strong>Droit de retirer votre consentement :</strong> à tout moment</li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  Pour exercer ces droits, contactez-nous à{" "}
                  <a href="mailto:privacy@call2call.fr" className="text-primary hover:underline">
                    privacy@call2call.fr
                  </a>{" "}
                  ou depuis le portail client. Nous vous répondrons sous 1 mois.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Sécurité</h2>
                <p className="text-muted-foreground">
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées 
                  pour protéger vos données contre tout accès non autorisé, perte, destruction ou 
                  divulgation : chiffrement SSL/TLS, authentification MFA, pare-feu, audits réguliers, 
                  formation du personnel, etc.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Cookies</h2>
                <p className="mb-4 text-muted-foreground">
                  Notre site utilise des cookies pour :
                </p>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li><strong>Cookies essentiels :</strong> fonctionnement du site (connexion, session)</li>
                  <li><strong>Cookies de performance :</strong> statistiques anonymes (Google Analytics)</li>
                  <li><strong>Cookies marketing :</strong> publicité ciblée (avec votre consentement)</li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  Vous pouvez gérer vos préférences de cookies à tout moment dans les paramètres 
                  de votre navigateur.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Réclamation</h2>
                <p className="text-muted-foreground">
                  Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire 
                  une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et 
                  des Libertés) :{" "}
                  <a href="https://www.cnil.fr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    www.cnil.fr
                  </a>
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Modifications</h2>
                <p className="text-muted-foreground">
                  Nous nous réservons le droit de modifier cette politique de confidentialité à 
                  tout moment. Toute modification sera publiée sur cette page avec une nouvelle 
                  date de mise à jour. Nous vous encourageons à consulter régulièrement cette page.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold">Contact</h2>
                <p className="text-muted-foreground">
                  Pour toute question relative à cette politique ou à la protection de vos données, 
                  contactez notre DPO à{" "}
                  <a href="mailto:dpo@call2call.fr" className="text-primary hover:underline">
                    dpo@call2call.fr
                  </a>
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

export default Confidentialite;
