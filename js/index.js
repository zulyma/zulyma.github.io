import hamburgerMenu from "./menu.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import contactFormValidations from "./validaciones_formulario.js";


const d=document;
d.addEventListener("DOMContentLoaded",e=>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube","(min-width:1024px)",`<a href="https://www.youtube.com/watch?v=2BmMWIa7Qfg" target="_blank" style="text-decoration:none; color:var(--main-color);" rel="noopener">Ver video</a>`, `<iframe class="rounded border border-2" width="560" height="315" src="https://www.youtube.com/embed/2BmMWIa7Qfg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
   contactFormValidations();
   
})


darkTheme(".dark-theme-btn", "dark-mode");