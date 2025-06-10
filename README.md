# Waste Skip UI Redesign

This project is a complete redesign of the "Choose Your Skip Size" page from [WeWantWaste](https://wewantwaste.co.uk/), aiming to enhance the user interface, responsiveness, and overall user experience while preserving the original functionality.

## 🚀 Live Preview  
[CodeSandbox Live Link](https://codesandbox.io/p/github/mohamedtarek45/REMWaste-Task/main?import=true)


## 📸 Original vs Redesigned Page
The original page is functional but lacks a modern, responsive design and clear UX direction. This redesigned version improves:
- Responsive behavior across devices
- Animations and interactivity

  ---

## ✨ Features

- ✅ Fully responsive on mobile and desktop
- ⚡️ Built with **Vite** and **React**
- 🎨 Styled using **Tailwind CSS** and **ShadCN UI**
- 📦 Data fetched using **React Query** from live API
- 🌙 Dark mode support via `data-theme="dark"` attribute
- 📊 Animated progress bar using Tailwind `animate-pulse`
- 👉 Subtle hint animation on the **Continue** button to encourage user interaction
- 📡 Dynamic skip options from:
  [API Endpoint](https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft)

  ## 🧰 Tech Stack

| Tech              | Description                          |
|------------------|--------------------------------------|
| React            | JavaScript library for UI building   |
| Vite             | Fast development build tool          |
| Tailwind CSS     | Utility-first CSS framework          |
| ShadCN UI        | Accessible and customizable UI kit   |
| DaisyUI          | Prebuilt Tailwind components         |
| React Query      | Data fetching and caching            |

---
## 🧠 Approach

1. Used **React Query** to fetch skip data dynamically from the API.
2. Designed a responsive layout using **Tailwind** + **ShadCN** for better visual consistency.
3. Ensured mobile-first design.
4. Added interactive UX:
   - `pulse` animation on progress bar
   - subtle button nudge animation on "Continue"
5. Implemented **dark mode** support using a `data-theme` attribute.

---

## 📦 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/mohamedtarek45/REMWaste-Task.git
cd REMWaste-Task

# Install dependencies
npm install

# Run the dev server
npm run dev
