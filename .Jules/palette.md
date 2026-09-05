## 2024-05-24 - Semantic Form Submissions
**Learning:** For search inputs, relying on custom Javascript `keypress` listeners for the "Enter" key misses mobile keyboard "Go/Search" button integrations and reduces accessibility.
**Action:** Always wrap search inputs and submit buttons in a semantic `<form>` element to naturally support cross-device submission patterns.

## 2024-05-24 - Identical Link Texts
**Learning:** Multiple "Explore More" links on a page without context are unhelpful for screen reader users navigating by links.
**Action:** Add dynamic `aria-label` attributes to identical links (e.g., `aria-label="Explore more about [Book Name]"`) to provide screen readers with proper context.
