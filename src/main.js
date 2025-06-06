import './style.css'

// Comprehensive timeline data for Palestine/Israel region
const timelineData = [
  {
    id: 1,
    startYear: -10000,
    endYear: -8500,
    title: "Paleolítico Superior",
    subtitle: "Primeros asentamientos",
    description: "Cultura Natufiense - Primeros asentamientos sedentarios",
    details: "La cultura Natufiense (12,500-9,500 a.C.) marca la transición de sociedades cazadoras-recolectoras a comunidades más sedentarias. Desarrollaron las primeras aldeas permanentes y comenzaron la domesticación de plantas y animales. Sitios arqueológicos como Jericó muestran evidencia de estos primeros asentamientos en la región.",
    color: "#8B4513"
  },
  {
    id: 2,
    startYear: -8500,
    endYear: -4500,
    title: "Neolítico",
    subtitle: "Revolución Agrícola",
    description: "Desarrollo de la agricultura y ganadería",
    details: "Durante el Neolítico, la región experimentó la revolución agrícola. Se desarrollaron técnicas de cultivo de trigo, cebada y legumbres. La domesticación de cabras, ovejas y ganado transformó la sociedad. Jericó se convierte en una de las primeras ciudades amuralladas del mundo.",
    color: "#228B22"
  },
  {
    id: 3,
    startYear: -4500,
    endYear: -3200,
    title: "Calcolítico",
    subtitle: "Edad del Cobre",
    description: "Primeras herramientas de metal",
    details: "Introducción de la metalurgia del cobre. Desarrollo de sociedades más complejas con especialización laboral. Aparecen las primeras evidencias de comercio a larga distancia y estratificación social.",
    color: "#CD853F"
  },
  {
    id: 4,
    startYear: -3200,
    endYear: -2000,
    title: "Edad del Bronce",
    subtitle: "Ciudades-Estado Cananeas",
    description: "Desarrollo de ciudades-estado cananeas",
    details: "Florecimiento de las ciudades-estado cananeas como Megiddo, Hazor y Jericó. Desarrollo de sistemas de escritura, arquitectura monumental y redes comerciales extensas. Los cananeos establecen una cultura distintiva que influirá en toda la región.",
    color: "#B8860B"
  },
  {
    id: 5,
    startYear: -2000,
    endYear: -1200,
    title: "Patriarcas Bíblicos",
    subtitle: "Abraham, Isaac, Jacob",
    description: "Período de los patriarcas según la tradición bíblica",
    details: "Según las fuentes bíblicas, este período marca la llegada de Abraham a Canaán y el establecimiento de las primeras tradiciones hebreas. Las narrativas bíblicas sitúan aquí los orígenes del pueblo judío, aunque las evidencias arqueológicas de este período son objeto de debate académico.",
    color: "#4169E1"
  },
  {
    id: 6,
    startYear: -1200,
    endYear: -1000,
    title: "Edad del Hierro I",
    subtitle: "Pueblos del Mar y Filisteos",
    description: "Invasión de los Pueblos del Mar, asentamiento filisteo",
    details: "Llegada de los Pueblos del Mar, incluidos los filisteos, que se asientan en la costa. Colapso de las ciudades-estado cananeas. Emergen las primeras comunidades israelitas en las montañas centrales. Este período marca cambios demográficos y culturales significativos.",
    color: "#DC143C"
  },
  {
    id: 7,
    startYear: -1000,
    endYear: -586,
    title: "Reinos de Israel y Judá",
    subtitle: "David y Salomón",
    description: "Reino unificado y posterior división",
    details: "Establecimiento del reino unificado bajo David y Salomón, con Jerusalén como capital. Construcción del Primer Templo. Posterior división en Reino de Israel (norte) y Reino de Judá (sur). Desarrollo de la identidad nacional judía y consolidación de las tradiciones religiosas.",
    color: "#DAA520"
  },
  {
    id: 8,
    startYear: -586,
    endYear: -539,
    title: "Exilio Babilónico",
    subtitle: "Destrucción del Primer Templo",
    description: "Conquista babilónica y exilio",
    details: "Nabucodonosor II conquista Jerusalén, destruye el Primer Templo y deporta a la élite judía a Babilonia. Este período transforma profundamente el judaísmo, desarrollándose nuevas formas de práctica religiosa y identidad que no dependen del Templo.",
    color: "#8B0000"
  },
  {
    id: 9,
    startYear: -539,
    endYear: -332,
    title: "Período Persa",
    subtitle: "Retorno del Exilio",
    description: "Dominio persa y reconstrucción del Templo",
    details: "Ciro el Grande permite el retorno de los exiliados judíos. Reconstrucción del Segundo Templo bajo Zorobabel. Reformas de Esdras y Nehemías. Desarrollo del judaísmo del Segundo Templo con influencias persas en teología y práctica.",
    color: "#9932CC"
  },
  {
    id: 10,
    startYear: -332,
    endYear: -63,
    title: "Período Helenístico",
    subtitle: "Alejandro y los Macabeos",
    description: "Conquista griega y rebelión macabea",
    details: "Alejandro Magno conquista la región, introduciendo la cultura helenística. Después de su muerte, la región pasa entre los Ptolomeos y Seléucidas. La persecución de Antíoco IV provoca la revuelta macabea (167-160 a.C.), estableciendo la dinastía hasmonea y un período de independencia judía.",
    color: "#20B2AA"
  },
  {
    id: 11,
    startYear: -63,
    endYear: 324,
    title: "Período Romano",
    subtitle: "Herodes y las Revoltas",
    description: "Dominio romano, nacimiento del cristianismo",
    details: "Pompeyo conquista Jerusalén. Reinado de Herodes el Grande. Nacimiento y ministerio de Jesús. Destrucción del Segundo Templo (70 d.C.) y revuelta de Bar Kojba (132-135 d.C.). Dispersión judía y desarrollo del cristianismo primitivo.",
    color: "#B22222"
  },
  {
    id: 12,
    startYear: 0,
    endYear: 0,
    title: "AÑO 0",
    subtitle: "Punto de Referencia",
    description: "Transición BCE/CE",
    details: "Punto de referencia tradicional del calendario occidental, marcando la transición entre los períodos Antes de Cristo (a.C./BCE) y Después de Cristo (d.C./CE). Aunque históricamente el nacimiento de Jesús se sitúa algunos años antes, este punto sirve como referencia cronológica.",
    color: "#FFD700",
    isMarker: true
  },
  {
    id: 13,
    startYear: 324,
    endYear: 638,
    title: "Período Bizantino",
    subtitle: "Cristianismo Imperial",
    description: "Imperio Bizantino cristiano",
    details: "Constantino legaliza el cristianismo y la región se convierte en centro de peregrinaje cristiano. Construcción de iglesias importantes como la del Santo Sepulcro. Desarrollo del cristianismo palestino y siríaco. Conflictos con el Imperio Sasánida.",
    color: "#9370DB"
  },
  {
    id: 14,
    startYear: 638,
    endYear: 1099,
    title: "Conquista Árabe",
    subtitle: "Califatos Omeya y Abasí",
    description: "Islamización de la región",
    details: "El califa Umar ibn al-Jattab conquista Jerusalén. Construcción de la Cúpula de la Roca (691) y la mezquita de Al-Aqsa. Arabización e islamización gradual de la población. La región se convierte en parte del mundo islámico bajo diferentes califatos.",
    color: "#006400"
  },
  {
    id: 15,
    startYear: 1099,
    endYear: 1291,
    title: "Cruzadas",
    subtitle: "Estados Cruzados",
    description: "Reino Latino de Jerusalén",
    details: "Las Cruzadas establecen estados cristianos en Tierra Santa. Reino de Jerusalén, Principado de Antioquía, Condado de Edesa y Trípoli. Saladino reconquista Jerusalén (1187). Interacción compleja entre culturas cristiana, musulmana y judía.",
    color: "#8B0000"
  },
  {
    id: 16,
    startYear: 1291,
    endYear: 1517,
    title: "Período Mameluco",
    subtitle: "Dinastía Ayubí y Mamelucos",
    description: "Dominio mameluco desde Egipto",
    details: "Los mamelucos expulsan definitivamente a los cruzados. La región se convierte en provincia del Sultanato Mameluco de Egipto. Período de relativa estabilidad con desarrollo de la arquitectura islámica y renovación de Jerusalén.",
    color: "#8B4513"
  },
  {
    id: 17,
    startYear: 1517,
    endYear: 1917,
    title: "Imperio Otomano",
    subtitle: "400 años otomanos",
    description: "Dominio otomano",
    details: "Selim I conquista la región para el Imperio Otomano. Desarrollo del sistema de millet para las comunidades religiosas. Inmigración judía sefardí después de 1492. En el siglo XIX, primeras olas de inmigración sionista (Aliyah) y despertar del nacionalismo árabe.",
    color: "#800000"
  },
  {
    id: 18,
    startYear: 1917,
    endYear: 1948,
    title: "Mandato Británico",
    subtitle: "Declaración Balfour",
    description: "Administración británica",
    details: "Declaración Balfour (1917) promete un 'hogar nacional judío'. La Sociedad de Naciones otorga el Mandato sobre Palestina a Gran Bretaña. Inmigración judía masiva, especialmente durante los años 1930s debido al Holocausto. Crecimiento del nacionalismo palestino y conflictos intercomunales.",
    color: "#4169E1"
  },
  {
    id: 19,
    startYear: 1948,
    endYear: 2024,
    title: "Israel/Palestina",
    subtitle: "Conflicto Contemporáneo",
    description: "Establecimiento de Israel y conflicto actual",
    details: "Proclamación del Estado de Israel (14 mayo 1948) y primera guerra árabe-israelí. Nakba palestina. Guerras de 1967 y 1973. Acuerdos de Oslo (1993-1995). Segunda Intifada (2000-2005). Situación actual con Gaza, Cisjordania y cuestiones de estatus final pendientes.",
    color: "#FF4500"
  }
];

