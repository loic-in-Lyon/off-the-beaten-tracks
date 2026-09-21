import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ==========================================
// 1. COLLECTION : ÉVÉNEMENTS & ATELIERS
// ==========================================
const eventsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/events' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),               // Date et heure de début
    endDate: z.coerce.date().optional(),   // Date de fin optionnelle
    category: z.string(),                // Ex: Concert, Atelier, Danse, Conférence, Langues
    
    // Distinguo Récurrent / Permanent vs Ponctuel
    isRecurring: z.boolean().default(false), // true = Atelier permanent / récurrent, false = Événement unique
    frequency: z.string().optional(),     // Ex: "Tous les mardis à 19h", "Chaque 1er samedi du mois"
    
    description: z.string(),             // Résumé court pour la carte (SEO & aperçu)
    image: image(),                      // Illustration principale
    
    // Détails & Pratique
    location: z.string().default("OBT Café - 236 Cours Lafayette, Lyon 3e"),
    organizer: z.string().default("Off The Beaten Tracks"), // Organisateur / Asso partenaire
    guest: z.string().optional(),          // Invité d'honneur, artiste ou intervenant (ex: "Alpha Petulay")
    price: z.string().default("Participation libre"), // Ex: "Gratuit", "5€", "Sur adhésion"
    registrationLink: z.string().optional(), // Lien externe éventuel (billetterie, HelloAsso, formulaire)
    
    featured: z.boolean().default(false),  // Mettre en avant sur la page d'accueil
  }),
});

// ==========================================
// 2. COLLECTION : BLOG & ARTICLES
// ==========================================
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default("L'équipe OBT"),
    description: z.string(),
    image: image().optional(),
    category: z.string(),
    draft: z.boolean().default(false),  // Masquer les brouillons en production
  }),
});

// Export des collections enregistrées
export const collections = {
  events: eventsCollection,
  blog: blogCollection,
};