// Main
console.log('FullStack Vietnam!')
$('.home-news .owl-carousel').owlCarousel({
    items: 2,
    nav: true,
    dots: false,
    autoplay: true,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 4,
        },
        1000: {
            items: 6,
        }
    }
})