# Walkthrough - Character Counter Web App

## Overview
A modern, React-based web application for counting characters and paragraphs with real-time visual feedback.

## Features Implemented
1.  **Real-time Character Counting**
    - Instant updates as you type.
    - Toggle to include/exclude newlines in the total count.
2.  **Paragraph Analysis**
    - Breakdown of character counts per paragraph (line).
3.  **Space Highlighting**
    - Real-time visualization of spaces using a backdrop overlay technique.
    - Spaces are highlighted with a subtle blue background to make them easily visible.
4.  **Modern UI**
    - Built with **Vite + React + TypeScript**.
    - Responsive layout with a clean, professional design (Inter font, glassmorphism touches).
    - Dark mode support (via system preference).

## Verification Results
- **Build**: `npm run build` passed successfully.
- **Type Safety**: TypeScript errors were resolved (including strict import rules).
- **Deployment**: Code pushed to `https://github.com/yamada3-1990/ch-count.git`.

## How to Run Locally
```bash
npm install
npm run dev
```

## Screenshots
(Generated via Describe, actual screenshot unavailable in headless mode but UI is verified via code structure)
- **Input Area**: Textarea with blue highlights on spaces.
- **Stats Panel**: Cards showing Total Count and scrollable Paragraph list.