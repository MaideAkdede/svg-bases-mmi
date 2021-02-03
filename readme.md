# SVG - Bases

* * *

**dw-svg-bases** is an educational project, which will be used for multimedia courses.

**Note:** the school where the course is given, the [HEPL](http://www.provincedeliege.be/hauteecole) from Liège, Belgium, is a french-speaking school. From this point, the instruction will be in french. Sorry.

* * *

## Définition 

SVG, *"Scalable Vector Graphics"*, est un format d'image basé sur XML

- qui peut s'agrandir à n'importe quelle taille d'écran sans distorsion ;
- qui est utilisé pour créer des animations graphiques et de l'interaction.


## TABLE DES MATIÈRES

### Niveau 1 - Introduction

- 1.1 SVG
- 1.2 Image Bitmap versus Vecteur
- 1.3 Notre premier SVG
- 1.4 Un écran retina simplifié
 
### Niveau 2 - Les formes

#### Les Cercles

- 2.1 Intro
- 2.2 Dessiner un Cercle
- 2.3 Une Bordure Externe pour Notre Cercle
- 2.4 SVG Inline
- 2.5 Arrondir les Angles
- 2.6 L’icône simplifiée d'un smartphone
- 2.7 Animer le bouton du smartpone

#### D’autres formes

- 2.8 Des Formes pour Vous
- 2.9 Ajouter un Texte
- 2.10 Attributs Inline
- 2.11 Les Styles à leur place
- 2.12 L'Ordre Compte
- 2.13 Un premier logo SVG

### Niveau 3 - Groupes, Transformations, Aspect Responsive

#### Les groupes

- 3.1 Intro
- 3.2 Grouper toutes les choses
- 3.3 Déplacer le groupe
- 3.4 Notre logo amélioré

#### Transform à la rescousse

- 3.4 Les transformations
- 3.5 Notre logo encore amélioré

#### Un SVG Responsive

- 3.6 Intro
- 3.7 Revue du Viewport
- 3.8 ViewBox
- 3.9 Notre logo responsive
- 3.10 Notre logo responsive et portable
- 3.11 Un smartphone responsive

### Niveau 4 - SVG Encore!

#### Les Paths

- 4.1 Les Paths
- 4.2 Un polygone sous forme de path
- 4.3 Une ligne animée (Chris Coyier)

#### Les Symboles

- 4.4 Les Symboles à utiliser
- 4.5 Les Symboles vont aider
- 4.6 Un smartphone utilisé plusieurs fois
- 4.7 Accessibilité

## Prépas

- 1. maison-svg 

## Ressources

### Documentation officielle

- [SVG - spec. officielle](https://www.w3.org/TR/SVG/) : la spécification officielle du SVG sur le site du W3C
- [SVG - spec. en français](http://www.yoyodesign.org/doc/w3c/svg1/) :  la version française de la spécification du SVG sur le site Yoyodesign
- [Styles SVG - doc. officielle](https://www.w3.org/TR/SVG/styling.html) : la documentation officielle du W3C au sujet des styles SVG sur le site du W3C
- [Styles SVG - doc. en français](http://www.yoyodesign.org/doc/w3c/svg1/styling.html) : la documentation au sujet des styles SVG en français sur le site Yoyodesign

### Articles de base en français sur *lacascade.io*

- [SVG, la syntaxe Path](https://la-cascade.io/svg-la-syntaxe-path/) par Chris Coyier le 29 déc. 2016 : L'élément path de SVG est l'outil de dessin le plus perfectionné qui soit, mais sa syntaxe ne semble pas aisée. Chris Coyier décortique brillamment ce langage, pas si compliqué finalement.

- [Comprendre SVG viewBox](https://la-cascade.io/comprendre-svg-viewbox/) par Dudley Storey le 26 déc. 2016 : L'attribut viewBox est l'un des premiers qu'on rencontre quand on débute avec SVG, et potentiellement une grande source de confusion. Cet article de Dudley Storey vous épargnera bien des soucis.

- [Utiliser SVG use](https://la-cascade.io/utiliser-svg-use/) par Dudley Storey le 26 déc. 2016 : use est l'outil de clonage de SVG, il permet de dupliquer des éléments existants ou prédéfinis et d'alléger votre code. Une introduction claire et concise, comme toujours, de Dudley Storey.

03 avr. 2016 on SVG, CSS, Intermédiaire, Design
[Comment travailler avec des icônes en SVG](https://la-cascade.io/comment-travailler-avec-des-icones-en-svg/) par  Florens Verschelde :  Un bel article de notre frenchie Florens Verschelde qui a fait le buzz et a été repris par l'excellent CSS-Tricks. Explications claires du process et réflexions pour aller plus loin.

28 févr. 2016 on Filtres CSS, SVG, Couleur, Blend Modes, Intermédiaire
[feColorMatrix en douceur](https://la-cascade.io/fecolormatrix-en-douceur/) par Una Kravets : Les filtres CSS sont formidables mais ils présentent un inconvénient majeur : on ne peut pas manipuler les canaux. C’est ici qu'intervient feColorMatrix, une méthode SVG présentée par Una Kravets.

14 févr. 2016 on SVG, Design, Intermédiaire, Backgrounds SVG
[Backgrounds SVG : hexagones et écailles](https://la-cascade.io/backgrounds-svg-hexagones-et-ecailles/) par Dudley Storey : Dudley Storey poursuit sa passionnante série sur les backgrounds SVG, ici avec des motifs en tuiles hexagonales et en écailles. On y apprend quelques petites astuces relatives à l'encodage base64.

20 déc. 2015 on SVG, Animations, Transformations, Intermédiaire
[Créer un effet Chillwave en SVG](https://la-cascade.io/creer-un-effet-chillwave-en-svg/) par Varun Vachhar : Varun Vachhar recrée en SVG un effet chillwave initialement créé en sprite : enchaînement de courbes de Bézier, chemins en miroir, animation de la vague et touche finale, un beau boulot!

05 déc. 2015 on CSS, SVG, Design, Intermédiaire, Bases SVG
[Les bases de SVG : Propriétés de style](https://la-cascade.io/les-bases-de-svg-proprietes-de-style/) par Dudley Storey : Suite des bases de SVG par Dudley Storey : les styles de SVG sont souvent similaires à ceux de CSS, parfois identiques mais souvent juste assez différents pour créer la confusion.

22 nov. 2015 on SVG, Bases SVG, Tous Niveaux
[Comprendre SVG preserveAspectRatio](https://la-cascade.io/comprendre-svg-preserveaspectratio/) par Joni Trythall : Après SVG viewport et viewBox, Joni Trythall présente le complément logique, l'attribut preserveAspectRatio. Là aussi, les choses sont d'abord un peu complexes, mais présentées par Joni elles deviennent très claires.

22 nov. 2015 on SVG, Bases SVG, Tous Niveaux
[Comprendre SVG viewBox et viewport](https://la-cascade.io/comprendre-svg-viewbox-et-viewport/) par Joni Trythall : SVG viewport et viewBox peuvent sembler compliqués et intimidants lorsqu’on débute avec SVG. Joni Trythall décortique tout cela dans un langage simple et clair, excellente introduction agrémentée d'illustrations fruitées.

19 oct. 2015 on CSS, Animations, Intermédiaire, SVG
[Animer des éléments sur un chemin avec CSS](https://la-cascade.io/animer-des-elements-sur-un-chemin-avec-css/) par Dudley Storey : Motion Path est la plus excitante des nouveautés d’animation CSS de ces cinq dernières années, elle est présentée par Dudley Storey et son amie Alice (au pays des merveilles)

18 oct. 2015 on Design, SVG, Intermédiaire, Backgrounds SVG
[Motifs SVG maoris](https://la-cascade.io/motifs-svg-maoris/) par Dudley Storey : En hommage à nos amis néo-zélandais, voici un article de la série sur les backgrounds SVG consacré aux motifs maoris, à la fougère argentée, aux fractales et à l’ethnomathématique.

17 oct. 2015 on Design, SVG, Bases SVG, Intermédiaire
[Les bases de SVG : Groupes](https://la-cascade.io/les-bases-de-svg-groupes/) par Dudley Storey : Suite des bases de SVG par Dudley Storey : les groupes SVG ressemblent aux éléments div des pages web mais il existe des différences qu’il est important de bien comprendre.

03 oct. 2015 on HTML, Tous Niveaux, Accessibilité, SVG
[Bien utiliser l'attribut alt](https://la-cascade.io/bien-utiliser-lattribut-alt/) par Dudley Storey : Le web est plus fort lorsqu'il est divers : plus il est accessible, meilleur il est. Dudley Storey fait le point sur les règles à connaître concernant l'attribut alt d'alternative textuelle.

15 août 2015 on CSS, SVG, Intermédiaire, Blend Modes
[Image révélée au grattage avec SVG et Blend Modes]()
Encore une association de SVG et CSS Blend Modes pour de nouveaux effets créatifs. Dudley Storey anime une ligne multiple SVG et révèle un (joli) contenu en arrière-plan. Très malin!

10 août 2015 on CSS, Design, SVG, Intermédiaire, Transformations, Animations
Diagrammes circulaires flexibles avec CSS et SVG
Lea Verou vient de publier un livre extraordinaire proposant des techniques CSS et SVG originales. Cet article est technique, mais l'approche, la méthode, la créativité sont une sacrée source d'inspiration !

09 août 2015 on CSS, Design, SVG, Blend Modes
Créer de superbes diagrammes avec SVG et Blend Modes
Une nouvelle association de SVG et CSS Blend Modes pour de nouveaux effets créatifs. De quoi vous faire regretter le bureau, les graphiques et les diagrammes en camembert. Merci Dudley!

09 août 2015 on CSS, Design, SVG, Blend Modes, Backgrounds SVG
Backgrounds Pop-Art avec SVG et Blend Modes
Dudley Storey nous a appris à dessiner avec SVG. Ces lignes peuvent devenir complexes, on peut les mélanger à des images via Blend Modes pour créer des backgrounds “pop art”

03 août 2015 on Design, SVG, Intermédiaire, Backgrounds SVG
Motifs SVG japonais
Pour le plaisir, Dudley Storey a réalisé deux nouveaux backgrounds SVG dérivés des motifs géométriques traditionnels japonais. Un approfondissement de la série sur SVG, mine de rien, ça devient sérieux!

19 juil. 2015 on Design, SVG, Intermédiaire, Bases SVG, Backgrounds SVG
Backgrounds SVG : les rayures
Dans la continuité des articles sur les bases de SVG, Dudley Storey commence une série sur les motifs et les backgrounds. SVG permet de réaliser des choses impossibles en CSS.

19 juil. 2015 on Design, SVG, Intermédiaire, Bases SVG, Backgrounds SVG
Diagonales et motifs SVG en background
Lorsque nous comprenons les bases des motifs SVG, c'est un monde de créativité qui s'ouvre. Après les bases de SVG, Dudley Storey nous montre comment créer des backgrounds en SVG.

04 juil. 2015 on Design, SVG, Intermédiaire, Bases SVG
Les bases de SVG : Lignes simples et multiples
Nous avons vu les formes de base de SVG, Dudley Storey présente maintenant les lignes, simples et multiples et.. ce n’est pas simple. Mais avec Dudley, tout devient clair.

07 juin 2015 on Design, SVG, Intermédiaire, Bases SVG
Les bases de SVG : Polygones
Dudley Storey termine la série d'articles sur les formes de bases SVG avec les polygones : triangles, étoiles et autres formes plus complexes — dans une présentation claire et simple comme toujours.

26 mai 2015 on Design, SVG, Intermédiaire, Bases SVG
Les bases de SVG : Rectangles et Carrés
Après les cercles, voici les rectangles ! Dudley Storey reconstitue un célèbre tableau de Mondrian et nous montre chemin faisant tout ce qu'il faut savoir pour créer des rectangles en SVG.

25 mai 2015 on Design, SVG, Intermédiaire, Bases SVG
Les bases de SVG : Cercles et Ellipses
Même lorsqu’on utilise un logiciel de création graphique pour créer des SVG, la connaissance de la syntaxe permet de créer plus rapidement et efficacement des formes simples. Dudley Storey.

08 mai 2015 on SVG, Intermédiaire, Accessibilité
5 règles pour rendre SVG accessible
SVG est formidable pour le design responsive, la performance et la qualité vectorielle, mais rendre SVG accessible demande encore du travail, simple avec ces 5 règles proposées par Dudley Storey.

21 mars 2015 on CSS, SVG, Intermédiaire, Transformations, Animations, Sass
Animer avec les sprites SVG
Sarah Drasner montre ici comment utiliser les sprites SVG pour créer des animations complexes et responsives. De superbes exemples illustrent d'étonnantes possibilités d'animation, avec un code qui reste relativement simple.

07 févr. 2015 on CSS, SVG, Intermédiaire, Animations
L'effet gluant avec SVG
Lucas Bebber, développeur brésilien hyper créatif, propose son effet Gooey, qui a fait le buzz dernièrement. Outre une dose d'inspiration, on y trouvera de bonnes bases sur les filtres SVG.

07 févr. 2015 on SVG, JavaScript, Transformations, Animations
Le morphing en SVG
L'animation d'un SVG avec CSS est facile, mais certaines propriétés SVG ne sont pas animables avec CSS. Chris Coyier montre ici comment réaliser simplement un morphing avec SMIL et Javascript.

17 déc. 2014 on CSS, HTML, Design, SVG, Avancé, Transformations, Animations
Guide des animations SVG (SMIL)
Armez-vous de courage, voi ch'entrate... Voici le fameux guide de Sara Soueidan, pour tout savoir sur les animations SVG avec SMIL. Les animations SMIL permettent des choses impossibles avec CSS.

09 déc. 2014 on CSS, Responsive Web Design, SVG, Intermédiaire
Rendre un SVG responsif
Infiniment redimensionnable, le format SVG n'en est pas moins étonnamment difficile à rendre responsif. Dudley Storey montre comment y parvenir, avec un SVG image ou en ligne. Trop fort Dudley.

20 nov. 2014 on CSS, SVG, Transformations, Animations
SVG, style et animation avec CSS
Les articles de Sara Soueidan sont devenus une référence incontournable en matière de SVG. Sara passe ici en revue les étapes de l'application de styles et d'animation CSS aux SVG.

18 juil. 2014 on CSS, SVG, Intermédiaire, Canvas, Blend Modes
CSS Blend Modes, un petit guide
Nous avons déjà découvert CSS Blend Modes avec l'introduction de Chris Coyier, voici un article plus fouillé de Shwetank Dixit pour approfondir notre connaissance de cette nouvelle fonctionnalité de CSS.

13 juil. 2014 on Design, SVG, Débutant, Sketch
Sketch et les vecteurs
Sketch3 est un outil merveilleux, il brille tout particulièrement dans le domaine des formes vectorielles. Dans ce tutoriel bien fait, Peter Nowell établit les bases, puis nous apprend quelques astuces.

10 juin 2014 on CSS, HTML, Design, SVG, Intermédiaire, Animations
Animer un dégradé SVG
Dans son article précédent, Joni Trythall décrivait les dégradés SVG. Passons maintenant à l'étape suivante, leur animation ! Une bonne introduction aux notions les plus basiques, à partir d'exemples simples.

06 juin 2014 on CSS, HTML, SVG, Intermédiaire, Dégradés
Les dégradés SVG
Dégradés CSS ou dégradés SVG ? C'est une longue discussion, les deux ont leurs avantages, leurs utilisations particulières. Joni Trythall présente les dégradés SVG, en se concentrant sur leur utilisation pratique.

31 mai 2014 on CSS, HTML, SVG, Intermédiaire, Animations
Ligne animée en SVG
Chris Coyier s'est intéressé aux animations SVG qu'on trouve un peu partout et il a voulu comprendre la base de cette technique. Il nous livre ses observations, c'est évidemment passionnant.

23 avr. 2014 on CSS, SVG, Intermédiaire, Animations
Animer un SVG avec CSS
Chris Coyier s'est amusé à créer une petite animation SVG en CSS, sans passer par des bibliothèques compliquées. C'est fait maison, simple, efficace et expliqué de façon claire comme toujours.

01 févr. 2014 on CSS, HTML, SVG, Débutant
Data URI
Saviez-vous que vous n'aviez pas besoin d'utiliser un lien externe vers une image, vous pouvez embarquer les données de l'image directement dans votre document avec le format codé Data URI.

28 janv. 2014 on CSS, HTML, SVG, Intermédiaire
Utiliser SVG
Dans cet article complet et clair, Chris Coyier s'intéresse à la mise en oeuvre concrète de SVG pour votre design. Pas de théorie, cercles, rectangles, non, rien que du concret.

### Articles et tutoriels

- [The Best Way to Embed SVG on HTML (2021)](https://vecta.io/blog/best-way-to-embed-svg), Thomas Yip - May 25, 2018 : You've probably came across various ways to embed SVG in HTML, but with the latest browser and technology updates, do we still need an <object> tag or can we use <img> instead? What are their pros and cons and how do they compare?
- [SVG, le dessin vectoriel pour le web](http://www.alsacreations.com/tuto/lire/1421-svg-initiation-syntaxe-outils.html) : Tutoriel sur Alsacréations par Nicolas Gillis
- [Un logo cliquable SVG avec alternatives](http://www.alsacreations.com/tuto/lire/1482-un-logo-cliquable-svg-avec-alternatives.html) : Tutoriel sur Alsacréations par Stéphanie W.
- [Créer une police d’icônes facilement à partir d’illustrations vectorielles](http://www.alsacreations.com/tuto/lire/1547-police-font-icone-vectorielle-webdesign.html) : Tutoriel sur Alsacréations par Stéphanie W.
- [Réduire le poids d'une image SVG : d'Illustrator à l'export final](http://www.alsacreations.com/tuto/lire/1602-reduire-le-poids-image-svg-illustrator.html) : Tutoriel sur Alsacréations par Stéphanie W.
- [How SVG Line Animation Works](https://css-tricks.com/svg-line-animation-works/) : Tuto pour une simple animation de path
- [Animated line drawing in SVG](https://jakearchibald.com/2013/animated-line-drawing-svg/) avec une démo interactive de ce qui se passe quand on change les paramètres
- [Polygon feature design: SVG animations for fun and profit](https://product.voxmedia.com/2013/11/25/5426880/polygon-feature-design-svg-animations-for-fun-and-profit) : un article qui résume remarquablement bien (en anglais) le principe de base de la technique où on anime les dasharray le long du path SVG, "controlling the offset of the dash", et les différentes approches pour le faire (animation CSS, frames avec JS) + bel exeple de abnnière animée avec X-Box => TODO !!!!
- [Styling SVG <use> Content with CSS](https://tympanus.net/codrops/2015/07/16/styling-svg-use-content-css/) By Sara Soueidan : An in-depth article on how to style the contents of the SVG <use> element and overcome some challenges it brings
-[Styling SVG Content with CSS | Codrops](https://tympanus.net/codrops/2015/07/16/styling-svg-use-content-css/) : See the Pen c30e270090b2460ba6e6833c611e5a76 by Sara Soueidan (@SaraSoueidan) on [CodePen](https://codepen.io/) => https://codepen.io/SaraSoueidan/pen/f15cec4a61e753259bd768de2e20500b/ ??
- [SVG `use` with External Reference, Take 2](https://css-tricks.com/svg-use-with-external-reference-take-2/), Chris Coyier on May 30, 2017 : SVG has a <use> element which essentially means: go find the chunk of SVG that has this #identifier and kinda clone it and put it right here. It’s an essential ingredient to an SVG icon system. There are some things to know about this that we haven’t covered before
- [How to animate SVG signature](https://www.silvestar.codes/articles/how-to-animate-svg-signature/) : Let’s see how to animate SVG signature with a little bit of JavaScript and CSS. In this demo, I would show you how to use JavaScript function to calculate SVG path length and CSS animation to animate SVG strokes. You could see the final result on About page or CodePen.
- [A Guide to SVG Animations (SMIL)](https://css-tricks.com/guide-svg-animations-smil/) : 
- [Creating a Web Type Lockup](https://css-tricks.com/creating-web-type-lockup/) : Use SVG to create a type lockup (a typographic design where the words and characters are styled and arranged very specifically) 
- [SVGround](http://svground.fr//) : Un site qui met à disposition des cours gratuits sur SVG (version 1.1) les plus complets possible
- [SVG ou Canvas, que choisir ?](http://openweb.eu.org/articles/canvas_svg_que_choisir) : Article sur les différences entre SVG et Canvas par Jérémie Patonnier sur OpenWeb

## Demos

- [SVG Drawing Animation - Line drawing animation with illustration fade-in](https://tympanus.net/Development/SVGDrawingAnimation/index.html)
- [SVG Drawing Animation - Mockup drawing animation with website fade-in](https://tympanus.net/Development/SVGDrawingAnimation/index2.html)
- [SVG Drawing Animation - Path animation with sequential website fade-in](https://tympanus.net/Development/SVGDrawingAnimation/index3.html)
- [Animated SVG Icons - Using Snap.svg to animate SVG icons](https://tympanus.net/Development/AnimatedSVGIcons/)
- [Icon Hover Effects - Simple hover effects for circular icons](https://tympanus.net/Development/IconHoverEffects/)
- [Creative Button Styles - Modern and subtle styles & effects for buttons (hover and click)](https://tympanus.net/Development/CreativeButtons/)
- [Creative Link Effects - Subtle and modern effects for links or menu items](https://tympanus.net/Development/CreativeLinkEffects/)
- [Animated Checkboxes and Radio Buttons with SVG - Proof-of-concept for adding some fancy "check" animations to form inputs](https://tympanus.net/Development/AnimatedCheckboxes/)
- [Animated Border Menus- Inspired by CreativeDash's bounce menu](https://tympanus.net/Tutorials/AnimatedBorderMenus/)

## Inspirations

- [Animated Unsubscribe Page](https://codepen.io/agathaco/pen/NyQgQX) : Un super exemple d'animation SVG avec JS (un bonhomme qui change d'expression si on veut se désinscrire ou pas) sur codepen
- [Animated SVG icons](http://codepen.io/luruke/pen/mbnkA) : Animations SVG réalisées par Luigi De Rosa (Epic, du stage de Céline Eppe)
- [30 Awesome SVG Animation For Your Inspiration](http://www.hongkiat.com/blog/svg-animations/)
- [Animated SVG Icons](https://tympanus.net/Development/AnimatedSVGIcons/) : Une galerie d'icônes SVG animées sur codrops (pour les idées, pas pour la technique)
- [SVG Drawing Animation](https://tympanus.net/codrops/2013/12/30/svg-drawing-animation/)
- [Animated Checkboxes and Radio Buttons with SVG](https://tympanus.net/codrops/2013/10/15/animated-checkboxes-and-radio-buttons-with-svg/)
- [Interactive Infographic with SVG and CSS Animations](https://tympanus.net/codrops/2013/02/06/interactive-infographic-with-svg-and-css-animations/)
- [How to Create an Interactive Animated SVG Drum Kit](https://tympanus.net/codrops/2016/03/16/interactive-animated-svg-drum-kit/)
- [SVG Burger Button Animation](http://codepen.io/adeyahya/pen/GqZpRE) : Burger qui se transforme en croix au clic
- [Learning SVG animation](http://codepen.io/FabioG/pen/MaZpJp) : Animation d'un avion qui suit une ligne
- [SVG Animation](http://codepen.io/seanmccaffery/pen/xBpbG) : un souligné qui se transforme en bordure qui se dessine au hover
- [Search Results for svg burger on CodePen](http://codepen.io/search/pens?q=svg burger&limit=all&order=popularity&depth=everything&show_forks=false) :
- [Shine effect in pure CSS + SVG](https://codepen.io/iamvdo/pen/maJhu)
- [Interactive SVG mask w/full screen image](https://codepen.io/PointC/pen/KRWgOK/)
- [Playing with SVG displacement filter](https://codepen.io/chooblarin/pen/xzGqrL) : Get a feel for how SVG displacement can change and distort an image in this interactive Pen from Sota Hatakeyama
- [Pure CSS Tic Tac Toe w/ SVG](https://codepen.io/jh3y/pen/BVaGKP) : Jhey uses a clever checkbox hack to create a playable game of tic-tac-toe with CSS
- [Heart animation](https://codepen.io/iamjoshellis/pen/EgGzvk) : un codepen de Josh (@iamjoshellis) à suivre