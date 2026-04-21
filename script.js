/**
 * DATA: shops
 * An array of objects containing the details for each restaurant.
 * Each object includes a unique ID for anchor linking, names,
 * image paths, and social media/map URLs.
 */
const shops = [
  {
    id: "34meeshay", // Unique ID for jumping
    name: "34 Meeshay Noodle",
    image: "static/34_meeshay.jpg",
    fb: "https://www.facebook.com/profile.php?id=61577777491175",
    map: "https://maps.app.goo.gl/FBWQ22btrpG2Bjvi6",
  },
  {
    id: "ALPyay", // Unique ID for jumping
    name: "Ah Lwan Pyay Tea House",
    image: "static/ah-lwan-pyay-tea-house.jpg",
    fb: "https://web.facebook.com/profile.php?id=61554153402334",
    map: "https://maps.app.goo.gl/gBrFnMrcTKQuuA4P8",
  },
  {
    id: "ANHouse", // Unique ID for jumping
    name: "Ah Nyar House - အညာအိမ်",
    image: "static/ah-nyar-house.jpg",
    fb: "https://web.facebook.com/ahnyarhouse",
    map: "https://maps.app.goo.gl/HXn7EBKVrjPCeUBn7",
  },
  {
    id: "AMMo", // Unique ID for jumping
    name: "Aung Myint Mo CNX",
    image: "static/aung_myint_mo.jpg",
    fb: "https://www.facebook.com/ammcnx",
    map: "https://maps.app.goo.gl/iAHJ6hZBMzWXBjti8",
  },
  {
    id: "Aung", // Unique ID for jumping
    name: "AUNG Restaurant and Bar",
    image: "static/aung_myint_mo.jpg",
    fb: "https://www.facebook.com/aungrestaurantandbar",
    map: "https://maps.app.goo.gl/mgYLpWjtJFvdhSTZA",
  },
  {
    id: "Bthoon", // Unique ID for jumping
    name: "Baby Thoon",
    image: "static/baby_thoon.jpg",
    fb: "https://www.facebook.com/BabyThoonBurmeseFoodnSnack",
    map: "https://maps.app.goo.gl/GyUcUDP6MRjtto8Q7",
  },
  {
    id: "DTT", // Unique ID for jumping
    name: "Blessing of the lord - Daw Toe Toe",
    image: "static/blessing-of-the-lord.jpg",
    fb: "https://web.facebook.com/profile.php?id=100094066430433",
    map: "https://maps.app.goo.gl/1rxdbAbwNMdac32g7",
  },
  {
    id: "BiCon", // Unique ID for jumping
    name: "Burma iCon",
    image: "static/burma-icon.jpg",
    fb: "https://web.facebook.com/profile.php?id=61559799691098&locale=th_TH",
    map: "https://maps.app.goo.gl/tCteqiEkxgoz1ebi7",
  },
  {
    id: "BMKChen", // Unique ID for jumping
    name: "Burma Kitchen",
    image: "static/burma-kitchen-chiangmai.jpg",
    fb: "https://web.facebook.com/profile.php?id=61573043474327&locale=th_TH",
    map: "https://maps.app.goo.gl/Ym46HxCousiheTNo7",
  },
  {
    id: "CMKO", // Unique ID for jumping
    name: "CMKO",
    image: "static/cmko-kyay-oh.jpg",
    fb: "https://web.facebook.com/CMKOchiangmai",
    map: "https://maps.app.goo.gl/iKTi4pArSG6EmvN16",
  },
  {
    id: "Dnoodles", // Unique ID for jumping
    name: "D-noodles",
    image: "static/d_noodles.jpg",
    fb: "https://www.facebook.com/profile.php?id=61553854631055",
    map: "https://maps.app.goo.gl/ZjnFXomainqaxjSH6",
  },
  {
    id: "EHCnx", // Unique ID for jumping
    name: "Everything Halal CNX",
    image: "static/everything-halal.jpg",
    fb: "https://web.facebook.com/everythinghalal.cnx",
    map: "https://maps.app.goo.gl/SfTmNRbdJH4NtkRk6",
  },
  {
    id: "FGCmai", // Unique ID for jumping
    name: "Feel Garden Chiang Mai",
    image: "static/feel-garden-chiangmai.jpg",
    fb: "https://web.facebook.com/profile.php?id=61579897884813",
    map: "https://maps.app.goo.gl/q3tLKJGFT3tsA2sp6",
  },
  {
    id: "Gatone", // Unique ID for jumping
    name: "Gatone's Teashop",
    image: "static/gatone.jpg",
    fb: "https://web.facebook.com/GatoneBurmeseFoodandTeashop?locale=th_TH",
    map: "https://maps.app.goo.gl/kafrAct5j6VHanZv5",
  },
  {
    id: "Kzone", // Unique ID for jumping
    name: "Karenni Zone - คาเรนนีโซน",
    image: "static/karenni-zone.jpg",
    fb: "https://web.facebook.com/profile.php?id=61566547524893",
    map: "https://maps.app.goo.gl/1Ko1LCz5yWZZcvJb7",
  },
  {
    id: "KKOh", // Unique ID for jumping
    name: "Kaung Kyay Oh",
    image: "static/kaung-kyay-oh.jpg",
    fb: "https://web.facebook.com/profile.php?id=100063838059511",
    map: "https://maps.app.goo.gl/8ZdQ2Sh9bULSbhdQ8",
  },
  {
    id: "KTYar", // Unique ID for jumping
    name: "Khittayar",
    image: "static/khittayar.jpg",
    fb: "https://web.facebook.com/profile.php?id=100088644737476&locale=th_TH",
    map: "https://maps.app.goo.gl/uY1GDaMwjmEpK5ZCA",
  },
  {
    id: "Lwave", // Unique ID for jumping
    name: "Little Wave",
    image: "static/little_wave.png",
    fb: "https://www.facebook.com/profile.php?id=61585403967169",
    map: "https://maps.app.goo.gl/Y7Hg2S3X3HWMLdyq6",
  },
  {
    id: "MKha", // Unique ID for jumping
    name: "May Kha Restaurant",
    image: "static/may-kha.jpg",
    fb: "https://web.facebook.com/maykharestaurant?locale=th_TH",
    map: "https://maps.app.goo.gl/4MMuHEPnHVud4W1k8",
  },
  {
    id: "MPoint", // Unique ID for jumping
    name: "Meeting Point จุดนัดพบ",
    image: "static/meeting-point.jpg",
    fb: "https://web.facebook.com/meetingpoint10925/?rdid=yNxgFi3p5l37bEnk",
    map: "https://maps.app.goo.gl/Bm6Yqrg7Qkv4b62p7",
  },
  {
    id: "MOC", // Unique ID for jumping
    name: "Memories of Chiang Mai",
    image: "static/memories-of-chiangmai.jpg",
    fb: "https://web.facebook.com/MemoriesofCNX?locale=th_TH",
    map: "https://maps.app.goo.gl/VCbmTidwXtwB7VdY7",
  },
  {
    id: "OCTee", // Unique ID for jumping
    name: "Ochatee",
    image: "static/ochatee.jpg",
    fb: "https://web.facebook.com/profile.php?id=100094438961242&locale=th_TH",
    map: "https://maps.app.goo.gl/sm59vXzNxUTJQR1cA",
  },
  {
    id: "SLay", // Unique ID for jumping
    name: "SHAN LAY",
    image: "static/shan-lay.jpg",
    fb: "https://web.facebook.com/shanlayfood/?_rdc=1&_rdr",
    map: "https://maps.app.goo.gl/NcKkb4aDsWnsFotW6",
  },
  {
    id: "SYYKChan", // Unique ID for jumping
    name: "Shan Yoeyar Kitchen",
    image: "static/shan-yoeyar-kitchen.jpg",
    fb: "https://web.facebook.com/profile.php?id=61581711013035",
    map: "https://maps.app.goo.gl/k4DQBEH5FYQLYGJdA",
  },
  {
    id: "SBite", // Unique ID for jumping
    name: "Shwe Bite",
    image: "static/shwe-bite.jpg",
    fb: "https://web.facebook.com/shwebitecnx?locale=th_TH",
    map: "https://maps.app.goo.gl/Uveyr2FHcesd3DjK6",
  },
  {
    id: "Splates", // Unique ID for jumping
    name: "Sixteen Plates",
    image: "static/sixteen_plates.jpg",
    fb: "https://www.facebook.com/profile.php?id=61582454968728",
    map: "https://maps.app.goo.gl/LApUTRXCJ31YWwTT7",
  },
  {
    id: "TMaing", // Unique ID for jumping
    name: "Thamaing Evening Fried Rice",
    image: "static/thamaing.jpg",
    fb: "https://web.facebook.com/profile.php?id=61581532874376",
    map: "https://maps.app.goo.gl/39pzJfQuD9BDZzck6",
  },
  {
    id: "TBest", // Unique ID for jumping
    name: "The Best Burmese Restaurant",
    image: "static/the-best-burmese-restaurant.jpg",
    fb: "https://web.facebook.com/profile.php?id=61575500531798&locale=th_TH",
    map: "https://maps.app.goo.gl/Ubpm3GHBRYRJeUpN7",
  },
  {
    id: "TExile", // Unique ID for jumping
    name: "The Exile",
    image: "static/exile.jpg",
    fb: "https://web.facebook.com/theexilebkk",
    map: "https://maps.app.goo.gl/D2irunAPLq97xMod7",
  },
  {
    id: "WAain", // Unique ID for jumping
    name: "Warr Aain",
    image: "static/warr-aain.jpg",
    fb: "https://web.facebook.com/profile.php?id=61578240590967&locale=th_TH",
    map: "https://maps.app.goo.gl/ySVwrd6m1ApbRKM46",
  },
  {
    id: "WHill", // Unique ID for jumping
    name: "Windy Hill - လေထန်ကုန်း",
    image: "static/windy-hill.jpg",
    fb: "https://web.facebook.com/profile.php?id=61575315136492&locale=th_TH",
    map: "https://maps.app.goo.gl/WgStwLMBjemACioDA",
  },
  {
    id: "ZMThu", // Unique ID for jumping
    name: "Zin Mal Thu - ဇင်းမယ်သူ",
    image: "static/zin-mal-thu.jpg",
    fb: "https://web.facebook.com/profile.php?id=61559724307301",
    map: "https://maps.app.goo.gl/bUAncbXDku7grQWz7",
  },
  {
    id: "ZMTHouse", // Unique ID for jumping
    name: "Zinmè Tea House(ဇင်းမယ်တီးဟောက်စ်) Sang Ga Dee",
    image: "static/zinme-tea-house.png",
    fb: "https://web.facebook.com/profile.php?id=61559724307301",
    map: "https://maps.app.goo.gl/EVMuVVaDcHpzuQkNA",
  },
];

