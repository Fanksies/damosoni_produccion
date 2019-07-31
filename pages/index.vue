<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.3/css/mdb.min.css"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Poppins:300,900&display=swap"
      rel="stylesheet"
    />

    <header>
      <a href="#" class="site-logo" aria-label="homepage">
        <img src="../assets/logo-damosoni_transparentepng.png" alt="logo" />
      </a>

      <nav class="ml-5 main-nav hide-mb">
        <ul class="nav__list">
          <li class="nav__list-item">
            <a href="/" class="nav__link">Inicio</a>
          </li>
          <li class="nav__list-item">
            <a href="#about-us" class="nav__link">Nosotros</a>
          </li>
          <li class="nav__list-item">
            <a href="#services" class="nav__link">Servicios</a>
          </li>
          <li class="nav__list-item">
            <a href="http://damosoni.ftrack.me" class="nav__link">Localizar</a>
          </li>
          <li class="nav__list-item">
            <a href="#apps" class="nav__link">Aplicaciones</a>
          </li>
          <li class="nav__list-item">
            <a href="#form" class="nav__link">Contacto</a>
          </li>
        </ul>
      </nav>
      <nav class="ml-auto hide-mb">
        <ul class="list-unstyled mb-0">
          <li class="nav__list-item">
            <span class="nav__link pupper">
              <i class="fas fa-envelope"></i> contacto
            </span>
          </li>
          <li class="nav__list-item">
            <a
              href="https://api.whatsapp.com/send?phone=5215510265904&text=hola%2C%20qu%C3%A9%20tal%3F"
            >
              <span class="nav__link pupper">
                <i class="fas fa-phone fa-flip-horizontal"></i> 55 5502 3555
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <!-- <nav class="account">
        <ul class="nav__list">
          <li class="nav__list-item">
            <a class="nav__link" href="#">
              <i class="fa fa-envelope fa-flip-horizontal fa-fw"></i>
              contacto@damosoni.com
            </a>
          </li>
          <li class="nav__list-item">
            <a class="nav__link nav__link--btn--highlight" href="#">
              <i class="fab fa-whatsapp"></i>
              55 5502 3555
            </a>
          </li>
        </ul>
      </nav>-->
      <nav class="mobiles">
        <a
          class="d-block nav__link"
          href="https://api.whatsapp.com/send?phone=5215510265904&text=hola%2C%20qu%C3%A9%20tal%3F"
        >
          <i class="fab fa-whatsapp"></i> Contacto
        </a>
      </nav>
    </header>

    <article>
      <section class="home-intro">
        <h1 class="main-title">Damosoni Comunicaciones</h1>
        <h2 class="text-lighter subtitle-mb">Descubre lo que M2M &amp; IoT hacen por ti</h2>
        <div id="about-us"></div>
      </section>

      <div class="home-about">
        <div class="flex footer-grid flex-column-inverse-mb text-center">
          <div>
            <img
              class="w-100"
              src="../assets/logo-damosoni_transparentepng.png"
              alt
              style="max-width:350px;"
            />

            <p class="lead">
              Nuestra calidad de servicio, alta disponibilidad y bajos costos nos hacen únicos.
              <br />Disfruta de nuestra plataforma de administración en línea, sin costo adicional.
            </p>
          </div>
        </div>

        <flickity
          ref="flickity"
          :options="flickityOptions"
          class="slider text-center main-carousel"
        >
          <div class="carousel-cell">
            <i class="fas fa-hands-helping fa-4x"></i>
            <h3 class="d-block my-2">Respaldo</h3>Nuestra experiencia, estructura de procesos y calidad de servicio les brinda tranquilidad y
            seguridad a nuestros clientes.
          </div>
          <div class="carousel-cell">
            <i class="fas fa-globe-americas fa-4x"></i>
            <h3 class="d-block my-2">Presentes en todo el mundo.</h3>DAMOSONI COMUNICACIONES tiene socios de negocio en más de 180 países. Ofrece todo
            lo necesario para las personas en movimiento, negocios ocasionales o frecuentes y empresas consolidadas
            en determinada región.
          </div>
          <div class="carousel-cell">
            <i class="fas fa-project-diagram fa-4x"></i>
            <h3 class="d-block my-2">Infraestructura.</h3>Puesta a disposición tanto de usuarios finales como de compañías que deseen extender su portafolios de negocio.
          </div>
        </flickity>
        <div id="services"></div>
      </div>

      <div class="home-more-stuff">
        <div class="gray-bg">
          <div class="text-wrapper">
            <div class="grid-features container">
              <div class="image-grid slide-in from-left">
                <img src="../assets/location.svg" class="img-flex slide-in from-left" width="200" />
              </div>
              <div class="grid-features_text">
                <p class="slide-in from-right">
                  <strong>DAMOSONI COMUNICACIONES</strong> es una compañía global e independiente, de telecomunicaciones y
                  tecnologías móviles en
                  México.
                  <br />Debido a nuestros 20 años de experiencia acumulada, estamos en posición de ofrecer servicios de comunicación
                  autosuficientes en todo el mundo.
                </p>
              </div>
            </div>

            <div class="grid-features container">
              <div class="grid-features_text">
                <p class="slide-in from-right">
                  Los servicios de conectividad Machine to Machine (M2M) están diseñados para resolver necesidades de conexión entre
                  maquinas,
                  con acuerdos y términos sencillos y precios sin cargos ocultos. Planes de datos personalizados para uso en
                  México y con la posibilidad de obtener itinerancia en todo el mundo.
                </p>
              </div>
              <div class="image-grid slide-in from-left">
                <img src="../assets/signal.svg" class="img-flex slide-in from-left" width="200" />
              </div>
            </div>

            <div class="grid-features container">
              <div class="image-grid slide-in from-left">
                <img
                  src="../assets/sim.svg"
                  class="img-flex slide-in from-left hide-mb"
                  width="200"
                />
              </div>
              <div class="grid-features_text">
                <p class="slide-in from-right">
                  La visión del Internet de las Cosas (IoT) y su componente tecnológico es aplicable sobre una gran variedad de escenarios, en los que
                  la información emitida y recibida desde las máquinas, habilita su integración en los procesos empresariales.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="home-about">
          <div class="mb-5">
            <h2 class="squad-goals">
              El objetivo final de los servicios y soluciones que ofrece DAMOSONI
              COMUNICACIONES,
              es identificar, implementar y mejorar constantemente los procesos aplicables.
            </h2>
          </div>
          <div class="columns">
            <div class="col fade-in item-grid">
              <h3>Conectividad con alta disponibilidad</h3>
              <p>Háblanos de tu solución.</p>
            </div>
            <div class="col fade-in item-grid">
              <h3>Integración con dispositivos</h3>
              <p>GPS, Streaming, Circuito Cerrado, etc.</p>
            </div>
            <div class="col fade-in item-grid">
              <h3>Plataforma de administración</h3>
              <p>
                Activa, suspende, genera reportes
                y configura alertas.
              </p>
            </div>
          </div>

          <div class="text-center col fade-in item-grid appear">
            <h2>Rastrea tus dispositivos aquí</h2>
            <a
              href="http://damosoni.ftrack.me"
              class="nav__link nav__link--btn nav__link--btn--highlight"
            >Rastreo</a>
          </div>

          <div class="columns">
            <div class="col fade-in item-grid">
              <h3>Autogestión de Flotas</h3>
              <p>Es posible conocer y monitorizar el estado del vehículo o de su carga (Telemetría)</p>
            </div>

            <div class="col fade-in item-grid">
              <h3>Geocercas</h3>
              <p>
                Sabemos que esta herramienta le dará una capacidad superior en el diseño de geocercas, incluyendo la
                capacidad de dibujarlas con geocercas.
              </p>
            </div>
            <div class="col fade-in item-grid">
              <h3>Vending Machines / TPV</h3>
              <p>Controla y visualiza la actividad en tiempo real.</p>
            </div>
          </div>
          <div id="apps"></div>
        </div>

        <div class="admin-platform text-center">
          <div class="container fade-in">
            <h2 class="h1-responsive font-weight-bold text-center">Aplicaciones</h2>
            <iframe
              class="my-5"
              style="width:100%"
              height="500"
              src="https://www.youtube.com/embed/FrcmgTs7buY"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="home-about">
          <div class="bg-white p-5 rounded shadow-sm">
            <div class="squad-goals fade-in mb-5">
              <h2>Entre otras soluciones de IoT para facilitar tu futuro encontrarás:</h2>
            </div>
            <div class="columns">
              <div class="col fade-in from-left">
                <div class="appliance">
                  <h3>Control de Acceso</h3>
                  <p>
                    Alarmas y envío de datos hacia sistemas de control, con el fin de vigilar el acceso a domicilios y
                    empresas. En este tipo de entorno, el propio canal de comunicaciones sobre el que los sensores envían la
                    información es monitorizado y tratado como un elemento clave en la seguridad.
                  </p>
                </div>

                <div class="appliance">
                  <h3>Medicina</h3>
                  <p>
                    Muchos enfermos pueden desarrollar una vida casi normal y enviar a su médico de forma regular y
                    automática
                    los datos medidos en su propio domicilio evitando que tengan que desplazarse al hospital. En base a la
                    medición y análisis de estos datos se pueden generar alarmas y planificar citas para el seguimiento y
                    evolución del paciente.
                  </p>
                </div>
              </div>
              <div class="col fade-in from-right">
                <div class="appliance">
                  <h3>Control y supervisión del tráfico</h3>
                  <p>
                    Paneles informativos, semáforos, contadores de aforo de
                    Vehículos, sensores meteorológicos, etc.
                  </p>
                </div>
                <div class="appliance">
                  <h3>Medio ambiente</h3>
                  <p>Estaciones meteorológicas, niveles de agua en pantanos, energía solar y eólica.</p>
                </div>
              </div>
            </div>
            <div id="form"></div>
          </div>
        </div>
        <!-- Hardware section -->

        <div class="home-about text-center">
          <!--Section: Contact v.2-->
          <section class="mb-4 col footer-grid">
            <!--Section heading-->
            <h2 class="h1-responsive font-weight-bold text-center my-4">Regístrate</h2>
            <!--Section description-->
            <p class="text-center w-responsive mx-auto mb-5">
              Escríbenos un correo y nos pondremos en contacto contigo a la
              brevedad.
            </p>

            <div class="row">
              <!--Grid column-->
              <div class="col-md-9 mb-md-0 mb-5">
                <form
                  id="contact-form"
                  action="/success"
                  name="contact-form"
                  method="POST"
                  data-netlify="true"
                >
                  <!--Grid row-->
                  <div class="row">
                    <!--Grid column-->
                    <div class="col-md-6">
                      <div class="md-form mb-0">
                        <input type="text" id="name" name="name" class="form-control" />
                        <label for="name" class>Nombre</label>
                      </div>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-md-6">
                      <div class="md-form mb-0">
                        <input type="text" id="email" name="email" class="form-control" />
                        <label for="email" class>Correo electronico</label>
                      </div>
                    </div>
                    <!--Grid column-->
                  </div>
                  <!--Grid row-->

                  <!--Grid row-->
                  <div class="row">
                    <div class="col-md-12">
                      <div class="md-form mb-0">
                        <input type="text" id="subject" name="subject" class="form-control" />
                        <label for="subject" class>Asunto</label>
                      </div>
                    </div>
                  </div>
                  <!--Grid row-->

                  <!--Grid row-->
                  <div class="row">
                    <!--Grid column-->
                    <div class="col-md-12">
                      <div class="md-form">
                        <textarea
                          type="text"
                          id="message"
                          name="message"
                          rows="2"
                          class="form-control md-textarea"
                        ></textarea>
                        <label for="message">Tu Mensaje</label>
                      </div>
                    </div>
                  </div>
                  <!--Grid row-->
                  <div class="text-center text-md-left">
                    <button class="btn btn-primary" type="submit">Enviar</button>
                  </div>
                </form>

                <div class="status"></div>
              </div>
              <!--Grid column-->

              <!--Grid column-->
              <div class="col-md-3 text-center">
                <h2 class="my-4">Contacto:</h2>
                <ul class="list-unstyled mb-0">
                  <!-- <li>
                    <i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Reforma 222, 06500, Ciudad de Mexico</p>
                  </li>-->

                  <li>
                    <i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 55 5502 3555</p>
                  </li>

                  <li>
                    <i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contacto@damosoni.com</p>
                  </li>
                </ul>
              </div>
              <!--Grid column-->
            </div>
          </section>
          <!--Section: Contact v.2-->
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
// import Flickity from 'vue-flickity';

