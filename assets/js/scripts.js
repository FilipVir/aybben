var toggleBtn = document.querySelector('.navbar-toggle');
var navbarClose = document.querySelector('.navbar-close');
var navigation = document.querySelector('.navigation');
var messageForm = document.getElementById('messageForm');
var Email
toggleBtn.addEventListener('click', function () {
    navigation.classList.toggle('active')
    document.body.style.overflow='hidden'
})

function submitMessage(){
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var tel = document.getElementById("tel");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    if (message.value == "" || email.value == "") {
        alert("Email and Message fields are required");
    } else if(isValidEmail(email.value)) {
        Email.send({
            SecureToken : "9a2e7253-55d2-4766-ab09-5345c86506db",
            To : 'filipvirabyan12@gmail.com',
            From : email.value,
            Subject : "test",
            Body :"test"
        }).then(
            function (message){
                console.log(message)
            }
        );
        return
        fetch("http://localhost:3000/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({firstName: firstName.value, lastName:lastName.value, tel:tel.value,  email:email.value, message: message.value }),
        })
            .then(function(response) {
                response.json()
            })
            .then(function (data)  {
                if (data.success) {
                    alert("Email sent successfully!");
                } else {
                    alert("Error sending email: " + data.error);
                }
            })
            .catch(function (error)  {
                console.error("Error sending email:", error);
            });
    }
}
function isValidEmail(email) {
    // Regular expression pattern for basic email validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Use the test method to check if the email matches the pattern
    return emailPattern.test(email);
}

if (document.querySelector('.slider')) {
    $('.slider').owlCarousel({
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
        }
    })
}

$(document).ready(function () {
    console.log('fffffff')
    $('.nav-link').click(function () {
        $('.tab-pane').removeClass('show');
        var id = $(this).attr('data-id')
        console.log($(this).attr('data-id'))
        console.log('.tab-pane[data-id=\'' + id + '\']')
        $('.tab-pane[data-id=\'' + id + '\']').addClass('show');
        $('.nav-link').removeClass('active');
        $(this).parent().find('.nav-link').addClass('active');
    });

});

