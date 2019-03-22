Bonjour,

Dans cet exercice, nous allons vous accompagner dans le développement du composant `TodoFooter`. Cet exercice est supposé être un exercice de révision de vos cours JavaScript et React, donc si vous rencontrez des difficultés, n'hésitez pas à réviser vos anciens cours !

Afin de vous faciliter la tâche, nous avons pris soin pour vous de créer le fichier `/src/components/TodoFooter/index.js` et d'importer tout ce dont vous aurez besoin pour le développement de ce composant. Sachez que, comme leurs noms le suggèrent, la constante `FILTER_TITLES` représentent les états dans laquelle l'application peut être : afficher tout, uniquement celle en cours, ou uniquement celles qui sont terminés.

1. Avez-vous créé les `propTypes` de `TodoFooter` ?

La première étape est de définir les `propTypes` de notre composant `TodoFooter`. Vous vous en souvenez, il s'agit d'une best practice en React qui permet de définir les types de `props` dont nous avons besoin et s'ils sont obligatoires pour le bon fonctionnement de notre composant.

Pour le `Footer`, les propsTypes à déclarés sont :
- `completedCount` qui est un `number` et étant requis
- `activeCount` qui est un `number` et étant requis
- `currentFilter` qui est un `string` et étant requis
- `onChangeFilter` qui est un `func` et étant requis
- `onClearCompleted` qui est un `func` et étant requis

**Rappel :** Lorsque nous avons un composant `stateless`, nous devons définir les `propTypes` en bas du fichier, avant l'`export`.

```javascript
const Link = (props) => {
	const { link, alt, text } = props

	return (
		<div>
			<a href={link} alt={alt} className="link primary">{text}</a>
		</div>
	)
}

Link.propTypes = {
	link: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	alt: PropTypes.string,
}

export default Link
```

2. Avez-vous correctement créé la constante permettant de récupérer tous les `props` ?

Dans le corps de la fonction, définissez la liste des `props` dans une `const`. Si vous ne voyez pas de quelles `props` nous parlons, jetez un oeil à la question 1.

**Rappel :** Afin de récupérer les `props` nous utiliserons le `destructuring assigment` afin que notre code soit plus propre.

```javascript
const Link = (props) => {
	const { link, alt, text } = props // destructuring assigment

	// ...
}
```

3. Avez-vous correctement créé le composant `TodoFooter` ?

Passons maintenant la création de notre rendu, pour ce faire préparez un `return` qui englobera les 3 parties du component : le nombre de todos, les butons des filtres, et le bouton pour supprimer les todos terminés. Ce composant aura comme balise parent `footer` et qui aura la classe CSS `footer`.

Maintenant que notre structure est prête, nous pouvons passer à la création de notre rendu.

## Étape 1 :

Préparez un `return` qui englobera les 3 parties du composant :
- Le nombre de todos
- Les buttons des filters : `Toutes`, `En cours` et `Terminés`
- Le bouton pour supprimer les todos terminés.

Ce composant aura comme balise principal `<footer className="footer"></footer>`.

## Étape 2 :

Afin d'afficher le nombre de todos en cours, on utilisera une paire de balise `span` avec pour classe CSS `todo-count`. On affichera `activeCount` si `activeCount > 0`, sinon la valeur affichée sera `'Aucune'`. Sur la même ligne que celle où on affiche le nombre de todos, on affichera `tâches restantes` ou `tâche restante` selon qu'il y a plus de 2 todos en appelant `itemWord` précédement créé.

4. Avez-vous créé la constante `itemWord` ?

Maintenant nous allons avoir besoin d'une constante nous permettant d'afficher `tâches restantes` si `activeCount` est supérieur ou égale à `2`. Dans le cas contraire, `itemWord` sera égal à `tâche restante`.