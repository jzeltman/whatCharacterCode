$(document).ready(function(){
  $("input#character").keyup(function(ev){
    var s_i = $("input#character").val();
    if (s_i.length) {
      var i_o = s_i.charCodeAt(s_i.length-1);
      $("input#character").val(s_i.charAt(s_i.length-1));
      $("p#output").text("Character Code: "+i_o);
    } else {
      $("p#output").text("");
    }
    return false;
  });
});