<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <q-avatar>
            <img src="./assets/logo.png">
          </q-avatar>
          Weather Widget
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered class="bg-grey-2">
      <q-list>
        <q-item clickable @click="navigateTo('/weather')">
          <q-item-section avatar>
            <q-icon name="cloud_queue" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Weather</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="navigateToExternal('https://taufik-project-cv.vercel.app/')">
          <q-item-section avatar>
            <q-icon name="assignment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tugas1</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="navigateToExternal('https://taufik-project-tugas2.vercel.app/')">
          <q-item-section avatar>
            <q-icon name="assignment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tugas2</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="navigateToExternal('https://tugas3-pbk-223510882.vercel.app/')">
          <q-item-section avatar>
            <q-icon name="assignment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tugas3</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="navigateToExternal('https://tugas4-223510882-taufik.vercel.app/')">
          <q-item-section avatar>
            <q-icon name="assignment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tugas4</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="navigateToExternal('https://tugas5-223510882-taufik.vercel.app/')">
          <q-item-section avatar>
            <q-icon name="assignment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tugas5</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="navigateToExternal('https://taufik-tugas6.netlify.app/')">
          <q-item-section avatar>
            <q-icon name="assignment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tugas6</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="navigateToExternal('https://todoapps-sand.vercel.app/')">
          <q-item-section avatar>
            <q-icon name="assignment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tugas7</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    <q-footer reveal elevated class="footer">
      <q-toolbar>
        <q-toolbar-title class="footer-title">
          <div class="footer-content">
            <div>Created by Taufik Mahaldi</div>
            <div>&copy; 2024 Weather Widget. All rights reserved.</div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    navigateToExternal(url) {
      window.open(url, '_blank');
    },
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

.q-header {
  background-color: #1e88e5;
}
.q-toolbar-title {
  font-weight: bold;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
}
.q-toolbar-title q-avatar {
  margin-right: 10px;
}
.q-btn {
  color: white;
}
.q-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transition: background-color 0.3s ease;
}
.q-drawer {
  background-color: #5c6bc0;
  color: white;
}
.q-drawer .q-item {
  color: #d1c4e9;
}
.q-drawer .q-item:hover {
  background-color: #3949ab;
  transition: background-color 0.3s ease;
}
.q-footer {
  background-color: #303f9f;
  color: white;
}
.q-footer .q-toolbar-title {
  font-weight: bold;
  font-size: 1.2rem;
}
.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.q-item-label {
  color: #e8eaf6;
}
.q-item:hover .q-item-label {
  color: #d1c4e9;
}
@media (max-width: 600px) {
  .q-toolbar-title span {
    display: none;
  }
  .q-btn {
    font-size: 0.8rem;
  }
  .q-btn-dropdown {
    width: 100%;
    text-align: center;
  }
}
</style>
