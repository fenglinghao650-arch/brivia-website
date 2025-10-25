"use client";
// === Brivia Mockup Page (uses shadcn-like UI components) ===
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Compass, Users, Mail, Phone, MessageCircle, ChevronRight, Globe2, Building2, Sparkles, Calendar, Route, Languages, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
const tourImages = {
  Hangzhou: "/hangzhou.jpg",
  Shanghai: "/shanghai.jpg",
  Wuzhen: "/wuzhen.jpg",
};



const cn = (...classes) => classes.filter(Boolean).join(" ");

const Section = ({ id, className = "", children }) => (
  <section id={id} className={cn("scroll-mt-24 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto", className)}>
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-yellow-400/50 bg-yellow-50/40 px-3 py-1 text-xs font-medium text-yellow-700">
    {children}
  </span>
);

const tours = [
  { city: "Hangzhou Premium Day Tour", subtitle: "West Lake • Tea Villages • Song Dynasty Heritage", features: ["Private guide & translation", "Premium transport", "Local dining"] },
  { city: "Shanghai Cultural Discovery", subtitle: "Bund • Former French Concession • Alleyway Life", features: ["Custom pace", "Boutique restaurants", "Hidden gems walk"] },
  { city: "Wuzhen Water Town Escape", subtitle: "Canals • Wooden Bridges • Night Lights", features: ["Traditional theater add-on", "Tea ceremony", "Photo spots"] },
];

