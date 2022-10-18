$(document).ready(function(){
    var region = $(".region");
    $("#CL-AI").css('stroke','#0a0a0a');
    $("#CL-AI").css('stroke-width','3px');
    var Aysen = $("#CL-AI");
    var a=1;
    $(".colegios_especialidad").hide()
    Aysen.click(function(){
      a=a*(-1)
      if (a<0){
        $(".colegios_especialidad").show();
      };
      if (a>0){
        $(".colegios_especialidad").hide();
      };
    });
    $(".region").each(function(){
        var dataRegion=$(this).attr("data")
        var n=parseFloat(dataRegion)
        if (n==0){
          $(this).css('fill', '#A9A9A9');
        };
        if (n>0 && n<=50){
          $(this).css('fill', '#dd87b2');
        };
        if (n>50 && n<=100){
          $(this).css('fill', '#cf71a0');
        };
        if (n>100 && n<=500){
          $(this).css('fill', '#b44479');
        };
        if (n>500 && n<=1000){
          $(this).css('fill', '#8b355e');
        };
        if (n>1000){
          $(this).css('fill', '#3c1728');
        };
    });  
    region.mouseenter(function(){
      var titleComuna = $(this).attr("title");
      $("#divregion").text(titleComuna);
      $(this).fadeTo("fast", 0.5);
      var dataRegion = $(this).attr("data");
      $("#divncolegios").text(dataRegion);
      $("#resumen").css('display','block');
      $("#resumen").css('top',parseInt(window.event.pageY + 10) + "px");
      $("#resumen").css('left',parseInt(window.event.pageX + 10) + "px");
    });
    region.mouseleave(function(){
      $("#divregion").text("Seleccione una Región");
      $("#divncolegios").text("");
      $(this).fadeTo("fast", 1);
      $("#resumen").css('display','none');

    });
    region.click(function(){
      var titleComuna = $(this).attr("title");
      $("#nombreregion").text(titleComuna);
      $(".dropdown-content").show();
      $(".region").each(function(){
        if ($(this).css('stroke','#421e04')){
          $(this).css('stroke','#292929');
          $(this).css('stroke-width','1px');
        };
      });  
      if ($(this).css('stroke','#292929')){
        $(this).css('stroke','#421e04');
        $(this).css('stroke-width','2px');
      };
    })
  });
$(document).ready(function(){
  var colegio = $(".nombre_colegios");
  var b=1;
  $(".nombre_colegios").each(function(){
    var id= $(this).attr("id");
    $("."+id).hide();
  });
  $("#modal_container_e4").hide();
  colegio.click(function(){
    b=b*(-1)
    $(".nombre_colegios").each(function(){
      var id= $(this).attr("id");
      var cerrar=$("#close");
      cerrar.click(function(){
        b=b*(-1);
        $("."+id).hide();
      });
      if (b<0){
        $("."+id).show();        
      };
      if (b>0){
        $("."+id).hide();

      };
    });
  });
});