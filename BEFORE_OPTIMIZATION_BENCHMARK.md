# Before Optimization Benchmark

**Date & Time**: 2026-08-30 (Local Time)  
**Target Environment**: Production Build (`vite build` preview at `http://localhost:4173/`)  
**Testing Tool**: Google Lighthouse 13.4.1 (Headless Chrome)  
**Status**: Baseline audit recorded. No source code or design files modified.

---

## 1. Executive Summary & Scores

| Category | Mobile Score | Desktop Score | Target Goal |
| :--- | :---: | :---: | :---: |
| **Performance** | **38 / 100** | **71 / 100** | **90+** |
| **Accessibility** | **99 / 100** | **99 / 100** | **100** |
| **Best Practices** | **100 / 100** | **100 / 100** | **100** |
| **SEO** | **83 / 100** | **83 / 100** | **95+** |

---

## 2. Core Web Vitals & Key Metrics

| Metric | Mobile | Desktop | Status / Threshold |
| :--- | :---: | :---: | :---: |
| **Largest Contentful Paint (LCP)** | **76.5 s** (76,453 ms) | **13.2 s** (13,240 ms) | ⚠️ Poor (Good is ≤ 2.5 s) |
| **Total Blocking Time (TBT)** | **810 ms** (807 ms) | **10 ms** (5 ms) | ⚠️ Needs Improvement on Mobile (Good is ≤ 200 ms) |
| **Cumulative Layout Shift (CLS)** | **0.003** | **0.004** | ✅ Good (Good is ≤ 0.1) |
| **First Contentful Paint (FCP)** | **3.9 s** | **1.0 s** | ⚠️ Needs Improvement on Mobile |
| **Speed Index** | **19.8 s** | **1.8 s** | ⚠️ Heavy initial asset load |

---

## 3. Network Payload & Transfer Weights

| Metric | Mobile Value | Desktop Value | Details |
| :--- | :---: | :---: | :--- |
| **Total Network Requests** | **39 requests** | **39 requests** | Total HTTP network roundtrips |
| **Total Transferred Weight** | **16.48 MB** (16,877,851 B) | **16.48 MB** (16,877,851 B) | Uncompressed / compressed wire total |
| **Total Image Weight** | **15.56 MB** (15,930,691 B) | **15.56 MB** (15,930,691 B) | 19 Image files (94.4% of total weight) |
| **Total JavaScript Transferred** | **672.99 KB** (689,137 B) | **672.99 KB** (689,137 B) | 3 JS bundles (App bundle: 110.3 KB wire, 402.6 KB uncompressed; 3rd-party: 562.7 KB wire) |
| **Total Font Weight** | **166.16 KB** (170,146 B) | **166.16 KB** (170,146 B) | 9 Web Font files |
| **Total CSS Transferred** | **46.99 KB** (48,114 B) | **46.99 KB** (48,114 B) | 4 CSS files (App CSS: 43.04 KB wire, 261.8 KB uncompressed) |
| **HTML Document** | **0.92 KB** (938 B) | **0.92 KB** (938 B) | 1 Root document (`index.html`) |

---

## 4. LCP Element Identification

### Mobile
- **LCP Element**: Planet 1 background visual (`<img>`)
- **Snippet**:
  ```html
  <img src="/IMG/Planet 1.png" alt="" decoding="async" fetchpriority="low" style="position: fixed; top: 28vh; left: calc(-50px + max(-10px, 0.8vw));">
  ```
- **DOM Selector**: `body > div#root > div.min-h-screen > img`
- **LCP Time**: **76.5 s** (Throttled mobile simulation)
- **Bottlenecks Identified**: LCP element has `fetchpriority="low"`, is not preloaded in initial document, and competes with massive uncompressed PNG assets.

### Desktop
- **LCP Element**: Earth Orb background visual (`<img>`)
- **Snippet**:
  ```html
  <img src="/IMG/Earth_only_2x.png" alt="" decoding="async" fetchpriority="high" class="earth-orb" style="position: fixed; top: 0px; left: 0px; width: 160vw; max-width: 2400px;">
  ```
- **DOM Selector**: `body > div#root > div.min-h-screen > img.earth-orb`
- **LCP Time**: **13.2 s** (Simulated desktop connection)
- **Bottlenecks Identified**: Resource size is **2.25 MB** PNG with an element render delay of ~1.58s.

---

## 5. Top 10 Largest Downloaded Assets

| # | Asset / URL | Type | Transfer Size | Resource (Uncompressed) Size | MIME Type |
| :-: | :--- | :---: | :---: | :---: | :---: |
| **1** | `/IMG/Space.png` | Image | **8,382.02 KB** (~8.38 MB) | 8,381.75 KB | `image/png` |
| **2** | `/IMG/Earth_only_2x.png` | Image | **2,250.53 KB** (~2.25 MB) | 2,250.26 KB | `image/png` |
| **3** | `/assets/Adopt_Thumb-CCFxGISX.png` | Image | **1,496.40 KB** (~1.50 MB) | 1,496.14 KB | `image/png` |
| **4** | `/IMG/Sun_only_2x.png` | Image | **1,200.48 KB** (~1.20 MB) | 1,200.22 KB | `image/png` |
| **5** | `/IMG/Data%20Security_Card.png` | Image | **558.76 KB** (~0.56 MB) | 558.50 KB | `image/png` |
| **6** | `https://mcp.figma.com/mcp/html-to-design/capture.js` | Script | **395.13 KB** (~0.40 MB) | 394.08 KB | `application/javascript` |
| **7** | `/IMG/Planet%201.png` | Image | **312.29 KB** (~0.31 MB) | 312.03 KB | `image/png` |
| **8** | `/IMG/feedback_Card.png` | Image | **311.49 KB** (~0.31 MB) | 311.23 KB | `image/png` |
| **9** | `/IMG/Top%20customers.png` | Image | **275.43 KB** (~0.28 MB) | 275.17 KB | `image/png` |
| **10** | `/IMG/Helpdesk_Card.png` | Image | **271.65 KB** (~0.27 MB) | 271.39 KB | `image/png` |

---

## 6. Key Takeaways & Performance Bottlenecks

1. **Massive Image Footprint**: 
   - Top 5 image assets alone account for **13.88 MB** of wire transfer.
   - All visual assets are uncompressed raw `.png` files without modern next-gen format conversion (`.webp` / `.avif`) or responsive `srcset` resolutions.
2. **Third-Party Script Overhead**:
   - `capture.js` (Figma html-to-design plugin script) accounts for **395.13 KB**.
   - Google Tag Manager / Analytics accounts for **167.53 KB** wire / **493.95 KB** uncompressed.
3. **LCP Discovery & Priority**:
   - Planet and Earth visuals lack preloading links `<link rel="preload">` in the HTML document `<head>`.
   - On mobile, `fetchpriority="low"` is assigned to the visual that ends up being the LCP element.
