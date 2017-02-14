React
=====

Introduction
------------

* Historique
  * 2005: jQuery (Efface les différences entre navigateurs. Manipulation du DOM simplifiée)
  * 2010: Angular (Simplifie grandement le dev d'application type SPA)
  * 2013: React (Orienté composant)
  * 2016: Angular 2
* Positionnement / vs autres framwork
  * "Librairie pour construire des interfaces utilisateurs"
  * Fait bien moins de chose qu'Angular ou Ember (pas de routing, pas de client http, repose plus sur les fonctionnalités du langage js)
* Alternatives:
  * Vue.js: https://vuejs.org/
  * Riot: http://riotjs.com/
  * ELM: http://elm-lang.org/
* Le projet React:
  * Environ 1 nouvelle version majeur tous les 10 mois
  * Des releases mineurs tous les 2 mois
  * Les changements non rétro-compatible sont rares
  * Utilisé en prod chez facebook
  * 60k étoiles sur github


Outillage, Setup
----------------

* éditeur
  * Code: https://code.visualstudio.com/
  * Atom.io: https://atom.io/
  * Sublimetext
* Chrome + devtools (F12 ou ctrl + shift + i)
  * Firefox a des outils équivalents, mais est à la traine
* nvm/node/npm
  * nvm pour gérer plusieurs versions de node: https://github.com/creationix/nvm
  * node: l'outillage web est presque toujours écrit en JavaScript et requière node pour être éxecuté (grunt, gulp, webpack, less...)
  * npm
    * installer les outils web
    * pour charger les dépendances d'un projet
    * pour jouer les "npm scripts"
* un shell pour lancer les commandes npm
* Build
  * webpack
  * browserify
  * babel: https://kangax.github.io/compat-table/es6/
    * compile ES6+ et JSX en JavaScript ECMAScript 5, compatible avec la plupart des navigateurs
* create-react-app
  * Pour initialiser un projet react avec un build prêt à l'emploi
  * Pousse les bonnes pratiques React
  * `eject` pour basculer sur un build custom


### Exercice
1. Installer node 6 avec nvm
2. Installer create-react-app
3. Initier un nouveau projet avec create-react-app
4. Faire en sorte que l'appli affiche "Hello world"


Ecrire du "HTML" avec JSX
-----------------------

https://facebook.github.io/react/docs/introducing-jsx.html
https://facebook.github.io/react/docs/jsx-in-depth.html

* Syntaxe proche d'HTML pour éviter de créer les éléments avec `React.createElement`
* ```javascript
  let name = <span>Julien</span>;

  // est équivalent à:
  let name = {
    type: 'span',
    props: {
      children: 'Julien'
    }
  };
  ```
* Expression: {...}
  * `{ ma_variable }`
  * `{ 1 + 2 + 3 }`
  * `{ une_foncction() }`
* Attributs: `<div key={i}>`
* Attention! Utiliser l'attribut className pour définir une class CSS `<div className='red'>`
* Affichage conditionnel
  * `{ a ? 'ok' : 'ko' }`
  * `{ null }`
  * `{ type == 'club' ? this.renderClub() : this.renderSejour() }`
  * `{ this.['render'+type]() }`
* Boucles
  * On utilise la méthode Array.map de JavaScript
  * `{ uneList.map((elm) => ...) }`
  * `{ uneList.map((elm, i) => ...) }`
* Les blocs JSX sont des expressions:
  * `let a = <span>bonjour</span>;`
  * `return <div>{a}</div>;`

### Exercice
1. Créer le bloc résultat de recherche
2. Ajouter des règles CSS


Les composants React
--------------------

https://facebook.github.io/react/docs/components-and-props.html

* Composant fonctionnel (props) -> DOM
  ```javascript
  function HelloWorld(props) {
    return <h1>Hello world!</h1>;
  }
  ```
* Un composant prend en entrée des propriétés "props" qui sont "read only"
  ```javascript
  const props = {
    name: 'Julien'
  }
  function HelloWorld(props) {
    return <h1>Hello {props.name}!</h1>;
  }
  ```
* Classe composant: ajoute la gestion de l'état du composant, et permet d'agir sur le cycle de vie
  ```javascript
  class HelloWorld extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

  // Instanciation
  <HelloWorld name="Julien" />
  ```
* Composition: https://facebook.github.io/react/docs/components-and-props.html#composing-components
* Typage des propriétés avec "propTypes": https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  ```javascript
  HelloWorld.propTypes = {
    name: React.PropTypes.string.isRequired
  }
  ```

### Exercice
1. Découper en composants React la page de "résultats d'une recherche"
2. Ajouter les filtres
3. Typer vos composants lorsque c'est possible

---

---

---

Etat d'un composant et cycle de vie
-----------------------------------

* L'état d'un composant est stocké dans sa propriété `this.state`.
* Initialisation de l'état du composant dans le constructeur :
  ```javascript
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  ```
* Mise à jour de l'état avec la méthode `this.setState({...})`
* A chaque modification de l'état, le composant est recalculé.
* Comment faire un composant qui affiche l'heure? https://facebook.github.io/react/docs/state-and-lifecycle.html
* Cycle de vie d'un composant: https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle


Evénements (onClick, onMouseOver, onChange...)
----------------------------------------------

* `<button onClick={this.handleEvent}>`
* `<input type="text" onChange={this.handleEvent}>`
* Les "handlers" sont appelés avec le paramètre event :
  ```javascript
  function Demo() {
    function handleChange(e) {
      console.log(e.target.value);
    }
    return (
      <input type="text" onChange={handleChange}>
    );
  }
  ```
* Un autre exemple: https://facebook.github.io/react/docs/handling-events.html
* API event : https://facebook.github.io/react/docs/events.html

### Exercice 1: Créer un compteur
1. Faire un composant affichant un bouton et un compteur
2. A chaque clique sur le bouton, incrémenter le compteur

### Exercice 2: Implémenter le filtrage des résultats
1. Déterminer où gérer l'état dans l'arbre des composants
2. Revoir le découpage si nécessaire

Initialiser un composant à partir d'un webservice
-------------------------------------------------

* Rappel: API Promise https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise
* Methode componentDidMount
  ```javascript
  componentDidMount() {
    fetch(url).then(response) => {
      this.setState({ ... });
    }
  }
  ```
* Une fois reçu, les données sont stockées dans l'état du composant, et le composant se met jour avec ces données.
* Client HTTP:
  * API fetch https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
  * Axios: https://github.com/mzabriskie/axios
* Une alternative pour éviter de mettre les données l'état: https://github.com/arunoda/react-komposer

### Exercice
1. Integrer un WS
2. Ajouter un indicateur de chargement


Tests unitaires
---------------

Avec create-react-app: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests

Jest: https://facebook.github.io/jest/

* Tests unitaires : Tests exécutés sans navigateur
* Tests end 2 end : Tests exécutés dans un navigateur (généralement avec selenium-webdriver: http://seleniumhq.github.io/selenium/docs/api/javascript/index.html)
* Jest est inclus avec create-react-app
* Idéalement, le code a tester est extrait des composants
* Si vous devez instancier des composants React dans vos tests: https://github.com/airbnb/enzyme (par AirBnb)
  * `npm install --save-dev enzyme`
  * `npm install --save-dev react-addons-test-utils`
  * Exemple:
    ```javascript
    import { shallow } from 'enzyme';
    const wrapper = shallow(<SearchFilteredResultList />);

    it('retourne vrai', () => {
    	expect(wrapper.instance().maMethodeATester().length).toBe(true);
    });
    ```

### Exercice
1. Tester les méthodes de filtrage


Routing avec React-router
-------------------------

https://github.com/ReactTraining/react-router

* Comment implémenter la naviguation dnas une application React?
* React-router permet d'associer une url à un état de l'application React
* Rend l'application bookmarquable
* Gère l'historique, le retour arrière navigateur, les liens pour passer d'une vue à une autre
* La naviguation imbriquée ({this.props.children})
* Composant Link: `<Link to="/page_1">lien</Link>`
* Configuration des routes
  ```javascript
  import { Router, Route } from 'react-router'
  import { browserHistory } from 'react-router'

  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="page_1" component={Composant1}/>
        <Route path="page_2" component={Composant2}/>
      </Route>
    </Router>,
    document.getElementById('root')
  );
  ```
  https://github.com/ReactTraining/react-router/blob/master/docs/guides/RouteConfiguration.md
* history: browserHistory, hashHistory
* API: https://github.com/ReactTraining/react-router/blob/master/docs/API.md

### Exercice
1. Créer la route "/results" qui doit amener sur notre page de résultats
2. Créer un composant Voyage qui affiche le détail d'un voyage
3. Créer la route "/voyage/:id" qui doit amener sur le composant voyage
4. Créer les liens de la page résultat vers les voyages


Tests unitaires
---------------

https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests
https://facebook.github.io/jest/
* Jest est inclus avec create-react-app
* Idéalement, le code a tester est sorti des composants
* Si vous devez instancier des composants React dans vos tests: https://github.com/airbnb/enzyme (par AirBnb)
  * `npm install --save-dev enzyme`
  * `npm install --save-dev react-addons-test-utils`

### Exercice
1. Tester les méthodes de filtrage
