(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    print = console.log;
    (() => {
        const Sky = document.querySelector("[data-sky]");
        const Quantity = Sky.dataset.sky ? +Sky.dataset.sky : 100;
        if (Sky) {
            setStars();
            window.addEventListener("resize", setStars);
            function setStars() {
                const skySize = {
                    width: Sky.offsetWidth,
                    height: Sky.offsetHeight
                };
                const totalStars = getStarsQuantity(skySize);
                let starTemplate = ``;
                for (let star = 0; star < totalStars; star++) {
                    const starPos = getStarPos(skySize);
                    const starStyle = `\n                        position: absolute;\n                        top: ${starPos.top}px;\n                        left: ${starPos.left}px;\n                    `;
                    const starClass = `star star--type-${Math.floor(Math.random() * 3)}`;
                    starTemplate += `<div style="${starStyle}" class="${starClass}"></div>`;
                }
                Sky.innerHTML = starTemplate;
            }
            function getStarsQuantity(skySize) {
                const qH = skySize.width / 100 * (Quantity / 2);
                const qV = skySize.height / 100 * (Quantity / 2);
                return qH + qV;
            }
            function getStarPos(skySize) {
                return {
                    top: Math.floor(Math.random() * skySize.height),
                    left: Math.floor(Math.random() * skySize.width)
                };
            }
        }
    })();
    window["FLS"] = true;
    isWebp();
})();