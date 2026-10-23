// Anonymous visit beacon: tells the Spokefolio admin dashboard that
// someone landed on the marketing site. No account, no IP, no
// fingerprint - just a random visitor id kept in this browser, the
// page path, the referring site's hostname, and the browser language.
// Sent as text/plain so it stays a simple CORS request (no preflight)
// and fire-and-forget so it can never slow or break the page.
const BEACON_URL =
  'https://xfhgamestudioltd.icu/api/apps/6acfb4bf0fc7d7424c8470e5/functions/logMarketingVisit';

export function logVisitBeacon() {
  try {
    // Once per browser session is enough; the dashboard counts unique
    // visitor-days, so repeat opens within a day add nothing.
    if (sessionStorage.getItem('sf_site_visit_logged')) return;
    sessionStorage.setItem('sf_site_visit_logged', '1');

    let visitor = localStorage.getItem('sf_visitor_id');
    if (!visitor) {
      visitor =
        typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : `v-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
      localStorage.setItem('sf_visitor_id', visitor);
    }

    let referrer = '';
    try {
      referrer = document.referrer ? new URL(document.referrer).hostname : '';
    } catch {
      referrer = '';
    }

    const payload = JSON.stringify({
      visitor: String(visitor).slice(0, 40),
      page: window.location.pathname.slice(0, 60) || '/',
      referrer: String(referrer).slice(0, 60),
      lang: String(navigator.language || '').slice(0, 8)
    });

    const blob = new Blob([payload], { type: 'text/plain' });
    if (navigator.sendBeacon && navigator.sendBeacon(BEACON_URL, blob)) return;
    fetch(BEACON_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: payload,
      keepalive: true
    }).catch(() => {});
  } catch {
    // Never disturb the page over analytics.
  }
}
