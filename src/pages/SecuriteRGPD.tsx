import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import {
  Shield,
  Lock,
  Database,
  Users,
  FileCheck,
  AlertCircle,
  CheckCircle2,
  Key,
} from "lucide-react";
import { SEO } from '@/components/SEO';

const SecuriteRGPD = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Sécurité & RGPD - Call2Call" />
      <Header />
      <main>
        <section className="section-y bg-gradient-to-b from-brand-50/30 to-white">
          <div className="container-px">
            <div className="mx-auto max-w-3xl text-center">
              <div className="eyebrow mb-4">Sécurité & Conformité</div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Vos données en sécurité, conformité RGPD garantie
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                La sécurité de vos communications et la protection des données 
                sont au cœur de notre architecture.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-px">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Une sécurité multi-niveaux
              </h2>
              <p className="text-muted-foreground">
                Nous appliquons les meilleures pratiques de sécurité de l'industrie
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="card text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50">
                  <Lock className="h-8 w-8 text-brand" />
                </div>
                <h3 className="mb-2 font-semibold">Chiffrement SSL/TLS</h3>
                <p className="text-sm text-muted-foreground">
                  Toutes les communications sont chiffrées de bout en bout
                </p>
              </div>

              <div className="card text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50">
                  <Key className="h-8 w-8 text-brand" />
                </div>
                <h3 className="mb-2 font-semibold">Authentification MFA</h3>
                <p className="text-sm text-muted-foreground">
                  Double authentification recommandée pour tous les comptes
                </p>
              </div>

              <div className="card text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50">
                  <Database className="h-8 w-8 text-brand" />
                </div>
                <h3 className="mb-2 font-semibold">Hébergement sécurisé</h3>
                <p className="text-sm text-muted-foreground">
                  Datacenters certifiés ISO 27001 en Europe
                </p>
              </div>

              <div className="card text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50">
                  <Shield className="h-8 w-8 text-brand" />
                </div>
                <h3 className="mb-2 font-semibold">Audits réguliers</h3>
                <p className="text-sm text-muted-foreground">
                  Tests d'intrusion et audits de sécurité trimestriels
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-y bg-surface">
          <div className="container-px">
            <div className="mx-auto max-w-4xl">
              <div className="card-glass p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand">
                    <FileCheck className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Conformité RGPD</h2>
                    <p className="text-muted-foreground">
                      Respecter le Règlement Général sur la Protection des Données
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3 flex items-center gap-2 font-semibold">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Stockage des données
                    </h3>
                    <p className="ml-7 text-sm text-muted-foreground">
                      Les <strong>enregistrements audio bruts</strong> restent chez 
                      Ringover ou votre partenaire télécom. Call2Call stocke uniquement 
                      les <strong>métadonnées, transcriptions et résumés</strong> 
                      nécessaires au fonctionnement du service.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 flex items-center gap-2 font-semibold">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Hébergement européen
                    </h3>
                    <p className="ml-7 text-sm text-muted-foreground">
                      Toutes les données sont hébergées dans des datacenters situés 
                      en France et en Europe, garantissant le respect du RGPD et 
                      l'absence de transfert hors UE.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 flex items-center gap-2 font-semibold">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Droit des personnes
                    </h3>
                    <p className="ml-7 text-sm text-muted-foreground">
                      Respect des droits d'accès, de rectification, de suppression 
                      et de portabilité. Les clients peuvent exercer leurs droits 
                      directement depuis le portail ou par email.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 flex items-center gap-2 font-semibold">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Durée de conservation
                    </h3>
                    <p className="ml-7 text-sm text-muted-foreground">
                      Les données sont conservées selon les durées légales : 
                      3 ans pour les transcriptions, 1 an pour les statistiques 
                      agrégées. Suppression automatique à l'échéance.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 flex items-center gap-2 font-semibold">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Sous-traitants
                    </h3>
                    <p className="ml-7 text-sm text-muted-foreground">
                      Nous travaillons uniquement avec des sous-traitants conformes 
                      RGPD (hébergeurs, services cloud) ayant signé des DPA 
                      (Data Processing Agreements).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-px">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8">
                <h2 className="mb-4 text-3xl font-bold">
                  Gestion des accès et rôles
                </h2>
                <p className="text-muted-foreground">
                  Contrôlez précisément qui peut accéder à quoi dans votre organisation
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="card">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 font-semibold">Administrateur</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Accès complet : configuration, journaux, facturation, utilisateurs
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      Tout configurer
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      Voir tous les appels
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      Gérer l'équipe
                    </li>
                  </ul>
                </div>

                <div className="card">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-100">
                    <Users className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="mb-2 font-semibold">Utilisateur</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Consultation et gestion courante des appels et rendez-vous
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      Voir les appels
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      Gérer les RDV
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                      Config. limitée
                    </li>
                  </ul>
                </div>

                <div className="card">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-surface-2">
                    <Users className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="mb-2 font-semibold">Lecteur</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Consultation uniquement, sans modification
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      Voir les appels
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      Consulter les stats
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                      Aucune modification
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-y bg-surface">
          <div className="container-px">
            <div className="mx-auto max-w-4xl">
              <div className="card">
                <h2 className="mb-6 text-2xl font-bold">
                  Bonnes pratiques recommandées
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      icon: Key,
                      title: "Activez l'authentification à deux facteurs (MFA)",
                      description: "Ajoutez une couche de sécurité supplémentaire à votre compte",
                    },
                    {
                      icon: Lock,
                      title: "Utilisez des mots de passe forts et uniques",
                      description: "Minimum 12 caractères avec majuscules, chiffres et symboles",
                    },
                    {
                      icon: Users,
                      title: "Accordez uniquement les droits nécessaires",
                      description: "Principe du moindre privilège pour chaque utilisateur",
                    },
                    {
                      icon: AlertCircle,
                      title: "Vérifiez régulièrement les accès actifs",
                      description: "Révoquez les comptes inactifs ou les anciens collaborateurs",
                    },
                  ].map((practice, index) => {
                    const Icon = practice.icon;
                    return (
                      <div
                        key={index}
                        className="flex gap-4 rounded-xl border border-border bg-white p-4"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50">
                          <Icon className="h-5 w-5 text-brand" />
                        </div>
                        <div>
                          <h3 className="mb-1 font-semibold">{practice.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {practice.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTABanner
          title="Des questions sur la sécurité ?"
          description="Notre équipe est là pour répondre à toutes vos interrogations sur la protection des données."
          primaryText="Contacter le support"
          primaryLink="/support"
        />
      </main>
      <Footer />
    </div>
  );
};

export default SecuriteRGPD;