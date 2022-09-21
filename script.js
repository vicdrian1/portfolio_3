$(document).ready(function () {

    /*-MENÚ HAMBURGUESA-*/

    //Primero seleccionamos el contenedor con el id "burger_menu" y creamos una función que se ejecutará al hacer clic sobre él.
    $("#burger_menu").click(function () {

        //Estas líneas son referentes a la animación de las barras, añade las clases CSS en las que se modifican tanto la rotación como la opacidad
        $("#burger_menu>span:nth-child(1)").toggleClass("primera");
        $("#burger_menu>span:nth-child(2)").toggleClass("segunda");
        $("#burger_menu>span:nth-child(3)").toggleClass("tercera");

        /*Se usa la función "stop()" para evitar que se genere una cola de acciones al hacer varios clics de forma rápida. Al aparecer el menú en móvil, le añadimos la clase
        CSS "show"*/
        $(".menu_items").stop();

        /*Aquí activamos la clase "show" para que se muestre el menú. En caso de hacer clic en la "X", se desactivaría, cerrando el menú.*/
        $(".menu_items").toggleClass("show");

        /*Hacemos lo mismo con la clase "overflow-menu", que evitará que podamos movernos por la web al abrir el menú. */
        $('body').toggleClass("overflow-menu");

    });

    /*Creamos una función al hacer clic en cualquiera de los elementos del menú. Esta revertirá las clases activadas al hacer clic al "menú hamburguesa".
    De esta forma nos aseguramos que al hacer clic ya sea en el menú para cerrarlo o en cualquiera de sus elementos, todo vuelva a su lugar.
    Esto SOLO funcionará si el menú ya tiene la clase "overflow-menu", de lo contrario, evitaría poder scrollear al usar el menú en Desktop.*/
    $(".menu_item").click(function () {
        if ($('body').hasClass("overflow-menu")) {
            $('body').toggleClass("overflow-menu");
            $(".menu_items").toggleClass("show");
            $("#burger_menu>span:nth-child(1)").toggleClass("primera");
            $("#burger_menu>span:nth-child(2)").toggleClass("segunda");
            $("#burger_menu>span:nth-child(3)").toggleClass("tercera");
        }
    })

    /*Función para permitir que los contenedores se cierren al clicar en otros.*/

    $(".tarjetaInt").each(function(){
        $(this).click(function(){
            $(this).toggleClass("active");
            $(this).siblings().removeClass("active");
            $(this).stop(); 
        });
    })

    var lastScrollTop = 0;
    var headerHeight = $("header").outerHeight();
    var menuHeight = $("#slide_nav").outerHeight();

    $(window).scroll(function(){

        var st = $(this).scrollTop();

        //Scroll Down
        if(st> lastScrollTop && st > menuHeight){
            $("#slide_nav").slideUp(400);

            //Scroll Up
        }else if(st + $(window).height() < $(document).height()){
            $("#slide_nav").slideDown(400);
        }

        if(st < headerHeight){
            $("#slide_nav").removeClass("nav-down");
        }else{
            $("#slide_nav").addClass("nav-down");
        }

        lastScrollTop = st;
    })

    $('video').on('ended', function () {
        this.load();
        this.play();
      });
});
