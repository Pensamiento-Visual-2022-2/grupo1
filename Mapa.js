$(document).ready(function(){
    var region = $(".region");
    var Aysen = $("#CL-AI");
    var a=1;
    $("#CL-AI").css('stroke','#0a0a0a');
    $("#CL-AI").css('stroke-width','3px');
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
          $(this).css('fill', '#9f69d1');
        };
        if (n>50 && n<=100){
          $(this).css('fill', '#8744c6');
        };
        if (n>100 && n<=500){
          $(this).css('fill', '#6b2bab');
        };
        if (n>500 && n<=1000){
          $(this).css('fill', '#541a8e');
        };
        if (n>1000){
          $(this).css('fill', '#381765');
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
  colegio.click(function(){
    b=b*(-1)
    id=$(this).prop('id');
    $(".nombre_colegios").each(function(){

      $("#modal_container_e4").each(function(){
        info=$("#modal_container_e4").prop('class', "."+id);
        if(b<0){
          info.show()
        }
        if (b>0){
          info.hide()
        }
      });
    });

  });
});