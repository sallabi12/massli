<template>
  <div class="page">
    <NavBar />
    <main class="layout">
      <section class="hero" id="solutions">
        <div class="badge">🚀 Website Coming Soon</div>
        <p class="eyebrow">MAASLI</p>
        <h1>AI-Powered Systems for Operational Analytics</h1>
        <p class="lede">
          We build custom AI and machine learning solutions that track your operations—production lines,
          quality control, employee performance, customer flow, and more. Every system is built for you,
          designed around what you actually need to track and improve.
        </p>
        <div class="hero-cta">
          <button class="primary"><a
            href="https://wa.me/905441054000"
            target="_blank"
            rel="noopener">Book a call</a></button>
          <button class="ghost">Request a Quote</button>
        </div>
        <div class="metrics">
          <div>
            <div class="metric-value">24/7</div>
            <div class="metric-label">Visibility</div>
          </div>
          <div>
            <div class="metric-value">Real-time</div>
            <div class="metric-label">Dashboards</div>
          </div>
          <div>
            <div class="metric-value">Monthly</div>
            <div class="metric-label">Analytics reports</div>
          </div>
        </div>
      </section>

      <section class="panel two-column" id="about">
        <div class="panel-head">
          <h2>What Is Maasli</h2>
          <p>We build custom AI and machine learning solutions that track your operations.</p>
          <p>Production lines, quality control, employee performance, customer flow—we measure whatever
            matters to your business. Every system is built specifically for you, designed around what you
            actually need to track and improve.</p>
        </div>
        <div class="list">
          <h4 class="list-title">What We Can Track</h4>
          <ul class="bullets">
            <li>Production output per machine or line</li>
            <li>Quality control and defect detection</li>
            <li>Employee efficiency and performance metrics</li>
            <li>Customer flow and wait times</li>
            <li>Inventory movement and stock levels</li>
            <li>Equipment utilization and downtime</li>
            <li>Packaging speed and accuracy</li>
            <li>Service times in retail or food service</li>
            <li>Crowd distribution in entertainment venues</li>
            <li>Safety compliance and protocol adherence</li>
          </ul>
        </div>
      </section>

      <section class="panel" id="features">
        <div class="panel-head">
          <h2>Key Features</h2>
        </div>
        <div class="cards">
          <article class="card">
            <h3>Full installation</h3>
            <p>Cameras, AI training, and on-site setup handled end-to-end.</p>
          </article>
          <article class="card">
            <h3>Custom-built</h3>
            <p>Designed for your facility and your specific needs—not generic software.</p>
          </article>
          <article class="card">
            <h3>Real-time dashboards</h3>
            <p>Stay ahead with live metrics that highlight bottlenecks and opportunities.</p>
          </article>
          <article class="card">
            <h3>Monthly analytics</h3>
            <p>Concise reports that translate data into decisions every month.</p>
          </article>
          <article class="card">
            <h3>Ongoing support</h3>
            <p>Continuous improvements, retraining, and responsive support from our team.</p>
          </article>
        </div>
      </section>

      <section class="panel contact" id="contact">
        <div>
          <h2>Contact Maasli</h2>
          <p>Email <a class="link" href="mailto:info@maasli.com">info@maasli.com</a></p>
          <p>Phone 0544 105 40 00</p>
        </div>
        <div class="contact-actions">
          <button class="primary">Talk with Maasli</button>
          <a
            class="whatsapp"
            href="https://wa.me/905441054000"
            target="_blank"
            rel="noopener"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </main>
    <footer class="footer">
      ©️ 2025 MAASLI | All rights reserved.
    </footer>
  </div>
</template>

<script setup>
import NavBar from './components/nav.vue'
</script>

