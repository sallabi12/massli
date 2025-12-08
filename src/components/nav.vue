<template>
  <header class="nav-shell">
    <div class="nav">
      <div class="brand">
        <img class="logo" :src="logo" alt="Maasli.AI logo" />
        <div class="wordmark">Maas<span class="accent">li</span></div>
      </div>
    </div>
  </header>
</template>

<script setup>
import logo from '../assets/logo1.png'
</script>

<style scoped>
.nav-shell {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
  background: #e8f8f2;
  border-bottom: 1px solid #b6e6d5;
}

.nav {
  max-width: 1100px;
  margin: 0 auto;
  padding: 8px 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  text-align: center;
}

.brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #222222;
  font-weight: 700;
  letter-spacing: 0.4px;
}

.logo {
  height: 60px;
  width: auto;
}

.wordmark {
  font-size: 1.35rem;
  text-transform: uppercase;
  font-family: 'MuseoModerno', 'League Spartan', sans-serif;
}

:global(.dark) .nav-shell {
  background: #e8f8f2;
  border-bottom: 1px solid #b6e6d5;
}

:global(.dark) .brand {
  color: #0a1b14;
}

:global(.dark) .accent {
  color: #0a1b14;
}

.accent {
  color: #06a77d;
}
</style>
