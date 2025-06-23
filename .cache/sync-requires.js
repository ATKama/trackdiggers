
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/LorenzoCuadrado/Desktop/TRACKDIGGERS/export TD/src/pages/404.js")),
  "component---src-pages-cartes-js": preferDefault(require("/Users/LorenzoCuadrado/Desktop/TRACKDIGGERS/export TD/src/pages/cartes.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/LorenzoCuadrado/Desktop/TRACKDIGGERS/export TD/src/pages/index.js")),
  "component---src-pages-informations-legales-js": preferDefault(require("/Users/LorenzoCuadrado/Desktop/TRACKDIGGERS/export TD/src/pages/informations-legales.js")),
  "component---src-pages-landing-js": preferDefault(require("/Users/LorenzoCuadrado/Desktop/TRACKDIGGERS/export TD/src/pages/landing.js")),
  "component---src-pages-votes-js": preferDefault(require("/Users/LorenzoCuadrado/Desktop/TRACKDIGGERS/export TD/src/pages/votes.js"))
}

