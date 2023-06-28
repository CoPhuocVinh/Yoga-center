(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });


    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Giữ hover trên navbar 
    var navLinks = document.getElementsByClassName('nav-link');

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function () {
            var currentActive = document.getElementsByClassName('active');
            if (currentActive.length > 0) {
                currentActive[0].classList.remove('active');
            }
            this.classList.add('active');
        });
    }


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Blogs carousel
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Class filter
    var classIsotope = $('.class-container').isotope({
        itemSelector: '.class-item',
        layoutMode: 'fitRows'
    });

    $('#class-filter li').on('click', function () {
        $("#class-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        classIsotope.isotope({ filter: $(this).data('filter') });
    });


    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

})(jQuery);

const paymentUps = document.querySelectorAll('.payment-up');

paymentUps.forEach(function (paymentUp) {
    const paymentsDown = paymentUp.nextElementSibling;

    paymentUp.addEventListener('click', function () {
        paymentsDown.classList.toggle('active');
    });
});

function checkoutPage(url) {
    window.location.href = url;
}

// chuyển form user-setting 
function showFormSetting() {
    var modalSetting = document.getElementById("modal-user-settings");
    modalSetting.style.display = "flex";
}

function hideFormSetting() {
    var modalSetting = document.getElementById("modal-user-settings");
    modalSetting.style.display = "none";
}



// Mặc định hiển thị form tài khoản
document.getElementById("account-form-tab").style.display = "block";

// Xử lý sự kiện khi người dùng nhấp vào các nút điều hướng
document.getElementById("example-user-tabs").addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>

    // Lấy ID của tab được nhấp vào
    var target = event.target.getAttribute("href");

    // Ẩn tất cả các form
    var forms = document.getElementsByClassName("tab-pane");
    for (var i = 0; i < forms.length; i++) {
        forms[i].style.display = "none";
    }

    // Hiển thị form được chọn
    document.querySelector(target).style.display = "block";
});

// Xử lý sự kiện khi nhấn nút "Lưu"
    document.getElementById("save-account-btn").addEventListener("click", function () {
    // Hiển thị thông báo thành công
    document.getElementById("account-success-alert").style.display = "block";
});



