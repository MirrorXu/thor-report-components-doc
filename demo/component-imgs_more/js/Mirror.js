
$(function () {
    $.each($('.imgsBox'), function (i, v) {
        var tempIdTop = 'galleryTop' + Math.floor(Math.random() * 100 * Math.random() * 10000).toString();
        var tempIdThumbs = 'tempIdThumbs' + Math.floor(Math.random() * 10000 * Math.random() * 100).toString();


        $(v).find('.gallery-top').attr('id', tempIdTop);
        $(v).find('.gallery-thumbs').attr('id', tempIdThumbs);


        var galleryTop = new Swiper('#' + tempIdTop, {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 10,
            speed: 500,
//               loop:true,
            grabCursor: true
        });
        var galleryThumbs = new Swiper('#' + tempIdThumbs, {
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 'auto',
            touchRatio: 0.2,
            slideToClickedSlide: true,
            grabCursor: true


        });
        galleryTop.params.control = galleryThumbs;
        galleryThumbs.params.control = galleryTop;
    })
});