# Rosolite Maldives — Online Store

Your store, hosted free on GitHub Pages, live at **shop.rosolitemaldives.com**.
Orders arrive on your WhatsApp; payment is by QR transfer or Cash on Delivery.

## Your details (already configured)

- GitHub account: `hamxa9292-netizen`
- Repository: `rosolitemaldives`
- Store address after setup: `https://shop.rosolitemaldives.com`
- Fallback address: `https://hamxa9292-netizen.github.io/rosolitemaldives/`
- The `CNAME` file in this folder pre-configures the custom domain — don't delete it.

## Publish — do these in order

1. On the "Create a new repository" screen you have open, click **Create repository**.
2. On the next page, click **uploading an existing file**, drag ALL files from
   this folder in (index.html, config.js, products.js, CNAME, README.md, and
   qr.png when you have it), then click **Commit changes**.
3. Go to **Settings → Pages**. Under "Branch" choose `main` and `/ (root)`,
   click **Save**.
4. Still in Pages settings: the Custom domain box should show
   `shop.rosolitemaldives.com` (picked up from the CNAME file). If empty, type
   it in and Save.
5. In Squarespace DNS (Custom records → ADD RECORD), add:
   - TYPE: `CNAME` · NAME: `shop` · PRIORITY: empty · TTL: 4 hrs
   - DATA: `hamxa9292-netizen.github.io`
6. Wait for GitHub's DNS check to turn green (can take up to a few hours with
   the 4-hour TTL), then tick **Enforce HTTPS**.

## Before announcing the store

- [ ] Edit `config.js`: replace `960XXXXXXX` with your real WhatsApp number.
- [ ] Upload your payment QR image named `qr.png`.
- [ ] Replace the 12 sample products in `products.js` with your real catalog.
- [ ] Place a test order yourself and confirm it arrives on your WhatsApp.

## Day-to-day updates

On github.com open the repository, click the file (e.g. `products.js`), click
the ✏️ pencil, edit, **Commit changes**. Live in a minute or two.
Mark items sold out with `inStock: false`. Add photos by uploading the image
file and setting `image: "filename.jpg"` on the product.

## How orders work

Checkout builds a complete order message (items, totals, address, order number,
payment method) and the customer taps **Send order on WhatsApp**. An order only
exists once they send it — there is no server. For QR payments, ask for the
transfer slip in the same chat and check the order number is in the reference.

## When to upgrade

This setup is comfortable up to roughly 15–20 orders/day. Beyond that, move to
WooCommerce or Shopify for automated payments and stock — your product list
carries over.