export default {
  components: {
    AppLogo
    // Flickity
  },
  mounted() {
    const header = document.querySelector("header");
    const sectionOne = document.querySelector(".home-intro");

    const faders = document.querySelectorAll(".fade-in");
    const sliders = document.querySelectorAll(".slide-in");

    const sectionOneOptions = {
      rootMargin: "-200px 0px 0px 0px"
    };

    const sectionOneObserver = new IntersectionObserver(function(
      entries,
      sectionOneObserver
    ) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          header.classList.add("nav-scrolled");
        } else {
          header.classList.remove("nav-scrolled");
        }
      });
    },
    sectionOneOptions);

    sectionOneObserver.observe(sectionOne);

    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -250px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(
      entries,
      appearOnScroll
    ) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });

    sliders.forEach(slider => {
      appearOnScroll.observe(slider);
    });
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        autoPlay: 5000,
        pauseAutoPlayOnHover: false

        // any options from Flickity can be used
      }
    };
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: "Poppins", sans-serif !important;
  overflow-x: hidden;
  /* color: #0c2c4b; */
  background: #f1f1f1;
}

.mb-only {
  display: none;
}

flickity {
  display: block !important;
}

.site-logo {
  font-weight: 900;
  font-size: 0.8rem;
  color: var(--text);
  text-decoration: none;
}

