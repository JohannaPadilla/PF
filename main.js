// Pantalla de Bienvenida
function panelInicio() {
    const panelInicio = document.createElement("div");
    panelInicio.innerHTML = `<div class="saludo" id="saludo-p">
                              <div class="text-center">
                                <p class="text-saludo">Bienvenidos a</p>
                                <img class="img-logo" src="img/Logo.PNG" alt="Icono que dice Thank You"/>
                                <div>
                                  <button class="boton-saludo" type="button" id="cerrar">ENTRAR</button>
                                </div>
                              </div>
                            </div>`;
    document.body.appendChild(panelInicio);
  }
  
  if (!localStorage.getItem("yaVisitado")) {
    panelInicio();
    document.getElementById("cerrar").addEventListener("click", function () {
      document.getElementById("saludo-p").style.opacity = "0";
      document.getElementById("saludo-p").style.pointerEvents = "none";
    });
    localStorage.setItem("yaVisitado", true);
  }
  
//   Barra de navegacion
  function headerNavbar() {
    const contenedor = document.createElement("header");
    contenedor.innerHTML = `<nav>
                              <div class="tit-botones">
                                <p class="tit-navbar">DRAKA ENVIOS</p>
                                <button class="p-1 boton" type="button" id="mostrar">Cargar Envio</button>
                              </div>
                              <div>
                                <img class="img-logo-inicio" src="img/Logo.PNG" alt="Logo de marcar, es una silueta de un perro galgo con el nombre Draka Envios"/>
                              </div>
                            </nav>`;
    document.body.appendChild(contenedor);
  }
  headerNavbar();
  
  function main() {
    const main = document.createElement("main");
    main.className = "main";
    document.body.appendChild(main);
  }
  main();
  
//   Cuadro de acerca del proyecto
  function acerca() {
    const main = document.querySelector("main");
    const acerca = document.createElement("section");
    acerca.innerHTML = `<div>
                            <h1>SOBRE NOSOTROS</h1>
                              <div class="parrafo-acerca">
                                <p class="p-acerca"> Nuestro servicoo es dentro del territorio Argentino.
                                </p>
                                <p class="p-acerca"> Tenemos los mejores precios
                                </p>
                              </div>
                          </div>`;
    acerca.className = "acerca text-acerca area-acerca";
    main.appendChild(acerca);
  }
  acerca();
  
//   Formulario de ingreso de envios y modificacion
  function formulario() {
    const main = document.querySelector("main");
    const formulario = document.createElement("section");
    formulario.innerHTML = `<form id="formulario" class="form-datos">
                                <div class="form-fondo">
                                  <legend>Formulario de envio</legend>
                                  <div class="cont-form">
                                    <div class="box-lista">
                                      <ol>
                                        <li><label for="Remitente">Remitente: </label></li>
                                        <input
                                          type="text"
                                          id="Remitente"
                                          name="Remitente"
                                          required
                                          placeholder="Coloque nombre completo de quien remite"
                                        />
                                        <li>
                                          <label for="Origen">Origen: </label>
                                        </li>
                                        <input
                                          type="text"
                                          id="Origen"
                                          name="Origen"
                                          required
                                          placeholder="Coloque direccion de origen completa"
                                        />
                                        <li>
                                          <label for="Destinatario">Destinatario: </label>
                                        </li>
                                        <input
                                          type="text"
                                          id="Destinatario"
                                          name="Destinatario"
                                          required
                                          placeholder="Coloque nombre completo del destinatario"
                                        />
                                        <li>
                                          <label for="Destino">Destino: </label>
                                        </li>
                                        <input
                                          type="text"
                                          id="Destino"
                                          name="Destino"
                                          required
                                          placeholder="Coloque direccion completa del destino"
                                        />
                                        <li>
                                          <label for="Peso">Peso: </label>
                                        </li>
                                        <input
                                          type="text"
                                          id="Peso"
                                          name="Peso"
                                          required
                                          placeholder="Ingrese el peso del paquete"
                                        />
                                      </ol>
                                    </div>
                                    <div class="boxes">
                                      <div class="box-selector">
                                        <label for="Zona" class="titulo">Elija lugar de destino: </label>
                                        <select id="Zona" name="Zona" class="opciones">
                                          <option value="">Elige una opcion</option>
                                          <option value="Cuyo">Cuyo</option>
                                          <option value="Patagonia">Patagonia</option>
                                          <option value="Pampeana">Pampeana</option>
                                          <option value="Noroeste">Noroeste</option>
                                          <option value="Noreste">Noreste</option>
                                          <option value="CABA">CABA</option>
                                          <option value="GBA">GBA</option>
                                        </select>
                                      </div>
                                      <div class="box-selector">
                                        <label class="titulo">Tipo de envio: </label>
                                        <div class="radios">
                                          <label for="Carta">CARTA</label>
                                          <input type="radio" id="Carta" name="Tipo" value="una carta" />
                                          <label for="Sobre">SOBRE</label>
                                          <input type="radio" id="Sobre" name="Tipo" value="un sobre" />
                                          <label for="Caja">CAJA</label>
                                          <input type="radio" id="Caja" name="Tipo" value="una caja" />
                                        </div>
                                      </div>
                                    </div>
                                    <div class="botones-form">
                                      <button class="boton-form" type="button" id="enviar" onclick="paquete()">Enviar</button>
                                      <button class="boton-form" type="button" id="ocultar">Cerrar</button>
                                      <button class="boton-form" type="button" id="guardarCambios">Guardar</button>
                                    </div>
                                  </div>
                                </div>
                              </form>`;
    main.appendChild(formulario);
  }
  formulario();
  
  document.getElementById("mostrar").addEventListener("click", function () {
    document.getElementById("formulario").style.opacity = "1";
    document.getElementById("formulario").style.pointerEvents = "auto";
    document.getElementById("guardarCambios").style.display = "none";
  });
  
  document.getElementById("ocultar").addEventListener("click", function () {
    document.getElementById("formulario").style.opacity = "";
    document.getElementById("formulario").style.pointerEvents = "";
  });
  
