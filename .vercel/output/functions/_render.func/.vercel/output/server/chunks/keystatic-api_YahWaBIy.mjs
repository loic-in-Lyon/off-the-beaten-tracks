import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { r as setOnSetGetEnv, t as getEnv$1 } from "./runtime_x1Na2qzi.mjs";
import { makeGenericAPIRouteHandler } from "@keystatic/core/api/generic";
import { collection, config, fields } from "@keystatic/core";
//#region \0astro:env/server
/** @returns {string} */
var getEnv = (key) => {
	return getEnv$1(key);
};
var getSecret = (key) => {
	return getEnv(key);
};
setOnSetGetEnv(() => {});
//#endregion
//#region node_modules/@keystatic/astro/dist/keystatic-astro-api.js
function makeHandler(_config) {
	return async function keystaticAPIRoute(context) {
		var _config$clientId, _config$clientSecret, _config$secret;
		const { body, headers, status } = await makeGenericAPIRouteHandler({
			..._config,
			clientId: (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : getSecret("KEYSTATIC_GITHUB_CLIENT_ID"),
			clientSecret: (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : getSecret("KEYSTATIC_GITHUB_CLIENT_SECRET"),
			secret: (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : getSecret("KEYSTATIC_SECRET")
		}, { slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG" })(context.request);
		return new Response(body, {
			status,
			headers
		});
	};
}
//#endregion
//#region keystatic.config.ts
var keystatic_config_default = config({
	storage: process.env.NODE_ENV === "development" ? { kind: "local" } : { kind: "cloud" },
	cloud: { project: "offthebeatentracks/offthebeatentracks" },
	collections: {
		events: collection({
			label: "Événements & Ateliers",
			slugField: "title",
			path: "src/content/events/*",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Titre de l'événement" } }),
				date: fields.datetime({ label: "Date et heure de début" }),
				endDate: fields.datetime({
					label: "Date de fin (Optionnel)",
					validation: { isRequired: false }
				}),
				category: fields.text({ label: "Catégorie (Ex: Concert, Atelier, Danse)" }),
				isRecurring: fields.checkbox({
					label: "Atelier permanent / récurrent",
					defaultValue: false
				}),
				frequency: fields.text({
					label: "Fréquence (Ex: Tous les mardis)",
					validation: { isRequired: false }
				}),
				description: fields.text({
					label: "Résumé court",
					multiline: true
				}),
				image: fields.image({
					label: "Image de l'événement",
					directory: "src/content/events",
					publicPath: "./",
					validation: { isRequired: false }
				}),
				location: fields.text({
					label: "Lieu",
					defaultValue: "OBT Café - 236 Cours Lafayette, Lyon 3e"
				}),
				organizer: fields.text({
					label: "Organisateur",
					defaultValue: "Off The Beaten Tracks"
				}),
				guest: fields.text({
					label: "Invité d'honneur (Optionnel)",
					validation: { isRequired: false }
				}),
				price: fields.text({
					label: "Prix",
					defaultValue: "Participation libre"
				}),
				registrationLink: fields.text({
					label: "Lien d'inscription (Optionnel)",
					validation: { isRequired: false }
				}),
				featured: fields.checkbox({
					label: "Mettre en avant sur l'accueil",
					defaultValue: false
				}),
				content: fields.document({
					label: "Description complète",
					formatting: true,
					dividers: true,
					links: true
				})
			}
		}),
		blog: collection({
			label: "Articles de blog",
			slugField: "title",
			path: "src/content/blog/*",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Titre de l'article" } }),
				publishDate: fields.date({ label: "Date de publication" }),
				author: fields.text({
					label: "Auteur",
					defaultValue: "L'équipe OBT"
				}),
				description: fields.text({
					label: "Description courte",
					multiline: true
				}),
				category: fields.text({ label: "Catégorie" }),
				image: fields.image({
					label: "Image de couverture",
					directory: "src/content/blog",
					publicPath: "./",
					validation: { isRequired: false }
				}),
				draft: fields.checkbox({
					label: "Brouillon (Masquer en production)",
					defaultValue: false
				}),
				content: fields.document({
					label: "Contenu de l'article",
					formatting: true,
					dividers: true,
					links: true
				})
			}
		})
	}
});
//#endregion
//#region node_modules/@keystatic/astro/internal/keystatic-api.js
var keystatic_api_exports = /* @__PURE__ */ __exportAll({
	ALL: () => ALL,
	all: () => all,
	prerender: () => false
});
var all = makeHandler({ config: keystatic_config_default });
var ALL = all;
//#endregion
//#region \0virtual:astro:page:node_modules/@keystatic/astro/internal/keystatic-api@_@js
var page = () => keystatic_api_exports;
//#endregion
export { page };
