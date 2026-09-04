## 2024-05-24 - Semantic Forms over Custom Key Handlers
**Learning:** This app previously used custom JavaScript `keypress` handlers for "Enter" key submissions alongside button clicks. This is a common anti-pattern that breaks native mobile keyboard functionality ("Go" or "Search" buttons on iOS/Android).
**Action:** Always prefer wrapping inputs in a `<form>` element and listening to the `submit` event instead of manually handling keypresses. This ensures native accessibility and mobile support for free.

## 2024-05-24 - Contextual "Explore More" Links
**Learning:** The dynamically generated book cards use ambiguous link text ("Explore More") that opens in new tabs without warning (`target="_blank"`). This is a severe WCAG violation (Link Purpose In Context) and confusing for screen readers.
**Action:** When working with generated cards in this app, ensure all generic call-to-action links have `aria-label`s that describe the specific item (e.g., the book title) and warn users about new tabs (e.g., `aria-label="Explore more about [Title] (opens in a new tab)"`).
