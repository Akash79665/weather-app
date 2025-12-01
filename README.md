# 🌤️ Weather Application

A modern, responsive weather application built with React that provides real-time weather information for any location worldwide using the OpenWeatherMap API.

![Weather App](https://img.shields.io/badge/React-19.2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-success)

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Configuration](#api-configuration)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## ✨ Features

- 🔍 **Search Functionality**: Search weather by city name
- 🌡️ **Real-time Data**: Get current temperature, weather conditions, and forecasts
- 💨 **Detailed Information**: Display temperature, feels-like temperature, humidity, wind speed, and visibility
- 🎨 **Modern UI**: Clean and intuitive user interface with gradient backgrounds
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with React for optimal performance
- 🔄 **Error Handling**: Comprehensive error messages for various scenarios
- ⌨️ **Keyboard Support**: Press Enter to search

## 🎯 Demo

Enter any city name to get real-time weather information including:
- Current temperature in Celsius
- Weather conditions with icons
- "Feels like" temperature
- Humidity percentage
- Wind speed in km/h
- Visibility in kilometers

## 🛠️ Technologies Used

- **Frontend Framework**: React 19.2.0
- **UI Icons**: Lucide React
- **API**: OpenWeatherMap API
- **Styling**: Inline CSS with modern design patterns
- **HTTP Client**: Fetch API
- **Package Manager**: npm

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure API Key**
   - Open `src/App.js`
   - Replace the API_KEY with your OpenWeatherMap API key:
   ```javascript
   const API_KEY = 'your_api_key_here';
   ```

4. **Start the development server**
```bash
npm start
```

5. **Open your browser**
   - Navigate to `http://localhost:3000`

## 🚀 Usage

1. Enter a city name in the search box
2. Click the "Search" button or press Enter
3. View the current weather information including:
   - Temperature
   - Weather description
   - Feels like temperature
   - Humidity
   - Wind speed
   - Visibility

### Example Cities to Try
- London
- New York
- Tokyo
- Paris
- Mumbai
- Sydney

## 🔑 API Configuration

This project uses the [OpenWeatherMap API](https://openweathermap.org/api).

### Getting Your API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/)
2. Sign up for a free account
3. Navigate to API keys section
4. Generate a new API key
5. **Note**: New API keys may take up to 2 hours to activate

### API Endpoints Used

- Current Weather Data: `https://api.openweathermap.org/data/2.5/weather`

## 📁 Project Structure

```
weather-app/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── App.css
│   ├── App.js              # Main application component
│   ├── index.css
│   ├── index.js            # Entry point
│   ├── logo.svg
│   └── reportWebVitals.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## 📸 Screenshots

### Main Interface
![Main Interface](screenshots/main-interface.png)

### Weather Display
![Weather Display](screenshots/weather-display.png)

### Mobile View
![Mobile View](screenshots/mobile-view.png)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/weather-app](https://github.com/yourusername/weather-app)

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Lucide React](https://lucide.dev/) for the beautiful icons
- [Create React App](https://create-react-app.dev/) for the project setup
- All contributors who helped improve this project

## 📊 Future Enhancements

- [ ] 5-day weather forecast
- [ ] Geolocation support
- [ ] Temperature unit toggle (Celsius/Fahrenheit)
- [ ] Weather alerts and warnings
- [ ] Search history
- [ ] Favorite locations
- [ ] Dark mode support
- [ ] Weather maps integration

---

**Made with ❤️ using React**