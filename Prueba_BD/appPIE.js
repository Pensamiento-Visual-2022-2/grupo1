"C:\Users\ddono\OneDrive\Escritorio\Prueba BD\DIRECTORIO_PIE_WEB_2022.xlsx"
const XLSX = require('xlsx');

function leerExcelPIE(ruta) {
    const workbook = XLSX.readFile(ruta);
    const workbookSheets = workbook.SheetNames;

    //console.log(workbookSheets);
    const sheet = workbookSheets[0];
    const dataExcelPIE = XLSX.utils.sheet_to_json(workbook.Sheets[sheet],{header: 1});
    //console.log(dataExcelPIE);
    var lista_colegiosPIE=[]
    for (let j = 1; j < dataExcelPIE.length; j++) {
        lista_colegiosPIE.push(dataExcelPIE[j])
    }

    function necesidad(elemento_lista) {
        if (elemento_lista=='ü') {
            return 1
        }
        else {
            return 0
        }
    }
    function dario(elemento1,elemento2,elemento3) {
        if (elemento1==1 || elemento2==1 || elemento3==1) {
            return 1
        }
        else {
            return 0
        }
    }
    function donoso(elemento1,elemento2) {
            if (elemento1==1 || elemento2==1) {
                return 1
            }
            else {
                return 0
            }       
        }

    var lista_obj_colegiosPIE=[]

    for (let i = 0; i < lista_colegiosPIE.length; i+=1) {
        var RBD=lista_colegiosPIE[i][0]
        var REGION=lista_colegiosPIE[i][1]
        var COMUNA=lista_colegiosPIE[i][2]
        var AREA=lista_colegiosPIE[i][3]
        var DEPENDENCIA=lista_colegiosPIE[i][4]
        var NOMBRE=lista_colegiosPIE[i][5]
        var NOMBRE_SOSTENEDOR=lista_colegiosPIE[i][6]
        var DIRECCIÓN=lista_colegiosPIE[i][7]
        var Email_DIRECTOR=lista_colegiosPIE[i][7]
        var TELEFONO=lista_colegiosPIE[i][8]+lista_colegiosPIE[i][9]
        var EMAIL_ESTABLECIMIENTO=lista_colegiosPIE[i][10]
        var Discapacidad_Auditiva=dario(necesidad(lista_colegiosPIE[i][13]),necesidad(lista_colegiosPIE[i][21]),necesidad(lista_colegiosPIE[i][22]))
        var Discapacidad_Intelectual=dario(necesidad(lista_colegiosPIE[i][11]),necesidad(lista_colegiosPIE[i][27]),necesidad(lista_colegiosPIE[i][28]))
        var Discapacidad_Visual=donoso(necesidad(lista_colegiosPIE[i][12]),necesidad(lista_colegiosPIE[i][23]))
        var Trastornos_Específicos_del_Lenguaje=dario(necesidad(lista_colegiosPIE[i][19]),necesidad(lista_colegiosPIE[i][29]),necesidad(lista_colegiosPIE[i][31]))
        var Transtornos_Motores=donoso(necesidad(lista_colegiosPIE[i][14]),necesidad(lista_colegiosPIE[i][15]))
        var TEA=donoso(necesidad(lista_colegiosPIE[i][16]),necesidad(lista_colegiosPIE[i][17]))
        var GARC=necesidad(lista_colegiosPIE[i][20])
        var Discapacidad_Múltiple=dario(necesidad(lista_colegiosPIE[i][24]),necesidad(lista_colegiosPIE[i][25]),necesidad(lista_colegiosPIE[i][18]))
        var Sordoceguera=necesidad(lista_colegiosPIE[i][26])
        var Colegio={
            "RBD":RBD,
            "NOMBRE":NOMBRE,
            "DEPENDENCIA":DEPENDENCIA,
            "DIRECCION":DIRECCIÓN,
            "REGION":REGION,
            "COMUNA":COMUNA,
            "NOMBRE_DIRECTOR":'No disponible',
            "NOMBRE_SOSTENEDOR":NOMBRE_SOSTENEDOR,
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
    lista_obj_colegiosPIE.push(Colegio)
    }
    return lista_obj_colegiosPIE
}
console.log(leerExcelPIE('DIRECTORIO_PIE_WEB_2022.xlsx'))

