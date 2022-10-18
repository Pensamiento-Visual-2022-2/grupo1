import pandas as pd
especialidades = ["Auditiva","Intelectual","Múltiple","Visual","Alteraciones","Sordoceguera","Autismo","Lenguaje","Motores"]
df = pd.read_csv("especiales2.csv",sep=";",encoding="utf-8",header=0)
colegios = df.T.reset_index().values.T.tolist()

u=0
for especialidad in especialidades:
    archivo = open("POPUP_aysen_EE_"+especialidad+".txt","w")
    for i in range(len(colegios[0])):
        if especialidad in str(colegios[0][i]):
            index = i
    for colegio in colegios:
        if colegio[4] == 11 and not pd.isna(colegio[index]):
            archivo.write("<button class=\"nombre_colegios\" id=\"e"+str(u)+"\">"+colegio[1]+"</button>\n")
            archivo.write("<div class=\"e"+str(u)+"\" id=\"modal_container_e4\">\n")
            archivo.write(" <div class=\"modal\">\n")
            archivo.write("  <h1>"+colegio[1]+"</h1>\n")
            archivo.write("  <h3 style=\"color:#A6C8E9\">Escuela Especial</h3>\n")
            archivo.write("  <p>\n")
            archivo.write("   <strong>Comuna:</strong> "+colegio[5]+"<br>\n")
            archivo.write("   <strong>Direccion:</strong> "+str(colegio[3])+"<br>\n")
            archivo.write("   <strong>Dependencia:</strong> "+colegio[2]+"<br>\n")
            archivo.write("   <strong>Fono:</strong> "+str(colegio[8])+"<br>\n")
            archivo.write("   <strong>Correo:</strong> "+str(colegio[9])+"<br>\n")
            archivo.write("    <p>\n")
            archivo.write("     Necesidades especiales que puede acoger:<br>\n")
            archivo.write("     <ul type=\"A\">\n")
            for especialidad2 in especialidades:
                for i in range(len(colegios[0])):
                    if especialidad2 in str(colegios[0][i]) and not pd.isna(colegio[i]):
                        archivo.write("                 <li> "+str(colegios[0][i])+" </li>\n")
            archivo.write("     </ul>\n")
            archivo.write("    </p>\n")
            archivo.write("  </p>\n")
            archivo.write("  <button id=\"close\">\n")
            archivo.write("   Cerrar\n")
            archivo.write("  </button>\n")
            archivo.write(" </div>\n")
            archivo.write("</div>\n\n") 

            u += 1