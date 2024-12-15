---
layout: center
epoch: d1am
---

# Versioning

## La gestion de versions logicielles

---
layout: image-right
image: /git_repo.png
backgroundSize: contain
---

# Concepts de base

* Logiciel = arborescence de fichiers (sources)
* Version = un état de l'arborescence
* Commit = changement dans l'arborescence + metadata (auteur, date, message)
* Branche = ensemble de commits
* Tag = label sur un commit

---
layout: two-cols-header
---

# Concepts de base

::left::

## Décentralisé

* Chaque repository est indépendant
* Synchronisation:
  * clone
  * pull
  * push

::right::

## Autres

* bla bla


---

# Importance du Versioning

---
layout: section
---

# Outils populaires

---

# git

* Créé par Linus Torvalds en 2005 pour le noyau Linux

---

# GitHub

* Plateforme d'hébergement de dépôts git
* Outils de gestion de projet

---

# Autres

* gitk
* ...

---
layout: section
---

# git

---
layout: two-cols-header
---

# Commandes locales

::left::

## git init

Initialise le dépôt git localement:

```sh
mkdir my_project
cd my_project
git init
```

Vérifier la création d'un répertoire `.git`

```sh
find .
```

::right::

## git add

Ajout un changement pour le prochain commit:

```sh
touch README.md
git add README.md
```

Vérifier l'état du dépôt:

```sh
git status
```

---
layout: two-cols-header
---

# Commandes locales

::left::

## git commit

Enregistre les changements dans un nouveau commit.

```sh
git commit
```

Vérifie la création du commit dans le journal:

```sh
git log
```

::right::

## git rebase

---

# Commandes distantes

## git push

## git pull

## git clone

---
layout: section
epoch: d1pm
---

# GitHub

---

# Création de dépôt

---

# Gestion des branches

---

# Pull Requests

---

# Code Review

---
layout: section
---

# Collaboration avec GitHub

---

# Issues

---

# Projects

---

# Wikis

---
layout: section
---

# Exercices

---

# Création d'un projet collaboratif

---

# Gestion de conflits de fusion

---