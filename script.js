/* ==========================================================================
   TRADEMASTERY.IO - MOBILE INTERACTIVITY & HERO STRATEGY CHIP HANDLER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
      }
    });
  }
});

/* HERO STRATEGY CHIP SWITCHER HANDLER */
function switchHeroStrategy(strategy, button) {
  const chips = document.querySelectorAll('.hero-chip');
  chips.forEach(chip => chip.classList.remove('active'));
  button.classList.add('active');

  const subtitle = document.getElementById('heroSubtitleText');
  if (subtitle) {
    subtitle.style.opacity = '0';
    setTimeout(() => {
      if (strategy === 'wisdom') {
        subtitle.innerHTML = 'with courses crafted from 20 years of stock market experience';
      } else if (strategy === 'smc') {
        subtitle.innerHTML = 'with institutional SMC Order Block & Liquidity Sweep intraday strategies';
      } else if (strategy === 'wave') {
        subtitle.innerHTML = 'with Elliott Wave & Dow Theory multi-bagger stock trend analysis';
      }
      subtitle.style.opacity = '1';
    }, 200);
  }
}

/* CATEGORY FILTER CHIPS HANDLER */
function filterCategory(category, button) {
  const chips = document.querySelectorAll('.chip');
  chips.forEach(chip => chip.classList.remove('active'));
  button.classList.add('active');

  const courseCards = document.querySelectorAll('.course-card');
  courseCards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    if (category === 'all' || cardCategory === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

/* ABOUT STORY EXPANDABLE ACCORDION HANDLER */
function toggleAboutStory() {
  const hiddenText = document.getElementById('accordionFullText');
  const toggleBtn = document.getElementById('aboutToggleBtn');

  if (hiddenText && toggleBtn) {
    hiddenText.classList.toggle('expanded');
    if (hiddenText.classList.contains('expanded')) {
      toggleBtn.innerText = 'Show Less ↑';
    } else {
      toggleBtn.innerText = 'Read Full Story ↓';
    }
  }
}

/* FOOTER ACCORDION TOGGLE HANDLER */
function toggleFooterCol(button) {
  const list = button.nextElementSibling;
  const icon = button.querySelector('.acc-icon');
  
  if (list && list.classList.contains('accordion-footer-list')) {
    list.classList.toggle('expanded');
    if (list.classList.contains('expanded')) {
      icon.innerText = '−';
    } else {
      icon.innerText = '+';
    }
  }
}
