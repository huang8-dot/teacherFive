// 游戏配置和常量
const DIRECTIONS = {
    NORTH: 0,
    EAST: 1,
    SOUTH: 2,
    WEST: 3
};

const DIRECTION_ARROWS = ['⬆️', '➡️', '⬇️', '⬅️'];
const DIRECTION_NAMES = {
    0: { zh: '向北', en: 'North' },
    1: { zh: '向东', en: 'East' },
    2: { zh: '向南', en: 'South' },
    3: { zh: '向西', en: 'West' }
};

// 获取双语方向名称
function getDirectionText(direction) {
    const dir = DIRECTION_NAMES[direction];
    return `${dir.en} ${dir.zh}`;
}

// 建筑物定义
const BUILDINGS_EASY = [
    { 
        icon: '🏫', 
        name: '学校', 
        nameEn: 'School', 
        pos: [[0,0], [0,1], [1,0], [1,1]],
        description: '欢迎来到学校！这里是学生们学习知识、成长成才的地方。',
        items: [
            { icon: '📚', name: '教室' },
            { icon: '🎸', name: '音乐室' },
            { icon: '⚽', name: '操场' },
            { icon: '💻', name: '电脑室' }
        ]
    },
    { 
        icon: '🏪', 
        name: '商店', 
        nameEn: 'Shop', 
        pos: [[0,3], [0,4], [1,3], [1,4]],
        description: '欢迎光临！这里有各种商品，满足你的日常需求。',
        items: [
            { icon: '🍎', name: '食品区' },
            { icon: '👔', name: '服装区' },
            { icon: '🎮', name: '玩具区' },
            { icon: '📱', name: '电子产品' }
        ]
    },
    { 
        icon: '🏛️', 
        name: '博物馆', 
        nameEn: 'Museum', 
        pos: [[0,6], [0,7], [1,6], [1,7]],
        description: '欢迎参观博物馆！这里展示着丰富的历史文化珍品。',
        items: [
            { icon: '🏺', name: '古代文物' },
            { icon: '🖼️', name: '艺术展厅' },
            { icon: '🦕', name: '自然馆' },
            { icon: '🚀', name: '科技馆' }
        ]
    },
    { 
        icon: '🏥', 
        name: '医院', 
        nameEn: 'Hospital', 
        pos: [[3,0], [3,1], [4,0], [4,1]],
        description: '欢迎来到医院！这里提供专业的医疗服务和健康护理。',
        items: [
            { icon: '👨‍⚕️', name: '门诊' },
            { icon: '🛌', name: '住院部' },
            { icon: '💊', name: '药房' },
            { icon: '🩺', name: '急诊室' }
        ]
    },
    { 
        icon: '🏢', 
        name: '办公楼', 
        nameEn: 'Office', 
        pos: [[3,3], [3,4], [4,3], [4,4]],
        description: '欢迎光临办公楼！这里是专业的办公场所。',
        items: [
            { icon: '💼', name: '会议室' },
            { icon: '🖥️', name: '办公区' },
            { icon: '☕', name: '茶水间' },
            { icon: '📊', name: '总经理室' }
        ]
    },
    { 
        icon: '🏨', 
        name: '酒店', 
        nameEn: 'Hotel', 
        pos: [[3,6], [3,7], [4,6], [4,7]],
        description: '欢迎入住酒店！这里提供舒适的住宿体验。',
        items: [
            { icon: '🛌', name: '客房' },
            { icon: '🍽️', name: '餐厅' },
            { icon: '🏊', name: '游泳池' },
            { icon: '🏋️', name: '健身房' }
        ]
    },
    { 
        icon: '🌳', 
        name: '公园', 
        nameEn: 'Park', 
        pos: [[6,0], [6,1], [7,0], [7,1]],
        description: '欢迎来到公园！这里是放松和享受自然的好地方。',
        items: [
            { icon: '🌺', name: '花园' },
            { icon: '⛲', name: '喷泉' },
            { icon: '🦺', name: '长椅' },
            { icon: '🏞️', name: '湖泊' }
        ]
    },
    { 
        icon: '🍔', 
        name: '餐厅', 
        nameEn: 'Restaurant', 
        pos: [[6,3], [6,4], [7,3], [7,4]],
        description: '欢迎光临餐厅！这里提供各种美味佳肴。',
        items: [
            { icon: '🍕', name: '主食区' },
            { icon: '🍰', name: '甘点区' },
            { icon: '🥤', name: '饮品区' },
            { icon: '🍽️', name: '就餐区' }
        ]
    },
    { 
        icon: '📚', 
        name: '图书馆', 
        nameEn: 'Library', 
        pos: [[6,6], [6,7], [7,6], [7,7]],
        description: '欢迎来到图书馆！这里有丰富的图书资源。',
        items: [
            { icon: '📖', name: '阅览室' },
            { icon: '💻', name: '电子阅览' },
            { icon: '🎓', name: '学习区' },
            { icon: '🧑‍🏫', name: '咨询台' }
        ]
    }
];

