const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
/**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

const onscroll = (el, listener) => {
el.addEventListener('scroll', listener)
}
let selectHeader =document.querySelector('#header')
if (selectHeader) {
const headerScrolled = () => {
    if (window.scrollY > 100) {

        selectHeader.classList.add('header-scrolled')
        selectHeader.querySelectorAll(".container-fluid nav ul li a").forEach(link=>{
            link.style.color = "grey";
            document.querySelector(".active").style.color = "#00a24e"
        })
      

    } else {
        selectHeader.querySelectorAll(".container-fluid nav ul li a").forEach(link=>{
            link.style.color = "white";
            document.querySelector(".active").style.color = "#00a24e"
        })
    selectHeader.classList.remove('header-scrolled')
    }
}
window.addEventListener('load', headerScrolled)
onscroll(document, headerScrolled)
}
/**
 * Mobile nav toggle
 */
on('click', '.mobile-nav-toggle', function(e) {
select('#navbar').classList.toggle('navbar-mobile')
this.classList.toggle('bi-list')
this.classList.toggle('bi-list')
})

/**
 * Mobile nav dropdowns activate
 */
on('click', '.navbar .dropdown > a', function(e) {
if (select('#navbar').classList.contains('navbar-mobile')) {
    e.preventDefault()
    this.nextElementSibling.classList.toggle('dropdown-active')
}
}, true)
document.querySelector("#navbar ul").addEventListener("click",(e)=>{
  if (document.querySelector("#navbar").classList.contains("navbar-mobile")){
    let navBar = document.querySelector(".navbar-mobile ul");
    navBar.querySelectorAll("li a").forEach(a=>{
      a.style.color="white"
      document.querySelector(".active").style.color = "#00a24e"
    })
    document.querySelector("#navbar").classList.remove("navbar-mobile")
  }
})
/*
* BTN NAVIGATIONS
*/ 
let navToAboutUs = () =>{
  $(location).attr("href", "/about.html")
}

let navToContact = () =>{
  $(location).attr("href", "/contact.html")
}

/*
*  AOS INIT
*/
function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      disable:"mobile"
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

/*
* OWL CAROUSEL
*/
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      900:{
        items:3,
        nav:true,
        loop:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      },
      1024:{
        items:4,
        nav:true,
        loop:false,
        marginLeft:45
      },
      2000:{
        items:5,
        nav:true,
        loop:false
    }
  }
})
// INTI TYPED.JS
if ($('.typed').length) {
  var typed_strings = $(".typed").data('typed-items');
  typed_strings = typed_strings.split(',')
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
}