/**
 * DOM SELECTION:
 * Selecting the HTML containers where the content will be injected.
 */
const grid = document.querySelector(".shop-grid");
const dropdownMenu = document.getElementById("dropdown-menu");

/**
 * RENDER FUNCTION: loadShops
 * Loops through the 'shops' array and generates HTML for two locations:
 * 1. The Navbar Dropdown links.
 * 2. The main grid of shop cards.
 */
function loadShops() {
  shops.forEach((shop) => {
    // 1. Create Dropdown Link and append it to the dropdown-menu list
    const dropLink = `<li><a href="#${shop.id}">${shop.name}</a></li>`;
    dropdownMenu.innerHTML += dropLink;

    // 2. Create Shop Card (Notice the id="${shop.id}" which matches the dropdown link href)
    const card = `
            <div class="shop-card" id="${shop.id}">
                <img src="${shop.image}" class="shop-img" alt="${shop.name}">
                <div class="shop-content">
                    <h3>${shop.name}</h3>
                    <div class="shop-links">
                        <a href="${shop.fb}" target="_blank" class="link">
                            <i class="fab fa-facebook"></i> Facebook
                        </a>
                        <a href="${shop.map}" target="_blank" class="link">
                            <i class="fas fa-map-marker-alt"></i> Location
                        </a>
                    </div>
                </div>
            </div>
        `;
    // Append the newly created card string to the grid container
    grid.innerHTML += card;
  });
}

