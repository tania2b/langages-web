const centinelToggle = document.querySelector("#centinelToggle");
const iconCentinel = document.querySelector("#centinelimg");
const smallIconCentinel = document.querySelector("#js-centinelON");
const centinel = "./icones/centinel.png";
const centinelON = "./icones/centinelON.png";

function toggleCentinel() {
    if (iconCentinel.src === `${window.location.origin}/icones/centinel.png`) {
        iconCentinel.src = centinelON;
        smallIconCentinel.style.display = "block";
    } else {
        iconCentinel.src = centinel;
        smallIconCentinel.style.display = "none";
    }
}
centinelToggle?.addEventListener("click", toggleCentinel);

const ventilationToggle = document.querySelector("#ventilationToggle");
const iconVentilation = document.querySelector("#ventilationimg");
function toggleVentilation() {
    if (
        iconVentilation.src ===
        `${window.location.origin}/icones/ventilation.png`
    ) {
        iconVentilation.src = "./icones/ventilationON.png";
        document.querySelector("#js-option--active").innerText =
            "Activée - Intérieur 23°C";
    } else {
        iconVentilation.src = "./icones/ventilation.png";
        document.querySelector("#js-option--active").innerText =
            "Intérieur 23°C";
    }
}
ventilationToggle?.addEventListener("click", toggleVentilation);

const article = document.querySelector("#articleCharge");
const chargeToggle = document.querySelector("#chargeToggle");
const iconCharge = document.querySelector("#chargeimg");
const charge = "./icones/charge.png";
const chargeON = "./icones/chargeON.png";

function toggleCharge() {
    if (article.style.display === "flex") {
        article.style.display = "none";
        iconCharge.src = charge;
    } else {
        article.style.display = "flex";
        iconCharge.src = chargeON;
    }
}
chargeToggle?.addEventListener("click", toggleCharge);

const coffreToggle = document.querySelector("#coffreToggle");
function toggleCoffre() {
    if (
        document.querySelector("#coffreimg").src ===
        `${window.location.origin}/icones/coffre.png`
    ) {
        document.querySelector("#coffreimg").src = "./icones/coffreON.png";
        document.querySelector("#tesla").src = "./img/tesla-open.png";
    } else {
        document.querySelector("#coffreimg").src = "./icones/coffre.png";
        document.querySelector("#tesla").src = "./img/tesla.png";
    }
}
coffreToggle?.addEventListener("click", toggleCoffre);

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const num = document.querySelector("#num");

let a = 16;
plus.style.color = "transparent";

plus.addEventListener("click", () => {
    if (a < 16) {
        a++;
        a = a < 10 ? "0" + a : a;
        num.innerText = a + "A";
    }
    if (a < 15) {
        plus.style.color = "white";
        minus.style.color = "white";
    }
    if (a === 16) {
        plus.style.color = "transparent";
    }
});

minus.addEventListener("click", () => {
    if (a > 5) {
        a--;
        a = a < 10 ? "0" + a : a;
        num.innerText = a + "A";
    }
    if (a > 6) {
        plus.style.color = "white";
        minus.style.color = "white";
    }
    if (a < 6) {
        minus.style.color = "transparent";
    }
});
