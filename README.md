# Write of Hand

Author website for Kate Lindley — [thewriteofhand.com](https://www.thewriteofhand.com).

A plain static site (HTML, CSS and a little JavaScript) with no build step. Any static host works: GitHub Pages, Netlify, Cloudflare Pages, etc.

## Pages

- `index.html`: home (books, upcoming works, author bio, contact)
- `boundinarms/index.html`: *Bound In Arms* book page, served at `/boundinarms/`

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Newsletter sign-up

No mailing-list service is connected yet, so the sign-up form opens a pre-filled email to `author.katelindley@gmail.com`. To use a provider such as Mailchimp or Buttondown, set the `<form class="signup">` `action` to the provider's endpoint and remove its `data-mailto` attribute, on both pages.

## Images

`assets/img/` holds WebP versions of the original artwork, resized for the web.
