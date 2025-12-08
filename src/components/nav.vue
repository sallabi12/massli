<template>
  <header class="nav-shell">
    <div class="nav">
      <button class="menu-toggle" type="button" @click="isMenuOpen = !isMenuOpen" aria-label="Toggle menu">
        <span :class="{ open: isMenuOpen }"></span>
      </button>
      <div class="brand">
        <img class="logo" :src="logo" alt="Maasli.AI logo" />
        <div class="wordmark">Maasli<span class="accent">.AI</span></div>
      </div>
      <nav class="links">
        <a href="#solutions">Solutions</a>
        <a href="#platform">Platform</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <button class="cta" type="button"><a
            href="https://wa.me/905441054000"
            target="_blank"
            rel="noopener"
          >Book a call</a></button>
    </div>
    <div class="mobile-menu" :class="{ open: isMenuOpen }">
      <a href="#solutions" @click="isMenuOpen = false">Solutions</a>
      <a href="#platform" @click="isMenuOpen = false">Platform</a>
      <a href="#about" @click="isMenuOpen = false">About</a>
      <a href="#contact" @click="isMenuOpen = false">Contact</a>
      <button class="cta" type="button">Book a call</button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import logo from '../assets/logo1.png'

const isMenuOpen = ref(false)
</script>

<style scoped>
.nav-shell {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.92);
  border-bottom: 1px solid #e2e8f0;
}

.nav {
  max-width: 1100px;
  margin: 0 auto;
  padding: 14px 28px;
  display: flex;
  align-items: center;
  gap: 18px;
}
a{
    color: white;
    text-decoration: none;
    font-weight: 600;
    
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #222222;
  font-weight: 700;
  letter-spacing: 0.4px;
}

.logo {
  height: 44px;
  width: auto;
}

.wordmark {
  font-size: 1rem;
  text-transform: uppercase;
  font-family: 'MuseoModerno', 'League Spartan', sans-serif;
}

.accent {
  color: #06a77d;
}

.menu-toggle {
  display: none;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  border: 1px solid #dfe5f0;
  background: #f6f8fb;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
}

.menu-toggle span,
.menu-toggle span::before,
.menu-toggle span::after {
  display: block;
  width: 18px;
  height: 2px;
  background: #0f172a;
  border-radius: 10px;
  position: relative;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.menu-toggle span::before,
.menu-toggle span::after {
  content: '';
  position: absolute;
  left: 0;
}

.menu-toggle span::before {
  top: -6px;
}

.menu-toggle span::after {
  top: 6px;
}

.menu-toggle span.open {
  transform: rotate(45deg);
}

.menu-toggle span.open::before {
  transform: rotate(90deg);
  top: 0;
}

.menu-toggle span.open::after {
  opacity: 0;
}

.links {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 18px;
  font-size: 0.95rem;
  margin-left: 18px;
}

.links a {
  color: #222222;
  text-decoration: none;
  padding: 8px 10px;
  border-radius: 12px;
  transition: color 0.2s ease, background 0.2s ease;
}

.links a:hover {
  color: #06a77d;
  background: #e8f8f2;
}

.cta {
  border: none;
  background: #06a77d;
  color: #ffffff;
  font-weight: 700;
  padding: 12px 16px;
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(6, 167, 125, 0.3);
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  margin-left: auto;
}

.cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 34px rgba(6, 167, 125, 0.38);
}

.cta:active {
  transform: translateY(0);
}

.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 10px;
  padding: 12px 20px 20px;
  background: rgba(255, 255, 255, 0.96);
  border-top: 1px solid #e2e8f0;
  text-align: left;
}

.mobile-menu a {
  padding: 12px 0;
  color: #0f172a;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid #e7ecf5;
}

.mobile-menu a:last-child {
  border-bottom: none;
}

.mobile-menu .cta {
  width: 100%;
  justify-content: center;
}

.mobile-menu.open {
  display: flex;
}

@media (max-width: 820px) {
  .nav {
    grid-template-columns: 1fr;
    grid-template-areas: 'brand';
    justify-items: center;
    text-align: center;
    position: relative;
    padding: 12px 20px;
    justify-content: center;
  }

  .brand {
    grid-area: brand;
    justify-content: center;
  }

  .links {
    grid-area: links;
    display: none;
  }

  .cta {
    display: none;
  }

  .menu-toggle {
    display: inline-flex;
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
