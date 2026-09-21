import { config, fields, collection } from '@keystatic/core';

export default config({
  // Bascule automatique : local en dev, cloud en production
  storage: process.env.NODE_ENV === 'development'
    ? { kind: 'local' }
    : { kind: 'cloud' },

  cloud: {
    project: 'offthebeatentracks/offthebeatentracks',
  },

  collections: {
    // 1. ÉVÉNEMENTS & ATELIERS
    events: collection({
      label: 'Événements & Ateliers',
      slugField: 'title',
      path: 'src/content/events/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Titre de l\'événement' } }),
        date: fields.datetime({ label: 'Date et heure de début' }),
        endDate: fields.datetime({
          label: 'Date de fin (Optionnel)',
          validation: { isRequired: false }
        }),
        category: fields.text({ label: 'Catégorie (Ex: Concert, Atelier, Danse)' }),
        isRecurring: fields.checkbox({ label: 'Atelier permanent / récurrent', defaultValue: false }),
        frequency: fields.text({
          label: 'Fréquence (Ex: Tous les mardis)',
          validation: { isRequired: false }
        }),
        description: fields.text({ label: 'Résumé court', multiline: true }),

        image: fields.image({
          label: 'Image de l\'événement',
          directory: 'src/content/events',
          publicPath: './',
          validation: { isRequired: false },
        }),

        location: fields.text({ label: 'Lieu', defaultValue: 'OBT Café - 236 Cours Lafayette, Lyon 3e' }),
        organizer: fields.text({ label: 'Organisateur', defaultValue: 'Off The Beaten Tracks' }),
        guest: fields.text({
          label: 'Invité d\'honneur (Optionnel)',
          validation: { isRequired: false }
        }),
        price: fields.text({ label: 'Prix', defaultValue: 'Participation libre' }),
        registrationLink: fields.text({
          label: 'Lien d\'inscription (Optionnel)',
          validation: { isRequired: false }
        }),
        featured: fields.checkbox({ label: 'Mettre en avant sur l\'accueil', defaultValue: false }),

        content: fields.document({
          label: 'Description complète',
          formatting: true,
          dividers: true,
          links: true,
        }),
      },
    }),

    // 2. ARTICLES DE BLOG
    blog: collection({
      label: 'Articles de blog',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Titre de l\'article' } }),
        publishDate: fields.date({ label: 'Date de publication' }),
        author: fields.text({ label: 'Auteur', defaultValue: 'L\'équipe OBT' }),
        description: fields.text({ label: 'Description courte', multiline: true }),
        category: fields.text({ label: 'Catégorie' }),

        image: fields.image({
          label: 'Image de couverture',
          directory: 'src/content/blog',
          publicPath: './',
          validation: { isRequired: false },
        }),

        draft: fields.checkbox({ label: 'Brouillon (Masquer en production)', defaultValue: false }),

        content: fields.document({
          label: 'Contenu de l\'article',
          formatting: true,
          dividers: true,
          links: true,
        }),
      },
    }),
  },
});