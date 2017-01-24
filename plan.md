Plan
====

Introduction
  Historique
	2005: jQuery (Efface les différences entre navigateurs. Manipulation du DOM simplifiée)
	2010: Angular (Simplifie grandement le dev d'application type SPA)
	2013: React (Orienté composant)
    2016: Angular 2
  Positionnement / vs autres framwork
    "Librairie pour construire des interfaces utilisateurs"
	Fait bien moins de chose qu'Angular ou Ember (pas de routing, pas de client http, repose plus sur les fonctionnalités du langage js)
	Alternatives:
	  Vue.js: https://vuejs.org/
	  Riot: http://riotjs.com/
	  ELM: http://elm-lang.org/
  Le projet React:
    Environ 1 nouvelle version majeur tous les 10 mois
	Des releases mineurs tous les 2 mois
	Les changements non rétro-compatible sont rares
	Utilisé en prod chez facebook
	Presque 60k étoiles sur github

--------------------------------------------------------------------------------

Outillage, Setup
	éditeur:
	  Code
	  Atom.io
	  Sublimetext
	chrome + devtools
	nvm/node/npm
	  nvm pour gérer simplement plusieurs versions de node
	  node: l'outillage web est presque toujours écrit en JavaScript et requiere node pour être éxecuté
	  npm pour charger les dépendances d'un projet et pour jouer les "npm scripts"
	un shell pour lancer les commandes npm
	build:
	  webpack
	  browserify
	create-react-app
	  pour initialiser un projet react avec un build pret à l'emploi
	  pousse les bonnes pratiques React
	  eject


Exercice :
1) Installer node 6 avec nvm
2) Installer create-react-app
1) Initier un nouveau projet avec create-react-app
2) Faire en sorte que l'appli affiche "Hello world"

--------------------------------------------------------------------------------

Ecrire du html avec jsx
https://facebook.github.io/react/docs/introducing-jsx.html
https://facebook.github.io/react/docs/jsx-in-depth.html
  Expression: {...}
    {ma_variable}
	{ 1 + 2 + 3 }
  attributs: <div key={i}>
  condition: {}
  boucles: {uneList.map((elm, i) => ...)}
  Les blocs JSX sont des expressions

Exercice :
1) Recréer un bloc résultat de recherche
2) Ajouter des règles CSS

--------------------------------------------------------------------------------

Les composants React
https://facebook.github.io/react/docs/components-and-props.html
  Composant fonctionnel (props) -> DOM
  Un composant prend en entrée des propriétés "props" qui sont "read only"
  Classe composant: ajoute la gestion de l'état du composant, et permet d'agir sur le cycle de vie
  Typage des propriétés avec "propTypes": https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  Composition


Exercice:
1) Découper en composants React la page de "résultats d'une recherche"
2) Ajouter les filtres


--------------------------------------------------------------------------------


Etat d'un composant et cycle de vie

Evenements (onClick, onMouseOver, onChange...)

Exercice: Implémenter le filtrage des résultats
1) Déterminer où gérer l'état dans l'arbre des composants
2) Revoir le découpage si nécessaire

--------------------------------------------------------------------------------

Initialiser un composant à partir d'un webservice
  Dans la methode componentDidMount
  Une fois reçu, les données sont stockées dans l'état
  Client HTTP:
    fetch
	axios
  Une option pour éviter de mettre ces données l'état: https://github.com/arunoda/react-komposer

Exercice:
1) Integrer un WS
2) Ajouter un indicateur de chargement

--------------------------------------------------------------------------------

Routing avec React-router: https://github.com/ReactTraining/react-router
  Permet d'associer une url à un état de l'application React
  Rend l'application bookmarquable
  Gère l'historique, le retour arrière
  La naviguation imbriquée
  Gestion des liens
  Configuration des routes: https://github.com/ReactTraining/react-router/blob/master/docs/guides/RouteConfiguration.md
  API: https://github.com/ReactTraining/react-router/blob/master/docs/API.md

Exercice:
1) Créer la route "/results" qui doit amener sur notre page de résultat
2) Créer un composant Voyage qui affiche le détail d'un voyage
3) Créer la route "/voyage/:id" qui doit amener sur le composant voyage
4) Créer les liens de la page résultat vers les voyages

--------------------------------------------------------------------------------

Tests unitaires
https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests
https://facebook.github.io/jest/
  Jest est inclus avec create-reacy-app
  Idéalement, le code a tester est sorti des composants
  Si vous devez instancier des composants React dans vos tests: https://github.com/airbnb/enzyme (par AirBnb)
    npm install --save-dev enzyme
    npm install --save-dev react-addons-test-utils

Exercice
1) Tester les méthodes de filtrage