# Deployment Notes

This is a plain static site intended for Cloudflare Pages direct upload. Upload the contents of this folder as-is; no build command, package manager, framework, or generated output step is required.

After deployment, connect the custom domain `yaba.studio` from the Pages project's Custom Domains section. SSL should be handled automatically by Cloudflare.

Keep existing email DNS records untouched:

- Cloudflare Email Routing MX records
- Brevo DKIM records
- DMARC record
- SPF records

The website files allow crawling and do not block AI crawlers. If Cloudflare has AI crawler blocking enabled at the dashboard level, disable it for this domain because the site should be crawlable.
