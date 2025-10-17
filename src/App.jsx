import React from "react";
import "./i18n";
import { useTranslation } from "react-i18next";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MoodBar from "./components/MoodBar";
import RestaurantGrid from "./components/RestaurantGrid";
import SplashScreen from "./components/SplashScreen";
import Footer from "./components/Footer";

import { allRestaurants } from "./data/restaurants";
import { availableCities } from "./data/cities";
import { RADIUS_KM, distanceKm } from "./utils/geoUtils";

export default function App() {
  const { t, i18n } = useTranslation();

  /* ----------------------- State Management ----------------------- */
  const [gps, setGps] = React.useState(null); // {lat, lon}
  const [permission, setPermission] = React.useState("prompt"); // 'granted' | 'denied' | 'prompt'
  const [cityName, setCityName] = React.useState(t("chooseLocation"));
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const [manualCity, setManualCity] = React.useState(null);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [selectedMood, setSelectedMood] = React.useState("הכול");
  const [filtered, setFiltered] = React.useState([]);

  const [showSplash, setShowSplash] = React.useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = React.useState(false);

  React.useEffect(() => {
    const id = setTimeout(() => setShowSplash(true), 300);
    return () => clearTimeout(id);
  }, []);

  const isLocating = permission !== "denied" && !manualCity && !gps;

  /* ----------------------- Geolocation Logic ----------------------- */
  // 1️⃣ Start geolocation watcher only once on mount
  React.useEffect(() => {
    if (!navigator.geolocation) {
      setPermission("denied");
      setError(t("locationDenied"));
      setLoading(false);
      return;
    }

    let watchId = null;

    const startWatch = () => {
      watchId = navigator.geolocation.watchPosition(
        async (pos) => {
          const coords = {
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
          };
          setGps(coords);
          setPermission("granted");
          setError(null);
          setLoading(false);
        },
        () => {
          setPermission("denied");
          setGps(null);
          setLoading(false);
          setError(t("locationDenied"));
        },
        { enableHighAccuracy: true, maximumAge: 0, timeout: 8000 }
      );
    };

    startWatch();

    if (navigator.permissions?.query) {
      navigator.permissions.query({ name: "geolocation" }).then((perm) => {
        setPermission(perm.state);
        perm.onchange = () => {
          setPermission(perm.state);
          if (perm.state === "granted") {
            setManualCity(null);
            setError(null);
            setLoading(true);
            if (watchId) navigator.geolocation.clearWatch(watchId);
            startWatch();
          } else if (perm.state === "denied") {
            if (watchId) navigator.geolocation.clearWatch(watchId);
            setGps(null);
            setError(t("locationDenied"));
          }
        };
      });
    }

    return () => {
      if (watchId) navigator.geolocation.clearWatch(watchId);
    };
  }, []); // ⬅️ no dependencies — run only once

  // 2️⃣ Separate effect for reverse-geocoding when coords or language change
  React.useEffect(() => {
    if (!gps) return;

    const fetchCity = async () => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${gps.lat}&lon=${gps.lon}&format=json&accept-language=${i18n.language}`
        );
        const data = await res.json();
        const name =
          data?.address?.city ||
          data?.address?.town ||
          data?.address?.village ||
          t("chooseLocation");
        setCityName(name);
      } catch {
        setCityName(t("chooseLocation"));
      }
    };

    fetchCity();
  }, [gps, i18n.language]);

  /* ------------------------ Filtering Logic ------------------------ */
  const base =
    permission === "granted" && gps && !manualCity
      ? gps
      : manualCity
      ? availableCities[manualCity]
      : null;

  React.useEffect(() => {
    if (!base) {
      setFiltered([]);
      return;
    }

    const near = allRestaurants.filter((r) => {
      const inRadius =
        distanceKm(base.lat, base.lon, r.lat, r.lon) <= RADIUS_KM;
      const moodMatch =
        selectedMood === "הכול" ||
        r.category === selectedMood ||
        r.cuisine?.includes(selectedMood) ||
        (r.tags && r.tags.includes(selectedMood));
      return inRadius && moodMatch;
    });

    setFiltered(near);
  }, [base?.lat, base?.lon, selectedMood]);

  /* ------------------------ Derived UI Texts ------------------------ */
  const displayedCity =
    manualCity || (permission === "granted" ? cityName : t("chooseLocation"));

  /* ----------------------------- Close dropdown on outside click ----------------------------- */
  React.useEffect(() => {
    const closeOnOutsideClick = (e) => {
      if (!e.target.closest(".lang-dropdown")) setLangDropdownOpen(false);
    };
    document.addEventListener("click", closeOnOutsideClick);
    return () => document.removeEventListener("click", closeOnOutsideClick);
  }, []);

  /* ----------------------------- Render ----------------------------- */
  return (
    <div
      className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans"
      dir="rtl"
      lang={i18n.language}
    >
      {/* Header */}
      <Header
        displayedCity={displayedCity}
        loading={loading}
        error={error}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
        manualCity={manualCity}
        setManualCity={setManualCity}
        t={t}
      />

      {/* Hero Section */}
      <HeroSection title={t("welcome")} subtitle={t("subtitle")} />

      {/* Mood Bar */}
      <MoodBar
        selectedMood={selectedMood}
        setSelectedMood={setSelectedMood}
        t={t}
      />

      {/* Restaurants */}
      <main className="px-4 pb-20 pt-4 sm:pt-6 space-y-5 sm:space-y-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 text-white">
          🍽️ {t("restaurantsNearby")} ({displayedCity})
        </h2>

        <RestaurantGrid
          base={base}
          filtered={filtered}
          selectedMood={selectedMood}
          displayedCity={displayedCity}
          t={t}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Splash Screen */}
      {showSplash && isLocating && (
        <SplashScreen
          t={t}
          setShowSplash={setShowSplash}
          setDropdownOpen={setDropdownOpen}
        />
      )}
    </div>
  );
}
