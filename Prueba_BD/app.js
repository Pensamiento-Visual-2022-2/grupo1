const XLSX = require('xlsx');

function leerExcelEspeciales(ruta) {
    const workbook = XLSX.readFile(ruta);
    const workbookSheets = workbook.SheetNames;

    //    console.log(workbookSheets);
    const sheet = workbookSheets[0];
    const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet],{header: 1});
    var lista_colegios=[]
    for (let j = 0; j < dataExcel.length; j++) {
        lista_colegios.push(dataExcel[j])
    }
    //ya tenemos la lista con todos los colegios
    var lista_obj_colegios=[]

    function necesidad(elemento_lista) {
        if (elemento_lista=='ü') {
            return 1
        }
        else {
            return 0
        }
    }

    for (let i = 0; i < lista_colegios.length; i+=1) {
        var RBD=lista_colegios[i][0]
        var NOMBRE=lista_colegios[i][1]
        var DEPENDENCIA=lista_colegios[i][2]
        var DIRECCIÓN=lista_colegios[i][3]
        var REGION=lista_colegios[i][4]
        var COMUNA=lista_colegios[i][5]
        var NOMBRE_DIRECTOR=lista_colegios[i][6]
        var Email_DIRECTOR=lista_colegios[i][7]
        var TELEFONO=lista_colegios[i][8]
        var EMAIL_ESTABLECIMIENTO=lista_colegios[i][9]
        var Discapacidad_Auditiva=necesidad(lista_colegios[i][10])
        var Discapacidad_Intelectual=necesidad(lista_colegios[i][11])
        var Discapacidad_Visual=necesidad(lista_colegios[i][12])
        var Trastornos_Específicos_del_Lenguaje=necesidad(lista_colegios[i][13])
        var Transtornos_Motores=necesidad(lista_colegios[i][14])
        var TEA=necesidad(lista_colegios[i][15])
        var GARC=necesidad(lista_colegios[i][16])
        var Discapacidad_Múltiple=necesidad(lista_colegios[i][17])
        var Sordoceguera=necesidad(lista_colegios[i][18])
        var Colegio={
            "RBD":RBD,
            "NOMBRE":NOMBRE,
            "DEPENDENCIA":DEPENDENCIA,
            "DIRECCION":DIRECCIÓN,
            "REGION":REGION,
            "COMUNA":COMUNA,
            "NOMBRE_DIRECTOR":NOMBRE_DIRECTOR,
            "Email_DIRECTOR":Email_DIRECTOR,
            "TELEFONO": TELEFONO,
            "EMAIL_ESTABLECIMIENTO":EMAIL_ESTABLECIMIENTO,
            "Discapacidad_Auditiva":Discapacidad_Auditiva,
            "Discapacidad_Intelectual":Discapacidad_Intelectual,
            "Discapacidad_Visual":Discapacidad_Visual,
            "Trastornos_Especificos_del_Lenguaje":Trastornos_Específicos_del_Lenguaje,
            "Transtornos_Motores":Transtornos_Motores,
            "TEA":TEA,
            "GARC":GARC,
            "Discapacidad_Multiple":Discapacidad_Múltiple,
            "Sordoceguera":Sordoceguera
        }
    lista_obj_colegios.push(Colegio)
    }
    return lista_obj_colegios
    //console.log(dataExcel);
     //lista=[]
    //for (fila in dataExcel) {
        //lista=lista.push(fila)

    //}
    //console.log(fila[0])
}
console.log(leerExcelEspeciales('BD_-ESCUELA-ESPECIALES_2021.xlsx'))

//console.log(leerExcel('BD_-ESCUELA-ESPECIALES_2021.xlsx')[1])

export { leerExcelEspecialidades }


