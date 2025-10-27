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
                  <div className="text-slate-600">{t("Experience-first, tech-enabled.", "技术服务体验。")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="mission" className="py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <Bot className="h-5 w-5 text-[#123B7A]" />, title: t("AI-enabled","AI赋能"), desc: t("Systems that enable personalizations.","系统赋能个性化的服务与体验") },
            { icon: <Users className="h-5 w-5 text-[#123B7A]" />, title: t("Human-Centered","以人为本"), desc: t("Human connctions that bridge you and the destination.","向导是连结你与目的地的桥梁") },
            { icon: <Compass className="h-5 w-5 text-[#123B7A]" />, title: t("Authenticity","地道体验"), desc: t("Travel and explore like a local.","像当地人一样探索和旅行") },
          ].map((c)=> (
            <Card key={c.title} className="rounded-2xl shadow-sm min-h-[110px]">
              <CardHeader className="p-6">
                <CardTitle className="flex items-center gap-2">{c.icon}{c.title}</CardTitle>
                <CardDescription>{c.desc}</CardDescription>
              </CardHeader>

            </Card>
          ))}
        </div>
      </Section>

      <Section id="products" className="py-6">
        <h2 className="text-3xl font-bold text-[#0B1C2C] mb-6">{t("Our Products", "我们的产品")}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* === Brivience Card === */}
<Card className="rounded-3xl border-yellow-200/60">
  <CardHeader className="space-y-4">
    <div className="flex items-center justify-between">
      <CardTitle>{t("Brivience", "Brivience 平台")}</CardTitle>
      <Pill>{t("MVP Development", "MVP 开发中")}</Pill>
    </div>
    <CardDescription>
      {t(
        "AI-powered mobile platform connecting inbound tourists with Chinese local experts offering authentic, embodied experiences—think Airbnb Experiences, but more.",
        "AI 赋能的移动平台，连接入境游客与中国本地达人，提供真实而具身的在地体验——不止于 Airbnb Experiences。"
      )}
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
      <li>{t("Seeking founding tech talents.", "寻找联合创始技术人才。")}</li>
      <li>{t("Recruiting co-founding beta local experts.", "招募内测期共创本地达人。")}</li>
    </ul>
  </CardContent>
</Card>

{/* === Premium Local Tours Card === */}
<Card className="rounded-3xl border-yellow-200/60">
  <CardHeader className="space-y-4">
    <div className="flex items-center justify-between">
      <CardTitle>{t("Premium Local Tours", "高端定制旅行")}</CardTitle>
      <Pill>{t("Launching Soon", "即将上线")}</Pill>
    </div>
    <CardDescription>
      {t(
        "We blend the ease of all-in-one travel services with the richness of authentic local experiences—from the echoes of ancient dynasties to the fragrance of Dragon-Well tea drifting through bamboo forests—perfect for first-time travelers.",
        "结合一站式旅行服务与地道文化体验，从古代王朝的心跳到龙井茶香，尽享初访中国的完美旅程。"
      )}
    </CardDescription>
  </CardHeader>

  <CardContent>
    <div className="flex flex-wrap gap-3">
      <Button asChild className="bg-[#123B7A] hover:bg-[#0B1C2C]">
        <a href="#tours">{t("See Tour Packages", "查看精选行程")}</a>
      </Button>
      <Button asChild variant="outline" className="border-[#123B7A] text-[#123B7A]">
        <a href="#contact">{t("Contact for Partnership", "合作洽谈")}</a>
      </Button>
    </div>
    <ul className="mt-4 list-disc pl-5 text-sm text-slate-700 space-y-1">
      <li>{t("Looking to expand partnerships with qualified travel agencies (TA).", "正在拓展与优质旅行社的合作。")}</li>
    </ul>
  </CardContent>