export default function BriviaMock() {
  const [lang, setLang] = useState("en");
  const t = (en, zh) => (lang === "en" ? en : zh);
const sections = ["mission", "products", "tours", "plan", "join", "contact"];
const [active, setActive] = useState("");

useEffect(() => {
  const observers = [];

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(id);
      },
      {
        // Trigger when the section’s top is ~30% from the top
        // and we have some bottom margin so it switches cleanly.
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0.01,
      }
    );

    obs.observe(el);
    observers.push(obs);
  });

  return () => observers.forEach((o) => o.disconnect());
}, []);
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-slate-800">
      <div className="w-full bg-[#0B1C2C] text-white sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0B1C2C]/90">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-[#D4AF37]" />
            <span className="tracking-wide font-semibold">BRIVIA</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a
  href="#mission"
  className={`hover:text-yellow-300 border-b-2 ${active === "mission" ? "border-yellow-400" : "border-transparent"}`}
>
  {t("Mission", "使命")}
</a>

            <a
  href="#products"
  className={`hover:text-yellow-300 border-b-2 ${active === "products" ? "border-yellow-400" : "border-transparent"}`}
>
  {t("Products", "产品")}
</a>

            <a
  href="#tours"
  className={`hover:text-yellow-300 border-b-2 ${active === "tours" ? "border-yellow-400" : "border-transparent"}`}
>
  {t("Tours", "精选行程")}
</a>

            <a
  href="#plan"
  className={`hover:text-yellow-300 border-b-2 ${active === "plan" ? "border-yellow-400" : "border-transparent"}`}
>
  {t("Our Plan", "发展规划")}
</a>

           <a
  href="#join"
  className={`hover:text-yellow-300 border-b-2 ${active === "join" ? "border-yellow-400" : "border-transparent"}`}
>
  {t("Join Us", "加入我们")}
</a>

            <a
  href="#contact"
  className={`hover:text-yellow-300 border-b-2 ${active === "contact" ? "border-yellow-400" : "border-transparent"}`}
>
  {t("Contact", "联系")}
</a>

            <div className="flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-yellow-300" />
              <button onClick={() => setLang(lang === "en" ? "zh" : "en")} className="text-xs px-2 py-1 rounded-full border border-white/20 hover:bg-white/10">
                {lang === "en" ? "中文" : "EN"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Section id="hero" className="pt-10 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Pill>{t("Early-stage Travel Tech", "初创旅行科技")}</Pill>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-[#0B1C2C]">
              {t("Building an AI ecosystem for future travel—where technology serves connection and authenticity.","为未来旅行打造 AI 生态——让技术服务于真实连接。")}
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              {t("We break informational and infrastructural barriers so people can form meaningful bonds with places and each other.","打破信息与基础设施壁垒，让人与地方之间建立更有意义的连接。")}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
  <Button asChild className="bg-[#D4AF37] hover:bg-yellow-500 text-[#0B1C2C]">
    <a href="#join">{t("Apply as Local Expert", "申请成为本地达人")}</a>
  </Button>

  <Button asChild variant="outline" className="border-[#0B1C2C] text-[#0B1C2C] hover:bg-[#0B1C2C] hover:text-white">
    <a href="#tours">{t("Explore Tours", "浏览行程")}</a>
  </Button>

  <Button asChild variant="ghost" className="hover:bg-yellow-100 text-[#0B1C2C]">
    <a href="#contact">
      {t("Contact Us", "联系我们")}
      <ChevronRight className="ml-2 h-4 w-4" />
    </a>
  </Button>
</div>

          </div>
          <div className="relative">
            <motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#f7f4ed]"
>
  <Image
    src="/hero.jpg"  // ← your local hero photo
    alt="Brivia hero — authentic connections in China"
    width={2000}
    height={1200}
    className="w-full h-auto object-contain"
    priority
    sizes="100vw"
  />
  {/* Optional soft gradient overlay for readability */}
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
</motion.div>

            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur border border-yellow-300/40 rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-yellow-600" />
                <div className="text-sm">
                  <div className="font-semibold text-[#0B1C2C]">{t("Authentic Connections", "真实连接")}</div>
                  <div className="text-slate-600">{t("Culture-first, tech-enabled.", "文化为本，技术赋能。")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="mission" className="py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <Bot className="h-5 w-5 text-[#123B7A]" />, title: t("AI Infrastructure","AI 基础设施"), desc: t("Systems that unlock access and personalization.","提供可及与个性化的系统能力") },
            { icon: <Users className="h-5 w-5 text-[#123B7A]" />, title: t("Human-Centered","以人为本"), desc: t("Local experts at the heart of every experience.","本地达人是体验的核心") },
            { icon: <Compass className="h-5 w-5 text-[#123B7A]" />, title: t("Authenticity","真实与连接"), desc: t("Meaningful bonds between people and places.","在人与地方之间建立有意义的连接") },
          ].map((c)=> (
            <Card key={c.title} className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">{c.icon}{c.title}</CardTitle>
                <CardDescription>{c.desc}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-700">
                {t("We design AI-powered infrastructure to reduce friction in cross-cultural travel.","以 AI 能力降低跨文化旅行中的信息不对称与摩擦。")}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="products" className="py-6">
        <h2 className="text-3xl font-bold text-[#0B1C2C] mb-6">{t("Our Products", "我们的产品")}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-3xl border-yellow-200/60">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{t("Brivience", "Brivience 平台")}</CardTitle>
                <Pill>{t("MVP Development", "MVP 开发中")}</Pill>
              </div>
              <CardDescription>
                {t("AI-powered mobile platform connecting inbound tourists with Chinese local experts offering authentic, embodied experiences—think Airbnb Experiences, but more.","AI 赋能的移动平台，连接入境游客与中国本地达人，提供真实而具身的在地体验——不止于 Airbnb Experiences。")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-[#123B7A] hover:bg-[#0B1C2C]">
  <a href="#products">{t("Learn More", "了解更多")}</a>
</Button>
<Button asChild variant="outline" className="border-[#123B7A] text-[#123B7A]">
  <a href="#join">{t("Apply as Beta Expert", "申请内测达人")}</a>
</Button>

              </div>
              <ul className="mt-4 list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>{t("Seeking founding tech talents.", "寻找联合创始技术人才")}</li>
                <li>{t("Recruiting co-founding beta local experts.", "招募内测期共创本地达人")}</li>
                <li>{t("Ideal: bilingual, cross-cultural, deep local insights, social presence.", "优选：双语/跨文化/深度在地洞察/社媒影响力")}</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle>{t("Hangzhou / Shanghai Premium Tours", "杭州/上海高端定制")}</CardTitle>
              <CardDescription>
                {t("All-in-one private tours with local insight: accommodation, dining, transportation, guidance & translation—perfect for first-time travelers.","集合住宿/餐饮/交通/向导与翻译的私享行程，兼具地道与舒适——新手入华的理想之选。")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-[#D4AF37] hover:bg-yellow-500 text-[#0B1C2C]">
  <a href="#tours">{t("See Tour Packages", "查看精选行程")}</a>
</Button>

              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="tours" className="py-10">
        <div className="flex items-center gap-3 mb-6">
          <Route className="h-5 w-5 text-[#123B7A]" />
          <h2 className="text-3xl font-bold text-[#0B1C2C]">{t("Featured Tours", "精选行程")}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tours.map((tItem) => (
            <Card key={tItem.city} className="rounded-3xl overflow-hidden">
              <div className="bg-[#f7f4ed]">
  <Image
    src={tourImages[tItem.city.split(" ")[0]] || "/hero.jpg"} // use your local images
    alt={tItem.city}
    width={1600}
    height={1200}
    className="w-full h-auto object-contain rounded-t-3xl"
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 33vw"
  />
</div>


              <CardHeader>
                <CardTitle className="text-[#123B7A]">{tItem.city}</CardTitle>
                <CardDescription>{tItem.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-1">
                  {tItem.features.map((f) => (<li key={f} className="flex items-center gap-2"><Sparkles className="h-4 w-4" /> {f}</li>))}
                </ul>
                <div className="mt-4 flex gap-2">
                 <Button asChild variant="outline" className="border-[#123B7A] text-[#123B7A]">
  <a href="#contact">{t("Details", "查看详情")}</a>
</Button>
<Button asChild className="bg-[#123B7A] hover:bg-[#0B1C2C]">
  <a href="#contact">{t("Request Quote", "咨询报价")}</a>
</Button>

                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="plan" className="py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#0B1C2C] mb-4">{t("Our Plan", "发展规划")}</h2>
            <p className="text-slate-700">{t("We’re early in branding and team-building. We aim to establish prominence in China inbound tourism, then expand globally.","目前处于品牌与团队搭建的早期阶段。首先在中国入境游赛道建立影响力，随后全球化拓展。")}</p>
            <ul className="mt-4 space-y-3 text-slate-800">
              {[
                t("Build MVP & onboard beta local experts","完成 MVP 并上线内测达人"),
                t("Launch Brivience beta in Hangzhou & Shanghai","在杭/沪发布 Brivience 内测版"),
                t("Expand premium tours nationwide","拓展高端定制至更多城市"),
                t("Empower experts with digital products (interactive maps, guides)","赋能达人打造可变现的数字产品（交互地图、指南等）"),
                t("Scale globally","全球化扩张"),
              ].map((s,i)=> (<li key={i} className="flex gap-3"><span className="text-[#D4AF37]">•</span>{s}</li>))}
            </ul>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-yellow-200/50">
            <div className="space-y-6">
              {[1,2,3,4,5].map((step) => (
                <div key={step} className="flex items-start gap-4">
                  <div className="mt-1 h-8 w-8 rounded-full bg-[#D4AF37] text-[#0B1C2C] flex items-center justify-center font-bold">{step}</div>
                  <div className="flex-1 border-l pl-4">
                    <div className="font-semibold text-[#123B7A]">{t("Milestone", "里程碑")} {step}</div>
                    <div className="text-sm text-slate-700">{t("Placeholder description for timeline milestone.", "时间轴占位描述。")}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="join" className="py-12">
        <h2 className="text-3xl font-bold text-[#0B1C2C] mb-6">{t("Join Us", "加入我们")}</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle>{t("Linghao Feng", "冯泠皓")}</CardTitle>
              <CardDescription>{t("CEO, Founder", "首席执行官/创始人")}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-700">
              {t("Actor, psychologist-in-training, and entrepreneur building authentic, AI-enabled cultural travel.","演员、心理学训练者与创业者，致力于以 AI 赋能真实的文化旅行。")}
            </CardContent>
          </Card>

          {[{role:"CTO",desc:t("AI/Software Engineering Lead","AI/软件工程负责人")},{role:"CFO",desc:t("Finance & Ops","财务与运营")},{role:t("Social Media Manager","社媒经理"),desc:t("Content, partnerships, growth","内容/合作/增长")}].map((r)=> (
            <Card key={r.role} className="rounded-3xl">
              <CardHeader>
                <CardTitle>{r.role}</CardTitle>
                <CardDescription>{r.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="bg-[#123B7A] hover:bg-[#0B1C2C] w-full">
  <a href="#join">{t("Apply", "申请")}</a>
</Button>

              </CardContent>
            </Card>
          ))}

          <Card className="rounded-3xl md:col-span-2">
            <CardHeader>
              <CardTitle>{t("Beta Local Experts", "内测本地达人")}</CardTitle>
              <CardDescription>{t("Sign up to co-create the platform and join the first launch.", "报名共创平台并参与首发。")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full rounded-2xl overflow-hidden border">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder/viewform?embedded=true" title="Beta Local Expert Intake" className="w-full h-full">Loading…</iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="contact" className="py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#0B1C2C] mb-4">{t("Contact", "联系")}</h2>
            <div className="space-y-3 text-slate-800">
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-[#123B7A]" /><a href="mailto:fenglinghao650@gmail.com" className="hover:underline">fenglinghao650@gmail.com</a></div>
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-[#123B7A]" /><a href="tel:+14379718950" className="hover:underline">+1 (437) 971-8950</a></div>
              <div className="flex items-center gap-3"><MessageCircle className="h-5 w-5 text-[#123B7A]" /><span>WeChat: 15957196268</span></div>
            </div>
            <div className="mt-6">
              <Pill>{t("Capacity & Public Domain", "容量与公开性")}</Pill>
              <p className="mt-2 text-sm text-slate-700">
                {t("Low-cost, scalable static hosting (Vercel/Netlify/GitHub Pages). Clean, professional, and aligned with Brivia’s values.","采用低成本的静态托管（Vercel/Netlify/GitHub Pages），设计专业清爽并符合品牌价值。")}
              </p>
            </div>
          </div>
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle>{t("Send a Message", "在线留言")}</CardTitle>
              <CardDescription>{t("We’ll get back within 1–2 business days.", "我们将在 1–2 个工作日内回复。")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form method="POST" action="#">
                <div className="grid gap-3">
                  <Input name="name" placeholder={t("Your name", "姓名")} required />
                  <Input name="email" type="email" placeholder="Email" required />
                  <Textarea name="message" placeholder={t("How can we help?", "请描述您的需求")} rows={5} />
                  <Button className="bg-[#D4AF37] hover:bg-yellow-500 text-[#0B1C2C]">{t("Send", "发送")}</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      <footer className="bg-[#0B1C2C] text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© 2025 Brivia — {t("All rights reserved.", "版权所有")}</div>
          <div className="opacity-80">{t("Made with ❤️ for connection and discovery.", "以热爱连接与探索。")}</div>
        </div>
      </footer>
    </div>
  );
}
