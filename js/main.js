/* ═══════════════════════════════════════════
   武子宜作品集 · 交互脚本
   卡片翻转开场 / 视差 / Reveal / 项目档案模态框
   ═══════════════════════════════════════════ */

/* ───────── 项目档案数据（口径：2025.03 简历 + 作品集） ───────── */
const PROJECTS = {
  audi: {
    no: "No.01", cat: "直播项目", catClass: "m__cat--live", time: "2024.06 — 2024.07",
    title: "奥迪新 Q7 / Q8 / SQ7 上市发布会 · 一汽奥迪 ✕ 中国国家地理联合直播",
    role: "内容统筹",
    cover: { img: "assets/p-audi.jpg", c1: "#A9BAC6", c2: "#7E93A3" },
    replays: [
      "https://weixin.qq.com/sph/AzyY9sbgUP",
      "https://weixin.qq.com/sph/AaN4NRTtFZ",
      "https://weixin.qq.com/sph/AGH8IDPGJT"
    ],
    bg: "奥迪新 Q7 / Q8 / SQ7 上市发布会，一汽奥迪 ✕ 中国国家地理联合直播，共三场。",
    duties: [
      "独立输出全流程脚本与 Rundown",
      "高效调度现场嘉宾与道具，保障直播流程顺畅推进"
    ],
    process: "三场直播逐场对齐内容与呈现细节；现场按 Rundown 推进嘉宾调度与道具执行，保障传播目标达成。",
    data: [["1000w+", "三场累计观看量"], ["2k+", "账号涨粉"]]
  },
  banana: {
    no: "No.02", cat: "直播项目", catClass: "m__cat--live", time: "2023 — 2024",
    title: "伊利许凯直播 & 杜海涛淘宝潮播间",
    role: "现场导演",
    cover: { img: "assets/p-banana.jpg", c1: "#B29AA7", c2: "#8E7285" },
    bg: "伊利许凯直播与杜海涛淘宝潮播间。",
    duties: [
      "设计直播流程与道具场景",
      "推动现场节奏把控与突发问题协调"
    ],
    process: "道具场景按直播环节成组设计，现场紧盯流程节点推进节奏，突发状况即时协调，促进品牌产品高效曝光。",
    data: [["300w+", "单场观看量超"], ["高效", "品牌产品曝光"]]
  },
  bns: {
    no: "No.03", cat: "直播项目", catClass: "m__cat--live", time: "2023.12 — 2024.01",
    title: "B 站女团 NS 家族出道直播",
    role: "内容导演",
    cover: { img: "assets/p-bns.jpg", c1: "#A9BCA8", c2: "#7F987F" },
    bg: "B 站女团 NS 家族出道直播。",
    duties: [
      "主导产出 4 期完整团综创意及多版直播脚本",
      "全程把控艺人引导，推进直播顺利进行"
    ],
    process: "前期产出团综创意与多版直播脚本，现场全程把控艺人引导与直播节奏。",
    data: [["20w+", "点赞播放量突破"], ["4 期", "完整团综创意"]]
  },
  qqstar: {
    no: "No.04", cat: "直播项目", catClass: "m__cat--live", time: "2024.08 — 2025.01",
    title: "QQ 星抖音年货节、开学季特色专场直播",
    role: "内容统筹",
    cover: { img: "assets/p-qqstar.jpg", c1: "#C89B83", c2: "#A9745C" },
    bg: "QQ 星抖音年货节、开学季特色专场直播。",
    duties: [
      "基于季节性节点独立策划 4 版创意方案",
      "严控视觉物料制作，负责脚本与 Rundown 输出"
    ],
    process: "围绕年货节与开学季两个节点分别策划创意方案，把控视觉物料制作与落地。",
    data: [["10w+", "单场观看量突破"], ["+25%", "互动率提升"]]
  },
  lynkco: {
    no: "No.05", cat: "直播项目", catClass: "m__cat--live", time: "2024.07 — 2024.09",
    title: "领克 Z10 上市发布会直播",
    role: "内容策划、执行导演",
    cover: { img: "assets/p-lynkco.jpg", c1: "#B9B2A6", c2: "#948C7E" },
    bg: "领克 Z10 上市发布会直播。",
    duties: [
      "负责新车发布会及户外直播的环节策划与脚本输出",
      "担任现场执行导演，指挥拍摄并布置场景动线"
    ],
    process: "外场直播环节与脚本围绕发布会流程设计；现场指挥拍摄、布置场景动线，保障品牌卖点在直播中的精准视觉还原。",
    data: [["外场直播", "环节策划 & 脚本"], ["品牌卖点", "精准视觉还原"]]
  },
  icar: {
    no: "No.06", cat: "直播项目", catClass: "m__cat--live", time: "2024 · 广州",
    title: "易车 · FINAL iCAR V23 广州发布会营地直播",
    role: "内容导演",
    cover: { img: "assets/p-icar.jpg", c1: "#B3B9A2", c2: "#8A9377" },
    bg: "FINAL 易车 iCAR V23 广州发布会营地直播。",
    duties: [
      "直播脚本策划与视觉物料设计",
      "结合产品卖点与用户兴趣设计环节动线"
    ],
    process: "以营地场景打造发布会「第二现场」，脚本与物料围绕产品卖点与用户兴趣设计环节动线。",
    data: [["80w+", "单场直播观看量"], ["第二现场", "发布会营地直播"]]
  },
  yiheyuan: {
    no: "No.01", cat: "大型晚会演唱会", catClass: "m__cat--gala", time: "2026.01",
    title: "抖音溜达节 · 颐和园非遗晚会",
    role: "内容统筹",
    cover: { img: "assets/p-yiheyuan.jpg", c1: "#C08A6F", c2: "#96604A" },
    bg: "抖音溜达节落地颐和园，打造非遗主题晚会。",
    duties: [
      "独立完成部分节目秀案撰写",
      "统筹全场秀案与台本的一致性，通过精准的 RUNDOWN 控时",
      "对接品牌方与多位重磅嘉宾"
    ],
    process: "以秀案与台本一致为前提统筹全场内容，通过 RUNDOWN 精准控时，保障整场高规格晚会流畅呈现，实现非遗文化与品牌价值融合。",
    data: [["全场", "秀案统筹"], ["RUNDOWN", "精准控时"]]
  },
  kuaishou: {
    no: "No.02", cat: "大型晚会演唱会", catClass: "m__cat--gala", time: "2022 — 2023",
    title: "快手 2023 春季盛典 & 2022 年度百大盛典",
    role: "内容导演、现场 PD",
    cover: { img: "assets/p-kuaishou.jpg", c1: "#C79A7C", c2: "#A17356" },
    bg: "快手 2023 年春季盛典、2022 年年度百大盛典。",
    duties: [
      "对 120+ 名头部主播进行深度背调，策划高互动微综环节",
      "负责现场 PD 与台口调度，保障盛典流程运行"
    ],
    process: "以深度背调支撑秀案与微综环节设计；现场 PD 与台口调度保障万人盛典长时段直播平稳运行。",
    data: [["1000w+", "单场播放量突破"], ["年度奖项", "快手内部奖项"]]
  },
  qishui: {
    no: "No.03", cat: "大型晚会演唱会", catClass: "m__cat--gala", time: "2025.09",
    title: "汽水音乐节 · 校园迎新派对",
    role: "道具 / 乐器导演",
    cover: { img: "assets/p-qishui.jpg", c1: "#C9B189", c2: "#A38660" },
    bg: "汽水音乐节校园迎新派对。",
    duties: [
      "负责 12 组艺人、57 首歌曲的乐器对接与翻台调度",
      "严密的电路通路测试与快速沟通，保障高频换场安全"
    ],
    process: "按演出顺序逐组完成乐器对接、电路通路测试与翻台调度，实现高频换场下的安全执行。",
    data: [["12 组 / 57 首", "乐器对接与翻台调度"], ["100%", "零失误安全执行"]]
  },
  liyugang: {
    no: "No.04", cat: "大型晚会演唱会", catClass: "m__cat--gala", time: "2024.11 — 2024.12",
    title: "李玉刚「幻·国潮」演唱会南京场",
    role: "导播助理",
    cover: { img: "assets/p-liyugang.jpg", c1: "#C4A2A0", c2: "#9C7472" },
    bg: "李玉刚「幻·国潮」演唱会南京场。",
    duties: [
      "精准整理导播调度细节",
      "协助完成大屏画面导播切换"
    ],
    process: "彩排期整理导播调度细节形成方案；现场协助导播完成大屏画面切换，保障视觉呈现统一流畅。",
    data: [["零失误", "高标准现场执行"], ["大屏画面", "协助导播切换"]]
  },
  zhangwei: {
    no: "No.05", cat: "大型晚会演唱会", catClass: "m__cat--gala", time: "2024.06",
    title: "大张伟「大好时光」演唱会深圳场",
    role: "台口导演 & 道具导演",
    cover: { img: "assets/p-zhangwei.jpg", c1: "#9FAEB8", c2: "#75878F" },
    bg: "大张伟「大好时光」演唱会深圳场。",
    duties: [
      "现场负责台口调度与道具执行",
      "协调人员与道具衔接，保障演唱会环节顺利过渡"
    ],
    process: "台口按环节时序协调人员与道具衔接，保障演唱会各环节顺利过渡。",
    data: [["台口调度", "现场执行"], ["道具衔接", "环节顺利过渡"]]
  }
};

