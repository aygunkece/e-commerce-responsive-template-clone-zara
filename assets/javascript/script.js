var swiper = new Swiper('.swiper-container', {
    direction: 'vertical', // Yatay kaydırma yerine dikey kaydırma
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
$(document).ready(function(){
    $(".close-btn").click(function(){
        $("#navbarNav").removeClass("show");
        $("#overlay").fadeOut();
        $(".navbar-collapse").removeClass("show"); // Geçiş efektiyle menüyü kapatır
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const kadinLink = document.getElementById('kadin');
    const erkekLink = document.getElementById('erkek');
    const kadinAltMenu = document.getElementById('kadinAlt');
    const erkekAltMenu = document.getElementById('erkekAlt');
    if (window.matchMedia("(min-width: 768px)").matches) {

        // İlgili ana menü linklerine fare imleci geldiğinde alt menüyü göster
        kadinLink.addEventListener('mouseenter', function(event) {
            event.preventDefault(); // Bağlantının varsayılan davranışını engeller
            kadinAltMenu.style.display = 'block'; // Kadın alt menüyü gösterir
            erkekAltMenu.style.display = 'none'; // Erkek alt menüyü gizler
        });

        erkekLink.addEventListener('mouseenter', function(event) {
            event.preventDefault(); // Bağlantının varsayılan davranışını engeller
            erkekAltMenu.style.display = 'block'; // Erkek alt menüyü gösterir
            kadinAltMenu.style.display = 'none'; // Kadın alt menüyü gizler
        });

        // İlgili ana menülerden uzaklaşıldığında alt menüyü gizle
        kadinAltMenu.addEventListener('mouseleave', function() {
            kadinAltMenu.style.display = 'none';
        });

        erkekAltMenu.addEventListener('mouseleave', function() {
            erkekAltMenu.style.display = 'none';
        });

    }
    else if (window.matchMedia("(max-width: 768px)").matches)
    kadinLink.addEventListener('click', function(event) {
        event.preventDefault(); // Bağlantının varsayılan davranışını engeller
        kadinAltMenu.style.display = 'block'; // Kadın alt menüyü gösterir
        erkekAltMenu.style.display = 'none'; // Erkek alt menüyü gizler
    });

    erkekLink.addEventListener('click', function(event) {
        event.preventDefault(); // Bağlantının varsayılan davranışını engeller
        erkekAltMenu.style.display = 'block'; // Erkek alt menüyü gösterir
        kadinAltMenu.style.display = 'none'; // Kadın alt menüyü gizler
    });
});

$(document).ready(function(){
    $(".nav-item").click(function(){
        $(".nav-item").removeClass("active"); // Tüm menü öğelerinden active sınıfını kaldırır
        $(this).addClass("active"); // Tıklanan menü öğesine active sınıfını ekler
    });
});


