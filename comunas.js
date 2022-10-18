import { leerExcelEspecialidades } from "Prueba_BD/app.js"

const colegios = leerExcelEspecialidades("Prueba_BD/DIRECTORIO_PIE_WEB_2022.xlsx")

const comunas = []

const dropdown_list = document.getDocumentByID('dropdown').children[1]

colegios.forEach(function (colegio, index) {
  if (!comunas.includes(colegio.comuna)) {
      var a = document.createElement("a");
      a.textContent = colegio.comuna;
      a.setAttribute('href', "#");
      dropdown_list.appendChild(a);
      comunas.append(colegio.comuna)
  }
}

                 