class Timeline {
  constructor() {
    this.container = document.getElementById('timeline-container');
    this.detailsContainer = document.getElementById('details-container');
    this.currentIndex = 0;
    this.visibleCards = 3;
    this.init();
  }

  init() {
    this.render();
    this.showInitialMessage();
    this.updateTimeline();
  }

  showInitialMessage() {
    this.detailsContainer.innerHTML = `
      <div class="initial-message">
        <h2>Explora la Historia de la Región</h2>
        <p>Navega por los períodos históricos usando las flechas o haciendo clic en las tarjetas.</p>
        <p>La línea de tiempo de la derecha se actualiza dinámicamente mostrando el contexto temporal del período seleccionado.</p>
      </div>
    `;
  }

  calculateTimelinePosition(year, selectedEvent) {
    // Calculate relative position based on selected period context
    const padding = Math.abs(selectedEvent.endYear - selectedEvent.startYear) * 2;
    const minYear = Math.min(selectedEvent.startYear - padding, -100);
    const maxYear = Math.max(selectedEvent.endYear + padding, 100);
    
    // Ensure year 0 is always included in view
    const finalMinYear = Math.min(minYear, -100);
    const finalMaxYear = Math.max(maxYear, 100);
    
    const totalRange = finalMaxYear - finalMinYear;
    const yearFromMin = year - finalMinYear;
    return (yearFromMin / totalRange) * 100;
  }

