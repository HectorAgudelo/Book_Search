## 2024-05-18 - Fix contextless links with aria-label
**Learning:** Found a pattern where multiple "Explore More" links point to different book URLs. Screen reader users get no context from the link text alone.
**Action:** Always add an `aria-label` to generic links (like "Explore More", "Read More", or "Click Here") that includes the context (e.g., `aria-label="Explore more about ${book.name}"`).
