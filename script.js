// Outline Keys (၆ ခု) - Germany, Netherlands, Hong Kong, Taiwan, Taiwan 2, Thailand
const outlineKeys = [
    { name: "🇩🇪 Germany Onimusha", key: "ss://YWVzLTI1Ni1nY206WEtGS2wyclVMaklwNzQ%3D@185.226.172.8:8008#%F0%9F%87%A9%F0%9F%87%AA%20Germany%20Onimusha" },
    { name: "🇳🇱 Netherlands Onimusha", key: "ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpZVEV5WkRJME9HUXdNMlptWmpjNFpUZzFaVEJpWVRObFpUWmtaakl4T0RNPQ%3D%3D@141.144.195.131:45819#%F0%9F%87%B3%F0%9F%87%B1%20%20Netherlands%20Onimusha" },
    { name: "🇭🇰 Hong Kong Onimusha", key: "ss://YWVzLTI1Ni1nY206NzI1NTMzMjBhZTZiY2M4Zg%3D%3D@212.192.13.25:10910#%F0%9F%87%AD%F0%9F%87%B0%20Hong%20Kong%20Onimusha" },
    { name: "🇹🇼 Taiwan Onimusha", key: "ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpiMWFlMGZjZS05MzQwLTRmMmUtODgyZC1mZGIyMjE4ZTJlMmI%3D@61.231.49.125:50099#%F0%9F%87%B9%F0%9F%87%BC%20Taiwan%20Onimusha" },
    { name: "🇹🇼 Taiwan 2 Onimusha", key: "ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo3ZTczMWVjMy1mOGUxLTQzZjYtOTJjZi0zOTc4ZDE0NzA1YzQ%3D@36.224.191.247:50099#%F0%9F%87%B9%F0%9F%87%BC%20Taiwan%202%20Onimusha" },
    { name: "🇹🇭 Thailand Onimusha", key: "ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpsaHVVTFJ3TzRzbE02azI2MnBBQzRjYnE1QTFINno4ZWFPSFYyN3ZpN1l3PQ%3D%3D@47.81.56.202:44617#%F0%9F%87%B9%F0%9F%87%AD%20Thailand%20Onimusha" }
];

// 18+ Websites List
const adultSites = [
    { name: "Pornhub", url: "https://www.pornhub.com/" },
    { name: "XVideos", url: "https://www.xvideos.com/" },
    { name: "XHamster", url: "https://xhamster.com" },
    { name: "XNXX", url: "https://www.xnxx.com" },
    { name: "YouPorn", url: "https://www.youporn.com" },
    { name: "PornKai", url: "https://pornkai.com" },
    { name: "RedTube", url: "https://www.redtube.com" },
    { name: "Tube8", url: "https://www.tube8.com" },
    { name: "Eporner", url: "https://www.eporner.com" },
    { name: "HQPorn", url: "https://hqporner.com" },
    { name: "SpankBang", url: "https://spankbang.com" },
    { name: "3Movs", url: "https://www.3movs.com/" },
    { name: "PornTrex", url: "https://www.porntrex.com" },
    { name: "FikFap", url: "https://fikfap.com" },
    { name: "FYPTT", url: "https://fyptt.to" },
    { name: "TikPorn", url: "https://tik.porn" },
    { name: "XXXTik", url: "https://xxxtik.com" }
];

let hasShownAd = false; 

function loadKeys() {
    const container = document.getElementById('key-container');
    container.innerHTML = '';

    outlineKeys.forEach((item, index) => {
        container.innerHTML += `
            <div class="card key-card">
                <h3><i class="fa-solid fa-key"></i> ${item.name}</h3>
                <div class="key-box">
                    <input type="text" id="key-${index}" value="${item.key}" readonly>
                    <button class="btn-copy" onclick="copyKey('key-${index}')"><i class="fa-regular fa-copy"></i> Copy</button>
                </div>
            </div>
        `;
    });
}

function loadAdultSites() {
    const gridContainer = document.getElementById('adult-sites-grid');
    gridContainer.innerHTML = '';

    adultSites.forEach(site => {
        gridContainer.innerHTML += `
            <div class="card site-card">
                <h3><i class="fa-solid fa-play"></i> ${site.name}</h3>
                <a href="${site.url}" target="_blank" class="btn"><i class="fa-solid fa-arrow-up-right-from-square"></i> ဝင်ရောက်ရန်</a>
            </div>
        `;
    });
}

function toggleDrawer() {
    document.getElementById('drawer').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('show');
}

// Single Page Switcher Engine
function switchPage(pageId, event) {
    if (event) event.preventDefault();

    // Reset Page Display
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${pageId}`).classList.add('active');

    // Reset Active Nav Link
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const activeNav = document.querySelector(`.nav-link[onclick*="'${pageId}'"]`);
    if (activeNav) activeNav.classList.add('active');

    const titleMap = {
        'home': 'Onimusha Digital Page',
        'outline': 'VPN Key',
        'calculator': 'ဒေါ်လာ - ကျပ်ငွေ တွက်စက်',
        'ipchecker': 'Check My IP Address',
        'adultsites': '18+ Entertainment'
    };
    document.getElementById('page-title').innerText = titleMap[pageId];

    // Drawer ကို ပိတ်မည်
    document.getElementById('drawer').classList.remove('open');
    document.getElementById('overlay').classList.remove('show');

    // VPN Key Page ရောက်ပြီး မပြရသေးပါက ၅ စက္ကန့်အကြာတွင် (၁) ကြိမ်သာ Pop-up ပြမည်
    if (pageId === 'outline' && !hasShownAd) {
        setTimeout(() => {
            document.getElementById('adModal').classList.add('show');
            hasShownAd = true; 
        }, 5000);
    }

    if (pageId === 'ipchecker') {
        checkIP();
    }
}

function closeAdModal() {
    document.getElementById('adModal').classList.remove('show');
}

function goToHomeFromAd() {
    closeAdModal();
    switchPage('home');
}

function copyKey(elementId) {
    const input = document.getElementById(elementId);
    input.select();
    input.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(input.value).then(() => {
        alert("Outline Key ကို Copy ကူးပြီးပါပြီ!");
        // Direct Link Ad ကို Tab အသစ်ဖြင့် ဖွင့်ပေးမည်
        window.open('https://pimplehardnesscarnivorous.com/iwz0yb0vfj?key=da0e3c7cc3ae9197465b8c72820ecf3c', '_blank');
    });
}

function calculate(source) {
    const rate = parseFloat(document.getElementById('rate').value) || 0;
    const mmkInput = document.getElementById('mmkAmount');
    const usdInput = document.getElementById('usdAmount');

    if (rate <= 0) return;

    if (source === 'usd') {
        const usdVal = parseFloat(usdInput.value) || 0;
        mmkInput.value = Math.round(usdVal * rate);
    } else if (source === 'mmk') {
        const mmkVal = parseFloat(mmkInput.value) || 0;
        usdInput.value = (mmkVal / rate).toFixed(2);
    }
}

function checkIP() {
    document.getElementById('ip-address').innerText = "Checking...";
    
    fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
            document.getElementById('ip-address').innerText = data.ip || 'Unavailable';
            document.getElementById('ip-country').innerText = `${data.country_name || '-'} (${data.country_code || '-'})`;
            document.getElementById('ip-city').innerText = data.city || '-';
            document.getElementById('ip-isp').innerText = data.org || '-';
        })
        .catch(() => {
            document.getElementById('ip-address').innerText = "စစ်ဆေး၍မရပါ (Network Error)";
        });
}

window.onload = function() {
    loadKeys();
    loadAdultSites();
};