  render() {
    this.container.innerHTML = `
      <div class="cards-panel">
        <div class="cards-navigation">
          <button class="nav-button" id="nav-up">▲</button>
          <div class="cards-viewport">
            <div class="cards-container" id="cards-container">
              ${this.renderCards()}
            </div>
          </div>
          <button class="nav-button" id="nav-down">▼</button>
        </div>
      </div>
      
      <div class="indicator-panel">
        <div class="timeline-indicator"></div>
      </div>
      
      <div class="timeline-panel">
        <div class="timeline-header">
          <div class="timeline-title" id="timeline-title">Contexto Temporal</div>
          <div class="timeline-period" id="timeline-period">Selecciona un período</div>
        </div>
        <div class="timeline-axis-container">
          <div class="timeline-axis"></div>
          <div class="year-zero-marker">
            <div class="year-zero-circle"></div>
            <div class="year-zero-label">AÑO 0</div>
          </div>
          <div id="period-markers"></div>
        </div>
      </div>
    `;

    this.setupNavigation();
    this.updateCarousel();
    this.selectCard(0);
  }

  renderCards() {
    const nonMarkerEvents = timelineData.filter(event => !event.isMarker);
    return nonMarkerEvents.map((event, index) => `
      <div class="period-card" data-index="${index}" style="border-left: 4px solid ${event.color};">
        <div class="card-period">${this.formatYear(event.startYear)} - ${this.formatYear(event.endYear)}</div>
        <div class="card-title">${event.title}</div>
        <div class="card-subtitle">${event.subtitle}</div>
      </div>
    `).join('');
  }

