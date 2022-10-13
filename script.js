$(document).ready(function () {

    /*Guardas la clase ".change-en" en una variable local y la añades a donde tienes los idiomas*/
    var userPref = localStorage.getItem(".change-en");
    $(".language-selected").addClass(userPref);

    /*Al hacer clic, se ejecutan las funciones "swapPref" y "tradES", además, se cambia el texto del idioma seleccionado.*/
    $(".es").click(function(){
        swapPref("change-en","change-es")
        $(".language-selected").text("ES");
        tradES();

    })

    $(".en").click(function(){
        swapPref("change-es","change-en")
        $(".language-selected").text("EN");
        tradEN();
    })

    /*La función swapPref elimina la clase almacenada y añade la nueva según el idioma elegido. Además, cambia la preferencia local (se mantiene en toda la web)*/
    function swapPref(out1, inn){
        $(".language-selected").removeClass("userPref");
        $(".language-selected").removeClass(out1);
        $(".language-selected").addClass(inn);
        localStorage.setItem(".change-en", inn);
    }

    /*Si se detecta que la clase "change-es" existe, traduce la web al español.*/
    if($(".language-selected").hasClass("change-es")){
        tradES();
        $(".language-selected").text("ES");
    }else{
        tradEN();
    }

    /*MULTILENGUAJE*/
    //ENGLISH

    function tradEN (){
        $("body").animate({"opacity":"0.0"}, 600, function(){
            //Menú
            $(".menu_item:nth-of-type(1) a").text('About Me');
            $(".menu_item:nth-of-type(2) a").text('Knowledge');
            $(".menu_item:nth-of-type(3) a").text('Projects');
            $(".menu_item:nth-of-type(4) a").text('Contact');

            //HERO
            $(".content h4").text("Hello, my name is");
            $(".content h1").text('Víctor Jácome');
            $(".content h3").text("I'm a web designer");

            //SOBRE MI
            $(".texto h2").text('About Me');
            $(".texto h5").html('Web <span>Designer</span>'); 
            $(".texto p").text("Looking forward to gain more professional experience. I prefer UX design and front-end development but I'm always willing to explore new areas and technologies.");  
            
            //CONOCIMIENTOS
            $(".title h2").text('Knowledge');
            $(".card:nth-of-type(1) h5").text('UX/UI Design');
            $(".card:nth-of-type(1) p").text('Knowledge about the development process of an application. From the UX process (Desk Research, Netnography, User Persona, etc.) to the UI Design(Creation of elements, creation of prototypes, etc.).');

            $(".card:nth-of-type(2) h5").text('Web Design with HTML, CSS and Javascript');
            $(".card:nth-of-type(2) p").text('Knowledge about how to create a webpage from zero, using HTML5, CSS3 and Javascript. I also know how to use Jquery and some of its plugins.	')

            $(".card:nth-of-type(3) h5").text('Web Design with Wordpress');
            $(".card:nth-of-type(3) p").text('Knowledge about how to create a webpage from zero using wordpress. Experience with theme builders like Elementor, child themes and web optimization.')

            $(".card:nth-of-type(4) h5").text('Fullstack Development');
            $(".card:nth-of-type(4) p").text('Knowledge about php, data bases and how to use them in web applications. Some experience with frameworks like Laravel.')

            //PORTFOLIO
            $(".portfolio h2").text('Projects');
            $("#portfolio > div > div:nth-child(1) > div > div.info > div.sub > p").text('UX/UI Design');
            $("#portfolio > div > div:nth-child(2) > div > div.info > div.sub > p").text('Web Design with Wordpress');
            $("#portfolio > div > div:nth-child(3) > div > div.info > div.sub > p").text('Fullstack Development');

            //CONTACTO
            $("#contacto h2:nth-of-type(1)").text("Contact");
            $("#contacto p:nth-of-type(1)").text("Let me be part of your team!");
            $("#contacto p:nth-of-type(2)").text("To contact me, you can fill this form or use the social media icons to visit them.");
            $("#contacto > form > div:nth-child(2) > label").text("Name:");
            $("#contacto > form > div:nth-child(3) > label").text("Email:");
            $("#contacto > form > div:nth-child(4) > label").text("Message:");
            $("#message").text("Write your message here");
            $("#contacto > form > div:nth-child(5) > button").text("!Contact Me!");

        /* ARTWORK TEST */

            //Parte 1
            $("#hero > div > div.texto1 > p").html('Final project of my <span>"UX/UI Design course"</span>. The idea was to create a social network for artists. To do so, we make a research about the topic, we also made surveys and interviews to potential users of the app. Sketches and prototypes were also made to test the functionality of the app. This project was divided in 2 parts: One for the UX research and one for the UI Design.');
            $('#warn').text('Note: To watch the video in good quality, we recommend to watch this portfolio on pc or tablet.')

            //Parte 2
            $('body > main > div.content2 > div.texto1 > h2').text('User Experience (UX)');
            $('body > main > div.content2 > div.texto1 > p').text('For the UX part, we could see 3 different steps:');
            $('body > main > div.content2 > div.texto1 > ul > li').html('<u>1) Observation:</u> On this step, we made a research about apps that look alike <span>(Desk Research)</span>, about different opinions that the users have about them <span>(Netnography)</span>, using graphics to visualize our conclusions. We also started to consider options about how to approach the project using <span>"Research Questions"</span>, <span>"Benchmarking"</span> and a <span>"SWOT analysis"</span>. A survey was also made using <span>"Google Forms"</span> and we made some interviews to potential users of the app (Both artists and non artists).');
            
            //Parte 3
            $('body > main > div:nth-child(2) > div.texto1 > h2').text('User Experience (UX)');
            $('body > main > div:nth-child(2) > div.texto1 > ul > li:nth-child(1)').html('<u>2)Summary:</u> On this step we analysed the profile of the potential users of the app by creating a <span>"User Persona"</span>, we also used <span>"Empathy Maps"</span>, <span>"Customer Journeys"</span> and a <span>"Matrix of Needs"</span>.');
            $('body > main > div:nth-child(2) > div.texto1 > ul > li:nth-child(2)').html('<u>3)Ideation:</u> We organised the ideas gathered in the previous steps and we analyse their viability through <span>"MoSCoW diagrams"</span>, <span>"in/Out diagrams"</span>. We also made <span>"Value Propositions"</span> from the ideas. In this phase, we choose which ideas will be added or discarded from the project.');
            
            //Parte 4
            $('body > main > div.content4 > div.texto1 > h2').text('User Interface (UI)');
            $('body > main > div.content4 > div.texto1 > p').html('This part is about creating a functional prototype of the app. We started with a <span>"Moodboard"</span>, we looked for references and inspiration from similar projects. Then we created <span>"flowcharts"</span> and <span>"wireframes"</span> for the basic structure of the app. We also created a high-fidelity prototype using <span>"Figma"</span>. We designed the minimal elements using this software so we could design the prototype in a easier and more efficient way.');

            //Parte 5
            $('#mas > div.texto1 > h2').text('More about the project');
            $('#mas > div.texto1 > p').text('The High-Fidelity prototype is uploaded. You can see the differents parts of the app and you can even try it. You can also see the components, just by visiting this link:');
            $('#mas > div.texto1 > button').html('<a target="_blank" href="https://www.figma.com/proto/lyWAeg7cmPdUHgcrFwOg88/ArtWork_Mine?page-id=123%3A856&node-id=183%3A561&viewport=655%2C401%2C0.25&scaling=min-zoom&starting-point-node-id=124%3A63">Go to the project</a>');
            $('#btnFinal').html('<a href="/index.html">Go to the main page</a>');

        /* DREAMCATCHER*/

            //Parte 1
            $("#texto1DC > p").html('Final project of the <span>"Wordpress Course"</span>. Our goal was to create a webpage dedicated to the Kpop girl group <span>"Dreamcatcher"</span>.'+
            ' This website has information about the group members, their discography, their history and you can also suscribe to a '+
            '<span>"Newsletter"</span> to stay tuned for new updates.');

            //Parte 2
            $("#texto2DC > h2").text('What tools did I use?');
            $("#texto2DC > p").html('This website was made by using <span>"Elementor Pro"</span> as a theme builder. This project was designed from Zero '+
            'and it had a phase of creative design (moodboard, prototyping, etc.) and a phase of building using Wordpress. We used '+
            'plugins like <span>"Loginpress</span> (used to customize the access to the administration panel of the website),<span>"WPS Child Theme Generator"</span> '+
            '(use to create child themes), <span>"WP-Optimize"</span> (for web and image optimization), etc.');

            //Parte 3
            $("#texto3DC > h2").text("More about the project");
            $("#texto3DC > p").html('The project used a lot of plugins to improve is functionality. <span>"WPS Hide Login"</span> was used to hide the administration'+
            ' panel of the website (getting rid of the famous <span>"wp-admin"</span> and hiding it from the visitors).'+ 
            '<span> "Wordfence"</span> was used as an antivirus and antimalware plugin. <span>"All-in One WP-Migration"</span> was also '+
            'used to create backups in case we need them (or even to migrate the website). If you want to see the web and try it, here is the link:');
            $("#texto3DC > button > a").text('Go to the project');
            $('#btnFinal').html('<a href="/index.html">Go to the main page</a>');

        /*GENSHIN ASCENSION CARDS*/
        
            //Parte 1
            $("#gac1 > p").html('Final project of the <span>"Fullstack course"</span>. Our goal was to create a web app which could generate cards from '+
            'a previously selected character. These cards give us information about the materials we need to level up our characters. '+
            'All the characters are from a videogame called <span>"Genshin Impact"</span>. We decided to add a download button so we could save the generated card in our device.');
            
            //Parte 2
            $("#gac2 > h2").text('What tools did I use?');
            $("#gac2 > p").html('The website was designed using HTML5, CSS3, Javascript and JQuery. All the information was uploaded to a database from '+
            '<span>"Heroku"</span> and was linked to our site using php. The code was uploaded to a <span>"Github"</span> repository '+
            'and synchronized with our website so any change is live in real time.');

            //Parte 3
            $("#gac3 > h2").text("More about the project");
            $("#gac3 > p").html('The project has a <span>"Contact"</span> and an <span>"About Us"</span> section with images to improve the visual of the site. If you want '+
            'to watch the website running, you can try it by following this link:');
            $('#gac3 > button > a').text('Go to the project');
            $('#btnFinal').html('<a href="/index.html">Go to the main page</a>');

        })

        $("body").animate({"opacity":"1.0"}, 400, function(){});
    }

    //SPANISH
    function tradES(){
        $("body").animate({"opacity":"0.0"}, 600, function(){
            //Menú
            $(".menu_item:nth-of-type(1) a").text('Sobre Mi');
            $(".menu_item:nth-of-type(2) a").text('Conocimientos');
            $(".menu_item:nth-of-type(3) a").text('Proyectos');
            $(".menu_item:nth-of-type(4) a").text('Contacto');

            //HERO
            $(".content h4").text("Hola, me llamo");
            $(".content h1").text('Víctor Jácome');
            $(".content h3").text("Soy diseñador web");

            //SOBRE MI
            $(".texto h2").text('Sobre Mi');
            $(".texto h5").html('Diseñador <span> Web</span>'); 
            $(".texto p").text('Deseo conseguir mayor experiencia profesional. Aunque mis preferencias están relacionados con el desarrollo web frontend, estoy dispuesto a explorar nuevas áreas y aprender sobre nuevas tecnologías.');  
            
            //CONOCIMIENTOS
            $(".title h2").text('Conocimientos');
            $(".card:nth-of-type(1) h5").text('Diseño UX/UI');
            $(".card:nth-of-type(1) p").text('Conocimientos sobre el proceso de diseño de una aplicación, desde el Desk Research, Netnografía, hasta la elaboración de Customer Journeys, User Persona, Business Model Canvas, etc. Conocimientos de diseño UI con Figma y uso de Photoshop.');

            $(".card:nth-of-type(2) h5").text('Diseño Web con HTML, CSS y Javascript');
            $(".card:nth-of-type(2) p").text('Conocimientos sobre Diseño Web para la creación de páginas web desde cero, utilizando HTML5, CSS3 y JavaScript. Conocimientos de Jquery y su ecosistema de plugins.')

            $(".card:nth-of-type(3) h5").text('Diseño Web con Wordpress');
            $(".card:nth-of-type(3) p").text('Conocimientos sobre Diseño Web con Wordpress y su ecosistema de plugins. Experiencia con Elementor como constructor visual y diseño de páginas web. Creación de páginas web desde cero.')

            $(".card:nth-of-type(4) h5").text('Programación Fullstack');
            $(".card:nth-of-type(4) p").text('Conocimientos sobre php, bases de datos y uso de Workbench. Inserción, edición, selección y borrado de elementos en bases de datos. Integración de las mismas en aplicaciones web. Tengo algo de experiencia con Frameworks como Laravel.')
            
            //PORTFOLIO
            $(".portfolio h2").text('Proyectos');
            $("#portfolio > div > div:nth-child(1) > div > div.info > div.sub > p").text('Diseño UX/UI');
            $("#portfolio > div > div:nth-child(2) > div > div.info > div.sub > p").text('Diseño Web con Wordpress');
            $("#portfolio > div > div:nth-child(3) > div > div.info > div.sub > p").text('Desarrollo Web Fullstack');

            //CONTACTO
            $("#contacto h2:nth-of-type(1)").text("Contacto");
            $("#contacto p:nth-of-type(1)").text("¡Déjame ser parte de tu equipo!");
            $("#contacto p:nth-of-type(2)").text("Para contactarme, puedes rellenar el siguiente formulario o hacer clic en los iconos para redirigirte a mis redes sociales.");
            $("#contacto > form > div:nth-child(2) > label").text("Nombre:");
            $("#contacto > form > div:nth-child(3) > label").text("Correo Electrónico:");
            $("#contacto > form > div:nth-child(4) > label").text("Mensaje:");
            $("#message").text("Escribe aquí tu mensaje");
            $("#contacto > form > div:nth-child(5) > button").text("!Contáctame!");

        /* ARTWORK TEST */

            //Parte 1
            $("#hero > div > div.texto1 > p").html('Proyecto final del módulo de <span>“Diseño UX/UI”</span>.'+ 
            ' La idea era crear una red social para artistas. Para ello, realizamos todo un trabajo de investigación, encuestas y algunas entrevistas a potenciales usuarios de la aplicación.'+ 
            ' También realizamos bocetos y un pequeño prototipo funcional con algunas de las funciones de la aplicación.'+
            ' Este proyecto se dividió en 2 partes: una orientada a UX y otra a UI.');
            $('#warn').text('(Se recomienda ver este proyecto en tablet o en pc para mejor calidad de los vídeos).')

            //Parte 2
            $('body > main > div.content2 > div.texto1 > h2').text('Experiencia de Usuario (UX)');
            $('body > main > div.content2 > div.texto1 > p').text('Para el apartado de UX, podemos diferenciar 3 procesos distintos:');
            $('body > main > div.content2 > div.texto1 > ul > li').html('<u>1) Observación:</u> Esta fase consistió en investigar sobre aplicaciones similares a través de artículos <span>(Desk Research)</span>, opiniones de los usuarios sobre ellas <span>(Netnografía)</span>, '+
            'utilizando gráficos para analizar las conclusiones, además de plantearnos como abordar el proyecto a través de las <span>“Research Questions”</span>, <span>“Benchmarking”</span> '+
            'y un <span>“Análisis DAFO”</span>. También se realizó una encuesta a través de <span>“Google Forms”</span> y se realizaron algunas entrevistas a potenciales usuarios de la aplicación (artistas y no artistas). ');
            
            //Parte 3
            $('body > main > div:nth-child(2) > div.texto1 > h2').text('Experiencia de Usuario (UX)');
            $('body > main > div:nth-child(2) > div.texto1 > ul > li:nth-child(1)').html('<u>2) Síntesis:</u> En esta fase nos dedicamos a analizar el perfil de nuestros potenciales usuarios a través de la creación de un <span>“User Persona”</span>, '+
            'así como un análisis a través de <span>“Mapas de Empatía”</span>, <span>“Customer Journeys”</span> y una <span>“Matriz de necesidades”</span>.');
            $('body > main > div:nth-child(2) > div.texto1 > ul > li:nth-child(2)').html('<u>3)Ideación:</u> Fase dedicada a organizar las ideas generadas en las fases anteriores'+
            ' y analizar su viabilidad a través de <span>“Matrices de utilidad”</span>, <span>“diagramas in/out”</span>, '+
            '<span>“diagramas MosCoW”</span>, etc. Además, se realizan <span>“Propuestas de Valor”</span> sobre las ideas.'+
            'En esta fase se integran y descartan ideas para dar vida a la futura aplicación.');

            //Parte 4
            $('body > main > div.content4 > div.texto1 > h2').text('Diseño de Interfaces (UI)');
            $('body > main > div.content4 > div.texto1 > p').html('Esta parte del proyecto está dedicada a la creación de un prototipo funcional.'+
            ' Empezamos con la creación de un <span>“Moodboard”</span> para buscar referencias e inspiración de proyectos similares. '+ 
            'Después se crearon los <span>“diagramas de flujo”</span> y los <span>“wireframes”</span> de cómo sería la aplicación.'+
            ' También se desarrolló un prototipo en alta utilizando <span>Figma</span>.'+ 
            ' Aquí se crearon los elementos mínimos para poder desarrollar el prototipo de manera más sencilla y controlable.');

            //Parte 5
            $('#mas > div.texto1 > h2').text('Más sobre el proyecto');
            $('#mas > div.texto1 > p').text('El prototipo funcional en alta está subido como proyecto en figma. Puedes mirar las distintas pantallas e incluso probarlo, también puedes ver sus componentes en el siguiente enlace:');
            $('#mas > div.texto1 > button > a').text('Ir al proyecto');
            $('#btnFinal').html('<a href="/index.html">Ir a la página principal</a>');

        /* DREAMCATCHER*/

            //Parte 1
            $("#texto1DC > p").html('Proyecto final del módulo de <span>“Wordpress”</span>. La idea principal era crear una página web dedicada al grupo de pop coreano <span>“Dreamcatcher”</span>. '+
            'La página tiene información sobre las integrantes del grupo, discografía, su historia y también un apartado en el que puedes suscribirte a una <span>“Newsletter”</span>.');

            //Parte 2
            $("#texto2DC > h2").text('¿Qué herramientas utilicé?');
            $("#texto2DC > p").html('La página web se diseñó utilizando <span>“Elementor Pro”</span> como constructor visual. Este proyecto tuvo una fase de diseño creativo (moodboard, prototipado, etc.) y otra de creación de la web con Wordpress. '+ 
            'Utilizamos algunos plugins como <span>"Loginpress”</span> (para personalizar la página de acceso eliminando el famoso <span>“wp-admin”</span>),<span>”WPS Child Theme Generator”</span> (creación de temas hijos), '+
            '<span>“WP-Optimize”</span> (Optimización de imágenes y de la web en general), etc');

            //Parte 3
            $("#texto3DC > h2").text("Más sobre el proyecto");
            $("#texto3DC > p").html('El proyecto cuenta con otros plugins para mejorar su funcionamiento, como <span>“WPS Hide Login”</span> (para ocultar a los visitantes el acceso a la web), '+
            '<span>“Wordfence”</span> (antivirus y anti-malware) y <span>“All-in One WP-Migration”</span> (para migrar el sitio a otro servicio de hosting). Si quieres ver la web en funcionamiento y probarla, aquí tienes un enlace directo:');
            $("#texto3DC > button > a").text('Ir al proyecto');
            $('#btnFinal').html('<a href="/index.html">Ir a la página principal</a>');

        /*GENSHIN ASCENSION CARDS*/
        
            //Parte 1
            $("#gac1 > p").html('Proyecto final del módulo de <span>“Fullstack”</span>. La idea era crear una aplicación web capaz de generar unas tarjetas según el personaje elegido. '+
            'Estas tarjetas nos brindarían información sobre los materiales necesarios para subir de nivel a dichos personajes. Los personajes son parte del videojuego '+
            'llamado <span>“Genshin Impact”</span>. Decidí implementar también un botón de descarga para poder guardar la tarjeta generada en el dispositivo.');
            
            //Parte 2
            $("#gac2 > h2").text('¿Qué herramientas utilicé?');
            $("#gac2 > p").html('La página web se diseñó utilizando HTML5, CSS3, Javascript y jQuery. La información se subió a una base de datos facilitada por <span> Heroku </span> y se conectó a la web con php. '+
            'El código está subido a un repositorio de <span>Github</span> y sincronizado para que cualquier cambio realizado sea efectivo casi al instante. ');

            //Parte 3
            $("#gac3 > h2").text("Más sobre el proyecto");
            $("#gac3 > p").html('El proyecto cuenta con una pequeña sección de contacto y con una sección de información sobre el origen del mismo, con imágenes para dar '+
            'mejor aspecto visual a la web. Si quieres ver la web en funcionamiento y probarla, aquí te dejo un enlace: ');
            $('#gac3 > button > a').text('Ir al proyecto');
            $('#btnFinal').html('<a href="/index.html">Ir a la página principal</a>');

        })
        $("body").animate({"opacity":"1.0"}, 600, function(){});
    }

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
