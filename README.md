# OTP Verification Challenge

This project implements a 4-digit OTP verification screen using **React Native (Expo)** and **TypeScript**.

The goal was to demonstrate clean architecture, modularity, and production-ready code for a reusable OTP verification flow (commonly used for login, payments, etc).

---

## 🧠 Thought Process

- I separated the timer logic into a custom hook (`useOtpTimer.ts`) to make it reusable for other screens like password reset or phone verification.
- All styles are centralized in `OtpVerificationStyles.ts` to keep the screen clean.
- Used natural state management via `useState` and `useRef` for inputs, keeping it simple and readable.
- The `Resend` button reactivates after 60s using the countdown timer.
- Mocked network delay on verification to simulate real-world conditions.

---

## 🧩 Tech Stack

- React Native (Expo)
- TypeScript
- Hooks and functional components
- No third-party OTP libraries (as requested)

---

## 🚀 How to Run

1. Install dependencies
   ```bash
   npm install