  setupNavigation() {
    const navUp = document.getElementById('nav-up');
    const navDown = document.getElementById('nav-down');
    const cardsContainer = document.getElementById('cards-container');

    navUp.addEventListener('click', () => this.navigateUp());
    navDown.addEventListener('click', () => this.navigateDown());

    // Add click handlers to cards
    cardsContainer.addEventListener('click', (e) => {
      const card = e.target.closest('.period-card');
      if (card) {
        const index = parseInt(card.dataset.index);
        this.selectCard(index);
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      const isMobile = window.innerWidth <= 1200;
      
      if ((!isMobile && e.key === 'ArrowUp') || (isMobile && e.key === 'ArrowLeft')) {
        e.preventDefault();
        this.navigateUp();
      } else if ((!isMobile && e.key === 'ArrowDown') || (isMobile && e.key === 'ArrowRight')) {
        e.preventDefault();
        this.navigateDown();
      }
    });

    // Handle window resize to update layout
    window.addEventListener('resize', () => {
      this.updateCarousel();
    });

    // Touch/swipe support for mobile
    this.setupTouchNavigation(cardsContainer);
  }

  setupTouchNavigation(container) {
    let startX = 0;
    let startY = 0;
    let threshold = 50;

    container.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = startX - endX;
      const diffY = startY - endY;
      const isMobile = window.innerWidth <= 1200;

      // Determine swipe direction based on layout
      if (isMobile) {
        // Horizontal swipe for mobile
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > threshold) {
          if (diffX > 0) {
            this.navigateDown(); // Swipe left = next
          } else {
            this.navigateUp(); // Swipe right = previous
          }
        }
      } else {
        // Vertical swipe for desktop
        if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > threshold) {
          if (diffY > 0) {
            this.navigateDown(); // Swipe up = next
          } else {
            this.navigateUp(); // Swipe down = previous
          }
        }
      }
    }, { passive: true });
  }

  navigateUp() {
    const nonMarkerEvents = timelineData.filter(event => !event.isMarker);
    if (this.currentIndex > 0) {
      this.selectCard(this.currentIndex - 1);
    }
  }

  navigateDown() {
    const nonMarkerEvents = timelineData.filter(event => !event.isMarker);
    if (this.currentIndex < nonMarkerEvents.length - 1) {
      this.selectCard(this.currentIndex + 1);
    }
  }

  selectCard(index) {
    const nonMarkerEvents = timelineData.filter(event => !event.isMarker);
    if (index < 0 || index >= nonMarkerEvents.length) return;

    this.currentIndex = index;
    this.updateCarousel();
    this.updateTimeline();
    this.showEventDetails(nonMarkerEvents[index]);
  }

  updateCarousel() {
    const cardsContainer = document.getElementById('cards-container');
    const cards = cardsContainer.querySelectorAll('.period-card');
    
    // Remove active class from all cards
    cards.forEach(card => card.classList.remove('active'));
    
    // Add active class to current card
    if (cards[this.currentIndex]) {
      cards[this.currentIndex].classList.add('active');
    }

    // Check if we're in mobile mode (horizontal layout)
    const isMobile = window.innerWidth <= 1200;
    
    if (isMobile) {
      // Horizontal scrolling for mobile
      const cardWidth = 260; // 240px min-width + 20px gap
      const viewportWidth = cardsContainer.parentElement.offsetWidth;
      const centerOffset = (viewportWidth / 2) - (cardWidth / 2);
      const translateX = centerOffset - (this.currentIndex * cardWidth);
      
      cardsContainer.style.transform = `translateX(${translateX}px)`;
    } else {
      // Vertical scrolling for desktop
      const cardHeight = 136; // 120px min-height + 16px gap
      const viewportHeight = 400;
      const centerOffset = (viewportHeight / 2) - (cardHeight / 2);
      const translateY = centerOffset - (this.currentIndex * cardHeight);
      
      cardsContainer.style.transform = `translateY(${translateY}px)`;
    }

    // Update navigation button states
    const navUp = document.getElementById('nav-up');
    const navDown = document.getElementById('nav-down');
    const nonMarkerEvents = timelineData.filter(event => !event.isMarker);
    
    if (navUp && navDown) {
      navUp.style.opacity = this.currentIndex === 0 ? '0.5' : '1';
      navDown.style.opacity = this.currentIndex === nonMarkerEvents.length - 1 ? '0.5' : '1';
      
      // Update button labels for mobile
      if (isMobile) {
        navUp.innerHTML = '◀';
        navDown.innerHTML = '▶';
        navUp.title = 'Anterior';
        navDown.title = 'Siguiente';
      } else {
        navUp.innerHTML = '▲';
        navDown.innerHTML = '▼';
        navUp.title = 'Arriba';
        navDown.title = 'Abajo';
      }
    }
  }

  updateTimeline() {
    const nonMarkerEvents = timelineData.filter(event => !event.isMarker);
    const selectedEvent = nonMarkerEvents[this.currentIndex];
    
    if (!selectedEvent) return;

    // Update timeline header
    document.getElementById('timeline-title').textContent = selectedEvent.title;
    document.getElementById('timeline-period').textContent = 
      `${this.formatYear(selectedEvent.startYear)} - ${this.formatYear(selectedEvent.endYear)}`;

    // Update year 0 position
    const yearZeroMarker = document.querySelector('.year-zero-marker');
    const zeroPosition = this.calculateTimelinePosition(0, selectedEvent);
    yearZeroMarker.style.top = `${zeroPosition}%`;

    // Update period markers
    this.updatePeriodMarkers(selectedEvent);
  }

  updatePeriodMarkers(selectedEvent) {
    const markersContainer = document.getElementById('period-markers');
    markersContainer.innerHTML = '';

    // Add marker for selected period
    const selectedMarker = document.createElement('div');
    selectedMarker.className = 'period-marker active';
    selectedMarker.style.backgroundColor = selectedEvent.color;
    
    const startPos = this.calculateTimelinePosition(selectedEvent.startYear, selectedEvent);
    const endPos = this.calculateTimelinePosition(selectedEvent.endYear, selectedEvent);
    const midPos = (startPos + endPos) / 2;
    
    selectedMarker.style.top = `${midPos}%`;
    selectedMarker.innerHTML = `<div class="period-label">${selectedEvent.title}</div>`;
    
    markersContainer.appendChild(selectedMarker);

    // Add markers for contemporary periods (overlapping in time)
    const nonMarkerEvents = timelineData.filter(event => !event.isMarker && event.id !== selectedEvent.id);
    
    nonMarkerEvents.forEach(event => {
      // Check if periods overlap
      const hasOverlap = !(event.endYear < selectedEvent.startYear || event.startYear > selectedEvent.endYear);
      
      if (hasOverlap) {
        const marker = document.createElement('div');
        marker.className = 'period-marker';
        marker.style.backgroundColor = event.color;
        
        const eventStartPos = this.calculateTimelinePosition(event.startYear, selectedEvent);
        const eventEndPos = this.calculateTimelinePosition(event.endYear, selectedEvent);
        const eventMidPos = (eventStartPos + eventEndPos) / 2;
        
        // Only show if it's within visible range
        if (eventMidPos >= 0 && eventMidPos <= 100) {
          marker.style.top = `${eventMidPos}%`;
          marker.innerHTML = `<div class="period-label">${event.title}</div>`;
          markersContainer.appendChild(marker);
        }
      }
    });
  }

  formatYear(year) {
    if (year < 0) {
      return `${Math.abs(year)} a.C.`;
    } else if (year === 0) {
      return '0';
    } else {
      return `${year} d.C.`;
    }
  }

  showEventDetails(event) {
    this.detailsContainer.innerHTML = `
      <div class="event-details">
        <div class="details-header" style="border-left-color: ${event.color};">
          <h2>${event.title}</h2>
          <div class="details-period">${this.formatYear(event.startYear)} - ${this.formatYear(event.endYear)}</div>
          <div class="details-subtitle">${event.subtitle}</div>
        </div>
        <div class="details-content">
          <p><strong>Resumen:</strong> ${event.description}</p>
          <div class="details-full">
            ${event.details}
          </div>
        </div>
      </div>
    `;
  }
}

