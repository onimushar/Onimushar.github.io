// Outline Keys (၆ ခု) - Germany, Netherlands, Hong Kong, Taiwan, Taiwan 2, Thailand
const outlineKeys = [
    { 
        name: "🇹🇼 Taiwan Onimusha", 
        key: "ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTphOWEwZDA5Mi02ZjBlLTQ3MDEtODFlZS00NTQ2NDNkNmQ1MDY%3D@namrcg001640lrm.cybervena.com:50099#%F0%9F%87%B9%F0%9F%87%BC%20Taiwan%20Onimusha" 
    },
    { 
        name: "🇳🇱 Netherlands Onimusha", 
        key: "ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo0cUNLUDhEVWR5aXNvejBKd2J1a2xt@creativeboxnl2.zanity.net:5228#%F0%9F%87%B3%F0%9F%87%B1%20Netherlands%20Onimusha" 
    },
    { 
        name: "🇷🇺 Russia Onimusha", 
        key: "ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo2MjRUSG5lSmVYc3hsU2wzRFByN0tS@157.22.240.141:57925#%F0%9F%87%B7%F0%9F%87%BA%20Russia%20Onimusha" 
    },
    { 
        name: "🇩🇪 Germany Onimusha", 
        key: "ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpPV1ZoWVdNNE9URmxOR0ZoTlRGaU5qWTVORE5sT0RJM1pERTVOamMwWm1FPQ%3D%3D@130.61.102.202:59924#%F0%9F%87%A9%F0%9F%87%AA%20Germany%20Onimusha" 
    },
    { 
        name: "🇹🇭 Thailand Onimusha", 
        key: "ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpsaHVVTFJ3TzRzbE02azI2MnBBQzRjYnE1QTFINno4ZWFPSFYyN3ZpN1l3PQ%3D%3D@47.81.56.202:44617#%F0%9F%87%B9%F0%9F%87%AD%20Thailand%20Onimusha" 
    },
    { 
        name: "🇸🇬 Singapore Onimusha", 
        key: "ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpZMlF3WlRRME1EWXpPV0ZoTmpBNVltRTBOVFpoTldGa09Ea3pNV05tT0RVPQ%3D%3D@168.107.68.191:56927#%F0%9F%87%B8%F0%9F%87%AC%20Singapore%20Onimusha" 
    }
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