/* ───────── 新闻稿全文（转录自作品集） ───────── */
const NEWS = {
  short: {
    kicker: "新闻稿写作 · 短消息报道",
    title: "鲜惠超市的“邻里经济学”",
    body: `
      <p>在济南市福康路67号的福景佳苑小区旁，鲜惠超市的招牌已经经营了八年。这家由 40 多岁的夫妻档经营的社区小店，面积不足 120 平方米，却在周边便利店频繁更迭、大型商超虎视眈眈的环境中，走出了一条独特的生存路径，探索出一套独属于鲜惠超市的“邻里经济学”。</p>
      <p>鲜惠超市距离人流量最大的小区门仅 20 多米，步行不到 1 分钟即可到达。尽管往东再多走 5 分钟即可到达规模更大的世纪华联连锁超市，但对于日常采购蔬菜生活用品的居民而言，“多走几步”的时间成本远高于微不足道的商品差价。“其实这几家超市的菜价格都差不多，这家的看着还新鲜点。”常客刘女士透露。“平时都是下班路上买菜，反正从哪都是买，走到小区门口再买还能轻松点少拎几步路也方便点。”</p>
      <p>在不到 120 平的店面空间里，也处处展现着王老板夫妇的精心设计：小区居民们需求量最大的水果蔬菜摆门店正中央，每种菜的旁边都有大大的牌子明码标价。</p>
      <p>考虑到小区里就有幼儿园，王老板还特意在超市门口摆放了两个摇摆车和一个小型蹦床。每到下午孩子放学时，总有几个小孩会拉着家长光顾。</p>
      <p>“小孩嘛，看见摇摆车都想坐，更别说这些零嘴了，有时候冬天还卖点糖葫芦，一个孩子吃就勾得一圈小孩都想要。”王老板笑着说道。</p>
      <p>“下班啦”“今天没接孩子啊”“张老师今天没值夜班啊”“走了啊”进出的顾客总会和老板娘喏了两句。短短几句交谈，顾客们都笑眯眯地进店又笑眯眯地离开。</p>
      <p>小区依山而建。考虑到小区靠山，步行对体力的消耗较大，鲜惠超市会为小区住户提供送货上门服务。“像啤酒啊米面油啊这些，能送的我们都给人送到家门口去。反正有电动车，一拧油门的事，总不能让人家下了班还扛两箱啤酒爬山。平时都是他去送，我就在店里。”老板娘说道。</p>
      <p>“做生意嘛，用心的事，特别是像我们这种开社区店的。邻里邻居的，跟大家打好关系，总不能吃不上饭。”老板说。</p>`
  },
  deep: {
    kicker: "新闻稿写作 · 深度采访报道",
    title: "眼镜熊考研机构：专业与温情共筑考研之路",
    body: `
      <p>眼镜熊是一家考研机构，以小而精定位和差异化服务打动了很多考研学子。为了提高上岸率，他们选择考上对应院校的学生进行回头辅导。</p>
      <h6>从“上岸者”到“同行者”：直系经验的传承与分工</h6>
      <p>眼镜熊的创立源于创始人自身的考研困境。2017 年，在瓦洛佳、拖鞋哥等一众针对中国传媒大学、中国人民大学等一系列新传头部院校迅猛发展的背景下，面对小众院校资料稀缺的难题，眼镜熊机构的创始人桃子学姐自主摸索考研上岸后通过微博分享经验，逐步从答疑、批改发展为专业授课服务团队。</p>
      <p>如今，团队成员多为辅导院校的直系学长学姐，机构成员的加入经历，本身就是一段“上岸者反哺”的温情故事，多位学长学姐均因亲身体验过机构服务而主动加入：有人在模拟考中受挫于精准推题，有人在二战择校时通过独家院校分析找到方向。泡泡学姐回忆，自己因东北财经大学模拟考与眼镜熊结缘，上岸后主动申请加入团队。经过试讲与筛选，她凭借考研期间积累的热点专题知识，负责课程讲解与资料修订。“桃姐会根据成员特点分配任务，比如我性格外向，就主攻授课；另一些擅长文字的小伙伴则专注资料打磨。”这种基于个人优势的分工模式，既提升效率，也增强了团队凝聚力。</p>
      <h6>个性化挑战与服务并行</h6>
      <p>在服务过程中，团队也面临挑战。在 24 东财复试班中，一位初试高分学员曾因拒绝进群、拖延经验贴并频繁发送长段提问让机构成员倍感头疼。但眼镜熊团队并未放弃：班主任持续沟通说服其融入集体，授课学姐耐心解答其长达数百字的复杂提问。这段经历成为团队服务理念的缩影——即使面对个性化挑战，也坚持“有问必答”的督学模式。正如团队成员大喵学姐所言：“我们不做一次性买卖，而是从备考到入学的全程陪伴者。”</p>
      <h5>内向时代的生存哲学：小而美的灵活转身</h5>
      <p>面对行业内“课程时长军备竞赛”“资料厚度比拼”等更新迭代的现象，眼镜熊前期做过调研，有体验过大机构考研机构的网友表示“像拖鞋哥这个机构主流院校的话完全 ok 的”“这里是有针对小班的，但是上课还是大通铺，并不是针对小班上课的”，了解到广大学生对大机构的评价，眼镜熊选择“精准反卷”。大机构的“0 元基础课”冲击了传统班型，眼镜熊转而聚焦答题技巧与应试资料优化：在资料修订上，摒弃“大而全”的堆砌，聚焦目标院校考纲，加入真题解析和答题模板；在课程设计上，针对 25 届学员思维模式变化，增加互动式案例分析，避免单向灌输。同时，团队坦言会主动借鉴拖鞋、瓦洛佳等大机构的管理经验，例如优化小红书运营提升曝光度，在保持小机构灵活性的同时吸收行业精华。小红书名为“南师新传的 CCa”的网友总结：拖鞋哥推文一定看，简洁易懂可以帮助做知识积累；新传考研真经会有很多免费资料集锦，建议跟一下每个月的热点；爱传播的实务课质量很高。眼镜熊吸取经验，每个月不定期发布推文，逐步开设热点专题、设计每日打卡背诵等。</p>
      <h6>破除“信息差无用论”：直系资源的不可替代性</h6>
      <p>针对“小众院校无需报班”的观点，直系学长学姐是机构的核心优势。创始人桃子学姐强调：“我们能同步院校动态、导师偏好，甚至覆盖入学后的资源支持。”区别于大机构的临时外聘讲师，眼镜熊的团队成员均为目标院校近年的上岸学生，能实时对接导师动态、提炼出题规律。例如在东财新传辅导中，团队对目标院校进行针对性分析后发现，东财侧重基础知识，而 985 院校偏重热点，靶向教学才能避免“无效内卷”。泡泡学姐强调：“报班不仅是为上岸提供保障，更能为研究生阶段积累知识储备。”团队不仅提供参考书划重点，更结合院校偏好补充独家热点专题，这些知识在研究生阶段仍具实用价值。杰森学长补充：“报班不是赌上线，而是用专业服务提升高分上岸的确定性。”</p>
      <h6>给考研学子的建议：靶向治疗与性价比之选</h6>
      <p>谈及院校与机构选择，眼镜熊团队的几位成员都结合自身经历给出务实建议：桃子学姐强调在海量的信息中，匹配院校考纲的课程与资料比“大而全”更高效；大喵学姐表示择业选择与就业方向、本科专业的转化很重要，方向一致事半功倍；泡泡学姐提醒需要警惕“高价陷阱”，不管是在机构还是在资料的选择上，都要综合各方评价理性评估性价比；读研地的资源也会直接影响职业规划，切勿盲目冲名校，杰森学长补充。</p>`
  }
};

