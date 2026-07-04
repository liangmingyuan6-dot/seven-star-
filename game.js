// ==================== 太阳系七大行星 ====================
// 按距离太阳由近到远排列：水星、金星、火星、木星、土星、天王星、海王星
// (地球是母星，所以不包含在内)

// 怪物名称前缀库（必须在PLANETS之前，因为PLANETS初始化时会调用generateMonsters）
const MONSTER_PREFIXES = ['陨石','环形山','岩石','铁核','极温','辐射','坑洞','晨星','灰土','裂谷',
  '熔岩','暗影','晶石','风暴','炎狱','冰霜','毒刺','幽灵','巨齿','触手','酸液','窒息','电击','重锤',
  '钢甲','角斗','利爪','铁翼','深渊','狂暴','猩红','漆黑','钢铁','炽热','寒冰','雷电','岩壳','尖刺',
  '蛇形','獠牙','角蟒','巨钳','灼烧','碎裂','腐化','血牙','暗礁','漩涡','虚空','白矮','脉冲',
  '极光','日冕','彗核','陨铁','黑金','磁暴','烈焰','寒髓','毒瘴','幻影','噩梦','狂怒','铁壁','邪眼',
  '蛮荒','荒芜','骨海','龙脊','霜语','雷霆','暴风','熔核','蚀月','噬天','碎星','裂空','震地','破军',
  '玄冰','炎龙','凛冬','暗月','血月','星陨','天罚','灭世','荒古','末渊'];
const MONSTER_SUFFIXES = ['虫','怪','兽','灵','魔','妖','蜥','守卫','战士','猎手','毁灭者','吞噬者',
  '领主','骑士','勇士','哨兵','先锋','劫掠者','撕裂者'];

const PLANETS = [
  {
    id: 1,
    name: '水星',
    enName: 'Mercury',
    icon: '☿',
    color: '#b0b0b0',
    bgColor: '#2a2a2a',
    skyTop: '#1a1a2e',
    skyBottom: '#3a2a2a',
    description: '太阳系最内侧、最小的行星，表面布满陨石坑',
    // 怪物外观类型
    shapeType: 'rock',     // 岩石块状
    // 攻击模式
    attackMode: 'single_shot',  // 单发子弹
    bulletColor: '#b0b0b0',
    bulletSpeed: 8,
    groundFeatures: ['craters', 'rocks'],
    monsters: generateMonsters(1, 50, 14, 5, 10)
  },
  {
    id: 2,
    name: '金星',
    enName: 'Venus',
    icon: '♀',
    color: '#e8cda0',
    bgColor: '#3d2a1a',
    skyTop: '#2a1a0a',
    skyBottom: '#4d2a1a',
    description: '最亮的行星，被浓厚的硫酸云层包裹',
    shapeType: 'cloud',    // 云雾状
    attackMode: 'poison_spray',  // 毒雾散射
    bulletColor: '#c9e84e',
    bulletSpeed: 7.5,
    groundFeatures: ['clouds', 'acid_pools'],
    monsters: generateMonsters(2, 75, 20, 6, 30)
  },
  {
    id: 3,
    name: '火星',
    enName: 'Mars',
    icon: '♂',
    color: '#e0553d',
    bgColor: '#3a1a10',
    skyTop: '#2a0a05',
    skyBottom: '#5a2010',
    description: '红色星球，拥有太阳系最高的火山',
    shapeType: 'fire',     // 火焰状
    attackMode: 'fire_ball',    // 火球
    bulletColor: '#ff6633',
    bulletSpeed: 8.5,
    groundFeatures: ['volcano', 'lava_cracks'],
    monsters: generateMonsters(3, 100, 26, 9, 60)
  },
  {
    id: 4,
    name: '木星',
    enName: 'Jupiter',
    icon: '♃',
    color: '#d4a574',
    bgColor: '#2a1a0a',
    skyTop: '#1a0a05',
    skyBottom: '#3a2010',
    description: '太阳系最大的行星，拥有大红斑风暴',
    shapeType: 'storm',    // 风暴漩涡状
    attackMode: 'lightning',    // 闪电链
    bulletColor: '#ffd700',
    bulletSpeed: 7,
    groundFeatures: ['swirl', 'storm_bands'],
    monsters: generateMonsters(4, 130, 32, 13, 100)
  },
  {
    id: 5,
    name: '土星',
    enName: 'Saturn',
    icon: '♄',
    color: '#f4d58d',
    bgColor: '#2a2010',
    skyTop: '#1a1005',
    skyBottom: '#3a2a15',
    description: '拥有壮观环系统的气态巨行星',
    shapeType: 'ring',     // 环形
    attackMode: 'ring_blade',   // 环形飞刃
    bulletColor: '#f4d58d',
    bulletSpeed: 9,
    groundFeatures: ['rings', 'ice_chunks'],
    monsters: generateMonsters(5, 160, 40, 16, 140)
  },
  {
    id: 6,
    name: '天王星',
    enName: 'Uranus',
    icon: '♅',
    color: '#7ec8e3',
    bgColor: '#1a2a3a',
    skyTop: '#0a1a2a',
    skyBottom: '#2a3a4a',
    description: '侧躺旋转的冰巨星，呈现淡青色',
    shapeType: 'crystal',  // 冰晶状
    attackMode: 'ice_shard',    // 冰锥散射
    bulletColor: '#7ec8e3',
    bulletSpeed: 7.5,
    groundFeatures: ['ice_crystals', 'methane_snow'],
    monsters: generateMonsters(6, 200, 48, 20, 200)
  },
  {
    id: 7,
    name: '海王星',
    enName: 'Neptune',
    icon: '♆',
    color: '#4169e1',
    bgColor: '#0a1a3a',
    skyTop: '#050a1a',
    skyBottom: '#0a1a4a',
    description: '太阳系最远的行星，风暴最强的冰巨星',
    shapeType: 'dark_vortex',  // 暗旋涡状
    attackMode: 'dark_blast',   // 暗能爆发
    bulletColor: '#4169e1',
    bulletSpeed: 8.5,
    groundFeatures: ['storm_vortex', 'dark_energy'],
    monsters: generateMonsters(7, 260, 60, 25, 300)
  }
];

// 最终Boss - 太阳守护者
const FINAL_BOSS = {
  name: '太阳守护者',
  enName: 'Solar Guardian',
  icon: '☀️',
  hp: 1200,
  atk: 100,
  def: 40,
  gold: 500,
  isBoss: true,
  isFinalBoss: true
};

// ==================== 怪物生成 - 每星球99普通怪+1Boss ====================

function generateMonsterName(planetId, index) {
  // 每星球用不同的起始偏移，生成不同名字
  const prefixIdx = (index * 7 + planetId * 13) % MONSTER_PREFIXES.length;
  const suffixIdx = (index * 5 + planetId * 11) % MONSTER_SUFFIXES.length;
  return MONSTER_PREFIXES[prefixIdx] + MONSTER_SUFFIXES[suffixIdx];
}

function generateMonsters(planetId, baseHp, baseAtk, baseDef, totalMonsters) {
  totalMonsters = totalMonsters || 100;
  const monsters = [];
  const bossName = getBossNames(planetId);
  const bossGold = planetId * 9; // Boss金币按星球递增

  for (let i = 1; i <= totalMonsters; i++) {
    const isBoss = (i === totalMonsters);
    // 普通怪难度渐进：从0.7倍到3.5倍（按总关数等比缩放）
    const multiplier = isBoss ? 5.5 : (0.7 + (i / totalMonsters) * 2.8);

    monsters.push({
      name: isBoss ? bossName : generateMonsterName(planetId, i),
      hp: Math.floor(baseHp * multiplier),
      maxHp: Math.floor(baseHp * multiplier),
      atk: Math.floor(baseAtk * multiplier),
      def: Math.floor(baseDef * multiplier),
      gold: isBoss ? bossGold : 3, // 普通怪固定3金币，Boss按星球递增
      isBoss: isBoss,
      isFinalBoss: false
    });
  }
  return monsters;
}

function getBossNames(planetId) {
  const names = {
    1: '水星霸主',
    2: '金星霸主',
    3: '火星霸主',
    4: '木星霸主',
    5: '土星霸主',
    6: '天王霸主',
    7: '海王霸主'
  };
  return names[planetId] || 'Boss';
}

// ==================== 试炼塔系统 ====================

const TRIAL_TOWER = {
  low: {
    id: 'trial_low',
    name: '低级试炼塔',
    icon: '🏯',
    color: '#7bed9f',
    totalMonsters: 10,
    baseHp: 55, baseAtk: 15, baseDef: 5,
    bossGold: 25,
    planetConfig: {
      id: 99, name: '低级试炼塔', enName: 'Trial Tower - Low', icon: '🏯',
      color: '#7bed9f', bgColor: '#1a2a1a', skyTop: '#0a1a0a', skyBottom: '#2a3a2a',
      description: '初级试炼，10层挑战',
      shapeType: 'rock', attackMode: 'single_shot', bulletColor: '#7bed9f', bulletSpeed: 7,
      groundFeatures: ['craters', 'rocks']
    }
  },
  mid: {
    id: 'trial_mid',
    name: '中级试炼塔',
    icon: '🏯',
    color: '#ffa502',
    totalMonsters: 30,
    baseHp: 180, baseAtk: 48, baseDef: 15,
    bossGold: 60,
    planetConfig: {
      id: 98, name: '中级试炼塔', enName: 'Trial Tower - Mid', icon: '🏯',
      color: '#ffa502', bgColor: '#2a1a0a', skyTop: '#1a0a05', skyBottom: '#3a2010',
      description: '中级试炼，30层挑战',
      shapeType: 'fire', attackMode: 'fire_ball', bulletColor: '#ffa502', bulletSpeed: 8,
      groundFeatures: ['volcano', 'lava_cracks']
    }
  },
  high: {
    id: 'trial_high',
    name: '高级试炼塔',
    icon: '🏯',
    color: '#ff4757',
    totalMonsters: 60,
    baseHp: 220, baseAtk: 60, baseDef: 22,
    bossGold: 100,
    planetConfig: {
      id: 97, name: '高级试炼塔', enName: 'Trial Tower - High', icon: '🏯',
      color: '#ff4757', bgColor: '#2a0a0a', skyTop: '#1a0505', skyBottom: '#3a1010',
      description: '高级试炼，60层挑战',
      shapeType: 'dark_vortex', attackMode: 'dark_blast', bulletColor: '#ff4757', bulletSpeed: 8.5,
      groundFeatures: ['storm_vortex', 'dark_energy']
    }
  }
};

function generateTrialMonsters(tier) {
  const cfg = TRIAL_TOWER[tier];
  const monsters = [];
  const bossName = `${cfg.name}守护者`;
  for (let i = 1; i <= cfg.totalMonsters; i++) {
    const isBoss = (i === cfg.totalMonsters);
    const multiplier = isBoss ? 5.5 : (0.6 + (i / cfg.totalMonsters) * 1.9);
    monsters.push({
      name: isBoss ? bossName : generateMonsterName(100 + ['low','mid','high'].indexOf(tier) * 10, i),
      hp: Math.floor(cfg.baseHp * multiplier),
      maxHp: Math.floor(cfg.baseHp * multiplier),
      atk: Math.floor(cfg.baseAtk * multiplier),
      def: Math.floor(cfg.baseDef * multiplier),
      gold: isBoss ? cfg.bossGold : 3,
      isBoss, isFinalBoss: false
    });
  }
  return monsters;
}

// ==================== PK竞技场系统 ====================

const PK_ARENA = {
  novice: {
    id: 'pk_novice',
    name: '新手PK',
    icon: '⚔️',
    color: '#7bed9f',
    totalLevels: 10,
    baseHp: 70, baseAtk: 18, baseDef: 7,
    winGold: 12,
    titles: [
      '见习武者', '初出茅庐', '新星战士', '铁血勇士', '荣耀斗士',
      '青铜剑客', '白银猎手', '黄金骑士', '钻石战神', '王者之刃'
    ],
    planetConfig: {
      id: 96, name: '新手竞技场', enName: 'Novice Arena', icon: '⚔️',
      color: '#7bed9f', bgColor: '#1a2a1a', skyTop: '#0a1a0a', skyBottom: '#2a3a2a',
      description: '新手PK竞技场，10级挑战',
      shapeType: 'rock', attackMode: 'single_shot', bulletColor: '#7bed9f', bulletSpeed: 7,
      groundFeatures: ['craters', 'rocks']
    }
  },
  expert: {
    id: 'pk_expert',
    name: '高手PK',
    icon: '🗡️',
    color: '#ff6348',
    totalLevels: 30,
    baseHp: 140, baseAtk: 38, baseDef: 14,
    winGold: 35,
    titles: [
      '青铜I·初窥门径','青铜II·锋芒初露','青铜III·小有成就','青铜IV·百战先锋','青铜V·钢躯铁骨',
      '青铜VI·剑指苍穹','青铜VII·无畏战士','青铜VIII·破风战将','青铜IX·浴血战魂','青铜王者·至尊',
      '白银I·银翼猎手','白银II·风暴利刃','白银III·雷霆之怒','白银IV·冰霜领主','白银V·烈焰战神',
      '白银VI·暗影刺客','白银VII·圣光骑士','白银VIII·星辰守护','白银IX·月影战将','白银王者·至尊',
      '钻石I·龙魂战士','钻石II·天启骑士','钻石III·破晓战神','钻石IV·虚空行者','钻石V·混沌主宰',
      '钻石VI·永恒战魂','钻石VII·灭世霸主','钻石VIII·苍穹至尊','钻石IX·星域大帝','钻石王者·万象归一'
    ],
    planetConfig: {
      id: 95, name: '高手竞技场', enName: 'Expert Arena', icon: '🗡️',
      color: '#ff6348', bgColor: '#2a0a0a', skyTop: '#1a0505', skyBottom: '#3a1010',
      description: '高手PK竞技场，30级挑战',
      shapeType: 'dark_vortex', attackMode: 'dark_blast', bulletColor: '#ff6348', bulletSpeed: 8.5,
      groundFeatures: ['storm_vortex', 'dark_energy']
    }
  }
};

function generatePKOpponents(tier) {
  const cfg = PK_ARENA[tier];
  const opponents = [];
  for (let i = 1; i <= cfg.totalLevels; i++) {
    const multiplier = 0.7 + (i / cfg.totalLevels) * 1.6;
    const title = cfg.titles[i - 1];
    opponents.push({
      name: `${title}·${generateMonsterName(200 + ['novice','expert'].indexOf(tier) * 10, i)}`,
      title: title,
      hp: Math.floor(cfg.baseHp * multiplier),
      maxHp: Math.floor(cfg.baseHp * multiplier),
      atk: Math.floor(cfg.baseAtk * multiplier),
      def: Math.floor(cfg.baseDef * multiplier),
      gold: cfg.winGold + Math.floor(i * 2),
      isBoss: false, isFinalBoss: false
    });
  }
  return opponents;
}

function openPKArena() {
  showScreen('pk-screen');
  renderPKArena();
  updateHeaderUI();
}

function closePKArena() {
  showScreen('planet-screen');
  renderPlanets();
  updateHeaderUI();
}

function renderPKArena() {
  const grid = document.getElementById('pk-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const tiers = [
    { key: 'novice', cfg: PK_ARENA.novice, desc: '适合新手对练', diff: '简单', icon: '⚔️' },
    { key: 'expert', cfg: PK_ARENA.expert, desc: '需要强大实力', diff: '困难', icon: '🗡️' }
  ];
  tiers.forEach(t => {
    const progress = gameState._pkProgress[t.key] || 0;
    const maxLevel = t.cfg.totalLevels;
    const card = document.createElement('div');
    card.className = 'pk-card';
    card.style.borderColor = t.cfg.color;
    card.innerHTML = `
      <span class="pk-icon" style="color:${t.cfg.color}; font-size:3rem;">${t.icon}</span>
      <div class="pk-name" style="color:${t.cfg.color}">${t.cfg.name}</div>
      <div class="pk-detail">${t.desc}</div>
      <div class="pk-info">🎯 ${maxLevel}级段位 · 难度: ${t.diff}</div>
      <div class="pk-info" style="margin-top:4px;">🏅 称号: ${t.cfg.titles[0]} ~ ${t.cfg.titles[maxLevel-1]}</div>
      <div class="pk-progress-bar"><div class="pk-progress-fill" style="width:${(progress / maxLevel * 100)}%; background:${t.cfg.color};"></div></div>
      <div class="pk-progress-text">进度: ${progress}/${maxLevel}</div>
    `;
    card.onclick = () => startPK(t.key);
    grid.appendChild(card);
  });
}

function startPK(tier) {
  const cfg = PK_ARENA[tier];
  const progress = gameState._pkProgress[tier] || 0;
  gameState._inPK = true;
  gameState._pkTier = tier;
  gameState._pkOpponents = generatePKOpponents(tier);
  gameState.currentMonsterIndex = progress; // 从上次进度继续

  const opponent = gameState._pkOpponents[gameState.currentMonsterIndex];
  gameState.inBattle = true;
  gameState.currentEnemy = { ...opponent };
  gameState.currentEnemy.maxHp = opponent.hp;

  applyWeaponStats();
  initBattleCanvasForPK(cfg.planetConfig, opponent, cfg.totalLevels);
}

function initBattleCanvasForPK(planet, opponent, totalLevels) {
  showScreen('battle-screen');

  const canvas = document.getElementById('battle-canvas');
  gameState.canvas = canvas;
  gameState.ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 60;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  gameState.player.x = canvas.width * 0.2;
  gameState.player.y = canvas.height * 0.6;
  gameState.player.width = 50;
  gameState.player.height = 50;

  const enemy = gameState.currentEnemy;
  // NaN防护：如果hp异常则从maxHp修复
  if (isNaN(enemy.hp) || enemy.hp <= 0) enemy.hp = enemy.maxHp || opponent.hp || 100;
  enemy.x = canvas.width * 0.7;
  enemy.y = canvas.height * 0.5;
  enemy.width = 50;
  enemy.height = 50;

  enemy._attackTimer = 18 + Math.floor(Math.random() * 12);
  enemy._attackInterval = 40 + Math.floor(Math.random() * 20);
  enemy._isCharging = false;
  enemy._chargeTimer = 0;
  enemy._chargeDuration = 10;

  gameState.player.cannonAngle = 0;
  gameState.keys = {};
  gameState.bullets = [];
  gameState.enemyBullets = [];
  gameState.particles = [];
  gameState.effects = [];
  gameState.shakeAmount = 0;
  gameState.paused = false;
  gameState._fireInterval = 0;
  gameState._isFiring = false;

  document.removeEventListener('keydown', handleKeyDown);
  document.removeEventListener('keyup', handleKeyUp);
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);

  if (gameState._clickHandler) document.removeEventListener('mousedown', gameState._clickHandler);
  if (gameState._upHandler) document.removeEventListener('mouseup', gameState._upHandler);
  if (gameState._moveHandler) document.removeEventListener('mousemove', gameState._moveHandler);

  const handleMouseDown = (e) => {
    if (e.button === 0) {
      e.preventDefault();
      if (gameState.paused) return;
      gameState._isFiring = true;
      playerAttack();
      gameState._fireInterval = setInterval(() => {
        if (!gameState._isFiring) { clearInterval(gameState._fireInterval); return; }
        playerAttack();
      }, gameState.player.fireInterval);
    }
  };
  const handleMouseUp = (e) => {
    if (e.button === 0) { stopFiring(); }
  };
  gameState._clickHandler = handleMouseDown;
  gameState._upHandler = handleMouseUp;
  document.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mouseup', handleMouseUp);

  const handleMouseMove = (e) => {
    if (!gameState.inBattle) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = gameState.player.x + gameState.player.width / 2;
    const centerY = gameState.player.y + gameState.player.height / 2;
    gameState.player.cannonAngle = Math.atan2(mouseY - centerY, mouseX - centerX);
  };
  gameState._moveHandler = handleMouseMove;
  document.addEventListener('mousemove', handleMouseMove);

  gameState._trialPlanetConfig = null;
  gameState._pkPlanetConfig = planet;
  gameState._pkTotalLevels = totalLevels;

  document.getElementById('battle-planet').textContent = `${planet.icon} ${planet.name}`;
  document.getElementById('battle-stage').textContent = `第 ${gameState.currentMonsterIndex + 1}/${totalLevels} 场 · ${opponent.title || ''}`;
  document.getElementById('battle-ult').textContent = '就绪';
  document.getElementById('battle-ult').style.color = '#2ecc71';
  updateSkillCDs();

  document.getElementById('battle-log').innerHTML = '';
  addBattleLog(`⚔️ 进入${PK_ARENA[gameState._pkTier].name}！`, 'system');
  addBattleLog(`${opponent.name} 前来应战！`, 'system');

  renderBattleWeapons();
  gameState.animFrame = requestAnimationFrame(gameLoop);
}

function drawPKGround(ctx, w, h, groundY, planet, time) {
  // 地面线
  ctx.strokeStyle = planet.color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, groundY);
  ctx.lineTo(w, groundY);
  ctx.stroke();

  // PK擂台地面纹理 - 八角形风格
  ctx.strokeStyle = `rgba(255,255,255,0.08)`;
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 100) {
    for (let y = groundY; y < h; y += 60) {
      ctx.strokeRect(x + 10, y + 10, 80, 40);
    }
  }

  // 擂台边缘火焰柱
  for (let i = 0; i < 5; i++) {
    const px = w * 0.1 + i * w * 0.2;
    const py = groundY;
    ctx.strokeStyle = planet.color;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(px, py - 80);
    ctx.stroke();

    // 火焰顶部效果
    ctx.fillStyle = planet.color;
    ctx.beginPath();
    ctx.arc(px, py - 80, 6 + Math.sin(time * 4 + i) * 2, 0, Math.PI * 2);
    ctx.fill();

    const glow = ctx.createRadialGradient(px, py - 80, 2, px, py - 80, 20);
    glow.addColorStop(0, planet.color);
    glow.addColorStop(0.5, 'rgba(255,100,0,0.3)');
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(px, py - 80, 20 + Math.sin(time * 3 + i * 1.5) * 4, 0, Math.PI * 2);
    ctx.fill();
  }

  // 中央PK字样
  ctx.fillStyle = `rgba(255,255,255,0.06)`;
  ctx.font = 'bold 60px "Microsoft YaHei"';
  ctx.textAlign = 'center';
  ctx.fillText('PK', w / 2, groundY + 60);
}

function openTrialTower() {
  showScreen('trial-screen');
  renderTrialTower();
  updateHeaderUI();
}

function closeTrialTower() {
  showScreen('planet-screen');
  renderPlanets();
  updateHeaderUI();
}

function renderTrialTower() {
  const grid = document.getElementById('trial-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const tiers = [
    { key: 'low', cfg: TRIAL_TOWER.low, desc: '适合新手宇航员', diff: '简单' },
    { key: 'mid', cfg: TRIAL_TOWER.mid, desc: '需要一定实力', diff: '中等' },
    { key: 'high', cfg: TRIAL_TOWER.high, desc: '只为最强勇士', diff: '困难' }
  ];
  tiers.forEach(t => {
    const card = document.createElement('div');
    card.className = 'trial-card';
    card.style.borderColor = t.cfg.color;
    card.innerHTML = `
      <span class="trial-icon" style="color:${t.cfg.color}; font-size:3rem;">${t.cfg.icon}</span>
      <div class="trial-name" style="color:${t.cfg.color}">${t.cfg.name}</div>
      <div class="trial-detail">${t.desc}</div>
      <div class="trial-info">🎯 ${t.cfg.totalMonsters}层 · 难度: ${t.diff}</div>
      <div class="trial-reward">💰 Boss: ${t.cfg.bossGold}金币</div>
    `;
    card.onclick = () => startTrial(t.key);
    grid.appendChild(card);
  });
}

function startTrial(tier) {
  const cfg = TRIAL_TOWER[tier];
  gameState._inTrial = true;
  gameState._trialTier = tier;
  gameState._trialMonsters = generateTrialMonsters(tier);
  gameState.currentMonsterIndex = 0;

  const monster = gameState._trialMonsters[0];
  gameState.inBattle = true;
  gameState.currentEnemy = { ...monster };
  gameState.currentEnemy.maxHp = monster.hp;

  applyWeaponStats();
  initBattleCanvasForTrial(cfg.planetConfig, monster, cfg.totalMonsters);
}

function initBattleCanvasForTrial(planet, monster, totalMonsters) {
  showScreen('battle-screen');

  const canvas = document.getElementById('battle-canvas');
  gameState.canvas = canvas;
  gameState.ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 60;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  gameState.player.x = canvas.width * 0.2;
  gameState.player.y = canvas.height * 0.6;
  gameState.player.width = 50;
  gameState.player.height = 50;

  const enemy = gameState.currentEnemy;
  // NaN防护：如果hp异常则从maxHp修复
  if (isNaN(enemy.hp) || enemy.hp <= 0) enemy.hp = enemy.maxHp || monster.hp || 100;
  enemy.x = canvas.width * 0.7;
  enemy.y = canvas.height * 0.5;
  enemy.width = enemy.isBoss ? 70 : 50;
  enemy.height = enemy.isBoss ? 70 : 50;

  enemy._attackTimer = 18 + Math.floor(Math.random() * 12);
  enemy._attackInterval = enemy.isBoss ? 35 : (40 + Math.floor(Math.random() * 20));
  enemy._isCharging = false;
  enemy._chargeTimer = 0;
  enemy._chargeDuration = enemy.isBoss ? 13 : 10;

  gameState.player.cannonAngle = 0;
  gameState.keys = {};
  gameState.bullets = [];
  gameState.enemyBullets = [];
  gameState.particles = [];
  gameState.effects = [];
  gameState.shakeAmount = 0;
  gameState.paused = false;
  gameState._fireInterval = 0;
  gameState._isFiring = false;

  document.removeEventListener('keydown', handleKeyDown);
  document.removeEventListener('keyup', handleKeyUp);
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);

  if (gameState._clickHandler) document.removeEventListener('mousedown', gameState._clickHandler);
  if (gameState._upHandler) document.removeEventListener('mouseup', gameState._upHandler);
  if (gameState._moveHandler) document.removeEventListener('mousemove', gameState._moveHandler);

  const handleMouseDown = (e) => {
    if (e.button === 0) {
      e.preventDefault();
      if (gameState.paused) return;
      gameState._isFiring = true;
      playerAttack();
      gameState._fireInterval = setInterval(() => {
        if (!gameState._isFiring) { clearInterval(gameState._fireInterval); return; }
        playerAttack();
      }, gameState.player.fireInterval);
    }
  };
  const handleMouseUp = (e) => {
    if (e.button === 0) { stopFiring(); }
  };
  gameState._clickHandler = handleMouseDown;
  gameState._upHandler = handleMouseUp;
  document.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mouseup', handleMouseUp);

  // 鼠标追踪炮筒旋转
  const handleMouseMove = (e) => {
    if (!gameState.inBattle) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = gameState.player.x + gameState.player.width / 2;
    const centerY = gameState.player.y + gameState.player.height / 2;
    gameState.player.cannonAngle = Math.atan2(mouseY - centerY, mouseX - centerX);
  };
  gameState._moveHandler = handleMouseMove;
  document.addEventListener('mousemove', handleMouseMove);

  // store trial info for render
  gameState._trialPlanetConfig = planet;
  gameState._trialTotalMonsters = totalMonsters;

  updateHeaderUI();
  document.getElementById('battle-log').innerHTML = '';
  document.getElementById('battle-planet').textContent = `🏯 ${planet.name}`;
  document.getElementById('battle-stage').textContent = `第 ${gameState.currentMonsterIndex + 1}/${totalMonsters} 层`;
  document.getElementById('battle-ult').textContent = '就绪';
  document.getElementById('battle-ult').style.color = '#2ecc71';
  updateSkillCDs();
  addBattleLog(`🏯 进入${planet.name} - 共${totalMonsters}层挑战！`, 'system');
  addBattleLog(`${monster.name} 出现了！准备战斗！`, 'system');
  renderBattleWeapons();
  gameState.animFrame = requestAnimationFrame(gameLoop);
}

// ==================== 段位系统 - 29段位 ====================

const RANKS = [
  { id: 1,  name: '太空流浪者',   icon: '🌌', threshold: 0 },
  { id: 2,  name: '陨石猎人',     icon: '☄️', threshold: 5 },
  { id: 3,  name: '星尘收集者',   icon: '🛸', threshold: 15 },
  { id: 4,  name: '暗影漫游者',   icon: '🌑', threshold: 30 },
  { id: 5,  name: '行星旅者',     icon: '🌍', threshold: 50 },
  { id: 6,  name: '轨道哨兵',     icon: '🛰️', threshold: 80 },
  { id: 7,  name: '深空观测者',   icon: '🔭', threshold: 120 },
  { id: 8,  name: '星域开拓者',   icon: '🚀', threshold: 170 },
  { id: 9,  name: '离子先锋',     icon: '⚡', threshold: 230 },
  { id: 10, name: '星际战士',     icon: '⚔️', threshold: 300 },
  { id: 11, name: '银河守卫者',   icon: '🛡️', threshold: 380 },
  { id: 12, name: '光子剑客',     icon: '🗡️', threshold: 470 },
  { id: 13, name: '星云猎手',     icon: '🌠', threshold: 570 },
  { id: 14, name: '黑洞幸存者',   icon: '🕳️', threshold: 680 },
  { id: 15, name: '深空指挥官',   icon: '🎖️', threshold: 800 },
  { id: 16, name: '超新星勇士',   icon: '🔥', threshold: 930 },
  { id: 17, name: '时空漫游者',   icon: '💫', threshold: 1070 },
  { id: 18, name: '量子觉醒者',   icon: '🧬', threshold: 1220 },
  { id: 19, name: '维度突破者',   icon: '🔮', threshold: 1380 },
  { id: 20, name: '星系主宰',     icon: '👑', threshold: 1550 },
  { id: 21, name: '星域领主',     icon: '🌟', threshold: 1730 },
  { id: 22, name: '虚空行者',     icon: '⚛️', threshold: 1920 },
  { id: 23, name: '银河议会成员', icon: '🏛️', threshold: 2120 },
  { id: 24, name: '远古守望者',   icon: '🗿', threshold: 2330 },
  { id: 25, name: '宇宙编织者',   icon: '🌐', threshold: 2550 },
  { id: 26, name: '大爆炸化身',   icon: '💥', threshold: 2780 },
  { id: 27, name: '时空之主',     icon: '🌀', threshold: 3020 },
  { id: 28, name: '次元神皇',     icon: '🔱', threshold: 3270 },
  { id: 29, name: '创世之神',     icon: '👁️', threshold: 3530 }
];

function getCurrentRank() {
  const kills = gameState.player.totalKills;
  let rank = RANKS[0];
  for (let i = RANKS.length - 1; i >= 0; i--) {
    if (kills >= RANKS[i].threshold) { rank = RANKS[i]; break; }
  }
  return rank;
}

// 段位奖励武器映射：每升一个段位赠送一把武器（均匀分布在999把中）
const RANK_WEAPONS = {
  1: 25, 2: 75, 3: 125, 4: 175, 5: 225, 6: 275, 7: 325,
  8: 375, 9: 425, 10: 475, 11: 525, 12: 566, 13: 607, 14: 648,
  15: 689, 16: 730, 17: 770, 18: 789, 19: 808, 20: 827, 21: 846,
  22: 865, 23: 884, 24: 903, 25: 922, 26: 941, 27: 960, 28: 979, 29: 998
};

function awardRankWeapons(fromRankId, toRankId) {
  const p = gameState.player;
  let awarded = false;
  for (let rid = fromRankId + 1; rid <= toRankId; rid++) {
    const weaponId = RANK_WEAPONS[rid];
    if (weaponId && ALL_WEAPONS[weaponId]) {
      const weapon = ALL_WEAPONS[weaponId];
      if (!p.ownedWeapons[weaponId]) {
        p.ownedWeapons[weaponId] = 1;
        addBattleLog(`🎁 段位奖励！获得武器「${weapon.icon} ${weapon.name}」！`, 'system');
        awarded = true;
      }
    }
  }
  if (awarded) applyWeaponStats();
}

// ==================== 段位详情页 ====================

function openRankScreen() {
  renderRankScreen();
  showScreen('rank-screen');
}

function renderRankScreen() {
  const currentRank = getCurrentRank();
  const kills = gameState.player.totalKills;

  // 当前段位信息
  document.getElementById('rank-current-icon').textContent = currentRank.icon;
  document.getElementById('rank-current-name').textContent = currentRank.name;
  document.getElementById('rank-current-level').textContent = `${currentRank.id} / ${RANKS.length}`;

  // 计算进度条
  let progressPercent = 100;
  let progressText = '已达最高段位！🏆';
  const nextRankIdx = RANKS.findIndex(r => r.id === currentRank.id + 1);
  if (nextRankIdx !== -1) {
    const prevThreshold = currentRank.threshold;
    const nextThreshold = RANKS[nextRankIdx].threshold;
    const rangeSize = nextThreshold - prevThreshold;
    const currentProgress = kills - prevThreshold;
    progressPercent = Math.min(100, Math.floor((currentProgress / rangeSize) * 100));
    const remaining = nextThreshold - kills;
    progressText = `距下一段位还需 ${remaining} 击杀`;
  }
  document.getElementById('rank-progress-fill').style.width = progressPercent + '%';
  document.getElementById('rank-progress-text').textContent = progressText;

  // 段位阶梯列表
  const ladderEl = document.getElementById('rank-ladder-list');
  ladderEl.innerHTML = RANKS.map((r, idx) => {
    const isAchieved = r.id < currentRank.id;
    const isCurrent = r.id === currentRank.id;
    let cls = '';
    let badge = '';
    if (isCurrent) {
      cls = 'current';
      badge = '👈 当前';
    } else if (isAchieved) {
      cls = 'achieved';
      badge = '✅';
    } else {
      badge = '🔒';
    }
    return `<div class="rank-ladder-item ${cls}">
      <div class="rank-ladder-icon">${r.icon}</div>
      <div class="rank-ladder-info">
        <div class="rank-ladder-name">${r.name}</div>
        <div class="rank-ladder-threshold">需要 ${r.threshold} 击杀</div>
      </div>
      <div class="rank-ladder-badge">${badge}</div>
    </div>`;
  }).join('');
}

// ==================== 商店 - 999把武器×99级 ====================

// 武器名称前缀池（按品质分级）
const LOW_PFX = ['铁质','铜制','石锤','骨制','简易','木质','铁屑','石肤','铜皮','铁骨','轻型','铁制','铜芯','石弹','铁爪','铜管','铁刃','碎石','铁皮','铜环','石核','铁索','铜刺','岩甲','石拳','铁芯','铜壳','岩晶','铁磁','铜光','石吼','铁壁','铜焰','钢铸','铅芯','青铜','黑铁','赤铜','白银','黄金','镀铬','合金','碳钢','钨金','锰铁','镍铬','钛金','钴蓝','锌白'];
const LOW_SFX = ['步枪','手枪','战斧','长矛','短剑','弓弩','护盾','护甲','头盔','拳套','匕首','飞镖','弹弓','投掷器','钩镰','火铳','弯刀','投枪','战靴','臂铠','能量枪','流星锤','护臂','胸铠','冲击炮','脉冲枪','霰弹枪','刺刃','力场盾','光剑','音波炮','堡垒盾','喷射器','冲锋枪','榴弹炮','斩马刀','破甲锤','反曲弓','臂弩','双刃斧','流星镖','伸缩棍','钩锁','钢爪','燃烧弹','闪光弹','烟雾枪','电击棒','锁链刀'];
const MID_PFX = ['等离子','量子','纳米','相位','暗物质','激光','反物质','引力','光子','电磁','超导','中子星','黑洞','空间','离子','超新星','暗能量','引力透','量子纠','反重力','暗影','星辰','超光速','虚粒子','时空','正电子','奇点','暗星','曲率','介子','夸克','混沌','维度','共振波','中微子','暗光子','磁单极','超对称','重子','轻子','胶子','玻色子','费米子','快子','瞬子','虚光子','引力子','轴子','快子'];
const MID_SFX = ['步枪','冲击炮','护盾','加速器','炮','刃剑','护甲','手枪','发射器','护盾','脉冲炮','能量剑','护甲','手雷','折叠盾','风暴枪','残骸炮','匕首','镜盾','缠刃','冲击锤','链锯','驱动器','相位刃','裂变炮','飞弹','装甲','驱散器','扭曲枪','核心','切割刃','分解炮','折射盾','崩坏炮','跃迁引擎','湮灭枪','虚空盾','引力钳','谐振刀','超流枪','光矛','聚变炮','时滞盾','纠缠器','波函数刃','塌缩弹','退相干枪','隧穿炮','弦振器'];
const HI_PFX = ['神罚','创世','绝对零度','灭星者','维度','因果律','时空','宇宙弦','熵增','虚空行者','银河系','诸神黄昏','创世神','无限','上帝粒子','大爆炸','哲学','死星','永恒冰封','命运','天启','宇宙大撕裂','真理之门','绝对领域','原初','终焉','超弦共振','全能','涅槃重生','道','混沌初开','因果断罪','太极两仪','洪荒','盘古','伏羲','女娲','共工','祝融','后羿','刑天','蚩尤','应龙','烛龙','鲲鹏','帝江','蓐收','句芒','玄冥'];
const HI_SFX = ['之矛','脉冲炮','盾','巨剑','粉碎炮','武器','终结者','刃','装甲','之刃','湮灭炮','炮','护盾','手套','枪','余烬炮','之刃','核心','护盾','之矛','骑士剑','炮','之盾','装甲','之火','之刃','炮','之盾','机甲','之剑','斧','刃','护盾','之斧','神锤','权杖','圣杯','魔镜','法典','天秤','圣钟','神灯','魔笛','竖琴','飞毯','神舟','魔方','圣火','神雷','天罚'];
const ULT_PFX = ['创世神','太初','鸿蒙','混沌','造化','无极','永恒','不朽','万象','归一','玄黄','九天','星域','宇宙','时空','命运','因果','真理','虚无','彼岸','轮回','涅槃','太极','两仪','四象','八卦','河图','洛书','开天','辟地','大千','须弥','寂灭','梵天','湿婆','毗湿奴','宙斯','奥丁','拉神','阿图姆','阿胡拉','玉皇','元始','灵宝','道德','菩提','金刚','琉璃','宝光'];
const ULT_SFX = ['圣剑','神杖','天盾','帝铠','仙冠','灵珠','宝镜','金印','玉符','圣旗','神弓','天琴','宝鼎','仙葫','神炉','灵扇','宝塔','金钟','玉笛','圣莲','神斧','天戟','宝刀','仙剑','灵盾','神甲','天梭','宝轮','金钵','玉环','圣印','神诀','天书','宝幢','灵幡','神鞭','仙索','法轮','舍利','甘露','金莲','宝盖','天衣','神珠','瑞兽','祥云','圣光','妙音','甘露'];

// 武器图标池
const LOW_ICON_POOL = ['🔫','🔧','🪓','🔱','🗡️','🏹','🛡️','🦾','⛑️','👊','🔪','🎯','🏏','💣','⛏️','🔩','⚔️','🎣','👢','🧤','🔋','⛓️','🦔','👕','💪','📡','💉','💎','🧲','🔦','📢','🏰','🔥','🗜️','⛏','🪚','🧰','🔗','🪝','💼','🎒','🧪','🪥','🧹','🪣','🧼','🩹','💊','🩺'];
const MID_ICON_POOL = ['⚡','💥','🧬','🌀','🕳️','🔆','🧪','☢️','🌊','✨','⚛️','🔮','⭐','🌑','🫧','🌩️','💫','🕶️','🔭','🪢','🧲','⛓️‍💥','🚀','🌘','🌟','🚀','🧬','🫙','⏳','🔥','📐','☀️','🌌','💠','🎆','🌋','🌈','❇️','🔬','🛸','🎇','🪐','🌪️','🫧','💠','🌀','🎛️','📊','🧿'];
const HI_ICON_POOL = ['👑','💀','❄️','⚔️','💢','🎭','⌛','🪐','♾️','👻','🌌','🌈','🛡️','✋','👁️','💣','🧠','☠️','🧊','🗿','🐉','🕯️','🚪','🪬','🔥','🪓','🎸','🏆','🐦‍🔥','☯️','🌋','⚖️','☯️','🗡','🦅','🦂','🐍','🕷️','👹','👺','😈','💫','⚜️','🧙','🦄','🐲','🌑','⚡','💎'];
const ULT_ICON_POOL = ['🌟','✨','💫','⭐','🌠','🪐','🌌','🔮','💎','👑','🏆','🎖️','🌀','♾️','☀️','⚜️','🔱','💠','🕉️','☸️','✡️','☯️','⚛️','🪬','🧿','🕎','🔯','🎴','🀄','🃏','🌸','🏵️','💮','👁️‍🗨️','✨','💖','🌕','☄️','🪷','🕊️','🦚','🍀','🎐','🏮','📿','🪔','🌅','🎑','🪷'];

// ==================== 音效系统 (Web Audio API) ====================

let _audioCtx = null;
let _audioEnabled = false;

function initAudio() {
  if (_audioCtx) return;
  try {
    _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    _audioEnabled = true;
  } catch (e) {
    _audioEnabled = false;
  }
}

function resumeAudio() {
  if (_audioCtx && _audioCtx.state === 'suspended') {
    _audioCtx.resume();
  }
}

// 播放击中音效 - 每次不同
const HIT_SOUNDS = ['ping', 'clink', 'zap', 'thud', 'boom', 'spark'];
let _hitSoundIdx = 0;

function playHitSound() {
  if (!_audioEnabled || !_audioCtx) { initAudio(); if (!_audioEnabled) return; }
  resumeAudio();
  const ctx = _audioCtx;
  const type = HIT_SOUNDS[_hitSoundIdx % HIT_SOUNDS.length];
  _hitSoundIdx++;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);

  switch (type) {
    case 'ping':
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.04);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.08);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
      osc.start(now); osc.stop(now + 0.1);
      break;
    case 'clink':
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(2000, now + 0.02);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.07);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
      osc.start(now); osc.stop(now + 0.08);
      break;
    case 'zap':
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(1500, now + 0.03);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.07);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
      osc.start(now); osc.stop(now + 0.08);

      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.connect(gain2); gain2.connect(ctx.destination);
      osc2.type = 'square';
      osc2.frequency.setValueAtTime(100, now);
      osc2.frequency.exponentialRampToValueAtTime(300, now + 0.04);
      gain2.gain.setValueAtTime(0.06, now);
      gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.06);
      osc2.start(now); osc2.stop(now + 0.06);
      break;
    case 'thud':
      osc.type = 'sine';
      osc.frequency.setValueAtTime(200, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.08);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
      osc.start(now); osc.stop(now + 0.12);
      break;
    case 'boom':
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.15);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);
      osc.start(now); osc.stop(now + 0.18);
      break;
    case 'spark':
      osc.type = 'square';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.setValueAtTime(900, now + 0.015);
      osc.frequency.setValueAtTime(1200, now + 0.03);
      osc.frequency.setValueAtTime(700, now + 0.045);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.06);
      osc.start(now); osc.stop(now + 0.06);
      break;
  }
}

// 播放击杀音效 - 每次不同
const KILL_SOUNDS = ['explosion', 'shatter', 'rising', 'descend'];
let _killSoundIdx = 0;

function playKillSound() {
  if (!_audioEnabled || !_audioCtx) { initAudio(); if (!_audioEnabled) return; }
  resumeAudio();
  const ctx = _audioCtx;
  const type = KILL_SOUNDS[_killSoundIdx % KILL_SOUNDS.length];
  _killSoundIdx++;

  const now = ctx.currentTime;

  switch (type) {
    case 'explosion':
      for (let i = 0; i < 3; i++) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(100 + i * 60, now + i * 0.02);
        osc.frequency.exponentialRampToValueAtTime(30 - i * 5, now + 0.3 + i * 0.02);
        gain.gain.setValueAtTime(0.08, now + i * 0.02);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35 + i * 0.02);
        osc.start(now + i * 0.02); osc.stop(now + 0.35 + i * 0.02);
      }
      break;
    case 'shatter':
      for (let i = 0; i < 5; i++) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'square';
        osc.frequency.setValueAtTime(800 + i * 300, now);
        osc.frequency.exponentialRampToValueAtTime(100 + i * 80, now + 0.15);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        osc.start(now); osc.stop(now + 0.15);
      }
      break;
    case 'rising':
      {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.2);
        osc.frequency.exponentialRampToValueAtTime(1500, now + 0.35);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.15, now + 0.15);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        osc.start(now); osc.stop(now + 0.4);
      }
      {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(150, now + 0.05);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.25);
        osc.frequency.exponentialRampToValueAtTime(1000, now + 0.4);
        gain.gain.setValueAtTime(0.08, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.45);
        osc.start(now + 0.05); osc.stop(now + 0.45);
      }
      break;
    case 'descend':
      for (let i = 0; i < 4; i++) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = i % 2 === 0 ? 'sawtooth' : 'triangle';
        osc.frequency.setValueAtTime(500 - i * 80, now);
        osc.frequency.exponentialRampToValueAtTime(50, now + 0.25);
        gain.gain.setValueAtTime(0.07, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now); osc.stop(now + 0.3);
      }
      break;
  }
}

// 播放大招音效
let _ultSoundIdx = 0;
function playUltSound() {
  if (!_audioEnabled || !_audioCtx) { initAudio(); if (!_audioEnabled) return; }
  resumeAudio();
  const ctx = _audioCtx;
  const now = ctx.currentTime;

  for (let i = 0; i < 5; i++) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(200 + i * 100, now + i * 0.03);
    osc.frequency.exponentialRampToValueAtTime(800 + i * 200, now + i * 0.03 + 0.15);
    gain.gain.setValueAtTime(0.06, now + i * 0.03);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
    osc.start(now + i * 0.03); osc.stop(now + 0.5);
  }
  const bass = ctx.createOscillator();
  const bassGain = ctx.createGain();
  bass.connect(bassGain); bassGain.connect(ctx.destination);
  bass.type = 'sawtooth';
  bass.frequency.setValueAtTime(80, now);
  bass.frequency.exponentialRampToValueAtTime(30, now + 0.6);
  bassGain.gain.setValueAtTime(0.1, now);
  bassGain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
  bass.start(now); bass.stop(now + 0.6);
}

// 生成武器名称
function getWeaponName(tier, index) {
  let pfx, sfx, count;
  if (tier === 'low') { pfx = LOW_PFX; sfx = LOW_SFX; count = LOW_PFX.length; }
  else if (tier === 'mid') { pfx = MID_PFX; sfx = MID_SFX; count = MID_PFX.length; }
  else if (tier === 'high') { pfx = HI_PFX; sfx = HI_SFX; count = HI_PFX.length; }
  else { pfx = ULT_PFX; sfx = ULT_SFX; count = ULT_PFX.length; }

  const p = pfx[index % count];
  const s = sfx[Math.floor(index / count) % sfx.length];
  const ver = Math.floor(index / (count * sfx.length));
  const suffix = ver > 0 ? `·${['II','III','IV'][ver-1] || `V${ver}`}型` : '';
  return p + s + suffix;
}

// 生成武器图标
function getWeaponIcon(tier, index) {
  let pool;
  if (tier === 'low') pool = LOW_ICON_POOL;
  else if (tier === 'mid') pool = MID_ICON_POOL;
  else if (tier === 'high') pool = HI_ICON_POOL;
  else pool = ULT_ICON_POOL;
  return pool[index % pool.length];
}

// 武器属性类型
const STAT_TYPES = {
  ATK: 'atk',
  DEF: 'def',
  HP: 'hp',
  CANNON: 'cannonMul',
  ULT: 'ultMul',
  FIRE: 'fireRate',
  CRIT: 'critRate'
};

const STAT_LABELS = {
  atk: 'ATK',
  def: 'DEF',
  hp: 'HP',
  cannonMul: '蓄能炮伤害',
  ultMul: '大招伤害',
  fireRate: '射速提升',
  critRate: '暴击率'
};

// 每级增加量
const STAT_PER_LEVEL = {
  atk: 0.5,
  def: 0.25,
  hp: 2,
  cannonMul: 0.004,
  ultMul: 0.004,
  fireRate: 0.3,
  critRate: 0.0015
};

// 为每个tier分配stat类型的分布
function getStatTypeForIndex(index, tier) {
  const cycle = index % 7;
  switch (cycle) {
    case 0: return STAT_TYPES.ATK;
    case 1: return STAT_TYPES.ATK;
    case 2: return STAT_TYPES.DEF;
    case 3: return STAT_TYPES.HP;
    case 4: return tier === 'low' ? STAT_TYPES.ATK : STAT_TYPES.CANNON;
    case 5: return tier === 'low' ? STAT_TYPES.DEF : STAT_TYPES.ULT;
    case 6: return tier === 'low' ? STAT_TYPES.FIRE : STAT_TYPES.CRIT;
    default: return STAT_TYPES.ATK;
  }
}

// 根据武器ID计算最低段位要求（999把武器）
function getWeaponMinRank(id) {
  if (id <= 250) {
    // 低级武器：分布在段位1~5（每段50把）
    if (id <= 50) return 1;
    if (id <= 100) return 2;
    if (id <= 150) return 3;
    if (id <= 200) return 4;
    return 5;
  } else if (id <= 500) {
    // 中级武器：分布在段位6~10（每段50把）
    if (id <= 300) return 6;
    if (id <= 350) return 7;
    if (id <= 400) return 8;
    if (id <= 450) return 9;
    return 10;
  } else if (id <= 750) {
    // 高级武器：分布在段位11~16（每段~42把）
    if (id <= 542) return 11;
    if (id <= 583) return 12;
    if (id <= 624) return 13;
    if (id <= 666) return 14;
    if (id <= 708) return 15;
    return 16;
  } else {
    // 终极武器：分布在段位17~29（每段~19把）
    if (id <= 770) return 17;
    if (id <= 789) return 18;
    if (id <= 808) return 19;
    if (id <= 827) return 20;
    if (id <= 846) return 21;
    if (id <= 865) return 22;
    if (id <= 884) return 23;
    if (id <= 903) return 24;
    if (id <= 922) return 25;
    if (id <= 941) return 26;
    if (id <= 960) return 27;
    if (id <= 979) return 28;
    return 29;
  }
}

// 根据段位获取对应段位名称
function getRankNameById(rankId) {
  const rank = RANKS.find(r => r.id === rankId);
  return rank ? `${rank.icon} ${rank.name}` : '未知段位';
}

function generateAllWeapons() {
  const weapons = {};
  const perLvlCache = {};

  // 低级武器 ID 1-250（250把）
  for (let i = 0; i < 250; i++) {
    const id = i + 1;
    const statType = getStatTypeForIndex(i, 'low');
    if (!(statType in perLvlCache)) perLvlCache[statType] = STAT_PER_LEVEL[statType];
    const perLvl = perLvlCache[statType];
    weapons[id] = {
      id, name: getWeaponName('low', i), icon: getWeaponIcon('low', i), tier: 'low',
      minRank: getWeaponMinRank(id),
      desc: `基础武器，每级提升${STAT_LABELS[statType]}+${perLvl}`,
      statType, perLevel: perLvl,
      purchaseGold: 30 + Math.floor(i * 2.5), purchaseDiamond: 0,
      upgradeGold: 5 + Math.floor(i * 0.8), upgradeDiamond: 0,
      maxLevel: 99
    };
  }

  // 中级武器 ID 251-500（250把）
  for (let i = 0; i < 250; i++) {
    const id = i + 251;
    const statType = getStatTypeForIndex(i, 'mid');
    if (!(statType + '_mid' in perLvlCache)) perLvlCache[statType + '_mid'] = +(STAT_PER_LEVEL[statType] * 1.3).toFixed(3);
    const perLvl = perLvlCache[statType + '_mid'];
    weapons[id] = {
      id, name: getWeaponName('mid', i), icon: getWeaponIcon('mid', i), tier: 'mid',
      minRank: getWeaponMinRank(id),
      desc: `进阶武器，每级提升${STAT_LABELS[statType]}+${perLvl}`,
      statType, perLevel: perLvl,
      purchaseGold: 0, purchaseDiamond: 1 + Math.floor(i / 5),
      upgradeGold: 15 + Math.floor(i * 1.5), upgradeDiamond: Math.ceil(i / 15),
      maxLevel: 99
    };
  }

  // 高级武器 ID 501-750（250把）
  for (let i = 0; i < 250; i++) {
    const id = i + 501;
    const statType = getStatTypeForIndex(i, 'high');
    if (!(statType + '_high' in perLvlCache)) perLvlCache[statType + '_high'] = +(STAT_PER_LEVEL[statType] * 1.8).toFixed(3);
    const perLvl = perLvlCache[statType + '_high'];
    weapons[id] = {
      id, name: getWeaponName('high', i), icon: getWeaponIcon('high', i), tier: 'high',
      minRank: getWeaponMinRank(id),
      desc: `传说武器，每级提升${STAT_LABELS[statType]}+${perLvl}`,
      statType, perLevel: perLvl,
      purchaseGold: 0, purchaseDiamond: 3 + Math.floor(i / 6),
      upgradeGold: 0, upgradeDiamond: 1 + Math.floor(i / 10),
      maxLevel: 99
    };
  }

  // 终极武器 ID 751-999（249把）
  for (let i = 0; i < 249; i++) {
    const id = i + 751;
    const statType = getStatTypeForIndex(i, 'ult');
    if (!(statType + '_ult' in perLvlCache)) perLvlCache[statType + '_ult'] = +(STAT_PER_LEVEL[statType] * 2.5).toFixed(3);
    const perLvl = perLvlCache[statType + '_ult'];
    weapons[id] = {
      id, name: getWeaponName('ult', i), icon: getWeaponIcon('ult', i), tier: 'ult',
      minRank: getWeaponMinRank(id),
      desc: `终极神兵，每级提升${STAT_LABELS[statType]}+${perLvl}`,
      statType, perLevel: perLvl,
      purchaseGold: 0, purchaseDiamond: 6 + Math.floor(i / 4),
      upgradeGold: 0, upgradeDiamond: 2 + Math.floor(i / 8),
      maxLevel: 99
    };
  }

  return weapons;
}

const ALL_WEAPONS = generateAllWeapons();

// 计算当前装备的所有武器总加成
function getWeaponBonuses() {
  const bonus = { atk: 0, def: 0, maxHp: 0, cannonMul: 1, ultMul: 1, fireReduce: 0, critBonus: 0 };
  const ow = gameState.player.ownedWeapons;
  for (const [wId, level] of Object.entries(ow)) {
    if (level <= 0) continue;
    const w = ALL_WEAPONS[parseInt(wId)];
    if (!w) continue;
    const val = w.perLevel * level;
    switch (w.statType) {
      case 'atk': bonus.atk += val; break;
      case 'def': bonus.def += val; break;
      case 'hp': bonus.maxHp += val; break;
      case 'cannonMul': bonus.cannonMul += val; break;
      case 'ultMul': bonus.ultMul += val; break;
      case 'fireRate': bonus.fireReduce += val; break;
      case 'critRate': bonus.critBonus += val; break;
    }
  }
  return bonus;
}

// 应用武器属性到玩家（每次战斗/属性变化时调用）
function applyWeaponStats() {
  const p = gameState.player;
  const b = getWeaponBonuses();
  const prevMaxHp = p.maxHp;
  p.atk = 20 + Math.floor(b.atk);
  p.def = 8 + Math.floor(b.def);
  p.maxHp = 150 + Math.floor(b.maxHp) + (p.consumableBonusHp || 0);
  // HP增加：只增加差值部分
  const hpDiff = p.maxHp - prevMaxHp;
  if (hpDiff > 0) p.hp += hpDiff;
  p.hp = Math.min(p.hp, p.maxHp);
  p.fireInterval = Math.max(35, 100 - Math.floor(b.fireReduce));
}

// ==================== 游戏状态 ====================

const gameState = {
  player: {
    maxHp: 150,
    hp: 150,
    atk: 20,
    def: 8,
    gold: 0,
    diamond: 0,
    totalKills: 0,
    consumableBonusHp: 0, // 商店消耗品额外血量
    // 位置 (Canvas坐标)
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    // 技能冷却
    cannonCooldown: 0,
    cannonMaxCooldown: 120,   // 2秒 (60fps * 2)
    ultCooldown: 0,
    ultMaxCooldown: 600,      // 10秒
    defendCooldown: 0,
    defendMaxCooldown: 0,    // 无冷却
    // 状态
    isDefending: false,
    defendTimer: 0,
    defendDuration: 60,       // 1秒防御
    // 移动速度
    speed: 4,
    // 无敌帧
    invincibleTimer: 0,
    // 炮筒角度（弧度），默认指向右（0）
    cannonAngle: 0,
    // 已拥有的武器: { weaponId: level }
    ownedWeapons: {},
    // 当前战斗中装备的武器ID
    activeWeaponId: null,
    // 连射间隔 (ms)
    fireInterval: 100,
    // 基础射速（被武器加成后的实际值由applyWeaponStats更新）
    baseFireInterval: 100
  },
  currentPlanetIndex: 0,
  currentMonsterIndex: 0,
  completedPlanets: [],
  inBattle: false,
  currentEnemy: null,
  finalBossDefeated: false,
  _lastRankId: 1,
  _lastRankName: RANKS[0].name,
  _lastRankIcon: RANKS[0].icon,
  // Canvas
  canvas: null,
  ctx: null,
  // 动画
  animFrame: 0,
  // 按键状态
  keys: {},
  // 粒子效果
  particles: [],
  effects: [],       // 战斗特效（光环、冲击波等）
  _hitEffectIdx: 0,  // 命中特效轮换
  _killEffectIdx: 0, // 击杀特效轮换
  // 子弹 (player -> enemy)
  bullets: [],
  // 敌人子弹 (enemy -> player)
  enemyBullets: [],
  // 屏幕震动
  shakeAmount: 0,
  // 暂停状态
  paused: false
};

// ==================== 作者名字检测与惩罚 ====================

function checkAuthorPenalty() {
  const input = document.getElementById('player-name-input');
  const name = (input && input.value.trim()) ? input.value.trim() : '宇航员';
  if (!name.includes('作者')) return false;

  // 清空 gameState 中所有资源
  const p = gameState.player;
  p.gold = 0;
  p.diamond = 0;
  p.totalKills = 0;
  p.ownedWeapons = {};
  p.activeWeaponId = null;
  p.consumableBonusHp = 0;
  gameState.completedPlanets = [];
  gameState.finalBossDefeated = false;
  gameState._pkProgress = { novice: 0, expert: 0 };
  gameState._lastRankId = 1;
  gameState._lastRankName = RANKS[0].name;
  gameState._lastRankIcon = RANKS[0].icon;

  // 清除本地存档
  try {
    localStorage.removeItem(SAVE_KEY);
  } catch (e) {}

  // 强行覆盖保存一个空档
  saveGame();

  // 显示提示
  setTimeout(() => {
    alert('⚠️ 检测到名字中包含「作者」二字，所有游戏资源已被清空！');
  }, 100);

  return true;
}

// ==================== 屏幕切换 ====================

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
  // 每次显示开始界面时更新玩家数量
  if (screenId === 'start-screen') {
    updateStartPlayerCount();
  }
}

// 更新开始界面的玩家数量显示
function updateStartPlayerCount() {
  const countEl = document.getElementById('start-player-count');
  if (!countEl) return;
  const lb = loadLeaderboard();
  const count = lb.length;
  if (count > 0) {
    countEl.textContent = `(${count}人)`;
  } else {
    countEl.textContent = '';
  }
}

// ==================== 游戏流程 ====================

function startGame() {
  // 初始化音效系统（需要用户交互后才允许播放）
  initAudio();
  resumeAudio();

  // 检查名字是否包含「作者」
  checkAuthorPenalty();

  // 旧名字追踪：保存上次使用的名字，若名字变更则存入旧名字库
  trackOldName();

  // 战斗状态重置（每次进星球选择页面都刷新）
  gameState.player.hp = gameState.player.maxHp;
  gameState.player.cannonCooldown = 0;
  gameState.player.ultCooldown = 0;
  gameState.player.defendCooldown = 0;
  gameState.player.isDefending = false;
  gameState.player.defendTimer = 0;
  gameState.player.invincibleTimer = 0;
  gameState.player.cannonAngle = 0;
  gameState.currentPlanetIndex = 0;
  gameState.currentMonsterIndex = 0;
  gameState.inBattle = false;
  gameState.currentEnemy = null;
  gameState.particles = [];
  gameState.effects = [];
  gameState.bullets = [];
  gameState.enemyBullets = [];
  gameState.shakeAmount = 0;
  gameState.paused = false;
  // 标记：首次游戏时初始化_pkProgress
  if (!gameState._pkProgress) {
    gameState._pkProgress = { novice: 0, expert: 0 };
  }

  // 重新应用武器属性加成（atk/def/maxHp/fireInterval 从武器重新算）
  applyWeaponStats();
  // HP 补满
  gameState.player.hp = gameState.player.maxHp;
  // 根据当前击杀数重新计算段位ID（totalKills 已持久化，段位不会丢失）
  const recalcRank = getCurrentRank();
  gameState._lastRankId = recalcRank.id;
  gameState._lastRankName = recalcRank.name;
  gameState._lastRankIcon = recalcRank.icon;

  showScreen('planet-screen');
  renderPlanets();
  updateHeaderUI();
  // 自动更新排行榜（新玩家也会被记录）
  silentLeaderboardSubmit();
}

function backToStart() {
  if (gameState.inBattle) return;
  showScreen('start-screen');
  // 回到主页时递减旧名字剩余次数，过期自动删除
  decrementOldNames();
  renderOldNames();
}

function resetGame() {
  showScreen('start-screen');
}

// ==================== 商店系统 ====================

let shopTab = 'low'; // 当前商店标签
let shopPage = 1;     // 当前分页
const SHOP_PAGE_SIZE = 20; // 每页显示武器数

// ==================== 商店消耗品 ====================

function buyCola() {
  const p = gameState.player;
  if (p.gold < 50) {
    alert('💸 金币不足！可乐需要50金币。');
    return;
  }
  p.gold -= 50;
  p.consumableBonusHp = (p.consumableBonusHp || 0) + 5;
  p.maxHp += 5;
  p.hp += 5;
  updateShopCurrency();
  saveGame();
  updateHeaderUI();
  silentLeaderboardSubmit();
  alert('🥤 购买成功！最大生命值 +5！');
}

function buyHeart() {
  const p = gameState.player;
  if (p.gold < 100) {
    alert('💸 金币不足！爱心需要100金币。');
    return;
  }
  p.gold -= 100;
  p.consumableBonusHp = (p.consumableBonusHp || 0) + 11;
  p.maxHp += 11;
  p.hp += 11;
  updateShopCurrency();
  saveGame();
  updateHeaderUI();
  silentLeaderboardSubmit();
  alert('❤️ 购买成功！最大生命值 +11！');
}

function openShop() {
  shopTab = 'low';
  shopPage = 1;
  updateShopCurrency();
  navigateShopTab('low');
  showScreen('shop-screen');
}

function closeShop() {
  showScreen('planet-screen');
  renderPlanets();
  updateHeaderUI();
}

function switchShopTab(tab) {
  navigateShopTab(tab);
}

function navigateShopTab(tab) {
  shopTab = tab;
  shopPage = 1;
  document.querySelectorAll('.shop-tab').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  renderShop();
}

function updateShopCurrency() {
  document.getElementById('shop-gold').textContent = gameState.player.gold;
  document.getElementById('shop-diamond').textContent = gameState.player.diamond;
}

function renderShop() {
  const grid = document.getElementById('shop-grid');
  grid.innerHTML = '';

  const tierRanges = { low: [1, 250], mid: [251, 500], high: [501, 750], ult: [751, 999] };
  const tierRange = tierRanges[shopTab] || [1, 250];
  const totalWeapons = tierRange[1] - tierRange[0] + 1;
  const totalPages = Math.ceil(totalWeapons / SHOP_PAGE_SIZE);
  if (shopPage > totalPages) shopPage = totalPages;
  if (shopPage < 1) shopPage = 1;

  const startId = tierRange[0] + (shopPage - 1) * SHOP_PAGE_SIZE;
  const endId = Math.min(tierRange[1], startId + SHOP_PAGE_SIZE - 1);
  const playerRank = getCurrentRank();

  for (let id = startId; id <= endId; id++) {
    const weapon = ALL_WEAPONS[id];
    if (!weapon) continue;
    const level = gameState.player.ownedWeapons[id] || 0;
    const owned = level > 0;
    const rankUnlocked = playerRank.id >= weapon.minRank;
    const isLocked = !rankUnlocked && !owned;

    const card = document.createElement('div');
    card.className = 'shop-card' + (owned ? ' owned' : '') + (isLocked ? ' locked' : '') + ' tier-' + weapon.tier;
    if (!isLocked) {
      card.onclick = () => openWeaponDetail(id);
    }

    const statLabel = STAT_LABELS[weapon.statType];
    const perLvl = weapon.perLevel;
    const curBonus = owned ? (perLvl * level).toFixed(1) : '0';

    let priceHtml = '';
    if (owned) {
      priceHtml = `<div class="shop-card-level">Lv.${level}/99</div>`;
    } else if (isLocked) {
      const rankName = getRankNameById(weapon.minRank);
      priceHtml = `<div class="shop-card-lock">🔒 需${rankName}</div>`;
    } else {
      if (weapon.purchaseGold > 0) {
        priceHtml = `<div class="shop-card-price">⭐ ${weapon.purchaseGold}</div>`;
      }
      if (weapon.purchaseDiamond > 0) {
        priceHtml += `<div class="shop-card-price diamond">💎 ${weapon.purchaseDiamond}</div>`;
      }
    }

    card.innerHTML = `
      <span class="shop-card-icon">${weapon.icon}</span>
      <div class="shop-card-name">${weapon.name}</div>
      <div class="shop-card-desc">${weapon.desc}</div>
      <div class="shop-card-effect">${statLabel}: +${curBonus}${weapon.statType.includes('Mul') ? 'x' : (weapon.statType === 'critRate' ? '%' : (weapon.statType === 'fireRate' ? 'ms↓' : ''))}</div>
      ${priceHtml}
      <div class="shop-card-tier ${weapon.tier}">${weapon.tier === 'low' ? '低级' : (weapon.tier === 'mid' ? '中级' : (weapon.tier === 'high' ? '高级' : '终极'))}</div>
    `;

    grid.appendChild(card);
  }

  // 渲染分页控件
  renderShopPagination(totalPages, totalWeapons);
}

function renderShopPagination(totalPages, totalWeapons) {
  const pagerHtml = buildPagerHtml(totalPages, totalWeapons);
  const topPager = document.getElementById('shop-pager');
  const bottomPager = document.getElementById('shop-pager-bottom');
  if (topPager) topPager.innerHTML = pagerHtml;
  if (bottomPager) bottomPager.innerHTML = pagerHtml;
}

function buildPagerHtml(totalPages, totalWeapons) {
  if (totalPages <= 1) return '';
  let html = `<span class="sp-info">共 ${totalWeapons} 把 | ${shopPage}/${totalPages}页</span>`;
  html += `<button class="sp-btn" onclick="goShopPage(1)" ${shopPage === 1 ? 'disabled' : ''}>◀◀</button>`;
  html += `<button class="sp-btn" onclick="goShopPage(${shopPage - 1})" ${shopPage === 1 ? 'disabled' : ''}>◀</button>`;

  const maxBtns = 7;
  let startP = Math.max(1, shopPage - 3);
  let endP = Math.min(totalPages, startP + maxBtns - 1);
  if (endP - startP < maxBtns - 1) startP = Math.max(1, endP - maxBtns + 1);

  for (let p = startP; p <= endP; p++) {
    html += `<button class="sp-btn sp-page${p === shopPage ? ' active' : ''}" onclick="goShopPage(${p})">${p}</button>`;
  }

  html += `<button class="sp-btn" onclick="goShopPage(${shopPage + 1})" ${shopPage === totalPages ? 'disabled' : ''}>▶</button>`;
  html += `<button class="sp-btn" onclick="goShopPage(${totalPages})" ${shopPage === totalPages ? 'disabled' : ''}>▶▶</button>`;
  return html;
}

function goShopPage(page) {
  shopPage = page;
  renderShop();
}

function openWeaponDetail(weaponId) {
  const weapon = ALL_WEAPONS[weaponId];
  if (!weapon) return;
  const level = gameState.player.ownedWeapons[weaponId] || 0;
  const owned = level > 0;
  const playerRank = getCurrentRank();
  const rankUnlocked = playerRank.id >= weapon.minRank;
  const isLocked = !rankUnlocked && !owned;

  // 创建详情弹窗
  const overlay = document.createElement('div');
  overlay.className = 'detail-overlay';
  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };

  const statLabel = STAT_LABELS[weapon.statType];
  const unit = weapon.statType.includes('Mul') ? 'x' : (weapon.statType === 'critRate' ? '%' : (weapon.statType === 'fireRate' ? 'ms↓' : ''));
  const curBonus = owned ? (weapon.perLevel * level).toFixed(2) : '0';
  const nextBonus = level < 99 ? (weapon.perLevel * (level + 1)).toFixed(2) : 'MAX';

  // 升级费用
  let costHtml = '';
  let canUpgrade = false;
  if (!owned) {
    // 购买
    if (isLocked) {
      const rankName = getRankNameById(weapon.minRank);
      costHtml = `<div style="color:#e74c3c;font-size:0.9rem;padding:8px 0;">🔒 需要达到 <b>${rankName}</b> 才能购买<br><small>当前段位：${playerRank.icon} ${playerRank.name}</small></div>`;
    } else {
      let buyHtml = [];
      if (weapon.purchaseGold > 0) {
        const ok = gameState.player.gold >= weapon.purchaseGold;
        buyHtml.push(`<button class="btn-buy ${ok ? '' : 'disabled'}" onclick="purchaseWeapon(${weaponId})" ${ok ? '' : 'disabled'}>⭐ ${weapon.purchaseGold} 金币购买</button>`);
        canUpgrade = ok;
      }
      if (weapon.purchaseDiamond > 0) {
        const ok = gameState.player.diamond >= weapon.purchaseDiamond;
        buyHtml.push(`<button class="btn-buy diamond-btn ${ok ? '' : 'disabled'}" onclick="purchaseWeapon(${weaponId})" ${ok ? '' : 'disabled'}>💎 ${weapon.purchaseDiamond} 钻石购买</button>`);
        canUpgrade = canUpgrade || ok;
      }
      costHtml = buyHtml.join('');
    }
  } else if (level < 99) {
    let upHtml = [];
    if (weapon.upgradeGold > 0) {
      const ok = gameState.player.gold >= weapon.upgradeGold;
      upHtml.push(`<button class="btn-buy ${ok ? '' : 'disabled'}" onclick="upgradeWeapon(${weaponId})" ${ok ? '' : 'disabled'}>⭐ ${weapon.upgradeGold} 金币升级</button>`);
      canUpgrade = ok;
    }
    if (weapon.upgradeDiamond > 0) {
      const ok = gameState.player.diamond >= weapon.upgradeDiamond;
      upHtml.push(`<button class="btn-buy diamond-btn ${ok ? '' : 'disabled'}" onclick="upgradeWeapon(${weaponId})" ${ok ? '' : 'disabled'}>💎 ${weapon.upgradeDiamond} 钻石升级</button>`);
      canUpgrade = canUpgrade || ok;
    }
    costHtml = upHtml.join('');
  }

  const panel = document.createElement('div');
  panel.className = 'detail-panel';
  const rankName = getRankNameById(weapon.minRank);
  const tierLabel = weapon.tier === 'low' ? '低级武器' : (weapon.tier === 'mid' ? '中级武器' : (weapon.tier === 'high' ? '高级武器' : '终极武器'));
  panel.innerHTML = `
    <button class="detail-close" onclick="this.parentElement.parentElement.remove()">✕</button>
    <span class="detail-icon">${weapon.icon}</span>
    <h3>${weapon.name}</h3>
    <span class="detail-tier ${weapon.tier}">${tierLabel}</span>
    <p class="detail-desc">${weapon.desc}</p>
    <div class="detail-stats">
      <div class="detail-row"><span>所需段位</span><span style="color:${rankUnlocked ? '#2ecc71' : '#e74c3c'}">${rankName} ${rankUnlocked ? '✅' : '🔒'}</span></div>
      <div class="detail-row"><span>当前等级</span><span>Lv.${level}/99</span></div>
      <div class="detail-row"><span>当前${statLabel}</span><span>+${curBonus}${unit}</span></div>
      <div class="detail-row"><span>下一级${statLabel}</span><span>${level < 99 ? '+' + nextBonus + unit : '已满级'}</span></div>
    </div>
    <div class="detail-costs">
      ${costHtml}
    </div>
    <button class="btn-buy" style="margin-top:6px;background:#555;" onclick="document.querySelector('.detail-overlay').remove()">关闭</button>
  `;

  overlay.appendChild(panel);
  document.body.appendChild(overlay);
}

function purchaseWeapon(weaponId) {
  const weapon = ALL_WEAPONS[weaponId];
  if (!weapon) return;
  if (gameState.player.ownedWeapons[weaponId]) return;

  // 检查段位要求
  const playerRank = getCurrentRank();
  if (playerRank.id < weapon.minRank) {
    const rankName = getRankNameById(weapon.minRank);
    alert(`段位不足！需要达到 ${rankName} 才能购买此武器。\n你当前段位：${playerRank.icon} ${playerRank.name}`);
    return;
  }

  // 检查费用
  if (weapon.purchaseGold > 0 && gameState.player.gold < weapon.purchaseGold) {
    alert(`金币不足！需要 ${weapon.purchaseGold} 金币`);
    return;
  }
  if (weapon.purchaseDiamond > 0 && gameState.player.diamond < weapon.purchaseDiamond) {
    alert(`钻石不足！需要 ${weapon.purchaseDiamond} 钻石`);
    return;
  }

  gameState.player.gold -= weapon.purchaseGold;
  gameState.player.diamond -= weapon.purchaseDiamond;
  gameState.player.ownedWeapons[weaponId] = 1; // 1级

  applyWeaponStats();
  refreshShopUI();
  saveGame();
}

function upgradeWeapon(weaponId) {
  const weapon = ALL_WEAPONS[weaponId];
  if (!weapon) return;
  const level = gameState.player.ownedWeapons[weaponId] || 0;
  if (level <= 0 || level >= 99) return;

  if (weapon.upgradeGold > 0 && gameState.player.gold < weapon.upgradeGold) {
    alert(`金币不足！需要 ${weapon.upgradeGold} 金币`);
    return;
  }
  if (weapon.upgradeDiamond > 0 && gameState.player.diamond < weapon.upgradeDiamond) {
    alert(`钻石不足！需要 ${weapon.upgradeDiamond} 钻石`);
    return;
  }

  gameState.player.gold -= weapon.upgradeGold;
  gameState.player.diamond -= weapon.upgradeDiamond;
  gameState.player.ownedWeapons[weaponId] = level + 1;

  applyWeaponStats();
  refreshShopUI();
  saveGame();
}

function refreshShopUI() {
  updateShopCurrency();
  renderShop();
  updateHeaderUI();
  // 关闭详情弹窗
  const overlay = document.querySelector('.detail-overlay');
  if (overlay) overlay.remove();
}

// 钻石兑换金币: 1钻石=200金币
function convertDiamondToGold() {
  if (gameState.player.diamond < 1) {
    alert('钻石不足！至少需要1颗钻石。');
    return;
  }
  gameState.player.diamond -= 1;
  gameState.player.gold += 200;
  updateShopCurrency();
  updateHeaderUI();
  renderShop();
  saveGame();
  alert('兑换成功！1颗钻石 → 200金币');
}

// ==================== 看视频赚奖励 ====================

// 动漫视频名称库（9999个）
const VIDEO_LIBRARY = generateVideoLibrary();

function generateVideoLibrary() {
  const prefixes = [
    '进击的','钢之','魔法少女','刀剑','火影','海贼','死神','龙珠','一拳','鬼灭',
    '咒术','间谍','推子','EVA','星际','银河','宇宙','时空','命运','异世界',
    '转生','最强','勇者','魔王','精灵','天使','恶魔','吸血鬼','忍者','武士',
    '机甲','高达','战舰','战机','魔法','幻想','传说','神话','史诗','传奇',
    '黑执事','叛逆的','超时空','次元','境界','深渊','苍穹','星辰','月光','黎明',
    '黄昏','暗夜','极光','星尘','幻影','虚空','轮回','命运石','赛博朋克','蒸汽',
    '冰火','风暴','雷霆','烈焰','寒冰','光明','黑暗','混沌','秩序','自由',
    '热血','青春','校园','恋爱','悬疑','推理','恐怖','冒险','战斗','竞技',
    '美食','音乐','偶像','治愈','致郁','梦幻','奇妙','科学','魔法禁书','超炮',
    '刀语','虫师','物语','奇诺','十二国','彩云国','东离','永生','凡人','仙逆'
  ];
  const words = [
    '物语','传说','战记','冒险谭','之旅','游戏','狂想曲','协奏曲','旋律','境界',
    '世界','宇宙','学院','天团','骑士团','旅人','乐章','圣战','默示录','启示录',
    '年代记','编年史','异闻录','见闻录','奇谭','秘话','外传','前传','后传','正传',
    '英雄谭','勇者传','魔王传','天使篇','恶魔篇','人间篇','天上篇','地下篇',
    '觉醒','归来','降临','再临','重生','轮回','转生','穿越','逆袭','崛起',
    '远征','探索','开拓','征服','统治','毁灭','创造','守护','背叛','救赎',
    '邂逅','离别','重逢','约定','誓言','心愿','梦想','希望','绝望','光明',
    '暗影','光辉','灿烂','辉煌','闪耀','璀璨','极光','星火','火花','火焰',
    '冰霜','风暴','海啸','地震','火山','流星','彗星','黑洞','白洞','脉冲',
    '要塞','堡垒','城市','国度','王国','帝国','联邦','同盟','势力','组织'
  ];
  const suffixes = [
    '','Ⅰ','Ⅱ','Ⅲ','Ⅳ','Ⅴ',':起源',':终章',':序曲',':尾声',
    'R','S','Z','X','EX','改','超','真','极','绝'
  ];

  const library = [];
  let idx = 0;
  for (let p = 0; p < prefixes.length && library.length < 9999; p++) {
    for (let w = 0; w < words.length && library.length < 9999; w++) {
      for (let s = 0; s < suffixes.length && library.length < 9999; s++) {
        library.push(prefixes[p] + words[w] + suffixes[s]);
        if (library.length >= 9999) return library;
      }
    }
  }
  return library;
}

// 上次看视频的时间戳，用于冷却
let _lastVideoTime = 0;
const VIDEO_COOLDOWN = 5000; // 5秒冷却

function watchVideo() {
  const now = Date.now();
  if (now - _lastVideoTime < VIDEO_COOLDOWN) {
    const remain = Math.ceil((VIDEO_COOLDOWN - (now - _lastVideoTime)) / 1000);
    alert(`请稍候，${remain}秒后可再看视频`);
    return;
  }
  _lastVideoTime = now;

  // 随机选一个视频
  const videoIndex = Math.floor(Math.random() * VIDEO_LIBRARY.length);
  const videoName = VIDEO_LIBRARY[videoIndex];

  // 显示视频播放器
  const overlay = document.createElement('div');
  overlay.className = 'video-overlay';
  overlay.innerHTML = `
    <div class="video-player">
      <div class="video-screen" id="video-canvas-container">
        <canvas id="anime-canvas"></canvas>
        <div class="video-title-display">🎬 ${videoName}</div>
        <div class="video-episode">第 ${videoIndex + 1} 集</div>
        <div class="video-duration">⏱ 15:00</div>
      </div>
      <div class="video-progress-bar">
        <div class="video-progress-fill" id="video-bar-fill"></div>
      </div>
      <div class="video-controls">
        <span class="video-timer" id="video-timer">0:00 / 15:00</span>
        <span class="video-status" id="video-status">▶ 播放中...</span>
        <span class="video-skip" id="video-skip" style="display:none" onclick="claimVideoReward(this)">🎁 领取奖励</span>
      </div>
      <button class="video-close" onclick="closeVideoOverlay()">✕</button>
    </div>
  `;
  document.body.appendChild(overlay);

  // === Canvas 动漫场景渲染系统 ===
  const container = document.getElementById('video-canvas-container');
  const canvas = document.getElementById('anime-canvas');
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }
  resizeCanvas();

  // 基于 videoIndex 生成伪随机，保证每个视频画面不同
  function seededRandom(seed) {
    let s = seed;
    return function() {
      s = (s * 16807 + 0) % 2147483647;
      return (s - 1) / 2147483646;
    };
  }
  const rng = seededRandom(videoIndex);

  const sceneType = videoIndex % 10;
  const palettes = [
    { bg: ['#ff9a9e', '#fad0c4'], sky: '#fce4ec', accent: '#e91e63' },
    { bg: ['#0f0c29', '#302b63', '#24243e'], sky: '#1a1a2e', accent: '#00d2ff' },
    { bg: ['#cb2d3e', '#ef473a'], sky: '#ff6b6b', accent: '#ffd700' },
    { bg: ['#0a0a2e', '#1a1a4e', '#2a1a4e'], sky: '#0d0d2b', accent: '#feca57' },
    { bg: ['#ff7e5f', '#feb47b'], sky: '#ffe0b2', accent: '#ff6f00' },
    { bg: ['#a8e6cf', '#dcedc1'], sky: '#e8f5e9', accent: '#4caf50' },
    { bg: ['#0b3d0b', '#1a5c1a', '#0d2e0d'], sky: '#0a2a0a', accent: '#7fff00' },
    { bg: ['#e6e9f0', '#eef1f5'], sky: '#cfd8dc', accent: '#80deea' },
    { bg: ['#0b0b2b', '#1b1054', '#0d0840'], sky: '#050520', accent: '#9b59b6' },
    { bg: ['#0f0014', '#1a0033', '#0d0022'], sky: '#0a0010', accent: '#ff00ff' }
  ];
  const colors = palettes[sceneType];

  // 粒子系统
  const particles = [];
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: rng() * 600,
      y: rng() * 400,
      size: 1 + rng() * 4,
      speed: 0.3 + rng() * 2.5,
      angle: rng() * Math.PI * 2,
      wobble: rng() * 0.05,
      alpha: 0.3 + rng() * 0.7
    });
  }

  function drawCharacter(x, y, s, lean, r2, hairColor) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(lean);
    const hc = hairColor || (r2() > 0.5 ? '#1a1a2e' : '#4a2a5e');
    const skinColor = '#ffd5b8';
    const skinShadow = '#e8b896';
    // 阴影(地面)
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.beginPath(); ctx.ellipse(0, s*0.42, s*0.2, s*0.06, 0, 0, Math.PI*2); ctx.fill();
    // 腿 - 带渐变
    const legGrad = ctx.createLinearGradient(-s*0.08, 0, s*0.08, 0);
    legGrad.addColorStop(0, '#1a1a2e'); legGrad.addColorStop(0.5, '#2d2d44'); legGrad.addColorStop(1, '#1a1a2e');
    ctx.fillStyle = legGrad;
    ctx.beginPath(); ctx.roundRect(-s*0.1, s*0.18, s*0.08, s*0.22, 3); ctx.fill();
    ctx.beginPath(); ctx.roundRect(s*0.02, s*0.18, s*0.08, s*0.22, 3); ctx.fill();
    // 鞋子
    ctx.fillStyle = '#111';
    ctx.beginPath(); ctx.roundRect(-s*0.12, s*0.36, s*0.12, s*0.06, 3); ctx.fill();
    ctx.beginPath(); ctx.roundRect(s*0.0, s*0.36, s*0.12, s*0.06, 3); ctx.fill();
    // 身体 - 上衣带渐变和衣领
    const isRed = r2() > 0.5;
    const topColor1 = isRed ? '#ff5e5e' : '#5b9bd5';
    const topColor2 = isRed ? '#c0392b' : '#2e6da4';
    const bodyGrad = ctx.createLinearGradient(0, -s*0.12, 0, s*0.22);
    bodyGrad.addColorStop(0, topColor1);
    bodyGrad.addColorStop(1, topColor2);
    ctx.fillStyle = bodyGrad;
    ctx.beginPath();
    ctx.roundRect(-s*0.17, -s*0.12, s*0.34, s*0.32, 5);
    ctx.fill();
    // 衣领/领口
    ctx.fillStyle = isRed ? '#ffe0e0' : '#d0e8ff';
    ctx.beginPath();
    ctx.moveTo(-s*0.08, -s*0.1); ctx.lineTo(0, -s*0.02); ctx.lineTo(s*0.08, -s*0.1);
    ctx.lineTo(s*0.06, -s*0.06); ctx.lineTo(0, 0); ctx.lineTo(-s*0.06, -s*0.06); ctx.closePath();
    ctx.fill();
    // 身体高光
    ctx.fillStyle = 'rgba(255,255,255,0.12)';
    ctx.fillRect(-s*0.08, -s*0.1, s*0.08, s*0.28);
    // 手臂
    ctx.fillStyle = topColor1;
    ctx.beginPath(); ctx.roundRect(-s*0.2, -s*0.08, s*0.07, s*0.25, 3); ctx.fill();
    ctx.beginPath(); ctx.roundRect(s*0.13, -s*0.08, s*0.07, s*0.25, 3); ctx.fill();
    // 手
    ctx.fillStyle = skinColor;
    ctx.beginPath(); ctx.arc(-s*0.165, s*0.19, s*0.05, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(s*0.165, s*0.19, s*0.05, 0, Math.PI*2); ctx.fill();
    // 脖子
    ctx.fillStyle = skinShadow;
    ctx.fillRect(-s*0.03, -s*0.18, s*0.06, s*0.08);
    // 头 - 带立体感
    const faceGrad = ctx.createRadialGradient(-s*0.03, -s*0.42, s*0.02, 0, -s*0.38, s*0.18);
    faceGrad.addColorStop(0, skinColor);
    faceGrad.addColorStop(1, skinShadow);
    ctx.fillStyle = faceGrad;
    ctx.beginPath();
    ctx.arc(0, -s*0.38, s*0.18, 0, Math.PI*2);
    ctx.fill();
    // 头发 - 多层次
    ctx.fillStyle = hc;
    ctx.beginPath();
    ctx.arc(0, -s*0.42, s*0.2, Math.PI*1.05, Math.PI*2.05);
    ctx.fill();
    // 刘海
    ctx.beginPath();
    ctx.arc(-s*0.04, -s*0.48, s*0.15, Math.PI*0.15, Math.PI*0.75);
    ctx.arc(s*0.04, -s*0.48, s*0.15, Math.PI*0.25, Math.PI*0.85);
    ctx.fill();
    // 侧发
    ctx.beginPath();
    ctx.arc(-s*0.16, -s*0.37, s*0.08, -0.3, 0.8);
    ctx.arc(s*0.16, -s*0.37, s*0.08, Math.PI-0.8, Math.PI+0.3);
    ctx.fill();
    // 头发高光
    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    ctx.beginPath();
    ctx.arc(-s*0.02, -s*0.5, s*0.1, Math.PI*0.1, Math.PI*0.55);
    ctx.fill();
    // 眼睛 - 更大更动漫风
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.ellipse(-s*0.06, -s*0.4, s*0.04, s*0.05, 0, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(s*0.06, -s*0.4, s*0.04, s*0.05, 0, 0, Math.PI*2); ctx.fill();
    // 瞳孔
    ctx.fillStyle = isRed ? '#4a148c' : '#0d47a1';
    ctx.beginPath(); ctx.arc(-s*0.055, -s*0.4, s*0.025, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(s*0.065, -s*0.4, s*0.025, 0, Math.PI*2); ctx.fill();
    // 高光点
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.arc(-s*0.048, -s*0.41, s*0.012, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(s*0.072, -s*0.41, s*0.012, 0, Math.PI*2); ctx.fill();
    // 嘴巴
    ctx.strokeStyle = '#d4956b'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(0, -s*0.33, s*0.025, 0.15*Math.PI, 0.85*Math.PI); ctx.stroke();
    // 腮红
    ctx.fillStyle = 'rgba(255,180,170,0.3)';
    ctx.beginPath(); ctx.ellipse(-s*0.1, -s*0.345, s*0.04, s*0.025, 0, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(s*0.1, -s*0.345, s*0.04, s*0.025, 0, 0, Math.PI*2); ctx.fill();
    ctx.restore();
  }

  function drawTree(x, y, h, r2) {
    // 树干 - 带纹理渐变
    const trunkGrad = ctx.createLinearGradient(x-6, 0, x+6, 0);
    trunkGrad.addColorStop(0, '#3d2010');
    trunkGrad.addColorStop(0.3, '#5d3a1a');
    trunkGrad.addColorStop(0.7, '#6b4226');
    trunkGrad.addColorStop(1, '#3d2010');
    ctx.fillStyle = trunkGrad;
    ctx.fillRect(x-6, y+h*0.15, 12, h*0.85);
    // 树根
    ctx.fillStyle = '#4a2812';
    ctx.beginPath(); ctx.arc(x-7, y+h*0.05, 6, 0, Math.PI*0.8); ctx.fill();
    ctx.beginPath(); ctx.arc(x+7, y+h*0.05, 6, Math.PI*0.2, Math.PI); ctx.fill();
    // 树干纹理
    ctx.strokeStyle = 'rgba(0,0,0,0.08)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(x-2, y+h*0.2); ctx.lineTo(x-1, y+h*0.6); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x+1, y+h*0.3); ctx.lineTo(x+2, y+h*0.7); ctx.stroke();
    // 树冠底层(深色)
    const greenBase = `${40+r2()*30},${110+r2()*60},${20+r2()*30}`;
    ctx.fillStyle = `rgba(${greenBase},0.95)`;
    ctx.beginPath(); ctx.arc(x, y-h*0.05, h*0.4+r2()*18, 0, Math.PI*2); ctx.fill();
    // 树冠中层
    ctx.fillStyle = `rgba(${60+r2()*40},${130+r2()*70},${30+r2()*35},0.9)`;
    ctx.beginPath(); ctx.arc(x-h*0.06, y-h*0.12, h*0.3+r2()*14, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(x+h*0.08, y-h*0.1, h*0.28+r2()*12, 0, Math.PI*2); ctx.fill();
    // 树冠顶层(亮色)
    ctx.fillStyle = `rgba(${80+r2()*50},${160+r2()*80},${40+r2()*40},0.85)`;
    ctx.beginPath(); ctx.arc(x-h*0.12, y-h*0.2, h*0.22+r2()*10, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(x+h*0.14, y-h*0.18, h*0.2+r2()*10, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(x, y-h*0.25, h*0.24+r2()*12, 0, Math.PI*2); ctx.fill();
    // 高光点
    ctx.fillStyle = `rgba(${120+r2()*60},${220+r2()*35},${80+r2()*60},0.6)`;
    ctx.beginPath(); ctx.arc(x-h*0.08, y-h*0.22, h*0.08, 0, Math.PI*2); ctx.fill();
  }

  // === 电影级后期特效函数 ===
  const grainCanvas = document.createElement('canvas');
  const grainCtx = grainCanvas.getContext('2d');
  let grainData = null;

  function generateFilmGrain(w, h) {
    grainCanvas.width = w; grainCanvas.height = h;
    const imgData = grainCtx.createImageData(w, h);
    for (let i = 0; i < imgData.data.length; i += 4) {
      const v = Math.random() * 20;
      imgData.data[i] = v;
      imgData.data[i + 1] = v;
      imgData.data[i + 2] = v;
      imgData.data[i + 3] = 255;
    }
    grainCtx.putImageData(imgData, 0, 0);
    grainData = grainCtx.getImageData(0, 0, w, h);
  }

  function applyPostProcessing(pg) {
    const W = canvas.width, H = canvas.height;
    // 1. 暗角效果(Vignette)
    const vignetteGrad = ctx.createRadialGradient(W*0.5, H*0.48, W*0.3, W*0.5, H*0.5, W*0.78);
    vignetteGrad.addColorStop(0, 'transparent');
    vignetteGrad.addColorStop(0.55, 'transparent');
    vignetteGrad.addColorStop(0.85, 'rgba(0,0,0,0.25)');
    vignetteGrad.addColorStop(1, 'rgba(0,0,0,0.55)');
    ctx.fillStyle = vignetteGrad;
    ctx.fillRect(0, 0, W, H);

    // 2. 顶部渐变(模拟电影色调)
    const topGrad = ctx.createLinearGradient(0, 0, 0, H*0.35);
    topGrad.addColorStop(0, 'rgba(10,5,30,0.15)');
    topGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = topGrad;
    ctx.fillRect(0, 0, W, H*0.35);

    // 3. 底部渐变
    const botGrad = ctx.createLinearGradient(0, H*0.6, 0, H);
    botGrad.addColorStop(0, 'transparent');
    botGrad.addColorStop(1, 'rgba(5,0,15,0.2)');
    ctx.fillStyle = botGrad;
    ctx.fillRect(0, H*0.6, W, H*0.4);

    // 4. 胶片颗粒(淡淡一层)
    if (grainData && grainData.width === W && grainData.height === H) {
      ctx.globalAlpha = 0.04;
      ctx.putImageData(grainData, 0, 0);
      ctx.globalAlpha = 1;
    }

    // 5. Cinemascope 上下黑边
    const barH = H * 0.06;
    ctx.fillStyle = 'rgba(0,0,0,0.8)';
    ctx.fillRect(0, 0, W, barH);
    ctx.fillRect(0, H - barH, W, barH);

    // 6. 微弱暖色调叠加
    ctx.fillStyle = 'rgba(255,180,100,0.02)';
    ctx.fillRect(0, 0, W, H);
  }

  let frameCount = 0;
  let startTime = Date.now();
  const duration = 15000; // 15秒

  function renderFrame() {
    if (!document.getElementById('anime-canvas')) return;
    resizeCanvas();
    if (canvas.width === 0 || canvas.height === 0) {
      overlay._animId = requestAnimationFrame(renderFrame);
      return;
    }
    frameCount++;
    const W = canvas.width;
    const H = canvas.height;
    const t = frameCount * 0.016;
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // 背景渐变
    const bgGrad = ctx.createLinearGradient(0, 0, W, H);
    colors.bg.forEach((c, i) => bgGrad.addColorStop(i / (colors.bg.length - 1), c));
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // === 场景专属绘制 ===
    switch (sceneType) {
      case 0: // 🌸 樱花树下 - 唯美春日 (电影级)
        // 天空 - 四层渐变
        const sky0 = ctx.createLinearGradient(0, 0, 0, H);
        sky0.addColorStop(0, '#ffe4ec');
        sky0.addColorStop(0.25, '#ffd1e8');
        sky0.addColorStop(0.5, '#fce4ec');
        sky0.addColorStop(1, '#c8e6c9');
        ctx.fillStyle = sky0; ctx.fillRect(0, 0, W, H);
        // 暖阳光晕
        const sunGlow0 = ctx.createRadialGradient(W*0.78, H*0.12, 10, W*0.78, H*0.12, W*0.5);
        sunGlow0.addColorStop(0, 'rgba(255,255,240,0.5)');
        sunGlow0.addColorStop(0.3, 'rgba(255,240,220,0.15)');
        sunGlow0.addColorStop(1, 'transparent');
        ctx.fillStyle = sunGlow0; ctx.fillRect(0, 0, W, H*0.7);
        // 远山层1(淡蓝灰)
        ctx.fillStyle = 'rgba(180,200,220,0.3)';
        ctx.beginPath();
        ctx.moveTo(0, H*0.55);
        ctx.quadraticCurveTo(W*0.15, H*0.35, W*0.3, H*0.44);
        ctx.quadraticCurveTo(W*0.5, H*0.28, W*0.7, H*0.4);
        ctx.quadraticCurveTo(W*0.9, H*0.3, W, H*0.42);
        ctx.lineTo(W, H*0.7); ctx.lineTo(0, H*0.7); ctx.fill();
        // 远山层2(绿)
        ctx.fillStyle = '#b5e0b5';
        ctx.beginPath();
        ctx.moveTo(0, H*0.6);
        ctx.quadraticCurveTo(W*0.2, H*0.42, W*0.45, H*0.52);
        ctx.quadraticCurveTo(W*0.7, H*0.38, W, H*0.48);
        ctx.lineTo(W, H*0.75); ctx.lineTo(0, H*0.75); ctx.fill();
        // 山间雾气
        for (let i = 0; i < 3; i++) {
          ctx.fillStyle = `rgba(255,255,255,${0.08 + i * 0.04})`;
          ctx.beginPath();
          ctx.ellipse(W*0.3 + i * W*0.2, H*0.48 + i * 10, W*0.25, 8, -0.02, 0, Math.PI * 2);
          ctx.fill();
        }
        // 河流
        const riverGrad = ctx.createLinearGradient(0, H*0.72, 0, H);
        riverGrad.addColorStop(0, 'rgba(130,200,255,0.45)');
        riverGrad.addColorStop(0.4, 'rgba(100,170,240,0.3)');
        riverGrad.addColorStop(1, 'rgba(60,120,200,0.15)');
        ctx.fillStyle = riverGrad;
        ctx.beginPath();
        ctx.moveTo(W*0.28, H*0.72);
        ctx.bezierCurveTo(W*0.38, H*0.7, W*0.45, H*0.68, W*0.52, H*0.74);
        ctx.bezierCurveTo(W*0.58, H*0.68, W*0.65, H*0.7, W*0.72, H*0.75);
        ctx.lineTo(W*0.78, H); ctx.lineTo(W*0.22, H); ctx.fill();
        // 水面波光
        for (let i = 0; i < 15; i++) {
          ctx.fillStyle = `rgba(255,255,255,${0.1 + Math.sin(t * 3 + i) * 0.08})`;
          ctx.beginPath();
          ctx.arc(W*0.32 + i * W*0.03, H*0.78 + Math.sin(t * 2 + i) * 3, 1 + Math.random() * 2, 0, Math.PI * 2);
          ctx.fill();
        }
        // 大樱花树 - 更粗壮
        const trunkG0 = ctx.createLinearGradient(W*0.45, 0, W*0.55, 0);
        trunkG0.addColorStop(0, '#3d1a0a'); trunkG0.addColorStop(0.5, '#5d3020'); trunkG0.addColorStop(1, '#3d1a0a');
        ctx.fillStyle = trunkG0;
        ctx.fillRect(W*0.43, H*0.16, W*0.14, H*0.6);
        // 树枝
        ctx.strokeStyle = '#4a2010'; ctx.lineWidth = 6;
        ctx.beginPath(); ctx.moveTo(W*0.48, H*0.28); ctx.quadraticCurveTo(W*0.3, H*0.18, W*0.2, H*0.2); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(W*0.52, H*0.32); ctx.quadraticCurveTo(W*0.7, H*0.15, W*0.82, H*0.22); ctx.stroke();
        ctx.lineWidth = 4;
        ctx.beginPath(); ctx.moveTo(W*0.47, H*0.22); ctx.quadraticCurveTo(W*0.35, H*0.12, W*0.28, H*0.08); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(W*0.53, H*0.24); ctx.quadraticCurveTo(W*0.65, H*0.1, W*0.75, H*0.12); ctx.stroke();
        // 树冠大团
        ctx.fillStyle = 'rgba(255,200,220,0.7)';
        ctx.beginPath(); ctx.arc(W*0.48, H*0.08, W*0.3, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = 'rgba(255,180,200,0.8)';
        ctx.beginPath(); ctx.arc(W*0.55, H*0.06, W*0.25, 0, Math.PI*2); ctx.fill();
        // 大量樱花簇
        for (let i = 0; i < 25; i++) {
          const cx = W*0.22 + rng() * W*0.55, cy = H*0.02 + rng() * H*0.2;
          const r = 8 + rng() * 14;
          const alpha = 0.5 + rng() * 0.5;
          ctx.fillStyle = `rgba(${245 + rng() * 10},${170 + rng() * 60},${195 + rng() * 40},${alpha})`;
          ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
          // 花朵高光
          ctx.fillStyle = `rgba(255,255,255,${alpha * 0.3})`;
          ctx.beginPath(); ctx.arc(cx - r * 0.2, cy - r * 0.2, r * 0.35, 0, Math.PI * 2); ctx.fill();
        }
        // 树冠光斑(阳光透过花瓣)
        for (let i = 0; i < 12; i++) {
          const lx = W*0.3 + rng() * W*0.4, ly = H*0.03 + rng() * H*0.22;
          ctx.fillStyle = `rgba(255,255,200,${0.15 + rng() * 0.15})`;
          ctx.beginPath(); ctx.arc(lx, ly, 3 + rng() * 5, 0, Math.PI * 2); ctx.fill();
        }
        // 草地 - 多层
        ctx.fillStyle = '#a5d6a7'; ctx.fillRect(0, H*0.72, W, H*0.06);
        ctx.fillStyle = '#8bc78b'; ctx.fillRect(0, H*0.75, W, H*0.25);
        // 草丛纹理
        for (let i = 0; i < 40; i++) {
          ctx.fillStyle = `rgba(${80+rng()*60},${170+rng()*60},${60+rng()*50},0.5)`;
          const gx = rng() * W, gy = H*0.73 + rng() * H*0.2;
          ctx.beginPath(); ctx.arc(gx, gy, 2 + rng() * 5, 0, Math.PI * 2); ctx.fill();
        }
        // 小路(土色)
        const pathG = ctx.createLinearGradient(0, H*0.74, 0, H*0.84);
        pathG.addColorStop(0, '#d7ccc8'); pathG.addColorStop(1, '#bcaaa4');
        ctx.fillStyle = pathG;
        ctx.beginPath();
        ctx.moveTo(W*0.12, H*0.76);
        ctx.bezierCurveTo(W*0.25, H*0.78, W*0.35, H*0.74, W*0.5, H*0.76);
        ctx.lineTo(W*0.53, H*0.82);
        ctx.bezierCurveTo(W*0.35, H*0.8, W*0.25, H*0.84, W*0.1, H*0.84);
        ctx.fill();
        // 两棵小树
        drawTree(W*0.08, H*0.55, 70, rng);
        drawTree(W*0.88, H*0.58, 60, rng);
        // 角色
        drawCharacter(W*0.3, H*0.72, 65, -0.06, rng, '#2c1810');
        drawCharacter(W*0.58, H*0.7, 55, 0.04, rng, '#6b3a5b');
        break;

      case 1: // 🌃 夜城霓虹 - 雨夜都市(电影级)
        const sky1 = ctx.createLinearGradient(0, 0, 0, H);
        sky1.addColorStop(0, '#020010');
        sky1.addColorStop(0.3, '#06062a');
        sky1.addColorStop(0.6, '#0d0838');
        sky1.addColorStop(1, '#0a0618');
        ctx.fillStyle = sky1; ctx.fillRect(0, 0, W, H);
        // 巨型月亮光晕
        const moonGlow = ctx.createRadialGradient(W*0.78, H*0.16, 12, W*0.78, H*0.16, 100);
        moonGlow.addColorStop(0, 'rgba(255,238,180,0.35)');
        moonGlow.addColorStop(0.3, 'rgba(255,220,150,0.12)');
        moonGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = moonGlow; ctx.fillRect(0, 0, W, H*0.6);
        // 月亮本体
        ctx.fillStyle = '#fffde8';
        ctx.shadowColor = '#ffeaa7'; ctx.shadowBlur = 30;
        ctx.beginPath(); ctx.arc(W*0.78, H*0.16, 32, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#0a0620';
        ctx.beginPath(); ctx.arc(W*0.81, H*0.13, 28, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
        // 薄云飘过
        for (let i = 0; i < 3; i++) {
          const cx = (W * 0.2 + i * W * 0.3 + t * 4) % (W + 100) - 50;
          ctx.fillStyle = 'rgba(255,255,255,0.06)';
          ctx.beginPath();
          ctx.ellipse(cx, H * 0.1 + i * 8, 35 + i * 15, 4, 0, 0, Math.PI * 2);
          ctx.fill();
        }
        // 远处建筑群(深层)
        for (let i = 0; i < 8; i++) {
          const bx = i * W * 0.13;
          const bh = H * 0.2 + rng() * H * 0.3;
          ctx.fillStyle = `rgba(8,${2+rng()*4},${12+rng()*8},0.9)`;
          ctx.fillRect(bx, H - bh, W * 0.12 + rng() * W * 0.03, bh);
        }
        // 主建筑群(前排)
        for (let i = 0; i < 12; i++) {
          const bx = i * W * 0.088;
          const bw = W * 0.075 + rng() * W * 0.04;
          const bh = H * 0.3 + rng() * H * 0.48;
          const bGrad = ctx.createLinearGradient(bx, 0, bx + bw, 0);
          bGrad.addColorStop(0, `hsl(255,8%,${4+rng()*6}%)`);
          bGrad.addColorStop(1, `hsl(255,8%,${6+rng()*8}%)`);
          ctx.fillStyle = bGrad;
          ctx.fillRect(bx, H - bh, bw, bh);
          // 建筑边缘高光
          ctx.fillStyle = 'rgba(100,100,200,0.08)';
          ctx.fillRect(bx, H - bh, 1, bh);
          // 天线
          if (rng() > 0.6) {
            ctx.fillStyle = '#111';
            ctx.fillRect(bx + bw * 0.4, H - bh - 15, 2, 15);
            ctx.fillStyle = '#ff0000';
            ctx.beginPath();
            ctx.arc(bx + bw * 0.4 + 1, H - bh - 18 + Math.sin(t * 4 + i) * 2, 2.5, 0, Math.PI * 2);
            ctx.fill();
          }
          // 窗户灯光(多层颜色)
          for (let wy = H - bh + 6; wy < H - 8; wy += 12) {
            if (rng() > 0.3) {
              const wCol = Math.random();
              if (wCol < 0.6) {
                ctx.fillStyle = `rgba(${230+rng()*25},${200+rng()*55},${140+rng()*115},${0.35+rng()*0.65})`;
              } else if (wCol < 0.85) {
                ctx.fillStyle = `rgba(${140+rng()*115},${180+rng()*75},${230+rng()*25},${0.4+rng()*0.6})`;
              } else {
                ctx.fillStyle = `rgba(${230+rng()*25},${100+rng()*100},${200+rng()*55},${0.35+rng()*0.55})`;
              }
              ctx.fillRect(bx + 3, wy, bw * 0.25, 5);
              ctx.fillRect(bx + bw * 0.45, wy + bw * 0.01, bw * 0.25, 5);
              ctx.fillRect(bx + bw * 0.7, wy + (Math.sin(i) > 0 ? 1 : -1), bw * 0.2, 6);
            }
          }
        }
        // 霓虹广告牌
        const neonColors = ['#ff006e', '#00f5ff', '#ffea00', '#ff3c78', '#00ff88'];
        const neonTexts = ['BAR', 'OPEN', '24H', 'CLUB', 'HOTEL', 'CAFE', 'LIVE', 'SALE'];
        for (let i = 0; i < 8; i++) {
          const nc = neonColors[i % 5];
          const ny = H * 0.22 + Math.sin(t * 2.5 + i) * 6;
          const nx = W * 0.03 + i * W * 0.12;
          // 招牌底板
          ctx.fillStyle = 'rgba(0,0,0,0.8)';
          ctx.fillRect(nx - 1, ny - 1, W * 0.11, 18);
          // 霓虹管
          ctx.fillStyle = nc;
          ctx.shadowColor = nc;
          ctx.shadowBlur = 15 + Math.sin(t * 3 + i) * 6;
          ctx.fillRect(nx, ny, W * 0.1, 2);
          ctx.fillRect(nx, ny + 14, W * 0.1, 2);
          ctx.fillRect(nx, ny, 2, 16);
          ctx.fillRect(nx + W * 0.1, ny, 2, 16);
          ctx.shadowBlur = 0;
          ctx.fillStyle = '#fff';
          ctx.font = `bold ${6+rng()*3}px monospace`;
          ctx.fillText(neonTexts[i], nx + 4, ny + 12);
        }
        // 湿地面反光(雨后街道)
        const reflGrad = ctx.createLinearGradient(0, H * 0.72, 0, H);
        reflGrad.addColorStop(0, 'rgba(0,0,30,0.3)');
        reflGrad.addColorStop(0.1, 'rgba(0,180,255,0.08)');
        reflGrad.addColorStop(0.3, 'rgba(255,0,150,0.05)');
        reflGrad.addColorStop(0.6, 'rgba(100,0,200,0.03)');
        reflGrad.addColorStop(1, 'rgba(0,0,20,0.5)');
        ctx.fillStyle = reflGrad;
        ctx.fillRect(0, H * 0.72, W, H * 0.28);
        // 地面霓虹倒影
        for (let i = 0; i < 6; i++) {
          const rx = W * 0.08 + i * W * 0.17;
          const col = neonColors[i % 5];
          const rGrad = ctx.createLinearGradient(rx, H * 0.74, rx, H);
          rGrad.addColorStop(0, col.replace(')', ',0.2)').replace('rgb', 'rgba'));
          rGrad.addColorStop(1, 'transparent');
          ctx.fillStyle = rGrad;
          ctx.fillRect(rx - 5, H * 0.74, 20 + Math.sin(i) * 10, H * 0.26);
        }
        // 路灯
        for (let i = 0; i < 3; i++) {
          const lx = W * 0.15 + i * W * 0.35;
          ctx.strokeStyle = '#333'; ctx.lineWidth = 3;
          ctx.beginPath(); ctx.moveTo(lx, H * 0.55); ctx.lineTo(lx, H * 0.42); ctx.stroke();
          ctx.fillStyle = '#ffeaa7';
          ctx.shadowColor = '#ffeaa7'; ctx.shadowBlur = 20;
          ctx.beginPath(); ctx.arc(lx, H * 0.41, 4, 0, Math.PI * 2); ctx.fill();
          ctx.shadowBlur = 0;
          // 光锥
          const coneG = ctx.createLinearGradient(lx, H * 0.42, lx, H * 0.7);
          coneG.addColorStop(0, 'rgba(255,234,167,0.12)');
          coneG.addColorStop(1, 'transparent');
          ctx.fillStyle = coneG;
          ctx.beginPath(); ctx.moveTo(lx - 25, H * 0.42); ctx.lineTo(lx + 25, H * 0.42);
          ctx.lineTo(lx + 10, H * 0.7); ctx.lineTo(lx - 10, H * 0.7); ctx.fill();
        }
        break;

      case 2: // ⚔️ 战斗对决 - 热血激战(电影级)
        // 天空
        const sky2 = ctx.createLinearGradient(0, 0, 0, H);
        sky2.addColorStop(0, '#1a0000');
        sky2.addColorStop(0.3, '#3d0005');
        sky2.addColorStop(0.6, '#8b1a00');
        sky2.addColorStop(1, '#1a0002');
        ctx.fillStyle = sky2; ctx.fillRect(0, 0, W, H);
        // 浓厚的云层
        for (let i = 0; i < 8; i++) {
          ctx.fillStyle = `rgba(${20+rng()*30},${rng()*5},${rng()*5},0.4)`;
          ctx.beginPath();
          ctx.arc(W * 0.1 + i * W * 0.12, H * 0.05 + rng() * H * 0.12, 18 + rng() * 25, 0, Math.PI * 2);
          ctx.fill();
        }
        // 废墟建筑群
        for (let i = 0; i < 7; i++) {
          const bx = W * 0.03 + i * W * 0.15;
          const bw = W * 0.07 + rng() * W * 0.09;
          const bh = H * 0.15 + rng() * H * 0.4;
          ctx.fillStyle = `rgba(30,${3+rng()*10},${2+rng()*5},0.8)`;
          ctx.fillRect(bx, H * 0.5 + rng() * H * 0.15, bw, bh);
          // 碎砖纹理
          ctx.strokeStyle = 'rgba(0,0,0,0.3)'; ctx.lineWidth = 1;
          for (let j = 0; j < 3; j++) {
            ctx.beginPath();
            ctx.moveTo(bx + rng() * bw, H * 0.5 + rng() * H * 0.15 + rng() * bh);
            ctx.lineTo(bx + rng() * bw, H * 0.5 + rng() * H * 0.15 + rng() * bh);
            ctx.stroke();
          }
          // 火焰在废墟中
          if (rng() > 0.6) {
            const fy = H * 0.5 + rng() * H * 0.15 + bh;
            const flameG = ctx.createLinearGradient(bx + bw / 2, fy, bx + bw / 2, fy - 15);
            flameG.addColorStop(0, 'transparent');
            flameG.addColorStop(0.4, 'rgba(255,100,0,0.5)');
            flameG.addColorStop(1, 'rgba(255,200,0,0.3)');
            ctx.fillStyle = flameG;
            ctx.beginPath();
            ctx.moveTo(bx + bw / 2 - 6, fy);
            ctx.quadraticCurveTo(bx + bw / 2 + Math.sin(t * 6 + i) * 3, fy - 18, bx + bw / 2 + 3, fy);
            ctx.fill();
          }
        }
        // 地面裂痕+岩浆效果
        for (let i = 0; i < 8; i++) {
          ctx.strokeStyle = `rgba(255,${80+i*20},0,0.3)`; ctx.lineWidth = 2 + i * 0.3;
          ctx.beginPath();
          const cx = W * 0.05 + i * W * 0.12;
          ctx.moveTo(cx, H * 0.68 + rng() * H * 0.15);
          for (let j = 0; j < 4; j++) {
            ctx.lineTo(cx + (j - 1.5) * 10 + rng() * 15, H * 0.68 + (j + 1) * 15 + rng() * 10);
          }
          ctx.stroke();
        }
        // 能量冲击波(多层)
        for (let i = 0; i < 8; i++) {
          const r = 40 + t * 90 + i * 50;
          const alpha = Math.max(0, 1 - (r % 280) / 280);
          const colors = ['rgba(255,200,0,', 'rgba(255,100,0,', 'rgba(255,50,0,'];
          ctx.strokeStyle = colors[i % 3] + alpha * 0.5 + ')';
          ctx.lineWidth = 2.5 + i * 0.6;
          ctx.beginPath();
          ctx.arc(W * 0.5, H * 0.36, r % 280, 0, Math.PI * 2);
          ctx.stroke();
        }
        // 速度线(战斗动态感)
        for (let i = 0; i < 30; i++) {
          const alpha = 0.03 + Math.sin(t * 6 + i * 0.5) * 0.03;
          ctx.strokeStyle = `rgba(255,255,220,${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          const lx = (i * W * 0.04 + t * 120) % W;
          ctx.moveTo(lx, 0);
          ctx.lineTo(lx - 70, H);
          ctx.stroke();
        }
        // 两个战士(发光)
        ctx.shadowColor = 'rgba(255,80,20,0.7)'; ctx.shadowBlur = 22;
        drawCharacter(W * 0.22, H * 0.58, 80, 0.15, rng, '#ff4444');
        ctx.shadowColor = 'rgba(30,100,255,0.7)'; ctx.shadowBlur = 22;
        drawCharacter(W * 0.78, H * 0.58, 80, -0.15, rng, '#4488ff');
        ctx.shadowBlur = 0;
        // 角色残影
        ctx.globalAlpha = 0.15;
        ctx.shadowColor = 'rgba(255,80,20,0.3)'; ctx.shadowBlur = 10;
        drawCharacter(W * 0.2 - t * 5, H * 0.58, 80, 0.15, rng, '#ff4444');
        ctx.shadowColor = 'rgba(30,100,255,0.3)'; ctx.shadowBlur = 10;
        drawCharacter(W * 0.82 + t * 5, H * 0.58, 80, -0.15, rng, '#4488ff');
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
        // 碰撞火花(大量)
        for (let i = 0; i < 35; i++) {
          const sparkPhase = (t * 12 + i * 0.4) % (Math.PI * 2);
          const color = i % 4 === 0 ? '#ffd700' : i % 4 === 1 ? '#ff4500' : i % 4 === 2 ? '#ff6347' : '#ffe4b5';
          const sx = W * 0.5 + Math.cos(sparkPhase) * (20 + Math.random() * 35);
          const sy = H * 0.32 + Math.sin(sparkPhase) * (15 + Math.random() * 25);
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(sx, sy, 1.5 + Math.random() * 3, 0, Math.PI * 2);
          ctx.fill();
          // 火花尾迹
          ctx.strokeStyle = color.replace(')', ',0.4)').replace('rgb', 'rgba');
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.lineTo(sx - 6 - Math.random() * 8, sy - 5 - Math.random() * 8);
          ctx.stroke();
        }
        // 冲击波中心光柱
        const beamG = ctx.createRadialGradient(W * 0.5, H * 0.36, 3, W * 0.5, H * 0.36, 60);
        beamG.addColorStop(0, 'rgba(255,255,200,0.5)');
        beamG.addColorStop(0.3, 'rgba(255,200,100,0.2)');
        beamG.addColorStop(1, 'transparent');
        ctx.fillStyle = beamG;
        ctx.fillRect(W * 0.35, H * 0.15, W * 0.3, H * 0.5);
        break;

      case 3: // ✨ 星空下 - 银河之夜(电影级)
        const sky3 = ctx.createLinearGradient(0, 0, 0, H);
        sky3.addColorStop(0, '#020018');
        sky3.addColorStop(0.3, '#050530');
        sky3.addColorStop(0.7, '#0a0a45');
        sky3.addColorStop(1, '#151560');
        ctx.fillStyle = sky3; ctx.fillRect(0, 0, W, H);
        // 银河带(多层，更丰富)
        for (let layer = 0; layer < 3; layer++) {
          for (let i = 0; i < 60; i++) {
            const col = layer === 0 ? 'rgba(140,130,255,' : layer === 1 ? 'rgba(180,180,255,' : 'rgba(200,200,255,';
            const alpha = (0.02 + Math.sin(i * 0.2) * 0.03 + layer * 0.015);
            ctx.fillStyle = col + alpha + ')';
            ctx.beginPath();
            ctx.ellipse(
              W * 0.3 + i * W * 0.012,
              H * 0.2 + Math.sin(i * 0.35 + layer) * H * 0.2,
              4 + Math.random() * 10,
              2 + Math.random() * 3,
              0.4 + layer * 0.1,
              0, Math.PI * 2
            );
            ctx.fill();
          }
        }
        // 闪烁星星(多层次)
        for (let i = 0; i < 80; i++) {
          const sx = (i * 137 + frameCount * 0.1) % W;
          const sy = (i * 83) % (H * 0.6);
          const twinkle = 0.25 + Math.sin(frameCount * 0.03 + i) * 0.5;
          const starCol = i % 5 === 0 ? 'rgba(255,220,150,' : i % 5 === 1 ? 'rgba(180,200,255,' : 'rgba(255,255,255,';
          ctx.fillStyle = starCol + twinkle + ')';
          const sz = 0.6 + (i % 4) * 0.7;
          ctx.beginPath(); ctx.arc(sx, sy, sz, 0, Math.PI * 2); ctx.fill();
          // 亮星十字光芒
          if (twinkle > 0.75) {
            ctx.fillStyle = `rgba(255,255,255,${twinkle * 0.2})`;
            ctx.beginPath(); ctx.arc(sx, sy, 4 + sz, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = `rgba(255,255,255,${twinkle * 0.3})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath(); ctx.moveTo(sx - 8, sy); ctx.lineTo(sx + 8, sy); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(sx, sy - 8); ctx.lineTo(sx, sy + 8); ctx.stroke();
          }
        }
        // 星座连线
        const constellations = [
          [{ x: W * 0.15, y: H * 0.08 }, { x: W * 0.18, y: H * 0.12 }, { x: W * 0.22, y: H * 0.1 }],
          [{ x: W * 0.7, y: H * 0.05 }, { x: W * 0.74, y: H * 0.1 }, { x: W * 0.78, y: H * 0.06 }, { x: W * 0.8, y: H * 0.13 }]
        ];
        constellations.forEach(cons => {
          ctx.strokeStyle = 'rgba(255,255,255,0.12)'; ctx.lineWidth = 0.5;
          ctx.beginPath(); ctx.moveTo(cons[0].x, cons[0].y);
          for (let i = 1; i < cons.length; i++) ctx.lineTo(cons[i].x, cons[i].y);
          ctx.stroke();
        });
        // 远山剪影
        ctx.fillStyle = '#050515';
        ctx.beginPath();
        ctx.moveTo(0, H);
        ctx.quadraticCurveTo(W * 0.15, H * 0.48, W * 0.35, H * 0.55);
        ctx.quadraticCurveTo(W * 0.55, H * 0.38, W * 0.7, H * 0.5);
        ctx.quadraticCurveTo(W * 0.88, H * 0.35, W, H * 0.45);
        ctx.lineTo(W, H); ctx.fill();
        // 山上的树林
        for (let i = 0; i < 7; i++) {
          drawTree(W * 0.15 + i * W * 0.13, H * 0.5 + rng() * H * 0.1, 35 + rng() * 50, rng);
        }
        // 流星(带尾迹)
        if (frameCount % 110 < 90) {
          const mx = (frameCount * 2.8) % W;
          const my = H * 0.05 + (frameCount * 0.2) % (H * 0.15);
          const mgrad = ctx.createLinearGradient(mx, my, mx - 100, my + 35);
          mgrad.addColorStop(0, 'rgba(255,255,255,0.9)');
          mgrad.addColorStop(0.3, 'rgba(255,255,200,0.4)');
          mgrad.addColorStop(1, 'transparent');
          ctx.strokeStyle = mgrad; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.moveTo(mx, my); ctx.lineTo(mx - 100, my + 35); ctx.stroke();
          ctx.fillStyle = '#fff';
          ctx.beginPath(); ctx.arc(mx, my, 2.5, 0, Math.PI * 2); ctx.fill();
        }
        // 第二个流星
        if ((frameCount + 55) % 130 < 100) {
          const mx2 = ((frameCount + 55) * 2.2) % W;
          const my2 = H * 0.02;
          const mgrad2 = ctx.createLinearGradient(mx2, my2, mx2 - 70, my2 + 25);
          mgrad2.addColorStop(0, 'rgba(200,220,255,0.7)');
          mgrad2.addColorStop(1, 'transparent');
          ctx.strokeStyle = mgrad2; ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.moveTo(mx2, my2); ctx.lineTo(mx2 - 70, my2 + 25); ctx.stroke();
          ctx.fillStyle = '#ccddff';
          ctx.beginPath(); ctx.arc(mx2, my2, 2, 0, Math.PI * 2); ctx.fill();
        }
        // 角色
        drawCharacter(W * 0.48, H * 0.62, 50, 0, rng, '#2c1810');
        // 水面倒影
        ctx.fillStyle = 'rgba(10, 10, 40, 0.45)'; ctx.fillRect(0, H * 0.68, W, H * 0.04);
        const waterGrad = ctx.createLinearGradient(0, H * 0.72, 0, H);
        waterGrad.addColorStop(0, 'rgba(20, 20, 60, 0.3)');
        waterGrad.addColorStop(0.5, 'rgba(15, 15, 45, 0.4)');
        waterGrad.addColorStop(1, 'rgba(10, 10, 30, 0.6)');
        ctx.fillStyle = waterGrad; ctx.fillRect(0, H * 0.72, W, H * 0.28);
        // 水面星星倒影
        for (let i = 0; i < 15; i++) {
          const rx = W * 0.1 + i * W * 0.06;
          ctx.fillStyle = `rgba(255,255,255,${0.08+Math.sin(t*2+i)*0.06})`;
          ctx.beginPath();
          ctx.ellipse(rx, H*0.74+Math.sin(t*3+i)*3, 2+Math.random()*4, 0.5, 0, 0, Math.PI*2);
          ctx.fill();
        }
        break;

      case 4: // 🌅 海边黄昏 - 夏日海岸(电影级)
        const sky4 = ctx.createLinearGradient(0, 0, 0, H);
        sky4.addColorStop(0, '#7b68ee');
        sky4.addColorStop(0.12, '#ff7eb3');
        sky4.addColorStop(0.25, '#ff9a76');
        sky4.addColorStop(0.4, '#ffb347');
        sky4.addColorStop(0.55, '#ff7e5f');
        sky4.addColorStop(0.7, '#00b4db');
        sky4.addColorStop(0.85, '#0083b0');
        sky4.addColorStop(1, '#005580');
        ctx.fillStyle = sky4; ctx.fillRect(0, 0, W, H);
        // 彩色云彩层
        for (let layer = 0; layer < 2; layer++) {
          for (let i = 0; i < 8; i++) {
            const cx = (W * 0.05 + i * W * 0.15 + t * (2 + layer) + layer * W * 0.05) % (W + 120) - 60;
            const cy = H * 0.06 + Math.sin(i * 1.5) * H * 0.06 + layer * H * 0.05;
            const col = layer === 0
              ? `rgba(${255-i*8},${180+i*8},${120+i*10},0.2)`
              : `rgba(${255-i*12},${200+i*6},${150+i*8},0.12)`;
            ctx.fillStyle = col;
            ctx.beginPath();
            ctx.ellipse(cx, cy, 35 + rng() * 20, 6 + rng() * 8, -0.02, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(cx + 14, cy - 4, 16 + rng() * 10, 4 + rng() * 4, 0, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        // 太阳(更大更绚烂)
        const sunG = ctx.createRadialGradient(W * 0.5, H * 0.38, 6, W * 0.5, H * 0.38, 140);
        sunG.addColorStop(0, '#ffffff');
        sunG.addColorStop(0.05, '#fffde8');
        sunG.addColorStop(0.15, '#fff5c0');
        sunG.addColorStop(0.35, '#ffd700');
        sunG.addColorStop(0.6, '#ff8c00');
        sunG.addColorStop(0.8, '#ff440088');
        sunG.addColorStop(1, 'transparent');
        ctx.fillStyle = sunG;
        ctx.beginPath(); ctx.arc(W * 0.5, H * 0.38, 140, 0, Math.PI * 2); ctx.fill();
        // 太阳高光中心
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#ffeaa7'; ctx.shadowBlur = 35;
        ctx.beginPath(); ctx.arc(W * 0.5, H * 0.38, 14, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
        // 丁达尔光线(径向)
        for (let i = 0; i < 16; i++) {
          const angle = (i / 16) * Math.PI * 2 + t * 0.02;
          const rayG = ctx.createLinearGradient(
            W * 0.5, H * 0.38,
            W * 0.5 + Math.cos(angle) * W * 0.5, H * 0.38 + Math.sin(angle) * H * 0.5
          );
          rayG.addColorStop(0, 'rgba(255,255,200,0.08)');
          rayG.addColorStop(1, 'transparent');
          ctx.strokeStyle = rayG;
          ctx.lineWidth = 4 + Math.random() * 8;
          ctx.beginPath();
          ctx.moveTo(W * 0.5 + Math.cos(angle) * 20, H * 0.38 + Math.sin(angle) * 20);
          ctx.lineTo(W * 0.5 + Math.cos(angle) * W * 0.5, H * 0.38 + Math.sin(angle) * H * 0.5);
          ctx.stroke();
        }
        // 海面波浪(含落日倒影)
        for (let i = 0; i < 10; i++) {
          const yBase = H * 0.55 + i * 12;
          const alpha = 0.5 - i * 0.05;
          ctx.strokeStyle = i < 3
            ? `rgba(255,${200-i*30},${80+i*20},${alpha})`
            : `rgba(${140-i*12},${210+i*3},${100+i*12},${alpha})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          for (let x = 0; x < W; x += 3) {
            const y = yBase + Math.sin(x * 0.03 + t * 2.5 + i * 0.7) * 4 + Math.sin(x * 0.05 + t * 4 + i) * 2.5;
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
        // 落日水中倒影(光柱)
        const reflG = ctx.createLinearGradient(W * 0.5, H * 0.55, W * 0.5, H);
        reflG.addColorStop(0, 'rgba(255,200,100,0.5)');
        reflG.addColorStop(0.3, 'rgba(255,150,50,0.2)');
        reflG.addColorStop(1, 'transparent');
        ctx.fillStyle = reflG;
        ctx.fillRect(W * 0.43, H * 0.55, W * 0.14, H * 0.45);
        // 沙滩
        const beachG = ctx.createLinearGradient(0, H * 0.62, 0, H);
        beachG.addColorStop(0, '#f5deb3');
        beachG.addColorStop(0.15, '#deb887');
        beachG.addColorStop(1, '#c4a265');
        ctx.fillStyle = beachG; ctx.fillRect(0, H * 0.62, W, H * 0.38);
        // 沙滩纹理
        for (let i = 0; i < 30; i++) {
          ctx.fillStyle = `rgba(210,180,140,0.3)`;
          ctx.beginPath();
          ctx.arc(rng() * W, H * 0.62 + rng() * H * 0.35, 2 + rng() * 8, 0, Math.PI * 2);
          ctx.fill();
        }
        // 波浪泡沫边
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        for (let x = 0; x < W; x += 6) {
          const fy = H * 0.6 + Math.sin(x * 0.08 + t * 3) * 4;
          ctx.beginPath(); ctx.ellipse(x, fy, 5, 2, 0, 0, Math.PI * 2); ctx.fill();
        }
        // 棕榈树(更精致)
        for (let i = 0; i < 3; i++) {
          const px = W * 0.12 + i * W * 0.4;
          ctx.fillStyle = '#4e342e'; ctx.fillRect(px - 3, H * 0.5, 6, H * 0.22);
          // 树叶(多层)
          for (let j = 0; j < 5; j++) {
            const la = (j / 5) * Math.PI * 2 + 1.2;
            ctx.fillStyle = j % 2 === 0 ? '#2e7d32' : '#388e3c';
            ctx.beginPath();
            ctx.moveTo(px, H * 0.5 - 5);
            ctx.quadraticCurveTo(px + Math.cos(la) * 22, H * 0.46 + Math.sin(la) * 12, px + Math.cos(la) * 28, H * 0.48 + Math.sin(la) * 16);
            ctx.quadraticCurveTo(px + Math.cos(la) * 14, H * 0.44, px, H * 0.5 - 5);
            ctx.fill();
          }
          ctx.fillStyle = '#1b5e20';
          ctx.beginPath(); ctx.arc(px, H * 0.47, 10 + rng() * 6, 0, Math.PI * 2); ctx.fill();
        }
        // 海鸥群
        for (let i = 0; i < 7; i++) {
          const bx = (W * 0.1 + i * W * 0.15 + t * 30) % W;
          const by = H * 0.08 + Math.sin(t * 1.8 + i) * 14;
          ctx.strokeStyle = '#2c3e50'; ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(bx, by, 5, Math.PI * 0.1, Math.PI * 0.9, false);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(bx - 2, by - 1, 4, Math.PI * 0.15, Math.PI * 0.85, false);
          ctx.stroke();
        }
        // 帆船
        const boatX = W * 0.75 + Math.sin(t * 0.3) * 30;
        ctx.fillStyle = '#5d4037'; ctx.beginPath();
        ctx.moveTo(boatX - 10, H * 0.52); ctx.lineTo(boatX + 10, H * 0.52);
        ctx.lineTo(boatX + 6, H * 0.54); ctx.lineTo(boatX - 6, H * 0.54); ctx.fill();
        ctx.fillStyle = '#ffebee'; ctx.beginPath();
        ctx.moveTo(boatX, H * 0.48); ctx.lineTo(boatX, H * 0.52);
        ctx.lineTo(boatX + 8, H * 0.52); ctx.fill();
        // 角色
        drawCharacter(W * 0.42, H * 0.64, 52, 0, rng, '#2c1810');
        break;

      case 5: // 🏫 校园街道 - 青春日常(电影级)
        const sky5 = ctx.createLinearGradient(0, 0, 0, H * 0.62);
        sky5.addColorStop(0, '#48a9f0'); sky5.addColorStop(0.4, '#7ec8f8'); sky5.addColorStop(1, '#bbdefb');
        ctx.fillStyle = sky5; ctx.fillRect(0, 0, W, H * 0.62);
        // 柔和阳光
        const sunGlow5 = ctx.createRadialGradient(W * 0.72, H * 0.08, 8, W * 0.72, H * 0.08, 100);
        sunGlow5.addColorStop(0, 'rgba(255,255,240,0.5)');
        sunGlow5.addColorStop(0.3, 'rgba(255,248,230,0.12)');
        sunGlow5.addColorStop(1, 'transparent');
        ctx.fillStyle = sunGlow5; ctx.fillRect(0, 0, W, H * 0.6);
        // 动态白云
        for (let i = 0; i < 6; i++) {
          const cx = (W * 0.08 + i * W * 0.18 + t * 3) % (W + 100) - 50;
          const cy = H * 0.06 + Math.sin(i * 1.3) * H * 0.06;
          ctx.fillStyle = 'rgba(255,255,255,0.7)';
          ctx.beginPath(); ctx.arc(cx, cy, 16 + rng() * 10, 0, Math.PI * 2); ctx.fill();
          ctx.beginPath(); ctx.arc(cx + 14, cy - 3, 13 + rng() * 8, 0, Math.PI * 2); ctx.fill();
          ctx.beginPath(); ctx.arc(cx - 10, cy + 1, 11, 0, Math.PI * 2); ctx.fill();
          // 云高光
          ctx.fillStyle = 'rgba(255,255,255,0.5)';
          ctx.beginPath(); ctx.arc(cx - 2, cy - 4, 8, 0, Math.PI * 2); ctx.fill();
        }
        // 远山
        ctx.fillStyle = '#b0bec5'; ctx.beginPath();
        ctx.moveTo(0, H * 0.5);
        ctx.quadraticCurveTo(W * 0.25, H * 0.38, W * 0.5, H * 0.45);
        ctx.quadraticCurveTo(W * 0.75, H * 0.32, W, H * 0.42);
        ctx.lineTo(W, H * 0.6); ctx.lineTo(0, H * 0.6); ctx.fill();
        // 校门
        ctx.fillStyle = '#8d6e63'; ctx.fillRect(W * 0.15, H * 0.32, W * 0.7, H * 0.18);
        ctx.fillStyle = '#6d4c41'; ctx.fillRect(W * 0.35, H * 0.35, W * 0.3, H * 0.15);
        ctx.fillStyle = '#5d4037'; ctx.fillRect(W * 0.32, H * 0.22, W * 0.36, H * 0.06);
        // 校名牌
        ctx.fillStyle = '#fff'; ctx.fillRect(W * 0.38, H * 0.28, W * 0.24, H * 0.04);
        ctx.fillStyle = '#333'; ctx.font = 'bold ' + Math.max(6, W * 0.015) + 'px sans-serif';
        ctx.textAlign = 'center'; ctx.fillText('桜 丘 高 校', W * 0.5, H * 0.315);
        ctx.textAlign = 'start';
        // 教学楼
        ctx.fillStyle = '#f5f5f5'; ctx.fillRect(W * 0.08, H * 0.06, W * 0.84, H * 0.4);
        ctx.fillStyle = '#e8e8e8'; ctx.fillRect(W * 0.12, H * 0.06, W * 0.76, H * 0.05);
        // 主楼阴影
        ctx.fillStyle = 'rgba(0,0,0,0.04)'; ctx.fillRect(W * 0.08, H * 0.35, W * 0.84, H * 0.11);
        // 钟楼
        ctx.fillStyle = '#eceff1'; ctx.fillRect(W * 0.42, H * 0.01, W * 0.16, H * 0.12);
        ctx.fillStyle = '#cfd8dc';
        ctx.beginPath(); ctx.moveTo(W * 0.38, H * 0.01); ctx.lineTo(W * 0.5, H * -0.02); ctx.lineTo(W * 0.62, H * 0.01);
        ctx.fill();
        // 钟面
        ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(W * 0.5, H * 0.05, 11, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = '#333'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(W * 0.5, H * 0.05, 10, 0, Math.PI * 2); ctx.stroke();
        // 时针分针
        ctx.strokeStyle = '#333'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(W * 0.5, H * 0.05); ctx.lineTo(W * 0.5, H * 0.04);
        ctx.stroke();
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(W * 0.5, H * 0.05); ctx.lineTo(W * 0.505, H * 0.04);
        ctx.stroke();
        // 窗户(双层)
        for (let r = 0; r < 3; r++) {
          for (let c = 0; c < 5; c++) {
            const wx = W * 0.18 + c * W * 0.14, wy = H * 0.14 + r * H * 0.1;
            ctx.fillStyle = r > 1 || c > 3 ? '#b3e5fc' : '#81d4fa';
            ctx.fillRect(wx, wy, W * 0.07, H * 0.065);
            ctx.strokeStyle = '#fff'; ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(wx + W * 0.035, wy); ctx.lineTo(wx + W * 0.035, wy + H * 0.065); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(wx, wy + H * 0.032); ctx.lineTo(wx + W * 0.07, wy + H * 0.032); ctx.stroke();
          }
        }
        // 地面
        ctx.fillStyle = '#c8e6c9'; ctx.fillRect(0, H * 0.5, W, H * 0.5);
        // 石板路
        ctx.fillStyle = '#cfd8dc'; ctx.fillRect(W * 0.15, H * 0.5, W * 0.08, H * 0.18);
        ctx.fillStyle = '#b0bec5'; ctx.fillRect(W * 0.45, H * 0.5, W * 0.08, H * 0.18);
        // 操场跑道
        ctx.strokeStyle = '#ef9a9a'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.ellipse(W * 0.78, H * 0.62, W * 0.1, H * 0.08, 0, 0, Math.PI * 2); ctx.stroke();
        // 樱花树(校门口两侧)
        for (let i = 0; i < 4; i++) {
          const tx = W * 0.08 + i * W * 0.28;
          ctx.fillStyle = '#5d4037'; ctx.fillRect(tx - 4, H * 0.35, 8, H * 0.22);
          // 树冠
          ctx.fillStyle = 'rgba(255,192,203,0.85)';
          ctx.beginPath(); ctx.arc(tx, H * 0.3, 20 + rng() * 8, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = 'rgba(255,182,193,0.7)';
          ctx.beginPath(); ctx.arc(tx - 7, H * 0.26, 14 + rng() * 6, 0, Math.PI * 2); ctx.fill();
          ctx.beginPath(); ctx.arc(tx + 8, H * 0.24, 13 + rng() * 5, 0, Math.PI * 2); ctx.fill();
        }
        // 落樱
        for (let i = 0; i < 18; i++) {
          const px = (W * 0.05 + i * W * 0.06 + t * 12) % W;
          const py = (H * 0.3 + Math.sin(frameCount * 0.02 + i) * H * 0.4) % (H * 0.75);
          ctx.fillStyle = 'rgba(255,200,210,0.6)';
          ctx.beginPath();
          ctx.ellipse(px, py, 3 + Math.random() * 2, 1.5 + Math.random() * 1, Math.sin(i) * 3, 0, Math.PI * 2);
          ctx.fill();
        }
        // 角色
        drawCharacter(W * 0.32, H * 0.6, 58, 0, rng, '#1a1a2e');
        drawCharacter(W * 0.6, H * 0.58, 50, 0.04, rng, '#8b4513');
        break;

      case 6: // 🌿 魔法森林 - 精灵之森(电影级)
        const sky6 = ctx.createLinearGradient(0, 0, 0, H);
        sky6.addColorStop(0, '#030d08');
        sky6.addColorStop(0.3, '#051a10');
        sky6.addColorStop(0.6, '#0a2e15');
        sky6.addColorStop(1, '#030d06');
        ctx.fillStyle = sky6; ctx.fillRect(0, 0, W, H);
        // 魔法薄雾层
        for (let layer = 0; layer < 3; layer++) {
          for (let i = 0; i < 5; i++) {
            const mx = W * 0.1 + i * W * 0.2 + Math.sin(t * 0.5 + layer + i) * 20;
            const my = H * 0.2 + layer * H * 0.1 + Math.cos(t * 0.4 + i) * 10;
            ctx.fillStyle = `rgba(${80+layer*30},${200+layer*25},${180-layer*20},0.04)`;
            ctx.beginPath();
            ctx.ellipse(mx, my, W * 0.25, 10 + layer * 4, 0, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        // 光柱(God Rays)
        for (let i = 0; i < 8; i++) {
          const lx = W * 0.05 + i * W * 0.14;
          const lg = ctx.createLinearGradient(lx, 0, lx, H * 0.99);
          lg.addColorStop(0, 'rgba(180,255,160,0.18)');
          lg.addColorStop(0.25, 'rgba(140,255,120,0.08)');
          lg.addColorStop(0.6, 'rgba(100,240,80,0.03)');
          lg.addColorStop(1, 'transparent');
          ctx.fillStyle = lg;
          ctx.fillRect(lx - 8 - Math.sin(t * 0.3 + i) * 3, 0, 16 + Math.sin(t + i) * 10, H);
        }
        // 巨树(带纹理)
        for (let i = 0; i < 6; i++) {
          const tx = W * 0.05 + i * W * 0.18;
          const tw = 14 + i * 3;
          // 树干纹理
          const tGrad = ctx.createLinearGradient(tx, 0, tx + tw, 0);
          tGrad.addColorStop(0, '#0d0500'); tGrad.addColorStop(0.5, '#1a0c02'); tGrad.addColorStop(1, '#0d0500');
          ctx.fillStyle = tGrad;
          ctx.fillRect(tx, H * 0.42, tw, H * 0.58);
          // 树根
          ctx.fillStyle = '#0d0500';
          ctx.beginPath();
          ctx.arc(tx - 3, H * 0.96, 8 + i, 0, Math.PI * 0.7); ctx.fill();
          ctx.beginPath();
          ctx.arc(tx + tw + 3, H * 0.96, 8 + i, Math.PI * 0.3, Math.PI); ctx.fill();
          // 树冠(层层叠叠)
          const crownLayers = [
            { g: 20, r: 120, y: 0.28, size: 35 },
            { g: 100, r: 160, y: 0.22, size: 30 },
            { g: 150, r: 210, y: 0.16, size: 25 }
          ];
          crownLayers.forEach((cl, li) => {
            ctx.fillStyle = `rgba(${cl.g+rng()*30},${cl.r+rng()*60},${cl.g*0.5+rng()*30},0.95)`;
            ctx.beginPath();
            ctx.arc(tx + tw / 2, H * cl.y, cl.size + rng() * 20, 0, Math.PI * 2);
            ctx.fill();
            if (li === 2) {
              ctx.fillStyle = `rgba(${cl.g+50},${cl.r+50},${cl.g*0.5+40},0.6)`;
              ctx.beginPath();
              ctx.arc(tx + tw / 2 - 3, H * cl.y - 3, cl.size * 0.3, 0, Math.PI * 2);
              ctx.fill();
            }
          });
        }
        // 发光蘑菇
        for (let i = 0; i < 12; i++) {
          const mx = W * 0.03 + rng() * W * 0.94;
          const my = H * 0.68 + rng() * H * 0.25;
          const mCol = i % 3 === 0 ? [100, 255, 200] : i % 3 === 1 ? [150, 200, 255] : [200, 150, 255];
          ctx.fillStyle = `rgba(${mCol[0]+rng()*55},${mCol[1]+rng()*55},${mCol[2]+rng()*55},${0.5+Math.sin(t*3+i)*0.35})`;
          ctx.shadowColor = `rgba(${mCol[0]},${mCol[1]},${mCol[2]},0.7)`;
          ctx.shadowBlur = 10 + Math.sin(t * 2 + i) * 5;
          ctx.beginPath();
          ctx.arc(mx, my, 4 + rng() * 7, Math.PI, Math.PI * 2); ctx.fill();
          ctx.fillStyle = '#c8e6c9';
          ctx.fillRect(mx - 2, my, 4, 8 + rng() * 10);
          ctx.shadowBlur = 0;
        }
        // 浮游精灵(萤火虫)
        for (let i = 0; i < 25; i++) {
          const fx = (W * 0.03 + i * W * 0.04 + Math.sin(t * 2.5 + i) * 30) % W;
          const fy = H * 0.1 + Math.cos(t * 2 + i * 0.7) * H * 0.45;
          const fAlpha = 0.3 + Math.sin(t * 4 + i) * 0.3;
          const fCol = i % 3 === 0 ? '100,255,200' : i % 3 === 1 ? '255,255,150' : '150,200,255';
          ctx.fillStyle = `rgba(${fCol},${fAlpha})`;
          ctx.shadowColor = `rgba(${fCol},0.6)`;
          ctx.shadowBlur = 6 + Math.sin(t * 3 + i) * 3;
          ctx.beginPath();
          ctx.arc(fx, fy, 1.5 + Math.random() * 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
        // 魔法阵(旋转发光)
        ctx.strokeStyle = `rgba(100,255,180,${0.2+Math.sin(t*1.5)*0.1})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = 'rgba(100,255,200,0.4)';
        ctx.shadowBlur = 12;
        const mc = W * 0.6, mcy = H * 0.78;
        // 外环
        ctx.beginPath();
        ctx.arc(mc, mcy, 22 + Math.sin(t * 0.6) * 5, 0, Math.PI * 2);
        ctx.stroke();
        // 内环
        ctx.beginPath();
        ctx.arc(mc, mcy, 14 + Math.sin(t * 0.7) * 3, 0, Math.PI * 2);
        ctx.stroke();
        // 内六芒星
        const starR = 20 + Math.sin(t * 0.5) * 4;
        for (let i = 0; i < 6; i++) {
          const a1 = (i / 6) * Math.PI * 2 + t * 0.3;
          const a2 = ((i + 1) / 6) * Math.PI * 2 + t * 0.3;
          ctx.beginPath();
          ctx.moveTo(mc + Math.cos(a1) * starR, mcy + Math.sin(a1) * starR);
          ctx.lineTo(mc + Math.cos(a2) * starR, mcy + Math.sin(a2) * starR);
          ctx.stroke();
        }
        ctx.shadowBlur = 0;
        // 魔法符文
        ctx.fillStyle = 'rgba(150,255,200,0.4)';
        ctx.font = 'bold 10px serif';
        ctx.textAlign = 'center';
        ctx.fillText('✦', mc, mcy + 3);
        ctx.textAlign = 'start';
        drawCharacter(W * 0.55, H * 0.72, 55, 0.03, rng, '#90caf9');
        break;

      case 7: // ❄️ 冬雪小镇 - 温馨冬夜(电影级)
        const sky7 = ctx.createLinearGradient(0, 0, 0, H);
        sky7.addColorStop(0, '#05051a');
        sky7.addColorStop(0.25, '#0f0f35');
        sky7.addColorStop(0.5, '#1a2850');
        sky7.addColorStop(0.75, '#2c4478');
        sky7.addColorStop(1, '#375a8c');
        ctx.fillStyle = sky7; ctx.fillRect(0, 0, W, H);
        // 多层极光(更绚丽)
        const auroraColors = [
          [80, 200, 140, 0.15], [60, 180, 220, 0.12],
          [140, 100, 200, 0.1], [100, 220, 180, 0.08]
        ];
        auroraColors.forEach((ac, ai) => {
          ctx.fillStyle = `rgba(${ac[0]},${ac[1]},${ac[2]},${ac[3]})`;
          ctx.beginPath();
          ctx.moveTo(-10, H * 0.06 + ai * H * 0.04);
          for (let x = 0; x <= W + 10; x += 8) {
            ctx.lineTo(x, H * 0.05 + ai * H * 0.04 +
              Math.sin(x * 0.012 + t * 0.5 + ai * 0.8) * 22 +
              Math.sin(x * 0.025 + t * 0.3 + ai) * 14 +
              Math.sin(x * 0.006 + t * 0.2) * 8);
          }
          ctx.lineTo(W + 10, H * 0.12 + ai * H * 0.04);
          ctx.lineTo(-10, H * 0.12 + ai * H * 0.04);
          ctx.fill();
        });
        // 星星
        for (let i = 0; i < 40; i++) {
          const sx = (i * 173) % W;
          const sy = (i * 67) % (H * 0.35);
          const twinkle = 0.2 + Math.sin(frameCount * 0.04 + i) * 0.35;
          ctx.fillStyle = `rgba(255,255,${220+Math.random()*35},${twinkle})`;
          ctx.beginPath();
          ctx.arc(sx, sy, 0.8 + (i % 4) * 0.6, 0, Math.PI * 2);
          ctx.fill();
          if (twinkle > 0.5) {
            ctx.fillStyle = `rgba(255,255,255,${twinkle*0.15})`;
            ctx.beginPath(); ctx.arc(sx, sy, 3, 0, Math.PI * 2); ctx.fill();
          }
        }
        // 月亮
        const moonGlow7 = ctx.createRadialGradient(W * 0.82, H * 0.14, 8, W * 0.82, H * 0.14, 55);
        moonGlow7.addColorStop(0, 'rgba(255,250,235,0.3)');
        moonGlow7.addColorStop(1, 'transparent');
        ctx.fillStyle = moonGlow7; ctx.fillRect(W * 0.7, 0, W * 0.3, H * 0.4);
        ctx.fillStyle = '#fffef5';
        ctx.shadowColor = '#ffeaa7'; ctx.shadowBlur = 18;
        ctx.beginPath(); ctx.arc(W * 0.82, H * 0.14, 20, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
        // 远山
        ctx.fillStyle = '#8899aa';
        ctx.beginPath();
        ctx.moveTo(0, H * 0.48);
        ctx.quadraticCurveTo(W * 0.2, H * 0.28, W * 0.4, H * 0.4);
        ctx.quadraticCurveTo(W * 0.65, H * 0.22, W, H * 0.38);
        ctx.lineTo(W, H * 0.55); ctx.lineTo(0, H * 0.55); ctx.fill();
        ctx.fillStyle = '#9dafbd';
        ctx.beginPath();
        ctx.moveTo(0, H * 0.52);
        ctx.quadraticCurveTo(W * 0.3, H * 0.38, W * 0.55, H * 0.46);
        ctx.quadraticCurveTo(W * 0.8, H * 0.35, W, H * 0.44);
        ctx.lineTo(W, H * 0.6); ctx.lineTo(0, H * 0.6); ctx.fill();
        // 雪地
        const snowGrad = ctx.createLinearGradient(0, H * 0.55, 0, H);
        snowGrad.addColorStop(0, '#e3e7f0');
        snowGrad.addColorStop(0.3, '#dce0ea');
        snowGrad.addColorStop(1, '#c4c9d5');
        ctx.fillStyle = snowGrad; ctx.fillRect(0, H * 0.55, W, H * 0.45);
        // 雪地纹理
        for (let i = 0; i < 15; i++) {
          ctx.fillStyle = 'rgba(255,255,255,0.2)';
          ctx.beginPath();
          ctx.arc(rng() * W, H * 0.58 + rng() * H * 0.38, 3 + rng() * 8, 0, Math.PI * 2);
          ctx.fill();
        }
        // 小屋(更多细节)
        for (let i = 0; i < 5; i++) {
          const hx = W * 0.04 + i * W * 0.2;
          const hw = 40, hh = H * 0.28;
          const hy = H * 0.52;
          // 屋体
          ctx.fillStyle = '#6d4c41'; ctx.fillRect(hx, hy, hw, hh);
          ctx.fillStyle = '#5d4037'; ctx.fillRect(hx, hy, hw, 4); // 屋顶装饰
          // 屋顶(积雪)
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.moveTo(hx - 10, hy);
          ctx.lineTo(hx + hw / 2, hy - 22);
          ctx.lineTo(hx + hw + 10, hy);
          ctx.fill();
          // 雪檐
          ctx.fillStyle = '#fffeff';
          ctx.fillRect(hx - 12, hy - 2, hw + 24, 5);
          // 窗户(发光)
          ctx.fillStyle = '#ffe082';
          ctx.shadowColor = '#ffb300'; ctx.shadowBlur = 10 + Math.sin(t * 3 + i) * 3;
          ctx.fillRect(hx + hw * 0.22, hy + hh * 0.25, 11, 13);
          ctx.shadowBlur = 0;
          ctx.fillStyle = '#fff'; ctx.fillRect(hx + hw * 0.33, hy + hh * 0.25, 2, 13);
          ctx.fillRect(hx + hw * 0.22, hy + hh * 0.35, 11, 2);
          // 门
          ctx.fillStyle = '#3e2723'; ctx.fillRect(hx + hw * 0.55, hy + hh * 0.35, 10, hh * 0.5);
          // 烟囱
          ctx.fillStyle = '#795548'; ctx.fillRect(hx + hw * 0.55, hy - 28, 8, 20);
          // 烟囱积雪
          ctx.fillStyle = '#fff'; ctx.fillRect(hx + hw * 0.53, hy - 29, 12, 3);
        }
        // 烟囱烟雾
        for (let i = 0; i < 5; i++) {
          const sx = W * 0.04 + i * W * 0.2 + 42;
          for (let j = 0; j < 4; j++) {
            const alpha = 0.2 - j * 0.05;
            ctx.fillStyle = `rgba(220,220,235,${alpha})`;
            ctx.beginPath();
            const smx = sx + (t * 12 + j * 8) % 45 - 22;
            ctx.arc(smx, H * 0.22 - j * 14, 6 + j * 4, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        // 雪人
        ctx.fillStyle = '#fefefe';
        ctx.beginPath(); ctx.arc(W * 0.78, H * 0.68, 14, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(W * 0.78, H * 0.56, 10, 0, Math.PI * 2); ctx.fill();
        // 雪人眼睛
        ctx.fillStyle = '#111';
        ctx.beginPath(); ctx.arc(W * 0.755, H * 0.54, 1.5, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(W * 0.805, H * 0.54, 1.5, 0, Math.PI * 2); ctx.fill();
        // 鼻子
        ctx.fillStyle = '#ff6f00';
        ctx.beginPath();
        ctx.moveTo(W * 0.78, H * 0.555);
        ctx.lineTo(W * 0.77, H * 0.56);
        ctx.lineTo(W * 0.78, H * 0.565);
        ctx.fill();
        // 围巾
        ctx.fillStyle = '#e53935';
        ctx.fillRect(W * 0.72, H * 0.575, W * 0.12, 3);
        // 雪人的帽子
        ctx.fillStyle = '#333'; ctx.fillRect(W * 0.745, H * 0.46, W * 0.07, 3);
        ctx.fillRect(W * 0.755, H * 0.44, W * 0.05, 5);
        // 角色
        drawCharacter(W * 0.32, H * 0.65, 52, 0, rng, '#d84315');
        break;

      case 8: // 🚀 宇宙航行 - 星际奇航(电影级)
        ctx.fillStyle = '#01000a'; ctx.fillRect(0, 0, W, H);
        // 深空微尘
        for (let i = 0; i < 100; i++) {
          const sx = (i * 149 + frameCount * 0.2) % W;
          const sy = (i * 97) % H;
          const b = 0.2 + Math.sin(frameCount * 0.03 + i) * 0.3;
          const col = i % 5 === 0 ? `rgba(180,200,255,${b})` : i % 5 === 1 ? `rgba(255,200,150,${b})` : `rgba(255,255,255,${b})`;
          ctx.fillStyle = col;
          ctx.beginPath();
          ctx.arc(sx, sy, 0.3 + (i % 5) * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
        // 绚丽星云
        const nebulaDefs = [
          { x: W * 0.22, y: H * 0.2, r: 80, c: [80, 30, 180] },
          { x: W * 0.72, y: H * 0.3, r: 95, c: [180, 20, 80] },
          { x: W * 0.5, y: H * 0.15, r: 70, c: [30, 100, 200] },
          { x: W * 0.85, y: H * 0.65, r: 65, c: [100, 20, 150] },
          { x: W * 0.15, y: H * 0.7, r: 60, c: [40, 80, 180] }
        ];
        nebulaDefs.forEach(nd => {
          const ng = ctx.createRadialGradient(nd.x, nd.y, 5, nd.x, nd.y, nd.r);
          ng.addColorStop(0, `rgba(${nd.c[0]},${nd.c[1]},${nd.c[2]},0.22)`);
          ng.addColorStop(0.4, `rgba(${nd.c[0]},${nd.c[1]},${nd.c[2]},0.08)`);
          ng.addColorStop(1, 'transparent');
          ctx.fillStyle = ng;
          ctx.fillRect(nd.x - nd.r, nd.y - nd.r, nd.r * 2, nd.r * 2);
        });
        // 大行星(带环)
        const p1y = H * 0.32;
        const pGrad1 = ctx.createRadialGradient(W * 0.8, p1y - 5, 3, W * 0.8, p1y, 38);
        pGrad1.addColorStop(0, '#ffcc80'); pGrad1.addColorStop(0.3, '#e67e22');
        pGrad1.addColorStop(0.7, '#bf360c'); pGrad1.addColorStop(1, '#5d1400');
        ctx.fillStyle = pGrad1; ctx.beginPath(); ctx.arc(W * 0.8, p1y, 38, 0, Math.PI * 2); ctx.fill();
        // 行星带
        for (let ring = 0; ring < 3; ring++) {
          ctx.strokeStyle = `rgba(255,${200-ring*30},${150-ring*30},${0.3-ring*0.08})`;
          ctx.lineWidth = 3 - ring * 0.8;
          ctx.beginPath();
          ctx.ellipse(W * 0.8, p1y, 46 + ring * 4, 14 + ring * 1, 0.3 + ring * 0.05, 0, Math.PI * 2);
          ctx.stroke();
        }
        // 小行星(蓝)
        const p2y = H * 0.6;
        const pGrad2 = ctx.createRadialGradient(W * 0.18, p2y - 3, 2, W * 0.18, p2y, 24);
        pGrad2.addColorStop(0, '#81d4fa'); pGrad2.addColorStop(0.5, '#0288d1');
        pGrad2.addColorStop(1, '#013a6b');
        ctx.fillStyle = pGrad2; ctx.beginPath(); ctx.arc(W * 0.18, p2y, 24, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.08)';
        ctx.beginPath(); ctx.arc(W * 0.18, p2y, 24, 0, Math.PI * 2); ctx.fill();
        // 小行星带
        for (let i = 0; i < 30; i++) {
          const ax = (W * 0.08 + i * W * 0.032 + frameCount * 0.25) % W;
          const ay = H * 0.48 + Math.sin(i * 0.45) * H * 0.06;
          ctx.fillStyle = `rgba(${180+rng()*75},${180+rng()*75},${190+rng()*65},${0.4+rng()*0.5})`;
          ctx.beginPath();
          ctx.arc(ax, ay, 0.8 + rng() * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
        // 飞船
        const shipX = W * 0.48 + Math.sin(t * 0.35) * 70, shipY = H * 0.5 + Math.cos(t * 0.5) * 35;
        // 尾焰
        const flameG = ctx.createLinearGradient(shipX - 18, shipY, shipX + 8, shipY);
        flameG.addColorStop(0, 'transparent');
        flameG.addColorStop(0.3, 'rgba(255,80,0,0.3)');
        flameG.addColorStop(0.55, 'rgba(255,150,30,0.5)');
        flameG.addColorStop(0.8, 'rgba(100,200,255,0.6)');
        flameG.addColorStop(1, 'rgba(180,220,255,0.4)');
        ctx.fillStyle = flameG;
        ctx.beginPath();
        ctx.moveTo(shipX - 6, shipY - 6);
        ctx.lineTo(shipX - 28 + Math.sin(t * 8) * 4, shipY);
        ctx.lineTo(shipX - 6, shipY + 6);
        ctx.fill();
        // 粒子尾迹
        for (let i = 0; i < 8; i++) {
          const tx = shipX - 8 - i * 5 + Math.sin(t * 10 + i) * 2;
          const ty = shipY + Math.sin(i * 2) * 3;
          ctx.fillStyle = `rgba(100,${200-i*10},255,${0.5-i*0.06})`;
          ctx.beginPath(); ctx.arc(tx, ty, 1.5 + (8 - i) * 0.4, 0, Math.PI * 2); ctx.fill();
        }
        // 船身
        const shipG = ctx.createLinearGradient(shipX, shipY - 8, shipX, shipY + 8);
        shipG.addColorStop(0, '#e0e0e0'); shipG.addColorStop(0.5, '#fafafa'); shipG.addColorStop(1, '#aaa');
        ctx.fillStyle = shipG;
        ctx.beginPath();
        ctx.moveTo(shipX + 10, shipY);
        ctx.quadraticCurveTo(shipX, shipY - 12, shipX - 8, shipY);
        ctx.quadraticCurveTo(shipX, shipY + 12, shipX + 10, shipY);
        ctx.fill();
        ctx.fillStyle = '#4dc9f6';
        ctx.beginPath(); ctx.arc(shipX + 6, shipY, 3.5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.beginPath(); ctx.arc(shipX + 6, shipY, 1.5, 0, Math.PI * 2); ctx.fill();
        // 彗星
        if (frameCount % 160 < 110) {
          const cx = (frameCount * 2) % (W + 50) - 25;
          const cy = H * 0.1;
          const cgrad = ctx.createLinearGradient(cx, cy, cx - 60, cy + 20);
          cgrad.addColorStop(0, 'rgba(255,255,255,0.8)');
          cgrad.addColorStop(0.3, 'rgba(200,200,255,0.3)');
          cgrad.addColorStop(1, 'transparent');
          ctx.fillStyle = cgrad;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx - 60, cy + 20);
          ctx.lineTo(cx - 55, cy + 17);
          ctx.closePath();
          ctx.fill();
          ctx.fillStyle = '#ffffff';
          ctx.beginPath(); ctx.arc(cx, cy, 3, 0, Math.PI * 2); ctx.fill();
        }
        break;

      case 9: // 🌆 赛博朋克 - 霓虹未来(电影级)
        const sky9 = ctx.createLinearGradient(0, 0, 0, H);
        sky9.addColorStop(0, '#020010');
        sky9.addColorStop(0.3, '#05001a');
        sky9.addColorStop(0.55, '#0d0028');
        sky9.addColorStop(0.85, '#080015');
        sky9.addColorStop(1, '#020008');
        ctx.fillStyle = sky9; ctx.fillRect(0, 0, W, H);
        // 巨型全息月亮
        const holoG = ctx.createRadialGradient(W * 0.73, H * 0.2, 8, W * 0.73, H * 0.2, 90);
        holoG.addColorStop(0, 'rgba(255,50,200,0.3)');
        holoG.addColorStop(0.4, 'rgba(255,0,150,0.1)');
        holoG.addColorStop(1, 'transparent');
        ctx.fillStyle = holoG; ctx.fillRect(W * 0.5, 0, W * 0.5, H * 0.55);
        // 月亮光环
        ctx.strokeStyle = `rgba(255,0,255,${0.3+Math.sin(t)*0.1})`; ctx.lineWidth = 1.5;
        ctx.shadowColor = 'rgba(255,0,255,0.5)'; ctx.shadowBlur = 20;
        ctx.beginPath(); ctx.arc(W * 0.73, H * 0.2, 38 + Math.sin(t) * 3, 0, Math.PI * 2); ctx.stroke();
        ctx.strokeStyle = `rgba(0,255,255,${0.2+Math.sin(t*1.3)*0.1})`;
        ctx.shadowColor = 'rgba(0,255,255,0.4)'; ctx.shadowBlur = 15;
        ctx.beginPath(); ctx.arc(W * 0.73, H * 0.2, 44, 0, Math.PI * 2); ctx.stroke();
        ctx.shadowBlur = 0;
        // 透视网格地面
        const neonGrid = ['rgba(255,0,255,0.12)', 'rgba(0,255,255,0.1)'];
        neonGrid.forEach((ngc, gi) => {
          ctx.strokeStyle = ngc; ctx.lineWidth = 0.8;
          for (let i = 0; i < 18; i++) {
            const ly = H * 0.52 + i * 18 + gi * 9;
            ctx.beginPath(); ctx.moveTo(0, ly); ctx.lineTo(W, ly); ctx.stroke();
            const vx = i * W * 0.06 + gi * W * 0.03;
            const off = (Math.sin(t + i * 0.5) + 1) * 10;
            ctx.beginPath();
            ctx.moveTo(vx + off, H * 0.52);
            ctx.lineTo(vx + off * 2, H);
            ctx.stroke();
          }
        });
        // 建筑剪影(更深更密)
        for (let layer = 0; layer < 2; layer++) {
          for (let i = 0; i < 10; i++) {
            const bx = i * W * 0.11 + layer * W * 0.05;
            const bw = W * 0.08 + rng() * W * 0.04;
            const bh = H * 0.25 + rng() * H * 0.4 + layer * H * 0.05;
            const bo = layer === 0 ? '0.9' : '0.7';
            ctx.fillStyle = `rgba(${8+layer*5},${1+layer*2},${15+layer*8},${bo})`;
            ctx.fillRect(bx, H - bh, bw, bh);
            // 楼顶天线
            if (rng() > 0.55 && layer === 0) {
              ctx.fillStyle = '#111';
              ctx.fillRect(bx + bw * 0.45, H - bh - 18, 2, 18);
              ctx.fillStyle = '#ff0000';
              ctx.shadowColor = '#ff0000'; ctx.shadowBlur = 6;
              ctx.beginPath();
              ctx.arc(bx + bw * 0.45 + 1, H - bh - 21 + Math.sin(t * 5 + i) * 3, 2, 0, Math.PI * 2);
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        }
        // 霓虹广告牌
        const neonSigns = [
          { t: 'CYBER', x: W * 0.03, c: '#ff00ff' },
          { t: 'NEON', x: W * 0.18, c: '#00ffff' },
          { t: 'TOKYO', x: W * 0.35, c: '#ffff00' },
          { t: 'DATA', x: W * 0.52, c: '#ff0080' },
          { t: 'GHOST', x: W * 0.68, c: '#00ff88' },
          { t: 'CITY', x: W * 0.83, c: '#ff6000' }
        ];
        neonSigns.forEach(ns => {
          const ny = H * 0.18 + Math.sin(t * 2.5 + ns.x) * 5;
          const pw = W * 0.135;
          ctx.fillStyle = 'rgba(0,0,0,0.85)';
          ctx.fillRect(ns.x, ny - 2, pw, 20);
          ctx.fillStyle = ns.c;
          ctx.shadowColor = ns.c;
          ctx.shadowBlur = 14 + Math.sin(t * 3 + ns.x) * 6;
          ctx.fillRect(ns.x + 2, ny + 2, pw - 4, 2);
          ctx.fillRect(ns.x + 2, ny + 16, pw - 4, 2);
          ctx.fillRect(ns.x + 2, ny + 2, 2, 16);
          ctx.fillRect(ns.x + pw - 4, ny + 2, 2, 16);
          ctx.shadowBlur = 0;
          ctx.fillStyle = '#fff';
          ctx.font = `bold ${7+rng()*2}px monospace`;
          ctx.textAlign = 'center';
          ctx.fillText(ns.t, ns.x + pw / 2, ny + 14);
          ctx.textAlign = 'start';
        });
        // 飞行汽车
        for (let i = 0; i < 4; i++) {
          const cx = (t * 45 + i * W * 0.28) % (W + 60) - 30;
          const cy = H * 0.12 + rng() * H * 0.18;
          // 车身
          ctx.fillStyle = 'rgba(50,50,70,0.85)';
          ctx.beginPath(); ctx.roundRect(cx - 1, cy, 18, 5, 3); ctx.fill();
          // 驾驶舱
          ctx.fillStyle = 'rgba(0,200,255,0.6)';
          ctx.beginPath(); ctx.arc(cx + 9, cy + 2.5, 3, 0, Math.PI * 2); ctx.fill();
          // 尾灯
          ctx.fillStyle = 'rgba(255,50,0,0.8)';
          ctx.fillRect(cx - 2, cy + 1, 2, 3);
          // 飞行光效
          ctx.fillStyle = `rgba(0,255,255,${0.2+Math.sin(t*5+i)*0.1})`;
          ctx.fillRect(cx - 1, cy + 5, 18, 1);
        }
        // 全息投影人像
        ctx.strokeStyle = `rgba(0,255,255,${0.4+Math.sin(t*1.5)*0.1})`;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = 'rgba(0,255,255,0.5)'; ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(W * 0.48, H * 0.44, 25, 0, Math.PI * 2);
        ctx.moveTo(W * 0.48, H * 0.44 + 25);
        ctx.lineTo(W * 0.48, H * 0.66);
        ctx.lineTo(W * 0.38, H * 0.82);
        ctx.moveTo(W * 0.48, H * 0.66);
        ctx.lineTo(W * 0.58, H * 0.82);
        ctx.moveTo(W * 0.48, H * 0.5);
        ctx.lineTo(W * 0.3, H * 0.36);
        ctx.moveTo(W * 0.48, H * 0.5);
        ctx.lineTo(W * 0.66, H * 0.36);
        ctx.stroke();
        ctx.shadowBlur = 0;
        // 全息数据流(下落)
        for (let i = 0; i < 25; i++) {
          const dx = (i * W * 0.04 + frameCount * 2.5) % W;
          const dy = (i * H * 0.04 + frameCount * 2) % (H + 20) - 10;
          const dAlpha = 0.3 + Math.sin(frameCount * 0.1 + i) * 0.2;
          ctx.fillStyle = `rgba(0,255,200,${dAlpha})`;
          ctx.fillRect(dx, dy, 1.5, 10 + Math.random() * 8);
        }
        // 底部城市光污染
        const cityGlowG = ctx.createLinearGradient(0, H * 0.5, 0, H);
        cityGlowG.addColorStop(0, 'transparent');
        cityGlowG.addColorStop(0.3, 'rgba(255,0,100,0.04)');
        cityGlowG.addColorStop(0.7, 'rgba(0,100,255,0.05)');
        cityGlowG.addColorStop(1, 'rgba(0,200,255,0.08)');
        ctx.fillStyle = cityGlowG; ctx.fillRect(0, H * 0.5, W, H * 0.5);
        break;
    }

    // 场景通用的星星粒子
    if ([3, 7, 8].includes(sceneType)) {
      for (let i = 0; i < 40; i++) {
        const sx = (i * 97 + frameCount * 2) % W;
        const sy = (i * 73) % (H * 0.55);
        ctx.fillStyle = `rgba(255,255,255,${0.3 + Math.sin(frameCount * 0.05 + i) * 0.3})`;
        ctx.beginPath(); ctx.arc(sx, sy, 1 + (i % 3) * 0.5, 0, Math.PI * 2); ctx.fill();
      }
    }

    // 通用粒子动画
    particles.forEach(p => {
      p.y += p.speed;
      p.x += Math.sin(frameCount * p.wobble + p.angle) * 0.6;
      // 循环
      if (p.y > H + 10) { p.y = -10; p.x = rng() * W; }
      if (p.x > W + 10) p.x = -10;
      if (p.x < -10) p.x = W + 10;

      if (sceneType === 1) {
        // 雨滴 - 斜飘
        ctx.strokeStyle = `rgba(${180+rng()*75},${200+rng()*55},${240+rng()*15},${p.alpha * 0.7})`;
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - 1.5, p.y + 8 + rng()*5); ctx.stroke();
        // 雨滴溅起
        if (p.y > H*0.7 && rng() > 0.9) {
          ctx.fillStyle = `rgba(200,220,255,0.15)`;
          ctx.beginPath(); ctx.arc(p.x, p.y-2, 2+Math.random()*3, 0, Math.PI*2); ctx.fill();
        }
      } else if (sceneType === 7) {
        // 雪花
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size * 0.8, 0, Math.PI * 2); ctx.fill();
      } else if (sceneType === 0) {
        // 樱花花瓣
        ctx.fillStyle = `rgba(255,${180 + rng() * 50},${180 + rng() * 40},${p.alpha})`;
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, p.size, p.size * 0.55, p.angle + t, 0, Math.PI * 2);
        ctx.fill();
      } else if (sceneType === 9) {
        // 赛博霓虹粒子(矩阵代码风)
        ctx.fillStyle = `rgba(0,255,${180+rng()*75},${p.alpha * 0.35})`;
        ctx.fillRect(p.x, p.y, 2, 7 + Math.random()*6);
      } else if (sceneType === 2) {
        // 战斗灰烬+火星
        const ea = p.alpha * 0.45;
        ctx.fillStyle = `rgba(255,${120+rng()*135},${20+rng()*40},${ea})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size*0.55, 0, Math.PI*2); ctx.fill();
      } else if (sceneType === 3) {
        // 萤火虫光点
        const fa = 0.25 + Math.sin(frameCount*0.08+p.angle)*0.2;
        ctx.fillStyle = `rgba(200,255,150,${fa})`;
        ctx.shadowColor = 'rgba(200,255,150,0.5)'; ctx.shadowBlur = 4;
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.5, 0, Math.PI*2); ctx.fill();
        ctx.shadowBlur = 0;
      } else if (sceneType === 4) {
        // 海边飞沫
        ctx.fillStyle = `rgba(255,255,255,${p.alpha*0.15})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size*0.3, 0, Math.PI*2); ctx.fill();
      } else if (sceneType === 5) {
        // 校园花瓣
        ctx.fillStyle = `rgba(255,${200+rng()*40},${210+rng()*30},${p.alpha*0.5})`;
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, p.size*0.7, p.size*0.35, p.angle, 0, Math.PI*2);
        ctx.fill();
      } else if (sceneType === 6) {
        // 魔法森林光点
        ctx.fillStyle = `rgba(150,${200+rng()*55},${150+rng()*100},${p.alpha*0.5})`;
        ctx.shadowColor = 'rgba(100,255,200,0.4)'; ctx.shadowBlur = 3;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size*0.5, 0, Math.PI*2); ctx.fill();
        ctx.shadowBlur = 0;
      } else if (sceneType === 8) {
        // 太空微尘
        ctx.fillStyle = `rgba(200,200,255,${p.alpha*0.2})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size*0.3, 0, Math.PI*2); ctx.fill();
      }
    });

    // 电影级后期特效
    if (frameCount === 2) generateFilmGrain(W, H);
    if (frameCount % 30 === 0 && (grainData === null || grainData.width !== W || grainData.height !== H)) {
      generateFilmGrain(W, H);
    }
    applyPostProcessing(progress);

    // 进度条同步
    const secElapsed = Math.floor(elapsed / 1000);
    const fillBar = document.getElementById('video-bar-fill');
    if (fillBar) fillBar.style.width = (progress * 100) + '%';
    const timerEl = document.getElementById('video-timer');
    if (timerEl) {
      timerEl.textContent = secElapsed + ':00 / 15:00';
    }

    if (progress >= 1) {
      const statusEl = document.getElementById('video-status');
      if (statusEl) statusEl.textContent = '⏸ 播放完毕';
      const skipBtn = document.getElementById('video-skip');
      if (skipBtn) {
        skipBtn.style.display = 'inline-block';
        skipBtn.setAttribute('data-overlay', '1');
      }
      return;
    }

    overlay._animId = requestAnimationFrame(renderFrame);
  }

  overlay._animId = requestAnimationFrame(renderFrame);
}

function closeVideoOverlay() {
  const overlay = document.querySelector('.video-overlay');
  if (!overlay) return;
  if (overlay._animId) cancelAnimationFrame(overlay._animId);
  overlay.remove();
}

function claimVideoReward(el) {
  const overlay = document.querySelector('.video-overlay');
  if (!overlay) return;

  if (overlay._animId) cancelAnimationFrame(overlay._animId);

  // 奖励: 50% 150金币, 50% 1钻石
  let rewardText;
  if (Math.random() < 0.5) {
    gameState.player.gold += 150;
    rewardText = '⭐ +150 金币';
  } else {
    gameState.player.diamond += 1;
    rewardText = '💎 +1 钻石';
  }

  saveGame();
  updateShopCurrency();
  updateHeaderUI();
  if (document.getElementById('shop-screen').classList.contains('active')) {
    renderShop();
  }

  // 显示奖励
  overlay.innerHTML = `
    <div class="video-player reward-phase">
      <div class="video-screen">
        <div class="reward-icon">🎉</div>
        <div class="reward-text">${rewardText}</div>
        <div class="reward-subtitle">感谢观看！奖励已发放</div>
      </div>
      <button class="btn-buy" style="margin-top:12px;font-size:1rem;padding:10px 30px;" onclick="closeVideoOverlay()">✅ 确定</button>
    </div>
  `;
}

// ==================== 星球选择界面 ====================

function renderPlanets() {
  const grid = document.getElementById('planet-grid');
  grid.innerHTML = '';

  PLANETS.forEach((planet, index) => {
    const card = document.createElement('div');
    card.className = 'planet-card';

    const isCompleted = gameState.completedPlanets.includes(planet.id);
    const isCurrent = index === gameState.currentPlanetIndex && !isCompleted;
    const isLocked = index > gameState.currentPlanetIndex;

    if (isCompleted) card.classList.add('completed');
    if (isCurrent) card.classList.add('current');
    if (isLocked) card.classList.add('locked');

    const completedCount = isCompleted ? planet.monsters.length : (isCurrent ? gameState.currentMonsterIndex : 0);
    const progressPercent = (completedCount / planet.monsters.length) * 100;

    card.innerHTML = `
      ${isCompleted ? '<span class="completed-badge">✅</span>' : ''}
      <span class="planet-icon" style="color:${planet.color}; font-size:3rem;">${planet.icon}</span>
      <div class="planet-card-name" style="color:${planet.color}">${planet.name}</div>
      <div class="planet-card-en">${planet.enName}</div>
      <div class="planet-card-progress">
        ${isCompleted ? '已通关' : (isLocked ? '🔒 未解锁' : `${completedCount}/${planet.monsters.length}`)}
      </div>
      <div class="planet-card-bar">
        <div class="planet-card-bar-fill" style="width:${progressPercent}%; background:${planet.color}"></div>
      </div>
    `;

    if (!isLocked) {
      card.onclick = () => enterPlanet(index);
    }

    grid.appendChild(card);
  });
}

function enterPlanet(planetIndex) {
  if (planetIndex !== gameState.currentPlanetIndex) return;

  const planet = PLANETS[planetIndex];
  const monster = planet.monsters[gameState.currentMonsterIndex];

  gameState.inBattle = true;
  gameState.currentEnemy = { ...monster };
  gameState.currentEnemy.maxHp = monster.hp;

  applyWeaponStats(); // 应用武器加成
  initBattleCanvas(planet, monster);
}

// ==================== Canvas 战斗系统 ====================

function initBattleCanvas(planet, monster) {
  showScreen('battle-screen');

  const canvas = document.getElementById('battle-canvas');
  gameState.canvas = canvas;
  gameState.ctx = canvas.getContext('2d');

  // 设置Canvas大小
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 60;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // 初始化玩家位置
  gameState.player.x = canvas.width * 0.2;
  gameState.player.y = canvas.height * 0.6;
  gameState.player.width = 50;
  gameState.player.height = 50;

  // 初始化敌人位置
  const enemy = gameState.currentEnemy;
  enemy.x = canvas.width * 0.7;
  enemy.y = canvas.height * 0.5;
  enemy.width = enemy.isBoss ? 70 : 50;
  enemy.height = enemy.isBoss ? 70 : 50;

  // 敌人攻击系统 - 大幅提高频率
  enemy._attackTimer = 15 + Math.floor(Math.random() * 10); // 0.25-0.4秒后首次攻击
  enemy._attackInterval = enemy.isBoss || enemy.isFinalBoss ? 35 : (40 + Math.floor(Math.random() * 20));
  enemy._isCharging = false;  // 是否在蓄力中
  enemy._chargeTimer = 0;     // 蓄力进度
  enemy._chargeDuration = enemy.isFinalBoss ? 20 : (enemy.isBoss ? 13 : 10); // 蓄力帧数大幅缩短

  // 设置键盘事件
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);

  // 鼠标追踪炮筒旋转
  const handleMouseMove = (e) => {
    if (!gameState.inBattle) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = gameState.player.x + gameState.player.width / 2;
    const centerY = gameState.player.y + gameState.player.height / 2;
    gameState.player.cannonAngle = Math.atan2(mouseY - centerY, mouseX - centerX);
  };
  gameState._mouseHandler = handleMouseMove;
  document.addEventListener('mousemove', handleMouseMove);

  // 鼠标左键长按连射
  const handleMouseDown = (e) => {
    if (!gameState.inBattle || gameState.paused) return;
    if (e.button === 0) {
      e.preventDefault();
      if (!gameState._fireInterval) {
        playerAttack(); // 立即发射第一发
        gameState._fireInterval = setInterval(() => {
          if (!gameState.inBattle || gameState.paused) return;
          playerAttack();
        }, gameState.player.fireInterval);
      }
    }
  };
  const handleMouseUp = (e) => {
    if (e.button === 0) {
      stopFiring();
    }
  };
  gameState._clickHandler = handleMouseDown;
  gameState._upHandler = handleMouseUp;
  document.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mouseup', handleMouseUp);

  // 更新UI
  updateHeaderUI();
  document.getElementById('battle-log').innerHTML = '';
  document.getElementById('battle-planet').textContent = `${planet.icon} ${planet.name}`;
  document.getElementById('battle-stage').textContent = `🎯 第 ${gameState.currentMonsterIndex + 1}/${planet.monsters.length} 关`;
  document.getElementById('battle-ult').textContent = '就绪';
  document.getElementById('battle-ult').style.color = '#2ecc71';

  updateSkillCDs();

  addBattleLog(`🚀 登陆 ${planet.name} - 第 ${gameState.currentMonsterIndex + 1}/${planet.monsters.length} 关`, 'system');
  if (monster.isBoss) {
    addBattleLog(`⚠️ Boss「${monster.name}」出现了！`, 'system');
  } else {
    addBattleLog(`${monster.name} 出现了！准备战斗！`, 'system');
  }

  // 启动游戏循环
  renderBattleWeapons();
  gameState.animFrame = requestAnimationFrame(gameLoop);
}

function gameLoop() {
  if (!gameState.inBattle) return;

  if (!gameState.paused) {
    update();
  }
  render();

  gameState.animFrame = requestAnimationFrame(gameLoop);
}

// ==================== 战斗武器栏系统 ====================

function renderBattleWeapons() {
  const container = document.getElementById('bw-slots');
  if (!container) return;
  container.innerHTML = '';

  const ow = gameState.player.ownedWeapons;
  const ownedIds = Object.keys(ow).map(Number).filter(id => ow[id] > 0).sort((a, b) => b - a);

  if (ownedIds.length === 0) {
    container.innerHTML = '<span class="bw-empty">暂无武器，去商店购买吧</span>';
    return;
  }

  // 如果没选武器，默认选第一个
  if (!gameState.player.activeWeaponId || !ow[gameState.player.activeWeaponId]) {
    gameState.player.activeWeaponId = ownedIds[0];
  }

  const activeId = gameState.player.activeWeaponId;

  ownedIds.forEach(id => {
    const weapon = ALL_WEAPONS[id];
    if (!weapon) return;
    const level = ow[id];
    const isActive = id === activeId;

    const slot = document.createElement('div');
    slot.className = 'bw-slot' + (isActive ? ' active' : '');
    slot.title = `${weapon.name} Lv.${level}\n${weapon.desc}`;
    slot.onclick = () => switchBattleWeapon(id);

    slot.innerHTML = `
      <span class="bw-icon">${weapon.icon}</span>
      <span class="bw-lv">Lv.${level}</span>
    `;
    container.appendChild(slot);
  });

  // 更新当前武器名显示
  const activeWeapon = ALL_WEAPONS[activeId];
  if (activeWeapon) {
    const labels = document.querySelectorAll('.bw-label');
    if (labels.length > 0) {
      labels[0].textContent = `🔫 ${activeWeapon.icon} ${activeWeapon.name} Lv.${ow[activeId]}`;
    }
  }
}

function switchBattleWeapon(weaponId) {
  const ow = gameState.player.ownedWeapons;
  if (!ow[weaponId] || ow[weaponId] <= 0) return;
  gameState.player.activeWeaponId = weaponId;
  renderBattleWeapons();

  const weapon = ALL_WEAPONS[weaponId];
  if (weapon) {
    addBattleLog(`🔫 切换武器：${weapon.icon} ${weapon.name} Lv.${ow[weaponId]}`, 'system');
  }
}

function stopBattle() {
  cancelAnimationFrame(gameState.animFrame);
  document.removeEventListener('keydown', handleKeyDown);
  document.removeEventListener('keyup', handleKeyUp);
  if (gameState._mouseHandler) {
    document.removeEventListener('mousemove', gameState._mouseHandler);
    gameState._mouseHandler = null;
  }
  if (gameState._clickHandler) {
    document.removeEventListener('mousedown', gameState._clickHandler);
    gameState._clickHandler = null;
  }
  if (gameState._upHandler) {
    document.removeEventListener('mouseup', gameState._upHandler);
    gameState._upHandler = null;
  }
  stopFiring();
}

/** 停止连射计时器 */
function stopFiring() {
  if (gameState._fireInterval) {
    clearInterval(gameState._fireInterval);
    gameState._fireInterval = null;
  }
}

// ==================== 键盘控制 ====================

function handleKeyDown(e) {
  gameState.keys[e.key] = true;

  if (!gameState.inBattle) return;

  // 暂停/继续
  if (e.key === 'Escape') {
    e.preventDefault();
    if (!gameState.paused) {
      gameState.paused = true;
      stopFiring();
      addBattleLog('⏸️ 游戏已暂停，按 Enter 继续', 'system');
    }
    return;
  }
  if (e.key === 'Enter') {
    e.preventDefault();
    if (gameState.paused) {
      gameState.paused = false;
      addBattleLog('▶️ 游戏继续！', 'system');
    }
    return;
  }

  // 数字键 1-9 切换武器
  if (e.key >= '1' && e.key <= '9') {
    e.preventDefault();
    if (gameState.paused) return;
    const idx = parseInt(e.key) - 1; // 0-index
    const ownedIds = Object.keys(gameState.player.ownedWeapons)
      .map(Number)
      .filter(id => gameState.player.ownedWeapons[id] > 0)
      .sort((a, b) => b - a);
    if (ownedIds.length > idx) {
      switchBattleWeapon(ownedIds[idx]);
    }
    return;
  }

  // Alt 返回星球选择页面 / 试炼塔 / PK竞技场
  if (e.key === 'Alt') {
    e.preventDefault();
    stopFiring();
    stopBattle();
    gameState.inBattle = false;
    gameState.currentEnemy = null;
    gameState.paused = false;
    if (gameState._inPK) {
      addBattleLog('🏠 返回PK竞技场', 'system');
      gameState._inPK = false;
      gameState._pkTier = null;
      gameState._pkOpponents = null;
      gameState._pkPlanetConfig = null;
      showScreen('pk-screen');
      renderPKArena();
    } else if (gameState._inTrial) {
      addBattleLog('🏠 返回试炼塔', 'system');
      gameState._inTrial = false;
      gameState._trialTier = null;
      gameState._trialMonsters = null;
      gameState._trialPlanetConfig = null;
      showScreen('trial-screen');
      renderTrialTower();
    } else {
      addBattleLog('🏠 返回星球选择页面', 'system');
      showScreen('planet-screen');
      renderPlanets();
    }
    updateHeaderUI();
    return;
  }

  // E 返回主页
  if (e.key === 'e' || e.key === 'E') {
    e.preventDefault();
    stopFiring();
    stopBattle();
    gameState.inBattle = false;
    gameState.currentEnemy = null;
    gameState.paused = false;
    gameState._inPK = false;
    gameState._pkTier = null;
    gameState._pkOpponents = null;
    gameState._pkPlanetConfig = null;
    gameState._inTrial = false;
    gameState._trialTier = null;
    gameState._trialMonsters = null;
    gameState._trialPlanetConfig = null;
    showScreen('start-screen');
    return;
  }

  // 暂停时忽略操作
  if (gameState.paused) return;

  switch (e.key) {
    case 'q':
    case 'Q':
      e.preventDefault();
      playerCannon();
      break;
    case 'p':
    case 'P':
      e.preventDefault();
      playerUlt();
      break;
    case 'w':
    case 'W':
      e.preventDefault();
      playerDefend();
      break;
  }
}

function handleKeyUp(e) {
  gameState.keys[e.key] = false;
}

// ==================== 更新逻辑 ====================

function update() {
  const p = gameState.player;
  const canvas = gameState.canvas;
  const margin = 20;

  // 玩家移动 (方向键)
  if (gameState.keys['ArrowUp'] || gameState.keys['ArrowUp'] === undefined && gameState.keys['w']) {
    // w键已被用于防御，只用方向键移动
  }
  if (gameState.keys['ArrowUp']) {
    p.y = Math.max(margin, p.y - p.speed);
  }
  if (gameState.keys['ArrowDown']) {
    p.y = Math.min(canvas.height - p.height - margin, p.y + p.speed);
  }
  if (gameState.keys['ArrowLeft']) {
    p.x = Math.max(margin, p.x - p.speed);
  }
  if (gameState.keys['ArrowRight']) {
    p.x = Math.min(canvas.width - p.width - margin, p.x + p.speed);
  }

  // 更新冷却
  if (p.cannonCooldown > 0) p.cannonCooldown--;
  if (p.ultCooldown > 0) p.ultCooldown--;
  if (p.defendCooldown > 0) p.defendCooldown--;

  // 防御状态计时
  if (p.isDefending) {
    p.defendTimer--;
    if (p.defendTimer <= 0) {
      p.isDefending = false;
    }
  }

  // 无敌帧
  if (p.invincibleTimer > 0) p.invincibleTimer--;

  // 更新粒子
  gameState.particles = gameState.particles.filter(part => {
    part.x += part.vx;
    part.y += part.vy;
    part.life--;
    part.vy += 0.1; // 重力
    return part.life > 0;
  });

  // 更新特效
  updateEffects();

  // 更新子弹
  gameState.bullets = gameState.bullets.filter(bullet => {
    bullet.x += bullet.vx;
    bullet.y += bullet.vy;
    bullet.life--;

    // 检测是否到达目标
    const enemy = gameState.currentEnemy;
    // NaN防护：如果hp异常则修复
    if (enemy && isNaN(enemy.hp)) enemy.hp = enemy.maxHp || 100;
    if (enemy && enemy.hp > 0) {
      const dx = bullet.x - (enemy.x + enemy.width / 2);
      const dy = bullet.y - (enemy.y + enemy.height / 2);
      if (Math.sqrt(dx * dx + dy * dy) < enemy.width / 2 + 10) {
        // 命中
        spawnParticles(bullet.x, bullet.y, 5, bullet.color);
        if (!bullet.hit) {
          bullet.hit = true;
          applyBulletDamage(bullet.damage, bullet.isCrit, bullet.type);
        }
        return false;
      }
    }

    // 超出屏幕或生命结束
    if (bullet.life <= 0 || bullet.x < -50 || bullet.x > canvas.width + 50 ||
        bullet.y < -50 || bullet.y > canvas.height + 50) {
      return false;
    }
    return true;
  });

  // 屏幕震动衰减
  if (gameState.shakeAmount > 0) gameState.shakeAmount *= 0.9;

  // 怪物随机运动 + 攻击系统
  if (gameState.currentEnemy && gameState.currentEnemy.hp > 0) {
    updateEnemyMovement();
    updateEnemyAttack();
  }

  // 更新敌人子弹
  gameState.enemyBullets = gameState.enemyBullets.filter(bullet => {
    bullet.x += bullet.vx;
    bullet.y += bullet.vy;
    bullet.life--;

    // 检测是否命中玩家
    const p = gameState.player;
    if (!bullet.hitPlayer) {
      const dx = bullet.x - (p.x + p.width / 2);
      const dy = bullet.y - (p.y + p.height / 2);

      let hitRadius;
      if (bullet.type === 'boss_bullet' || bullet.type === 'final_boss' || bullet.type === 'planet_bullet') {
        hitRadius = Math.max(p.width, p.height) / 2 + (bullet.radius || 6);
      } else {
        hitRadius = 20;
      }

      if (Math.sqrt(dx * dx + dy * dy) < hitRadius) {
        bullet.hitPlayer = true;
        applyEnemyBulletDamage(bullet.damage, bullet.isCrit, bullet.type);
        spawnParticles(bullet.x, bullet.y, 6, '#ff4444');
        spawnHitEffect(bullet.x, bullet.y);
        playHitSound();
        return false;
      }
    }

    // 超出屏幕或生命结束
    if (bullet.life <= 0 || bullet.x < -100 || bullet.x > canvas.width + 100 ||
        bullet.y < -100 || bullet.y > canvas.height + 100) {
      return false;
    }
    return true;
  });

  // 更新技能CD显示
  updateSkillCDs();
}

function updateSkillCDs() {
  const p = gameState.player;
  updateCDBar('cd-cannon', p.cannonCooldown, p.cannonMaxCooldown);
  updateCDBar('cd-ult', p.ultCooldown, p.ultMaxCooldown);
  updateCDBar('cd-defend', p.defendCooldown, p.defendMaxCooldown);

  // 大招状态
  const ultEl = document.getElementById('battle-ult');
  if (p.ultCooldown > 0) {
    const sec = Math.ceil(p.ultCooldown / 60);
    ultEl.textContent = `${sec}s`;
    ultEl.style.color = '#e74c3c';
  } else {
    ultEl.textContent = '就绪';
    ultEl.style.color = '#2ecc71';
  }
}

function updateCDBar(id, current, max) {
  const el = document.getElementById(id);
  if (!el) return;
  const percent = max > 0 ? (current / max) * 100 : 0;
  el.style.height = percent + '%';
}

// ==================== 渲染逻辑 ====================

function render() {
  const canvas = gameState.canvas;
  const ctx = gameState.ctx;
  const p = gameState.player;
  const enemy = gameState.currentEnemy;
  if (!enemy) return;

  // 屏幕震动偏移
  const sx = (Math.random() - 0.5) * gameState.shakeAmount;
  const sy = (Math.random() - 0.5) * gameState.shakeAmount;

  ctx.save();
  ctx.translate(sx, sy);

  // 清屏
  ctx.clearRect(-10, -10, canvas.width + 20, canvas.height + 20);

  // 绘制星球地面
  const planet = gameState._inPK && gameState._pkPlanetConfig
    ? gameState._pkPlanetConfig
    : (gameState._inTrial && gameState._trialPlanetConfig
    ? gameState._trialPlanetConfig
    : (gameState.currentPlanetIndex < PLANETS.length ? PLANETS[gameState.currentPlanetIndex] : { id: 8, name: '太阳', color: '#ffd700', bgColor: '#1a0a00', skyTop: '#0a0500', skyBottom: '#2a1000' }));
  drawGround(ctx, canvas, planet);

  // 绘制敌人（含蓄力动画）
  drawEnemy(ctx, enemy);

  // 绘制敌人蓄力警告圈
  if (enemy._isCharging) {
    const cx = enemy.x + enemy.width / 2;
    const cy = enemy.y + enemy.height / 2;
    const chargePercent = enemy._chargeTimer / enemy._chargeDuration;
    const warningRadius = enemy.width * 0.8 + Math.sin(Date.now() / 50) * 5;

    ctx.strokeStyle = `rgba(255, ${Math.floor(100 - chargePercent * 100)}, 0, ${0.4 + chargePercent * 0.5})`;
    ctx.lineWidth = 3;
    ctx.setLineDash([8, 6]);
    ctx.beginPath();
    ctx.arc(cx, cy, warningRadius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // 蓄力进度文字
    ctx.fillStyle = '#ff4444';
    ctx.font = 'bold 12px "Microsoft YaHei"';
    ctx.textAlign = 'center';
    if (enemy.isFinalBoss) {
      ctx.fillText('☀️ 太阳风暴蓄力中...', cx, cy - enemy.width / 2 - 15);
    } else if (enemy.isBoss) {
      ctx.fillText('⚠️ Boss攻击蓄力中!', cx, cy - enemy.width / 2 - 15);
    } else {
      ctx.fillText('🔴', cx, cy - enemy.width / 2 - 12);
    }
  }

  // 绘制玩家
  drawPlayer(ctx, p);

  // 绘制粒子
  drawParticles(ctx);

  // 绘制特效
  drawEffects(ctx);

  // 绘制子弹
  drawBullets(ctx);

  // 绘制玩家血条
  drawHealthBar(ctx, p.x, p.y - 15, p.width, 10, p.hp, p.maxHp, '#2ecc71');

  // 绘制敌人血条
  drawHealthBar(ctx, enemy.x, enemy.y - 20, enemy.width, 12, enemy.hp, enemy.maxHp, '#e74c3c');

  // 绘制敌人名字
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 13px "Microsoft YaHei"';
  ctx.textAlign = 'center';
  ctx.fillText(enemy.name, enemy.x + enemy.width / 2, enemy.y - 25);

  // 绘制防御护盾
  if (p.isDefending) {
    ctx.strokeStyle = '#4d96ff';
    ctx.lineWidth = 3;
    ctx.shadowColor = '#4d96ff';
    ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.arc(p.x + p.width / 2, p.y + p.height / 2, p.width * 0.7, 0, Math.PI * 2);
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  ctx.restore();

  // 暂停遮罩
  if (gameState.paused) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 48px "Microsoft YaHei"';
    ctx.textAlign = 'center';
    ctx.fillText('⏸️ 游戏暂停', canvas.width / 2, canvas.height / 2 - 20);
    ctx.font = '20px "Microsoft YaHei"';
    ctx.fillStyle = '#aaa';
    ctx.fillText('按 Enter 继续', canvas.width / 2, canvas.height / 2 + 30);
  }
}

function drawGround(ctx, canvas, planet) {
  const w = canvas.width;
  const h = canvas.height;
  const groundY = h * 0.68;
  const time = Date.now() / 1000;

  // === 天空渐变 ===
  const skyGrad = ctx.createLinearGradient(0, 0, 0, groundY);
  skyGrad.addColorStop(0, planet.skyTop || '#0a0a1e');
  skyGrad.addColorStop(1, planet.skyBottom || planet.bgColor);
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, w, groundY);

  // === 地面渐变 ===
  const groundGrad = ctx.createLinearGradient(0, groundY, 0, h);
  groundGrad.addColorStop(0, planet.bgColor);
  groundGrad.addColorStop(1, '#050510');
  ctx.fillStyle = groundGrad;
  ctx.fillRect(0, groundY, w, h - groundY);

  // === 根据行星绘制不同地面特征 ===
  const pId = planet.id || gameState.currentPlanetIndex + 1;

  switch (pId) {
    case 1: drawWaterStarGround(ctx, w, h, groundY, planet, time); break;
    case 2: drawVenusGround(ctx, w, h, groundY, planet, time); break;
    case 3: drawMarsGround(ctx, w, h, groundY, planet, time); break;
    case 4: drawJupiterGround(ctx, w, h, groundY, planet, time); break;
    case 5: drawSaturnGround(ctx, w, h, groundY, planet, time); break;
    case 6: drawUranusGround(ctx, w, h, groundY, planet, time); break;
    case 7: drawNeptuneGround(ctx, w, h, groundY, planet, time); break;
    case 97: case 98: case 99: drawTrialGround(ctx, w, h, groundY, planet, time); break;
    case 95: case 96: drawPKGround(ctx, w, h, groundY, planet, time); break;
    default: drawSunGround(ctx, w, h, groundY, planet, time); break;
  }
}

// 水星 - 陨石坑密布
function drawWaterStarGround(ctx, w, h, groundY, planet, time) {
  // 地面线
  ctx.strokeStyle = planet.color;
  ctx.lineWidth = 2;
  ctx.globalAlpha = 0.6;
  ctx.beginPath();
  ctx.moveTo(0, groundY);
  for (let x = 0; x < w; x += 40) {
    ctx.lineTo(x, groundY + Math.sin(x * 0.03 + time) * 4);
  }
  ctx.stroke();
  ctx.globalAlpha = 1;

  // 陨石坑
  for (let i = 0; i < 12; i++) {
    const cx = (i * 147 + 80) % w;
    const cy = groundY + 15 + (i * 97) % (h - groundY - 30);
    const cr = 8 + (i % 5) * 4;
    ctx.fillStyle = '#1a1a1a';
    ctx.beginPath();
    ctx.ellipse(cx, cy, cr, cr * 0.4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#555';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // 碎石
  ctx.fillStyle = '#888';
  for (let i = 0; i < 20; i++) {
    const rx = (i * 173 + 30) % w;
    const ry = groundY + 10 + (i * 79) % (h - groundY - 10);
    ctx.beginPath();
    ctx.arc(rx, ry, 2 + (i % 3), 0, Math.PI * 2);
    ctx.fill();
  }
}

// 金星 - 硫磺云层和酸池
function drawVenusGround(ctx, w, h, groundY, planet, time) {
  // 飘动云层（天空部分）
  ctx.globalAlpha = 0.3;
  ctx.fillStyle = '#e8cda0';
  for (let i = 0; i < 6; i++) {
    const cx = ((i * 200 + time * 15) % (w + 200)) - 100;
    const cy = groundY * 0.3 + i * 30;
    ctx.beginPath();
    ctx.ellipse(cx, cy, 60 + i * 10, 15, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  // 酸液池
  for (let i = 0; i < 5; i++) {
    const px = (i * 200 + 100) % w;
    const py = groundY + 40 + (i * 50) % (h - groundY - 60);
    ctx.fillStyle = '#5a8a1a';
    ctx.globalAlpha = 0.5 + Math.sin(time + i) * 0.2;
    ctx.beginPath();
    ctx.ellipse(px, py, 30 + i * 5, 8, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  // 地面
  ctx.strokeStyle = planet.color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, groundY);
  ctx.lineTo(w, groundY);
  ctx.stroke();
}

// 火星 - 火山和熔岩裂缝
function drawMarsGround(ctx, w, h, groundY, planet, time) {
  // 熔岩裂缝发光
  for (let i = 0; i < 8; i++) {
    const lx = (i * 170 + 50) % w;
    ctx.strokeStyle = `rgba(255, ${60 + Math.floor(Math.sin(time * 2 + i) * 40)}, 0, ${0.4 + Math.sin(time * 3 + i) * 0.3})`;
    ctx.lineWidth = 2 + (i % 3);
    ctx.beginPath();
    ctx.moveTo(lx, groundY + 5);
    ctx.quadraticCurveTo(lx + 20, groundY + 40, lx - 10 + (i % 20), groundY + 80);
    ctx.stroke();
  }

  // 小火山
  for (let i = 0; i < 3; i++) {
    const vx = 200 + i * 300;
    const vy = groundY + 20;
    ctx.fillStyle = '#4a1010';
    ctx.beginPath();
    ctx.moveTo(vx - 25, vy + 40);
    ctx.lineTo(vx, vy - 15);
    ctx.lineTo(vx + 25, vy + 40);
    ctx.fill();
    ctx.strokeStyle = '#ff4400';
    ctx.lineWidth = 2;
    ctx.stroke();
    // 岩浆
    ctx.fillStyle = '#ff3300';
    ctx.beginPath();
    ctx.arc(vx, vy + 5, 4 + Math.sin(time * 4 + i) * 2, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.strokeStyle = planet.color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, groundY);
  ctx.lineTo(w, groundY);
  ctx.stroke();
}

// 木星 - 风暴带和漩涡
function drawJupiterGround(ctx, w, h, groundY, planet, time) {
  // 风暴带（横向条纹）
  for (let i = 0; i < 5; i++) {
    ctx.strokeStyle = `rgba(212, 165, 116, ${0.3 + i * 0.1})`;
    ctx.lineWidth = 8 + i * 3;
    ctx.beginPath();
    for (let x = 0; x < w; x += 5) {
      const y = groundY + 15 + i * 25 + Math.sin(x * 0.02 + time + i) * 6;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  // 大红斑漩涡
  const eyeX = w * 0.7;
  const eyeY = groundY + 50;
  ctx.strokeStyle = '#d4a574';
  ctx.lineWidth = 3;
  ctx.globalAlpha = 0.5;
  for (let r = 5; r < 35; r += 8) {
    ctx.beginPath();
    ctx.arc(eyeX, eyeY, r + Math.sin(time * 2) * 3, 0, Math.PI * 1.8);
    ctx.stroke();
  }
  ctx.fillStyle = '#cc7744';
  ctx.beginPath();
  ctx.arc(eyeX, eyeY, 12, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;
}

// 土星 - 光环碎片和冰晶
function drawSaturnGround(ctx, w, h, groundY, planet, time) {
  // 光环碎片散布
  ctx.globalAlpha = 0.5;
  for (let i = 0; i < 15; i++) {
    const sx = (i * 130 + 50) % w;
    const sy = groundY + 20 + Math.sin(i * 1.5) * 40;
    ctx.save();
    ctx.translate(sx, sy);
    ctx.rotate(time * 0.5 + i);
    ctx.strokeStyle = planet.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(0, 0, 15 + (i % 5) * 3, 4, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
  ctx.globalAlpha = 1;

  // 冰晶地面
  ctx.fillStyle = '#c4a035';
  ctx.globalAlpha = 0.3;
  for (let i = 0; i < 25; i++) {
    const ix = (i * 83 + 20) % w;
    const iy = groundY + 30 + (i * 67) % (h - groundY - 35);
    ctx.beginPath();
    ctx.arc(ix, iy, 2 + i % 4, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  ctx.strokeStyle = planet.color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, groundY);
  ctx.lineTo(w, groundY);
  ctx.stroke();
}

// 天王星 - 冰晶和甲烷雪
function drawUranusGround(ctx, w, h, groundY, planet, time) {
  // 巨大冰晶柱
  for (let i = 0; i < 5; i++) {
    const cx = 80 + i * 220;
    const cy = groundY + 10;
    ctx.fillStyle = `rgba(126, 200, 227, ${0.15 + i * 0.05})`;
    ctx.strokeStyle = '#a0e0ff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx - 15, cy + 70);
    ctx.lineTo(cx, cy - 20);
    ctx.lineTo(cx + 15, cy + 70);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  // 飘雪效果
  ctx.fillStyle = '#fff';
  ctx.globalAlpha = 0.4;
  for (let i = 0; i < 30; i++) {
    const sx = ((i * 137 + time * 30) % (w + 50)) - 25;
    const sy = groundY + 5 + (i * 73 + time * 20 * (0.5 + i * 0.05)) % (h - groundY);
    ctx.beginPath();
    ctx.arc(sx, sy, 1.5, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

// 海王星 - 暗风暴漩涡和暗能量
function drawNeptuneGround(ctx, w, h, groundY, planet, time) {
  // 暗能量波纹
  for (let i = 0; i < 4; i++) {
    const cx = 150 + i * 250;
    const cy = groundY + 50;
    ctx.strokeStyle = `rgba(65, 105, 225, ${0.2 + i * 0.1})`;
    ctx.lineWidth = 2;
    for (let r = 10; r < 50; r += 12) {
      ctx.beginPath();
      ctx.arc(cx, cy, r + Math.sin(time * 3 + i) * 8, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  // 蓝色闪电
  ctx.strokeStyle = '#4169e1';
  ctx.globalAlpha = 0.6;
  for (let i = 0; i < 3; i++) {
    const lx = 100 + i * 350;
    ctx.beginPath();
    ctx.moveTo(lx, groundY + 5);
    ctx.lineTo(lx + 15, groundY + 30);
    ctx.lineTo(lx - 5, groundY + 50);
    ctx.lineTo(lx + 10, groundY + 75);
    ctx.lineWidth = 2;
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  ctx.strokeStyle = planet.color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, groundY);
  ctx.lineTo(w, groundY);
  ctx.stroke();
}

// 试炼塔 - 竞技场风格
function drawTrialGround(ctx, w, h, groundY, planet, time) {
  // 地面线
  ctx.strokeStyle = planet.color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, groundY);
  ctx.lineTo(w, groundY);
  ctx.stroke();

  // 竞技场地砖纹理
  ctx.strokeStyle = `rgba(255,255,255,0.1)`;
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 80) {
    for (let y = groundY; y < h; y += 40) {
      ctx.strokeRect(x, y, 80, 40);
    }
  }

  // 能量灯柱
  for (let i = 0; i < 4; i++) {
    const px = w * 0.15 + i * w * 0.23;
    const py = groundY;
    ctx.strokeStyle = planet.color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(px, py - 60);
    ctx.stroke();

    // 发光顶部
    const glow = ctx.createRadialGradient(px, py - 60, 2, px, py - 60, 15);
    glow.addColorStop(0, planet.color);
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(px, py - 60, 15 + Math.sin(time * 3) * 3, 0, Math.PI * 2);
    ctx.fill();
  }
}

// 太阳（最终Boss）
function drawSunGround(ctx, w, h, groundY, planet, time) {
  // 日冕波纹
  for (let i = 0; i < 6; i++) {
    const cx = 100 + i * 200;
    const cy = groundY + 40;
    ctx.strokeStyle = `rgba(255, 165, 0, ${0.15 + i * 0.08})`;
    ctx.lineWidth = 3;
    for (let r = 5; r < 55; r += 10) {
      ctx.beginPath();
      ctx.arc(cx, cy, r + Math.sin(time * 4 + i) * 6, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  // 太阳耀斑
  for (let i = 0; i < 8; i++) {
    const fx = (i * 160 + 80) % w;
    const fy = groundY + 10 + Math.sin(i * 1.8 + time) * 30;
    ctx.fillStyle = `rgba(255, 100, 0, ${0.3 + Math.sin(time * 5 + i) * 0.2})`;
    ctx.beginPath();
    ctx.arc(fx, fy, 3 + Math.sin(time * 3 + i) * 2, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.strokeStyle = '#ff6600';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, groundY);
  ctx.lineTo(w, groundY);
  ctx.stroke();
}

function drawPlayer(ctx, p) {
  if (p.invincibleTimer > 0 && Math.floor(p.invincibleTimer / 4) % 2 === 0) {
    ctx.globalAlpha = 0.4;
  }

  // 身体
  ctx.fillStyle = '#3498db';
  ctx.beginPath();
  ctx.roundRect(p.x, p.y + 10, p.width, p.height - 10, 5);
  ctx.fill();

  // 头盔
  ctx.fillStyle = '#ecf0f1';
  ctx.beginPath();
  ctx.arc(p.x + p.width / 2, p.y + 12, 18, Math.PI, 0);
  ctx.fill();

  // 面罩
  ctx.fillStyle = '#2c3e50';
  ctx.beginPath();
  ctx.arc(p.x + p.width / 2, p.y + 10, 12, Math.PI * 0.2, Math.PI * 0.8);
  ctx.fill();

  // 眼睛
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(p.x + p.width / 2 - 4, p.y + 8, 3, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(p.x + p.width / 2 + 4, p.y + 8, 3, 0, Math.PI * 2);
  ctx.fill();

  // 武器 - 旋转炮筒
  const pivotX = p.x + p.width / 2;
  const pivotY = p.y + p.height / 2;
  const barrelLength = 30;
  const angle = p.cannonAngle;

  ctx.save();
  ctx.translate(pivotX, pivotY);
  ctx.rotate(angle);

  // 炮筒主体
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.shadowColor = '#4d96ff';
  ctx.shadowBlur = 4;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(barrelLength, 0);
  ctx.stroke();

  // 炮口闪光
  ctx.fillStyle = '#95a5a6';
  ctx.beginPath();
  ctx.arc(barrelLength, 0, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(barrelLength, 0, 2.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();

  // 喷气火焰
  const flameSize = 5 + Math.sin(Date.now() / 50) * 3;
  ctx.fillStyle = '#e74c3c';
  ctx.beginPath();
  ctx.moveTo(p.x + p.width / 2 - 8, p.y + p.height);
  ctx.lineTo(p.x + p.width / 2, p.y + p.height + flameSize);
  ctx.lineTo(p.x + p.width / 2 + 8, p.y + p.height);
  ctx.fill();

  ctx.globalAlpha = 1;
}

function drawEnemy(ctx, enemy) {
  const cx = enemy.x + enemy.width / 2;
  const cy = enemy.y + enemy.height / 2;
  const r = enemy.width / 2;
  const time = Date.now() / 1000;
  const planet = gameState._inPK && gameState._pkPlanetConfig
    ? gameState._pkPlanetConfig
    : (gameState._inTrial && gameState._trialPlanetConfig
    ? gameState._trialPlanetConfig
    : (gameState.currentPlanetIndex < PLANETS.length ? PLANETS[gameState.currentPlanetIndex] : null));
  const planetId = planet ? planet.id : 8;

  // 最终Boss特殊绘制
  if (enemy.isFinalBoss) {
    drawFinalBossEnemy(ctx, enemy, cx, cy, r, time);
    return;
  }

  // Boss发光效果
  if (enemy.isBoss) {
    ctx.shadowColor = '#ffd700';
    ctx.shadowBlur = 12 + Math.sin(time * 3) * 6;
  }

  // 根据行星绘制不同外观
  if (enemy.isBoss) {
    drawBossBody(ctx, cx, cy, r, planetId, time);
  } else {
    drawNormalBody(ctx, cx, cy, r, planetId, time);
  }
  ctx.shadowBlur = 0;

  // 所有怪物都有眼睛
  drawMonsterEyes(ctx, cx, cy, r, planetId, time);

  // 行星特有装饰
  drawPlanetDecorations(ctx, cx, cy, r, planetId, time, enemy);
}

// 普通怪物身体形状
function drawNormalBody(ctx, cx, cy, r, planetId, time) {
  switch (planetId) {
    case 1: // 水星 - 不规则岩石
      ctx.fillStyle = '#888';
      ctx.strokeStyle = '#666';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy - r);
      ctx.lineTo(cx + r * 0.9, cy - r * 0.5);
      ctx.lineTo(cx + r * 0.8, cy + r * 0.3);
      ctx.lineTo(cx + r * 0.3, cy + r * 0.8);
      ctx.lineTo(cx - r * 0.6, cy + r * 0.7);
      ctx.lineTo(cx - r * 0.9, cy - r * 0.2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      // 纹理裂缝
      ctx.strokeStyle = '#555';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx - r * 0.3, cy - r * 0.5);
      ctx.lineTo(cx + r * 0.1, cy + r * 0.4);
      ctx.moveTo(cx + r * 0.4, cy - r * 0.3);
      ctx.lineTo(cx - r * 0.1, cy + r * 0.5);
      ctx.stroke();
      break;

    case 2: // 金星 - 云雾团
      const cloudGrad = ctx.createRadialGradient(cx, cy, r * 0.1, cx, cy, r);
      cloudGrad.addColorStop(0, '#f0e68c');
      cloudGrad.addColorStop(0.5, '#e8cda0');
      cloudGrad.addColorStop(1, 'rgba(180, 140, 60, 0.3)');
      ctx.fillStyle = cloudGrad;
      ctx.beginPath();
      for (let i = 0; i < 8; i++) {
        const a = (Math.PI * 2 * i) / 8;
        const bumpR = r * (0.7 + Math.sin(time * 2 + i) * 0.2);
        const bx = cx + Math.cos(a) * bumpR;
        const by = cy + Math.sin(a) * bumpR;
        if (i === 0) ctx.moveTo(bx, by);
        else ctx.lineTo(bx, by);
      }
      ctx.closePath();
      ctx.fill();
      break;

    case 3: // 火星 - 火焰状
      const fireGrad = ctx.createRadialGradient(cx, cy - r * 0.1, r * 0.1, cx, cy, r);
      fireGrad.addColorStop(0, '#ffdd00');
      fireGrad.addColorStop(0.4, '#ff6600');
      fireGrad.addColorStop(1, '#990000');
      ctx.fillStyle = fireGrad;
      ctx.beginPath();
      for (let i = 0; i < 12; i++) {
        const a = (Math.PI * 2 * i) / 12;
        const flameR = r * (0.7 + Math.sin(time * 5 + i * 1.5) * 0.3);
        const fx = cx + Math.cos(a) * flameR;
        const fy = cy + Math.sin(a) * flameR;
        if (i === 0) ctx.moveTo(fx, fy);
        else ctx.lineTo(fx, fy);
      }
      ctx.closePath();
      ctx.fill();
      break;

    case 4: // 木星 - 风暴漩涡
      ctx.fillStyle = '#d4a574';
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
      // 条纹
      for (let i = -3; i <= 3; i++) {
        ctx.strokeStyle = `rgba(139, 90, 43, ${0.4 + Math.abs(i) * 0.1})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        const sy = cy + i * r * 0.2;
        ctx.moveTo(cx - r, sy);
        ctx.lineTo(cx + r, sy);
        ctx.stroke();
      }
      // 红斑
      ctx.fillStyle = '#cc6644';
      ctx.beginPath();
      ctx.arc(cx + r * 0.2, cy + r * 0.15, r * 0.25, 0, Math.PI * 2);
      ctx.fill();
      break;

    case 5: // 土星 - 环状体
      ctx.fillStyle = '#e8cfa0';
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.7, 0, Math.PI * 2);
      ctx.fill();
      // 光环
      ctx.strokeStyle = '#f4d58d';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.ellipse(cx, cy, r, r * 0.3, time * 0.5, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeStyle = '#c4a035';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(cx, cy, r * 0.85, r * 0.2, time * 0.5 + 0.3, 0, Math.PI * 2);
      ctx.stroke();
      break;

    case 6: // 天王星 - 冰晶
      ctx.fillStyle = '#a0e0ff';
      ctx.beginPath();
      // 六角冰晶
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i;
        const px = cx + Math.cos(a) * r;
        const py = cy + Math.sin(a) * r;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();
      // 内六角
      ctx.strokeStyle = '#7ec8e3';
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i + Math.PI / 6;
        const px = cx + Math.cos(a) * r * 0.5;
        const py = cy + Math.sin(a) * r * 0.5;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();
      break;

    case 7: // 海王星 - 暗漩涡球
      const darkGrad = ctx.createRadialGradient(cx, cy, r * 0.1, cx, cy, r);
      darkGrad.addColorStop(0, '#6a5acd');
      darkGrad.addColorStop(0.5, '#191970');
      darkGrad.addColorStop(1, '#0a0a2e');
      ctx.fillStyle = darkGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
      // 旋转纹
      ctx.strokeStyle = 'rgba(65, 105, 225, 0.4)';
      ctx.lineWidth = 2;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(cx, cy, r * (0.4 + i * 0.2), time * 2 + i, time * 2 + i + Math.PI * 1.2);
        ctx.stroke();
      }
      break;

    default:
      ctx.fillStyle = '#8844ff';
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
  }
}

// Boss身体形状
function drawBossBody(ctx, cx, cy, r, planetId, time) {
  switch (planetId) {
    case 1: // 水星霸主 - 巨型岩石巨人
      ctx.fillStyle = '#666';
      ctx.beginPath();
      drawHexagon(ctx, cx, cy, r);
      ctx.fill();
      ctx.strokeStyle = '#444';
      ctx.lineWidth = 3;
      ctx.stroke();
      // 岩石尖刺
      ctx.fillStyle = '#555';
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(a - 0.2) * r * 0.9, cy + Math.sin(a - 0.2) * r * 0.9);
        ctx.lineTo(cx + Math.cos(a) * r * 1.3, cy + Math.sin(a) * r * 1.3);
        ctx.lineTo(cx + Math.cos(a + 0.2) * r * 0.9, cy + Math.sin(a + 0.2) * r * 0.9);
        ctx.fill();
      }
      break;
    case 2: // 金星霸主 - 硫酸巨兽
      ctx.fillStyle = '#c0a060';
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#9acd32';
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.8, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      break;
    case 3: // 火星霸主 - 熔岩巨兽
      ctx.fillStyle = '#cc3300';
      ctx.beginPath();
      drawHexagon(ctx, cx, cy, r);
      ctx.fill();
      // 熔岩纹
      ctx.strokeStyle = '#ff6600';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx - r * 0.5, cy - r * 0.6);
      ctx.lineTo(cx, cy);
      ctx.lineTo(cx + r * 0.5, cy + r * 0.3);
      ctx.moveTo(cx + r * 0.4, cy - r * 0.5);
      ctx.lineTo(cx - r * 0.2, cy + r * 0.5);
      ctx.stroke();
      break;
    case 4: // 木星霸主 - 风暴领主
      ctx.fillStyle = '#8b5a2b';
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
      for (let i = 0; i < 4; i++) {
        ctx.strokeStyle = `rgba(255, 215, 0, ${0.4 - i * 0.08})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(cx, cy, r * (0.3 + i * 0.2), time * 3 + i, time * 3 + i + Math.PI * 1.5);
        ctx.stroke();
      }
      break;
    case 5: // 土星霸主 - 环王
      ctx.fillStyle = '#f4d58d';
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.7, 0, Math.PI * 2);
      ctx.fill();
      for (let i = 0; i < 3; i++) {
        ctx.strokeStyle = `rgba(244, 213, 141, ${0.6 - i * 0.15})`;
        ctx.lineWidth = 3 + i;
        ctx.beginPath();
        ctx.ellipse(cx, cy, r * (0.9 + i * 0.1), r * 0.25, time + i * 0.5, 0, Math.PI * 2);
        ctx.stroke();
      }
      break;
    case 6: // 天王霸主 - 冰晶王
      ctx.fillStyle = '#7ec8e3';
      ctx.beginPath();
      drawHexagon(ctx, cx, cy, r);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 3;
      ctx.stroke();
      // 冰刺
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i;
        ctx.strokeStyle = '#a0e0ff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(a) * r * 1.5, cy + Math.sin(a) * r * 1.5);
        ctx.stroke();
      }
      break;
    case 7: // 海王霸主 - 深渊领主
      const bossDarkGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      bossDarkGrad.addColorStop(0, '#4169e1');
      bossDarkGrad.addColorStop(0.5, '#191970');
      bossDarkGrad.addColorStop(1, '#000');
      ctx.fillStyle = bossDarkGrad;
      ctx.beginPath();
      drawHexagon(ctx, cx, cy, r);
      ctx.fill();
      // 暗能环绕
      ctx.strokeStyle = 'rgba(65, 105, 225, 0.6)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 1.2, time * 2, time * 2 + Math.PI * 1.8);
      ctx.stroke();
      break;
    default:
      ctx.fillStyle = '#ff4444';
      ctx.beginPath();
      drawHexagon(ctx, cx, cy, r);
      ctx.fill();
  }
}

// 怪物眼睛
function drawMonsterEyes(ctx, cx, cy, r, planetId, time) {
  const eyeY = cy - r * 0.15;
  const eyeSpacing = r * 0.28;

  // 眼白
  ctx.fillStyle = '#fff';
  if (planetId === 7) ctx.fillStyle = '#ff4444'; // 海王星红眼
  ctx.beginPath();
  ctx.arc(cx - eyeSpacing, eyeY, r * 0.22, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx + eyeSpacing, eyeY, r * 0.22, 0, Math.PI * 2);
  ctx.fill();

  // 瞳孔
  ctx.fillStyle = '#000';
  if (planetId === 3) ctx.fillStyle = '#fff'; // 火星白眼珠
  ctx.beginPath();
  ctx.arc(cx - eyeSpacing + 2, eyeY, r * 0.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx + eyeSpacing + 2, eyeY, r * 0.1, 0, Math.PI * 2);
  ctx.fill();
}

// 行星特有装饰
function drawPlanetDecorations(ctx, cx, cy, r, planetId, time, enemy) {
  switch (planetId) {
    case 1: // 水星 - 无额外装饰
      break;
    case 2: // 金星 - 毒雾粒子
      ctx.fillStyle = 'rgba(201, 232, 78, 0.4)';
      for (let i = 0; i < 5; i++) {
        const px = cx + Math.cos(time * 2 + i) * r * 1.3;
        const py = cy + Math.sin(time * 3 + i) * r * 1.2;
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    case 3: // 火星 - 火焰粒子
      ctx.fillStyle = 'rgba(255, 100, 0, 0.6)';
      for (let i = 0; i < 6; i++) {
        const px = cx + (Math.random() - 0.5) * r * 2;
        const py = cy - r - Math.random() * r * 0.8;
        ctx.beginPath();
        ctx.arc(px, py, 2 + Math.random() * 2, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    case 4: // 木星 - 小闪电
      if (Math.sin(time * 8) > 0.7) {
        ctx.strokeStyle = '#ffd700';
        ctx.lineWidth = 2;
        ctx.beginPath();
        const lx = cx + r * 1.2;
        ctx.moveTo(lx, cy - r * 0.5);
        ctx.lineTo(lx - 5, cy);
        ctx.lineTo(lx + 5, cy);
        ctx.lineTo(lx, cy + r * 0.5);
        ctx.stroke();
      }
      break;
    case 7: // 海王星 - 暗能环绕
      ctx.strokeStyle = 'rgba(65, 105, 225, 0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 1.3, time, time + Math.PI * 1.5);
      ctx.stroke();
      break;
  }
}

// 最终Boss绘制
function drawFinalBossEnemy(ctx, enemy, cx, cy, r, time) {
  ctx.shadowColor = '#ffd700';
  ctx.shadowBlur = 15 + Math.sin(time * 3) * 8;

  const bodyGrad = ctx.createRadialGradient(cx, cy, r * 0.2, cx, cy, r);
  bodyGrad.addColorStop(0, '#fff');
  bodyGrad.addColorStop(0.3, '#ffd700');
  bodyGrad.addColorStop(1, '#ff6600');

  ctx.fillStyle = bodyGrad;
  ctx.beginPath();
  drawHexagon(ctx, cx, cy, r);
  ctx.fill();
  ctx.shadowBlur = 0;

  // 眼睛
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(cx - r * 0.25, cy - r * 0.2, r * 0.22, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx + r * 0.25, cy - r * 0.2, r * 0.22, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.arc(cx - r * 0.22, cy - r * 0.22, r * 0.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx + r * 0.28, cy - r * 0.22, r * 0.1, 0, Math.PI * 2);
  ctx.fill();

  // 嘴
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy + r * 0.3, r * 0.3, 0, Math.PI);
  ctx.stroke();

  // 王冠
  ctx.fillStyle = '#ffd700';
  ctx.beginPath();
  ctx.moveTo(cx - r * 0.6, cy - r * 0.7);
  ctx.lineTo(cx - r * 0.5, cy - r * 1.2);
  ctx.lineTo(cx - r * 0.2, cy - r * 0.8);
  ctx.lineTo(cx, cy - r * 1.4);
  ctx.lineTo(cx + r * 0.2, cy - r * 0.8);
  ctx.lineTo(cx + r * 0.5, cy - r * 1.2);
  ctx.lineTo(cx + r * 0.6, cy - r * 0.7);
  ctx.closePath();
  ctx.fill();
}

function drawHexagon(ctx, cx, cy, r) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
}

function drawHealthBar(ctx, x, y, width, height, hp, maxHp) {
  // NaN防护
  if (isNaN(hp) || isNaN(maxHp) || maxHp <= 0) { hp = maxHp || 100; maxHp = maxHp || 100; }
  const percent = Math.min(1, Math.max(0, hp / maxHp));

  // 背景
  ctx.fillStyle = 'rgba(0,0,0,0.6)';
  ctx.strokeStyle = 'rgba(255,255,255,0.3)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, 3);
  ctx.fill();
  ctx.stroke();

  // 血量
  if (percent > 0) {
    const hpGrad = ctx.createLinearGradient(x, y, x + width * percent, y);
    if (percent > 0.5) {
      hpGrad.addColorStop(0, '#2ecc71');
      hpGrad.addColorStop(1, '#27ae60');
    } else if (percent > 0.25) {
      hpGrad.addColorStop(0, '#f39c12');
      hpGrad.addColorStop(1, '#e67e22');
    } else {
      hpGrad.addColorStop(0, '#e74c3c');
      hpGrad.addColorStop(1, '#c0392b');
    }
    ctx.fillStyle = hpGrad;
    ctx.beginPath();
    ctx.roundRect(x + 1, y + 1, (width - 2) * percent, height - 2, 2);
    ctx.fill();
  }

  // 文字
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 10px "Microsoft YaHei"';
  ctx.textAlign = 'center';
  ctx.fillText(`${hp}/${maxHp}`, x + width / 2, y - 2);
}

function drawParticles(ctx) {
  gameState.particles.forEach(part => {
    ctx.globalAlpha = part.life / part.maxLife;
    ctx.fillStyle = part.color;
    ctx.beginPath();
    ctx.arc(part.x, part.y, part.size, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;
}

// ==================== 战斗特效系统 ====================

// 多种命中特效（轮换）
const HIT_EFFECTS = ['ring', 'star', 'sparkCluster', 'flash', 'ripple', 'hex'];
const KILL_EFFECTS = ['explosion', 'shatter', 'firework', 'implosion', 'soulRise', 'shockwave'];

function spawnHitEffect(x, y) {
  const idx = gameState._hitEffectIdx % HIT_EFFECTS.length;
  gameState._hitEffectIdx++;
  const t = HIT_EFFECTS[idx];

  switch (t) {
    case 'ring':
      gameState.effects.push({
        type: 'ring', x, y, radius: 10, maxRadius: 70, life: 18, maxLife: 18,
        color: '#ff6b6b', lineWidth: 2
      });
      break;
    case 'star':
      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8;
        gameState.particles.push({
          x, y, vx: Math.cos(angle) * 4, vy: Math.sin(angle) * 4,
          size: 3, color: '#ffd93d', life: 12, maxLife: 12
        });
      }
      for (let i = 0; i < 6; i++) {
        gameState.particles.push({
          x, y, vx: (Math.random() - 0.5) * 5, vy: (Math.random() - 0.5) * 5,
          size: 2 + Math.random() * 3, color: '#ff6b6b', life: 15, maxLife: 15
        });
      }
      break;
    case 'sparkCluster':
      for (let i = 0; i < 10; i++) {
        gameState.particles.push({
          x, y, vx: (Math.random() - 0.5) * 8, vy: (Math.random() - 0.5) * 8 - 3,
          size: 1.5 + Math.random() * 2.5, color: i % 3 === 0 ? '#4dc9f6' : (i % 3 === 1 ? '#ffd93d' : '#fff'),
          life: 8 + Math.random() * 10, maxLife: 18
        });
      }
      break;
    case 'flash':
      gameState.effects.push({
        type: 'flash', x, y, radius: 40, maxRadius: 40, life: 6, maxLife: 6,
        color: '#ffffff'
      });
      break;
    case 'ripple':
      for (let r = 0; r < 3; r++) {
        gameState.effects.push({
          type: 'ring', x, y, radius: 5 + r * 8, maxRadius: 55 + r * 10,
          life: 16 - r * 2, maxLife: 16, color: '#ff6600', lineWidth: 1.5 - r * 0.3
        });
      }
      break;
    case 'hex':
      gameState.effects.push({
        type: 'hexagon', x, y, radius: 15, maxRadius: 50,
        life: 20, maxLife: 20, color: '#a55eea', rotation: Math.random() * Math.PI
      });
      break;
  }
}

function spawnKillEffect(x, y) {
  const idx = gameState._killEffectIdx % KILL_EFFECTS.length;
  gameState._killEffectIdx++;
  const t = KILL_EFFECTS[idx];

  switch (t) {
    case 'explosion':
      for (let i = 0; i < 30; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 7;
        gameState.particles.push({
          x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed - 2,
          size: 2 + Math.random() * 5,
          color: ['#ffd700', '#ff6600', '#ff0000', '#ff4444'][Math.floor(Math.random() * 4)],
          life: 25 + Math.random() * 30, maxLife: 55
        });
      }
      gameState.effects.push({
        type: 'ring', x, y, radius: 5, maxRadius: 120,
        life: 25, maxLife: 25, color: '#ffd700', lineWidth: 3
      });
      gameState.effects.push({
        type: 'flash', x, y, radius: 80, maxRadius: 80,
        life: 8, maxLife: 8, color: '#ffffff'
      });
      break;
    case 'shatter':
      for (let i = 0; i < 20; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 3 + Math.random() * 6;
        gameState.particles.push({
          x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed - 4,
          size: 3 + Math.random() * 4,
          color: ['#4dc9f6', '#a55eea', '#2ecc71', '#ffd93d'][Math.floor(Math.random() * 4)],
          life: 20 + Math.random() * 25, maxLife: 45
        });
      }
      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8;
        gameState.effects.push({
          type: 'line', x, y, angle, length: 30, maxLength: 70,
          life: 15, maxLife: 15, color: '#4dc9f6', width: 2
        });
      }
      break;
    case 'firework':
      for (let ring = 0; ring < 3; ring++) {
        const delay = ring * 5;
        const colors = ['#ffd700', '#ff6b6b', '#4dc9f6'];
        for (let i = 0; i < 12; i++) {
          const angle = (Math.PI * 2 * i) / 12 + ring * 0.3;
          gameState.effects.push({
            type: 'fireworkParticle', x, y, angle, speed: 3 + ring * 1.5, delay,
            color: colors[ring], life: 25 + delay, maxLife: 25 + delay, size: 2 + ring
          });
        }
      }
      break;
    case 'implosion':
      for (let i = 0; i < 25; i++) {
        const angle = Math.random() * Math.PI * 2;
        gameState.particles.push({
          x, y, vx: Math.cos(angle) * (-3), vy: Math.sin(angle) * (-3),
          size: 2 + Math.random() * 4, color: '#a55eea',
          life: 10, maxLife: 10
        });
      }
      gameState.effects.push({
        type: 'ring', x, y, radius: 60, maxRadius: 0,
        life: 12, maxLife: 12, color: '#a55eea', lineWidth: 4
      });
      break;
    case 'soulRise':
      for (let i = 0; i < 15; i++) {
        gameState.particles.push({
          x: x + (Math.random() - 0.5) * 40,
          y: y + (Math.random() - 0.5) * 30,
          vx: (Math.random() - 0.5) * 1.5,
          vy: -(2 + Math.random() * 4),
          size: 3 + Math.random() * 4,
          color: ['#4dc9f6', '#a55eea', '#ffd93d', '#2ecc71'][Math.floor(Math.random() * 4)],
          life: 30 + Math.random() * 40, maxLife: 70
        });
      }
      break;
    case 'shockwave':
      gameState.effects.push({
        type: 'shockwave', x, y, radius: 10, maxRadius: 180,
        life: 30, maxLife: 30, color: '#ffffff', lineWidth: 4
      });
      gameState.effects.push({
        type: 'shockwave', x, y, radius: 5, maxRadius: 140,
        life: 22, maxLife: 22, color: '#4dc9f6', lineWidth: 3
      });
      break;
  }
}

function updateEffects() {
  gameState.effects = gameState.effects.filter(eff => {
    eff.life--;
    if (eff.delay && eff.delay > 0) {
      eff.delay--;
      return true;
    }
    const progress = 1 - (eff.life / eff.maxLife);
    switch (eff.type) {
      case 'ring':
      case 'shockwave':
        eff.radius = eff.maxRadius * progress;
        break;
      case 'fireworkParticle':
        eff.x += Math.cos(eff.angle) * eff.speed;
        eff.y += Math.sin(eff.angle) * eff.speed - 1.5;
        eff.vy = (eff.vy || 0) + 0.1;
        break;
      case 'line':
        eff.length = eff.maxLength * progress;
        break;
      case 'hexagon':
        eff.radius = eff.maxRadius * progress;
        eff.rotation += 0.05;
        break;
    }
    return eff.life > 0;
  });
}

function drawEffects(ctx) {
  gameState.effects.forEach(eff => {
    if (eff.delay && eff.delay > 0) return;
    const alpha = eff.life / eff.maxLife;
    ctx.globalAlpha = alpha;

    switch (eff.type) {
      case 'ring':
        ctx.strokeStyle = eff.color;
        ctx.lineWidth = eff.lineWidth;
        ctx.beginPath();
        ctx.arc(eff.x, eff.y, eff.radius, 0, Math.PI * 2);
        ctx.stroke();
        break;
      case 'shockwave':
        ctx.strokeStyle = eff.color;
        ctx.lineWidth = eff.lineWidth;
        ctx.beginPath();
        ctx.arc(eff.x, eff.y, eff.radius, 0, Math.PI * 2);
        ctx.stroke();
        break;
      case 'flash':
        const grad = ctx.createRadialGradient(eff.x, eff.y, 0, eff.x, eff.y, eff.radius);
        grad.addColorStop(0, eff.color);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(eff.x, eff.y, eff.radius, 0, Math.PI * 2);
        ctx.fill();
        break;
      case 'line':
        ctx.strokeStyle = eff.color;
        ctx.lineWidth = eff.width;
        ctx.beginPath();
        ctx.moveTo(eff.x, eff.y);
        ctx.lineTo(eff.x + Math.cos(eff.angle) * eff.length, eff.y + Math.sin(eff.angle) * eff.length);
        ctx.stroke();
        break;
      case 'fireworkParticle':
        ctx.fillStyle = eff.color;
        ctx.beginPath();
        ctx.arc(eff.x, eff.y, eff.size, 0, Math.PI * 2);
        ctx.fill();
        break;
      case 'hexagon':
        ctx.strokeStyle = eff.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = eff.rotation + (Math.PI * 2 * i) / 6;
          const px = eff.x + Math.cos(a) * eff.radius;
          const py = eff.y + Math.sin(a) * eff.radius;
          i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
        break;
    }
  });
  ctx.globalAlpha = 1;
}

function drawBullets(ctx) {
  gameState.bullets.forEach(bullet => {
    ctx.save();

    if (bullet.type === 'ult') {
      // 大招 - 大型光球
      const gradient = ctx.createRadialGradient(bullet.x, bullet.y, 0, bullet.x, bullet.y, 12);
      gradient.addColorStop(0, '#fff');
      gradient.addColorStop(0.4, '#ffd700');
      gradient.addColorStop(1, 'rgba(255,100,0,0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(bullet.x, bullet.y, 12 + Math.sin(Date.now() / 50) * 3, 0, Math.PI * 2);
      ctx.fill();

      // 拖尾
      ctx.shadowColor = '#ffd700';
      ctx.shadowBlur = 20;
    } else if (bullet.type === 'cannon') {
      // 蓄能炮 - 能量弹
      const gradient = ctx.createRadialGradient(bullet.x, bullet.y, 0, bullet.x, bullet.y, 8);
      gradient.addColorStop(0, '#fff');
      gradient.addColorStop(0.5, '#00d4ff');
      gradient.addColorStop(1, 'rgba(0,100,255,0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(bullet.x, bullet.y, 8, 0, Math.PI * 2);
      ctx.fill();

      ctx.shadowColor = '#00d4ff';
      ctx.shadowBlur = 15;
    } else {
      // 普通攻击 - 子弹
      ctx.fillStyle = bullet.color;
      ctx.shadowColor = '#ff6b6b';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.ellipse(bullet.x, bullet.y, 10, 5, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // 绘制武器图标在子弹上
    if (bullet.weaponIcon && bullet.type === 'attack') {
      ctx.shadowBlur = 0;
      ctx.font = '10px "Microsoft YaHei"';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(bullet.weaponIcon, bullet.x, bullet.y);
    }

    ctx.shadowBlur = 0;
    ctx.restore();
  });

  // 绘制敌人子弹
  drawEnemyBullets(ctx);
}

// ==================== 敌人攻击系统 ====================

function updateEnemyAttack() {
  const enemy = gameState.currentEnemy;
  if (!enemy) return;
  // NaN防护
  if (isNaN(enemy.hp) || enemy.hp <= 0) return;

  if (enemy._isCharging) {
    // 蓄力中
    enemy._chargeTimer++;
    if (enemy._chargeTimer >= enemy._chargeDuration) {
      // 蓄力完成，发射攻击！
      enemy._isCharging = false;
      enemyFireAttack();
    }
  } else {
    // 等待下次攻击
    enemy._attackTimer--;
    if (enemy._attackTimer <= 0) {
      enemy._attackTimer = enemy._attackInterval + Math.floor(Math.random() * 40);
      enemy._isCharging = true;
      enemy._chargeTimer = 0;
      addBattleLog(`${enemy.isFinalBoss ? '☀️' : (enemy.isBoss ? '👾' : '🔴')} ${enemy.name} 正在蓄力攻击...`, 'system');
    }
  }
}

function enemyFireAttack() {
  const enemy = gameState.currentEnemy;
  const p = gameState.player;
  const planet = gameState._inPK && gameState._pkPlanetConfig
    ? gameState._pkPlanetConfig
    : (gameState._inTrial && gameState._trialPlanetConfig
    ? gameState._trialPlanetConfig
    : (gameState.currentPlanetIndex < PLANETS.length ? PLANETS[gameState.currentPlanetIndex] : null));

  let damage = calculateDamage(enemy.atk, p.def);
  const crit = isCritical();
  if (crit) damage = Math.floor(damage * 1.5);

  const startX = enemy.x + enemy.width / 2;
  const startY = enemy.y + enemy.height / 2;
  // 随机偏转：攻击方向不完全瞄准玩家，加入随机偏差
  const targetX = p.x + p.width / 2 + (Math.random() - 0.5) * 200;
  const targetY = p.y + p.height / 2 + (Math.random() - 0.5) * 200;
  const dx = targetX - startX;
  const dy = targetY - startY;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;

  if (enemy.isFinalBoss) {
    enemyFireFinalBoss(startX, startY, dx, dy, len, damage, crit);
  } else if (enemy.isBoss) {
    enemyFireBoss(planet, startX, startY, dx, dy, len, damage);
  } else {
    enemyFireNormal(planet, startX, startY, dx, dy, len, damage, crit);
  }
}

// 普通怪物攻击 - 每行星完全不同（弹幕密度大幅增加）
function enemyFireNormal(planet, sx, sy, dx, dy, len, damage, crit) {
  const mode = planet ? planet.attackMode : 'single_shot';
  const color = planet ? planet.bulletColor : '#8844ff';
  const speed = planet ? planet.bulletSpeed : 6;

  switch (mode) {
    case 'single_shot':
      // 水星 - 五连发岩石弹（原3发→5发）
      for (let i = -2; i <= 2; i++) {
        const a = Math.atan2(dy, dx) + i * 0.18;
        gameState.enemyBullets.push({
          x: sx, y: sy, vx: Math.cos(a) * speed, vy: Math.sin(a) * speed,
          damage: Math.floor(damage * 0.5), isCrit: false, type: 'planet_bullet', planetId: 1,
          radius: 7, color: color, life: 180
        });
      }
      break;

    case 'poison_spray':
      // 金星 - 毒雾七向散射（原5→7）
      const baseAngle = Math.atan2(dy, dx);
      for (let i = -3; i <= 3; i++) {
        const angle = baseAngle + i * 0.3;
        gameState.enemyBullets.push({
          x: sx, y: sy, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
          damage: Math.floor(damage * 0.45), isCrit: false, type: 'planet_bullet', planetId: 2,
          radius: 6, color: color, life: 160, poison: true
        });
      }
      addBattleLog(`☁️ 毒雾喷射！`, 'player-dmg');
      break;

    case 'fire_ball':
      // 火星 - 三发大火球（原2→3）
      for (let i = -1; i <= 1; i++) {
        const a = Math.atan2(dy, dx) + i * 0.22;
        gameState.enemyBullets.push({
          x: sx, y: sy, vx: Math.cos(a) * speed, vy: Math.sin(a) * speed,
          damage: Math.floor(damage * 0.85), isCrit: crit, type: 'planet_bullet', planetId: 3,
          radius: 12, color: '#ff6633', life: 150, explosive: true
        });
      }
      break;

    case 'lightning':
      // 木星 - 闪电七连发（原5→7）
      const lBase = Math.atan2(dy, dx);
      for (let i = -3; i <= 3; i++) {
        const a = lBase + i * 0.18;
        gameState.enemyBullets.push({
          x: sx, y: sy, vx: Math.cos(a) * speed, vy: Math.sin(a) * speed,
          damage: Math.floor(damage * 0.4), isCrit: false, type: 'planet_bullet', planetId: 4,
          radius: 5, color: '#ffd700', life: 200, lightning: true
        });
      }
      addBattleLog(`⚡ 闪电链！`, 'player-dmg');
      break;

    case 'ring_blade':
      // 土星 - 三发环形飞刃（原2→3）
      const rAngle = Math.atan2(dy, dx);
      for (let i = -1; i <= 1; i++) {
        const a = rAngle + i * 0.25;
        gameState.enemyBullets.push({
          x: sx, y: sy, vx: Math.cos(a) * speed, vy: Math.sin(a) * speed,
          damage: Math.floor(damage * 0.65), isCrit: crit, type: 'planet_bullet', planetId: 5,
          radius: 10, color: color, life: 200, spin: true, spinAngle: 0
        });
      }
      break;

    case 'ice_shard':
      // 天王星 - 冰锥九向扇形散射（原7→9）
      const iBase = Math.atan2(dy, dx);
      for (let i = -4; i <= 4; i++) {
        const a = iBase + i * 0.22;
        gameState.enemyBullets.push({
          x: sx, y: sy, vx: Math.cos(a) * speed, vy: Math.sin(a) * speed,
          damage: Math.floor(damage * 0.35), isCrit: false, type: 'planet_bullet', planetId: 6,
          radius: 5, color: color, life: 170, shard: true
        });
      }
      addBattleLog(`❄️ 冰锥散射！`, 'player-dmg');
      break;

    case 'dark_blast':
      // 海王星 - 暗能五发大型慢速弹（原3→5）
      const dBase = Math.atan2(dy, dx);
      for (let i = -2; i <= 2; i++) {
        const a = dBase + i * 0.25;
        gameState.enemyBullets.push({
          x: sx, y: sy, vx: Math.cos(a) * speed * 0.8, vy: Math.sin(a) * speed * 0.8,
          damage: Math.floor(damage * 0.6), isCrit: crit, type: 'planet_bullet', planetId: 7,
          radius: 14, color: color, life: 250, dark: true
        });
      }
      addBattleLog(`🌀 暗能爆发！`, 'player-dmg');
      break;

    default:
      gameState.enemyBullets.push({
        x: sx, y: sy, vx: (dx / len) * 6, vy: (dy / len) * 6,
        damage, isCrit: crit, type: 'planet_bullet', planetId: 0,
        radius: 6, color: '#fff', life: 180
      });
  }
}

// Boss攻击 - 每行星不同（弹幕密度大幅增加）
function enemyFireBoss(planet, sx, sy, dx, dy, len, damage) {
  const planetId = planet ? planet.id : 0;

  switch (planetId) {
    case 1: // 水星Boss - 岩石雨（7→12枚弹）
      for (let i = 0; i < 12; i++) {
        const a = Math.atan2(dy, dx) + (i - 5.5) * 0.2;
        const sp = 5.5 + Math.random() * 3;
        gameState.enemyBullets.push({
          x: sx, y: sy, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
          damage: Math.floor(damage * 0.35), isCrit: false, type: 'boss_bullet', planetId: 1,
          radius: 8, color: '#b0b0b0', life: 170
        });
      }
      addBattleLog(`🪨 岩石雨！`, 'player-dmg');
      break;
    case 2: // 金星Boss - 酸雾环（12→18枚）
      for (let i = 0; i < 18; i++) {
        const a = (Math.PI * 2 * i) / 18;
        gameState.enemyBullets.push({
          x: sx, y: sy, vx: Math.cos(a) * 4, vy: Math.sin(a) * 4,
          damage: Math.floor(damage * 0.22), isCrit: false, type: 'boss_bullet', planetId: 2,
          radius: 7, color: '#c9e84e', life: 200, expand: true
        });
      }
      addBattleLog(`☁️ 酸雾环扩散！`, 'player-dmg');
      break;
    case 3: // 火星Boss - 熔岩弹幕（5→8枚）
      for (let i = 0; i < 8; i++) {
        const a = Math.atan2(dy, dx) + (i - 3.5) * 0.3;
        gameState.enemyBullets.push({
          x: sx, y: sy, vx: Math.cos(a) * 7.5, vy: Math.sin(a) * 7.5,
          damage: Math.floor(damage * 0.5), isCrit: false, type: 'boss_bullet', planetId: 3,
          radius: 11, color: '#ff4400', life: 160, explosive: true
        });
      }
      addBattleLog(`🌋 熔岩弹幕！`, 'player-dmg');
      break;
    case 4: // 木星Boss - 闪电风暴（8→12枚）
      for (let i = 0; i < 12; i++) {
        const a = (Math.PI * 2 * i) / 12 + Date.now() / 1000;
        gameState.enemyBullets.push({
          x: sx, y: sy, vx: Math.cos(a) * 5, vy: Math.sin(a) * 5,
          damage: Math.floor(damage * 0.3), isCrit: false, type: 'boss_bullet', planetId: 4,
          radius: 6, color: '#ffd700', life: 220, lightning: true
        });
      }
      addBattleLog(`⚡ 闪电风暴！`, 'player-dmg');
      break;
    case 5: // 土星Boss - 旋转刃阵（6→10枚）
      for (let i = 0; i < 10; i++) {
        const a = (Math.PI * 2 * i) / 10 + Date.now() / 800;
        gameState.enemyBullets.push({
          x: sx, y: sy, vx: Math.cos(a) * 6, vy: Math.sin(a) * 6,
          damage: Math.floor(damage * 0.4), isCrit: false, type: 'boss_bullet', planetId: 5,
          radius: 9, color: '#f4d58d', life: 190, spin: true
        });
      }
      addBattleLog(`💫 旋转刃阵！`, 'player-dmg');
      break;
    case 6: // 天王星Boss - 暴风雪（14→20枚）
      for (let i = 0; i < 20; i++) {
        const a = (Math.PI * 2 * i) / 20;
        const sp = 3.5 + Math.random() * 3.5;
        gameState.enemyBullets.push({
          x: sx, y: sy, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
          damage: Math.floor(damage * 0.18), isCrit: false, type: 'boss_bullet', planetId: 6,
          radius: 5, color: '#7ec8e3', life: 200, shard: true
        });
      }
      addBattleLog(`❄️ 暴风雪！`, 'player-dmg');
      break;
    case 7: // 海王星Boss - 暗能大漩涡（8→12枚）
      for (let i = 0; i < 12; i++) {
        const a = (Math.PI * 2 * i) / 12;
        gameState.enemyBullets.push({
          x: sx, y: sy, vx: Math.cos(a) * 5, vy: Math.sin(a) * 5,
          damage: Math.floor(damage * 0.35), isCrit: false, type: 'boss_bullet', planetId: 7,
          radius: 12, color: '#4169e1', life: 240, dark: true, swirl: true
        });
      }
      addBattleLog(`🌀 暗能大漩涡！`, 'player-dmg');
      break;
    default:
      for (let i = 0; i < 4; i++) {
        const a = Math.atan2(dy, dx) + (i - 1.5) * 0.3;
        gameState.enemyBullets.push({
          x: sx, y: sy, vx: Math.cos(a) * 7, vy: Math.sin(a) * 7,
          damage: Math.floor(damage * 0.35), isCrit: false, type: 'boss_bullet',
          radius: 9, color: '#ff3333', life: 180
        });
      }
  }
  gameState.shakeAmount = 3;
}

// 最终Boss攻击（保持不变，单独提取）
function enemyFireFinalBoss(sx, sy, dx, dy, len, damage, crit) {
  const enemy = gameState.currentEnemy;
  enemy._attackPattern = (enemy._attackPattern || 0) + 1;

  if (enemy._attackPattern % 3 === 0) {
    const baseAngle = Math.atan2(dy, dx);
    for (let i = -5; i <= 5; i++) {
      const angle = baseAngle + i * 0.15;
      const speed = 6.5 + Math.random() * 2.5;
      gameState.enemyBullets.push({
        x: sx, y: sy, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
        damage: Math.floor(damage * 0.45), isCrit: false, type: 'final_boss',
        radius: 10, color: '#ff6600', life: 240
      });
    }
    addBattleLog(`☀️ 太阳守护者 发射「日冕射线」！`, 'player-dmg');
  } else if (enemy._attackPattern % 3 === 1) {
    // 聚能光球三连
    for (let i = -1; i <= 1; i++) {
      const a = Math.atan2(dy, dx) + i * 0.1;
      gameState.enemyBullets.push({
        x: sx, y: sy, vx: Math.cos(a) * 5.5, vy: Math.sin(a) * 5.5,
        damage, isCrit: crit, type: 'final_boss',
        radius: 14, color: '#ffd700', life: 300, homing: true
      });
    }
    addBattleLog(`☀️ 太阳守护者 发射「聚能光球」！`, 'player-dmg');
  } else {
    // 太阳耀斑双发
    for (let i = -1; i <= 1; i += 2) {
      const a = Math.atan2(dy, dx) + i * 0.12;
      gameState.enemyBullets.push({
        x: sx, y: sy, vx: Math.cos(a) * 4.5, vy: Math.sin(a) * 4.5,
        damage: Math.floor(damage * 2), isCrit: crit, type: 'final_boss',
        radius: 20, color: '#ff0000', life: 200
      });
    }
    addBattleLog(`☀️ 太阳守护者 发射「太阳耀斑」！`, 'player-dmg');
  }
  gameState.shakeAmount = 4;
}

function applyEnemyBulletDamage(damage, isCrit, type) {
  const p = gameState.player;
  const enemy = gameState.currentEnemy;

  // 防御减伤 - 从70%降到50%
  if (p.isDefending) {
    damage = Math.floor(damage * 0.5);
    addBattleLog('🛡️ 护盾抵挡了一部分伤害！', 'system');
  } else if (isCritical) {
    damage = Math.floor(damage * 1.5);
  }

  p.hp = Math.max(0, p.hp - damage);
  p.invincibleTimer = 15; // 无敌帧从30帧缩短到15帧（0.25秒）

  gameState.shakeAmount = Math.max(gameState.shakeAmount, type === 'final_boss' ? 5 : (type === 'boss_bullet' ? 3 : (type === 'planet_bullet' ? 2 : 2)));

  const critText = isCritical && !p.isDefending ? ' 💥暴击！' : '';
  addBattleLog(`${enemy.name} 的攻击命中了你，造成 ${damage} 点伤害！${critText}`, 'player-dmg');

  updateHeaderUI();

  if (p.hp <= 0) {
    onPlayerDefeated();
  }
}

function drawEnemyBullets(ctx) {
  gameState.enemyBullets.forEach(bullet => {
    ctx.save();

    if (bullet.type === 'final_boss') {
      drawFinalBossBullet(ctx, bullet);
    } else if (bullet.type === 'boss_bullet') {
      drawBossBullet(ctx, bullet);
    } else if (bullet.type === 'planet_bullet') {
      drawPlanetBullet(ctx, bullet);
    } else {
      // 默认普通子弹
      ctx.fillStyle = bullet.color || '#ff4444';
      ctx.beginPath();
      ctx.arc(bullet.x, bullet.y, bullet.radius || 6, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.shadowBlur = 0;
    ctx.restore();
  });
}

// 行星特有子弹绘制
function drawPlanetBullet(ctx, bullet) {
  const time = Date.now() / 1000;

  switch (bullet.planetId) {
    case 1: // 水星 - 岩石弹（灰色不规则）
      ctx.fillStyle = '#999';
      ctx.shadowColor = '#666';
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#777';
      ctx.beginPath();
      ctx.arc(bullet.x + 2, bullet.y - 2, bullet.radius * 0.4, 0, Math.PI * 2);
      ctx.fill();
      break;

    case 2: // 金星 - 毒雾弹（绿色云状）
      ctx.fillStyle = '#c9e84e';
      ctx.shadowColor = '#9acd32';
      ctx.shadowBlur = 12;
      ctx.globalAlpha = 0.7;
      ctx.beginPath();
      ctx.arc(bullet.x, bullet.y, bullet.radius + Math.sin(time * 8) * 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      // 毒粒子
      ctx.fillStyle = 'rgba(201, 232, 78, 0.5)';
      ctx.beginPath();
      ctx.arc(bullet.x + bullet.radius, bullet.y, 3, 0, Math.PI * 2);
      ctx.fill();
      break;

    case 3: // 火星 - 火球
      const fireGrad = ctx.createRadialGradient(bullet.x, bullet.y, 0, bullet.x, bullet.y, bullet.radius);
      fireGrad.addColorStop(0, '#fff');
      fireGrad.addColorStop(0.3, '#ff6600');
      fireGrad.addColorStop(1, 'rgba(255, 0, 0, 0)');
      ctx.fillStyle = fireGrad;
      ctx.shadowColor = '#ff4400';
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.arc(bullet.x, bullet.y, bullet.radius + Math.sin(time * 12) * 2, 0, Math.PI * 2);
      ctx.fill();
      break;

    case 4: // 木星 - 闪电弹（锯齿状）
      ctx.strokeStyle = '#ffd700';
      ctx.lineWidth = 3;
      ctx.shadowColor = '#ffd700';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      const lx = bullet.x;
      const ly = bullet.y;
      ctx.moveTo(lx, ly - bullet.radius);
      ctx.lineTo(lx + 3, ly - 2);
      ctx.lineTo(lx - 3, ly);
      ctx.lineTo(lx + 3, ly + 2);
      ctx.lineTo(lx, ly + bullet.radius);
      ctx.stroke();
      break;

    case 5: // 土星 - 环形飞刃
      ctx.strokeStyle = '#f4d58d';
      ctx.lineWidth = 3;
      ctx.shadowColor = '#f4d58d';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      if (bullet.spin) {
        bullet.spinAngle = (bullet.spinAngle || 0) + 0.15;
        ctx.ellipse(bullet.x, bullet.y, bullet.radius, bullet.radius * 0.3, bullet.spinAngle, 0, Math.PI * 2);
      } else {
        ctx.ellipse(bullet.x, bullet.y, bullet.radius, bullet.radius * 0.3, time * 3, 0, Math.PI * 2);
      }
      ctx.stroke();
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(bullet.x, bullet.y, 3, 0, Math.PI * 2);
      ctx.fill();
      break;

    case 6: // 天王星 - 冰锥
      ctx.fillStyle = '#7ec8e3';
      ctx.shadowColor = '#a0e0ff';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.moveTo(bullet.x, bullet.y - bullet.radius);
      ctx.lineTo(bullet.x + bullet.radius * 0.6, bullet.y);
      ctx.lineTo(bullet.x, bullet.y + bullet.radius);
      ctx.lineTo(bullet.x - bullet.radius * 0.6, bullet.y);
      ctx.closePath();
      ctx.fill();
      break;

    case 7: // 海王星 - 暗能球
      const darkGrad = ctx.createRadialGradient(bullet.x, bullet.y, 0, bullet.x, bullet.y, bullet.radius);
      darkGrad.addColorStop(0, '#6a5acd');
      darkGrad.addColorStop(0.6, '#191970');
      darkGrad.addColorStop(1, 'rgba(10, 10, 46, 0)');
      ctx.fillStyle = darkGrad;
      ctx.shadowColor = '#4169e1';
      ctx.shadowBlur = 18;
      ctx.beginPath();
      ctx.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
      ctx.fill();
      break;

    default:
      ctx.fillStyle = bullet.color || '#fff';
      ctx.beginPath();
      ctx.arc(bullet.x, bullet.y, bullet.radius || 6, 0, Math.PI * 2);
      ctx.fill();
  }
}

// Boss子弹绘制
function drawBossBullet(ctx, bullet) {
  const time = Date.now() / 1000;
  const pid = bullet.planetId || 0;

  if (pid === 4) {
    // 木星Boss闪电 - 锯齿
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 3;
    ctx.shadowColor = '#ffd700';
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.moveTo(bullet.x, bullet.y - bullet.radius);
    ctx.lineTo(bullet.x + 4, bullet.y - 2);
    ctx.lineTo(bullet.x - 4, bullet.y + 2);
    ctx.lineTo(bullet.x, bullet.y + bullet.radius);
    ctx.stroke();
  } else if (pid === 7) {
    // 海王星Boss暗能
    const grad = ctx.createRadialGradient(bullet.x, bullet.y, 0, bullet.x, bullet.y, bullet.radius);
    grad.addColorStop(0, '#6a5acd');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.shadowColor = '#4169e1';
    ctx.shadowBlur = 16;
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
    ctx.fill();
  } else if (bullet.expand) {
    // 金星Boss扩散环
    ctx.strokeStyle = '#c9e84e';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, bullet.radius + Math.sin(time * 5) * 3, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = 'rgba(201, 232, 78, 0.5)';
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, bullet.radius * 0.5, 0, Math.PI * 2);
    ctx.fill();
  } else {
    // 通用Boss子弹 - 红色菱形
    ctx.fillStyle = bullet.color || '#ff2222';
    ctx.shadowColor = bullet.color || '#ff0000';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.moveTo(bullet.x, bullet.y - bullet.radius);
    ctx.lineTo(bullet.x + bullet.radius, bullet.y);
    ctx.lineTo(bullet.x, bullet.y + bullet.radius);
    ctx.lineTo(bullet.x - bullet.radius, bullet.y);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, bullet.radius * 0.35, 0, Math.PI * 2);
    ctx.fill();
  }
}

// 最终Boss子弹绘制
function drawFinalBossBullet(ctx, bullet) {
  const time = Date.now() / 1000;

  if (bullet.homing) {
    const gradient = ctx.createRadialGradient(bullet.x, bullet.y, 0, bullet.x, bullet.y, bullet.radius);
    gradient.addColorStop(0, '#fff');
    gradient.addColorStop(0.4, '#ffd700');
    gradient.addColorStop(1, 'rgba(255,100,0,0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, bullet.radius + Math.sin(time * 6) * 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowColor = '#ffd700';
    ctx.shadowBlur = 25;
    // 追踪
    const p = gameState.player;
    const tx = p.x + p.width / 2 - bullet.x;
    const ty = p.y + p.height / 2 - bullet.y;
    const tlen = Math.sqrt(tx * tx + ty * ty) || 1;
    const curSpeed = Math.sqrt(bullet.vx ** 2 + bullet.vy ** 2);
    bullet.vx += (tx / tlen) * 0.15;
    bullet.vy += (ty / tlen) * 0.15;
    const newSpeed = Math.sqrt(bullet.vx ** 2 + bullet.vy ** 2);
    bullet.vx = (bullet.vx / newSpeed) * curSpeed;
    bullet.vy = (bullet.vy / newSpeed) * curSpeed;
  } else if (bullet.radius > 12) {
    const gradient = ctx.createRadialGradient(bullet.x, bullet.y, 0, bullet.x, bullet.y, bullet.radius);
    gradient.addColorStop(0, '#fff');
    gradient.addColorStop(0.3, '#ff4400');
    gradient.addColorStop(1, 'rgba(255,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowColor = '#ff0000';
    ctx.shadowBlur = 20;
  } else {
    ctx.fillStyle = bullet.color;
    ctx.shadowColor = '#ff6600';
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

// 发射子弹 - 沿炮筒指向方向发射
function fireBullet(type, damage, isCrit) {
  const p = gameState.player;

  // 炮筒枢轴在玩家中心
  const pivotX = p.x + p.width / 2;
  const pivotY = p.y + p.height / 2;
  const angle = p.cannonAngle;
  const muzzleLength = 30; // 炮口距枢轴距离

  // 从炮口位置发射
  const startX = pivotX + Math.cos(angle) * muzzleLength;
  const startY = pivotY + Math.sin(angle) * muzzleLength;

  let speed, color;
  switch (type) {
    case 'attack':
      speed = 15;
      color = '#ff6b6b';
      break;
    case 'cannon':
      speed = 20;
      color = '#00d4ff';
      break;
    case 'ult':
      speed = 25;
      color = '#ffd700';
      break;
    default:
      speed = 15;
      color = '#ff6b6b';
  }

  // 获取当前装备武器信息
  const activeId = p.activeWeaponId;
  const activeWeapon = (activeId && p.ownedWeapons[activeId]) ? ALL_WEAPONS[activeId] : null;

  gameState.bullets.push({
    x: startX,
    y: startY,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    damage: damage,
    isCrit: isCrit,
    type: type,
    color: color,
    life: 120,  // 2秒生命周期
    weaponIcon: activeWeapon ? activeWeapon.icon : '',
    weaponName: activeWeapon ? activeWeapon.name : ''
  });
}

// 应用子弹伤害
function applyBulletDamage(damage, isCrit, type) {
  const enemy = gameState.currentEnemy;
  if (!enemy || enemy.hp <= 0) return;

  // 防护：如果 damage 无效则跳过
  if (typeof damage !== 'number' || isNaN(damage) || damage <= 0) return;

  enemy.hp = Math.max(0, enemy.hp - damage);

  // 特效
  const particleCount = type === 'ult' ? 20 : (type === 'cannon' ? 12 : 8);
  spawnParticles(enemy.x + enemy.width / 2, enemy.y + enemy.height / 2, particleCount,
    type === 'ult' ? '#ffd700' : (type === 'cannon' ? '#00d4ff' : '#ff6b6b'));

  // 新战斗特效 + 音效
  const hitX = enemy.x + enemy.width / 2;
  const hitY = enemy.y + enemy.height / 2;
  if (type === 'ult') {
    spawnHitEffect(hitX, hitY);
    spawnHitEffect(hitX - 10, hitY - 10);
    playUltSound();
  } else {
    spawnHitEffect(hitX, hitY);
    playHitSound();
  }

  gameState.shakeAmount = type === 'ult' ? 15 : (type === 'cannon' ? 8 : (isCrit ? 5 : 2));

  const critText = isCrit ? ' 💥暴击！' : '';
  const typeName = { attack: '⚔️ 攻击', cannon: '💥 蓄能炮', ult: '🌟 大招「超新星爆发」' };
  addBattleLog(`${typeName[type]}命中 ${enemy.name}，造成 ${damage} 点伤害！${critText}`, 'enemy-dmg');

  updateHeaderUI();

  if (enemy.hp <= 0) {
    onEnemyDefeated();
  } else {
    setTimeout(() => enemyTurn(), 400);
  }
}

// ==================== 粒子效果 ====================

function spawnParticles(x, y, count, color) {
  for (let i = 0; i < count; i++) {
    gameState.particles.push({
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 6,
      vy: (Math.random() - 0.5) * 6 - 2,
      size: 2 + Math.random() * 4,
      color: color,
      life: 20 + Math.random() * 30,
      maxLife: 50
    });
  }
}

// ==================== 伤害系统 ====================

function calculateDamage(attackerAtk, defenderDef, multiplier = 1) {
  const baseDamage = Math.max(1, attackerAtk - Math.floor(defenderDef * 0.25));
  const variance = Math.floor(Math.random() * 4) - 1;
  return Math.max(1, Math.floor((baseDamage + variance) * multiplier));
}

function isCritical() {
  return Math.random() < 0.15;
}

// ==================== 玩家行动 (键盘触发) ====================

function playerAttack() {
  if (!gameState.inBattle) return;
  if (gameState.player.invincibleTimer > 0 && gameState.player.invincibleTimer > 55) return;

  const enemy = gameState.currentEnemy;
  const p = gameState.player;

  // 射程无限，发射子弹
  let damage = calculateDamage(p.atk, enemy.def);
  const crit = isCritical();
  if (crit) damage = Math.floor(damage * 2);

  fireBullet('attack', damage, crit);
}

function playerCannon() {
  if (!gameState.inBattle) return;
  if (gameState.player.cannonCooldown > 0) {
    addBattleLog('⏳ 蓄能炮冷却中...', 'system');
    return;
  }

  const enemy = gameState.currentEnemy;
  const p = gameState.player;

  // 射程无限，发射能量弹
  let damage = calculateDamage(p.atk * 2.5, enemy.def);
  // 蓄能炮加成
  const bonus = getWeaponBonuses();
  damage = Math.floor(damage * bonus.cannonMul);
  const crit = isCritical();
  if (crit) damage = Math.floor(damage * 2);

  fireBullet('cannon', damage, crit);
  p.cannonCooldown = p.cannonMaxCooldown;
}

function playerUlt() {
  if (!gameState.inBattle) return;
  if (gameState.player.ultCooldown > 0) {
    const sec = Math.ceil(gameState.player.ultCooldown / 60);
    addBattleLog(`⏳ 大招冷却中...剩余 ${sec} 秒`, 'system');
    return;
  }

  const enemy = gameState.currentEnemy;
  const p = gameState.player;

  // 射程无限
  let damage = calculateDamage(p.atk * 5, enemy.def);
  // 大招加成
  const bonus = getWeaponBonuses();
  damage = Math.floor(damage * bonus.ultMul);
  const crit = isCritical();
  if (crit) damage = Math.floor(damage * 2);

  fireBullet('ult', damage, crit);
  p.ultCooldown = p.ultMaxCooldown;

  // 全屏爆发特效
  for (let i = 0; i < 20; i++) {
    const angle = (Math.PI * 2 * i) / 20;
    gameState.particles.push({
      x: p.x + p.width / 2,
      y: p.y + p.height / 2,
      vx: Math.cos(angle) * 6,
      vy: Math.sin(angle) * 6,
      size: 3 + Math.random() * 4,
      color: ['#ffd700', '#ff6600', '#ff0000'][Math.floor(Math.random() * 3)],
      life: 25 + Math.random() * 20,
      maxLife: 45
    });
  }
}

function playerDefend() {
  if (!gameState.inBattle) return;
  if (gameState.player.isDefending) {
    addBattleLog('🛡️ 防御护盾已激活中...', 'system');
    return;
  }

  const p = gameState.player;
  p.isDefending = true;
  p.defendTimer = p.defendDuration;
  // 无冷却

  addBattleLog('🛡️ 开启防御护盾！接下来1秒内减伤50%', 'system');
}

// ==================== 怪物随机运动 ====================

function updateEnemyMovement() {
  const enemy = gameState.currentEnemy;
  const canvas = gameState.canvas;
  const margin = 20;

  // 初始化随机运动方向（每帧有概率改变方向）
  if (enemy._moveDirX === undefined || !enemy._moveTimer) {
    enemy._moveDirX = (Math.random() - 0.5) * 2;
    enemy._moveDirY = (Math.random() - 0.5) * 2;
    enemy._moveTimer = 15 + Math.floor(Math.random() * 25); // 更频繁改变方向
  }

  enemy._moveTimer--;

  if (enemy._moveTimer <= 0) {
    // 改变随机方向 - 更随机
    enemy._moveDirX = (Math.random() - 0.5) * 2.5;
    enemy._moveDirY = (Math.random() - 0.5) * 2.5;
    enemy._moveTimer = 15 + Math.floor(Math.random() * 25);
  }

  // 根据怪物类型调整速度 - 大幅提速
  let speed = enemy.isBoss || enemy.isFinalBoss ? 4 : (3 + Math.random() * 3.5);

  // 移动
  enemy.x += enemy._moveDirX * speed;
  enemy.y += enemy._moveDirY * speed;

  // 边界反弹
  if (enemy.x < margin) {
    enemy.x = margin;
    enemy._moveDirX = Math.abs(enemy._moveDirX);
  }
  if (enemy.x > canvas.width - enemy.width - margin) {
    enemy.x = canvas.width - enemy.width - margin;
    enemy._moveDirX = -Math.abs(enemy._moveDirX);
  }
  if (enemy.y < margin) {
    enemy.y = margin;
    enemy._moveDirY = Math.abs(enemy._moveDirY);
  }
  if (enemy.y > canvas.height - enemy.height - margin) {
    enemy.y = canvas.height - enemy.height - margin;
    enemy._moveDirY = -Math.abs(enemy._moveDirY);
  }
}

// ==================== 距离计算 ====================

function distanceBetween(player, enemy) {
  const px = player.x + player.width / 2;
  const py = player.y + player.height / 2;
  const ex = enemy.x + enemy.width / 2;
  const ey = enemy.y + enemy.height / 2;
  return Math.sqrt((px - ex) ** 2 + (py - ey) ** 2);
}

// ==================== 敌人行动（旧版保留兼容） ====================

function enemyTurn() {
  // 敌人攻击现在由子弹系统处理，此函数保留为空
}

// ==================== 战斗结果 ====================

function onEnemyDefeated() {
  const enemy = gameState.currentEnemy;
  const goldEarned = enemy.gold;
  gameState.player.gold += goldEarned;

  // 钻石掉落：Boss必掉，普通怪概率掉
  let diamondEarned = 0;
  if (enemy.isBoss) {
    diamondEarned = 1 + Math.floor(Math.random() * 3);
  } else if (Math.random() < 0.15) {
    diamondEarned = 1;
  }
  gameState.player.diamond += diamondEarned;
  saveGame();

  // 击败特效
  const dx = enemy.x + enemy.width / 2;
  const dy = enemy.y + enemy.height / 2;
  spawnParticles(dx, dy, 25, '#ffd700');
  spawnKillEffect(dx, dy);
  playKillSound();
  gameState.shakeAmount = enemy.isBoss ? 12 : 6;

  const diamondText = diamondEarned > 0 ? ` 💎+${diamondEarned}` : '';
  addBattleLog(`🎉 击败了 ${enemy.name}！获得 ${goldEarned} 星币！${diamondText}`, 'system');

  // 累计击杀数 + 检查段位提升
  gameState.player.totalKills++;
  const newRank = getCurrentRank();
  if (gameState._lastRankId && newRank.id > gameState._lastRankId) {
    addBattleLog(`🏅 段位提升！你已成为「${newRank.name}」！`, 'system');
    awardRankWeapons(gameState._lastRankId, newRank.id);
  }
  gameState._lastRankId = newRank.id;
  gameState._lastRankName = newRank.name;
  gameState._lastRankIcon = newRank.icon;

  updateHeaderUI();
  // 自动更新排行榜
  silentLeaderboardSubmit();

  // ===== PK竞技场模式 =====
  if (gameState._inPK) {
    gameState.currentMonsterIndex++;
    const pkOpponents = gameState._pkOpponents;
    const totalLevels = pkOpponents.length;

    // 更新PK进度
    if (gameState.currentMonsterIndex > (gameState._pkProgress[gameState._pkTier] || 0)) {
      gameState._pkProgress[gameState._pkTier] = gameState.currentMonsterIndex;
    }

    if (gameState.currentMonsterIndex >= totalLevels) {
      // PK竞技场全部通关
      gameState.player.hp = gameState.player.maxHp;
      const tierName = PK_ARENA[gameState._pkTier].name;
      const finalTitle = PK_ARENA[gameState._pkTier].titles[totalLevels - 1];
      addBattleLog(`🏆 ${tierName}全部通关！获得最终称号「${finalTitle}」！生命值已完全恢复！`, 'system');
      setTimeout(() => {
        stopBattle();
        gameState.inBattle = false;
        gameState.currentEnemy = null;
        gameState._inPK = false;
        gameState._pkTier = null;
        gameState._pkOpponents = null;
        gameState._pkPlanetConfig = null;
        showScreen('pk-screen');
        renderPKArena();
        updateHeaderUI();
      }, 1500);
      return;
    }

    // 下一个对手
    const nextOpponent = pkOpponents[gameState.currentMonsterIndex];
    gameState.currentEnemy = { ...nextOpponent };
    gameState.currentEnemy.maxHp = nextOpponent.hp;
    // NaN防护
    if (isNaN(gameState.currentEnemy.hp) || gameState.currentEnemy.hp <= 0) {
      gameState.currentEnemy.hp = nextOpponent.hp || 100;
    }

    // 清除残留子弹，防止误伤新怪兽
    gameState.bullets = [];
    gameState.enemyBullets = [];

    const canvas = gameState.canvas;
    gameState.currentEnemy.x = canvas.width * 0.7;
    gameState.currentEnemy.y = canvas.height * 0.5;
    gameState.currentEnemy.width = 50;
    gameState.currentEnemy.height = 50;

    gameState.currentEnemy._attackTimer = 18 + Math.floor(Math.random() * 12);
    gameState.currentEnemy._attackInterval = 40 + Math.floor(Math.random() * 20);
    gameState.currentEnemy._isCharging = false;
    gameState.currentEnemy._chargeTimer = 0;
    gameState.currentEnemy._chargeDuration = 10;

    gameState.player.cannonCooldown = 0;
    gameState.player.ultCooldown = 0;
    gameState.player.defendCooldown = 0;
    gameState.player.isDefending = false;

    setTimeout(() => {
      document.getElementById('battle-stage').textContent = `第 ${gameState.currentMonsterIndex + 1}/${totalLevels} 场 · ${nextOpponent.title || ''}`;
      updateSkillCDs();
      updateHeaderUI();
      const newTitle = gameState.currentMonsterIndex + 1 <= totalLevels ? PK_ARENA[gameState._pkTier].titles[gameState.currentMonsterIndex] : '';
      addBattleLog(`⚔️ 【${newTitle}】${nextOpponent.name} 前来挑战！`, 'system');
      renderBattleWeapons();
    }, 500);
    return;
  }

  // ===== 试炼塔模式 =====
  if (gameState._inTrial) {
    gameState.currentMonsterIndex++;
    const trialMonsters = gameState._trialMonsters;
    const totalMonsters = trialMonsters.length;

    if (gameState.currentMonsterIndex >= totalMonsters) {
      // 试炼塔通关
      gameState.player.hp = gameState.player.maxHp;
      const tierName = TRIAL_TOWER[gameState._trialTier].name;
      addBattleLog(`🏆 ${tierName}全部通关！生命值已完全恢复！`, 'system');
      setTimeout(() => {
        stopBattle();
        gameState.inBattle = false;
        gameState.currentEnemy = null;
        gameState._inTrial = false;
        gameState._trialTier = null;
        gameState._trialMonsters = null;
        gameState._trialPlanetConfig = null;
        showScreen('trial-screen');
        renderTrialTower();
        updateHeaderUI();
      }, 1500);
      return;
    }

    // 下一只怪物
    const nextMonster = trialMonsters[gameState.currentMonsterIndex];
    gameState.currentEnemy = { ...nextMonster };
    gameState.currentEnemy.maxHp = nextMonster.hp;
    // NaN防护
    if (isNaN(gameState.currentEnemy.hp) || gameState.currentEnemy.hp <= 0) {
      gameState.currentEnemy.hp = nextMonster.hp || 100;
    }

    // 清除残留子弹，防止误伤新怪兽
    gameState.bullets = [];
    gameState.enemyBullets = [];

    const canvas = gameState.canvas;
    gameState.currentEnemy.x = canvas.width * 0.7;
    gameState.currentEnemy.y = canvas.height * 0.5;
    gameState.currentEnemy.width = nextMonster.isBoss ? 70 : 50;
    gameState.currentEnemy.height = nextMonster.isBoss ? 70 : 50;

    gameState.currentEnemy._attackTimer = 18 + Math.floor(Math.random() * 12);
    gameState.currentEnemy._attackInterval = nextMonster.isBoss ? 35 : (40 + Math.floor(Math.random() * 20));
    gameState.currentEnemy._isCharging = false;
    gameState.currentEnemy._chargeTimer = 0;
    gameState.currentEnemy._chargeDuration = nextMonster.isBoss ? 13 : 10;

    gameState.player.cannonCooldown = 0;
    gameState.player.ultCooldown = 0;
    gameState.player.defendCooldown = 0;
    gameState.player.isDefending = false;

    setTimeout(() => {
      document.getElementById('battle-stage').textContent = `第 ${gameState.currentMonsterIndex + 1}/${totalMonsters} 层`;
      updateSkillCDs();
      updateHeaderUI();
      if (nextMonster.isBoss) {
        addBattleLog(`⚠️ Boss「${nextMonster.name}」出现了！`, 'system');
      } else {
        addBattleLog(`${nextMonster.name} 出现了！准备战斗！`, 'system');
      }
      renderBattleWeapons();
    }, 500);
    return;
  }

  // ===== 星球模式 =====
  gameState.currentMonsterIndex++;
  const currentPlanet = PLANETS[gameState.currentPlanetIndex];

  if (gameState.currentMonsterIndex >= currentPlanet.monsters.length) {
    gameState.completedPlanets.push(currentPlanet.id);
    gameState.currentPlanetIndex++;
    gameState.currentMonsterIndex = 0;

    gameState.player.hp = gameState.player.maxHp;
    addBattleLog(`🌟 ${currentPlanet.name} 全部通关！生命值已完全恢复！`, 'system');
    // 自动更新排行榜（行星通关）
    silentLeaderboardSubmit();

    if (gameState.currentPlanetIndex >= 7) {
      setTimeout(() => {
        stopBattle();
        startFinalBoss();
      }, 1500);
      return;
    }

    setTimeout(() => {
      stopBattle();
      gameState.inBattle = false;
      gameState.currentEnemy = null;
      showScreen('planet-screen');
      renderPlanets();
      updateHeaderUI();
    }, 1500);
  } else {
    const nextMonster = currentPlanet.monsters[gameState.currentMonsterIndex];
    gameState.currentEnemy = { ...nextMonster };
    gameState.currentEnemy.maxHp = nextMonster.hp;

    const canvas = gameState.canvas;
    gameState.currentEnemy.x = canvas.width * 0.7;
    gameState.currentEnemy.y = canvas.height * 0.5;
    gameState.currentEnemy.width = nextMonster.isBoss ? 70 : 50;
    gameState.currentEnemy.height = nextMonster.isBoss ? 70 : 50;

    gameState.currentEnemy._attackTimer = 18 + Math.floor(Math.random() * 12);
    gameState.currentEnemy._attackInterval = nextMonster.isBoss ? 35 : (40 + Math.floor(Math.random() * 20));
    gameState.currentEnemy._isCharging = false;
    gameState.currentEnemy._chargeTimer = 0;
    gameState.currentEnemy._chargeDuration = nextMonster.isBoss ? 13 : 10;

    gameState.player.cannonCooldown = 0;
    gameState.player.ultCooldown = 0;
    gameState.player.defendCooldown = 0;
    gameState.player.isDefending = false;

    setTimeout(() => {
      document.getElementById('battle-stage').textContent = `🎯 第 ${gameState.currentMonsterIndex + 1}/${currentPlanet.monsters.length} 关`;
      updateSkillCDs();
      updateHeaderUI();

      if (nextMonster.isBoss) {
        addBattleLog(`⚠️ Boss「${nextMonster.name}」出现了！`, 'system');
      } else {
        addBattleLog(`${nextMonster.name} 出现了！准备战斗！`, 'system');
      }
      renderBattleWeapons();
    }, 500);
  }
}

function onPlayerDefeated() {
  gameState.inBattle = false;
  stopBattle();
  if (gameState._inPK) {
    const tierName = PK_ARENA[gameState._pkTier].name;
    const currentTitle = PK_ARENA[gameState._pkTier].titles[gameState.currentMonsterIndex] || '';
    document.getElementById('lose-detail').textContent =
      `你在${tierName}中被【${currentTitle}】${gameState.currentEnemy.name} 击败了...\n已解锁至第 ${gameState._pkProgress[gameState._pkTier]}/${PK_ARENA[gameState._pkTier].totalLevels} 级`;
    gameState._inPK = false;
    gameState._pkTier = null;
    gameState._pkOpponents = null;
    gameState._pkPlanetConfig = null;
  } else if (gameState._inTrial) {
    const tierName = TRIAL_TOWER[gameState._trialTier].name;
    document.getElementById('lose-detail').textContent =
      `你在${tierName}中被 ${gameState.currentEnemy.name} 击败了...`;
    gameState._inTrial = false;
    gameState._trialTier = null;
    gameState._trialMonsters = null;
    gameState._trialPlanetConfig = null;
  } else {
    document.getElementById('lose-detail').textContent =
      `你在 ${PLANETS[gameState.currentPlanetIndex].name} 被 ${gameState.currentEnemy.name} 击败了...`;
  }
  setTimeout(() => showScreen('lose-screen'), 800);
}

// ==================== 最终Boss ====================

function startFinalBoss() {
  const finalBoss = { ...FINAL_BOSS };
  finalBoss.maxHp = finalBoss.hp;
  gameState.currentEnemy = finalBoss;
  gameState.inBattle = true;
  gameState._finalBossBattle = true;

  applyWeaponStats(); // 应用武器加成

  const planet = { name: '太阳', enName: 'Sun', icon: '☀️', color: '#ffd700', bgColor: '#1a0a00' };

  showScreen('battle-screen');
  initBattleCanvasForFinal(planet, finalBoss);

  document.getElementById('battle-planet').textContent = '☀️ 最终试炼';
  document.getElementById('battle-stage').textContent = '最终';
  document.getElementById('battle-ult').textContent = '就绪';
  document.getElementById('battle-ult').style.color = '#2ecc71';

  document.getElementById('battle-log').innerHTML = '';
  addBattleLog('🌟 所有七大行星已经通关！', 'system');
  addBattleLog('⚠️⚠️⚠️ 最终Boss「太阳守护者」降临！ ⚠️⚠️⚠️', 'system');
  addBattleLog('击败它，成为太阳系最强的宇航员！', 'system');
}

function initBattleCanvasForFinal(planet, boss) {
  const canvas = document.getElementById('battle-canvas');
  gameState.canvas = canvas;
  gameState.ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 60;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  gameState.player.x = canvas.width * 0.2;
  gameState.player.y = canvas.height * 0.55;
  gameState.player.width = 50;
  gameState.player.height = 50;

  boss.x = canvas.width * 0.65;
  boss.y = canvas.height * 0.45;
  boss.width = 90;
  boss.height = 90;

  // 最终Boss攻击系统（极速攻击）
  boss._attackTimer = 25;
  boss._attackInterval = 30;
  boss._isCharging = false;
  boss._chargeTimer = 0;
  boss._chargeDuration = 18;
  boss._attackPattern = 0; // 攻击模式

  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);

  // 鼠标追踪炮筒旋转
  const handleMouseMove = (e) => {
    if (!gameState.inBattle) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = gameState.player.x + gameState.player.width / 2;
    const centerY = gameState.player.y + gameState.player.height / 2;
    gameState.player.cannonAngle = Math.atan2(mouseY - centerY, mouseX - centerX);
  };
  gameState._mouseHandler = handleMouseMove;
  document.addEventListener('mousemove', handleMouseMove);

  // 鼠标左键长按连射
  const handleMouseDown = (e) => {
    if (!gameState.inBattle || gameState.paused) return;
    if (e.button === 0) {
      e.preventDefault();
      if (!gameState._fireInterval) {
        playerAttack(); // 立即发射第一发
        gameState._fireInterval = setInterval(() => {
          if (!gameState.inBattle || gameState.paused) return;
          playerAttack();
        }, gameState.player.fireInterval);
      }
    }
  };
  const handleMouseUp = (e) => {
    if (e.button === 0) {
      stopFiring();
    }
  };
  gameState._clickHandler = handleMouseDown;
  gameState._upHandler = handleMouseUp;
  document.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mouseup', handleMouseUp);

  updateHeaderUI();
  updateSkillCDs();
  renderBattleWeapons();

  gameState.animFrame = requestAnimationFrame(gameLoop);
}

// 重写 onEnemyDefeated 处理最终Boss
const _originalOnEnemyDefeated = onEnemyDefeated;
onEnemyDefeated = function() {
  if (gameState._finalBossBattle) {
    const enemy = gameState.currentEnemy;
    gameState.player.gold += enemy.gold;
    gameState.player.diamond += 5; // 最终Boss掉5钻石
    gameState.finalBossDefeated = true;
    saveGame();

    spawnParticles(enemy.x + enemy.width / 2, enemy.y + enemy.height / 2, 50, '#ffd700');
    spawnKillEffect(enemy.x + enemy.width / 2, enemy.y + enemy.height / 2);
    spawnKillEffect(enemy.x + enemy.width / 2 - 30, enemy.y + enemy.height / 2 - 20);
    playKillSound();
    gameState.shakeAmount = 20;

    addBattleLog(`🏆🏆🏆 击败了最终Boss「${enemy.name}」！获得 ${enemy.gold} 星币！💎+5`, 'system');
    addBattleLog('🌟 你成为了太阳系最强的宇航员！', 'system');

    gameState.player.totalKills++;
    const finalRank = getCurrentRank();
    if (gameState._lastRankId && finalRank.id > gameState._lastRankId) {
      addBattleLog(`🏅 段位提升！你已成为「${finalRank.name}」！`, 'system');
      awardRankWeapons(gameState._lastRankId, finalRank.id);
    }
    gameState._lastRankId = finalRank.id;
    gameState._lastRankName = finalRank.name;
    gameState._lastRankIcon = finalRank.icon;
    // 自动更新排行榜（最终Boss击杀）
    silentLeaderboardSubmit();

    gameState._finalBossBattle = false;
    gameState.inBattle = false;
    stopBattle();

    setTimeout(() => {
      const rank = getCurrentRank();
      document.getElementById('win-rank').textContent = `最终段位：${rank.icon} ${rank.name}`;
      showScreen('win-screen');
      // 自动弹窗提交到排行榜
      setTimeout(() => autoSubmitLeaderboard(), 500);
    }, 2000);
    return;
  }
  _originalOnEnemyDefeated();
};

// ==================== UI更新 ====================

function updateHeaderUI() {
  const p = gameState.player;
  // 读取玩家自定义名字
  const nameInput = document.getElementById('player-name-input');
  const displayName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : '宇航员';

  const ids = ['battle', 'header', 'trial', 'pk'];
  ids.forEach(prefix => {
    const hpEl = document.getElementById(prefix + '-hp');
    const atkEl = document.getElementById(prefix + '-atk');
    const defEl = document.getElementById(prefix + '-def');
    const goldEl = document.getElementById(prefix + '-gold');
    const diamondEl = document.getElementById(prefix + '-diamond');
    const rankEl = document.getElementById(prefix + '-rank');
    const nameEl = document.getElementById(prefix + '-name');
    if (hpEl) hpEl.textContent = p.hp;
    if (atkEl) atkEl.textContent = p.atk;
    if (defEl) defEl.textContent = p.def;
    if (goldEl) goldEl.textContent = p.gold;
    if (diamondEl) diamondEl.textContent = p.diamond;
    if (rankEl) {
      const rank = getCurrentRank();
      rankEl.textContent = rank.icon + ' ' + rank.name;
    }
    if (nameEl) nameEl.textContent = '👨‍🚀 ' + displayName;
  });
  // 更新商店页面的货币（如果打开中）
  const shopGold = document.getElementById('shop-gold');
  const shopDia = document.getElementById('shop-diamond');
  if (shopGold) shopGold.textContent = p.gold;
  if (shopDia) shopDia.textContent = p.diamond;
}

function addBattleLog(message, type) {
  const log = document.getElementById('battle-log');
  const entry = document.createElement('div');
  entry.className = `log-entry ${type}`;
  entry.textContent = message;
  log.appendChild(entry);
  log.scrollTop = log.scrollHeight;

  // 限制日志数量
  while (log.children.length > 50) {
    log.removeChild(log.firstChild);
  }
}

// ==================== 存档系统 ====================

const SAVE_KEY = 'planetBattle_save';

function saveGame() {
  const p = gameState.player;
  const currentRank = getCurrentRank();
  const data = {
    gold: p.gold,
    diamond: p.diamond,
    totalKills: p.totalKills,
    ownedWeapons: p.ownedWeapons,
    completedPlanets: gameState.completedPlanets,
    finalBossDefeated: gameState.finalBossDefeated,
    pkProgress: gameState._pkProgress || { novice: 0, expert: 0 },
    lastRankId: gameState._lastRankId,
    lastRankName: currentRank.name,
    lastRankIcon: currentRank.icon,
    consumableBonusHp: p.consumableBonusHp || 0
  };
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
  } catch (e) {
    // localStorage 不可用时静默失败
  }
}

function loadGame() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    const p = gameState.player;
    if (typeof data.gold === 'number') p.gold = data.gold;
    if (typeof data.diamond === 'number') p.diamond = data.diamond;
    if (typeof data.totalKills === 'number') p.totalKills = data.totalKills;
    if (data.ownedWeapons && typeof data.ownedWeapons === 'object') {
      p.ownedWeapons = data.ownedWeapons;
    }
    if (Array.isArray(data.completedPlanets)) {
      gameState.completedPlanets = data.completedPlanets;
    }
    if (typeof data.finalBossDefeated === 'boolean') {
      gameState.finalBossDefeated = data.finalBossDefeated;
    }
    if (typeof data.lastRankId === 'number') {
      gameState._lastRankId = data.lastRankId;
    }
    // 段位持久化：即使 totalKills 丢失，也能从存档恢复段位
    if (typeof data.lastRankName === 'string') {
      gameState._lastRankName = data.lastRankName;
    }
    if (typeof data.lastRankIcon === 'string') {
      gameState._lastRankIcon = data.lastRankIcon;
    }
    if (typeof data.consumableBonusHp === 'number') {
      p.consumableBonusHp = data.consumableBonusHp;
    }
  } catch (e) {
    // 存档损坏时静默失败，使用默认值
  }
}

// ==================== 排行榜系统 ====================

const LB_KEY = 'planetBattle_leaderboard';
const LB_MAX = 10; // 最多保存10条

let _lbReturnScreen = 'start-screen'; // 从哪个页面打开的排行榜
let _lbActiveTab = 'composite'; // 当前激活的排行榜标签

function loadLeaderboard() {
  try {
    const raw = localStorage.getItem(LB_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveLeaderboard(data) {
  try {
    localStorage.setItem(LB_KEY, JSON.stringify(data));
  } catch (e) {
    // 静默失败
  }
}

// 从排行榜中移除指定名字（换名时把旧名字从排行榜删除，只保留在旧名字区）
function removeNameFromLeaderboard(name) {
  if (!name) return;
  let lb = loadLeaderboard();
  const beforeLen = lb.length;
  lb = lb.filter(item => item.name !== name);
  if (lb.length !== beforeLen) {
    saveLeaderboard(lb);
    updateStartPlayerCount();
    // 触发跨标签页同步
    _lbLastUpdateTime = Date.now();
    try {
      localStorage.setItem(LB_UPDATE_KEY, String(_lbLastUpdateTime));
    } catch (e) {}
  }
}

function switchLeaderboardTab(tabId) {
  _lbActiveTab = tabId;
  // 更新标签页样式
  document.querySelectorAll('.lb-tab').forEach(tab => {
    tab.classList.toggle('active', tab.textContent.includes(getTabLabel(tabId)));
  });
  renderLeaderboard();
}

function getTabLabel(tabId) {
  const map = {
    composite: '综合排名',
    kills: '总击杀',
    rank: '段位',
    planets: '通关行星',
    gold: '金币',
    diamond: '钻石'
  };
  return map[tabId] || '';
}

function openLeaderboard(fromId) {
  _lbReturnScreen = fromId || 'start-screen';
  _lbActiveTab = 'composite';
  // 重置标签页激活状态
  document.querySelectorAll('.lb-tab').forEach(tab => {
    tab.classList.toggle('active', tab.textContent.includes('综合排名'));
  });
  // 同步首页输入框的名字到排行榜
  const nameInput = document.getElementById('player-name-input');
  const nameDisplay = document.getElementById('leaderboard-my-name-text');
  if (nameInput && nameDisplay) {
    const name = nameInput.value.trim() || '宇航员';
    nameDisplay.textContent = name;
  }
  renderLeaderboard();
  showScreen('leaderboard-screen');
  // 输入名字后自动提交成绩
  autoSubmitIfHasStats();
  // 启动排行榜自动刷新（每3秒刷新，展示所有用户最新信息）
  startLeaderboardAutoRefresh();
}

// 如果玩家有游戏数据，则自动提交（新玩家也会被记录）
function autoSubmitIfHasStats() {
  const p = gameState.player;
  if (p) {
    submitToLeaderboard();
  }
}

// 静默自动保存到排行榜（不显示按钮反馈，后台静默更新）
// 排行榜更新事件键（用于跨标签页同步）
const LB_UPDATE_KEY = 'planetBattle_lb_update_ts';
let _lbRefreshTimer = null;
let _lbLastUpdateTime = null;

function silentLeaderboardSubmit() {
  const p = gameState.player;
  if (!p) return;
  const rank = getCurrentRank();

  let playerName = document.getElementById('player-name-input')?.value || '';
  playerName = playerName.trim();
  if (!playerName) playerName = '宇航员';
  if (playerName.length > 30) playerName = playerName.substring(0, 30);

  const entry = {
    name: playerName,
    totalKills: p.totalKills,
    rankIcon: rank.icon,
    rankName: rank.name,
    rankLevel: rank.id,
    completedPlanets: gameState.completedPlanets.length,
    gold: p.gold,
    diamond: p.diamond,
    date: new Date().toISOString().slice(0, 10)
  };

  const leaderboard = loadLeaderboard();

  const existingIndex = leaderboard.findIndex(item => item.name === playerName);
  if (existingIndex !== -1) {
    leaderboard[existingIndex] = entry;
  } else {
    leaderboard.push(entry);
  }

  leaderboard.sort((a, b) => b.totalKills - a.totalKills);
  if (leaderboard.length > LB_MAX) {
    leaderboard.length = LB_MAX;
  }

  saveLeaderboard(leaderboard);

  // 更新开始界面的玩家数量
  updateStartPlayerCount();

  // 触发跨标签页同步事件
  _lbLastUpdateTime = Date.now();
  try {
    localStorage.setItem(LB_UPDATE_KEY, String(_lbLastUpdateTime));
  } catch (e) {}
}

// 启动排行榜自动刷新（排行榜界面打开时调用）
function startLeaderboardAutoRefresh() {
  stopLeaderboardAutoRefresh();
  _lbRefreshTimer = setInterval(() => {
    renderLeaderboard();
  }, 3000);
}

// 停止排行榜自动刷新
function stopLeaderboardAutoRefresh() {
  if (_lbRefreshTimer) {
    clearInterval(_lbRefreshTimer);
    _lbRefreshTimer = null;
  }
}

// 监听其他标签页的排行榜更新（跨标签页同步）
(function initLeaderboardSync() {
  window.addEventListener('storage', function(e) {
    if (e.key === LB_UPDATE_KEY && e.newValue) {
      _lbLastUpdateTime = parseInt(e.newValue, 10) || Date.now();
      // 如果排行榜界面当前打开，自动刷新显示
      const lbScreen = document.getElementById('leaderboard-screen');
      if (lbScreen && lbScreen.classList.contains('active')) {
        renderLeaderboard();
      }
    }
  });
})();

function closeLeaderboard() {
  // 停止排行榜自动刷新
  stopLeaderboardAutoRefresh();
  // 按照「从哪里来回哪里去」的原则返回
  if (_lbReturnScreen === 'planet-screen') {
    showScreen('planet-screen');
  } else {
    showScreen('start-screen');
  }
}

function submitToLeaderboard() {
  const p = gameState.player;
  const rank = getCurrentRank();

  // 从首页输入框读取名字（支持任意符号/字母/汉字/各国语言）
  let playerName = document.getElementById('player-name-input')?.value || '';
  playerName = playerName.trim();
  if (!playerName) playerName = '宇航员';
  if (playerName.length > 30) playerName = playerName.substring(0, 30);

  const entry = {
    name: playerName,
    totalKills: p.totalKills,
    rankIcon: rank.icon,
    rankName: rank.name,
    rankLevel: rank.id,
    completedPlanets: gameState.completedPlanets.length,
    gold: p.gold,
    diamond: p.diamond,
    date: new Date().toISOString().slice(0, 10)
  };

  const leaderboard = loadLeaderboard();

  // 查找是否已有相同名字的条目，有则替换，无则新增
  const existingIndex = leaderboard.findIndex(item => item.name === playerName);
  if (existingIndex !== -1) {
    // 同名已存在，替换更新
    leaderboard[existingIndex] = entry;
  } else {
    leaderboard.push(entry);
  }

  // 默认按 totalKills 降序存储
  leaderboard.sort((a, b) => b.totalKills - a.totalKills);

  // 限制数量
  if (leaderboard.length > LB_MAX) {
    leaderboard.length = LB_MAX;
  }

  saveLeaderboard(leaderboard);
  renderLeaderboard();

  // 更新玩家数量并触发跨标签页同步
  updateStartPlayerCount();
  _lbLastUpdateTime = Date.now();
  try {
    localStorage.setItem(LB_UPDATE_KEY, String(_lbLastUpdateTime));
  } catch (e) {}

  // 轻提示
  const btn = document.querySelector('#leaderboard-screen .btn-start');
  if (btn) {
    const orig = btn.textContent;
    btn.textContent = '✅ 提交成功！';
    btn.disabled = true;
    btn.style.opacity = '0.6';
    setTimeout(() => {
      btn.textContent = orig;
      btn.disabled = false;
      btn.style.opacity = '1';
    }, 2000);
  }
}



// 计算综合排名得分（各20%权重）
function calcCompositeScore(entry, maxVals) {
  const killsScore = maxVals.maxKills > 0 ? (entry.totalKills / maxVals.maxKills) : 0;
  const rankScore = maxVals.maxRank > 0 ? ((entry.rankLevel || 0) / maxVals.maxRank) : 0;
  const planetsScore = maxVals.maxPlanets > 0 ? ((entry.completedPlanets || 0) / maxVals.maxPlanets) : 0;
  const goldScore = maxVals.maxGold > 0 ? (entry.gold / maxVals.maxGold) : 0;
  const diamondScore = maxVals.maxDiamond > 0 ? ((entry.diamond || 0) / maxVals.maxDiamond) : 0;
  return killsScore * 0.2 + rankScore * 0.2 + planetsScore * 0.2 + goldScore * 0.2 + diamondScore * 0.2;
}

function renderLeaderboard() {
  const tbody = document.getElementById('leaderboard-tbody');
  if (!tbody) return;

  const leaderboard = loadLeaderboard();
  const allData = [...leaderboard];

  const isComposite = _lbActiveTab === 'composite';
  const colspan = isComposite ? 7 : 3;

  // 更新实时状态指示器
  const liveStatus = document.getElementById('leaderboard-live-status');
  if (liveStatus) {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    liveStatus.textContent = `🔄 实时同步中… 上次更新: ${timeStr}（共 ${allData.length} 位玩家）`;
  }

  if (allData.length === 0) {
    tbody.innerHTML = `<tr><td colspan="${colspan}" class="lb-empty">暂无数据，快去冒险吧！🚀</td></tr>`;
    if (liveStatus) liveStatus.textContent = '🔄 等待玩家加入…';
    return;
  }

  // 动态更新表头
  const thead = document.getElementById('lb-thead');
  if (thead) {
    if (isComposite) {
      thead.innerHTML = `<tr>
        <th class="lb-rank">排名</th>
        <th class="lb-name">名字</th>
        <th class="lb-kills">⚔️ 总击杀</th>
        <th class="lb-rankname">🏅 段位</th>
        <th class="lb-planets">🪐 通关行星</th>
        <th class="lb-gold">💰 金币</th>
        <th class="lb-diamond">💎 钻石</th>
      </tr>`;
    } else {
      const headerMap = {
        kills: '⚔️ 总击杀',
        rank: '🏅 段位',
        planets: '🪐 通关行星',
        gold: '💰 金币',
        diamond: '💎 钻石'
      };
      thead.innerHTML = `<tr>
        <th class="lb-rank">排名</th>
        <th class="lb-name">名字</th>
        <th class="lb-stat">${headerMap[_lbActiveTab] || ''}</th>
      </tr>`;
    }
  }

  // 根据不同标签排序
  let sortedData;
  if (isComposite) {
    // 综合排名：计算各维度最大值后归一化权重
    let maxKills = 1, maxRank = 1, maxPlanets = 1, maxGold = 1, maxDiamond = 1;
    allData.forEach(e => {
      if (e.totalKills > maxKills) maxKills = e.totalKills;
      if ((e.rankLevel || 0) > maxRank) maxRank = e.rankLevel || 0;
      if ((e.completedPlanets || 0) > maxPlanets) maxPlanets = e.completedPlanets || 0;
      if (e.gold > maxGold) maxGold = e.gold;
      if ((e.diamond || 0) > maxDiamond) maxDiamond = e.diamond || 0;
    });
    const maxVals = { maxKills, maxRank, maxPlanets, maxGold, maxDiamond };
    sortedData = allData.map(e => ({ ...e, _score: calcCompositeScore(e, maxVals) }));
    sortedData.sort((a, b) => b._score - a._score);
  } else {
    sortedData = [...allData];
    switch (_lbActiveTab) {
      case 'kills':
        sortedData.sort((a, b) => b.totalKills - a.totalKills);
        break;
      case 'rank':
        sortedData.sort((a, b) => (b.rankLevel || 0) - (a.rankLevel || 0));
        break;
      case 'planets':
        sortedData.sort((a, b) => (b.completedPlanets || 0) - (a.completedPlanets || 0));
        break;
      case 'gold':
        sortedData.sort((a, b) => b.gold - a.gold);
        break;
      case 'diamond':
        sortedData.sort((a, b) => (b.diamond || 0) - (a.diamond || 0));
        break;
    }
  }

  const medalIcons = { 1: '🥇', 2: '🥈', 3: '🥉' };

  tbody.innerHTML = sortedData.map((entry, idx) => {
    const rankNum = idx + 1;
    const rankDisplay = rankNum <= 3
      ? `<span class="rank-medal">${medalIcons[rankNum]}</span>`
      : rankNum;

    const rowClass = rankNum <= 3 ? ` class="top-${rankNum}"` : '';

    if (isComposite) {
      const scoreText = entry._score != null
        ? ` <span style="color:#888;font-size:0.75rem;">(${(entry._score * 100).toFixed(1)})</span>`
        : '';
      return `<tr${rowClass}>
        <td class="lb-rank">${rankDisplay}</td>
        <td class="lb-name">${escapeHtml(entry.name)}</td>
        <td class="lb-kills">${entry.totalKills}</td>
        <td class="lb-rankname">${entry.rankIcon} ${entry.rankName}${scoreText}</td>
        <td class="lb-planets">${entry.completedPlanets || 0}/7</td>
        <td class="lb-gold">⭐ ${entry.gold}</td>
        <td class="lb-diamond">💎 ${entry.diamond || 0}</td>
      </tr>`;
    }

    let statDisplay = '';
    switch (_lbActiveTab) {
      case 'kills':
        statDisplay = entry.totalKills;
        break;
      case 'rank':
        statDisplay = `${entry.rankIcon} ${entry.rankName}`;
        break;
      case 'planets':
        statDisplay = `${entry.completedPlanets || 0}/7`;
        break;
      case 'gold':
        statDisplay = `⭐ ${entry.gold}`;
        break;
      case 'diamond':
        statDisplay = `💎 ${entry.diamond || 0}`;
        break;
    }

    return `<tr${rowClass}>
      <td class="lb-rank">${rankDisplay}</td>
      <td class="lb-name">${escapeHtml(entry.name)}</td>
      <td class="lb-stat">${statDisplay}</td>
    </tr>`;
  }).join('');
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// 游戏通关时自动提交
function autoSubmitLeaderboard() {
  const p = gameState.player;
  const rank = getCurrentRank();

  // 从首页输入框读取名字（支持任意符号/字母/汉字/各国语言）
  let playerName = document.getElementById('player-name-input')?.value || '';
  playerName = playerName.trim();
  if (!playerName) playerName = '宇航员';
  if (playerName.length > 30) playerName = playerName.substring(0, 30);

  const entry = {
    name: playerName,
    totalKills: p.totalKills,
    rankIcon: rank.icon,
    rankName: rank.name,
    rankLevel: rank.id,
    completedPlanets: gameState.completedPlanets.length,
    gold: p.gold,
    diamond: p.diamond,
    date: new Date().toISOString().slice(0, 10)
  };

  const leaderboard = loadLeaderboard();
  leaderboard.push(entry);
  leaderboard.sort((a, b) => {
    if (b.totalKills !== a.totalKills) return b.totalKills - a.totalKills;
    return b.gold - a.gold;
  });
  if (leaderboard.length > LB_MAX) leaderboard.length = LB_MAX;
  saveLeaderboard(leaderboard);

  // 触发跨标签页同步
  updateStartPlayerCount();
  _lbLastUpdateTime = Date.now();
  try {
    localStorage.setItem(LB_UPDATE_KEY, String(_lbLastUpdateTime));
  } catch (e) {}

  // 短暂提示后跳转排行榜
  alert('✅ 已成功提交到排行榜！');
  renderLeaderboard();
  openLeaderboardFromStart();
}

// 当点击开始界面的排行榜时
function openLeaderboardFromStart() {
  openLeaderboard('start-screen');
}

// ==================== 好友搜索系统 ====================

function openFriendsScreen() {
  showScreen('friends-screen');
  const input = document.getElementById('friends-search-input');
  if (input) {
    input.value = '';
    input.focus();
  }
  searchFriends(); // 初始显示全部排行榜成员
}

function closeFriendsScreen() {
  showScreen('start-screen');
}

function searchFriends() {
  const tbody = document.getElementById('friends-tbody');
  const input = document.getElementById('friends-search-input');
  if (!tbody || !input) return;

  const keyword = input.value.trim();
  const leaderboard = loadLeaderboard();

  if (leaderboard.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" class="fr-empty">📭 排行榜暂无数据</td></tr>';
    return;
  }

  // 按名字模糊匹配：关键字在名字中出现即可（不区分大小写）
  let results;
  if (keyword === '') {
    // 无搜索词时显示全部
    results = leaderboard.slice(0, 20);
  } else {
    const kw = keyword.toLowerCase();
    results = leaderboard.filter(item =>
      item.name && item.name.toLowerCase().includes(kw)
    );
  }

  if (results.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" class="fr-empty">🔍 未找到名字包含「' + escHtmlForFriends(keyword) + '」的玩家</td></tr>';
    return;
  }

  let html = '';
  for (const item of results) {
    html += '<tr>';
    html += '<td class="fr-name">' + escHtmlForFriends(item.name || '未知') + '</td>';
    html += '<td class="fr-kills">' + (item.totalKills || 0) + '</td>';
    html += '<td class="fr-rank">' + (item.rankName || '-') + '</td>';
    html += '<td class="fr-planets">' + (item.completedPlanets || 0) + '</td>';
    html += '<td class="fr-gold">' + (item.gold || 0) + '</td>';
    html += '<td class="fr-diamond">' + (item.diamond || 0) + '</td>';
    html += '</tr>';
  }
  tbody.innerHTML = html;
}

function escHtmlForFriends(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ==================== 好友按钮长按：删除名字中的「作者」 ====================

let _friendsLongPressTimer = null;
let _friendsLongPressTriggered = false;
const FRIENDS_LONG_PRESS_MS = 500;

function handleFriendsBtnDown(e) {
  if (e.type === 'touchstart') e.preventDefault();
  _friendsLongPressTriggered = false;
  _friendsLongPressTimer = setTimeout(() => {
    _friendsLongPressTriggered = true;
    const input = document.getElementById('player-name-input');
    if (input) {
      input.value = input.value.split('作者').join('');
      input.focus();
      // 震动/视觉反馈
      if (navigator.vibrate) navigator.vibrate(80);
      const btn = document.getElementById('friends-btn');
      if (btn) {
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => { btn.style.transform = ''; }, 150);
      }
    }
  }, FRIENDS_LONG_PRESS_MS);
}

function handleFriendsBtnUp(e) {
  if (_friendsLongPressTimer) {
    clearTimeout(_friendsLongPressTimer);
    _friendsLongPressTimer = null;
  }
}

function handleFriendsBtnClick(e) {
  // 长按触发后，不再响应点击打开好友界面
  if (_friendsLongPressTriggered) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
  openFriendsScreen();
}

// ==================== 建议反馈系统 ====================

const FEEDBACK_KEY = 'planetBattle_feedback';

function openFeedbackScreen() {
  showScreen('feedback-screen');
  renderFeedbackList();
  const input = document.getElementById('feedback-input');
  if (input) input.focus();
}

function closeFeedbackScreen() {
  showScreen('start-screen');
}

function loadFeedback() {
  try {
    const raw = localStorage.getItem(FEEDBACK_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveFeedback(list) {
  try {
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(list));
  } catch (e) {}
}

function submitFeedback() {
  const input = document.getElementById('feedback-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) {
    alert('请先输入建议内容哦～');
    return;
  }

  const list = loadFeedback();
  list.push({
    text: text,
    time: new Date().toLocaleString('zh-CN'),
    name: (document.getElementById('player-name-input')?.value?.trim() || '匿名宇航员')
  });
  saveFeedback(list);
  input.value = '';
  renderFeedbackList();
  alert('✅ 感谢你的建议！我们已经收到了。');
}

function renderFeedbackList() {
  const container = document.getElementById('feedback-list');
  if (!container) return;
  const list = loadFeedback();
  if (list.length === 0) {
    container.innerHTML = '<div class="feedback-empty">📭 还没有建议，来抢沙发吧！</div>';
    return;
  }
  let html = '';
  for (let i = list.length - 1; i >= 0; i--) {
    const item = list[i];
    html += '<div class="feedback-item">';
    html += '<div class="feedback-item-text">' + escHtmlForFriends(item.text || '') + '</div>';
    html += '<div class="feedback-item-meta">' + escHtmlForFriends(item.name || '匿名') + ' · ' + escHtmlForFriends(item.time || '') + '</div>';
    html += '</div>';
  }
  container.innerHTML = html;
}

// ==================== 全局键盘监听 ====================

// 在非战斗页面按 E 返回主页
document.addEventListener('keydown', function(e) {
  if (e.key === 'e' || e.key === 'E') {
    if (!gameState.inBattle) {
      // 所有非战斗页面都支持 E 返回主页
      const battleScreen = document.getElementById('battle-screen');
      const isInBattleScreen = battleScreen && battleScreen.classList.contains('active');
      if (!isInBattleScreen) {
        e.preventDefault();
        showScreen('start-screen');
      }
    }
  }
});

// ==================== 初始化 ====================

// 旧名字系统存储键（需在 renderOldNames 调用前定义）
const OLD_NAMES_KEY = 'planetBattle_oldNames';
const LAST_NAME_KEY = 'planetBattle_lastName';

loadGame();
// 一次性清理：删除排行榜第1名、第2名和第3名
(function cleanupLeaderboardOnce() {
  const FLAG_KEY = 'planetBattle_lb_cleanup_done_v2';
  if (localStorage.getItem(FLAG_KEY)) return;
  let lb = loadLeaderboard();
  if (lb.length >= 3) {
    // 按击杀数降序排列（和排行榜存储顺序一致）
    lb.sort((a, b) => b.totalKills - a.totalKills);
    // 过滤掉第1名(index 0)、第2名(index 1)和第3名(index 2)
    lb = lb.filter((_, i) => i !== 0 && i !== 1 && i !== 2);
    saveLeaderboard(lb);
  }
  localStorage.setItem(FLAG_KEY, '1');
})();
applyWeaponStats();
updateHeaderUI();
showScreen('start-screen');
// 首次加载时若没有旧名字，预置演示数据以便预览
(function seedDemoOldNames() {
  if (loadOldNames().length === 0 && !loadLastName()) {
    saveOldNames([{ name: '星际猎人', remaining: 3 }, { name: '宇宙游侠', remaining: 5 }]);
  }
})();
renderOldNames();

// ==================== 旧名字系统函数 ====================

function loadOldNames() {
  try {
    const raw = localStorage.getItem(OLD_NAMES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}

function saveOldNames(list) {
  try {
    localStorage.setItem(OLD_NAMES_KEY, JSON.stringify(list));
  } catch (e) {}
}

function loadLastName() {
  try {
    return localStorage.getItem(LAST_NAME_KEY) || '';
  } catch (e) { return ''; }
}

function saveLastName(name) {
  try {
    localStorage.setItem(LAST_NAME_KEY, name);
  } catch (e) {}
}

// 开始游戏时追踪旧名字：若名字变更，旧名字存入列表，并从排行榜中移除旧名字
function trackOldName() {
  const input = document.getElementById('player-name-input');
  const newName = (input && input.value.trim()) ? input.value.trim() : '宇航员';
  const lastName = loadLastName();

  // 名字变了 且 旧名字非空非默认
  if (lastName && lastName !== newName && lastName !== '宇航员') {
    let oldNames = loadOldNames();
    // 避免重复：先从旧名字列表中移除同名项
    oldNames = oldNames.filter(item => item.name !== newName);
    // 也避免重复添加已存在的旧名字
    if (!oldNames.find(item => item.name === lastName)) {
      oldNames.push({ name: lastName, remaining: 3 });
    }
    saveOldNames(oldNames);

    // 关键：从排行榜中移除旧名字（每个用户只能有一个名字在排行榜上）
    removeNameFromLeaderboard(lastName);
  }

  // 如果新名字在旧名字列表中，移除它（因为已经重新使用了）
  if (newName !== '宇航员') {
    let oldNames = loadOldNames();
    const idx = oldNames.findIndex(item => item.name === newName);
    if (idx !== -1) {
      oldNames.splice(idx, 1);
      saveOldNames(oldNames);
    }
  }

  saveLastName(newName);
}

// 回到主页时递减所有旧名字剩余次数，归零则删除
function decrementOldNames() {
  let oldNames = loadOldNames();
  if (oldNames.length === 0) return;
  const updated = [];
  for (const item of oldNames) {
    const r = item.remaining - 1;
    if (r > 0) {
      updated.push({ name: item.name, remaining: r });
    }
    // remaining <= 0 → 到期自动删除，不加入 updated
  }
  saveOldNames(updated);
}

// 调整某个旧名字的剩余次数
function adjustOldNameRemaining(name, delta) {
  let oldNames = loadOldNames();
  const item = oldNames.find(o => o.name === name);
  if (!item) return;
  item.remaining = Math.max(1, Math.min(99, item.remaining + delta));
  saveOldNames(oldNames);
  renderOldNames();
}

// 删除某个旧名字
function deleteOldName(name) {
  let oldNames = loadOldNames();
  oldNames = oldNames.filter(o => o.name !== name);
  saveOldNames(oldNames);
  renderOldNames();
}

// 点击旧名字按钮：填入输入框
function useOldName(name) {
  const input = document.getElementById('player-name-input');
  if (input) input.value = name;
}

// 渲染旧名字按钮条
function renderOldNames() {
  const bar = document.getElementById('old-names-bar');
  if (!bar) return;
  const oldNames = loadOldNames();
  if (oldNames.length === 0) { bar.innerHTML = ''; return; }

  let html = '<span class="old-label">📜 旧名字：</span>';
  for (const item of oldNames) {
    html += `<div class="old-name-btn" onclick="useOldName('${escHtml(item.name)}')" title="点击使用此名字">`;
    html += `<span class="old-name-text">${escHtml(item.name)}</span>`;
    html += `<span class="old-name-count">${item.remaining}次</span>`;
    html += `<span class="old-name-adj" onclick="event.stopPropagation();adjustOldNameRemaining('${escHtml(item.name)}',-1)" title="减少1次">−</span>`;
    html += `<span class="old-name-adj" onclick="event.stopPropagation();adjustOldNameRemaining('${escHtml(item.name)}',1)" title="增加1次">+</span>`;
    html += `<span class="old-name-del" onclick="event.stopPropagation();deleteOldName('${escHtml(item.name)}')" title="删除">✕</span>`;
    html += `</div>`;
  }
  bar.innerHTML = html;
}

// HTML 转义（用于旧名字显示中防止 XSS）
function escHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// 名字持久化：刷新页面后恢复名字
const NAME_KEY = 'planetBattle_playerName';

(function initPlayerName() {
  const input = document.getElementById('player-name-input');
  if (!input) return;

  // 通用存储（localStorage 不可用时降级为 cookie）
  function saveName(name) {
    try {
      localStorage.setItem(NAME_KEY, name);
    } catch (e) {
      const d = new Date();
      d.setFullYear(d.getFullYear() + 1);
      document.cookie = NAME_KEY + '=' + encodeURIComponent(name) + ';expires=' + d.toUTCString() + ';path=/';
    }
  }

  function loadName() {
    try {
      const v = localStorage.getItem(NAME_KEY);
      if (v !== null && v !== undefined) return v;
    } catch (e) {}
    const match = document.cookie.match(new RegExp('(^| )' + NAME_KEY + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  }

  // 恢复名字
  const savedName = loadName();
  if (savedName) {
    input.value = savedName;
  }

  // 输入时自动保存
  input.addEventListener('input', function() {
    saveName(this.value.trim());
  });
})();
