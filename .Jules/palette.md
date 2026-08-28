## 2024-03-24 - [Async Button Interaction State]
**Learning:** During fetching data asynchronously from a backend, without disabling the submit button or input field, users might accidentally submit multiple times leading to bad UX or unexpected behavior. Changing the button text alongside the spinner provides better visual feedback that something is happening.
**Action:** Always consider disabling interactive elements like submit buttons and inputs and indicating loading state during network requests to prevent duplicate submissions and provide visual feedback.