/* ═══════════ 开场：卡片翻转 + 光效扫过 ═══════════ */
(function () {
  const intro = document.getElementById('intro');
  if (!intro) return;
  document.body.style.overflow = 'hidden';
  let closed = false;
  function close() {
    if (closed) return;
    closed = true;
    intro.classList.add('intro--out');
    document.body.style.overflow = '';
    setTimeout(() => intro.remove(), 950);
  }
  intro.addEventListener('click', close);
  setTimeout(close, 2750);
})();

/* ═══════════ 视差滚动（lerp 平滑） ═══════════ */
(function () {
  const els = Array.from(document.querySelectorAll('[data-speed]'));
  if (!els.length) return;
  let target = window.scrollY, current = target, raf = null;
  function loop() {
    target = window.scrollY;
    current += (target - current) * 0.09;
    if (Math.abs(target - current) < 0.1) current = target;
    els.forEach(el => {
      const sp = parseFloat(el.dataset.speed) || 0;
      el.style.transform = `translate3d(0, ${(current * sp).toFixed(2)}px, 0)`;
    });
    raf = (Math.abs(target - current) > 0.1) ? requestAnimationFrame(loop) : null;
  }
  window.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(loop); }, { passive: true });
})();

/* ═══════════ Reveal 入场 & 数字/进度条触发 ═══════════ */
(function () {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add('reveal--in');
      en.target.querySelectorAll('[data-count]').forEach(runCounter);
      if (en.target.matches('[data-count]')) runCounter(en.target);
      en.target.querySelectorAll('.bar').forEach(runBar);
      if (en.target.matches('.bar')) runBar(en.target);
      io.unobserve(en.target);
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -4% 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  const ioBar = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { runBar(e.target); ioBar.unobserve(e.target); }
  }), { threshold: 0.4 });
  document.querySelectorAll('.bar:not(.reveal)').forEach(b => ioBar.observe(b));

  function runCounter(el) {
    if (el.dataset.done) return;
    el.dataset.done = '1';
    const end = parseInt(el.dataset.count, 10), suffix = el.dataset.suffix || '';
    const dur = 1600, t0 = performance.now();
    (function step(t) {
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(end * e).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }
  function runBar(bar) {
    if (bar.dataset.done) return;
    bar.dataset.done = '1';
    const fill = bar.querySelector('.bar__track i');
    if (fill) fill.style.width = bar.dataset.val + '%';
  }
})();