</Card>

        </div>
      </Section>

      <Section id="tours" className="py-10">
  <div className="flex items-center gap-3 mb-6">
    <Route className="h-5 w-5 text-[#123B7A]" />
    <h2 className="text-3xl font-bold text-[#0B1C2C]">
      {t("Featured Tours", "精选行程")}
    </h2>
  </div>

  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        city: "Shanghai Cultural Discovery",
        subtitle: "Bund • Former French Concession • Alleyway Life",
        features: ["Custom pace", "Boutique restaurants", "Hidden gems walk"],
      },
      {
        city: "Hangzhou Premium Day Tour",
        subtitle: "West Lake • Tea Villages • Song Dynasty Heritage",
        features: [
          "Private guide & translation",
          "Premium transport",
          "Local dining",
        ],
      },
      {
        city: "Wuzhen Water Town Escape",
        subtitle: "Canals • Wooden Bridges • Night Lights",
        features: [
          "Traditional theater add-on",
          "Tea ceremony",
          "Photo spots",
        ],
      },
    ].map((tour) => (
      <Card
        key={tour.city}
        className="rounded-3xl overflow-hidden border border-yellow-200/60 shadow-sm flex flex-col"
      >
        <div className="bg-[#f7f4ed]">
          <Image
            src={tourImages[tour.city.split(" ")[0]] || "/hero.jpg"}
            alt={tour.city}
            width={1600}
            height={1200}
            className="w-full h-auto object-cover rounded-t-3xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 33vw"
          />
        </div>

        <CardHeader className="px-6 pt-4 pb-0">
  <CardTitle className="text-[#123B7A]">{tour.city}</CardTitle>
  <CardDescription className="text-slate-600 text-sm">{tour.subtitle}</CardDescription>
</CardHeader>

<CardContent className="px-6 pb-6 pt-2 flex flex-col justify-between flex-1">
  <ul className="text-sm text-slate-700 space-y-1">
    {tour.features.map((f) => (
      <li key={f} className="flex items-center gap-2">
        <Sparkles className="h-4 w-4" /> {f}
      </li>
    ))}
  </ul>

  <div className="mt-4 flex gap-2">
    <Button
      asChild
      variant="outline"
      className="border-[#123B7A] text-[#123B7A]"
    >
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
  {/* Heading + intro */}
   <div className="max-w-6xl mx-auto text-center">
  <h2 className="text-3xl font-bold text-[#0B1C2C] mb-4 text-left lg:text-left">
    {t("Our Plan", "发展规划")}
  </h2>
  <p className="text-slate-700 text-center whitespace-nowrap mx-auto">
    {t(
      "We’re early in branding and team-building. We aim to establish prominence in China inbound tourism, then expand globally.",
      "目前处于品牌与团队搭建的早期阶段。首先在中国入境游赛道建立影响力，随后全球化拓展。"
    )}
  </p>
</div>


  {/* Horizontal roadmap */}
  <div className="mt-10 max-w-6xl mx-auto px-2">
    <div className="relative bg-white rounded-3xl p-6 shadow-sm border border-yellow-200/50">
      {/* connecting line (desktop) */}
      <div className="hidden md:block absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[2px] bg-yellow-200/70" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-8">
        {[
          t("Build MVP & onboard beta local experts", "完成 MVP 并上线内测达人"),
          t("Launch Brivience beta in Hangzhou & Shanghai", "在杭/沪发布 Brivience 内测版"),
          t("Expand Brivience experts nationwide", "拓展 Brivience 达人至更多城市"),
          t("Empower experts with digital products (interactive maps, guides)", "赋能达人打造可变现的数字产品（智能交互地图、指南等）"),
          t("Scale globally", "全球扩张"),
        ].map((s, i) => (
          <div
            key={i}
            className="relative flex md:flex-col items-start md:items-center gap-3 md:gap-4"
          >
            {/* number badge */}
            <div className="z-10 shrink-0 h-9 w-9 rounded-full bg-[#D4AF37] text-[#0B1C2C] flex items-center justify-center font-bold md:mx-auto">
              {i + 1}
            </div>

            {/* text */}
            <div className="md:text-center">
              <div className="font-semibold text-[#123B7A]">
                {t("Milestone", "里程碑")} {i + 1}
              </div>
              <div className="text-sm text-slate-700">{s}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</Section>



      <Section id="join" className="py-12">
  <h2 className="text-3xl font-bold text-[#0B1C2C] mb-6">
    {t("Join Us", "加入我们")}
  </h2>

  {/* Row 1: CEO alone, centered */}
  <div className="flex justify-center mb-8">
    {/* Row 1: CEO card with image */}
<div className="flex justify-center mb-10">
  <Card className="rounded-3xl shadow-lg border border-yellow-100 md:flex md:flex-row md:w-[800px] overflow-hidden">
    {/* Image section */}
    <div className="md:w-1/2 w-full">
      <img
        src="/ceo.jpeg"
        alt="Linghao Feng"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Text section */}
    <div className="p-6 flex flex-col justify-center md:w-1/2">
      <CardHeader className="p-0">
        <CardTitle className="text-2xl font-semibold text-[#0B1C2C]">
          Linghao Feng
        </CardTitle>
        <CardDescription className="text-slate-600 mb-3">
          CEO, Founder
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 text-slate-700 text-sm leading-relaxed">
        Actor, psychologist-in-training, and entrepreneur building authentic,
        AI-enabled cultural travel.
      </CardContent>
    </div>
  </Card>
</div>

  </div>

  {/* Row 2: four equal cards */}
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
    {/* CTO */}
    <Card className="rounded-3xl">
      <CardHeader>
        <CardTitle>CTO</CardTitle>
        <CardDescription>{t("Leads AI infrastructure, product engineering, and technical architecture.","AI/软件工程负责人")}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild className="w-full bg-[#123B7A] hover:bg-[#0B1C2C]">
          <a href="#join">{t("Apply", "申请")}</a>
        </Button>
      </CardContent>
    </Card>

    {/* CFO */}
    <Card className="rounded-3xl">
      <CardHeader>
        <CardTitle>CFO</CardTitle>
        <CardDescription>{t("Oversees finance, business operations, and strategic growth planning.","财务与运营")}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild className="w-full bg-[#123B7A] hover:bg-[#0B1C2C]">
          <a href="#join">{t("Apply", "申请")}</a>
        </Button>
      </CardContent>
    </Card>

    {/* Social Media Manager */}
    <Card className="rounded-3xl">
      <CardHeader>
        <CardTitle>{t("Social Media Manager","社媒经理")}</CardTitle>
        <CardDescription>{t("Manages content strategy, partnerships, and brand storytelling.","内容/合作/增长")}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild className="w-full bg-[#123B7A] hover:bg-[#0B1C2C]">
          <a href="#join">{t("Apply", "申请")}</a>
        </Button>
      </CardContent>
    </Card>

    {/* Beta Local Experts (same look; button links to signup) */}
    <Card className="rounded-3xl">
      <CardHeader>
        <CardTitle>{t("Beta Local Experts", "内测本地达人")}</CardTitle>
        <CardDescription>
          {t("Sign up to create the platform together with us and join the first launch.","报名共创平台并参与首发。")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          asChild
          className="w-full bg-[#123B7A] hover:bg-[#0B1C2C]"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("Apply", "申请")}
          </a>
        </Button>
      </CardContent>
    </Card>
  </div>
</Section>

      <Section id="contact" className="py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#0B1C2C] mb-4">{t("Contact", "联系")}</h2>
            <div className="space-y-5 text-slate-800 mt-6">
              <div className="flex items-center gap-4 text-lg md:text-xl font-medium">
    <Mail className="h-6 w-6 text-[#123B7A]" />
    <a href="mailto:fenglinghao650@gmail.com" className="hover:text-[#D4AF37] transition-colors">
      fenglinghao650@gmail.com
    </a>
  </div>
              <div className="flex items-center gap-4 text-lg md:text-xl font-medium">
    <Phone className="h-6 w-6 text-[#123B7A]" />
    <a href="tel:+14379718950" className="hover:text-[#D4AF37] transition-colors">
      +1 (437) 971-8950
    </a>
  </div>
              <div className="flex items-center gap-4 text-lg md:text-xl font-medium">
    <MessageCircle className="h-6 w-6 text-[#123B7A]" />
    <span className="hover:text-[#D4AF37] transition-colors">
      WeChat: 15957196268
    </span>
  </div>
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
