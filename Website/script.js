$(document).ready(function() {
    $("button.texta").click(function(){
            $("button.texta").fadeOut(350);
            $("button.textb").fadeOut(350);
            $("button.textc").fadeOut(350);
                setTimeout(function(){
            $("img.imga").fadeIn();}, 350);
                setTimeout(function(){
            $("img.imgb").fadeIn();}, 350);
                setTimeout(function(){
            $("button.return").fadeIn();}, 350);
                setTimeout(function(){
            $("p").fadeIn();}, 350);

    });
      $("button.return").click(function(){
            setTimeout(function(){
        $("button.texta").fadeIn();}, 350);
            setTimeout(function(){
        $("button.textb").fadeIn();}, 350);
            setTimeout(function(){
        $("button.textc").fadeIn();}, 350);
        $("img.imga").fadeOut(350);
        $("img.imgb").fadeOut(350);
        $("button.return").fadeOut(350);
        $("p").fadeOut(350);
});
});