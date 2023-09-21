var toggleBtn = document.querySelector('.navbar-toggle');
var navbarClose = document.querySelector('.navbar-close');
var navigation = document.querySelector('.navigation');
var messageForm = document.getElementById('messageForm');
var Email
var prevActiveLink = 'our'
toggleBtn.addEventListener('click', function () {
    navigation.classList.toggle('active')
    document.body.style.overflow = 'hidden'
})

function submitMessage() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var tel = document.getElementById("tel");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    if (message.value !== "" && email.value !== "" && isValidEmail(email.value)) {
        Email.send({
            SecureToken: "f810f96d-23f1-49b3-890e-3a89fe33900e",
            To: 'info@aybbentech.com',
            From: email.value,
            Subject: firstName.value + ' ' + lastName.value,
            Body: generateEmailTemplate(firstName.value, lastName.value, tel.value, message.value)
        }).then(
            function (message) {
                var messageItem = document.querySelectorAll(".success-message").item(0)
                document.querySelectorAll("form").item(0).reset();
                messageItem.style.display = 'flex'
                setTimeout(function () {
                    messageItem.style.display = 'none'
                }, 3000)
            }
        );
    }
}

function isValidEmail(email) {
    // Regular expression pattern for basic email validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Use the test method to check if the email matches the pattern
    return emailPattern.test(email);
}

function generateEmailTemplate(firstName, lastName, telephone, message) {
    return '<!DOCTYPE html>' +
        '<html lang="en">' +
        '<head>' +
        '    <meta charset="UTF-8">' +
        '    <meta name="viewport" content="width=device-width, initial-scale=1.0">' +
        '    <title>Contact Us</title>' +
        '</head>' +
        '<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">' +
        '    <table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#f4f4f4">' +
        '        <tr>' +
        '            <td align="center" style="padding: 20px;">' +
        '                <table width="600" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" style="border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">' +
        '                    <tr>' +
        '                        <td style="padding: 20px;">' +
        '                            <h1 style="color: #333;">Contact Us</h1>' +
        '                            <p style="font-size: 16px; color: #333;"><span style="color: #007bff; font-weight: bold;">' + firstName + '</span> <span style="color: #007bff; font-weight: bold;">' + lastName + '</span></p>' +
        '                            <p style="font-size: 16px; color: #333;">Telephone: ' + telephone + '</p>' +
        '                            <p style="font-size: 16px; color: #333;">Message: ' + message + '</p>' +
        '                        </td>' +
        '                    </tr>' +
        '                </table>' +
        '            </td>' +
        '        </tr>' +
        '    </table>' +
        '</body>' +
        '</html>';
}

if (document.querySelector('.slider')) {
    var slider = $('.slider');
    slider.owlCarousel({
        margin: 24,
        navText: ['<img src=\'./assets/images/slider-arrows/left-arrow.svg\' class=\'nav-button owl-prev\'/>', '<img src=\'./assets/images/slider-arrows/right-arrow.svg\' class=\'nav-button owl-next\'/>'],
        loop: true,
        autoPlay: true,
        nav: true,
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 1.5
            },
            567: {
                items: 2.5
            },
            900: {
                items: 3.5
            }
        },
        scrollPerPage: true,
    })

    var debounceTimer;

    slider.on("mousewheel", ".owl-stage", function (e) {
        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }

        debounceTimer = setTimeout(function () {
            if (e.originalEvent.deltaX === 0 || e.originalEvent.deltaX === -0) {
                return
            }
            if (e.originalEvent.wheelDelta > 0) {
                slider.trigger("prev.owl");
            } else {
                slider.trigger("next.owl");
            }
            e.preventDefault();
            debounceTimer = null;
        }, 100);
    });

}

$(document).ready(function () {
    setActiveUrl();
    $('button.nav-link').click(function () {
        $('.tab-pane').removeClass('show');
        var id = $(this).attr('data-id')
        $('.tab-pane[data-id=\'' + id + '\']').addClass('show');
        $('.nav-link').removeClass('active');
        $(this).parent().find('.nav-link').addClass('active');
    });

});

function setActiveUrl(id) {
    setTimeout(function () {
        var currentUrl = window.location.href;
        // Get all the navigation links
        var navLinks = document.querySelectorAll(".nav-item a");
        // Loop through each navigation link
        navLinks.forEach(function (link) {
            // Check if the link's href matches the current URL
            link.classList.remove("active");
            if (currentUrl.includes(link.href)) {
                // Add the "active" class to the link
                link.classList.add("active");
            }
        });
    }, 100)
}
