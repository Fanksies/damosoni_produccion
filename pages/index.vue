<template>
<div id="app">
  <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
  <header>
    <a href="#" class="site-logo" aria-label="homepage">Damosoni</a>

    <nav class="main-nav">
      <ul class="nav__list">
        <li class="nav__list-item">
          <a href="#" class="nav__link">Inicio</a>
        </li>
        <li class="nav__list-item">
          <a href="#" class="nav__link">Servicios</a>
        </li>
        <li class="nav__list-item">
          <a href="#" class="nav__link">Aplicaciones</a>
        </li>
        <li class="nav__list-item">
          <a href="#" class="nav__link">Contacto</a>
        </li>
      </ul>
    </nav>
    <nav class="account">
      <ul class="nav__list">
        <li class="nav__list-item">
          <a class="nav__link nav__link--btn" href="#">
            <i class="fa fa-envelope fa-flip-horizontal fa-fw"></i>
            contacto
          </a>
        </li>
        <li class="nav__list-item">
          <a class="nav__link nav__link--btn nav__link--btn--highlight" href="#">
            <i class="fab fa-whatsapp"></i>
            55 6030 1247
          </a>
        </li>
      </ul>
    </nav>
  </header>

  <article>
    <section class="home-intro">
      <h1 class="main-title">Damosoni Comunicaciones</h1>
      <h2 class="text-lighter">Descubre lo que M2M &amp; IoT hace por ti</h2>
    </section>

    <div class="home-about">
      <div class="flex footer-grid">
        <div>
          <h2>Somos Damosoni</h2>
          <p>Nuestra calidad de servicio, alta disponibilidad y bajos costos nos hacen únicos.</p>
          <p>Disfruta de nuestra plataforma de administración en línea, sin costo adicional.</p>
          <strong>Todo esto y más disponible 24/7 desde tu computadora o tu celular.</strong>
        </div>
        <div class="logo-right">logo</div>
      </div>
      <div class="slider text-center main-carousel">
        <div class="carousel-cell">
          <i class="fas fa-hands-helping fa-4x"></i>
          <h3 class="d-block my-2">Respaldo</h3>Nuestra experiencia, estructura de procesos y calidad de servicio les brinda tranquilidad y
          seguridad a nuestros clientes.
        </div>
        <div class="carousel-cell">
          <i class="fas fa-globe-americas fa-4x"></i>
          <h3 class="d-block my-2">Presentes en todo el mundo.</h3>DAMOSONI COMUNICACIONES tiene socios de negocio en más de 180 países. Ofrece todo
          lo necesario para las personas en movimiento, negocios ocasionales o frecuentes y para empresas consolidadas
          en determinada región.
        </div>
        <div class="carousel-cell">
          <i class="fas fa-project-diagram fa-4x"></i>
          <h3 class="d-block my-2">Infraestructura.</h3>Nuestros servicios están puestos a disposición tanto de usuarios finales como de compañías
          que deseen extender su portafolios con servicios únicos.
        </div>
      </div>
      <div class="columns">
        <div class="col item-grid fade-in">
          <h3>Pruébanos sin costo</h3>
          <p>Obtén tu SIM gratis en un solo click.</p>
          <a href class="nav__link nav__link--btn nav__link--btn--highlight ml-0">Quiero mi SIM</a>
        </div>
        <div class="col item-grid fade-in">
          <h3>Control de tus dispositivos</h3>
          <p>
            Activa, desactiva y modifica límites de
            consumo.
          </p>
        </div>
        <div class="col item-grid fade-in">
          <h3>Necesitas SIM adicionales?</h3>
          <p>Obtén una SIM nueva o agrega adicionales a tu plataforma.</p>
        </div>
      </div>
    </div>

    <div class="home-more-stuff">
      <div class="gray-bg">
        <div class="more-stuff-grid">
          <object data="assets/location.svg" class="slide-in from-left" width="200"></object>
          <p class="slide-in from-right">
            <strong>DAMOSONI COMUNICACIONES</strong> es una compañía global e independiente, de telecomunicaciones y
            tecnologías móviles en
            México.
            <br />Debido a nuestros 20 años de experiencia acumulada, estamos en posición de ofrecer servicios de comunicación
            autosuficientes en todo el mundo.
          </p>
        </div>
        <div class="more-stuff-grid">
          <p class="slide-in from-left">
            Los servicios de conectividad M2M & IoT están diseñados para resolver necesidades de conexión entre
            maquinas,
            con acuerdos y términos sencillos y precios sin cargos ocultos. Planes de datos personalizados para uso en
            México y con la posibilidad de obtener itinerancia en todo el mundo.
          </p>
          <object data="assets/sim.svg" class="slide-in from-right" width="200"></object>
        </div>
        <div class="more-stuff-grid">
          <object data="assets/signal.svg" class="slide-in from-left" width="200"></object>
          <p class="slide-in from-right">
            La visión del M2M y su componente tecnológico es aplicable sobre una gran variedad de escenarios, en los que
            la información emitida y recibida desde las máquinas, habilita su integración en los procesos empresariales.
          </p>
        </div>
      </div>
      <div class="home-about">
        <div class="mb-5">
          <h2 class="squad-goals">
            El objetivo final de los servicios y soluciones M2M que ofrece DAMOSONI
            COMUNICACIONES,
            es identificar, implementar y mejorar constantemente los procesos aplicables.
          </h2>
        </div>
        <div class="columns">
          <div class="col fade-in item-grid">
            <h3>Conectividad con alta disponibilidad.</h3>
            <p>Obtén tu SIM gratis en un solo click.</p>
            <a href class="nav__link nav__link--btn nav__link--btn--highlight ml-0">Quiero mi SIM</a>
          </div>
          <div class="col fade-in item-grid">
            <h3>Integración con dispositivos</h3>
            <p>
              Ya sea que su organización necesite integrar un sensor, GPS, dispositivos de vigilancia o transmitir video
              desde la cabina de un vehículo. Nuestra plataforma es de fácil integración.
            </p>
          </div>
          <div class="col fade-in item-grid">
            <h3>Plataforma de administración</h3>
            <p>
              Activa, suspende, localiza, genera reportes
              y configura alertas.
            </p>
          </div>
        </div>

        <div class="columns">
          <div class="col fade-in item-grid">
            <h3>Gestión de Flotas</h3>
            <p>
              Realizar un seguimiento de sus vehículos en tiempo real y aumentar la productividad. No solo se trata de
              la geolocalización de los vehículos, sino que además es posible conocer y
              monitorizar
              el estado del vehículo o de su carga en base a la agregación de sensores que midan presión, temperatura,
              impactos, integridad (telemetría),etc.
            </p>
          </div>

          <div class="col fade-in item-grid">
            <h3>Geocercas</h3>
            <p>
              Sabemos que esta herramienta le dará una capacidad superior en el diseño de geocercas, incluyendo la
              capacidad de dibujarlas con formas irregulares.
            </p>
          </div>
          <div class="col fade-in item-grid">
            <h3>Terminal Punto de Venta / Vending Machines</h3>
            <p>
              Controla y visualiza la actividad en tiempo real. Permite gestionar y optimizar la reposición de mercancía
              con base al consumo. Además, permite
              telecontrolar diversos ajustes de las máquinas expendedoras.
            </p>
          </div>
        </div>
      </div>
      <div class="admin-platform">
        <div class="admin-platform_left">
          <h3>Ahora nuestra plataforma de administración hace que la gestión de tus SIMs y dispositivos sea más fácil</h3>
        </div>
        <div class="admin-platform_right">
          <ul class="list-unstyled">
            <li>Acceso web y móvil.</li>
            <li>Asignación de usuarios con distintos niveles de acceso.</li>
            <li>Activar, suspender, cambiar o cancelar SIMs.</li>
            <li>Comunicación de manera remota con cualquier dispositivo IoT.</li>
            <li>Generar alarmas (consumo, cambio de IMEI, cambio de plan).</li>
            <li>Generar reportes (prefacturación, consumo en tiempo real o históricos).</li>
            <li>Control de ubicación.</li>
          </ul>
        </div>
      </div>
      <div class="home-about">
        <div class="squad-goals fade-in mb-5">
          <h2>
            Un precio, una solución,
            <span>todo incluido.</span>
          </h2>
          <p>Entre otras soluciones de IOT para facilitar tu futuro encontrarás:</p>
        </div>

        <div class="columns">
          <div class="col fade-in from-left">
            <div class="appliance">
              <h3>Lectura de contadores</h3>
              <p>
                Este tipo de sistemas permite el ahorro de costos importantes a las empresas suministradoras de
                servicios.
                Reducir gastos de desplazamiento de personal, demanda energética en tiempo real y con base en ella,
                dimensionar necesidades de distribución.
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
            <div class="appliance">
              <h3>Control de Acceso</h3>
              <p>
                Alarmas y envío de datos hacia sistemas de control, con el fin de vigilar el acceso a domicilios y
                empresas. En este tipo de entorno, el propio canal de comunicaciones sobre el que los sensores envían la
                información es monitorizado y tratado como un elemento clave en la seguridad.
              </p>
            </div>
          </div>
          <div class="col fade-in from-right">
            <div class="appliance">
              <h3>Automoción</h3>
              <p>
                Alarmas y envío de datos hacia sistemas de control, con el fin de vigilar el acceso a domicilios y
                empresas. En este tipo de entorno, el propio canal de comunicaciones sobre el que los sensores envían la
                información es monitorizado y tratado como un elemento clave en la seguridad.
              </p>
            </div>
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
      </div>
      <!-- Hardware section -->
      <div class="last-CTA text-center">
        <div class="mb-4">
          <h2>Obtén el mejor equipo al mejor precio</h2>
          <p>Solución integral: Ponemos a su disposición nuestras alianzas con proveedores de hardware y software.</p>
        </div>
        <h4>Información segura y accesible, siempre.</h4>
        <p>
          <span class="brand-text">DAMISONI COMUNICACIONES</span> le permite enfocarse a sus clientes.
          <br />Despreocúpese
          de la conectividad y administración
          de sus dispositivos.
        </p>
      </div>
      <div class="home-about text-center">
        <!--Section: Contact v.2-->
        <section class="mb-4 col footer-grid">
          <!--Section heading-->
          <h2 class="h1-responsive font-weight-bold text-center my-4">Tienes dudas adicionales?</h2>
          <!--Section description-->
          <p class="text-center w-responsive mx-auto mb-5">
            Escríbenos un correo y nos pondremos en contacto contigo a la
            brevedad.
          </p>

          <div class="row">
            <!--Grid column-->
            <div class="col-md-9 mb-md-0 mb-5">
              <form id="contact-form" name="contact-form" action="mail.php" method="POST">
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
              </form>

              <div class="text-center text-md-left">
                <a
                  class="btn btn-primary"
                  onclick="document.getElementById('contact-form').submit();"
                >Enviar</a>
              </div>
              <div class="status"></div>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-md-3 text-center">
              <ul class="list-unstyled mb-0">
                <li>
                  <i class="fas fa-map-marker-alt fa-2x"></i>
                  <p>Reforma 222, 06500, Ciudad de Mexico</p>
                </li>

                <li>
                  <i class="fas fa-phone mt-4 fa-2x"></i>
                  <p>+ 55 60 30 12 47</p>
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

