# Memory bank — Super-portfolio

Ce dossier conserve le contexte durable du projet afin que chaque conversation
reparte d'une base fiable, sans réinventer les décisions.

## Fichiers

| Fichier | Rôle |
| --- | --- |
| `projectbrief.md` | Objectifs, périmètre, projets, critères de réussite |
| `productContext.md` | Raison d'être, public, identité, ton |
| `systemPatterns.md` | Architecture, composants, conventions de code |
| `techContext.md` | Stack, outils, contraintes, déploiement |
| `activeContext.md` | État courant et prochaine étape |
| `progress.md` | Journal d'avancement et décisions |
| `README.md` | Ce mode d'emploi |

## Protocole

1. **Début de conversation** : lire `projectbrief.md`, `activeContext.md` et
   `progress.md`.
2. **Pendant le travail** : respecter `.clinerules` et l'identité visuelle.
3. **Fin de jalon** : mettre à jour `activeContext.md` et `progress.md`,
   puis `git add` → `git commit` → `git push`.
