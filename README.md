# audit-gm.com

Site vitrine du cabinet **AUDIT-GM | EECC**, publié avec GitHub Pages sur https://www.audit-gm.com.

## Structure

| Fichier | Rôle |
| --- | --- |
| `index.html` | Page principale (missions, méthode, cibles, honoraires, FAQ, contact) |
| `assets/style.css` | Styles du site |
| `assets/main.js` | Menu mobile, animations, formulaire de contact |
| `404.html` | Page d'erreur |
| `favicon.svg` | Icône de l'onglet |
| `robots.txt`, `sitemap.xml` | Référencement |
| `CNAME` | Domaine personnalisé GitHub Pages |

## Modifier le contenu

Les textes se trouvent directement dans `index.html`. Les couleurs se changent en haut de `assets/style.css` (variables `--blue`, `--gold`, …).

Le formulaire de contact n'utilise aucun service externe : il ouvre la messagerie du visiteur avec un e-mail pré-rempli à destination de jm.giovanni@audit-gm.com.

## Prévisualiser en local

```sh
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```