export default {
  components: {
    AppLogo
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: "Poppins", sans-serif !important;
  overflow-x: hidden;
  color: #0c2c4b;
}

.site-logo {
  font-weight: 900;
  font-size: 0.8rem;
  color: var(--text);
  text-decoration: none;
}

h1,h2,h3,h4,h5 {
  font-weight: 600;
}

/* flickity */

.carousel-cell {
  width: 100%; /* full width */
  height: 200px;
  padding:50px 80px;
  /* center images in cells with flexbox */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.last-CTA {
  padding: 5em 0;
  background: #f4f4f4;
  /* background: #123 url(../assets/bg-2.jpg); */
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
  top:-5px;
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
  justify-content: space-between;
  align-items: center;
  padding: 2em 3em;
  transition: background 250ms ease-in;
  background: var(--background);
  color: var(--text);
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

.gray-bg  {
  /* background: #123 url(../assets/bg-2.jpg); */
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
  grid-template-columns: minmax(1em, 1fr) repeat(2, minmax(200px, 400px)) minmax(1em, 1fr);
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
  transition: opacity 250ms ease-in, transform 400ms ease-in, -webkit-transform 400ms ease-in;
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
  margin-bottom:2em;
  flex: 1;
}

.slider {
  margin: 5em 0;
}

.admin-platform {
  padding:5em 0;
  background: #f4f4f4;
  display: flex;

  /* background: #123 url(../assets/bg-1.jpg); */
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
  margin-bottom:2.5em;
}

input {
  background: white;
}

</style>