<style scoped>
  button a{
    color: white;
    text-decoration: none;
    font-weight: 600;
    
}
.page {
  min-height: 100vh;
  color: #222222;
  background:
    radial-gradient(circle at 15% 15%, rgba(6, 167, 125, 0.08), transparent 26%),
    radial-gradient(circle at 80% 0%, rgba(34, 34, 34, 0.05), transparent 20%),
    linear-gradient(135deg, #ffffff 0%, #f1f3f6 45%, #ffffff 100%);
}

.layout {
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 26px 80px;
  display: flex;
  flex-direction: column;
  gap: 52px;
}

.hero {
  display: grid;
  gap: 18px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: #e8f8f2;
  color: #06a77d;
  border: 1px solid #b6e6d5;
  border-radius: 999px;
  font-weight: 700;
  font-size: 1.05rem;
  width: fit-content;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: #ffffff;
  border: 1px solid #d8dfe9;
  border-radius: 999px;
  color: #06a77d;
  font-size: 0.85rem;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  width: fit-content;
  font-family: 'MuseoModerno', 'League Spartan', sans-serif;
}

h1 {
  font-size: clamp(2.6rem, 4.5vw, 3.4rem);
  line-height: 1.1;
  letter-spacing: -0.5px;
  font-family: 'League Spartan', 'Montserrat', sans-serif;
}

.lede {
  color: #2f343a;
  font-size: 1.1rem;
  max-width: 640px;
}

.hero-cta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.primary,
.ghost {
  border-radius: 14px;
  padding: 14px 18px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.2s ease;
}

.primary {
  background: #06a77d;
  color: #ffffff;
  border: none;
  box-shadow: 0 12px 30px rgba(6, 167, 125, 0.25);
}

.primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 14px 36px rgba(6, 167, 125, 0.35);
}

.ghost {
  background: #f6f7fb;
  color: #222222;
  border: 1px solid #d8dfe9;
}

.ghost:hover {
  transform: translateY(-1px);
  background: #eef1f8;
}

.metrics {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
}

.metric-value {
  font-size: 1.4rem;
  font-weight: 800;
}

.metric-label {
  color: #4b5563;
}

.panel {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #e4e7ec;
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 24px 60px rgba(34, 34, 34, 0.08);
}

.panel-head {
  display: grid;
  gap: 6px;
  margin-bottom: 18px;
}

.panel h2 {
  font-size: 1.6rem;
  letter-spacing: -0.2px;
}

.panel p {
  color: #303641;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 14px;
}

.card {
  padding: 18px;
  border-radius: 16px;
  border: 1px solid #e1e7f1;
  background: linear-gradient(145deg, #fbfcfe, #f3f6fa);
  transition: transform 0.15s ease, box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.card-kicker {
  color: #06a77d;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.card h3 {
  margin-bottom: 6px;
  font-size: 1.2rem;
}

.card:hover {
  border-color: #06a77d;
  background: linear-gradient(145deg, #e8f8f2, #d5f1e9);
  box-shadow: 0 14px 32px rgba(6, 167, 125, 0.2);
  transform: translateY(-2px);
}

.card:active {
  transform: translateY(0);
}

.two-column {
  display: grid;
  gap: 16px;
  grid-template-columns: 1.1fr 1fr;
}

.list {
  display: grid;
  gap: 12px;
}

.list-title {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: #06a77d;
}

.bullets {
  display: grid;
  gap: 8px;
  padding-left: 18px;
  color: #222222;
}

.list-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  padding: 12px;
  border-radius: 12px;
  background: #f7f9fc;
  border: 1px solid #e2e7f1;
}

.list h4 {
  margin-bottom: 4px;
}

.list p {
  color: #303641;
}

.dot {
  width: 12px;
  height: 12px;
  background: #06a77d;
  border-radius: 50%;
  margin-top: 6px;
  box-shadow: 0 8px 18px rgba(6, 167, 125, 0.35);
}

.contact {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
}

.contact h2 {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.contact-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.contact .primary {
  white-space: nowrap;
}

.whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid #14b866;
  color: #0f172a;
  background: linear-gradient(135deg, #c2f8db, #8cf0bb);
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 10px 26px rgba(20, 184, 102, 0.25);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.whatsapp:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 30px rgba(20, 184, 102, 0.35);
}

.footer {
  text-align: center;
  padding: 18px 12px 32px;
  color: rgba(48, 54, 65, 0.65);
  font-size: 0.95rem;
}
.link{
  color: #06a77d;
  text-decoration: none;
  font-weight: 900;
}

@media (max-width: 640px) {
  .hero h1 {
    font-size: 2.1rem;
    line-height: 1.08;
  }
}

@media (min-width: 1400px) {
  .hero h1 {
    font-size: 3rem;
  }
}

@media (max-width: 900px) {
  .two-column {
    grid-template-columns: 1fr;
  }
}
</style>
