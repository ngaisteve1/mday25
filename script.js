const swiper = new Swiper('.swiper', {
    loop: false,
    autoplay: {
        delay: 5000, // default delay for all slides after the first
        disableOnInteraction: false
    },

});

// Pause autoplay at start
swiper.autoplay.stop();

// Wait longer for first slide (e.g., 10 seconds)
setTimeout(() => {
    swiper.slideNext();           // go to second slide
    swiper.autoplay.start();      // resume autoplay
}, 5000); // 10 seconds