/* ═══════════ 导航状态 & 移动菜单 ═══════════ */
(function () {
  const nav = document.getElementById('nav');
  const burger = document.getElementById('navBurger');
  const menu = document.getElementById('mobileMenu');
  const onScroll = () => nav.classList.toggle('nav--solid', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('mobilemenu--open');
    burger.classList.toggle('nav__burger--x', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('mobilemenu--open');
    burger.classList.remove('nav__burger--x');
    document.body.style.overflow = '';
  }));
})();

/* ═══════════ 项目档案模态框 ═══════════ */
(function () {
  const modal = document.getElementById('modal');
  const panel = document.getElementById('modalScroll');
  const mask = document.getElementById('modalMask');
  const closeBtn = document.getElementById('modalClose');
  let lastFocus = null;

  function open(id) {
    const p = PROJECTS[id];
    if (!p) return;
    const coverHTML = p.cover.img
      ? `<img class="m__cover-bg" src="${p.cover.img}" alt="" aria-hidden="true">
         <img class="m__cover-img" src="${p.cover.img}" alt="${p.title}">`
      : '';
    panel.innerHTML = `
      <div class="m__kicker">
        <span class="m__no">${p.no}</span>
        <span class="m__cat ${p.catClass}">${p.cat}</span>
        <span class="m__time">${p.time}</span>
      </div>
      <h3 class="m__title">${p.title}</h3>
      <p class="m__role">我的角色 —— <b>${p.role}</b></p>
      <div class="m__cover" style="--c1:${p.cover.c1};--c2:${p.cover.c2}">${coverHTML}</div>
      ${p.replays ? `<h4 class="m__h">直播回放 <i>REPLAYS</i></h4>
      <div class="m__replays">${p.replays.map((r, i) => `<a class="replay" href="${r}" target="_blank" rel="noopener"><b>回放 0${i + 1}</b><span>视频号观看 ↗</span></a>`).join('')}</div>` : ''}

      <h4 class="m__h">项目背景 <i>BACKGROUND</i></h4>
      <p class="m__p">${p.bg}</p>

      <h4 class="m__h">我的职责 <i>MY DUTIES</i></h4>
      <ul class="m__list">${p.duties.map(d => `<li>${d}</li>`).join('')}</ul>

      <h4 class="m__h">执行过程 <i>PROCESS</i></h4>
      <p class="m__p">${p.process}</p>

      <h4 class="m__h">量化成果 <i>RESULTS</i></h4>
      <div class="m__data">${p.data.map(d => `<div><b>${d[0]}</b><span>${d[1]}</span></div>`).join('')}</div>

      <div class="m__foot"><span>WU ZIYI · <b>PORTFOLIO CASE FILE</b></span><span>✦ ${p.no} · ${p.cat}</span></div>
    `;
    lastFocus = document.activeElement;
    modal.classList.add('modal--open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    panel.scrollTop = 0;
    closeBtn.focus({ preventScroll: true });
  }
  function close() {
    modal.classList.remove('modal--open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  function openNews(id) {
    const n = NEWS[id];
    if (!n) return;
    panel.innerHTML = `
      <div class="m__kicker"><span class="m__cat m__cat--news">${n.kicker}</span></div>
      <h3 class="m__title">${n.title}</h3>
      <div class="m__art">${n.body}</div>
      <div class="m__foot"><span>WU ZIYI · <b>NEWS WRITING</b></span><span>✦ ${n.kicker}</span></div>
    `;
    lastFocus = document.activeElement;
    modal.classList.add('modal--open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    panel.scrollTop = 0;
    closeBtn.focus({ preventScroll: true });
  }

  document.querySelectorAll('[data-project]').forEach(card =>
    card.addEventListener('click', () => open(card.dataset.project)));
  document.querySelectorAll('[data-news]').forEach(card =>
    card.addEventListener('click', () => openNews(card.dataset.news)));
  mask.addEventListener('click', close);
  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('modal--open')) close();
  });
})();

/* ═══════════ 复制微信号 ═══════════ */
(function () {
  const btn = document.getElementById('copyWx');
  const toast = document.getElementById('toast');
  if (!btn || !toast) return;
  btn.addEventListener('click', async () => {
    const wx = btn.dataset.wx;
    try { await navigator.clipboard.writeText(wx); }
    catch (e) {
      const ta = document.createElement('textarea');
      ta.value = wx; document.body.appendChild(ta);
      ta.select(); document.execCommand('copy'); ta.remove();
    }
    toast.classList.add('toast--show');
    setTimeout(() => toast.classList.remove('toast--show'), 2200);
  });
})();
