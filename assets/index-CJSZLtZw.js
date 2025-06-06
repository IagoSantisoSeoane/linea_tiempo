(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const g=[{id:1,title:"Período Ancestral",subtitle:"Los primeros pobladores",startYear:-1e4,endYear:-3e3,details:"Los primeros grupos humanos llegaron a la región hace aproximadamente 12,000 años, estableciendo comunidades nómadas que se dedicaban principalmente a la caza y recolección.",mapData:{title:"Asentamientos Ancestrales",description:"Principales sitios arqueológicos del período ancestral en la región",sites:[{name:"Cueva de los Primeros",lat:32.5,lng:-35.2,type:"archaeological"},{name:"Campamento Nómada Norte",lat:33.1,lng:-34.8,type:"settlement"},{name:"Sitio de Caza Mayor",lat:31.8,lng:-35.5,type:"hunting"}]}},{id:2,title:"Civilización Antigua",subtitle:"El florecimiento de las primeras ciudades",startYear:-3e3,endYear:-500,details:"Durante este período se establecieron las primeras ciudades permanentes, con sistemas de irrigación avanzados y estructuras sociales complejas que sentaron las bases de la civilización posterior.",mapData:{title:"Ciudades Antiguas",description:"Principales centros urbanos y sitios ceremoniales del período clásico",sites:[{name:"Ciudad Real Antigua",lat:32.2,lng:-35,type:"city"},{name:"Templo del Sol",lat:32,lng:-34.9,type:"temple"},{name:"Puerto Comercial",lat:31.9,lng:-34.7,type:"trade"},{name:"Fortaleza de la Colina",lat:32.4,lng:-35.3,type:"fortress"}]}},{id:3,title:"Imperio Clásico",subtitle:"La edad dorada",startYear:-500,endYear:400,details:"El período de mayor esplendor cultural y territorial, caracterizado por grandes construcciones, avances en ciencias y artes, y un sistema político altamente desarrollado.",mapData:{title:"El Gran Imperio",description:"Extensión territorial y principales centros del imperio en su apogeo",sites:[{name:"Capital Imperial",lat:32.3,lng:-35.1,type:"capital"},{name:"Universidad Real",lat:32.1,lng:-35,type:"academy"},{name:"Gran Coliseo",lat:32.2,lng:-35.2,type:"entertainment"},{name:"Acueducto Mayor",lat:32,lng:-34.8,type:"infrastructure"},{name:"Biblioteca Imperial",lat:32.3,lng:-35,type:"academy"}]}},{id:4,title:"Período de Transición",subtitle:"Cambios y transformaciones",startYear:400,endYear:1e3,details:"Una época de grandes cambios sociales y culturales, marcada por migraciones, nuevas influencias culturales y la gradual transformación de las estructuras políticas tradicionales."},{id:5,startYear:-1e4,endYear:-8500,title:"Paleolítico Superior",subtitle:"Primeros asentamientos",description:"Cultura Natufiense - Primeros asentamientos sedentarios",details:"La cultura Natufiense (12,500-9,500 a.C.) marca la transición de sociedades cazadoras-recolectoras a comunidades más sedentarias. Desarrollaron las primeras aldeas permanentes y comenzaron la domesticación de plantas y animales. Sitios arqueológicos como Jericó muestran evidencia de estos primeros asentamientos en la región.",color:"#8B4513",mapData:{title:"Asentamientos Natufienses",description:"Principales sitios arqueológicos del período Natufiense",sites:[{name:"Jericó",lat:31.86,lng:35.44,type:"asentamiento"},{name:"Ein Mallaha",lat:33.07,lng:35.57,type:"aldea"},{name:"Nahal Oren",lat:32.73,lng:34.97,type:"cueva"}]}},{id:6,startYear:-8500,endYear:-4500,title:"Neolítico",subtitle:"Revolución Agrícola",description:"Desarrollo de la agricultura y ganadería",details:"Durante el Neolítico, la región experimentó la revolución agrícola. Se desarrollaron técnicas de cultivo de trigo, cebada y legumbres. La domesticación de cabras, ovejas y ganado transformó la sociedad. Jericó se convierte en una de las primeras ciudades amuralladas del mundo.",color:"#228B22",mapData:{title:"Centros Agrícolas Neolíticos",description:"Primeros centros de agricultura y domesticación",sites:[{name:"Jericó",lat:31.86,lng:35.44,type:"ciudad"},{name:"Ain Ghazal",lat:31.95,lng:35.93,type:"asentamiento"},{name:"Beidha",lat:30.35,lng:35.45,type:"aldea"}]}},{id:7,startYear:-4500,endYear:-3200,title:"Calcolítico",subtitle:"Edad del Cobre",description:"Primeras herramientas de metal",details:"Introducción de la metalurgia del cobre. Desarrollo de sociedades más complejas con especialización laboral. Aparecen las primeras evidencias de comercio a larga distancia y estratificación social.",color:"#CD853F",mapData:{title:"Sitios Calcolíticos",description:"Centros de metalurgia temprana",sites:[{name:"Teleilat Ghassul",lat:31.89,lng:35.62,type:"metalurgia"},{name:"Beer Sheva",lat:31.25,lng:34.79,type:"centro"},{name:"En-Gedi",lat:31.46,lng:35.39,type:"templo"}]}},{id:8,startYear:-3200,endYear:-2e3,title:"Edad del Bronce",subtitle:"Ciudades-Estado Cananeas",description:"Desarrollo de ciudades-estado cananeas",details:"Florecimiento de las ciudades-estado cananeas como Megiddo, Hazor y Jericó. Desarrollo de sistemas de escritura, arquitectura monumental y redes comerciales extensas. Los cananeos establecen una cultura distintiva que influirá en toda la región.",color:"#B8860B",mapData:{title:"Ciudades-Estado Cananeas",description:"Principales centros urbanos de la Edad del Bronce",sites:[{name:"Hazor",lat:33.02,lng:35.57,type:"ciudad"},{name:"Megiddo",lat:32.58,lng:35.18,type:"ciudad"},{name:"Jericó",lat:31.86,lng:35.44,type:"ciudad"},{name:"Laquis",lat:31.56,lng:34.85,type:"ciudad"}]}},{id:9,startYear:-2e3,endYear:-1200,title:"Patriarcas Bíblicos",subtitle:"Abraham, Isaac, Jacob",description:"Período de los patriarcas según la tradición bíblica",details:"Según las fuentes bíblicas, este período marca la llegada de Abraham a Canaán y el establecimiento de las primeras tradiciones hebreas. Las narrativas bíblicas sitúan aquí los orígenes del pueblo judío, aunque las evidencias arqueológicas de este período son objeto de debate académico.",color:"#4169E1",mapData:{title:"Rutas de los Patriarcas",description:"Lugares asociados con las narrativas patriarcales",sites:[{name:"Hebrón",lat:31.53,lng:35.11,type:"patriarcal"},{name:"Beerseba",lat:31.25,lng:34.79,type:"patriarcal"},{name:"Betel",lat:31.93,lng:35.22,type:"patriarcal"},{name:"Siquem",lat:32.21,lng:35.29,type:"patriarcal"}]}},{id:10,startYear:-1200,endYear:-1e3,title:"Edad del Hierro I",subtitle:"Pueblos del Mar y Filisteos",description:"Invasión de los Pueblos del Mar, asentamiento filisteo",details:"Llegada de los Pueblos del Mar, incluidos los filisteos, que se asientan en la costa. Colapso de las ciudades-estado cananeas. Emergen las primeras comunidades israelitas en las montañas centrales. Este período marca cambios demográficos y culturales significativos.",color:"#DC143C"},{id:11,startYear:-1e3,endYear:-586,title:"Reinos de Israel y Judá",subtitle:"David y Salomón",description:"Reino unificado y posterior división",details:"Establecimiento del reino unificado bajo David y Salomón, con Jerusalén como capital. Construcción del Primer Templo. Posterior división en Reino de Israel (norte) y Reino de Judá (sur). Desarrollo de la identidad nacional judía y consolidación de las tradiciones religiosas.",color:"#DAA520"},{id:12,startYear:-586,endYear:-539,title:"Exilio Babilónico",subtitle:"Destrucción del Primer Templo",description:"Conquista babilónica y exilio",details:"Nabucodonosor II conquista Jerusalén, destruye el Primer Templo y deporta a la élite judía a Babilonia. Este período transforma profundamente el judaísmo, desarrollándose nuevas formas de práctica religiosa y identidad que no dependen del Templo.",color:"#8B0000"},{id:13,startYear:-539,endYear:-332,title:"Período Persa",subtitle:"Retorno del Exilio",description:"Dominio persa y reconstrucción del Templo",details:"Ciro el Grande permite el retorno de los exiliados judíos. Reconstrucción del Segundo Templo bajo Zorobabel. Reformas de Esdras y Nehemías. Desarrollo del judaísmo del Segundo Templo con influencias persas en teología y práctica.",color:"#9932CC"},{id:14,startYear:-332,endYear:-63,title:"Período Helenístico",subtitle:"Alejandro y los Macabeos",description:"Conquista griega y rebelión macabea",details:"Alejandro Magno conquista la región, introduciendo la cultura helenística. Después de su muerte, la región pasa entre los Ptolomeos y Seléucidas. La persecución de Antíoco IV provoca la revuelta macabea (167-160 a.C.), estableciendo la dinastía hasmonea y un período de independencia judía.",color:"#20B2AA"},{id:15,startYear:-63,endYear:324,title:"Período Romano",subtitle:"Herodes y las Revoltas",description:"Dominio romano, nacimiento del cristianismo",details:"Pompeyo conquista Jerusalén. Reinado de Herodes el Grande. Nacimiento y ministerio de Jesús. Destrucción del Segundo Templo (70 d.C.) y revuelta de Bar Kojba (132-135 d.C.). Dispersión judía y desarrollo del cristianismo primitivo.",color:"#B22222"},{id:16,startYear:0,endYear:0,title:"AÑO 0",subtitle:"Punto de Referencia",description:"Transición BCE/CE",details:"Punto de referencia tradicional del calendario occidental, marcando la transición entre los períodos Antes de Cristo (a.C./BCE) y Después de Cristo (d.C./CE). Aunque históricamente el nacimiento de Jesús se sitúa algunos años antes, este punto sirve como referencia cronológica.",color:"#FFD700",isMarker:!0},{id:17,startYear:324,endYear:638,title:"Período Bizantino",subtitle:"Cristianismo Imperial",description:"Imperio Bizantino cristiano",details:"Constantino legaliza el cristianismo y la región se convierte en centro de peregrinaje cristiano. Construcción de iglesias importantes como la del Santo Sepulcro. Desarrollo del cristianismo palestino y siríaco. Conflictos con el Imperio Sasánida.",color:"#9370DB"},{id:18,startYear:638,endYear:1099,title:"Conquista Árabe",subtitle:"Califatos Omeya y Abasí",description:"Islamización de la región",details:"El califa Umar ibn al-Jattab conquista Jerusalén. Construcción de la Cúpula de la Roca (691) y la mezquita de Al-Aqsa. Arabización e islamización gradual de la población. La región se convierte en parte del mundo islámico bajo diferentes califatos.",color:"#006400"},{id:19,startYear:1099,endYear:1291,title:"Cruzadas",subtitle:"Estados Cruzados",description:"Reino Latino de Jerusalén",details:"Las Cruzadas establecen estados cristianos en Tierra Santa. Reino de Jerusalén, Principado de Antioquía, Condado de Edesa y Trípoli. Saladino reconquista Jerusalén (1187). Interacción compleja entre culturas cristiana, musulmana y judía.",color:"#8B0000"},{id:20,startYear:1291,endYear:1517,title:"Período Mameluco",subtitle:"Dinastía Ayubí y Mamelucos",description:"Dominio mameluco desde Egipto",details:"Los mamelucos expulsan definitivamente a los cruzados. La región se convierte en provincia del Sultanato Mameluco de Egipto. Período de relativa estabilidad con desarrollo de la arquitectura islámica y renovación de Jerusalén.",color:"#8B4513"},{id:21,startYear:1517,endYear:1917,title:"Imperio Otomano",subtitle:"400 años otomanos",description:"Dominio otomano",details:"Selim I conquista la región para el Imperio Otomano. Desarrollo del sistema de millet para las comunidades religiosas. Inmigración judía sefardí después de 1492. En el siglo XIX, primeras olas de inmigración sionista (Aliyah) y despertar del nacionalismo árabe.",color:"#800000"},{id:22,startYear:1917,endYear:1948,title:"Mandato Británico",subtitle:"Declaración Balfour",description:"Administración británica",details:"Declaración Balfour (1917) promete un 'hogar nacional judío'. La Sociedad de Naciones otorga el Mandato sobre Palestina a Gran Bretaña. Inmigración judía masiva, especialmente durante los años 1930s debido al Holocausto. Crecimiento del nacionalismo palestino y conflictos intercomunales.",color:"#4169E1"},{id:23,startYear:1948,endYear:2024,title:"Israel/Palestina",subtitle:"Conflicto Contemporáneo",description:"Establecimiento de Israel y conflicto actual",details:"Proclamación del Estado de Israel (14 mayo 1948) y primera guerra árabe-israelí. Nakba palestina. Guerras de 1967 y 1973. Acuerdos de Oslo (1993-1995). Segunda Intifada (2000-2005). Situación actual con Gaza, Cisjordania y cuestiones de estatus final pendientes.",color:"#FF4500"}];class S{constructor(){this.container=document.getElementById("timeline-container"),this.detailsContainer=document.getElementById("details-container"),this.currentIndex=0,this.visibleCards=3,this.init(),this.setupDetailsPanelSwipe()}init(){this.render(),this.showInitialMessage(),this.updateTimeline()}setupDetailsPanelSwipe(){let e=0,a=0,i=50;this.detailsContainer.addEventListener("touchstart",t=>{e=t.touches[0].clientX,a=t.touches[0].clientY},{passive:!0}),this.detailsContainer.addEventListener("touchend",t=>{const s=t.changedTouches[0].clientX,n=t.changedTouches[0].clientY,c=e-s,o=a-n;Math.abs(c)>Math.abs(o)&&Math.abs(c)>i&&(t.preventDefault(),c>0?this.navigateDown():this.navigateUp())},{passive:!1}),this.addSwipeIndicators()}addSwipeIndicators(){const e=document.createElement("style");e.textContent=`
      .details-swipe-indicator {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #333;
        z-index: 10;
        pointer-events: none;
        opacity: 0.6;
        transition: opacity 0.3s ease;
      }
      
      .details-swipe-indicator.left {
        left: 10px;
      }
      
      .details-swipe-indicator.right {
        right: 10px;
      }
      
      @media (max-width: 768px) {
        .details-swipe-indicator {
          display: flex;
        }
      }
      
      @media (min-width: 769px) {
        .details-swipe-indicator {
          display: none;
        }
      }
    `,document.head.appendChild(e)}calculateTimelinePosition(e,a){const i=Math.abs(a.endYear-a.startYear)*2,t=Math.min(a.startYear-i,-100),s=Math.max(a.endYear+i,100),n=Math.min(t,-100),o=Math.max(s,100)-n;return(e-n)/o*100}render(){this.container.innerHTML=`
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
    `,this.setupNavigation(),this.updateCarousel(),this.selectCard(0)}renderCards(){return g.filter(a=>!a.isMarker).map((a,i)=>`
      <div class="period-card" data-index="${i}" style="border-left: 4px solid ${a.color};">
        <div class="card-period">${this.formatYear(a.startYear)} - ${this.formatYear(a.endYear)}</div>
        <div class="card-title">${a.title}</div>
        <div class="card-subtitle">${a.subtitle}</div>
      </div>
    `).join("")}setupNavigation(){const e=document.getElementById("nav-up"),a=document.getElementById("nav-down"),i=document.getElementById("cards-container");e.addEventListener("click",()=>this.navigateUp()),a.addEventListener("click",()=>this.navigateDown()),i.addEventListener("click",t=>{const s=t.target.closest(".period-card");if(s){const n=parseInt(s.dataset.index);this.selectCard(n)}}),document.addEventListener("keydown",t=>{const s=window.innerWidth<=1200;!s&&t.key==="ArrowUp"||s&&t.key==="ArrowLeft"?(t.preventDefault(),this.navigateUp()):(!s&&t.key==="ArrowDown"||s&&t.key==="ArrowRight")&&(t.preventDefault(),this.navigateDown())}),window.addEventListener("resize",()=>{this.updateCarousel()}),this.setupTouchNavigation(i)}setupTouchNavigation(e){let a=0,i=0,t=50;e.addEventListener("touchstart",s=>{a=s.touches[0].clientX,i=s.touches[0].clientY},{passive:!0}),e.addEventListener("touchend",s=>{const n=s.changedTouches[0].clientX,c=s.changedTouches[0].clientY,o=a-n,h=i-c;window.innerWidth<=1200?Math.abs(o)>Math.abs(h)&&Math.abs(o)>t&&(o>0?this.navigateDown():this.navigateUp()):Math.abs(h)>Math.abs(o)&&Math.abs(h)>t&&(h>0?this.navigateDown():this.navigateUp())},{passive:!0})}navigateUp(){const e=g.findIndex(a=>{const i=this.container.querySelector(".timeline-card.selected");return i&&a.id==i.dataset.id});if(e>0){const a=g[e-1];this.showDetails(a),this.scrollToCard(a.id)}}navigateDown(){const e=g.findIndex(a=>{const i=this.container.querySelector(".timeline-card.selected");return i&&a.id==i.dataset.id});if(e<g.length-1){const a=g[e+1];this.showDetails(a),this.scrollToCard(a.id)}}scrollToCard(e){const a=this.container.querySelector(`.timeline-card[data-id="${e}"]`);a&&a.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}selectCard(e){const a=g.filter(i=>!i.isMarker);e<0||e>=a.length||(this.currentIndex=e,this.updateCarousel(),this.updateTimeline(),this.showEventDetails(a[e]))}updateCarousel(){const e=document.getElementById("cards-container"),a=e.querySelectorAll(".period-card");a.forEach(c=>c.classList.remove("active")),a[this.currentIndex]&&a[this.currentIndex].classList.add("active");const i=window.innerWidth<=1200;if(i){const m=e.parentElement.offsetWidth/2-260/2-this.currentIndex*260;e.style.transform=`translateX(${m}px)`}else{const m=132-this.currentIndex*136;e.style.transform=`translateY(${m}px)`}const t=document.getElementById("nav-up"),s=document.getElementById("nav-down"),n=g.filter(c=>!c.isMarker);t&&s&&(t.style.opacity=this.currentIndex===0?"0.5":"1",s.style.opacity=this.currentIndex===n.length-1?"0.5":"1",i?(t.innerHTML="◀",s.innerHTML="▶",t.title="Anterior",s.title="Siguiente"):(t.innerHTML="▲",s.innerHTML="▼",t.title="Arriba",s.title="Abajo"))}updateTimeline(){const a=g.filter(s=>!s.isMarker)[this.currentIndex];if(!a)return;document.getElementById("timeline-title").textContent=a.title,document.getElementById("timeline-period").textContent=`${this.formatYear(a.startYear)} - ${this.formatYear(a.endYear)}`;const i=document.querySelector(".year-zero-marker"),t=this.calculateTimelinePosition(0,a);i.style.top=`${t}%`,this.updatePeriodMarkers(a)}updatePeriodMarkers(e){const a=document.getElementById("period-markers");a.innerHTML="";const i=document.createElement("div");i.className="period-marker active",i.style.backgroundColor=e.color;const t=this.calculateTimelinePosition(e.startYear,e),s=this.calculateTimelinePosition(e.endYear,e),n=(t+s)/2;i.style.top=`${n}%`,i.innerHTML=`<div class="period-label">${e.title}</div>`,a.appendChild(i),g.filter(o=>!o.isMarker&&o.id!==e.id).forEach(o=>{if(!(o.endYear<e.startYear||o.startYear>e.endYear)){const m=document.createElement("div");m.className="period-marker",m.style.backgroundColor=o.color;const b=this.calculateTimelinePosition(o.startYear,e),Y=this.calculateTimelinePosition(o.endYear,e),y=(b+Y)/2;y>=0&&y<=100&&(m.style.top=`${y}%`,m.innerHTML=`<div class="period-label">${o.title}</div>`,a.appendChild(m))}})}formatYear(e){return e<0?`${Math.abs(e)} a.C.`:e===0?"0":`${e} d.C.`}showEventDetails(e){this.detailsContainer.innerHTML=`
      <div class="event-details">
        <div class="details-header" style="border-left-color: ${e.color};">
          <h2>${e.title}</h2>
          <div class="details-period">${this.formatYear(e.startYear)} - ${this.formatYear(e.endYear)}</div>
          <div class="details-subtitle">${e.subtitle}</div>
        </div>
        <div class="details-content">
          <p><strong>Resumen:</strong> ${e.description}</p>
          <div class="details-full">
            ${e.details}
          </div>
        </div>
      </div>
    `}showDetails(e){const a=this.container.querySelector(`.timeline-card[data-id="${e.id}"]`);a&&(this.container.querySelectorAll(".timeline-card").forEach(i=>{i.classList.remove("selected")}),a.classList.add("selected")),this.detailsContainer.innerHTML=`
      <div class="details-swipe-indicator left">‹</div>
      <div class="details-swipe-indicator right">›</div>
      <div class="details-content">
        <button class="close-btn" onclick="timeline.hideDetails()">&times;</button>
        <div class="period-header">
          <h2>${e.title}</h2>
          <p class="period-years">${this.formatYear(e.startYear)} - ${this.formatYear(e.endYear)}</p>
          <p class="period-subtitle">${e.subtitle}</p>
        </div>
        
        ${e.mapData?`
          <div class="historical-map">
            <h3>Mapa Histórico: ${e.mapData.title}</h3>
            <p class="map-description">${e.mapData.description}</p>
            <div class="map-container" id="map-${e.id}"></div>
            <div class="map-legend">
              <h4>Sitios Importantes:</h4>
              <ul>
                ${e.mapData.sites.map(i=>`<li><span class="site-marker ${i.type}"></span>${i.name} (${i.type})</li>`).join("")}
              </ul>
            </div>
          </div>
        `:""}
        
        <div class="period-content">
          <p class="period-description">${e.details}</p>
        </div>
        
        <div class="navigation-hints">
          <p><span class="nav-icon">←</span> Desliza para navegar entre períodos <span class="nav-icon">→</span></p>
        </div>
      </div>
    `,this.detailsContainer.style.display="block",e.mapData&&setTimeout(()=>this.initializeMap(e),100)}initializeMap(e){const a=document.getElementById(`map-${e.id}`);a&&(e.mapData.sites.reduce((i,t)=>i+t.lat,0)/e.mapData.sites.length,e.mapData.sites.reduce((i,t)=>i+t.lng,0)/e.mapData.sites.length,a.innerHTML=`
      <div class="simple-map">
        <div class="map-background"></div>
        ${e.mapData.sites.map(i=>`
          <div class="map-marker ${i.type}" 
               style="left: ${(i.lng-34)*20+50}%; top: ${50-(i.lat-31)*30}%;"
               title="${i.name}">
            <span class="marker-label">${i.name}</span>
          </div>
        `).join("")}
      </div>
    `)}}let u=0,l=null,v=0;function $(){const d=document.querySelector("header"),e=document.createElement("button");e.className="header-toggle",e.textContent="▼",e.setAttribute("aria-label","Ocultar título"),d.appendChild(e);let a=!1;function i(){a=!a,d.classList.toggle("collapsed",a),e.textContent=a?"▲":"▼",e.setAttribute("aria-label",a?"Mostrar título":"Ocultar título")}e.addEventListener("click",i),d.addEventListener("click",s=>{a&&s.target!==e&&i()});let t=!1;document.addEventListener("click",()=>{!t&&window.innerWidth<=768&&(t=!0,setTimeout(()=>{a||i()},3e3))},{once:!0})}function k(){if(window.innerWidth>1200)return;l=document.querySelector(".cards-container");const d=document.querySelectorAll(".period-card"),e=document.querySelector(".nav-prev"),a=document.querySelector(".nav-next"),i=document.querySelector(".cards-viewport");if(!l||!d.length)return;v=300,window.innerWidth<=480?v=256:window.innerWidth<=768&&(v=276),Math.floor(i.offsetWidth/v),w(0,!0),e==null||e.addEventListener("click",()=>D(-1)),a==null||a.addEventListener("click",()=>D(1));let t=!1,s=0,n=0,c=0,o=0;l.addEventListener("touchstart",h,{passive:!1}),l.addEventListener("touchmove",m,{passive:!1}),l.addEventListener("touchend",b),l.addEventListener("mousedown",h),l.addEventListener("mousemove",m),l.addEventListener("mouseup",b),l.addEventListener("mouseleave",b),l.addEventListener("contextmenu",r=>r.preventDefault());function h(r){t=!0,l.classList.add("dragging"),s=Y(r),o=requestAnimationFrame(y),l.style.cursor="grabbing",r.preventDefault()}function m(r){if(!t)return;const p=Y(r);n=c+p-s;const f=0,C=-(d.length-1)*v;n>f?n=f+(n-f)*.3:n<C&&(n=C+(n-C)*.3)}function b(){t=!1,l.classList.remove("dragging"),l.style.cursor="grab",cancelAnimationFrame(o);const r=n-c,p=v*.2;Math.abs(r)>p&&(r>0&&u>0?u--:r<0&&u<d.length-1&&u++),w(u,!0),c=n}function Y(r){return r.type.includes("mouse")?r.clientX:r.touches[0].clientX}function y(){t&&(l.style.transform=`translateX(${n}px)`,requestAnimationFrame(y))}d.forEach((r,p)=>{r.addEventListener("click",f=>{t||(L(p),f.preventDefault())})});function P(){i&&(i.classList.toggle("scroll-start",u===0),i.classList.toggle("scroll-end",u===d.length-1))}function D(r){const p=Math.max(0,Math.min(d.length-1,u+r));L(p)}function L(r){u=r,w(r,!0);const p=d[r];if(p){const f=p.dataset.period;f&&window.showPeriodDetails&&window.showPeriodDetails(f)}}function w(r,p=!1){if(!l||!d.length)return;u=Math.max(0,Math.min(d.length-1,r));const f=i.offsetWidth,C=l.scrollWidth,x=u*v;let M=(f-(window.innerWidth<=480?240:window.innerWidth<=768?260:280))/2-x;const T=0,A=f-C;M=Math.max(A,Math.min(T,M)),p?l.style.transition="transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)":l.style.transition="none",l.style.transform=`translateX(${M}px)`,n=c=M,d.forEach((E,I)=>{E.classList.remove("active","adjacent"),I===u?E.classList.add("active"):Math.abs(I-u)===1&&E.classList.add("adjacent")}),e&&(e.disabled=u===0),a&&(a.disabled=u===d.length-1),P(),p&&setTimeout(()=>{l&&(l.style.transition="")},400)}window.addEventListener("resize",q(()=>{window.innerWidth<=1200&&(v=window.innerWidth<=480?256:window.innerWidth<=768?276:300,w(u,!1))},250))}function q(d,e){let a;return function(...t){const s=()=>{clearTimeout(a),d(...t)};clearTimeout(a),a=setTimeout(s,e)}}document.addEventListener("DOMContentLoaded",()=>{if($(),setTimeout(()=>{k()},100),"IntersectionObserver"in window){const d=new IntersectionObserver(e=>{e.forEach(a=>{a.isIntersecting&&(a.target.style.opacity="1",a.target.style.transform="translateY(0)")})},{threshold:.1});document.querySelectorAll(".period-card, .timeline-panel").forEach(e=>{e.style.opacity="0",e.style.transform="translateY(20px)",e.style.transition="all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",d.observe(e)})}});document.addEventListener("DOMContentLoaded",()=>{new S});