const BUILDINGS_HARD = [
    { icon: '🏫', name: '学校', nameEn: 'School', pos: [[0,0], [0,1], [1,0], [1,1]] },
    { icon: '🏪', name: '商店', nameEn: 'Shop', pos: [[0,3], [0,4], [1,3], [1,4]] },
    { icon: '🏛️', name: '博物馆', nameEn: 'Museum', pos: [[0,6], [0,7], [1,6], [1,7]] },
    { icon: '🏦', name: '银行', nameEn: 'Bank', pos: [[0,9], [0,10], [0,11], [1,9], [1,10], [1,11]] },
    { icon: '🏥', name: '医院', nameEn: 'Hospital', pos: [[3,0], [3,1], [4,0], [4,1]] },
    { icon: '🏢', name: '办公楼', nameEn: 'Office', pos: [[3,3], [3,4], [4,3], [4,4]] },
    { icon: '🏨', name: '酒店', nameEn: 'Hotel', pos: [[3,6], [3,7], [4,6], [4,7]] },
    { icon: '⛪', name: '教堂', nameEn: 'Church', pos: [[3,9], [3,10], [3,11], [4,9], [4,10], [4,11]] },
    { icon: '🌳', name: '公园', nameEn: 'Park', pos: [[6,0], [6,1], [7,0], [7,1]] },
    { icon: '🍔', name: '餐厅', nameEn: 'Restaurant', pos: [[6,3], [6,4], [7,3], [7,4]] },
    { icon: '📚', name: '图书馆', nameEn: 'Library', pos: [[6,6], [6,7], [7,6], [7,7]] },
    { icon: '🎭', name: '剧院', nameEn: 'Theater', pos: [[6,9], [6,10], [6,11], [7,9], [7,10], [7,11]] },
    { icon: '🏬', name: '购物中心', nameEn: 'Mall', pos: [[9,0], [9,1], [10,0], [10,1]] },
    { icon: '🏰', name: '城堡', nameEn: 'Castle', pos: [[9,3], [9,4], [10,3], [10,4]] },
    { icon: '🎪', name: '游乐场', nameEn: 'Amusement', pos: [[9,6], [9,7], [10,6], [10,7]] },
    { icon: '🏟️', name: '体育馆', nameEn: 'Stadium', pos: [[9,9], [9,10], [9,11], [10,9], [10,10], [10,11]] }
];

// 宝箱奖励系统
const TREASURE_REWARDS = [
    { id: 1, name: '免作业1次', icon: '📝', emoji: '✨' },
    { id: 2, name: '糖果1个', icon: '🍬', emoji: '🎀' },
    { id: 3, name: '一支笔', icon: '✏️', emoji: '🎨' }
];

const PRAISE_WORDS = [
    '你真棒！继续加油！🌟',
    '你是最聪明的孩子！💝',
    '太厉害了！你做得真好！🎉',
    '你是小天才！⭐',
    '真是太优秀了！继续努力！🏆',
    '你的表现超级棒！💖',
    '好孩子，你真行！🌈',
    '你太聪明了！👏'
];

// 游戏状态
class Game {
    constructor() {
        this.difficulty = 'easy'; // easy, hard
        this.mode = 'single'; // single, double, timed
        this.gridSize = 8;
        this.playerPos = { row: 6, col: 2 };
        this.playerDirection = DIRECTIONS.NORTH;
        this.currentDestination = null;
        this.score = 0;
        this.highScore = parseInt(localStorage.getItem('highScore') || '0');
        this.steps = 0;
        this.time = 0;
        this.timer = null;
        this.isGameStarted = false;
        this.isPaused = false;
        this.combo = 0;
        this.missions = [];
        this.currentMissionIndex = 0;
        
        // 宝箱抽奖系统
        this.initTreasureSystem();
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateHighScore();
        this.renderMap();
        this.setupAdminPanel();
    }

    initTreasureSystem() {
        // 初始化宝箱系统
        const today = new Date().toDateString();
        const savedData = localStorage.getItem('treasureData');
        
        if (savedData) {
            const data = JSON.parse(savedData);
            if (data.date === today) {
                // 同一天，使用保存的数据
                this.dailyRewardsGiven = data.rewardsGiven || 0;
                this.treasureRewards = data.rewards || [...TREASURE_REWARDS];
            } else {
                // 新的一天，重置
                this.resetDailyRewards();
            }
        } else {
            this.resetDailyRewards();
        }
    }

    resetDailyRewards() {
        this.dailyRewardsGiven = 0; // 已发放的奖励数量
        this.treasureRewards = [...TREASURE_REWARDS];
        this.saveTreasureData();
    }

    saveTreasureData() {
        const today = new Date().toDateString();
        const data = {
            date: today,
            rewardsGiven: this.dailyRewardsGiven,
            rewards: this.treasureRewards
        };
        localStorage.setItem('treasureData', JSON.stringify(data));
    }

    setupAdminPanel() {
        // 管理员配置按钮
        const adminBtn = document.getElementById('adminBtn');
        const adminPanel = document.getElementById('adminPanel');
        const adminPwdInput = document.getElementById('adminPassword');
        const adminLoginBtn = document.getElementById('adminLogin');
        const adminContent = document.getElementById('adminContent');
        const closeAdminBtn = document.getElementById('closeAdmin');
        const resetRewardsBtn = document.getElementById('resetRewards');
        const saveRewardsBtn = document.getElementById('saveRewards');

        adminBtn.addEventListener('click', () => {
            adminPanel.classList.add('active');
        });

        closeAdminBtn.addEventListener('click', () => {
            adminPanel.classList.remove('active');
            adminContent.style.display = 'none';
            adminPwdInput.value = '';
            document.querySelector('.admin-login').style.display = 'block';
        });

        adminLoginBtn.addEventListener('click', () => {
            if (adminPwdInput.value === '678678') {
                document.querySelector('.admin-login').style.display = 'none';
                adminContent.style.display = 'block';
                this.loadAdminRewards();
            } else {
                alert('密码错误！');
                adminPwdInput.value = '';
            }
        });

        resetRewardsBtn.addEventListener('click', () => {
            if (confirm('确定要重置今日奖励吗？')) {
                this.resetDailyRewards();
                this.loadAdminRewards();
                alert('奖励已重置！');
            }
        });

        saveRewardsBtn.addEventListener('click', () => {
            this.saveAdminRewards();
        });
    }

