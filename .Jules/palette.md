## 2024-05-17 - Prevent Double Submission & Indicate Loading State
**Learning:** During async searches, users might press the search button multiple times, causing duplicate API requests. Adding immediate state feedback by disabling input/submit controls and changing button text clarifies that the app is working.
**Action:** Always disable form inputs and submit buttons while an async operation is in progress, and provide clear visual feedback (e.g., text change like "Searching...") to improve user understanding.
