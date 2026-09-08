// Main Application Orchestrator
document.addEventListener("DOMContentLoaded", () => {
  const servicesGrid = document.getElementById("servicesGrid");
  const portfolioGrid = document.getElementById("portfolioGrid");

  if (servicesGrid && window.nexusData) {
    servicesGrid.innerHTML = window.nexusData.services.map(s => `
      <div class="card">
        <h3 style="color:#fff;margin-bottom:8px;">${s.title}</h3>
        <p style="color:#9ca3af;font-size:14px;">${s.desc}</p>
      </div>
    `).join("");
  }

  if (portfolioGrid && window.nexusData) {
    portfolioGrid.innerHTML = window.nexusData.portfolio.map(p => `
      <div class="card" style="border-left:3px solid #c084fc;">
        <h4 style="color:#fff;font-size:16px;">${p.title}</h4>
        <span style="color:#a855f7;font-size:12px;font-weight:bold;">${p.category}</span>
      </div>
    `).join("");
  }

  const btnContactModal = document.getElementById("btnContactModal");
  if (btnContactModal) {
    btnContactModal.addEventListener("click", () => {
      window.nexusUtils.showContactAlert("مرحباً بك! فريق DevMind AI الهندسي جاهز لخدمتك.");
    });
  }

  console.log("NexusTech Architecture Initialized with 8 Modular Files!");
});