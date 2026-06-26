/**
 * footer — 3M site footer (self-contained for this presales build).
 * Multi-column site map + social + legal, on the ink ground.
 */

const COLUMNS = [
  { h: 'Products', links: ['All products', 'Brands', 'Order online', 'Where to buy'] },
  { h: 'Industries', links: ['Manufacturing', 'Electronics', 'Energy', 'Transportation'] },
  { h: 'Company', links: ['About 3M', 'Careers', 'Investors', 'Newsroom'] },
  { h: 'Support', links: ['Contact us', 'Site map', 'SDS / regulatory', 'Change location'] },
];

const SOCIAL = ['LinkedIn', 'YouTube', 'Facebook', 'Instagram'];
const LEGAL = ['Privacy', 'Terms', 'Cookie Preferences'];

export default async function decorate(block) {
  const f = document.createElement('div');
  f.className = 'footer-3m';

  const cols = COLUMNS.map((c) => `
    <div class="footer-col">
      <h4>${c.h}</h4>
      ${c.links.map((l) => `<a href="#">${l}</a>`).join('')}
    </div>`).join('');

  f.innerHTML = `
    <div class="footer-top">
      <div class="footer-brand">
        <div class="footer-logo">3M</div>
        <p>Science. Applied to Life.</p>
      </div>
      ${cols}
    </div>
    <div class="footer-legal">
      <span>© 2026 3M. All rights reserved.</span>
      ${LEGAL.map((l) => `<a href="#">${l}</a>`).join('')}
      <span class="footer-social">${SOCIAL.map((s) => `<a href="#">${s}</a>`).join('')}</span>
    </div>`;

  block.replaceChildren(f);
}