/* --- Search Interaction Logic --- */
const searchWrapper = document.getElementById("searchWrapper");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("shop-search");

// Toggles the expansion
searchBtn.addEventListener("click", () => {
  searchWrapper.classList.toggle("active");

  if (searchWrapper.classList.contains("active")) {
    searchInput.focus();
  } else {
    searchInput.value = "";
    filterShops(""); // Reset filter when closed
  }
});

// Real-time search
searchInput.addEventListener("input", (e) => {
  filterShops(e.target.value.toLowerCase());
});

// Function to show/hide the shop cards
function filterShops(term) {
  const shopCards = document.querySelectorAll(".shop-card");
  shopCards.forEach((card) => {
    const name = card.querySelector("h3").textContent.toLowerCase();
    // Uses flex or block based on your original grid display
    card.style.display = name.includes(term) ? "" : "none";
  });
}

/**
 * INITIALIZATION:
 * Triggers the loadShops function once the initial HTML document
 * has been completely loaded and parsed.
 */
document.addEventListener("DOMContentLoaded", loadShops);

/* --- Feedback Modal Logic --- */
const modal = document.getElementById("feedbackModal");
const btn = document.getElementById("feedbackBtn");
const closeBtn = document.querySelector(".close-modal");

// Open modal
btn.onclick = () => (modal.style.display = "block");

// Close modal when clicking (X)
closeBtn.onclick = () => (modal.style.display = "none");

// Close modal when clicking outside of it
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/* --- Enhanced Feedback Logic --- */
const feedbackForm = document.getElementById("feedbackForm");

// Listen for the submit event
feedbackForm.addEventListener("submit", function () {
  // We use a small delay to allow the form to begin sending before we hide the UI
  setTimeout(() => {
    const modal = document.getElementById("feedbackModal");
    modal.style.display = "none";
    feedbackForm.reset();
  }, 100);
});
