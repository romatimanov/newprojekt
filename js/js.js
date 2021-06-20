window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#burger').classList.toggle('is-active')
        document.querySelector('#menu').classList.toggle('is-active')
    })
})

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#search').addEventListener('click', function() {
        document.querySelector('#search').classList.toggle('is-active')
        document.querySelector('#searchmob').classList.toggle('is-active')
    })
    document.querySelector('#close').addEventListener('click', function() {
        document.querySelector('#search').classList.toggle('is-active')
        document.querySelector('#searchmob').classList.toggle('is-active')
    })
})

const defaultSelect = () => {
    const element = document.querySelector('#selectCustom');
    const choices = new Choices(element, {

    })
};

defaultSelect();

var swiper = new Swiper(".myswiper", {
    slidesPerView: 3,
    slidesPerColumn: 2,
    breakpoints: {
        760: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 30,
            width: 664
        },

        891: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 35,
            width: 571
        },
        // when window width is >= 640px
        1440: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 50,
            width: 1150
        },

        630: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            spaceBetween: 30,
            width: 290
        },
        521: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            spaceBetween: 30,
            width: 230
        },
        20: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            spaceBetween: 0,
            width: 290
        }
    },

    pagination: {
        el: ".mypagination",
        type: 'fraction',
        autoheight: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.language__icon').forEach(function(languageIcon) {
        languageIcon.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.icon-content').forEach(function(iconContent) {
                iconContent.classList.remove('icon-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('icon-content-active')
        })
    })
})

var languageIcon = $('.language__icon');

languageIcon.on('click', function() {
    languageIcon.removeClass('alert');
    $(this).addClass('alert');
});


$(function() {
    $(".accord").accordion({
        heightStyle: "content"
    });
});
$(function() {
    var icons = {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
    };
    $(".accord").accordion({
        icons: icons
    });
    $("#toggle").button().on("click", function() {
        if ($(".accord").accordion("option", "icons")) {
            $(".accord").accordion("option", "icons", null);
        } else {
            $(".accord").accordion("option", "icons", icons);
        }
    });
});

var clickFrench = $('.click__french');

clickFrench.on('click', function() {
    clickFrench.removeClass('nameactive');
    $(this).addClass('nameactive');
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.click__french').forEach(function(clickFrench) {
        clickFrench.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.french-content').forEach(function(frenchContent) {
                frenchContent.classList.remove('french-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('french-content-active')
        })
    })
})

var clickRus = $('.click__rus');

clickRus.on('click', function() {
    clickRus.removeClass('nameactive');
    $(this).addClass('nameactive');
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.click__rus').forEach(function(clickRus) {
        clickRus.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.rus-content').forEach(function(rusContent) {
                rusContent.classList.remove('rus-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('rus-content-active')
        })
    })
})

var clickGer = $('.click__ger');

clickGer.on('click', function() {
    clickGer.removeClass('nameactive');
    $(this).addClass('nameactive');
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.click__ger').forEach(function(clickGer) {
        clickGer.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.ger-content').forEach(function(gerContent) {
                gerContent.classList.remove('ger-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('ger-content-active')
        })
    })
})

var clickItal = $('.click__ital');

clickItal.on('click', function() {
    clickItal.removeClass('nameactive');
    $(this).addClass('nameactive');
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.click__ital').forEach(function(clickItal) {
        clickItal.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.ital-content').forEach(function(italContent) {
                italContent.classList.remove('ital-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('ital-content-active')
        })
    })
})

var clickNider = $('.click__nider');

clickNider.on('click', function() {
    clickNider.removeClass('nameactive');
    $(this).addClass('nameactive');
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.click__nider').forEach(function(clickNider) {
        clickNider.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.nider-content').forEach(function(niderContent) {
                niderContent.classList.remove('nider-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('nider-content-active')
        })
    })
})

let content = document.getElementById("show")
let show = document.getElementById("showContent")

show.addEventListener("click", () => {
    content.style.display = "block"
})
showContent.addEventListener("click", () => {
    showContent.style.display = "none"
})