    loadAdminRewards() {
        const remainingRewards = 3 - this.dailyRewardsGiven;
        document.getElementById('rewardsLeftCount').textContent = remainingRewards;
        
        const rewardInputs = document.getElementById('rewardInputs');
        rewardInputs.innerHTML = '';
        
        this.treasureRewards.forEach((reward, index) => {
            const div = document.createElement('div');
            div.className = 'reward-input-item';
            div.innerHTML = `
                <label>奖励${index + 1}:</label>
                <input type="text" class="reward-icon" value="${reward.icon}" placeholder="图标" maxlength="2">
                <input type="text" class="reward-name" value="${reward.name}" placeholder="奖励名称">
            `;
            rewardInputs.appendChild(div);
        });
    }

    saveAdminRewards() {
        const items = document.querySelectorAll('.reward-input-item');
        items.forEach((item, index) => {
            const icon = item.querySelector('.reward-icon').value.trim();
            const name = item.querySelector('.reward-name').value.trim();
            if (icon && name) {
                this.treasureRewards[index].icon = icon;
                this.treasureRewards[index].name = name;
            }
        });
        this.saveTreasureData();
        alert('奖励配置已保存！');
    }

    setupEventListeners() {
        // 难度选择
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.changeDifficulty(e.target.dataset.difficulty);
            });
        });

        // 游戏模式选择
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (!this.isGameStarted) {
                    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');
                    this.mode = e.target.dataset.mode;
                    this.updateUIForMode();
                }
            });
        });

        // 控制按钮
        document.getElementById('btnTurnLeft').addEventListener('click', () => this.turnLeft());
        document.getElementById('btnTurnRight').addEventListener('click', () => this.turnRight());
        document.getElementById('btnGoStraight').addEventListener('click', () => this.goStraight());

        // 操作按钮
        document.getElementById('btnStart').addEventListener('click', () => this.startGame());
        document.getElementById('btnRestart').addEventListener('click', () => this.restartGame());
        document.getElementById('btnPause').addEventListener('click', () => this.togglePause());
        document.getElementById('btnHint').addEventListener('click', () => this.showHint());

        // 其他按钮
        document.getElementById('btnLeaderboard').addEventListener('click', () => {
            alert('排行榜功能开发中...');
        });
        document.getElementById('btnSettings').addEventListener('click', () => {
            // 打开管理员配置面板
            document.getElementById('adminPanel').classList.add('active');
        });

        // 建筑内部相关
        document.getElementById('closeInterior').addEventListener('click', () => this.closeBuilding());
        document.getElementById('btnExitBuilding').addEventListener('click', () => this.closeBuilding());

        // 宝箱相关
        document.getElementById('closeTreasure').addEventListener('click', () => this.closeTreasureBox());

        // 键盘控制
        document.addEventListener('keydown', (e) => {
            if (!this.isGameStarted || this.isPaused) return;
            
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    this.turnLeft();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    this.goStraight();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.turnRight();
                    break;
            }
        });
    }

    changeDifficulty(difficulty) {
        if (this.isGameStarted) return;
        
        this.difficulty = difficulty;
        this.gridSize = difficulty === 'easy' ? 8 : 12;
        
        // 更新UI
        const body = document.body;
        const badge = document.getElementById('difficultyBadge');
        const btnHint = document.getElementById('btnHint');
        
        if (difficulty === 'hard') {
            body.classList.add('hard-mode');
            badge.textContent = '🔥 Hard Mode 困难模式';
            badge.style.display = 'inline-block';
            btnHint.style.display = 'inline-block';
            
            // 更新提示文本
            document.getElementById('hintBox').innerHTML = `
                Hard Mode Challenge 困难模式挑战：
                
                <br>• One-way street restrictions 单行道限制
                <br>• Multiple missions challenge 多任务连续挑战
                <div class="keyboard-hints">
                    <span class="key">⬅️ Turn Left 左转</span>
                    <span class="key">⬆️ Go Straight 前进</span>
                    <span class="key">➡️ Turn Right 右转</span>
                </div>
            `;
        } else {
            body.classList.remove('hard-mode');
            badge.style.display = 'none';
            btnHint.style.display = 'none';
            
            // 恢复简单模式提示文本
            document.getElementById('hintBox').innerHTML = `
                Use direction buttons or keyboard arrow keys to control character movement, reach the destination to get points! 使用方向按钮或键盘方向键控制角色移动，到达目标地点获得分数！
                <div class="keyboard-hints">
                    <span class="key">⬅️ Turn Left 左转</span>
                    <span class="key">⬆️ Go Straight 前进</span>
                    <span class="key">➡️ Turn Right 右转</span>
                </div>
            `;
        }
        
        this.renderMap();
    }

    updateUIForMode() {
        const timeLabel = document.getElementById('timeLabel');
        if (this.mode === 'timed') {
            timeLabel.textContent = 'Time Left 剩余时间';
        } else {
            timeLabel.textContent = 'Time 时间';
        }
    }

    renderMap() {
        const mapGrid = document.getElementById('mapGrid');
        mapGrid.innerHTML = '';
        
        const buildings = this.difficulty === 'easy' ? BUILDINGS_EASY : BUILDINGS_HARD;
        const map = this.createMapLayout();
        
        for (let row = 0; row < this.gridSize; row++) {
            for (let col = 0; col < this.gridSize; col++) {
                const cell = document.createElement('div');
                cell.className = 'grid-cell';
                cell.dataset.row = row;
                cell.dataset.col = col;
                
                const cellType = map[row][col];
                
                if (cellType.type === 'building') {
                    cell.classList.add('building');
                    const building = buildings[cellType.buildingIndex];
                    const isMainCell = building.pos[0][0] === row && building.pos[0][1] === col;
                    
                    // 添加英文名称属性，用于悬停显示
                    cell.dataset.nameEn = building.nameEn;
                    
                    cell.innerHTML = `<span class="building-icon">${building.icon}</span>`;
                    if (isMainCell) {
                        cell.innerHTML += `<span class="building-label">${building.name}</span>`;
                    }
                } else if (cellType.type === 'road') {
                    cell.classList.add('road');
                    if (cellType.vertical) {
                        cell.classList.add('road-vertical');
                    }
                    if (cellType.intersection) {
                        cell.classList.add('road-intersection');
                    }
                    if (cellType.oneway) {
                        cell.classList.add('oneway');
                        if (cellType.onewayDir === 'up') cell.classList.add('oneway-up');
                        if (cellType.onewayDir === 'down') cell.classList.add('oneway-down');
                        if (cellType.onewayDir === 'left') cell.classList.add('oneway-left');
                    }
                    if (cellType.trafficLight) {
                        cell.innerHTML = this.createTrafficLight(cellType.trafficLight);
                    }
                } else if (cellType.type === 'obstacle') {
                    cell.classList.add('obstacle');
                    cell.innerHTML = '<span class="obstacle-icon">🚧</span>';
                }
                
                mapGrid.appendChild(cell);
            }
        }
        
        this.updatePlayerPosition();
    }

    createMapLayout() {
        const size = this.gridSize;
        const map = Array(size).fill(null).map(() => Array(size).fill({ type: 'empty' }));
        
        if (this.difficulty === 'easy') {
            return this.createEasyMap(map);
        } else {
            return this.createHardMap(map);
        }
    }

    createEasyMap(map) {
        const buildings = BUILDINGS_EASY;
        
        // 放置建筑物
        buildings.forEach((building, index) => {
            building.pos.forEach(([row, col]) => {
                map[row][col] = { type: 'building', buildingIndex: index };
            });
        });
        
        // 创建道路 - 第3行和第6行（横向）
        for (let col = 0; col < 8; col++) {
            map[2][col] = { type: 'road', vertical: false };
            map[5][col] = { type: 'road', vertical: false };
        }
        
        // 创建道路 - 第3列和第6列（纵向）
        for (let row = 0; row < 8; row++) {
            map[row][2] = { type: 'road', vertical: true };
            map[row][5] = { type: 'road', vertical: true };
        }
        
        // 创建路口
        map[2][2] = { type: 'road', intersection: true };
        map[2][5] = { type: 'road', intersection: true };
        map[5][2] = { type: 'road', intersection: true };
        map[5][5] = { type: 'road', intersection: true };
        
        return map;
    }

    createHardMap(map) {
        const buildings = BUILDINGS_HARD;
        
        // 放置建筑物
        buildings.forEach((building, index) => {
            building.pos.forEach(([row, col]) => {
                map[row][col] = { type: 'building', buildingIndex: index };
            });
        });
        
        // 创建道路 - 横向（第3, 6, 9, 12行）
        for (let col = 0; col < 12; col++) {
            map[2][col] = { type: 'road', vertical: false };
            map[5][col] = { type: 'road', vertical: false };
            map[8][col] = { type: 'road', vertical: false };
            map[11][col] = { type: 'road', vertical: false };
        }
        
        // 创建道路 - 纵向（第3, 6, 9列）
        for (let row = 0; row < 12; row++) {
            map[row][2] = { type: 'road', vertical: true };
            map[row][5] = { type: 'road', vertical: true };
            map[row][8] = { type: 'road', vertical: true };
        }
        
        // 添加单行道
        map[1][2] = { type: 'road', vertical: true, oneway: true, onewayDir: 'up' };
        map[3][2] = { type: 'road', vertical: true, oneway: true, onewayDir: 'up' };
        map[4][2] = { type: 'road', vertical: true, oneway: true, onewayDir: 'up' };
        
        map[7][5] = { type: 'road', vertical: true, oneway: true, onewayDir: 'down' };
        map[9][5] = { type: 'road', vertical: true, oneway: true, onewayDir: 'down' };
        map[10][5] = { type: 'road', vertical: true, oneway: true, onewayDir: 'down' };
        
        map[8][3] = { type: 'road', vertical: false, oneway: true };
        map[8][4] = { type: 'road', vertical: false, oneway: true };
        
        // 创建路口
        const intersections = [
            [2, 2], [2, 5], [2, 8],
            [5, 2], [5, 5], [5, 8],
            [8, 2], [8, 5], [8, 8],
            [11, 2], [11, 5], [11, 8]
        ];
        
        intersections.forEach(([row, col]) => {
            map[row][col] = { type: 'road', intersection: true };
        });
        
        // 添加障碍物
        map[4][5] = { type: 'obstacle' };
        map[5][4] = { type: 'obstacle' };
        
        return map;
    }

    createTrafficLight(position) {
        const colors = ['red', 'yellow', 'green'];
        const activeColor = colors[Math.floor(Math.random() * 3)];
        
        return `
            <div class="traffic-light ${position}">
                <div class="light ${activeColor === 'red' ? 'red' : ''}"></div>
                <div class="light ${activeColor === 'yellow' ? 'yellow' : ''}"></div>
                <div class="light ${activeColor === 'green' ? 'green' : ''}"></div>
            </div>
        `;
    }

    startGame() {
        this.isGameStarted = true;
        this.score = 0;
        this.steps = 0;
        this.time = this.mode === 'timed' ? 180 : 0; // 计时模式3分钟
        this.combo = 0;
        this.currentMissionIndex = 0;
        
        // 重置玩家位置
        this.playerPos = { row: 6, col: 2 };
        this.playerDirection = DIRECTIONS.NORTH;
        
        // 困难模式初始化任务
        if (this.difficulty === 'hard') {
            this.initMissions();
            document.getElementById('missionPanel').style.display = 'block';
            document.getElementById('comboStat').style.display = 'flex';
            document.getElementById('taskTitle').textContent = '当前任务';
        } else {
            document.getElementById('missionPanel').style.display = 'none';
            document.getElementById('comboStat').style.display = 'none';
            document.getElementById('taskTitle').textContent = '目标地点';
        }
        
        // 生成目标
        this.generateDestination();
        
        // 更新UI
        document.getElementById('btnStart').disabled = true;
        document.getElementById('btnRestart').disabled = false;
        document.getElementById('btnPause').disabled = false;
        document.getElementById('btnTurnLeft').disabled = false;
        document.getElementById('btnGoStraight').disabled = false;
        document.getElementById('btnTurnRight').disabled = false;
        
        this.updateStats();
        this.updatePlayerPosition();
        this.updateDirection();
        
        // 启动计时器
        this.startTimer();
    }

    initMissions() {
        const buildings = BUILDINGS_HARD;
        const missionBuildings = buildings.filter(b => 
            !['学校'].includes(b.name)
        ).sort(() => Math.random() - 0.5).slice(0, 5);
        
        this.missions = missionBuildings.map((b, i) => ({
            building: b,
            completed: false,
            index: i
        }));
        
        this.updateMissionList();
    }

    updateMissionList() {
        const list = document.getElementById('missionList');
        list.innerHTML = '';
        
        this.missions.forEach((mission, index) => {
            const item = document.createElement('div');
            item.className = 'mission-item';
            
            if (mission.completed) {
                item.classList.add('completed');
                item.textContent = `✅ ${index + 1}. 前往${mission.building.name} (已完成)`;
            } else if (index === this.currentMissionIndex) {
                item.classList.add('active');
                item.textContent = `🎯 ${index + 1}. 抵达${mission.building.name} (进行中)`;
            } else {
                item.textContent = `⏳ ${index + 1}. 前往${mission.building.name}`;
            }
            
            list.appendChild(item);
        });
        
        const completed = this.missions.filter(m => m.completed).length;
        document.getElementById('missionProgress').textContent = `(${completed}/${this.missions.length})`;
    }

    generateDestination() {
        const buildings = this.difficulty === 'easy' ? BUILDINGS_EASY : BUILDINGS_HARD;
        
        if (this.difficulty === 'hard' && this.missions.length > 0) {
            // 困难模式使用任务列表
            if (this.currentMissionIndex < this.missions.length) {
                this.currentDestination = this.missions[this.currentMissionIndex].building;
            }
        } else {
            // 简单模式随机选择
            let destination;
            do {
                destination = buildings[Math.floor(Math.random() * buildings.length)];
            } while (destination === this.currentDestination);
            
            this.currentDestination = destination;
        }
        
        // 选择一个边界格子作为目标点
        this.selectBorderCell();
        
        // 更新UI
        document.getElementById('destinationName').textContent = this.currentDestination.name;
        document.getElementById('destinationNameEn').textContent = this.currentDestination.nameEn;
        
        if (this.difficulty === 'hard') {
            const distance = this.calculateDistance();
            document.getElementById('destinationDistance').textContent = `📍 预计距离: ${distance}个街区`;
            document.getElementById('destinationDistance').style.display = 'block';
        }
        
        this.updateDestinationMarker();
    }

    selectBorderCell() {
        // 获取建筑的边界格子（靠近道路的格子）
        const borderCells = this.getBorderCells(this.currentDestination.pos);
        
        if (borderCells.length > 0) {
            // 随机选择一个边界格子
            const selectedCell = borderCells[Math.floor(Math.random() * borderCells.length)];
            this.currentDestination.targetPos = selectedCell;
        } else {
            // 如果没有边界格子，使用第一个格子
            this.currentDestination.targetPos = this.currentDestination.pos[0];
        }
    }

    getBorderCells(positions) {
        // 返回靠近道路的边界格子
        const borderCells = [];
        
        positions.forEach(([row, col]) => {
            // 检查四个方向是否有道路
            const directions = [
                [row - 1, col], // 上
                [row + 1, col], // 下
                [row, col - 1], // 左
                [row, col + 1]  // 右
            ];
            
            for (const [r, c] of directions) {
                // 检查是否在地图范围内
                if (r >= 0 && r < this.gridSize && c >= 0 && c < this.gridSize) {
                    const cell = document.querySelector(`[data-row="${r}"][data-col="${c}"]`);
                    if (cell && cell.classList.contains('road')) {
                        // 这个格子靠近道路，是边界格子
                        if (!borderCells.some(([br, bc]) => br === row && bc === col)) {
                            borderCells.push([row, col]);
                        }
                        break;
                    }
                }
            }
        });
        
        return borderCells;
    }

    calculateDistance() {
        const destPos = this.currentDestination.targetPos || this.currentDestination.pos[0];
        return Math.abs(this.playerPos.row - destPos[0]) + Math.abs(this.playerPos.col - destPos[1]);
    }

    updateDestinationMarker() {
        // 移除旧标记
        document.querySelectorAll('.destination-marker').forEach(m => m.remove());
        
        // 添加新标记（使用边界格子）
        const targetPos = this.currentDestination.targetPos || this.currentDestination.pos[0];
        const cell = document.querySelector(`[data-row="${targetPos[0]}"][data-col="${targetPos[1]}"]`);
        if (cell) {
            const marker = document.createElement('span');
            marker.className = 'destination-marker';
            marker.textContent = '🎯';
            cell.appendChild(marker);
        }
    }

    startTimer() {
        if (this.timer) clearInterval(this.timer);
        
        this.timer = setInterval(() => {
            if (this.isPaused) return;
            
            if (this.mode === 'timed') {
                this.time--;
                if (this.time <= 0) {
                    this.gameOver();
                    return;
                }
            } else {
                this.time++;
            }
            
            this.updateStats();
        }, 1000);
    }

    updateStats() {
        document.getElementById('currentScore').textContent = this.score;
        document.getElementById('steps').textContent = this.steps;
        
        const minutes = Math.floor(Math.abs(this.time) / 60);
        const seconds = Math.abs(this.time) % 60;
        document.getElementById('time').textContent = 
            `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        if (this.difficulty === 'hard') {
            document.getElementById('combo').textContent = `×${this.combo}`;
        }
    }

    updateHighScore() {
        document.getElementById('highScore').textContent = this.highScore;
    }

    updatePlayerPosition() {
        // 移除旧位置
        document.querySelectorAll('.player').forEach(p => p.remove());
        
        // 添加到新位置
        const cell = document.querySelector(
            `[data-row="${this.playerPos.row}"][data-col="${this.playerPos.col}"]`
        );
        
        if (cell) {
            const player = document.createElement('div');
            player.className = 'player';
            
            // 添加方向箭头
            const arrow = document.createElement('div');
            arrow.className = 'player-arrow';
            arrow.textContent = DIRECTION_ARROWS[this.playerDirection];
            
            // 添加人物图标
            const icon = document.createElement('div');
            icon.className = 'player-icon';
            icon.textContent = '🚶';
            
            player.appendChild(arrow);
            player.appendChild(icon);
            cell.appendChild(player);
        }
    }

    updateDirection() {
        const arrow = document.getElementById('directionArrow');
        const text = document.getElementById('directionText');
        
        arrow.textContent = DIRECTION_ARROWS[this.playerDirection];
        text.textContent = getDirectionText(this.playerDirection);
    }

    turnLeft() {
        if (!this.isGameStarted || this.isPaused) return;
        
        this.playerDirection = (this.playerDirection + 3) % 4;
        this.steps++;
        this.updateDirection();
        this.updatePlayerPosition();
        this.updateStats();
    }

    turnRight() {
        if (!this.isGameStarted || this.isPaused) return;
        
        this.playerDirection = (this.playerDirection + 1) % 4;
        this.steps++;
        this.updateDirection();
        this.updatePlayerPosition();
        this.updateStats();
    }

    goStraight() {
        if (!this.isGameStarted || this.isPaused) return;
        
        let newRow = this.playerPos.row;
        let newCol = this.playerPos.col;
        
        switch(this.playerDirection) {
            case DIRECTIONS.NORTH:
                newRow--;
                break;
            case DIRECTIONS.EAST:
                newCol++;
                break;
            case DIRECTIONS.SOUTH:
                newRow++;
                break;
            case DIRECTIONS.WEST:
                newCol--;
                break;
        }
        
        // 检查是否越界
        if (newRow < 0 || newRow >= this.gridSize || newCol < 0 || newCol >= this.gridSize) {
            this.showMessage('⚠️ Can\'t go out of bounds! 不能越界！', 'warning');
            return;
        }
        
        // 检查目标格子
        const cell = document.querySelector(`[data-row="${newRow}"][data-col="${newCol}"]`);
        if (!cell) return;
        
        // 检查是否是目标建筑的🎯格子（只有这个格子才能进入）
        const targetPos = this.currentDestination.targetPos || this.currentDestination.pos[0];
        const isDestinationCell = this.currentDestination && 
            targetPos[0] === newRow && 
            targetPos[1] === newCol;
        
        // 检查是否是道路或目标格子
        if (!cell.classList.contains('road') && !isDestinationCell) {
            this.showMessage('⚠️ Can\'t go through buildings or obstacles! 不能穿过建筑或障碍物！', 'warning');
            return;
        }
        
        // 检查是否是障碍物
        if (cell.classList.contains('obstacle')) {
            this.showMessage('⚠️ Construction ahead! 前方有施工障碍！', 'warning');
            return;
        }
        
        // 检查单行道
        if (cell.classList.contains('oneway')) {
            const canPass = this.checkOneway(cell, this.playerDirection);
            if (!canPass) {
                this.showMessage('⚠️ This is a one-way street, no wrong way! 这是单行道，不能逆行！', 'warning');
                return;
            }
        }
        
        // 移动成功
        this.playerPos.row = newRow;
        this.playerPos.col = newCol;
        this.steps++;
        
        this.updatePlayerPosition();
        this.updateStats();
        
        // 检查是否到达目标
        this.checkDestination();
    }

    checkOneway(cell, direction) {
        if (cell.classList.contains('oneway-up') && direction === DIRECTIONS.NORTH) return true;
        if (cell.classList.contains('oneway-down') && direction === DIRECTIONS.SOUTH) return true;
        if (cell.classList.contains('oneway-left') && direction === DIRECTIONS.WEST) return true;
        if (cell.classList.contains('oneway') && !cell.classList.contains('oneway-up') && 
            !cell.classList.contains('oneway-down') && !cell.classList.contains('oneway-left') && 
            direction === DIRECTIONS.EAST) return true;
        return false;
    }

    checkDestination() {
        // 只有到达带🎯标记的格子才算成功
        const targetPos = this.currentDestination.targetPos || this.currentDestination.pos[0];
        const isAtDestination = targetPos[0] === this.playerPos.row && 
                               targetPos[1] === this.playerPos.col;
        
        if (isAtDestination) {
            this.reachedDestination();
        }
    }

    reachedDestination() {
        // 计算得分
        const baseScore = this.difficulty === 'easy' ? 100 : 200;
        const stepBonus = Math.max(0, 50 - this.steps);
        const timeBonus = this.mode === 'timed' ? this.time : 0;
        const comboBonus = this.combo * 10;
        
        const earnedScore = baseScore + stepBonus + timeBonus + comboBonus;
        this.score += earnedScore;
        this.combo++;
        
        // 更新任务状态
        if (this.difficulty === 'hard' && this.currentMissionIndex < this.missions.length) {
            this.missions[this.currentMissionIndex].completed = true;
            this.updateMissionList();
            this.currentMissionIndex++;
            
            if (this.currentMissionIndex >= this.missions.length) {
                // 所有任务完成
                this.gameComplete();
                return;
            }
        }
        
        // 显示成功消息并进入建筑
        this.showSuccessMessageAndEnterBuilding(earnedScore, stepBonus, timeBonus, comboBonus);
    }

    showSuccessMessage(total, stepBonus, timeBonus, comboBonus) {
        const msg = document.getElementById('successMessage');
        const text = document.getElementById('successText');
        const stats = document.getElementById('successStats');
        
        text.textContent = `你成功到达${this.currentDestination.name}！`;
        stats.innerHTML = `
            获得 ${total} 分！<br>
            ${stepBonus > 0 ? `步数奖励: +${stepBonus} ` : ''}
            ${timeBonus > 0 ? `时间奖励: +${timeBonus} ` : ''}
            ${comboBonus > 0 ? `连击奖励: +${comboBonus}` : ''}
        `;
        
        msg.style.display = 'block';
        setTimeout(() => {
            msg.style.display = 'none';
        }, 2000);
    }

    showSuccessMessageAndEnterBuilding(total, stepBonus, timeBonus, comboBonus) {
        const msg = document.getElementById('successMessage');
        const text = document.getElementById('successText');
        const stats = document.getElementById('successStats');
        
        text.textContent = `🎉 You reached ${this.currentDestination.nameEn} ${this.currentDestination.name}!  你成功到达${this.currentDestination.name}！`;
        stats.innerHTML = `
            Earned 获得 ${total} Points 分！<br>
            ${stepBonus > 0 ? `Step Bonus 步数奖励: +${stepBonus} ` : ''}
            ${timeBonus > 0 ? `Time Bonus 时间奖励: +${timeBonus} ` : ''}
            ${comboBonus > 0 ? `Combo Bonus 连击奖励: +${comboBonus}` : ''}
        `;
        
        msg.style.display = 'block';
        
        // 1秒后显示宝箱
        setTimeout(() => {
            msg.style.display = 'none';
            this.showTreasureBox();
        }, 1500);
    }

    showTreasureBox() {
        const treasureBox = document.getElementById('treasureBox');
        const openTreasureBtn = document.getElementById('openTreasure');
        
        treasureBox.classList.add('active');
        
        // 重置宝箱动画
        const chest = document.querySelector('.treasure-chest');
        chest.classList.remove('open');
        
        openTreasureBtn.onclick = () => {
            this.openTreasure();
        };
    }

    openTreasure() {
        const chest = document.querySelector('.treasure-chest');
        const rewardDisplay = document.getElementById('rewardDisplay');
        const closeTreasureBtn = document.getElementById('closeTreasure');
        
        // 宝箱打开动画
        chest.classList.add('open');
        
        setTimeout(() => {
            let rewardHTML = '';
            
            // 检查当天已发放的奖励数量（总库存为3个）
            if (this.dailyRewardsGiven < 3) {
                // 还有奖励，随机选取一个
                const randomReward = this.treasureRewards[Math.floor(Math.random() * this.treasureRewards.length)];
                this.dailyRewardsGiven++;
                this.saveTreasureData();
                
                const remainingRewards = 3 - this.dailyRewardsGiven;
                
                rewardHTML = `
                    <div class="reward-item sparkle">
                        <div class="reward-emoji">🎉</div>
                        <div class="reward-icon">${randomReward.icon}</div>
                        <div class="reward-name">${randomReward.name}</div>
                        <div class="reward-congrats">恭喜获得奖励！</div>
                    </div>
                    <div class="rewards-left">🎁 今日还剩余 ${remainingRewards} 次机会</div>
                `;
            } else {
                // 奖励已经领完，只显示赞美
                const praise = PRAISE_WORDS[Math.floor(Math.random() * PRAISE_WORDS.length)];
                rewardHTML = `
                    <div class="reward-item praise">
                        <div class="reward-emoji">🌟</div>
                        <div class="praise-text">${praise}</div>
                        <div class="praise-note">今天的奖励已经领完啦，<br>明天再来吧！</div>
                    </div>
                `;
            }
            
            rewardDisplay.innerHTML = rewardHTML;
            rewardDisplay.style.display = 'block';
            closeTreasureBtn.style.display = 'block';
        }, 800);
    }

    closeTreasureBox() {
        const treasureBox = document.getElementById('treasureBox');
        treasureBox.classList.remove('active');
        
        // 重置步数
        this.steps = 0;
        
        // 生成新目标
        setTimeout(() => {
            this.generateDestination();
            this.updateStats();
        }, 500);
    }

    enterBuilding() {
        // 暂停游戏
        const wasPaused = this.isPaused;
        this.isPaused = true;
        
        // 显示建筑内部
        const interior = document.getElementById('buildingInterior');
        interior.classList.add('active');
        
        // 填充建筑信息
        document.getElementById('interiorIcon').textContent = this.currentDestination.icon;
        document.getElementById('interiorName').textContent = this.currentDestination.name;
        document.getElementById('interiorNameEn').textContent = this.currentDestination.nameEn;
        document.getElementById('interiorDescription').textContent = 
            this.currentDestination.description || `欢迎来到${this.currentDestination.name}！`;
        
        // 生成内部物品
        const itemsContainer = document.getElementById('interiorItems');
        itemsContainer.innerHTML = '';
        
        if (this.currentDestination.items && this.currentDestination.items.length > 0) {
            this.currentDestination.items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'interior-item';
                itemDiv.innerHTML = `
                    <div class="interior-item-icon">${item.icon}</div>
                    <div class="interior-item-name">${item.name}</div>
                `;
                itemsContainer.appendChild(itemDiv);
            });
        }
        
        this.wasPausedBeforeBuilding = wasPaused;
    }

    closeBuilding() {
        const interior = document.getElementById('buildingInterior');
        interior.classList.remove('active');
        
        // 恢复游戏状态
        if (!this.wasPausedBeforeBuilding) {
            this.isPaused = false;
        }
        
        // 重置步数
        this.steps = 0;
        
        // 生成新目标
        setTimeout(() => {
            this.generateDestination();
            this.updateStats();
        }, 500);
    }

    showMessage(message, type = 'info') {
        // 创建或获取toast元素
        let toast = document.getElementById('gameToast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'gameToast';
            toast.className = 'game-toast';
            document.body.appendChild(toast);
        }
        
        // 设置消息内容和类型
        toast.textContent = message;
        toast.className = 'game-toast ' + type;
        toast.classList.add('show');
        
        // 2秒后隐藏
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }

    gameComplete() {
        clearInterval(this.timer);
        
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem('highScore', this.highScore.toString());
            this.updateHighScore();
        }
        
        const msg = document.getElementById('successMessage');
        const text = document.getElementById('successText');
        const stats = document.getElementById('successStats');
        
        text.textContent = '🎊 恭喜！你完成了所有任务！';
        stats.innerHTML = `
            最终得分: ${this.score} 分<br>
            总用时: ${Math.floor(this.time / 60)}:${(this.time % 60).toString().padStart(2, '0')}<br>
            ${this.score > this.highScore ? '🏆 新纪录！' : ''}
        `;
        
        msg.style.display = 'block';
        
        this.isGameStarted = false;
        document.getElementById('btnStart').disabled = false;
        document.getElementById('btnRestart').disabled = true;
        document.getElementById('btnPause').disabled = true;
    }

    gameOver() {
        clearInterval(this.timer);
        alert('⏰ 时间到！游戏结束！\n最终得分: ' + this.score);
        this.restartGame();
    }

    restartGame() {
        clearInterval(this.timer);
        this.isGameStarted = false;
        this.isPaused = false;
        
        document.getElementById('btnStart').disabled = false;
        document.getElementById('btnRestart').disabled = true;
        document.getElementById('btnPause').disabled = true;
        document.getElementById('btnPause').textContent = '⏸️ 暂停';
        document.getElementById('btnTurnLeft').disabled = true;
        document.getElementById('btnGoStraight').disabled = true;
        document.getElementById('btnTurnRight').disabled = true;
        
        this.playerPos = { row: 6, col: 2 };
        this.playerDirection = DIRECTIONS.NORTH;
        this.currentDestination = null;
        this.score = 0;
        this.steps = 0;
        this.time = 0;
        this.combo = 0;
        this.missions = [];
        this.currentMissionIndex = 0;
        
        document.querySelectorAll('.destination-marker').forEach(m => m.remove());
        
        this.updateStats();
        this.updatePlayerPosition();
        this.updateDirection();
        
        if (this.difficulty === 'hard') {
            document.getElementById('missionList').innerHTML = '';
            document.getElementById('missionProgress').textContent = '(0/5)';
        }
    }

    togglePause() {
        if (!this.isGameStarted) return;
        
        this.isPaused = !this.isPaused;
        const btn = document.getElementById('btnPause');
        
        if (this.isPaused) {
            btn.textContent = '▶️ 继续';
            document.getElementById('btnTurnLeft').disabled = true;
            document.getElementById('btnGoStraight').disabled = true;
            document.getElementById('btnTurnRight').disabled = true;
        } else {
            btn.textContent = '⏸️ 暂停';
            document.getElementById('btnTurnLeft').disabled = false;
            document.getElementById('btnGoStraight').disabled = false;
            document.getElementById('btnTurnRight').disabled = false;
        }
    }

    showHint() {
        if (!this.isGameStarted || !this.currentDestination) return;
        
        const destPos = this.currentDestination.targetPos || this.currentDestination.pos[0];
        const rowDiff = destPos[0] - this.playerPos.row;
        const colDiff = destPos[1] - this.playerPos.col;
        
        let hint = '提示：';
        if (Math.abs(rowDiff) > Math.abs(colDiff)) {
            hint += rowDiff > 0 ? '目标在南方 ⬇️' : '目标在北方 ⬆️';
        } else {
            hint += colDiff > 0 ? '目标在东方 ➡️' : '目标在西方 ⬅️';
        }
        
        alert(hint);
    }
}

// 初始化游戏
const game = new Game();
