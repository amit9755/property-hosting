# Analytics

This site uses Vercel Web Analytics through `@vercel/analytics`.

## Dashboard access

1. Open the project in Vercel.
2. Open **Analytics** from the project navigation.
3. Only Vercel project members with access to the project can view the dashboard.

The public website does not expose an admin dashboard or analytics data.

## Available information

Vercel can report aggregate page views, visitors, top pages, referrers, device types, browsers, operating systems, countries/regions, and date-range trends. This is the appropriate setup for this static Vite site because it does not need a database or an admin login route.

It does not identify a visitor by name, phone number, or exact address. Location is approximate and normally reported at country or regional level. Do not add personal identifiers to analytics events.

For named leads, use the existing enquiry form and WhatsApp flow. Those details are sent directly to the business WhatsApp number rather than stored in a public website database.

## If more detail is needed later

If you need exact session duration, funnels, recordings, or a custom staff dashboard, add a privacy-reviewed analytics service such as PostHog or Plausible. If you need a private custom dashboard, use an authenticated backend such as Supabase or Vercel server functions with row-level security. Do not build an `/admin` page protected only by a hidden URL.