//   Clase consructora de envios
 class envio {
    constructor(remitente, origen, destinatario, destino, peso, tipoEnvio, zona) {
      this.remitente = remitente;
      this.origen = origen;
      this.destinatario = destinatario;
      this.destino = destino;
      this.peso = peso;
      this.tipoEnvio = tipoEnvio;
      this.zona = zona;
      this.id = this.generarID();
    }
    
    generarID() {
      let contador = localStorage.getItem("envioID") || 0;
      contador++;
      localStorage.setItem("envioID", contador);
      return contador;
    }
  }

//   Funciones para agregar datos a los envios
  function precioPorKilo(zona, peso) {
    if (
      zona === "Cuyo" ||
      zona === "Patagonia" ||
      zona === "Pampeana" ||
      zona === "Noroeste" ||
      zona === "Noreste"
    ) {
      if (peso > 50) {
        return "Supero el limite de peso de 50KG.";
      } else {
        return peso * 25;
      }
    }
    if (zona === "CABA") {
      if (peso > 5) {
        return "Supero el limite de peso de 25KG.";
      } else {
        return peso * 15;
      }
    }
    if (zona === "GBA") {
      if (peso > 10) {
        return "Supero el limite de peso de 10KG.";
      } else {
        return peso * 20;
      }
    }
  }
  
  function envioZona(zona) {
    if (zona === "Cuyo") {
      return "4 dias";
    } else if (zona === "Patagonia") {
      return "5 dias";
    } else if (zona === "Pampeana") {
      return "7 dias";
    } else if (zona === "Noroeste") {
      return "8 dias";
    } else if (zona === "Noreste") {
      return "9 dias";
    } else if (zona === "CABA") {
      return "1 dias";
    } else if (zona === "GBA") {
      return "3 dias";
    }
  }
  
//   Local Storage
  const envios = [];
  
  let lStorage = JSON.parse(localStorage.getItem("BaseDatos")) || [];
  
  if (lStorage === null) {
    lStorage = envios;
    localStorage.setItem("BaseDatos", JSON.stringify(lStorage));
  }
  
//   Funcion para crear envios
  function paquete() {
    remitenteE = document.getElementById("Remitente").value;
    origenE = document.getElementById("Origen").value;
    destinatarioE = document.getElementById("Destinatario").value;
    destinoE = document.getElementById("Destino").value;
    pesoE = document.getElementById("Peso").value;
    zonaE = document.getElementById("Zona").value;
    tipoEnvioE = document.querySelector('input[name="Tipo"]:checked').value;
  
    const detallePaquete = new envio(
      remitenteE,
      origenE,
      destinatarioE,
      destinoE,
      pesoE,
      tipoEnvioE,
      zonaE
    );
    lStorage.push(detallePaquete);
    localStorage.setItem("BaseDatos", JSON.stringify(lStorage));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "¡Paquete cargado con éxito!",
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      verEnvios();
      document.getElementById("formulario").reset();
      location.reload();
    });
  }
  
//   Funcion para ver lo envios
  function verEnvios() {
    const main = document.querySelector("main");
    const seccion = document.createElement("section");
    lStorage.forEach((envio) => {
      const contenedor = document.createElement("div");
      contenedor.innerHTML = `<h2> Paquete </h2>
                              <p><strong>Remitente:</strong> ${
                                envio.remitente
                              }</p>
                              <p><strong>Origen:</strong> ${envio.origen}</p>
                              <p><strong>Destinatario:</strong> ${
                                envio.destinatario
                              }</p>
                              <p><strong>Destino:</strong> ${envio.destino}</p>
                              <p><strong>Peso:</strong> ${envio.peso}</p>
                              <p><strong>Precio:</strong> ${precioPorKilo(
                                envio.zona,
                                envio.peso
                              )}</p>
                              <p><strong>Tipo de envio:</strong> Su envio se despachara en ${
                                envio.tipoEnvio
                              }</p>
                              <p><strong>Demora:</strong> Su paquete llegara al ${
                                envio.zona
                              } en ${envioZona(envio.zona)}</p>
                              <div class="botones-form">
                              <button class="boton-form boton-eliminar-envios" type="button" onclick="eliminarEnvio(${
                                envio.id
                              })">Eliminar</button>
                              <button class="boton-form boton-eliminar-envios" type="button" id="mostrar" onclick="modificarEnvio(${
                                envio.id
                              })">Modificar</button>
                              </div>`;
      contenedor.className = "tarj-datos";
      seccion.appendChild(contenedor);
    });
    seccion.className = "envios area-datos";
    main.appendChild(seccion);
  }
  verEnvios();
  
