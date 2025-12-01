import React, { useState } from 'react';
import { Cloud, Search, MapPin, Thermometer, Wind, Droplets, Eye } from 'lucide-react';

export default function WeatherApp() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // OpenWeatherMap API key
  const API_KEY = 'c4fcfaf40234c283272c9211851ddb93';

  const fetchWeather = async () => {
    if (!location.trim()) {
      setError('Please enter a location');
      return;
    }

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=${API_KEY}&units=metric`;
      console.log('Fetching weather for:', location);
      
      const response = await fetch(url);
      
      console.log('Response status:', response.status);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Location not found. Please check the city name and try again.');
        } else if (response.status === 401) {
          throw new Error('API key error. The key may need activation (can take 2 hours) or may be invalid. Please check at https://openweathermap.org/api');
        } else {
          throw new Error(`Error: ${response.status}. Please try again later.`);
        }
      }

      const data = await response.json();
      console.log('Weather data:', data);
      setWeather(data);
      setLocation('');
    } catch (err) {
      console.error('Error fetching weather:', err);
      if (err.message.includes('Failed to fetch') || err.name === 'TypeError') {
        setError('Network error. Please check your internet connection and try again.');
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchWeather();
    }
  };

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #60a5fa, #3b82f6, #2563eb)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <div style={{ width: '100%', maxWidth: '28rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Cloud size={40} color="white" />
            <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', margin: 0 }}>Weather App</h1>
          </div>
          <p style={{ color: '#dbeafe', margin: 0 }}>Get current weather conditions for any location</p>
        </div>

        {/* Search Input */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ background: 'white', borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <div style={{ flex: 1, position: 'relative' }}>
                <MapPin style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} size={20} />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter city name..."
                  style={{
                    width: '100%',
                    paddingLeft: '2.5rem',
                    paddingRight: '1rem',
                    paddingTop: '0.75rem',
                    paddingBottom: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.5)'}
                  onBlur={(e) => e.target.style.boxShadow = 'none'}
                />
              </div>
              <button
                onClick={fetchWeather}
                disabled={loading}
                style={{
                  background: loading ? '#93c5fd' : '#3b82f6',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  border: 'none',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => !loading && (e.target.style.background = '#2563eb')}
                onMouseOut={(e) => !loading && (e.target.style.background = '#3b82f6')}
              >
                <Search size={20} />
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div style={{
            background: '#fee2e2',
            border: '1px solid #f87171',
            color: '#991b1b',
            padding: '0.75rem 1rem',
            borderRadius: '0.5rem',
            marginBottom: '1.5rem'
          }}>
            {error}
          </div>
        )}

        {/* Weather Display */}
        {weather && (
          <div style={{
            background: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            padding: '1.5rem',
            animation: 'fadeIn 0.5s ease-out'
          }}>
            {/* Location Header */}
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>{weather.name}</h2>
              <p style={{ color: '#6b7280', margin: '0.25rem 0 0 0' }}>{weather.sys.country}</p>
            </div>

            {/* Main Weather Info */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <img
                src={getWeatherIcon(weather.weather[0].icon)}
                alt={weather.weather[0].description}
                style={{ width: '8rem', height: '8rem' }}
              />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3.75rem', fontWeight: 'bold', color: '#1f2937' }}>
                  {Math.round(weather.main.temp)}°C
                </div>
                <div style={{ fontSize: '1.25rem', color: '#6b7280', textTransform: 'capitalize', marginTop: '0.5rem' }}>
                  {weather.weather[0].description}
                </div>
              </div>
            </div>

            {/* Additional Weather Details */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid #e5e7eb'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Thermometer size={24} color="#ef4444" />
                <div>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>Feels Like</p>
                  <p style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', margin: '0.25rem 0 0 0' }}>
                    {Math.round(weather.main.feels_like)}°C
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Droplets size={24} color="#3b82f6" />
                <div>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>Humidity</p>
                  <p style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', margin: '0.25rem 0 0 0' }}>
                    {weather.main.humidity}%
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Wind size={24} color="#6b7280" />
                <div>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>Wind Speed</p>
                  <p style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', margin: '0.25rem 0 0 0' }}>
                    {Math.round(weather.wind.speed * 3.6)} km/h
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Eye size={24} color="#a855f7" />
                <div>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>Visibility</p>
                  <p style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', margin: '0.25rem 0 0 0' }}>
                    {(weather.visibility / 1000).toFixed(1)} km
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Instructions */}
        {!weather && !error && !loading && (
          <div style={{
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            color: 'white',
            textAlign: 'center'
          }}>
            <p style={{ marginBottom: '0.5rem' }}>Enter a city name to get started!</p>
            <p style={{ fontSize: '0.875rem', color: '#dbeafe', margin: 0 }}>
              Note: New API keys may take up to 2 hours to activate.
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}