// Enhanced mobile carousel functionality
let currentCardIndex = 0;
let isCarouselDragging = false;
let startX = 0;
let currentX = 0;
let startTransform = 0;
let cardsContainer = null;
let cardWidth = 0;
let visibleCards = 0;

// Header collapse functionality
function initializeHeader() {
  const header = document.querySelector('header');
  const toggleButton = document.createElement('button');
  toggleButton.className = 'header-toggle';
  toggleButton.textContent = '▼';
  toggleButton.setAttribute('aria-label', 'Ocultar título');
  
  header.appendChild(toggleButton);
  
  let isCollapsed = false;
  
  function toggleHeader() {
    isCollapsed = !isCollapsed;
    header.classList.toggle('collapsed', isCollapsed);
    toggleButton.textContent = isCollapsed ? '▲' : '▼';
    toggleButton.setAttribute('aria-label', isCollapsed ? 'Mostrar título' : 'Ocultar título');
  }
  
  toggleButton.addEventListener('click', toggleHeader);
  header.addEventListener('click', (e) => {
    if (isCollapsed && e.target !== toggleButton) {
      toggleHeader();
    }
  });
  
  // Auto-collapse after first interaction
  let hasInteracted = false;
  document.addEventListener('click', () => {
    if (!hasInteracted && window.innerWidth <= 768) {
      hasInteracted = true;
      setTimeout(() => {
        if (!isCollapsed) {
          toggleHeader();
        }
      }, 3000);
    }
  }, { once: true });
}