.site-logo img {
  width: 100%;
  max-width: 110px;
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: 600;
}

/* flickity */

.carousel-cell {
  width: 100%; /* full width */
  height: 200px;
  padding: 50px 80px;
  /* center images in cells with flexbox */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.last-CTA {
  padding: 5em 0;
  background: #f4f4f4;
  background: #123 url(../assets/bg-2.jpg);
  background-size: auto;
  background-size: cover;
  background-blend-mode: multiply;
  background-attachment: fixed;
  color: white;
}

.item-grid {
  transition: all 400ms;
  background: #fbfbfb;
  padding: 2em;
  box-shadow: 1px 1px 1px #ececec;
  border-radius: 25px;
}

.item-grid:hover {
  position: relative;
  top: -5px;
  box-shadow: 1px 1px 5px #f1f1f1;
}

.footer-grid {
  transition: all 400ms;
  background: #fbfbfb;
  padding: 2em;
  box-shadow: 1px 1px 1px #ececec;
  border-radius: 25px;
}

strong {
  font-weight: bold;
}

header {
  --text: #f4f4f4;
  --text-inverse: #333;
  --background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 2em 3em;
  transition: background 250ms ease-in;
  background: var(--background);
  color: var(--text);
}

.pupper {
  font-size: 14px !important;
  font-family: revert;
}

/* SVGS */

object {
  margin: 0 auto;
}

.nav__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav__link {
  --spacing: 1em;
  text-decoration: none;
  color: inherit;
  display: inline-block;
  padding: calc(var(--spacing) / 2) var(--spacing);
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.9rem;
}

.nav__link:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: var(--spacing);
  right: var(--spacing);
  height: 2px;
  background: currentColor;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  transition: -webkit-transform 150ms ease-in-out;
  transition: transform 150ms ease-in-out;
  transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;
}

