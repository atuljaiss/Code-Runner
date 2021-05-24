$(".toggleButton").hover(function(){
    $(this).addClass("highlightedButton")
},function(){
    $(this).removeClass("highlightedButton");
}); 

$(".toggleButton").click( function(){
    $(this).toggleClass("active");
    $(this).removeClass("highlightedButton");
    var pannelId=$(this).attr("id")+"Pannel";
    $("#"+pannelId).toggleClass("hidden");
    var numOfActivePannel = 4 - $('.hidden').length;
    $(".pannel").width(($(window).width()/numOfActivePannel)-10);
});
function outputUpdate(){
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPannel").val() + "</style></head><body>" + $("#htmlPannel").val());
        document.getElementById("outputPannel").contentWindow.eval($("#jsPannel").val());
};
$(".pannel").height($(window).height()-$("#header").height());
$(".pannel").width(($(window).width()/2)-10);

outputUpdate();

$("textarea").on('change keyup paste',function(){
    outputUpdate();
});
$("#dark").click(function(){
    $("textarea").toggleClass("darkTheme");
    $("#dark").toggleClass("darkTheme");
    $("#header").toggleClass("headerDarkTheme");
});