//   Funcion para eliminar envios
  function eliminarEnvio(id) {
    Swal.fire({
      title: "Seguro que quiere eliminar el envio?",
      text: "Esta accion no podra revertirse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, seguro",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const indice = lStorage.findIndex((envio) => envio.id === id);
        if (indice !== -1) {
          lStorage.splice(indice, 1);
          localStorage.setItem("BaseDatos", JSON.stringify(lStorage));
          verEnvios();
          Swal.fire({
            title: "Eliminado",
            text: "Su envío ha sido eliminado con éxito",
            icon: "success",
          }).then(() => {
            location.reload();
          });
        }
      }
    });
  }
  
//   Funcion para modificar envios
  function modificarEnvio(id) {
    const envioExistente = lStorage.find((envio) => envio.id === id);
  
    document.getElementById("formulario").style.opacity = "1";
    document.getElementById("formulario").style.pointerEvents = "auto";
    document.getElementById("enviar").style.display = "none";
  
    if (!envioExistente) {
      alert("El envío con el ID especificado no existe.");
      return;
    }
  
    let remitente = envioExistente.remitente;
    let origen = envioExistente.origen;
    let destinatario = envioExistente.destinatario;
    let destino = envioExistente.destino;
    let peso = envioExistente.peso;
    let tipoEnvio = envioExistente.tipoEnvio;
    let zona = envioExistente.zona;
  
    document.getElementById("Remitente").value = remitente;
    document.getElementById("Origen").value = origen;
    document.getElementById("Destinatario").value = destinatario;
    document.getElementById("Destino").value = destino;
    document.getElementById("Peso").value = peso;
  
    let zonaSelect = document.getElementById("Zona");
    for (let i = 0; i < zonaSelect.options.length; i++) {
      if (zonaSelect.options[i].value === zona) {
        zonaSelect.selectedIndex = i;
        break;
      }
    }
  
    let tipoSelect = document.getElementsByName("Tipo");
    for (let i = 0; i < tipoSelect.length; i++) {
      if (tipoSelect[i].value === tipoEnvio) {
        tipoSelect[i].checked = true;
        break;
      }
    }
  
    const guardarCambios = () => {
      remitente = document.getElementById("Remitente").value;
      origen = document.getElementById("Origen").value;
      destinatario = document.getElementById("Destinatario").value;
      destino = document.getElementById("Destino").value;
      peso = document.getElementById("Peso").value;
      tipoEnvio = document.querySelector('input[name="Tipo"]:checked').value;
      zona = document.getElementById("Zona").value;
  
      envioExistente.remitente = remitente;
      envioExistente.origen = origen;
      envioExistente.destinatario = destinatario;
      envioExistente.destino = destino;
      envioExistente.peso = peso;
      envioExistente.tipoEnvio = tipoEnvio;
      envioExistente.zona = zona;
  
      const index = lStorage.findIndex((envio) => envio.id === id);
      lStorage[index] = envioExistente;
  
      localStorage.setItem("BaseDatos", JSON.stringify(lStorage));
  
      Swal.fire({
        icon: "success",
        title: "Envio modificado",
        text: "Recuerde corroborar bien sus datos!",
      }).then(() => {
        document.getElementById("formulario").style.opacity = "0";
        document.getElementById("formulario").style.pointerEvents = "none";
        location.reload();
      });
    };
  
    document
      .getElementById("guardarCambios")
      .addEventListener("click", guardarCambios);
  }
  
  // Ver detalles de los tipos de paquetes
const seccion = document.querySelector(".envios");
if(seccion.innerHTML === ''){
  function verJSON() {
  const main = document.querySelector("main");
  const seccion = document.createElement("section");
  fetch("http://localhost:3000/tipo")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((tipoEnvio) => {
        const contenedor = document.createElement("div");
        contenedor.innerHTML = `<div><h2 class="h2-tipos">${tipoEnvio.nombre}</h2>
                                  <div class="div-tipos">
                                    <div>
                                      <img class="img-tipos" src="${tipoEnvio.imagen}" alt="${tipoEnvio.detalle}">
                                    </div>
                                    <div>
                                      <p class="p-tipos"><strong>Detalles del tipo de paquete: </strong>${tipoEnvio.dimension}</p>
                                    </div>
                                  </div>
                                </div>`;  
        contenedor.className = "tarj-datos div-tipos";
        seccion.appendChild(contenedor);
      })
      seccion.className = "envios area-datos";
      main.appendChild(seccion);
    })
}
verJSON();
}

  
  
