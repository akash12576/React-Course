# 🔐 Password Generator (React + Vite + Tailwind CSS)

A fast, lightweight, and customizable **Password Generator** application built using **React.js**, **Vite**, and **Tailwind CSS v4**. It allows users to generate secure, randomized passwords based on dynamic length selection and inclusion toggles for numbers and special characters.

---

## ✨ Features

- **Dynamic Length Control:** Adjust password length dynamically between 6 and 100 characters using a range slider.
- **Custom Character Inclusion:** Toggle checkboxes to include/exclude:
  - Numbers (`0-9`)
  - Special Characters (`!@#$%^&*()_+`)
- **Clipboard Integration:** Instantly copy generated passwords to the clipboard with visual DOM selection feedback.
- **Performance Optimized:** Uses React hooks like `useCallback` for memoization and efficient state rendering.
- **Responsive UI:** Clean dark-mode UI styled with modern Tailwind CSS utility classes.

---

## 🛠️ Tech Stack & Concepts Applied

- **Frontend:** React.js, Tailwind CSS v4, Vite
- **React Hooks Used:**
  - `useState`: Manages dynamic inputs (length, checkboxes, generated password).
  - `useCallback`: Memoizes the password generation function to prevent unnecessary function recreations.
  - `useEffect`: Triggers password regeneration automatically whenever dependencies (`length`, `numberAllowed`, `charAllowed`) change.
  - `useRef`: Provides a direct DOM reference to the password input field for text selection during copying.

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the repository
```bash
git clone [https://github.com/akash12576/React-Course.git](https://github.com/akash12576/React-Course.git)