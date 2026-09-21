import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ==========================================
// 1. COLLECTION : ÉVÉNEMENTS & ATELIERS
// ==========================================
const eventsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,mdoc}', base: './src/content/events' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),               // Date et heure de début
    endDate: z.coerce.date().optional(),   // Date de fin optionnelle
    category: z.string(),                // Ex: Concert, Atelier, Danse
    
    // Distinguo Récurrent vs Ponctuel
    isRecurring: z.boolean().default(false), 
    frequency: z.string().optional(),     
    
    description: z.string(),             
    
    // Astro gère nativement le chemin relatif `./` généré par Keystatic
    image: image().optional(),
    
    // Détails & Pratique
    location: z.string().default("OBT Café - 236 Cours Lafayette, Lyon 3e"),
    organizer: z.string().default("Off The Beaten Tracks"), 
    guest: z.string().optional(),          
    price: z.string().default("Participation libre"), 
    registrationLink: z.string().optional(), 
    
    featured: z.boolean().default(false),  
  }),
});

// ==========================================
// 2. COLLECTION : BLOG & ARTICLES
// ==========================================
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,mdoc}', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default("L'équipe OBT"),
    description: z.string(),
    
    // Rendu optionnel et géré par le helper image() d'Astro
    image: image().optional(),
    
    category: z.string(),
    draft: z.boolean().default(false),  
  }),
});

// Export des collections enregistrées
export const collections = {
  events: eventsCollection,
  blog: blogCollection,
};