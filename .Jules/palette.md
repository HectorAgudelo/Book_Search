## 2024-06-03 - Add meaningful ARIA labels to links
**Learning:** Screen readers announce links based on their textual content. Generic link text like "Explore More", "Click Here", or "Read More" provides no context to visually impaired users when navigating link by link or using a screen reader's link list feature.
**Action:** Always append meaningful context to generic link text. Since visual designs often constrain visible text length, use `aria-label` to provide the full, contextualized label (e.g., `aria-label="Explore more about [Book Title]"`) while keeping the visible text concise.
