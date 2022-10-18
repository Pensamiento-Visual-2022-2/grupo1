import pandas as pd
especialidades = ["Discapacidad Intelectual","Ceguera","Sordera","Discapacidad Motora Grave","Discapacidad Motora Moderada","Trastorno del Espectro Autista","Trastorno del Espectro Autista - Asperger","Retraso Global del Desarrollo","Disfasia Severa","Graves alt. de la relac. y de la Comunicacion","Hipoacusia Severa","Hipoacusia Moderada","Baja Vision","Discapacidad Multiple","Sindrome Down","Sordoceguera","Funcionamiento Intelectual Limitrofe","Dificultades Especificas del Aprendizaje","TEL Mixto","TEL Expresivo"]
df = pd.read_csv("pie2.csv",sep=";",encoding="utf-8",header=0)
colegios = df.T.reset_index().values.T.tolist()

u = 0
for especialidad in especialidades:
    archivo = open("POPUP_aysen_PIE_"+especialidad+".txt","w")
    for i in range(len(colegios[0])):
        if especialidad == str(colegios[0][i]):
            index = i
    for colegio in colegios:
        if "11" in colegio[1] and colegio[index]!=' ---':
            archivo.write("<button class=\"nombre_colegios\" id=\"pie"+str(u)+"\">"+colegio[5]+"</button>\n")
            archivo.write("<div class=\"pie"+str(u)+"\" id=\"modal_container_e4\">\n")
            archivo.write(" <div class=\"modal\">\n")
            archivo.write("  <h1>"+colegio[5]+"</h1>\n")
            archivo.write("  <h3 style=\"color:#A6C8E9\">Escuela PIE</h3>\n")
            archivo.write("  <p>\n")
            archivo.write("   <strong>Comuna:</strong> "+colegio[2]+"<br>\n")
            archivo.write("   <strong>Direccion:</strong> "+str(colegio[7])+"<br>\n")
            archivo.write("   <strong>Dependencia:</strong> "+colegio[4]+"<br>\n")
            archivo.write("   <strong>Fono:</strong> "+str(colegio[8])+"-"+str(colegio[9])+"<br>\n")
            archivo.write("   <strong>Correo:</strong> "+str(colegio[10])+"<br>\n")
            archivo.write("    <p>\n")
            archivo.write("     Necesidades especiales que puede acoger:<br>\n")
            archivo.write("     <ul type=\"A\">\n")
            for especialidad2 in especialidades:
                for i in range(9,len(colegios[0])):
                    if especialidad2 == str(colegios[0][i]) and colegio[i]!=' ---':
                        archivo.write("      <li> "+str(colegios[0][i])+"</li>\n")
            archivo.write("     </ul>\n")
            archivo.write("    </p>\n")
            archivo.write("  </p>\n")
            archivo.write("  <button id=\"close\">\n")
            archivo.write("   Cerrar\n")
            archivo.write("  </button>\n")
            archivo.write(" </div>\n")
            archivo.write("</div>\n\n")

            u += 1