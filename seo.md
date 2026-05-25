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
| **Generic Title Tags** | High | Homepage title is "Residue"; About is "Document". | Update titles to include primary keywords (see plan below). | High |
| **Missing Meta Descriptions** | High | All pages lack `<meta name="description">`. | Add unique, keyword-rich descriptions (150-160 chars). | High |
| **Heading Hierarchy** | Medium | Multiple H1s on Store/Leaderboard; H3 used for hero titles. | Ensure one H1 per page; use H2 for major sections. | Medium |
| **Alt Text Optimization** | Low | Alt text is present but generic. | Enrich alt text with keywords like "UMKM waste recycling". | Low |

---

## Content & E-E-A-T Findings

-   **Strengths:** The "About" page effectively builds trust through "Meet the Founder" and "Who is Residue" sections. The Leaderboard provides social proof and authority.
-   **Weaknesses:** Homepage content is visually driven but lacks enough text for Google to fully grasp the topical depth of "umkm waste recycle selling".

---

## Prioritized Action Plan

### 1. Critical Technical Fixes (Immediate)
*   **Create `robots.txt`**: Allow all crawlers and point to the sitemap.
*   **Create `sitemap.xml`**: List `/`, `/about`, `/store`, and `/leaderboard`.

### 2. On-Page Optimization (High Impact)
*   **Homepage:**
    *   **Title:** `Residue | Industrial Waste Marketplace & UMKM Recycling Indonesia`
    *   **Meta Description:** `Residue connects UMKM, communities, and recyclers to turn industrial waste into sustainable resources. Join our circular marketplace to sell and buy recycled materials.`
    *   **Headings:** Change Hero title from `h3` to `h1`. Change logo from `h1` to `p` or `div`.
*   **Store Page:**
    *   **Title:** `Sustainable Materials Marketplace | Buy & Sell Industrial Residue`
    *   **Meta Description:** `Discover high-quality industrial residue, from PET flakes to cotton offcuts. Support the circular economy by sourcing recycled materials from trusted UMKM.`
*   **About Page:**
    *   **Title:** `About Residue | Transforming Industrial Waste into Sustainable Value`

### 3. Image & Performance
*   **Background Images:** Since background images can't have alt text, ensure the surrounding text is highly descriptive.
*   **Lazy Loading:** Verify `loading="lazy"` on all below-the-fold images (already implemented in many places, continue this).

---

## Technical Recommendations for Multilingual Growth
If expanding beyond the Indonesian market:
-   Implement `hreflang` tags.
-   Avoid cross-locale canonicals.
-   Ensure all page elements (titles, meta descriptions, and alt text) are fully translated, not just the body text.
