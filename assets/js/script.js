/* =====================================================
   HOME - TYPING ANIMATION
===================================================== */

const typingElement = document.getElementById("typing");

if (typingElement) {

    const roles = [
        "Full Stack Developer",
        "Web Developer",
        "Frontend Developer",
        "Backend Developer"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentRole = roles[roleIndex];

        if (!deleting) {

            typingElement.textContent =
                currentRole.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentRole.length) {

                deleting = true;

                setTimeout(typeEffect, 1800);

                return;
            }

        } else {

            typingElement.textContent =
                currentRole.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                roleIndex++;

                if (roleIndex >= roles.length) {
                    roleIndex = 0;
                }

                setTimeout(typeEffect, 500);

                return;
            }
        }

        setTimeout(
            typeEffect,
            deleting ? 60 : 100
        );
    }

    typeEffect();
}


/* =====================================================
   SMOOTH SCROLL
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});