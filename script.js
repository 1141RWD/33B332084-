let gameInitialized = false;
// --- 完整夜市資料庫 ---
        const allMarkets = [
        {id: 1, region: "北部", city: "基隆市", name: "基隆廟口夜市", food: "鼎邊趖、營養三明治、泡泡冰、天婦羅", sort: 1},
        {id: 2, region: "北部", city: "基隆市", name: "大武崙夜市", food: "牛排、鹽酥雞、滷味", sort: 1},
        {id: 3, region: "北部", city: "基隆市", name: "安樂夜市", food: "炸物、關東煮", sort: 1},
        {id: 4, region: "北部", city: "基隆市", name: "八斗子夜市", food: "烤魷魚、海鮮炸物", sort: 1},
        {id: 5, region: "北部", city: "台北市", name: "士林夜市", food: "雞排、蚵仔煎、大腸包小腸", sort: 1},
        {id: 6, region: "北部", city: "台北市", name: "饒河街夜市", food: "胡椒餅、藥燉排骨、臭豆腐", sort: 1},
        {id: 7, region: "北部", city: "台北市", name: "寧夏夜市", food: "豬肝湯、蚵仔煎", sort: 1},
        {id: 8, region: "北部", city: "台北市", name: "南機場夜市", food: "臭豆腐、來來水餃", sort: 1},
        {id: 9, region: "北部", city: "台北市", name: "通化夜市", food: "炒牛肉、滷味", sort: 1},
        {id: 10, region: "北部", city: "台北市", name: "師大夜市", food: "滷味、鹽酥雞", sort: 1},
        {id: 11, region: "北部", city: "台北市", name: "公館夜市", food: "珍珠奶茶、割包", sort: 1},
        {id: 12, region: "北部", city: "新北市", name: "樂華夜市", food: "蚵仔煎、雪花冰、甜不辣、滷味", sort: 1},
        {id: 13, region: "北部", city: "新北市", name: "三和夜市", food: "甜不辣、蚵仔煎", sort: 1},
        {id: 14, region: "北部", city: "新北市", name: "蘆洲夜市", food: "炸物、鹽酥雞", sort: 1},
        {id: 15, region: "北部", city: "新北市", name: "新莊夜市", food: "潤餅、牛肉麵", sort: 1},
        {id: 16, region: "北部", city: "新北市", name: "新泰夜市", food: "牛排、雞排", sort: 1},
        {id: 17, region: "北部", city: "新北市", name: "興南夜市", food: "滷味、炸物", sort: 1},
        {id: 18, region: "北部", city: "新北市", name: "南雅夜市", food: "大腸麵線、臭豆腐", sort: 1},
        {id: 19, region: "北部", city: "新北市", name: "淡水夜市", food: "阿給、魚丸湯、甜不辣", sort: 1},
        {id: 20, region: "北部", city: "新北市", name: "英專路夜市", food: "小吃拼盤、炸物", sort: 1},
        {id: 21, region: "北部", city: "新北市", name: "三峽夜市", food: "牛排、鹽酥雞", sort: 1},
        {id: 22, region: "北部", city: "新北市", name: "鶯歌夜市", food: "陶瓷街小吃、甜點", sort: 1},
        {id: 23, region: "北部", city: "新北市", name: "樹林夜市", food: "鹽酥雞、蚵仔煎", sort: 1},
        {id: 24, region: "北部", city: "新北市", name: "土城夜市", food: "滷味、炸物", sort: 1},
        {id: 25, region: "北部", city: "新北市", name: "林口夜市", food: "雞排、甜不辣", sort: 1},
        {id: 26, region: "北部", city: "新北市", name: "瑞芳夜市", food: "海產粥、烤魷魚", sort: 1},
        {id: 27, region: "北部", city: "新北市", name: "三芝夜市", food: "海鮮小吃、炸物", sort: 1},
        {id: 28, region: "北部", city: "桃園市", name: "桃園觀光夜市", food: "大腸包小腸、炸物、牛排", sort: 1},
        {id: 29, region: "北部", city: "桃園市", name: "中壢新明夜市", food: "牛排、鹽酥雞、炸物", sort: 1},
        {id: 30, region: "北部", city: "桃園市", name: "中原夜市", food: "珍珠奶茶、炸物", sort: 1},
        {id: 31, region: "北部", city: "桃園市", name: "興仁夜市", food: "大腸麵線、炸物", sort: 1},
        {id: 32, region: "北部", city: "桃園市", name: "平鎮夜市", food: "鹽酥雞、牛排", sort: 1},
        {id: 33, region: "北部", city: "桃園市", name: "楊梅夜市", food: "雞排、甜不辣", sort: 1},
        {id: 34, region: "北部", city: "桃園市", name: "龍潭夜市", food: "滷味、炸物", sort: 1},
        {id: 35, region: "北部", city: "桃園市", name: "大園夜市", food: "海鮮、鹹酥雞", sort: 1},
        {id: 36, region: "北部", city: "桃園市", name: "觀音夜市", food: "炸物、甜點", sort: 1},
        {id: 37, region: "北部", city: "宜蘭縣", name: "羅東夜市", food: "卜肉、鴨賞、米粉", sort: 1},
        {id: 38, region: "北部", city: "宜蘭縣", name: "宜蘭夜市", food: "蚵仔煎、炸物", sort: 1},
        {id: 39, region: "北部", city: "宜蘭縣", name: "東門夜市", food: "炸物、滷味", sort: 1},
        {id: 40, region: "北部", city: "宜蘭縣", name: "頭城夜市", food: "海鮮小吃、炸物", sort: 1},
        {id: 41, region: "北部", city: "宜蘭縣", name: "蘇澳夜市", food: "魚丸、海鮮小吃", sort: 1},
        {id: 42, region: "北部", city: "宜蘭縣", name: "冬山夜市", food: "炸物、甜不辣", sort: 1},
        {id: 43, region: "北部", city: "新竹市", name: "城隍廟夜市", food: "貢丸湯、米粉、鹽酥雞", sort: 1},
        {id: 44, region: "北部", city: "新竹市", name: "花園街夜市", food: "鹽酥雞、炸物", sort: 1},
        {id: 45, region: "北部", city: "新竹市", name: "清大夜市", food: "小吃拼盤、炸物", sort: 1},
        {id: 46, region: "北部", city: "新竹市", name: "光復路夜市", food: "珍珠奶茶、炸物", sort: 1},
        {id: 47, region: "北部", city: "新竹縣", name: "竹東夜市", food: "米粉、鹽酥雞", sort: 1},
        {id: 48, region: "北部", city: "新竹縣", name: "湖口夜市", food: "炸物、牛排", sort: 1},
        {id: 49, region: "北部", city: "新竹縣", name: "新豐夜市", food: "鹽酥雞、炸物", sort: 1},
        {id: 50, region: "中部", city: "苗栗縣", name: "英才夜市", food: "牛排、炸雞、地瓜球", sort: 2},
        {id: 51, region: "中部", city: "苗栗縣", name: "竹難夜市", food: "牛排、炸雞、地瓜球", sort: 2},
        {id: 52, region: "中部", city: "苗栗縣", name: "頭份夜市", food: "牛排、炸雞、地瓜球", sort: 2},
        {id: 53, region: "中部", city: "苗栗縣", name: "後龍夜市", food: "牛排、炸雞、地瓜球", sort: 2},
        {id: 54, region: "中部", city: "台中市", name: "逢甲夜市", food: "明倫蛋餅、大腸包小腸、章魚燒", sort: 2},
        {id: 55, region: "中部", city: "台中市", name: "一中夜市", food: "豪大雞排、豐仁冰、滷味", sort: 2},
        {id: 56, region: "中部", city: "台中市", name: "旱溪夜市", food: "波蘭保羅爸爸手工蛋糕、鳳梨冰", sort: 2},
        {id: 57, region: "中部", city: "台中市", name: "太原夜市", food: "地瓜球、牛排", sort: 2},
        {id: 58, region: "中部", city: "台中市", name: "忠孝夜市", food: "筒仔米糕、木瓜牛奶", sort: 2},
        {id: 59, region: "中部", city: "台中市", name: "中華路夜市", food: "蚵仔麵線、炒麵", sort: 2},
        {id: 60, region: "中部", city: "台中市", name: "廟東夜市", food: "排骨酥麵、菱角酥", sort: 2},
        {id: 61, region: "中部", city: "台中市", name: "東海夜市", food: "雞爪凍、刈包", sort: 2},
        {id: 62, region: "中部", city: "彰化縣", name: "精誠夜市", food: "蚵仔煎、肉圓、蝦猴酥", sort: 2},
        {id: 63, region: "中部", city: "彰化縣", name: "鹿港夜市", food: "麵線糊、芋丸", sort: 2},
        {id: 64, region: "中部", city: "彰化縣", name: "員林夜市", food: "雞腳凍、米糕", sort: 2},
        {id: 65, region: "中部", city: "南投縣", name: "草鞋墩夜市", food: "石頭牛排、地瓜球、炸物", sort: 2},
        {id: 66, region: "中部", city: "南投縣", name: "南投夜市", food: "豆花、炸粿", sort: 2},
        {id: 67, region: "中部", city: "南投縣", name: "埔里夜市", food: "鹹油條、烤肉", sort: 2},
        {id: 68, region: "南部", city: "雲林縣", name: "斗六夜市", food: "魷魚羹、臭豆腐、米糕", sort: 3},
        {id: 69, region: "南部", city: "雲林縣", name: "虎尾夜市", food: "地瓜圓、滷味", sort: 3},
        {id: 70, region: "南部", city: "雲林縣", name: "西螺夜市", food: "三角大水餃、麻糬", sort: 3},
        {id: 71, region: "南部", city: "嘉義市", name: "文化路夜市", food: "火雞肉飯、沙鍋魚頭、豆花", sort: 3},
        {id: 72, region: "南部", city: "嘉義縣", name: "嘉樂福夜市", food: "炭烤雞排、蒙古烤肉", sort: 3},
        {id: 73, region: "南部", city: "嘉義縣", name: "朴子夜市", food: "潤餅、蚵仔煎", sort: 3},
        {id: 74, region: "南部", city: "台南市", name: "花園夜市", food: "棺材板、蚵仔煎、牛排、木瓜牛奶", sort: 3},
        {id: 75, region: "南部", city: "台南市", name: "大東夜市", food: "二師兄滷味、地瓜球、地瓜圓", sort: 3},
        {id: 76, region: "南部", city: "台南市", name: "武聖夜市", food: "沙茶烤玉米、大腸香腸", sort: 3},
        {id: 77, region: "南部", city: "高雄市", name: "瑞豐夜市", food: "天使雞排、海產粥、滷味", sort: 3},
        {id: 78, region: "南部", city: "高雄市", name: "六合夜市", food: "木瓜牛奶、海產粥、鹽蒸蝦", sort: 3},
        {id: 79, region: "南部", city: "高雄市", name: "凱旋夜市", food: "炸彈蔥油餅、烤肉", sort: 3},
        {id: 80, region: "南部", city: "高雄市", name: "青年夜市", food: "凍圓、烤鴨捲餅", sort: 3},
        {id: 81, region: "南部", city: "屏東縣", name: "屏東夜市", food: "黑輪、肉圓、豬腳", sort: 3},
        {id: 82, region: "南部", city: "屏東縣", name: "潮州夜市", food: "冷熱冰、旗魚黑輪", sort: 3},
        {id: 83, region: "南部", city: "屏東縣", name: "東港夜市", food: "飯湯、雙糕潤", sort: 3},
        {id: 84, region: "南部", city: "屏東縣", name: "萬丹夜市", food: "紅豆餅、臭豆腐", sort: 3},
        {id: 85, region: "東部", city: "花蓮縣", name: "東大門夜市", food: "原住民烤肉、烤飛魚、蔥油餅", sort: 4},
        {id: 86, region: "東部", city: "花蓮縣", name: "自強夜市", food: "棺材板、現打果汁", sort: 4},
        {id: 87, region: "東部", city: "花蓮縣", name: "南濱夜市", food: "射飛鏢小吃、炸物", sort: 4},
        {id: 88, region: "東部", city: "台東縣", name: "正氣路夜市", food: "米苔目、炸鬼頭刀", sort: 4},
        {id: 89, region: "東部", city: "台東縣", name: "觀光夜市", food: "割包、烤肉", sort: 4},
        {id: 90, region: "東部", city: "台東縣", name: "知本夜市", food: "大腸包小腸、炸雞", sort: 4},
        {id: 91, region: "東部", city: "台東縣", name: "成功夜市", food: "海鮮小吃、烤魚", sort: 4}
        ];

        let currentUser = null;
        let favs = new Set();
        let users = JSON.parse(localStorage.getItem('sysUsers')) || [{u:'test', p:'1234'}];
        let currentMarketRef = null;
        let currentCommRegion = '全部';

        // --- 自動輪播邏輯 ---
        let currentSlide = 0;
        function initCarousel() {
            const regions = [
                {n:"北部區域", d:"台北美食精選", img:"https://img.sant.tw/2023/06/20230630153135_67.jpg"},
                {n:"中部區域", d:"中部特色美味", img:"https://cf.shopee.tw/file/eb54a922bc5821419ab0aef4ce1c20b7"},
                {n:"南部區域", d:"南部道地小吃", img:"https://tse2.mm.bing.net/th/id/OIP.lq9XunyWWHltqV7Ok72QYwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"},
                {n:"東部區域", d:"東部山海盛宴", img:"https://cc.tvbs.com.tw/img/program/upload/2023/10/13/20231013180514-957bc355.jpg"}
            ];
            const wrapper = document.getElementById('carouselWrapper');
            wrapper.innerHTML = regions.map((r, i) => `
                <div class="banner-slide ${i === 0 ? 'active' : ''}">
                    <div class="banner-bg" style="background-image: url('${r.img}')"></div>
                    <div class="banner-overlay"></div>
                    <div class="banner-text">
                        <h2>${r.n}</h2>
                        <p>${r.d}</p>
                    </div>
                </div>
            `).join('');

            setInterval(() => {
                const slides = document.querySelectorAll('.banner-slide');
                if(!slides.length) return;
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }, 3000); 
        }

        // --- 搜尋功能 ---
        function updateCityCheckboxes() {
            const region = document.getElementById("regionFilter").value;
            const container = document.getElementById("cityFilters");
            container.innerHTML = "";
            const cities = [...new Set(allMarkets.filter(m => !region || m.region === region).map(m => m.city))];
            cities.forEach(city => {
                container.innerHTML += `<label class="city-label"><input type="checkbox" class="cityCheckbox" value="${city}" onchange="renderMarkets('marketList')"> ${city}</label>`;
            });
        }

        function renderMarkets(targetId) {
            const region = document.getElementById("regionFilter")?.value || "";
            const selectedCities = [...document.querySelectorAll(".cityCheckbox:checked")].map(c => c.value);
            const container = document.getElementById(targetId);
            
            let data = (targetId === 'favoriteList') ? allMarkets.filter(x => favs.has(x.id)) : allMarkets;
            data = data.filter(m => (!region || m.region === region) && (selectedCities.length === 0 || selectedCities.includes(m.city)));

            container.innerHTML = data.length ? "" : "<p style='text-align:center; color:#ccc; padding:50px; grid-column:1/-1;'>尚無資料</p>";
            data.forEach(m => {
                const isFav = favs.has(m.id);
                container.innerHTML += `
                    <div class="market-card">
                        <div class="action-btns">
                            <div class="star-btn ${isFav ? 'active' : ''}" onclick="toggleFav(${m.id}, event)">★</div>
                            <div class="edit-btn" onclick="openComment(${m.id}, '${m.name}', event)">✎</div>
                        </div>
                        <div onclick="openMap('${m.city + m.name}')">
                            <strong style="color:#ffffff; font-size:1.1rem;">${m.city} ｜ ${m.name}</strong>
                            <p style="margin-top:10px; color:#bdc3c7; font-size:14px;">特色必吃：${m.food}</p>
                        </div>
                    </div>`;
            });
        }

        // --- 會員管理 ---
        let authMode = 'login';
        function openAuth(mode) { 
            authMode = mode;
            document.getElementById('modalTitle').innerText = (mode === 'login' ? '帳號登入' : '快速註冊');
            document.getElementById('regOnly').style.display = (mode === 'register' ? 'block' : 'none');
            document.getElementById('authModal').style.display = 'flex'; 
        }
        function closeAuth() { document.getElementById('authModal').style.display = 'none'; }

        function submitAuth() {
            const u = document.getElementById('iptUser').value.trim(), p = document.getElementById('iptPass').value.trim();
            if(!u || !p) return;
            
            if(authMode === 'register') {
                // --- 新增：讀取信箱並檢查格式 ---
                const e = document.getElementById('iptEmail').value.trim();
                const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
                
                if (!gmailRegex.test(e)) {
                    alert("請輸入正確的 @gmail.com 格式！");
                    return;
                }
                // ----------------------------

                if(users.find(x => x.u === u)) { alert("帳號已存在！"); return; }
                
                // 註冊時將信箱也存入物件中
                users.push({u, p, e}); 
                localStorage.setItem('sysUsers', JSON.stringify(users));
                alert("註冊成功！請登入");
                openAuth('login');
                return;
            }

            const user = users.find(x => x.u === u && x.p === p);
            if(user) {
                currentUser = u;
                favs = new Set(JSON.parse(localStorage.getItem('sysFavs_' + u)) || []);
                document.getElementById('authZone').innerHTML = `
                    <div class="user-profile">
                        <div class="user-avatar">${u[0].toUpperCase()}</div>
                        <span class="user-name">${u}</span>
                        <button class="logout-btn" onclick="location.reload()">登出</button>
                    </div>`;
                closeAuth();
                updateFavUI();
                switchTab(0);
            } else { alert("帳號密碼錯誤！"); }
        }

        // --- Tab 切換 ---
        function switchTab(i) {
    document.querySelectorAll('.tab-item').forEach((t, idx) => t.classList.toggle('active', idx === i));
    document.querySelectorAll('.page-content').forEach((p, idx) => p.classList.toggle('active', idx === i));
    
    if(i === 1) renderMarkets('marketList');
    
    // 遊戲頁面 (Page 5) 不受登入限制，直接進入
    if(i === 5) {
        if(!gameInitialized) {
            initMarbleGame();
            gameInitialized = true;
        }
        return; 
    }

    // 處理需要登入保護的頁面 (Page 2, 3, 4)
    if(i >= 2 && i <= 4) {
        const guards = [null, null, 'guard-2', 'guard-3', 'guard-4'];
        const lists = [null, null, 'favoriteList', 'noteList', 'communityContainer'];
        const guardEl = document.getElementById(guards[i]);
        const listEl = document.getElementById(lists[i]);
        
        if(!currentUser) {
            guardEl.style.display = 'block'; 
            listEl.style.display = 'none';
        } else {
            guardEl.style.display = 'none'; 
            listEl.style.display = (i === 2) ? 'grid' : 'block';
            if(i === 2) renderMarkets('favoriteList');
            if(i === 3) renderNotes();
            if(i === 4) renderCommunity();
        }
    }
}

        // --- 收藏/筆記邏輯 ---
        function toggleFav(id, e) {
            e.stopPropagation();
            if(!currentUser) { alert("請先登入！"); return; }
            favs.has(id) ? favs.delete(id) : favs.add(id);
            localStorage.setItem('sysFavs_' + currentUser, JSON.stringify([...favs]));
            updateFavUI(); renderMarkets('marketList');
            if(document.getElementById('page-2').classList.contains('active')) renderMarkets('favoriteList');
        }

        function updateFavUI() { document.getElementById('favCount').innerText = favs.size; }

        function getTime() {
            const now = new Date();
            return `${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()} ${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}`;
        }

        function renderNotes() {
            let data = JSON.parse(localStorage.getItem('notes_' + currentUser)) || [];
            const container = document.getElementById('noteList');
            container.innerHTML = data.length ? "" : "<p style='text-align:center; color:#ccc; padding:30px;'>目前沒有筆記。</p>";
            data.forEach(n => {
                container.innerHTML += `
                    <div class="comment-card">
                        <div class="del-btn" onclick="deleteItem('note','${n.id}')">刪除</div>
                        <strong>${n.market}</strong>
                        <p style="margin-top:10px;">${n.text}</p>
                        <div class="time-stamp">${n.time || ''}</div>
                    </div>`;
            });
        }

        function filterCommunity(region, btn) {
            currentCommRegion = region;
            document.querySelectorAll('.comm-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCommunity();
        }

        function renderCommunity() {
            let data = JSON.parse(localStorage.getItem('community_all')) || [];
            const container = document.getElementById('communityList');
            container.innerHTML = "";
            
            // 排序與篩選
            let filteredMarkets = allMarkets;
            if(currentCommRegion !== '全部') {
                filteredMarkets = allMarkets.filter(m => m.region === currentCommRegion);
            }
            
            const sortedMarkets = [...filteredMarkets].sort((a,b) => a.sort - b.sort);
            let hasContent = false;

            sortedMarkets.forEach(m => {
                const list = data.filter(c => c.marketId === m.id);
                if(list.length > 0) {
                    hasContent = true;
                    let html = `<div class="group-header">${m.region} - ${m.name}</div>`;
                    list.forEach(c => {
                        const isMine = (currentUser === c.user);
                        html += `
                            <div class="community-chat-item">
                                <div class="chat-avatar">${c.user[0].toUpperCase()}</div>
                                <div class="chat-bubble">
                                    ${isMine ? `<div class="del-btn" onclick="deleteItem('comm','${c.id}')">刪除</div>` : ''}
                                    <div class="chat-info">
                                        <strong>${c.user}</strong> @ ${m.name}
                                    </div>
                                    <div class="chat-text">${c.text}</div>
                                    <div class="time-stamp">${c.time || ''}</div>
                                </div>
                            </div>`;
                    });
                    container.innerHTML += html;
                }
            });

            if(!hasContent) {
                container.innerHTML = `<p style='text-align:center; color:#ccc; padding:50px;'>此區域尚無留言。</p>`;
            }
        }

        function deleteItem(type, id) {
            if(!confirm("確定要刪除嗎？")) return;
            if(type === 'note') {
                let d = (JSON.parse(localStorage.getItem('notes_' + currentUser)) || []).filter(x => x.id !== id);
                localStorage.setItem('notes_' + currentUser, JSON.stringify(d)); renderNotes();
            } else {
                let d = (JSON.parse(localStorage.getItem('community_all')) || []).filter(x => x.id !== id);
                localStorage.setItem('community_all', JSON.stringify(d)); renderCommunity();
            }
        }

        function saveComment(type) {
            const text = document.getElementById('commentText').value.trim();
            if(!text) return;
            const post = { 
                id: Date.now().toString(), 
                user: currentUser, 
                marketId: currentMarketRef.id, 
                market: currentMarketRef.name, 
                text: text,
                time: getTime()
            };
            if(type === 'note') {
                let d = JSON.parse(localStorage.getItem('notes_' + currentUser)) || [];
                d.unshift(post); localStorage.setItem('notes_' + currentUser, JSON.stringify(d));
            } else {
                let d = JSON.parse(localStorage.getItem('community_all')) || [];
                d.unshift(post); localStorage.setItem('community_all', JSON.stringify(d));
            }
            closeComment(); alert("已發佈！");
        }

        function openComment(id, name, e) { 
            e.stopPropagation(); 
            if(!currentUser) { alert("請先登入！"); return; }
            currentMarketRef = allMarkets.find(x => x.id === id);
            document.getElementById('commentTargetName').innerText = name;
            document.getElementById('commentModal').style.display = 'flex'; 
        }
        function closeComment() { document.getElementById('commentModal').style.display = 'none'; document.getElementById('commentText').value = ""; }

        function openMap(q) {
            document.getElementById('mapTitle').innerText = q;
            document.getElementById('mapContainer').innerHTML = `<iframe src="https://maps.google.com/maps?q=${encodeURIComponent(q)}&output=embed"></iframe>`;
            document.getElementById('mapDialog').showModal();
        }

        window.onload = () => { initCarousel(); updateCityCheckboxes(); renderMarkets('marketList'); };
        document.addEventListener('DOMContentLoaded', () => {
    // 登入狀態初始化
    updateAuthUI?.();

    // 篩選初始化
    updateCityCheckboxes?.();
    renderMarkets?.('marketList');

    // 收藏數量
    updateFavCount?.();

    // 社區
    renderCommunity?.();
});


function adjustBet(amount) {
    if (window.gameAdjustBet) window.gameAdjustBet(amount);
}

function initMarbleGame() {
    const canvas = document.getElementById("gameCanvas");
    const launchBtn = document.getElementById("mobile-launch-btn");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let totalScore = 1510, bet = 30, power = 0, isCharging = false;
    let ball = { x: 435, y: 660, vx: 0, vy: 0, r: 8, active: false };
    
    const railX = 410; 
    let zones = [1, 2, 5, 0, 10, 2, 1];

    function randomizeZones() {
        const multipliers = [0, 1, 1, 2, 2, 5, 10, 15, 20];
        zones = zones.map(() => multipliers[Math.floor(Math.random() * multipliers.length)]);
    }

    window.gameAdjustBet = function(amount) {
        if (ball.active) return;
        bet = Math.max(10, Math.min(totalScore, bet + amount));
        updateUI();
    };

    const pegs = [];
    for (let r = 0; r < 13; r++) {
        let cols = r % 2 === 0 ? 10 : 9;
        let spacing = railX / (cols + 1);
        for (let c = 0; c < cols; c++) {
            pegs.push({ x: (c + 1) * spacing + (r % 2 === 0 ? 0 : spacing/2) - 5, y: r * 42 + 150, r: 4, active: 0 });
        }
    }

    function updateUI() {
        document.getElementById("total-score").innerText = totalScore;
        document.getElementById("bet-amount").innerText = bet;
        document.getElementById("power-bar").style.height = power + "%";
    }

    const handleStart = (e) => {
        if(!ball.active && totalScore >= bet) {
            isCharging = true;
            randomizeZones();
        }
        if(e) e.preventDefault();
    };
    const handleEnd = () => { if(isCharging) { launchBall(); isCharging = false; } };

    launchBtn.addEventListener("touchstart", handleStart);
    launchBtn.addEventListener("touchend", handleEnd);
    launchBtn.addEventListener("mousedown", handleStart);
    window.addEventListener("mouseup", handleEnd);
    
    window.addEventListener("keydown", (e) => { if(e.code === "Space") handleStart(); });
    window.addEventListener("keyup", (e) => { if(e.code === "Space") handleEnd(); });

    function launchBall() {
        totalScore -= bet;
        ball.active = true;
        ball.x = 435; 
        ball.y = 660; 
        ball.vx = 0; // 發射初期保持垂直
        ball.vy = -(power / 4 + 18); 
        power = 0;
        updateUI();
    }

    function update() {
        if (isCharging) { power = Math.min(100, power + 2.5); updateUI(); }

        if (ball.active) {
            ball.vy += 0.35; // 重力
            ball.x += ball.vx; 
            ball.y += ball.vy;

            // --- 核心改動：頂部弧線引導 ---
            if (ball.y < 80 && ball.x > railX - 20) {
                // 當球接近頂部，模擬弧形牆壁，將垂直動能轉化為向左的水平動能
                ball.vx -= 0.6; 
                ball.vy *= 0.95;
            }

            // 實體隔板反彈
            if (ball.y > 120) {
                if (ball.x + ball.r > railX && ball.x < railX + 5) { ball.x = railX - ball.r; ball.vx *= -0.5; }
                else if (ball.x - ball.r < railX && ball.x > railX - 5) { ball.x = railX + ball.r; ball.vx *= -0.5; }
            }

            // 頂部與邊界反彈
            if (ball.y < ball.r) { ball.y = ball.r; ball.vy *= -0.4; }
            if (ball.x > canvas.width - ball.r) { ball.x = canvas.width - ball.r; ball.vx *= -0.5; }
            if (ball.x < ball.r) { ball.x = ball.r; ball.vx *= -0.5; }

            // 釘子碰撞 (圓周角度算法)
            pegs.forEach(p => {
                let dx = ball.x - p.x, dy = ball.y - p.y;
                let dist = Math.hypot(dx, dy);
                if (dist < ball.r + p.r) {
                    p.active = 10;
                    let angle = Math.atan2(dy, dx);
                    let speed = Math.hypot(ball.vx, ball.vy) * 0.65; // 彈力係數
                    ball.vx = Math.cos(angle) * (speed + 0.5);
                    ball.vy = Math.sin(angle) * (speed + 0.5);
                    ball.x = p.x + Math.cos(angle) * (ball.r + p.r + 1);
                    ball.y = p.y + Math.sin(angle) * (ball.r + p.r + 1);
                }
            });

            // 結算
            if (ball.y > 700) {
                if (ball.x < railX) {
                    let zw = railX / zones.length;
                    let index = Math.floor(ball.x / zw);
                    if (index >= 0 && index < zones.length) {
                        totalScore += bet * zones[index];
                    }
                }
                ball.active = false;
                updateUI();
            }
        }
    }

    function draw() {
        ctx.fillStyle = "#05050a";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        let zw = railX / zones.length;
        zones.forEach((z, i) => {
            ctx.fillStyle = `hsl(${i * 45}, 60%, 25%)`;
            ctx.fillRect(i * zw, 660, zw, 40);
            ctx.fillStyle = "#fff"; ctx.font = "bold 16px Arial"; ctx.textAlign = "center";
            ctx.fillText(z + "x", i * zw + zw/2, 688);
        });

        ctx.strokeStyle = "#555"; ctx.lineWidth = 6;
        ctx.beginPath(); ctx.moveTo(railX, 700); ctx.lineTo(railX, 120); ctx.stroke();

        pegs.forEach(p => {
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = p.active > 0 ? "#00f2ff" : "#222";
            ctx.fill(); if(p.active > 0) p.active--;
        });

        if (ball.active || isCharging) {
            ctx.beginPath(); ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
            ctx.fillStyle = "#fff"; ctx.fill();
        }
        update();
        requestAnimationFrame(draw);
    }
    draw();
}