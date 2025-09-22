# Notes-app Frontend

This is the frontend repository for a notes application built with **React** and **Tailwind CSS**. It serves as a minimal setup to get a React project running with Vite, including Hot Module Replacement (HMR) and ESLint rules.

## 🚀 Features

- **Fast Refresh** – Utilizes `@vitejs/plugin-react` for instant feedback on code changes.
- **Minimal Setup** – Lightweight and efficient environment for developing a React application.
- **ESLint Integration** – Includes basic ESLint rules for maintaining code quality.
- **Note Management** – Add, edit, and delete notes easily.
- **Persistent Storage** – Notes are saved in localStorage so they remain available even after refreshing the page.

## 🛠 Technologies Used

- **Framework:** React, Tailwind CSS
- **Build Tool:** Vite
- **Language:** JavaScript

## 📦 Installation

1. **Clone the repository:**

```bash
   git clone https://github.com/Ninadshirsat/notes-app_frontend.git
```

2. **Navigate to the project directory:**

```bash
   cd notes-app_frontend
```

3. **Install dependencies:**

```bash
   npm install
```

4. **▶️ Usage**
   Start the development server:

```bash
   npm run dev
```

Open your browser and go to http://localhost:5173 (or the port specified by Vite) to view the application.

**🖼 How It Works**

```javascript
const [notes, setNotes] = useState(() => {
  const notes = JSON.parse(localStorage.getItem("notes"));
  return notes || [];
});

useEffect(() => {
  localStorage.setItem("notes", JSON.stringify(notes));
}, [notes]);
```

When the app loads, it fetches notes from localStorage.
Any changes (add, edit, delete) are automatically synced to localStorage.

- **🤝 Contributing**
  Contributions are welcome!
- **To contribute:**

1. **Fork the project.**

2. **Create your feature branch:**

```bash
   git checkout -b feature/AmazingFeature
```

3. **Commit your changes:**

```bash
   git commit -m 'Add some AmazingFeature'
```

4. **Push to the branch:**

```bash
   git push origin feature/AmazingFeature
```

5. **Open a Pull Request**
   For issues or feature requests, open an issue in the repo.

📜 License
This project is licensed under the MIT License — see the LICENSE file for details.
