# Justin Dorjee Corke — personal site

Hugo + Nightfall theme (theme is included in `themes/`, no submodule needed).

## Preview locally
Needs Hugo **extended** ≥ 0.158 and Dart Sass (`brew install hugo sass/sass/sass` on macOS).

    hugo server

Open http://localhost:1313

## Publish on GitHub Pages
1. Create a repo named `YOUR-USERNAME.github.io`.
2. From this folder:

       git init && git add . && git commit -m "First version"
       git branch -M main
       git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
       git push -u origin main

3. Repo → Settings → Pages → Source: **GitHub Actions**.
   The included workflow (`.github/workflows/hugo.yaml`) builds and publishes on every push.

## Where to edit things
| What | File |
|---|---|
| Bio paragraphs | `content/_index.md` |
| "Stuff I do" links | `data/interests.yaml` |
| Rotating projects | `data/projects.yaml` + images in `static/images/projects/` (16:9 works best) |
| Education logos/captions | `data/education.yaml` |
| Name, email, photo, slide speed | `hugo.toml` |
| Homepage layout | `layouts/home.html` |
| Styling | `assets/css/custom.css` |
| Research / project pages, CV | `content/research/`, `content/projects/`, `content/cv.md` |
