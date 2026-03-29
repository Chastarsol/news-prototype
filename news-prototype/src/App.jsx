import React, { useMemo, useState } from "react";
import {
  Search,
  Home,
  PlayCircle,
  PlusSquare,
  User,
  Heart,
  MessageCircle,
  Share2,
  ArrowLeft,
  Bell,
  Settings,
  Upload,
  Image as ImageIcon,
  Video,
  FileText,
  Users,
  ShieldCheck,
  LayoutDashboard,
  Newspaper,
  Clapperboard,
  MessageSquareMore,
  Eye,
  Clock3,
  ChevronRight,
  LogIn,
  Smartphone,
  BarChart3,
  Database,
  FolderKanban,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid } from "recharts";

export default function App() {
  const [mode, setMode] = useState("split");
  const [project1aRoute, setProject1aRoute] = useState("a-launch");
  const [project1bRoute, setProject1bRoute] = useState("b-launch");
  const [project1aTab, setProject1aTab] = useState("home");
  const [project1bTab, setProject1bTab] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("推荐");
  const [saved, setSaved] = useState(true);
  const [likedComment, setLikedComment] = useState(false);

  const categories = ["推荐", "热点", "视频", "专题"];

  const newsList = useMemo(
    () => [
      { id: 1, title: "无人机巡检应用持续扩展，行业平台访问量显著提升", tag: "政策", reads: "3456", time: "2小时前", author: "行业日报" },
      { id: 2, title: "企业发布智能巡检视频解决方案，助力行业数字化升级", tag: "视频", reads: "2789", time: "3小时前", author: "科技观察" },
      { id: 3, title: "AI 与行业新闻传播融合趋势，带来内容推荐新变化", tag: "专题", reads: "1920", time: "5小时前", author: "新媒体周刊" },
      { id: 4, title: "低空经济持续升温，多地试点项目进入落地阶段", tag: "热点", reads: "5260", time: "今天", author: "产业研究院" },
    ],
    []
  );

  const trendData = [
    { name: "周一", 浏览量: 1800, 评论量: 220 },
    { name: "周二", 浏览量: 2200, 评论量: 260 },
    { name: "周三", 浏览量: 2600, 评论量: 310 },
    { name: "周四", 浏览量: 2400, 评论量: 290 },
    { name: "周五", 浏览量: 3200, 评论量: 360 },
    { name: "周六", 浏览量: 3500, 评论量: 410 },
    { name: "周日", 浏览量: 3900, 评论量: 470 },
  ];

  const categoryData = [
    { name: "行业新闻", 数量: 420 },
    { name: "热点", 数量: 300 },
    { name: "视频", 数量: 180 },
    { name: "专题", 数量: 210 },
  ];

  const switchA = (next) => {
    setProject1aRoute(next);
    if (["a-home", "a-search", "a-detail"].includes(next)) setProject1aTab("home");
  };

  const switchB = (next) => {
    setProject1bRoute(next);
    if (["b-home", "b-video"].includes(next)) setProject1bTab(next === "b-video" ? "video" : "home");
    if (next === "b-publish") setProject1bTab("publish");
    if (next === "b-mine") setProject1bTab("mine");
  };

  const pageMotion = {
    initial: { opacity: 0, x: 24 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -24 },
    transition: { duration: 0.28 },
  };

  const AnimatedPage = ({ pageKey, children }) => (
    <AnimatePresence mode="wait">
      <motion.div key={pageKey} {...pageMotion} className="h-full">
        {children}
      </motion.div>
    </AnimatePresence>
  );

  const AppShell = ({ title, children, showBack = false, onBack }) => (
    <div className="w-[360px] h-[760px] bg-[#F6F7FB] rounded-[38px] border-[10px] border-black shadow-2xl overflow-hidden relative">
      <div className="bg-[#07C160] text-white px-4 pt-4 pb-3">
        <div className="flex items-center justify-between text-xs opacity-90">
          <span>9:41</span>
          <div className="flex items-center gap-2"><span>5G</span><span>100%</span></div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <button onClick={onBack} className={`flex items-center gap-1 text-sm ${showBack ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <ArrowLeft size={16} /> 返回
          </button>
          <div className="font-semibold text-base tracking-wide">{title}</div>
          <div className="text-sm">•••</div>
        </div>
      </div>
      <div className="h-[calc(100%-84px)] overflow-hidden">{children}</div>
    </div>
  );

  const SplashPage = ({ title, subtitle, buttonText, onEnter }) => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-[360px] h-[760px] rounded-[38px] border-[10px] border-black overflow-hidden shadow-2xl bg-gradient-to-br from-[#07C160] via-[#16c56f] to-[#e8fff1] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_40%)]" />
      <div className="h-full flex flex-col items-center justify-center text-white px-8 text-center">
        <div className="w-24 h-24 rounded-[28px] bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg"><Smartphone size={42} /></div>
        <h2 className="mt-8 text-3xl font-bold">{title}</h2>
        <p className="mt-3 text-sm leading-7 text-white/90">{subtitle}</p>
        <button onClick={onEnter} className="mt-8 px-6 py-3 rounded-2xl bg-white text-[#07C160] font-semibold shadow-lg">{buttonText}</button>
      </div>
    </motion.div>
  );

  const LoginPage = ({ title, tips, onLogin }) => (
    <AppShell title={title} showBack={false}>
      <AnimatedPage pageKey={title}>
        <div className="h-full px-5 py-6 bg-[#F6F7FB]">
          <div className="bg-white rounded-[28px] p-6 shadow-sm border border-slate-100">
            <div className="w-16 h-16 rounded-2xl bg-green-50 text-[#07C160] flex items-center justify-center mx-auto"><LogIn size={28} /></div>
            <h3 className="mt-4 text-center text-2xl font-bold text-slate-900">欢迎登录</h3>
            <p className="mt-2 text-center text-sm text-slate-500 leading-6">{tips}</p>
            <div className="mt-6 space-y-4">
              <div>
                <div className="text-sm font-medium text-slate-700 mb-2">账号</div>
                <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-400">请输入用户名 / 手机号</div>
              </div>
              <div>
                <div className="text-sm font-medium text-slate-700 mb-2">密码</div>
                <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-400">请输入密码</div>
              </div>
              <button onClick={onLogin} className="w-full rounded-2xl bg-[#07C160] text-white py-3 font-semibold shadow">登录并进入系统</button>
            </div>
          </div>
        </div>
      </AnimatedPage>
    </AppShell>
  );

  const BottomNav = ({ activeTab, onSwitch, items }) => (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-5 py-2 flex justify-between">
      {items.map((item) => {
        const Icon = item.icon;
        const active = activeTab === item.key;
        return (
          <button key={item.key} onClick={() => onSwitch(item.page)} className={`flex flex-col items-center gap-1 ${active ? "text-[#07C160]" : "text-slate-400"}`}>
            <Icon size={20} />
            <span className="text-xs">{item.label}</span>
          </button>
        );
      })}
    </div>
  );

  const NewsCard = ({ item, onOpen }) => (
    <button onClick={onOpen} className="w-full text-left bg-white rounded-2xl p-3 shadow-sm border border-slate-100 flex gap-3 active:scale-[0.99] transition">
      <div className="w-24 h-20 rounded-xl bg-gradient-to-br from-emerald-200 via-cyan-200 to-sky-300" />
      <div className="flex-1">
        <div className="text-sm font-semibold text-slate-800 leading-5">{item.title}</div>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
          <span className="px-2 py-0.5 rounded-full bg-green-50 text-[#07C160]">{item.tag}</span>
          <span className="flex items-center gap-1"><Eye size={12} />{item.reads}</span>
          <span className="flex items-center gap-1"><Clock3 size={12} />{item.time}</span>
        </div>
      </div>
    </button>
  );

  const Project1AHome = () => (
    <AppShell title="1a 新闻展示" showBack onBack={() => switchA("a-login")}>
      <AnimatedPage pageKey={project1aRoute}>
        <div className="relative h-full">
          <div className="px-4 py-3 space-y-3 pb-24">
            <button onClick={() => switchA("a-search")} className="w-full bg-white rounded-2xl px-4 py-3 text-sm text-slate-400 shadow-sm flex items-center gap-2"><Search size={16} /> 搜索新闻关键词</button>
            <div className="flex gap-5 text-sm px-1 overflow-x-auto">
              {categories.map((c) => (
                <button key={c} onClick={() => setSelectedCategory(c)} className={selectedCategory === c ? "text-[#07C160] font-semibold border-b-2 border-[#07C160] pb-1" : "text-slate-400 pb-1"}>{c}</button>
              ))}
            </div>
            <button onClick={() => switchA("a-detail")} className="w-full h-36 rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-500 p-5 text-white shadow-md text-left">
              <div className="text-xs opacity-80">头条推荐</div>
              <div className="mt-3 text-xl font-bold leading-8">低空经济产业动态追踪</div>
              <div className="mt-3 text-xs opacity-90">今日热度 · 2.3w 浏览</div>
            </button>
            {newsList.map((item) => <NewsCard key={item.id} item={item} onOpen={() => switchA("a-detail")} />)}
          </div>
          <BottomNav activeTab={project1aTab} onSwitch={switchA} items={[{ key: "home", label: "首页", icon: Home, page: "a-home" }]} />
        </div>
      </AnimatedPage>
    </AppShell>
  );

  const Project1ASearch = () => (
    <AppShell title="1a 搜索查询" showBack onBack={() => switchA("a-home")}>
      <AnimatedPage pageKey={project1aRoute}>
        <div className="relative h-full">
          <div className="px-4 py-4 space-y-4 pb-24">
            <div className="bg-white rounded-2xl px-4 py-3 shadow-sm flex items-center gap-3 text-slate-400"><Search size={16} /><span className="text-sm">输入关键词：无人机 / 巡检 / 低空经济</span></div>
            <div className="bg-white rounded-3xl p-4 border border-slate-100 shadow-sm">
              <div className="text-sm font-semibold text-slate-800">热门搜索</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["低空经济", "行业资讯", "AI 推荐", "无人机巡检", "智能监测"].map((t) => <button key={t} className="px-3 py-1.5 rounded-full bg-slate-100 text-sm text-slate-600">{t}</button>)}
              </div>
            </div>
            <div className="space-y-3">{newsList.slice(0, 3).map((item) => <NewsCard key={item.id} item={item} onOpen={() => switchA("a-detail")} />)}</div>
          </div>
        </div>
      </AnimatedPage>
    </AppShell>
  );

  const Project1ADetail = () => (
    <AppShell title="1a 新闻详情" showBack onBack={() => switchA("a-home")}>
      <AnimatedPage pageKey={project1aRoute}>
        <div className="relative h-full">
          <div className="px-4 py-4 pb-24 overflow-y-auto h-full">
            <div className="text-xl font-bold leading-8 text-slate-900">无人机巡检应用持续扩展，行业新闻平台访问量显著提升</div>
            <div className="mt-3 text-xs text-slate-400 flex gap-3"><span>作者：行业日报</span><span>今天 14:30</span></div>
            <div className="mt-4 h-44 rounded-3xl bg-gradient-to-br from-emerald-300 to-sky-300" />
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              <p>本页面对应 1a 的新闻详情展示功能，包含标题、作者、更新时间、正文图文混排区域。</p>
              <p>适合在答辩时说明：该项目通过接口获取新闻数据，并在详情页中进行内容展示。</p>
            </div>
          </div>
        </div>
      </AnimatedPage>
    </AppShell>
  );

  const Project1BHome = () => (
    <AppShell title="1b 新闻小程序" showBack onBack={() => switchB("b-login")}>
      <AnimatedPage pageKey={project1bRoute}>
        <div className="relative h-full">
          <div className="px-4 py-3 space-y-3 pb-24">
            <button onClick={() => switchB("b-video")} className="w-full h-36 rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-500 p-5 text-white shadow-md text-left">
              <div className="text-xs opacity-80">推荐视频内容</div>
              <div className="mt-3 text-xl font-bold leading-8">智慧巡检与行业动态一体化展示</div>
              <div className="mt-3 text-xs opacity-90">支持收藏、评论、上传与个人中心</div>
            </button>
            {newsList.map((item) => <NewsCard key={item.id} item={item} onOpen={() => switchB("b-detail")} />)}
          </div>
          <BottomNav activeTab={project1bTab} onSwitch={switchB} items={[{ key: "home", label: "首页", icon: Home, page: "b-home" }, { key: "video", label: "视频", icon: PlayCircle, page: "b-video" }, { key: "publish", label: "发布", icon: PlusSquare, page: "b-publish" }, { key: "mine", label: "我的", icon: User, page: "b-mine" }]} />
        </div>
      </AnimatedPage>
    </AppShell>
  );

  const Project1BDetail = () => (
    <AppShell title="1b 新闻详情" showBack onBack={() => switchB("b-home")}>
      <AnimatedPage pageKey={project1bRoute}>
        <div className="relative h-full">
          <div className="px-4 py-4 pb-24 overflow-y-auto h-full">
            <div className="text-xl font-bold leading-8 text-slate-900">无人机巡检应用持续扩展，行业新闻平台访问量显著提升</div>
            <div className="mt-3 text-xs text-slate-400 flex gap-3"><span>作者：行业日报</span><span>今天 14:30</span></div>
            <div className="mt-4 h-44 rounded-3xl bg-gradient-to-br from-emerald-300 to-sky-300" />
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              <p>在 1b 中，详情页不仅展示新闻内容，还支持收藏新闻、评论和评论回复等交互。</p>
              <p>这部分更完整地体现了“新闻小程序及后台管理系统”的前端用户功能。</p>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
              <button onClick={() => setSaved(!saved)} className="bg-white rounded-2xl px-4 py-3 shadow-sm border flex items-center justify-center gap-2 text-slate-700"><Heart size={16} className={saved ? "fill-[#07C160] text-[#07C160]" : ""} /> {saved ? "已收藏" : "收藏"}</button>
              <button className="bg-white rounded-2xl px-4 py-3 shadow-sm border flex items-center justify-center gap-2 text-slate-700"><MessageCircle size={16} /> 评论128</button>
              <button className="bg-white rounded-2xl px-4 py-3 shadow-sm border flex items-center justify-center gap-2 text-slate-700"><Share2 size={16} /> 分享</button>
            </div>
            <div className="mt-5 bg-white rounded-3xl p-4 shadow-sm border border-slate-100">
              <div className="font-semibold text-sm text-slate-800">热门评论</div>
              <div className="mt-3 rounded-2xl bg-slate-50 p-3">
                <div className="flex items-center justify-between">
                  <div><div className="text-sm font-medium text-slate-800">用户A</div><div className="text-xs text-slate-400 mt-1">5分钟前</div></div>
                  <button onClick={() => setLikedComment(!likedComment)} className="text-xs text-[#07C160]">{likedComment ? "已点赞" : "点赞"}</button>
                </div>
                <div className="mt-3 text-sm text-slate-700 leading-6">界面层次清晰，阅读体验很好，希望增加更多视频分类筛选功能。</div>
                <div className="mt-3 text-xs text-slate-400">回复：该版本已补充视频页与个人中心页。</div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t px-4 py-3 flex gap-3"><div className="flex-1 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-400">写评论...</div><button className="bg-[#07C160] text-white rounded-full px-4 py-2 text-sm">发送</button></div>
        </div>
      </AnimatedPage>
    </AppShell>
  );

  const Project1BVideo = () => (
    <AppShell title="1b 视频浏览" showBack onBack={() => switchB("b-home")}>
      <AnimatedPage pageKey={project1bRoute}>
        <div className="relative h-full">
          <div className="px-4 py-4 space-y-4 pb-24">
            <div className="rounded-3xl bg-black h-48 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-700 to-slate-500 opacity-90" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white"><PlayCircle size={46} /><div className="mt-3 text-sm">行业巡检演示视频</div></div>
            </div>
            {["无人机巡检实拍", "智慧园区监测案例", "AI 视频识别介绍"].map((title) => (
              <button key={title} className="w-full bg-white rounded-2xl p-3 shadow-sm border flex gap-3 text-left">
                <div className="w-28 h-20 rounded-xl bg-gradient-to-br from-violet-200 to-cyan-200 flex items-center justify-center text-slate-600"><PlayCircle size={22} /></div>
                <div className="flex-1"><div className="text-sm font-semibold text-slate-800 leading-5">{title}</div><div className="mt-2 text-xs text-slate-400">时长 03:28 · 播放 2.1k</div><div className="mt-3 text-xs text-[#07C160]">点击播放</div></div>
              </button>
            ))}
          </div>
          <BottomNav activeTab={project1bTab} onSwitch={switchB} items={[{ key: "home", label: "首页", icon: Home, page: "b-home" }, { key: "video", label: "视频", icon: PlayCircle, page: "b-video" }, { key: "publish", label: "发布", icon: PlusSquare, page: "b-publish" }, { key: "mine", label: "我的", icon: User, page: "b-mine" }]} />
        </div>
      </AnimatedPage>
    </AppShell>
  );

  const Project1BPublish = () => (
    <AppShell title="1b 发布内容" showBack onBack={() => switchB("b-home")}>
      <AnimatedPage pageKey={project1bRoute}>
        <div className="relative h-full">
          <div className="px-4 py-4 pb-24 space-y-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100"><div className="text-sm font-semibold">新闻标题</div><div className="mt-2 rounded-xl bg-slate-50 px-3 py-3 text-sm text-slate-400">请输入标题</div></div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100"><div className="text-sm font-semibold">正文内容</div><div className="mt-2 rounded-xl bg-slate-50 px-3 py-6 text-sm text-slate-400">支持输入文字、插入图片、视频链接</div></div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              <div className="text-sm font-semibold">上传素材</div>
              <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
                <button className="h-20 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 gap-1"><ImageIcon size={18} />图片</button>
                <button className="h-20 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 gap-1"><Video size={18} />视频</button>
                <button className="h-20 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 gap-1"><Upload size={18} />封面</button>
              </div>
            </div>
            <button className="w-full bg-[#07C160] text-white rounded-2xl py-3 font-semibold shadow">提交审核</button>
          </div>
          <BottomNav activeTab={project1bTab} onSwitch={switchB} items={[{ key: "home", label: "首页", icon: Home, page: "b-home" }, { key: "video", label: "视频", icon: PlayCircle, page: "b-video" }, { key: "publish", label: "发布", icon: PlusSquare, page: "b-publish" }, { key: "mine", label: "我的", icon: User, page: "b-mine" }]} />
        </div>
      </AnimatedPage>
    </AppShell>
  );

  const Project1BMine = () => (
    <AppShell title="1b 我的" showBack onBack={() => switchB("b-home")}>
      <AnimatedPage pageKey={project1bRoute}>
        <div className="relative h-full">
          <div className="px-4 py-4 pb-24 space-y-4">
            <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100 flex items-center gap-4"><div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-300 to-emerald-500" /><div><div className="font-semibold text-slate-900">微信用户</div><div className="text-xs text-slate-400 mt-1">已收藏 26 篇 · 评论 18 条</div></div></div>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => switchB("b-detail")} className="bg-white rounded-2xl p-4 shadow-sm border text-left"><div className="text-xs text-slate-400">我的收藏</div><div className="text-2xl font-bold text-slate-900 mt-2">26</div></button>
              <button className="bg-white rounded-2xl p-4 shadow-sm border text-left"><div className="text-xs text-slate-400">我的评论</div><div className="text-2xl font-bold text-slate-900 mt-2">18</div></button>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              <div className="font-semibold text-sm">最近收藏</div>
              <div className="mt-3 space-y-3 text-sm text-slate-700">{["行业数字化转型观察", "视频监测技术最新进展", "智慧巡检应用案例汇总"].map((t) => <button key={t} onClick={() => switchB("b-detail")} className="w-full flex items-center justify-between text-left"><span>{t}</span><ChevronRight size={16} className="text-slate-400" /></button>)}</div>
            </div>
          </div>
          <BottomNav activeTab={project1bTab} onSwitch={switchB} items={[{ key: "home", label: "首页", icon: Home, page: "b-home" }, { key: "video", label: "视频", icon: PlayCircle, page: "b-video" }, { key: "publish", label: "发布", icon: PlusSquare, page: "b-publish" }, { key: "mine", label: "我的", icon: User, page: "b-mine" }]} />
        </div>
      </AnimatedPage>
    </AppShell>
  );

  const AdminDashboard = () => (
    <div className="space-y-5">
      <div className="grid md:grid-cols-4 gap-4">
        {[["新闻总数", "1286", FileText], ["视频总数", "342", Clapperboard], ["待审核评论", "58", MessageCircle], ["注册用户", "8421", Users]].map(([label, value, Icon]) => (
          <motion.div key={label} whileHover={{ y: -3 }} className="bg-slate-800 rounded-3xl p-5 border border-slate-700">
            <div className="flex items-center justify-between"><div className="text-slate-400 text-sm">{label}</div><Icon size={18} className="text-emerald-300" /></div>
            <div className="text-white text-3xl font-bold mt-3">{value}</div>
          </motion.div>
        ))}
      </div>
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="bg-slate-800 rounded-3xl p-5 border border-slate-700 h-[320px]">
          <div className="text-white font-semibold mb-4">近7天浏览与评论趋势</div>
          <ResponsiveContainer width="100%" height="85%">
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Line type="monotone" dataKey="浏览量" stroke="#34d399" strokeWidth={3} />
              <Line type="monotone" dataKey="评论量" stroke="#60a5fa" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-slate-800 rounded-3xl p-5 border border-slate-700 h-[320px]">
          <div className="text-white font-semibold mb-4">栏目内容分布</div>
          <ResponsiveContainer width="100%" height="85%">
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Bar dataKey="数量" fill="#34d399" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const AdminLayout = () => {
    const adminRoute = ["b-admin-dashboard", "b-admin-news", "b-admin-comments", "b-admin-users", "b-admin-roles"].includes(project1bRoute) ? project1bRoute : "b-admin-dashboard";
    const menu = [
      { key: "b-admin-dashboard", label: "数据概览", icon: LayoutDashboard },
      { key: "b-admin-news", label: "新闻管理", icon: Newspaper },
      { key: "b-admin-comments", label: "评论审核", icon: MessageSquareMore },
      { key: "b-admin-users", label: "用户管理", icon: Users },
      { key: "b-admin-roles", label: "角色权限", icon: ShieldCheck },
    ];

    const renderMain = () => {
      if (adminRoute === "b-admin-news") {
        return (
          <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-700 flex items-center justify-between"><div className="text-white font-semibold">新闻内容管理</div><div className="flex gap-3"><div className="bg-slate-700 text-slate-400 rounded-xl px-3 py-2 text-sm">搜索标题 / 作者</div><button className="bg-emerald-500 text-white rounded-xl px-4 py-2 text-sm">新增新闻</button></div></div>
            <div className="p-5">
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] text-xs text-slate-400 pb-3 border-b border-slate-700"><div>标题</div><div>作者</div><div>分类</div><div>状态</div><div>操作</div></div>
              {[["无人机巡检场景持续扩展", "编辑A", "行业新闻", "已发布"], ["视频监测平台版本更新说明", "编辑B", "视频", "待审核"], ["AI 内容推荐模块设计方案", "管理员", "专题", "草稿"]].map((row, i) => (
                <div key={i} className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] text-sm text-slate-200 py-4 border-b border-slate-800 items-center">
                  <div>{row[0]}</div><div>{row[1]}</div><div>{row[2]}</div><div><span className={`px-3 py-1 rounded-full text-xs ${row[3] === "已发布" ? "bg-emerald-500/20 text-emerald-300" : row[3] === "待审核" ? "bg-amber-500/20 text-amber-300" : "bg-slate-700 text-slate-300"}`}>{row[3]}</span></div><div className="text-emerald-300">编辑 / 删除</div>
                </div>
              ))}
            </div>
          </div>
        );
      }
      if (adminRoute === "b-admin-comments") {
        return (
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-slate-800 rounded-3xl p-5 border border-slate-700"><div className="text-white font-semibold">待审核评论</div><div className="mt-4 space-y-3 text-sm">{["文章内容很完整，建议补充更多视频案例。", "希望增加收藏分类功能。", "详情页字体还能再大一点。"].map((t) => <div key={t} className="bg-slate-900 rounded-2xl p-4 text-slate-300">{t}<div className="text-xs text-slate-500 mt-2">处理：通过 / 删除</div></div>)}</div></div>
            <div className="bg-slate-800 rounded-3xl p-5 border border-slate-700"><div className="text-white font-semibold">审核说明</div><div className="mt-4 space-y-3 text-sm text-slate-300 leading-7"><p>支持敏感内容过滤、人工复核、批量通过与删除。</p><p>该模块用于体现后台对评论的管理能力。</p></div></div>
          </div>
        );
      }
      if (adminRoute === "b-admin-users") {
        return (
          <div className="bg-slate-800 rounded-3xl p-5 border border-slate-700">
            <div className="text-white font-semibold">用户管理</div>
            <div className="mt-4 grid grid-cols-[1.4fr_1fr_1fr_1fr] text-xs text-slate-400 border-b border-slate-700 pb-3"><div>用户昵称</div><div>角色</div><div>收藏数</div><div>评论数</div></div>
            {[["微信用户001", "普通用户", "12", "5"], ["编辑A", "编辑", "3", "1"], ["管理员", "管理员", "8", "2"]].map((u) => <div key={u[0]} className="grid grid-cols-[1.4fr_1fr_1fr_1fr] py-4 text-sm text-slate-200 border-b border-slate-800"><div>{u[0]}</div><div>{u[1]}</div><div>{u[2]}</div><div>{u[3]}</div></div>)}
          </div>
        );
      }
      if (adminRoute === "b-admin-roles") {
        return (
          <div className="bg-slate-800 rounded-3xl p-5 border border-slate-700">
            <div className="text-white font-semibold">角色权限管理</div>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="flex items-center justify-between bg-slate-900 rounded-2xl p-4"><span>管理员</span><span className="text-emerald-300">全部权限</span></div>
              <div className="flex items-center justify-between bg-slate-900 rounded-2xl p-4"><span>编辑</span><span className="text-cyan-300">发布 / 修改内容</span></div>
              <div className="flex items-center justify-between bg-slate-900 rounded-2xl p-4"><span>审核员</span><span className="text-amber-300">评论 / 投稿审核</span></div>
            </div>
          </div>
        );
      }
      return <AdminDashboard />;
    };

    return (
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="bg-slate-900 rounded-[32px] shadow-2xl overflow-hidden border border-slate-800">
        <div className="bg-slate-800 px-6 py-4 flex items-center justify-between">
          <div><div className="text-white font-bold text-lg">1b 后台管理系统</div><div className="text-slate-400 text-sm mt-1">加入图表统计、内容管理、评论审核、用户与角色管理</div></div>
          <div className="flex items-center gap-3"><Bell size={18} className="text-slate-300" /><Settings size={18} className="text-slate-300" /><div className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm">在线</div></div>
        </div>
        <div className="grid grid-cols-[220px_1fr] min-h-[720px]">
          <div className="bg-slate-950 p-5 border-r border-slate-800">
            <div className="space-y-2 text-sm">
              {menu.map((m) => {
                const Icon = m.icon;
                const active = adminRoute === m.key;
                return <button key={m.key} onClick={() => switchB(m.key)} className={active ? "w-full flex items-center gap-3 bg-emerald-500/15 text-emerald-300 rounded-2xl px-4 py-3" : "w-full flex items-center gap-3 text-slate-400 rounded-2xl px-4 py-3 hover:bg-slate-900"}><Icon size={16} /><span>{m.label}</span></button>;
              })}
            </div>
          </div>
          <div className="bg-slate-900 p-6"><AnimatePresence mode="wait"><motion.div key={adminRoute} {...pageMotion}>{renderMain()}</motion.div></AnimatePresence></div>
        </div>
      </motion.div>
    );
  };

  const Project1ASection = () => {
    const renderPhone = () => {
      if (project1aRoute === "a-launch") return <SplashPage title="Project 1a" subtitle="新闻展示手机程序启动页，突出新闻浏览与详情展示功能。" buttonText="进入登录页" onEnter={() => switchA("a-login")} />;
      if (project1aRoute === "a-login") return <LoginPage title="1a 登录" tips="用于进入新闻展示系统，突出 1a 的新闻目录浏览、搜索与详情查看。" onLogin={() => switchA("a-home")} />;
      if (project1aRoute === "a-search") return <Project1ASearch />;
      if (project1aRoute === "a-detail") return <Project1ADetail />;
      return <Project1AHome />;
    };

    return (
      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">Project 1a 独立展示</div>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">1a：新闻展示手机程序</h2>
            <p className="mt-2 text-slate-500">单独展示启动页、登录页、首页目录浏览、搜索查询、新闻详情。</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <button onClick={() => switchA("a-launch")} className="px-4 py-2 rounded-2xl bg-white border text-slate-700">启动页</button>
            <button onClick={() => switchA("a-login")} className="px-4 py-2 rounded-2xl bg-white border text-slate-700">登录页</button>
            <button onClick={() => switchA("a-home")} className="px-4 py-2 rounded-2xl bg-[#07C160] text-white">首页</button>
            <button onClick={() => switchA("a-search")} className="px-4 py-2 rounded-2xl bg-white border text-slate-700">搜索页</button>
            <button onClick={() => switchA("a-detail")} className="px-4 py-2 rounded-2xl bg-white border text-slate-700">详情页</button>
          </div>
        </div>
        <div className="grid xl:grid-cols-[420px_1fr] gap-8 items-start">
          <div className="bg-white rounded-[28px] p-6 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 text-slate-900 font-semibold"><FolderKanban size={18} />1a 界面说明</div>
            <div className="mt-4 space-y-4 text-sm text-slate-600 leading-7">
              <p><span className="font-semibold text-slate-900">启动页：</span> 展示系统品牌和课程作业名称。</p>
              <p><span className="font-semibold text-slate-900">登录页：</span> 用于进入新闻展示系统。</p>
              <p><span className="font-semibold text-slate-900">首页：</span> 实现新闻目录浏览，显示标题、缩略图、阅读量、更新时间。</p>
              <p><span className="font-semibold text-slate-900">搜索页：</span> 完成新闻查询功能。</p>
              <p><span className="font-semibold text-slate-900">详情页：</span> 展示标题、作者、更新时间和图文混排正文。</p>
            </div>
          </div>
          <div className="flex justify-center">{renderPhone()}</div>
        </div>
      </section>
    );
  };

  const Project1BSection = () => {
    const renderPhone = () => {
      if (project1bRoute === "b-launch") return <SplashPage title="Project 1b" subtitle="新闻小程序及后台管理系统启动页，突出前后台一体化设计。" buttonText="进入登录页" onEnter={() => switchB("b-login")} />;
      if (project1bRoute === "b-login") return <LoginPage title="1b 登录" tips="登录后可进入新闻小程序，使用收藏、评论、发布、我的等功能，并连接后台管理系统。" onLogin={() => switchB("b-home")} />;
      if (project1bRoute === "b-detail") return <Project1BDetail />;
      if (project1bRoute === "b-video") return <Project1BVideo />;
      if (project1bRoute === "b-publish") return <Project1BPublish />;
      if (project1bRoute === "b-mine") return <Project1BMine />;
      return <Project1BHome />;
    };

    return (
      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-[#07C160] text-sm font-medium">Project 1b 独立展示</div>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">1b：新闻小程序及后台管理系统</h2>
            <p className="mt-2 text-slate-500">单独展示启动页、登录页、小程序端完整页面，以及后台统计与管理页面。</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <button onClick={() => switchB("b-launch")} className="px-4 py-2 rounded-2xl bg-white border text-slate-700">启动页</button>
            <button onClick={() => switchB("b-login")} className="px-4 py-2 rounded-2xl bg-white border text-slate-700">登录页</button>
            <button onClick={() => switchB("b-home")} className="px-4 py-2 rounded-2xl bg-[#07C160] text-white">小程序首页</button>
            <button onClick={() => switchB("b-admin-dashboard")} className="px-4 py-2 rounded-2xl bg-slate-900 text-white">后台系统</button>
          </div>
        </div>
        <div className="grid xl:grid-cols-[420px_1fr] gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-white rounded-[28px] p-6 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 text-slate-900 font-semibold"><Database size={18} />1b 小程序端说明</div>
              <div className="mt-4 space-y-4 text-sm text-slate-600 leading-7">
                <p>在 1a 的基础上补充了<span className="font-semibold text-slate-900">收藏、评论、评论回复、视频浏览、发布内容、我的页面</span>。</p>
                <p>同时加入<span className="font-semibold text-slate-900">启动页、登录页、页面切换动画</span>，更接近真实项目展示。</p>
              </div>
            </div>
            <div className="bg-white rounded-[28px] p-6 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 text-slate-900 font-semibold"><BarChart3 size={18} />1b 后台系统说明</div>
              <div className="mt-4 space-y-4 text-sm text-slate-600 leading-7">
                <p>后台系统支持<span className="font-semibold text-slate-900">数据概览、图表统计、新闻管理、评论审核、用户管理、角色权限管理</span>。</p>
                <p>图表部分展示近7天浏览量、评论量趋势和栏目分布，更适合答辩展示。</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex justify-center">{renderPhone()}</div>
            <AdminLayout />
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-100 p-8">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-medium">Project 1a 与 1b 分开展示</div>
          <h1 className="mt-4 text-4xl font-bold text-slate-900">新闻展示与新闻小程序后台完整原型</h1>
          <p className="mt-3 text-slate-500 text-base">已加入登录页、启动页、页面切换动效、后台图表统计，并将 1a 和 1b 分开独立展示。</p>
          <div className="mt-6 inline-flex rounded-2xl bg-white border border-slate-200 p-1 shadow-sm">
            <button onClick={() => setMode("split")} className={mode === "split" ? "px-5 py-2 rounded-xl bg-[#07C160] text-white" : "px-5 py-2 rounded-xl text-slate-600"}>分开展示</button>
            <button onClick={() => setMode("all")} className={mode === "all" ? "px-5 py-2 rounded-xl bg-slate-900 text-white" : "px-5 py-2 rounded-xl text-slate-600"}>全部展示</button>
          </div>
        </div>

        <div className="space-y-16">
          <Project1ASection />
          <Project1BSection />
        </div>
      </div>
    </div>
  );
}
