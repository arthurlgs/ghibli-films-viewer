# 🎬 GhibliExplorer

<div align="center">
  <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
  <img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
  <img alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white">
  <img alt="React Query" src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white">
  <img alt="React Router" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
</div>

<br>

<div align="center">
  🇺🇸 <strong>English</strong> | <a href="README.pt-br.md">🇧🇷 Português</a>
</div>

<br>

A modern, responsive web application that fetches and displays movie data from the Studio Ghibli API. Built as a challenge for the DevQuest web development course, focusing on clean architecture, advanced data fetching, and componentization.

## ✨ Features

- **Dynamic Data Fetching:** Integrates with the Studio Ghibli API to retrieve movie catalogs and specific details.
- **Smart Caching:** Utilizes TanStack Query (React Query) for efficient data caching, reducing unnecessary API calls and handling loading/error states seamlessly.
- **Code Splitting:** Implements React Router DOM with `lazy()` and `<Suspense>` for optimized initial load times.
- **Clean Architecture:** Uses custom hooks (`useFilms`, `useFilm`) to separate business logic from UI components.
- **Responsive UI:** Fully responsive design built with Tailwind CSS, featuring an IMDb-inspired layout for movie details.
- **DRY Principle:** Reusable UI components (Loading, ErrorMessage) and centralized API configurations.

## 🚀 Technologies Used

- **Vite**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **React Router DOM v6**
- **TanStack Query v5**

## 💻 How to Run Locally

1. Clone this repository:
```bash
git clone https://github.com/[YOUR_USERNAME]/[YOUR_REPO_NAME].git
```

2. Navigate to the project directory:

```Bash
cd [your-repo-name]
```
3. Install dependencies:


```Bash
npm install
```

4. Run your local dev server

```Bash
npm run dev
```
Project developed as part of the DevQuest course from <a href="https://www.devemdobro.com/">Dev em Dobro</a>.