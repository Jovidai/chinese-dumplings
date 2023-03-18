const dumplingType = ["potstickers(锅贴),", "馄饨(wonton),", "小笼包(Bao zi),"];
const dumplingText = ["You explored potstickers(锅贴), a dumpling style that originated in a province in Northern China during the Song dynasty, known for its crispy underside. According to legend, they were invented by an Imperial chef who accidentally burnt a batch of dumplings after leaving them on the stove for too long! ", "You explored wontons(馄饨), a dumpling style popularized in Hong Kong after World War II, known for its translucent flour wrapping.   In Cantonese, ‘wonton’ roughly translates to ‘clouds’ – as the wontons look like clouds floating in the soup.", "You explored buns(小笼包), a dumpling style that originated in a Shanghai suburb over 150 years ago, known for its fluffy wrapping and fragrant fillings. "];

const fillingType = ["Leek and shrimp stuffing,", "Mushroom and cabbage stuffed with meat,", "Fish and scallion stuffing,"];
const fillingText = ["The chive and shrimp filling you chose is popular during the Chinese New Year festival: chives(小葱) often symbolize eternity and longevity, while shrimp symbolizes happiness and good fortune.  The Chinese word for crustacean(虾) is a homonym for the Chinese character of laughter.", "The pork and cabbage filling you chose is popular during the Winter Festival, as the filling pairs well with warm dumplings like + potstickers.  Pork symbolizes good fortune and happiness as pigs seem to live a care-free existence, while cabbage(百菜) is a homonym for “100 wealth”", "The fish and chives filling you chose is popular during the Lunar New Year: as a homonym for “good fortune”, fish symbolizes wellbeing and prosperity, while chives often symbolize eternity and longevity.  "];


const sauceType = ["Chili sauce", "Vinegar sauce with scallion", "Hoisin dipping sauce"];
const sauceText = ["The spicy chili sauce you chose originates from Sichuan, China, in the Southwest. This region is famous for its 麻辣, an intensely numbing spice that leaves you sweating from the heat. This sauce is sure to take you for a wild ride!", "The vinegar sauce you chose originates from Shanxi, China, in the northeast.  With a mildly acidic and faintly sweet flavor, the sauce provides a complex flavor profile that subtly supports the salty filling you chose.  Be prepared to process such a nuanced taste!", "The hoisin sauce you chose is commonly used in Cantonese cooking.  Made from fermented soybean paste, hoisin has an salty and sweet umami flavor that accentuates the rich flavor of the filling you choose.  Be prepared for a bomb of flavor in your mouth!"];
const backgroundImages = ["images/northernchina.jpeg", "images/southernChina.jpeg", "images/changzhou.webp"];
const backgroundAudios = ["audio/northeastChina.mp4", "audio/southeast.mp4", "audio/southwest.mp4"];
var dumplingIndex = 0;
var fillingIndex = 0;
var sauceIndex = 0;

$(document).ready(function() {

    init();

});

function init() {
    $('.main-carousel').flickity({
        // options
        cellAlign: 'center',
        contain: true
    });

    $('.main-carousel1').flickity({
        // options
        cellAlign: 'center',
        contain: false,
    });

    $('.main-carousel2').flickity({
        // options
        cellAlign: 'center',
        contain: true
    });

    // init Flickity with jQuery
    var $carousel = $('.main-carousel').flickity();
    var $carousel1 = $('.main-carousel1').flickity();
    var $carousel2 = $('.main-carousel2').flickity();

    // access properties
    //var fillingArray = {1, 2, "The gyoza is from Japn..."}
    $carousel.on('settle.flickity', function(event, index) {
        console.log('First Flickity settled at ' + index);
        dumplingIndex = index;
        updateEndText();
        updateBackground();
    });

    $carousel1.on('settle.flickity', function(event, index) {
        console.log('Second Flickity settled at ' + index);
        fillingIndex = index;
        updateEndText();

    });
    $carousel2.on('settle.flickity', function(event, index) {
        console.log('Third Flickity settled at ' + index);
        sauceIndex = index;
        updateEndText();

    });
    updateEndText();


}

function finishedStuff() {
    //show the ending
    //show the text
    //show the map
    //yelp?
}

function updateEndText() {
    const element = document.getElementById("end-text");
    element.innerHTML = dumplingText[dumplingIndex] + "\n" + fillingText[fillingIndex] + "\n" + sauceText[sauceIndex];
}

function updateBackground() {
    const element = document.getElementById("caros");
    const audio = document.getElementById("audio");
    console.log(element);
    element.style.backgroundImage = "url(" + (backgroundImages[dumplingIndex]) + ")";
    audio.src = backgroundAudios[dumplingIndex];
    audio.play();
}

const scrollBtn = document.getElementById("start-button");
const scrollTarget = document.getElementById("scroll-target");

scrollBtn.addEventListener("click", () => {
    scrollTarget.scrollIntoView({
        behavior: "smooth"
    });
});

const scrollBtn1 = document.getElementById("finish-button");
const scrollTarget1 = document.getElementById("end-text");

scrollBtn1.addEventListener("click", () => {
    scrollTarget1.scrollIntoView({
        behavior: "smooth"
    });
});