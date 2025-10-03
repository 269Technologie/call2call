# Documentation du Projet Call2Call

## Vue d'ensemble du projet

Call2Call est une application web moderne de standard téléphonique intelligent basé sur l'IA. Le projet propose une solution SaaS permettant aux entreprises de gérer leurs appels entrants via un assistant vocal IA disponible 24/7.

### Technologies utilisées

- **Framework** : React 18 avec TypeScript
- **Styling** : Tailwind CSS
- **Build Tool** : Vite
- **SEO** : React Helmet Async
- **Icons** : Lucide React

---

## Installation et démarrage

### Prérequis

- Node.js (version 16 ou supérieure recommandée)
- npm ou yarn

### Installation des dépendances

```bash
npm install
```

### Lancement en mode développement

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173` (port par défaut de Vite).

### Build de production

```bash
npm run build
```

### Prévisualisation du build

```bash
npm run preview
```

---

## Structure du projet

Le projet suit une architecture React standard avec les pages principales suivantes :

### Pages principales

| Route | Fichier | Description |
|-------|---------|-------------|
| `/` | `Home.tsx` | Page d'accueil avec présentation du service |
| `/fonctionnalites` | `Fonctionnalites.tsx` | Détails des fonctionnalités de l'IA |
| `/pricing` | `Pricing.tsx` | Grille tarifaire avec 5 formules |
| `/comment-ca-marche` | `CommentCaMarche.tsx` | Processus en 5 étapes |
| `/support` | `Support.tsx` | Centre d'aide avec FAQ et formulaire |
| `/portail` | `Portail.tsx` | Démonstration du dashboard client |
| `/ecommerce` | `Ecommerce.tsx` | Tunnel de souscription en 4 étapes |

### Pages secondaires

| Route | Fichier | Description |
|-------|---------|-------------|
| `/blog` | `Blog.tsx` | Articles et actualités |
| `/faq` | `FAQ.tsx` | Questions fréquentes détaillées |
| `/langues` | `Langues.tsx` | Support multilingue |
| `/qui-sommes-nous` | `QuiSommesNous.tsx` | Présentation de l'entreprise |
| `/securite-rgpd` | `SecuriteRGPD.tsx` | Sécurité et conformité |
| `/legal/mentions` | `MentionsLegales.tsx` | Mentions légales |
| `/legal/confidentialite` | `Confidentialite.tsx` | Politique de confidentialité |
| `*` | `NotFound.tsx` | Page 404 personnalisée |

---

## Composants principaux

### Composants de layout
- **Header** - Navigation principale avec menu responsive
- **Footer** - Pied de page avec liens et informations légales

### Composants fonctionnels
- **Hero** - Section d'en-tête avec call-to-action
- **FeatureCard** - Cartes de fonctionnalités réutilisables
- **CTABanner** - Bannières d'appel à l'action
- **Steps** - Affichage de processus étape par étape
- **FAQ** - Composant accordion pour questions/réponses

### Composants utilitaires
- **SEO** - Gestion des métadonnées pour le référencement
- **ScrollToTop** - Scroll automatique en haut lors du changement de page
- **BackToTop** - Bouton retour en haut de page

---

## État d'avancement

###  Terminé selon les spécifications Trello

Le frontend est **quasi-terminé** avec toutes les pages principales et secondaires implémentées. Les éléments suivants sont fonctionnels :

-  Architecture complète des pages
-  Routing et navigation
-  Design responsive avec Tailwind CSS
-  Composants réutilisables
-  Système de SEO avec métadonnées dynamiques
-  Animations et transitions
-  Formulaires (non connectés au backend)
-  Tunnel de souscription (interface uniquement)

###  Points à noter

1. **Pas de backend** : Les formulaires et le tunnel de souscription sont uniquement des interfaces. Aucune donnée n'est envoyée ou sauvegardée.

2. **Images placeholder** : Les chemins d'images pointent vers des fichiers non fournis (`/blog/*.jpg`). Ces images affichent actuellement des icônes de remplacement.

3. **Données statiques** : Tous les contenus (articles de blog, appels dans le portail, etc.) sont des données mockées en dur dans les composants.

4. **Liens externes** : Les liens vers les partenaires (Ringover) et services tiers ne sont pas configurés.

---

## Détails techniques

### Formules tarifaires

Le projet propose 5 formules d'abonnement :

| Formule | Prix/mois | Appels simultanés | Langues |
|---------|-----------|-------------------|---------|
| Starter | 49€ HT | 1 | 1 |
| Basic | 99€ HT | 2 | 1 |
| Standard | 199€ HT | 5 | 2 |
| Pro | 399€ HT | 10 | 3 |
| Enterprise | 890€ HT | 30 | 5 |

### Tunnel de souscription (4 étapes)

1. **Formule** - Sélection du plan
2. **Numéro** - Configuration téléphonique
3. **Compte** - Création du compte utilisateur
4. **Paiement** - Informations de facturation

### Langues supportées

- Français (Natif)
- Anglais (Avancé)
- Espagnol (Avancé)
- Allemand (Intermédiaire)
- Italien (Intermédiaire)
- Portugais (Intermédiaire)
- Néerlandais (Basique)

---

## Configuration additionnelle

### Alias de chemins

Le projet utilise des alias configurés dans `tsconfig.json` :
```
@/ → src/
```

Exemple d'utilisation :
```typescript
import { Header } from "@/components/Header";
```

---

## Prochaines étapes recommandées

### Phase 1 - Backend et données
1. **Intégration backend** : Connecter les formulaires à une API REST
2. **Base de données** : Stocker les articles, FAQ, et données utilisateurs
3. **Système d'authentification** : Implémenter JWT ou OAuth
4. **API endpoints** : Créer les routes pour souscription, support, etc.

### Phase 2 - Contenu
5. **Images réelles** : Remplacer les placeholders par de vraies images optimisées
6. **Contenu dynamique** : Charger les articles de blog depuis la base de données
7. **CMS** : Intégrer un système de gestion de contenu

### Phase 3 - Optimisation
8. **Tests** : Ajouter des tests unitaires (Jest/Vitest) et E2E (Playwright/Cypress)
9. **Performance** : Lazy loading des images, code splitting
10. **Analytics** : Intégrer Google Analytics ou Plausible
11. **SEO avancé** : Sitemap, robots.txt, structured data

### Phase 4 - Fonctionnalités avancées
12. **Portail client réel** : Dashboard avec données temps réel
13. **Paiement** : Intégration Stripe
14. **Notifications** : Emails transactionnels
15. **Internationalisation** : i18n pour support multilingue complet

---

## Notes de développement

- Le projet respecte les bonnes pratiques React et TypeScript
- Le code est organisé de manière modulaire et réutilisable
- Les composants sont typés avec TypeScript pour une meilleure maintenabilité
- Le design suit une charte graphique cohérente avec des couleurs primaires bleues
- Toutes les pages sont responsive (mobile, tablet, desktop)

---

## Support et contact

Pour toute question technique concernant le projet, consultez :
- Le code source dans `/src`
- Les composants réutilisables dans `/src/components`
- Les pages dans `/src/pages`

---

**Dernière mise à jour** : Octobre 2025  
**Version** : 1.0.0 (Frontend)