var swiper = new Swiper(".card-swiper", {
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".price-swiper", {
    slidesPerView: 3,
    slidesPerColumn: 1,
    breakpoints: {
        600: {
            slidesPerView: 2,
            slidesPerColumn: 1,
            spaceBetween: 60,
            width: 600
        },

        770: {
            slidesPerView: 2,
            slidesPerColumn: 1,
            spaceBetween: 65,
            width: 600
        },

        1440: {
            slidesPerView: 3,
            slidesPerColumn: 1,
            spaceBetween: 60,
            width: 1100
        }
    },

    pagination: {
        el: ".pricepagination",
        type: 'fraction'
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

initImg('#image img', [
    'img/hero3.jpg',
    'img/hero2.jpg',
    'img/hero.jpg',

]);

initImg('#test img', [
    'img/hero31025.jpg',
    'img/hero21025.jpg',
    'img/hero1025.jpg',

]);

initImg('#tablet img', [
    'img/hero3769.jpg',
    'img/hero2769.jpg',
    'img/hero769.jpg',

]);

function initImg(selector, srcArr) {
    const img = document.querySelector(selector);
    Object.assign(img, {
        buf: Object.assign(new Image(), { img }),
        srcArr: [...srcArr],
        changeInterval: 3e3,
        bufIdx: 0,
        change: function() {
            this.style.animationName = 'img-in';
            this.src = this.buf.src || this.nextImage();
            this.buf.src = this.nextImage();
        },
        nextImage: function() {
            this.bufIdx = ++this.bufIdx < this.srcArr.length ? this.bufIdx : 0;
            return this.srcArr[this.bufIdx];
        }
    });
    img.buf.addEventListener('load', loadHandler);
    img.addEventListener('animationend', animEndHandler);
    img.change();
    return img;

    function loadHandler() {
        setTimeout(
            () => this.img.style.animationName = 'img-out',
            this.img.changeInterval
        );
    }

    function animEndHandler({ animationName }) {
        if (animationName === 'img-out')
            this.change();
    }
}

var swiper = new Swiper(".partners-swiper", {
    slidesPerView: 3,
    slidesPerColumn: 1,
    spaceBetween: 30,
    breakpoints: {
        1025: {
            slidesPerView: 3,
            slidesPerColumn: 1,
            spaceBetween: 30,
        },

        631: {
            slidesPerView: 2,
            slidesPerColumn: 1,
            spaceBetween: 30,
        },

        320: {
            slidesPerView: 1,
            slidesPerColumn: 1,
        },
    },

    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


ymaps.ready(init);

function init() {

    var myMap = new ymaps.Map("map", {

        center: [55.759167532230215, 37.60299425134276],

        zoom: 14
    });


    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {

            iconLayout: 'default#image',

            iconImageHref: '',

            iconImageSize: [30, 42],

            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.759167532230215, 37.60299425134276], {}, {

            iconLayout: 'default#imageWithContent',

            iconImageHref: 'img/marker.svg',

            iconImageSize: [20, 20],

            iconImageOffset: [-24, -24],

            iconContentOffset: [15, 15],

            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
};


var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

new JustValidate('.contacts__form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 10
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },
    },
    messages: {
        name: {
            required: 'Недопустимый формат!',
            required: 'Недопустимый формат!'
        },
        tel: {
            required: 'Недопустимый формат!',
            required: 'Недопустимый формат!'
        }
    },
    submitHandler: function(form, values, ajax) {

        ajax({
            url: 'https://just-validate-api.herokuapp.com/submit',
            method: 'POST',
            data: values,
            async: true,
            callback: function(response) {
                console.log(response)
            }
        });
    },
});


window.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.click__rus').forEach(function(button) {
        button.addEventListener('click', function(element) {

            document.querySelector('.rus-content-active').classList.add('rus-content')

            let offsetTop = document.querySelector('.rus-content-active').offsetTop;
            if (window.matchMedia("(max-width: 665px)").matches) {
                scroll({
                    top: offsetTop - 15,
                    behavior: "smooth"
                });
            }
        })
    })
})

window.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.click__french').forEach(function(button) {
        button.addEventListener('click', function(element) {

            document.querySelector('.french-content-active').classList.add('french-content')

            let offsetTop = document.querySelector('.french-content-active').offsetTop;
            if (window.matchMedia("(max-width: 665px)").matches) {
                scroll({
                    top: offsetTop - 15,
                    behavior: "smooth"
                });
            }
        })
    })
})

window.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.click__ger').forEach(function(button) {
        button.addEventListener('click', function(element) {

            document.querySelector('.ger-content-active').classList.add('ger-content')

            let offsetTop = document.querySelector('.ger-content-active').offsetTop;
            if (window.matchMedia("(max-width: 665px)").matches) {
                scroll({
                    top: offsetTop - 15,
                    behavior: "smooth"
                });
            }
        })
    })
})

window.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.click__ital').forEach(function(button) {
        button.addEventListener('click', function(element) {

            document.querySelector('.ital-content-active').classList.add('ital-content')

            let offsetTop = document.querySelector('.ital-content-active').offsetTop;
            if (window.matchMedia("(max-width: 665px)").matches) {
                scroll({
                    top: offsetTop - 15,
                    behavior: "smooth"
                });
            }
        })
    })
})

window.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.click__nider').forEach(function(button) {
        button.addEventListener('click', function(element) {

            document.querySelector('.nider-content-active').classList.add('nider-content')

            let offsetTop = document.querySelector('.nider-content-active').offsetTop;
            if (window.matchMedia("(max-width: 665px)").matches) {
                scroll({
                    top: offsetTop - 15,
                    behavior: "smooth"
                });
            }
        })
    })
})

const modalLinks = document.querySelectorAll('.modal-link');
const body = document.querySelector('body');

let unlock = true;

const timeout = 500;

if (modalLinks.length > 0) {
    for (let index = 0; index < modalLinks.length; index++) {
        const modalLink = modalLinks[index];
        modalLink.addEventListener("click", function(e) {
            const modalName = modalLink.getAttribute('href').replace('#', '');
            const curentModal = document.getElementById(modalName);
            modalOpen(curentModal);
            e.preventDefault();
        });
    }
}

const modalCloseIcon = document.querySelectorAll('.modal-close');
if (modalCloseIcon.length > 0) {
    for (let index = 0; index < modalCloseIcon.length; index++) {
        const el = modalCloseIcon[index];
        el.addEventListener('click', function(e) {
            modalClose(el.closest('.modal'));
            e.preventDefault();
        });
    }
}

function modalOpen(curentModal) {
    if (curentModal && unlock) {
        const modalActive = document.querySelector('.modal.open');
        if (modalActive) {
            modalClose(modalActive, false);
        }

        curentModal.classList.add('open');
        curentModal.addEventListener("click", function(e) {
            if (!e.target.closest('.modal__body')) {
                modalClose(e.target.closest('.modal'));
            }
        });
    }
}

function modalClose(modalActive, doUnlock = true) {
    if (unlock) {
        modalActive.classList.remove('open');
    }
}