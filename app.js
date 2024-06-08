// NavBar
function navbarAnimation() {
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.getElementById("mobile-nav-links");
    const closedBtn = document.querySelector(".closed");

        menuBtn.addEventListener("click", function(){
         navLinks.style.top = 0;
        })

        closedBtn.addEventListener("click", function(){
         navLinks.style.top = "-200%";
        })
}
navbarAnimation()

// Section 2
function section2Btn2() {
    const section2Btn2 = document.querySelector(".section-2-btn2");
    const line2 = document.querySelector(".line-2");

    section2Btn2.addEventListener(
        "mouseover",
        (event) => {
         line2.style.width = "250px";
        },
     );

    section2Btn2.addEventListener(
         "mouseout",
            (event) => {
             line2.style.width = "0px";
            },
         );
}
section2Btn2()
function section2Btn2Part2() {
    const line2Part2 = document.querySelector("#line-2");
    const section2Btn2Part2 = document.querySelector("#section-2-btn2");

    section2Btn2Part2.addEventListener(
         "mouseover",
         (event) => {
          line2Part2.style.width = "178px";
         },
         );

  section2Btn2Part2.addEventListener(
        "mouseout",
         (event) => {
         line2Part2.style.width = "0px";
        },
      );
}
section2Btn2Part2()

// Footer
function footerPara() {
    function footerPara() {
        const footerP = document.querySelector(".footer-first-p");
        const footerUnderline = document.querySelector(".underline");

        footerP.addEventListener("mouseover", (event) => {
            footerUnderline.style.opacity = 1;
        });

        footerP.addEventListener("mouseout", (event) => {
            footerUnderline.style.opacity = 0;
        });
    }

    document.addEventListener("DOMContentLoaded", footerPara);
}
footerPara()