function initializeCarousel() {
  if (window.innerWidth > 1200) return;
  
  cardsContainer = document.querySelector('.cards-container');
  const cards = document.querySelectorAll('.period-card');
  const navPrev = document.querySelector('.nav-prev');
  const navNext = document.querySelector('.nav-next');
  const viewport = document.querySelector('.cards-viewport');
  
  if (!cardsContainer || !cards.length) return;
  
  // Calculate card dimensions
  cardWidth = 280 + 20; // card width + gap
  if (window.innerWidth <= 480) {
    cardWidth = 240 + 16;
  } else if (window.innerWidth <= 768) {
    cardWidth = 260 + 16;
  }
  
  visibleCards = Math.floor(viewport.offsetWidth / cardWidth);
  
  // Center the first card initially
  updateCarousel(0, true);
  
  // Navigation buttons
  navPrev?.addEventListener('click', () => navigateCarousel(-1));
  navNext?.addEventListener('click', () => navigateCarousel(1));
  
  // Touch/mouse events for smooth dragging
  let isDragging = false;
  let startPos = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationId = 0;
  
  cardsContainer.addEventListener('touchstart', touchStart, { passive: false });
  cardsContainer.addEventListener('touchmove', touchMove, { passive: false });
  cardsContainer.addEventListener('touchend', touchEnd);
  
  cardsContainer.addEventListener('mousedown', touchStart);
  cardsContainer.addEventListener('mousemove', touchMove);
  cardsContainer.addEventListener('mouseup', touchEnd);
  cardsContainer.addEventListener('mouseleave', touchEnd);
  
  // Prevent context menu on long press
  cardsContainer.addEventListener('contextmenu', e => e.preventDefault());
  
  function touchStart(event) {
    isDragging = true;
    cardsContainer.classList.add('dragging');
    
    startPos = getPositionX(event);
    animationId = requestAnimationFrame(animation);
    cardsContainer.style.cursor = 'grabbing';
    
    // Prevent text selection
    event.preventDefault();
  }
  
  function touchMove(event) {
    if (!isDragging) return;
    
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;
    
    // Add resistance at boundaries
    const maxTranslate = 0;
    const minTranslate = -(cards.length - 1) * cardWidth;
    
    if (currentTranslate > maxTranslate) {
      currentTranslate = maxTranslate + (currentTranslate - maxTranslate) * 0.3;
    } else if (currentTranslate < minTranslate) {
      currentTranslate = minTranslate + (currentTranslate - minTranslate) * 0.3;
    }
  }
  
  function touchEnd() {
    isDragging = false;
    cardsContainer.classList.remove('dragging');
    cardsContainer.style.cursor = 'grab';
    
    cancelAnimationFrame(animationId);
    
    // Calculate which card to snap to
    const movedBy = currentTranslate - prevTranslate;
    const threshold = cardWidth * 0.2;
    
    if (Math.abs(movedBy) > threshold) {
      if (movedBy > 0 && currentCardIndex > 0) {
        currentCardIndex--;
      } else if (movedBy < 0 && currentCardIndex < cards.length - 1) {
        currentCardIndex++;
      }
    }
    
    updateCarousel(currentCardIndex, true);
    prevTranslate = currentTranslate;
  }
  
  function getPositionX(event) {
    return event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
  }
  
  function animation() {
    if (isDragging) {
      cardsContainer.style.transform = `translateX(${currentTranslate}px)`;
      requestAnimationFrame(animation);
    }
  }
  
  // Card click to center
  cards.forEach((card, index) => {
    card.addEventListener('click', (e) => {
      if (!isDragging) {
        navigateToCard(index);
        e.preventDefault();
      }
    });
  });
  
  // Update scroll indicators
  function updateScrollIndicators() {
    if (!viewport) return;
    
    viewport.classList.toggle('scroll-start', currentCardIndex === 0);
    viewport.classList.toggle('scroll-end', currentCardIndex === cards.length - 1);
  }
  
  function navigateCarousel(direction) {
    const newIndex = Math.max(0, Math.min(cards.length - 1, currentCardIndex + direction));
    navigateToCard(newIndex);
  }
  
  function navigateToCard(index) {
    currentCardIndex = index;
    updateCarousel(index, true);
    
    // Update active period
    const activeCard = cards[index];
    if (activeCard) {
      const periodId = activeCard.dataset.period;
      if (periodId && window.showPeriodDetails) {
        window.showPeriodDetails(periodId);
      }
    }
  }
  
  function updateCarousel(index, animate = false) {
    if (!cardsContainer || !cards.length) return;
    
    currentCardIndex = Math.max(0, Math.min(cards.length - 1, index));
    
    // Calculate center position
    const viewportWidth = viewport.offsetWidth;
    const containerWidth = cardsContainer.scrollWidth;
    const cardPosition = currentCardIndex * cardWidth;
    const centerOffset = (viewportWidth - (window.innerWidth <= 480 ? 240 : window.innerWidth <= 768 ? 260 : 280)) / 2;
    
    let translateX = centerOffset - cardPosition;
    
    // Ensure we don't over-scroll
    const maxTranslate = 0;
    const minTranslate = viewportWidth - containerWidth;
    translateX = Math.max(minTranslate, Math.min(maxTranslate, translateX));
    
    if (animate) {
      cardsContainer.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    } else {
      cardsContainer.style.transition = 'none';
    }
    
    cardsContainer.style.transform = `translateX(${translateX}px)`;
    currentTranslate = prevTranslate = translateX;
    
    // Update card states
    cards.forEach((card, i) => {
      card.classList.remove('active', 'adjacent');
      if (i === currentCardIndex) {
        card.classList.add('active');
      } else if (Math.abs(i - currentCardIndex) === 1) {
        card.classList.add('adjacent');
      }
    });
    
    // Update navigation buttons
    if (navPrev) {
      navPrev.disabled = currentCardIndex === 0;
    }
    if (navNext) {
      navNext.disabled = currentCardIndex === cards.length - 1;
    }
    
    updateScrollIndicators();
    
    // Reset transition after animation
    if (animate) {
      setTimeout(() => {
        if (cardsContainer) {
          cardsContainer.style.transition = '';
        }
      }, 400);
    }
  }
  
  // Handle resize
  window.addEventListener('resize', debounce(() => {
    if (window.innerWidth <= 1200) {
      // Recalculate dimensions
      cardWidth = window.innerWidth <= 480 ? 256 : window.innerWidth <= 768 ? 276 : 300;
      updateCarousel(currentCardIndex, false);
    }
  }, 250));
}

// Utility function for debouncing
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Enhanced period card synchronization
function updatePeriodCardSync() {
  const cards = document.querySelectorAll('.period-card');
  const timelineLabels = document.querySelectorAll('.period-label');
  
  // Ensure the active card matches the timeline
  cards.forEach((card, index) => {
    const isActive = card.classList.contains('active');
    const correspondingLabel = Array.from(timelineLabels).find(label => 
      label.dataset.period === card.dataset.period
    );
    
    if (correspondingLabel) {
      correspondingLabel.classList.toggle('active', isActive);
    }
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeHeader();
  
  // Delay carousel initialization to ensure proper sizing
  setTimeout(() => {
    initializeCarousel();
  }, 100);
  
  // Add intersection observer for smooth animations
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.period-card, .timeline-panel').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      observer.observe(el);
    });
  }
});

// Initialize the timeline when the page loads
document.addEventListener('DOMContentLoaded', () => {
  new Timeline();
});
