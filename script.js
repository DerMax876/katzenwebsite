class Slideshow {
    constructor() {
        this.initSlides();
        this.initSlideshow();
    }

    initSlides() {
        this.container = $('[data-slideshow]'); // Select by attribute --> img-container
        this.slides = this.container.find('img'); // Get all elements
        // shuffleArray(this.slides); // Randomize slide order
        this.slides.each((idx, slide) => {
            $(slide).attr('slide-id', $(slide).attr('id'));
           /* $(slide).attr('slide-description', slideDescriptions[$(slide).attr('id')]);
            $(slide).attr('slide-link', slideLinks[$(slide).attr('id')]);*/
        });
        
    }

    



    initSlideshow() {
        this.imagesLoaded = 0;
        this.currentIndex = 0;
        this.setNextSlide();
        this.slides.each((idx, slide) => {
          $('<img>').on('load', $.proxy(this.finishLoadingImage, this)).attr('src', $(slide).attr('src'));
        });
    }

    finishLoadingImage() {
        this.imagesLoaded++;
        if(this.imagesLoaded >= this.slides.length) {
            this.playSlideshow();
        }
    }

    setNextSlide() {
        this.nextSlide = this.container.find(`[slide-id="${this.currentIndex}"]`).first();
        this.nextSlide.addClass('next');
    }

    playSlideshow() {
        this.slideshow = window.setInterval(() => {
            this.performSlide()
        }, 1500);
    }

    performSlide() {
        if(this.prevSlide) {
            this.prevSlide.removeClass('prev fade-out')
        }
        this.nextSlide.removeClass('next');
        this.prevSlide = this.nextSlide;
        this.prevSlide.addClass('prev');

        this.currentIndex++;
        if(this.currentIndex >= this.slides.length) {
            this.currentIndex = 0
        }

        this.setNextSlide();

    

        this.prevSlide.addClass('fade-out');
    }
}


function Anzeigen() {
    document.querySelector("#katzenclip").classList.toggle("verstecken")
}

$(document).ready(function() {
    new Slideshow();
});

function showhundewebseite() {
    document.location.href = "./hunde.html"; 
}

function showkatzenwebseite() {
    document.location.href = "./index.html"; 
}