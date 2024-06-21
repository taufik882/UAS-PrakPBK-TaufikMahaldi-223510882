<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-lg q-ma-md card-style">
      <q-card-section class="text-center">
        <div class="text-h5">Informasi Cuaca</div>
      </q-card-section>

      <q-card-section>
        <q-input
          filled
          v-model="location"
          label="Masukkan Lokasi"
          class="q-mb-md"
        />
        <q-btn
          label="Cari"
          color="primary"
          @click="fetchWeather"
          class="full-width btn-style"
        />
      </q-card-section>

      <q-card-section>
        <q-spinner v-if="loading" color="primary" size="50px"/>
        <div v-else>
          <div v-if="error" class="text-red">{{ error }}</div>
          <div v-else-if="weatherData" class="weather-info">
            <div class="info-title">Informasi Cuaca di <span class="location-name">{{ weatherData.name }}</span></div>
            <div class="info-row">
              <span class="info-label">Kondisi:</span>
              <span class="info-value">{{ weatherData.weather[0].description }}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Temperature:</span>
              <span class="info-value">{{ weatherData.main.temp }}°C</span>
            </div>
            <div class="info-row">
              <span class="info-label">Kelembaban:</span>
              <span class="info-value">{{ weatherData.main.humidity }}%</span>
            </div>
            <div class="info-row">
              <span class="info-label">Kecepatan Angin:</span>
              <span class="info-value">{{ weatherData.wind.speed }} m/s</span>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const location = ref('');
    const weatherData = ref(null);
    const loading = ref(false);
    const error = ref(null);

    const fetchWeather = async () => {
      loading.value = true;
      error.value = null;
      weatherData.value = null;

      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location.value}&appid=80e352db93cd54f3b6ffd95a7fefc5a5&units=metric`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        weatherData.value = data;
      } catch (err) {
        error.value = err.message;
        console.error('Fetch error:', err);
      } finally {
        loading.value = false;
      }
    };

    return { location, weatherData, loading, error, fetchWeather };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

.q-page {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0f7fa;
  min-height: 100vh;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
}

.q-card {
  max-width: 450px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: linear-gradient(135deg, #42a5f5, #7b1fa2);
  color: white;
}

.text-center {
  text-align: center;
}

.text-red {
  color: #ff1744;
}

.full-width {
  width: 100%;
}

.card-style {
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn-style {
  background-color: #ffffff;
  color: #1976D2;
}

.btn-style:hover {
  background-color: #e0f7fa;
}

.q-card-section {
  padding: 20px;
}

.q-input {
  font-size: 1rem;
}

.text-h5 {
  font-size: 1.5rem;
  font-weight: bold;
}

.weather-info {
  margin-top: 20px;
}

.info-title {
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.location-name {
  font-size: 1.25rem;
  font-weight: bold;
  color: #ffffff;
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.info-label {
  font-weight: 500;
}

.info-value {
  font-weight: 700;
}

.text-subtitle1 {
  font-size: 1.25rem;
  font-weight: 500;
}

.q-mb-md {
  margin-bottom: 20px;
}

/* Responsive Styling */
@media (max-width: 600px) {
  .q-card {
    padding: 10px;
  }

  .q-card-section {
    padding: 15px;
  }

  .info-title, .info-value {
    font-size: 1.1rem;
  }

  .info-label {
    font-size: 1rem;
  }
}
</style>
