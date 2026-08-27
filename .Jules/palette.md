## 2024-05-18 - Ambiguous Link Text in Generated Content
**Learning:** Automatically generated cards often use generic text for calls to action (like "Explore More", "Read More"). This creates an accessibility nightmare for screen reader users who navigate by links, as they hear multiple identical links without context.
**Action:** Always append context to generic link text using `aria-label` when rendering repeating card components (e.g., `aria-label="Explore more about ${item.title}"`).
