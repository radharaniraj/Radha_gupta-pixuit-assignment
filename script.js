$(document).ready(function(){
    var specialelementhandler = {
        "#editor":function(element,renderer){
            return true;
        }
    };
    $("#cmd").click(function(){
        var docs = new jsPDF();
        docs.fromHTML($("#target").html(),15,15,{
            "width":170,
            "elementhandlers":specialelementhandler
        });
        docs.save("Radha gupta_pixsuit assignment.pdf")
    });
});