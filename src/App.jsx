import { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeSecurityMeasures } from './utils/security';
import { CountdownProvider, CountdownContext } from './context/CountdownContext';
import PageNavigator from './components/PageNavigator';
import ProtectedRoute from './components/ProtectedRoute';
import CountdownPage from './pages/CountdownPage';
import MyWish from './pages/MyWish';
import PhotosPage from './pages/PhotosPage';
import VideosPage from './pages/VideosPage';
import VoicePage from './pages/VoicePage';
import ThankYouPage from './pages/ThankYouPage';
import './styles/global.css';

function AppContent() {
  const countdownState = useContext(CountdownContext);

  useEffect(() => {
    // Initialize security measures on app load
    initializeSecurityMeasures();
  }, []);

  return (
    <Router>
      <div className="app">
        <PageNavigator />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<CountdownPage />} />
            <Route
              path="/my-wish"
              element={
                <ProtectedRoute isAllowed={countdownState.isComplete}>
                  <MyWish />
                </ProtectedRoute>
              }
            />
            <Route
              path="/photos"
              element={
                <ProtectedRoute isAllowed={countdownState.isComplete}>
                  <PhotosPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/videos"
              element={
                <ProtectedRoute isAllowed={countdownState.isComplete}>
                  <VideosPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/voice"
              element={
                <ProtectedRoute isAllowed={countdownState.isComplete}>
                  <VoicePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/thank-you"
              element={
                <ProtectedRoute isAllowed={countdownState.isComplete}>
                  <ThankYouPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function App() {
  return (
    <CountdownProvider>
      <AppContent />
    </CountdownProvider>
  );
}

export default App;
