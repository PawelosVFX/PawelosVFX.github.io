$(document).ready(function() {
    $("button.texta").click(function(){
            $("button.texta").fadeOut(500);
            $('button.texta').attr("disabled", true);  
            $("button.textb").fadeOut(500);
            $("button.textc").fadeOut(500);
                setTimeout(function(){
            $("img.imga").fadeIn();}, 600);
                setTimeout(function(){
            $("img.imgb").fadeIn();}, 600);
                setTimeout(function(){
            $('.return').attr("disabled", false); 
            $(".return").fadeIn();}, 600);
                setTimeout(function(){
            $("p").fadeIn();}, 600);
                setTimeout(function(){
            $(".box").fadeIn();}, 600);

    });
      $("button.return").click(function(){
            setTimeout(function(){
        $('button.texta').attr("disabled", false)
        $("button.texta").fadeIn();}, 650);
            setTimeout(function(){
        $("button.textb").fadeIn();}, 650);
            setTimeout(function(){
        $("button.textc").fadeIn();}, 600);
        $("img.imga").fadeOut(500);
        $("img.imgb").fadeOut(500);
        $(".return").fadeOut(500);
        $('.return').attr("disabled", true)
        $("p").fadeOut(500); 
        $(".box").fadeOut(500); 

});
});

