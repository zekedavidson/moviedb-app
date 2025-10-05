# Movie Database App

A modern React-based movie database application built with Vite, Tailwind CSS, and Appwrite for backend services.

## 🚀 Features

- **Movie Search**: Search for movies with real-time results
- **Movie Cards**: Beautiful movie cards with posters and ratings
- **Responsive Design**: Fully responsive design that works on all devices
- **Modern UI**: Clean and modern interface built with Tailwind CSS
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.13
- **Backend**: Appwrite 21.0.0
- **State Management**: React Hooks
- **Icons & Assets**: Custom SVG icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/moviedb-app.git
cd moviedb-app
```

2. Navigate to the React app directory:
```bash
cd react-app
```

3. Install dependencies:
```bash
npm install
```

4. Set up environment variables:
Create a `.env` file in the `react-app` directory and add your Appwrite configuration:
```env
VITE_APPWRITE_URL=your_appwrite_url
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
```

## 🚀 Getting Started

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
moviedb-app/
├── react-app/
│   ├── public/                 # Static assets
│   │   ├── hero-bg.png
│   │   ├── hero-img.png
│   │   ├── logo.png
│   │   ├── No-Poster-landscape.png
│   │   ├── No-Poster-portrait.png
│   │   ├── search.svg
│   │   └── star.svg
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── MovieCard.jsx
│   │   │   ├── Search.jsx
│   │   │   └── Spinner.jsx
│   │   ├── assets/             # Additional assets
│   │   ├── App.jsx             # Main App component
│   │   ├── appwrite.js         # Appwrite configuration
│   │   ├── main.jsx            # App entry point
│   │   ├── App.css             # App styles
│   │   └── index.css           # Global styles
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Appwrite Setup

1. Create an Appwrite account at [appwrite.io](https://appwrite.io)
2. Create a new project
3. Set up your database and collections
4. Add your configuration to the `.env` file

### Tailwind CSS

The project uses Tailwind CSS for styling. All utility classes are available throughout the application.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Appwrite](https://appwrite.io) for backend services
- [Vite](https://vitejs.dev/) for the build tool
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React](https://reactjs.org/) for the frontend framework

## 📞 Contact

Your Name - [@your-twitter](https://twitter.com/your-twitter) - your.email@example.com

Project Link: [https://github.com/your-username/moviedb-app](https://github.com/your-username/moviedb-app)