.nav__link:hover::after {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

.nav__link--btn {
  border: 1.5px solid currentColor;
  border-radius: 2em;
  margin-left: 1em;
  transition: background 250ms ease-in-out;
  letter-spacing: 1px;
  padding: 0.75em 1.5em;
}

.nav__link--btn:hover {
  background: var(--text);
  color: var(--text-inverse);
  border-color: var(--text);
}

.nav__link--btn::after {
  display: none;
}

.nav__link--btn--highlight {
  background: limegreen;
  border-color: limegreen;
  color: #333;
}

.nav__link--btn--highlight:hover {
  background: var(--text);
  border-color: var(--text);
}

.nav-scrolled {
  --text: #333;
  --text-inverse: #f4f4f4;
  --background: #f4f4f4;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
}

.home-intro {
  padding: 50vh 0;
  background: #123 url(https://i.imgur.com/BjLznmZ.jpg);
  background-size: cover;
  background-blend-mode: multiply;
  color: white;
  text-align: center;
}

.gray-bg {
  background: #123 url(../assets/bg-2.jpg);
  background-size: cover;
  background-blend-mode: multiply;
  color: white;
  line-height: 2;
}

.home-about {
  padding: 4em 0;
  max-width: 900px;
  margin: 0 auto;
}

.columns {
  display: flex;
}

.col + .col {
  flex: 1;
  margin-left: 1.5em;
}

.fade-in {
  opacity: 0;
  transition: opacity 250ms ease-in;
}

.fade-in.appear {
  opacity: 1;
}

.more-stuff-grid {
  padding: 4em 0;
  display: grid;
  grid-gap: 2em;
  align-items: center;
  grid-template-columns: minmax(1em, 1fr) repeat(2, minmax(200px, 400px)) minmax(
      1em,
      1fr
    );
}

.from-left {
  grid-column: 2 / 3;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.from-right {
  grid-column: 3 / 4;
  -webkit-transform: translateX(50%);
  transform: translateX(50%);
}

.from-left,
.from-right {
  transition: opacity 250ms ease-in, -webkit-transform 400ms ease-in;
  transition: opacity 250ms ease-in, transform 400ms ease-in;
  transition: opacity 250ms ease-in, transform 400ms ease-in,
    -webkit-transform 400ms ease-in;
  opacity: 0;
}

.from-left.appear,
.from-right.appear {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
}

.squad-goals {
  text-align: center;
}

.text-center {
  text-align: center;
}

.col {
  margin-bottom: 2em;
  flex: 1;
}

.slider {
  margin: 5em 0;
}

.admin-platform {
  padding: 5em 0;
  background: #f4f4f4;
  display: flex;

  background: #123 url(../assets/bg-1.jpg);
  background-size: auto;
  background-size: cover;
  background-blend-mode: multiply;
  background-attachment: fixed;
  color: white;
}

.admin-platform div {
  flex: 1;
}

.admin-platform_left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.admin-platform_left h3 {
  text-align: left;
  max-width: 420px;
  margin: 0 auto;
}

.list-unstyled {
  list-style: none;
  line-height: 1.75;
}

.main-title {
  font-size: 3.5em;
  font-family: Poppins;
  font-weight: bold;
}

.flex {
  display: flex;
}

.flex div {
  flex: 1;
}

.logo-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.text-lighter {
  font-weight: lighter;
}

.appliance {
  margin-bottom: 2.5em;
  min-height: 210px;
}

input {
  background: white;
}

.grid-features {
  display: flex;
}

.grid-features_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-wrapper {
  padding: 3em 0;
}

.img-flex {
  margin: 1em;
}

.mobiles {
  display: none;
}

.md-form label {
  top: -30px !important;
}

.md-form .form-control {
  border: 0 !important;
}

/* Media queries */

@media (max-width: 992px) {
  .appliance {
    margin-bottom: 2.5em;
    min-height: unset;
    padding-bottom: 1em;
    text-align: center;
  }

  header > .main-nav ml-auto {
    display: none;
  }

  header > .account {
    display: none;
  }

  .mobiles {
    display: block;
    font-size: 12px;
  }

  .home-intro {
    padding: 30vh 0;
  }

  .main-title {
    font-size: 2em;
  }

  .home-about {
    padding: 0;
  }

  .footer-grid {
    border-radius: 0;
  }

  .flex-column-inverse-mb {
    flex-direction: column-reverse;
  }

  .carousel-cell {
    min-height: 300px;
    padding: 0;
  }

  .slider {
    margin: 1em 0;
  }

  .grid-features {
    text-align: center;
    display: block;
  }

  .hide-mb {
    display: none;
  }

  .squad-goals {
    text-align: center;
    margin-top: 1em;
    font-size: 1.2em;
    line-height: 1.7;
    padding: 20px;
  }

  .mb-5 {
    margin-bottom: 0 !important;
  }

  .columns {
    display: block;
  }

  .col + .col {
    margin: 0;
  }

  .col {
    margin-bottom: 0;
  }
  .item-grid {
    border-radius: 0;
  }
  .item-grid:hover {
    position: unset;
  }
  .p-5 {
    padding: 0 !important;
  }
  .subtitle-mb {
    font-size: 1.5em;
  }

  .hide-mb {
    display: none;
  }

  header {
    padding: 2em;
    justify-content: space-between;
  }

  .mb-only {
    display: block;
  }
}
</style>

