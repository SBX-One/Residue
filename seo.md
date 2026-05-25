# SEO Audit Report: Residue Platform

**Date:** May 25, 2026  
**Project:** Residue (B2B Circular Economy Marketplace)  
**Target Keyword:** "umkm waste recycle selling"

---

## Executive Summary
The Residue platform has a strong visual foundation and clear mission, but it is currently **unoptimized for search engines**. The lack of basic technical files (`robots.txt`, `sitemap.xml`) and missing on-page elements (meta descriptions, descriptive titles) will prevent the site from ranking effectively for its target keywords.

### Top 3 Priority Issues:
1.  **Missing Technical Foundations:** No `robots.txt` or `sitemap.xml` to guide search crawlers.
2.  **Placeholder Meta Data:** All pages lack meta descriptions, and titles are generic (e.g., "Document", "Store").
3.  **Heading Hierarchy Conflicts:** Multiple `H1` tags and inconsistent heading use across pages.

---

## Technical SEO Findings

| Issue | Impact | Evidence | Fix | Priority |
| :--- | :--- | :--- | :--- | :--- |
| **Missing robots.txt** | High | File not found in root. | Create a `robots.txt` file in the root directory. | High |
| **Missing sitemap.xml** | High | File not found in root. | Generate and submit a `sitemap.xml` including all core pages. | High |
| **Missing Canonical Tags** | Medium | Checked `<head>` in all HTML files. | Add `<link rel="canonical" href="...">` to each page. | Medium |
| **Unoptimized URLs** | Low | `/src/pages/store.html`, `/index.html`. | Use clean, descriptive URLs (e.g., `/marketplace`, `/impact`). | Low |

---

## On-Page SEO Findings

| Issue | Impact | Evidence | Fix | Priority |
| :--- | :--- | :--- | :--- | :--- |
| **Generic Title Tags** | High | Homepage: "Residue"; Store: "Store"; About: "Document". | Update to descriptive, keyword-rich titles for all pages. | High |
| **Missing Meta Descriptions** | High | 100% missing across all analyzing pages. | Add unique descriptions (150-160 chars) to every page. | High |
| **H1 Logo Conflict** | Medium | Sticky header uses `<h1>` for the logo on every page. | Change logo to `<div>` or `<p>` to avoid competing with page content. | Medium |
| **Hero Title Weight** | High | Index hero uses `<h3>`; Leaderboard/Store use `<h1>` correctly but secondary to logo. | Elevate index hero to `<h1>` and ensure it's the primary H1. | High |
| **Heading Hierarchy** | Medium | Some sections skip levels or use `<p>` for subheaders. | Align headings (H1 → H2 → H3) to create a logical document outline. | Medium |
| **Social Metadata** | Low | No Open Graph (OG) or Twitter cards implemented. | Add social meta tags to improve visual sharing on platforms. | Low |

---

## Content & E-E-A-T Findings

-   **Strengths:** The "About" page effectively builds trust through "Meet the Founder" and "Who is Residue" sections. The Leaderboard provides social proof and authority.
-   **Weaknesses:** Homepage content is visually driven but lacks enough text for Google to fully grasp the topical depth of "umkm waste recycle selling".

---

## Prioritized Action Plan

### 1. Critical Technical Fixes (Immediate)
*   **Create `robots.txt`**: Allow all crawlers and point to the sitemap.
*   **Create `sitemap.xml`**: List `/`, `/src/pages/about.html`, `/src/pages/store.html`, and `/src/pages/leaderboard.html`.

### 2. Detailed On-Page & Meta Updates
Apply the following to the `<head>` of each page:

| Page | Proposed Title Tag | Proposed Meta Description |
| :--- | :--- | :--- |
| **index.html** | `Residue | Industrial Waste Marketplace & UMKM Recycling` | `Connect with recyclers and UMKM to transform industrial residue into sustainable resources. Join Indonesia's leading circular economy marketplace.` |
| **store.html** | `Sustainable Materials Marketplace | Buy Recycled Industrial Waste` | `Browse and buy industrial residue like PET flakes, fabric scraps, and wood offcuts. Sourced from sustainable UMKM partners across Indonesia.` |
| **leaderboard.html**| `Sustainability Leaderboard | Top UMKM Recycling Impact` | `See the top-performing UMKM and communities reducing CO2 and diverting waste. Track real-time environmental impact data.` |
| **about.html** | `About Residue | Mission for a Circular Economy in Indonesia` | `Learn how Residue connects businesses and communities to manage industrial micro-waste and create sustainable economic opportunities.` |

### 3. Semantic HTML Refactoring
*   **Global Fix:** In all files, change `<h1 class="main-header_logo">Residue</h1>` to `<div class="main-header_logo">Residue</div>`.
*   **Index.html:** Change the Hero section `<h3>` ("Turning Industrial Residue...") to `<h1>`.
*   **Store/Leaderboard:** Ensure the main banner text is the only `<h1>` on the page.
*   **Accessibility:** Use `<h2>` for all major section headers (e.g., "How Residue Creates Sustainable Impact").

### 3. Image & Performance
*   **Background Images:** Since background images can't have alt text, ensure the surrounding text is highly descriptive.
*   **Lazy Loading:** Verify `loading="lazy"` on all below-the-fold images (already implemented in many places, continue this).

---

## Technical Recommendations for Multilingual Growth
If expanding beyond the Indonesian market:
-   Implement `hreflang` tags.
-   Avoid cross-locale canonicals.
-   Ensure all page elements (titles, meta descriptions, and alt text) are fully translated, not just the body text.
