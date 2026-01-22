"use client";
/* eslint-disable @next/next/no-img-element */

import { useState, useEffect } from "react";

export default function Home() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [reviewSlideIndex, setReviewSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const customerReviews = Array.from({ length: 9 }, (_, i) => `/csreview/${i + 1}.png`);
  const slidesPerView = isMobile ? 1 : 3;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setReviewSlideIndex((prev) => (prev + 1) % customerReviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [customerReviews.length]);

  const navLinks = [
    { name: "บริการของเรา", href: "#services" },
    { name: "ผลิตภัณฑ์ของเรา", href: "#products" },
    { name: "คำถามที่พบบ่อย", href: "#faq" },
    { name: "รีวิวจากลูกค้า", href: "#reviews" },
    { name: "ผลงานการติดตั้ง", href: "#installation" },
    { name: "วีดีโอแนะนำ", href: "#video" },
  ];
  const installationFolder = "/ผลงานการติดตั้ง-20260121T012815Z-1-001/ผลงานการติดตั้ง";
  const installationImages = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22].map((num) => ({
    src: encodeURI(`${installationFolder}/${num}.png`),
    caption: `ผลงานการติดตั้ง ${num}`,
  }));

  const serviceFolder = "/service-20260105T101027Z-1-001/service";
  const lineLink = "https://lin.ee/ahTlruO";
  const lineHandle = "@masterhouse";
  const contactPhones = [
    { name: "คุณบอม", number: "085-495-6395" },
    { name: "คุณเอ้", number: "065-919-4403" },
  ];
  const officeAddress = "บริษัท มาสเตอร์ เฮ้าส จำกัด";
  const services = [
    {
      title: "การประเมินหน้างาน",
      description:
        "ตรวจสอบพื้นที่จริง สภาพแวดล้อม และรูปแบบการใช้งาน เพื่อคำนวณปริมาณลมและเลือกอุปกรณ์ได้ตรงจุด",
      image: `${serviceFolder}/1 (1).png`,
    },
    {
      title: "ออกแบบและวางตำแหน่งการติดตั้ง",
      description:
        "วางแผนเส้นทางท่อและตำแหน่งเครื่องเติมอากาศให้เหมาะกับโครงสร้าง เพื่อให้เกิดแรงดันบวกและการหมุนเวียนอากาศที่ดีที่สุด",
      image: `${serviceFolder}/2 (1).png`,
    },
    {
      title: "ดูแลหลังการขายและให้คำปรึกษา",
      description:
        "ติดตามผลการใช้งาน ตรวจสอบอุปกรณ์ และให้คำแนะนำตลอดอายุการใช้งาน เพื่อให้ระบบทำงานได้เต็มประสิทธิภาพเสมอ",
      image: `${serviceFolder}/3.png`,
    },
  ];
  const facebookContacts = [
    { name: "O2 AirFlow", url: "https://www.facebook.com/O2airflow" },
    { name: "Smile O2", url: "https://www.facebook.com/smileO2cm" },
    { name: "Master House", url: "https://www.facebook.com/masterhousecmi" },
  ];

  return (
    <main className="bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logos */}
            <a href="#services" className="flex items-center gap-3 shrink-0">
              <img
                src="/master-house-logo.jpg"
                alt="Master House logo"
                className="h-10 sm:h-14 w-auto rounded-lg shadow-sm"
              />
              <img
                src="/o2-airflow.jpg"
                alt="O2 Airflow logo"
                className="h-8 sm:h-12 w-auto rounded-lg shadow-sm"
              />
              <img
                src="/smile-o2.jpg"
                alt="Smile O2 logo"
                className="h-8 sm:h-12 w-auto rounded-lg shadow-sm"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary-light rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={lineLink}
                target="_blank"
                rel="noreferrer"
                className="ml-2 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                ติดต่อเรา
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? "max-h-screen" : "max-h-0"
            }`}
        >
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-700 px-4 py-4 space-y-1">
            {/* Mobile Logos */}
            <div className="flex items-center justify-center gap-4 pb-4 mb-4 border-b border-slate-200 dark:border-slate-700">
              <img
                src="/master-house-logo.jpg"
                alt="Master House logo"
                className="h-14 w-auto rounded-lg shadow-sm"
              />
              <img
                src="/o2-airflow.jpg"
                alt="O2 Airflow logo"
                className="h-12 w-auto rounded-lg shadow-sm"
              />
              <img
                src="/smile-o2.jpg"
                alt="Smile O2 logo"
                className="h-12 w-auto rounded-lg shadow-sm"
              />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary-light rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={lineLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full mt-2 px-4 py-3 text-base font-medium text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors shadow-md text-center"
            >
              ติดต่อเรา
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-24" />

      <section className="relative py-24 overflow-hidden" id="services">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900" />

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl translate-x-1/2" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl translate-y-1/2" />

        {/* Wave decoration at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24 fill-background-light dark:fill-background-dark" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 bg-white/80 dark:bg-slate-800/80 text-primaryDark dark:text-primary rounded-full text-md font-bold tracking-wider mb-4 uppercase shadow-sm">
              บริการของเรา
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4">ดูแลครบทุกขั้นตอน</h2>
            <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
              บริการครบ ตั้งแต่ประเมินหน้างาน ออกแบบการติดตั้ง ไปจนถึงดูแลหลังการขายอย่างต่อเนื่อง
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-3xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-white/50 dark:border-slate-700/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="relative w-full rounded-2xl overflow-hidden mb-6">
                  <img
                    alt={service.title}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    src={service.image}
                  />
                </div>
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">{service.title}</h3>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden" id="products">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-light via-slate-50 to-blue-50/50 dark:from-background-dark dark:via-slate-900 dark:to-blue-950/30" />

        {/* Decorative dots pattern */}
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <div>
              <span className="inline-block py-1 px-3 bg-primary/20 text-primaryDark dark:text-primary rounded-full text-md font-bold tracking-wider mb-4 uppercase">
                ผลิตภัณฑ์ของเรา
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">เครื่องเติมอากาศ</h2>
            </div>
            <p className="text-text-muted-light dark:text-text-muted-dark max-w-md mt-4">
              Master House มีเครื่องเติมอากาศ เครื่องฟอกอากาศ เครื่องลดความชื้น เครื่องปรับอากาศ และระบบควบคุมอากาศหลากหลายรูปแบบ พร้อมห้องตัวอย่างให้ทดลองสัมผัสอากาศบริสุทธิ์จริงก่อนตัดสินใจติดตั้ง
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-card-dark border-2 border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <div className="absolute inset-0 bg-primary/5" />
                <img
                  alt="PRO 70 CFM"
                  className="relative w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 p-6"
                  src="/products/70 (1).png"
                />

              </div>
              <div className="p-6 space-y-5">
                <div>
                  <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2 group-hover:text-primary transition-colors">PRO 70 CFM</h3>
                  <div className="flex items-center gap-2 text-sm text-text-muted-light dark:text-text-muted-dark">
                    <span className="material-symbols-outlined text-base text-primary">verified</span>
                    <span>ประสิทธิภาพสูง</span>
                  </div>
                </div>
                <div className="space-y-3 border-t border-gray-100 dark:border-gray-800 pt-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">filter_alt</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">ระบบกรอง 6 ขั้นตอน</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Net / Pre-filter G5 / Medium M5 / Carbon / ULPA U15-U16 / UVC 8W</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">air</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">ปริมาณลม / ท่ออากาศ</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">70 CFM / 119 CMH / ท่อ 76 มม.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">straighten</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">ขนาดตู้กรอง / หน้ากาก</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">30×53×37 ซม. / สี่เหลี่ยม 15×15 ซม.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">home</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">พื้นที่แนะนำ</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">20-30 ตร.ม.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">build</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">วัสดุ / การติดตั้ง</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">เหล็ก 0.9 มม. สีฝุ่น / ผนังหรือขาตั้ง</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">bolt</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">กำลังไฟ / เสียง / น้ำหนัก</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">66W (220V/0.4A) / 53 dB(A) / 21.5 Kg</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">settings_remote</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">รีโมทไร้สาย</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">ปรับ 3 ระดับ (RF315) 11.5×5 ซม.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">verified_user</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">รับประกันมอเตอร์ / ทนแดด-ฝน</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">5 ปี / ทนแดด-ฝน 99%</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-100 dark:border-gray-800 pt-5 space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-text-muted-light dark:text-text-muted-dark">ราคาเริ่มต้น</span>
                    <span className="text-3xl font-bold text-primary">฿27,500</span>
                  </div>
                  <a href={lineLink} target="_blank" rel="noreferrer" className="w-full bg-gradient-to-r from-primary to-primaryDark text-white px-6 py-3.5 rounded-2xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-bold text-sm flex items-center justify-center gap-2 group-hover:scale-105">
                    <span>ติดต่อเรา</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-card-dark border-2 border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <div className="absolute inset-0 bg-primary/5" />
                <img
                  alt="PRO 180 CFM"
                  className="relative w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 p-6"
                  src="/products/180 (1).png"
                />

              </div>
              <div className="p-6 space-y-5">
                <div>
                  <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2 group-hover:text-primary transition-colors">PRO 180 CFM</h3>
                  <div className="flex items-center gap-2 text-sm text-text-muted-light dark:text-text-muted-dark">
                    <span className="material-symbols-outlined text-base text-primary">verified</span>
                    <span>ประสิทธิภาพสูง</span>
                  </div>
                </div>
                <div className="space-y-3 border-t border-gray-100 dark:border-gray-800 pt-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">filter_alt</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">ระบบกรอง 6 ขั้นตอน</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Net / Pre-filter G5 / Medium M5 / Carbon / ULPA U15-U16 / UVC 10W</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">air</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">ปริมาณลม / ท่ออากาศ</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">180 CFM / 306 CMH / ท่อ 110 มม.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">straighten</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">ขนาดตู้กรอง / หน้ากาก</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">36×79×69 ซม. / กลม Ø20 ซม.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">home</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">พื้นที่แนะนำ</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">50-60 ตร.ม.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">build</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">วัสดุ / การติดตั้ง</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">เหล็ก 0.9 มม. สีฝุ่น / ผนังหรือขาตั้ง</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">bolt</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">กำลังไฟ / เสียง / น้ำหนัก</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">176W (220V/0.8A) / 58 dB(A) / 36 Kg</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">settings_remote</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">รีโมทไร้สาย</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">ปรับ 3 ระดับ (RF315)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">verified_user</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">รับประกันมอเตอร์ / ทนแดด-ฝน</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">5 ปี / ทนแดด-ฝน 99%</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-100 dark:border-gray-800 pt-5 space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-text-muted-light dark:text-text-muted-dark">ราคาเริ่มต้น</span>
                    <span className="text-3xl font-bold text-primary">฿52,500</span>
                  </div>
                  <a href={lineLink} target="_blank" rel="noreferrer" className="w-full bg-gradient-to-r from-primary to-primaryDark text-white px-6 py-3.5 rounded-2xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-bold text-sm flex items-center justify-center gap-2 group-hover:scale-105">
                    <span>ติดต่อเรา</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-card-dark border-2 border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <div className="absolute inset-0 bg-primary/5" />
                <img
                  alt="STANDARD 200 CFM"
                  className="relative w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 p-6"
                  src="/products/200.png"
                />

              </div>
              <div className="p-6 space-y-5">
                <div>
                  <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2 group-hover:text-primary transition-colors">STANDARD 200 CFM</h3>
                  <div className="flex items-center gap-2 text-sm text-text-muted-light dark:text-text-muted-dark">
                    <span className="material-symbols-outlined text-base text-primary">star</span>
                    <span>มาตรฐาน</span>
                  </div>
                </div>
                <div className="space-y-3 border-t border-gray-100 dark:border-gray-800 pt-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">filter_alt</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">ระบบกรอง 2 ขั้นตอน</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Pre-filter G5 (305×305×44 มม.) / HEPA H14 (305×305×150 มม.)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">air</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">ปริมาณลม / ท่ออากาศ</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">380 CFM / 646 CMH / ท่อ 110 มม.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">straighten</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">ขนาดตู้กรอง / หน้ากาก</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">34×89×40 ซม. / กลม Ø20 ซม.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">home</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">พื้นที่แนะนำ</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">80-100 ตร.ม.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">build</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">วัสดุ / การติดตั้ง</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">เหล็ก 0.9 มม. สีฝุ่น / ผนังหรือขาตั้ง</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">bolt</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">กำลังไฟ / เสียง / น้ำหนัก</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">176W (220V/0.8A) / 55 dB(A) / 21 Kg</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">settings_remote</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">รีโมทไร้สาย</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">ปรับ 3 ระดับ (RF315)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">verified_user</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">รับประกันมอเตอร์ / ทนแดด-ฝน</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">2 ปี / ทนแดด-ฝน 99%</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-100 dark:border-gray-800 pt-5 space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-text-muted-light dark:text-text-muted-dark">ราคาเริ่มต้น</span>
                    <span className="text-3xl font-bold text-primary">฿35,000</span>
                  </div>
                  <a href={lineLink} target="_blank" rel="noreferrer" className="w-full bg-gradient-to-r from-primary to-primaryDark text-white px-6 py-3.5 rounded-2xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-bold text-sm flex items-center justify-center gap-2 group-hover:scale-105">
                    <span>ติดต่อเรา</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-card-dark border-2 border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <div className="absolute inset-0 bg-primary/5" />
                <img
                  alt="STANDARD 380 CFM"
                  className="relative w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 p-6"
                  src="/products/380.png"
                />

              </div>
              <div className="p-6 space-y-5">
                <div>
                  <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2 group-hover:text-primary transition-colors">STANDARD 380 CFM</h3>
                  <div className="flex items-center gap-2 text-sm text-text-muted-light dark:text-text-muted-dark">
                    <span className="material-symbols-outlined text-base text-primary">apartment</span>
                    <span>พื้นที่ขนาดใหญ่</span>
                  </div>
                </div>
                <div className="space-y-3 border-t border-gray-100 dark:border-gray-800 pt-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">filter_alt</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">ระบบกรอง 2 ขั้นตอน</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Pre-filter G5 (305×305×44 มม.) / HEPA H14 (305×305×150 มม.)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">air</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">ปริมาณลม / ท่ออากาศ</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">380 CFM / 646 CMH / ท่อ 110 มม. × 2 </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">straighten</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">ขนาดตู้กรอง / หน้ากาก</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">34×105×40 ซม. / กลม Ø20 ซม. (2 ชุด)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">home</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">พื้นที่แนะนำ</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">160-200 ตร.ม.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">build</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">วัสดุ / การติดตั้ง</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">เหล็ก 0.9 มม. สีฝุ่น / ผนังหรือขาตั้ง</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">bolt</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">กำลังไฟ / เสียง / น้ำหนัก</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">176W (220V/0.8A) / 60 dB(A) / 28 Kg</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">settings_remote</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">รีโมทไร้สาย</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">ปรับ 3 ระดับ (RF315)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">verified_user</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-0.5">รับประกันมอเตอร์ / ทนแดด-ฝน</p>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">2 ปี / ทนแดด-ฝน 99%</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-100 dark:border-gray-800 pt-5 space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-text-muted-light dark:text-text-muted-dark">ราคาเริ่มต้น</span>
                    <span className="text-3xl font-bold text-primary">฿55,000</span>
                  </div>
                  <a href={lineLink} target="_blank" rel="noreferrer" className="w-full bg-gradient-to-r from-primary to-primaryDark text-white px-6 py-3.5 rounded-2xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-bold text-sm flex items-center justify-center gap-2 group-hover:scale-105">
                    <span>ติดต่อเรา</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="relative py-24 overflow-hidden" id="benefits">
        <div className="absolute inset-0 bg-gradient-to-br from-background-light via-white to-blue-50/80 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30" />
        <div className="absolute inset-x-0 top-1/3 h-40 bg-primary/10 blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                <span className="material-symbols-outlined text-base">blur_on</span>
                Indoor Air Quality
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-light dark:text-text-dark leading-tight">
                หายใจโล่งขึ้นจริง นอนหลับสนิท และลดกลิ่นได้สูงสุดถึง 98%
              </h2>
              <p className="text-lg text-text-muted-light dark:text-text-muted-dark">
                หายใจโล่งขึ้นจริง แก้ปัญหาอากาศอับในบ้าน และฝุ่น PM2.5 อย่างได้ผล นอนหลับสนิท ลดกลิ่นไม่พึงประสงค์จากภายนอกได้สูงสุดถึง 98%
              </p>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                ด้วยระบบระบายอากาศและระบบเติมอากาศสำหรับบ้านพักอาศัยที่ออกแบบเฉพาะตามโครงสร้างและการใช้งานจริงของบ้านคุณ โดยทีมผู้เชี่ยวชาญด้านระบบอากาศภายในอาคาร (Indoor Air Quality) จาก Master House
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-white/50 dark:border-white/10 shadow-lg shadow-primary/10 backdrop-blur">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-primary text-2xl">air</span>
                    <p className="text-sm font-semibold text-text-light dark:text-text-dark">เติมอากาศบริสุทธิ์</p>
                  </div>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                    ส่งอากาศสะอาดเข้าสู่ทุกห้อง ลดฝุ่นสะสมและกลิ่นอับอย่างต่อเนื่องตลอด 24 ชั่วโมง
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-gradient-to-br from-primary to-primaryDark text-white shadow-lg shadow-primary/30">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-2xl">shield_moon</span>
                    <p className="text-sm font-semibold uppercase tracking-widest">98%</p>
                  </div>
                  <p className="text-sm text-white/80">
                    ป้องกันกลิ่นไม่พึงประสงค์จากภายนอก และช่วยให้การพักผ่อนในเวลากลางคืนสงบขึ้นทันที
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-text-light dark:text-text-dark">
              <div className="rounded-3xl border border-white/40 dark:border-white/5 bg-white/60 dark:bg-slate-950/60 backdrop-blur p-8 shadow-2xl shadow-primary/10">
                <div className="flex flex-wrap gap-6 mb-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-text-muted-light dark:text-text-muted-dark">ลดกลิ่น</p>
                    <p className="text-4xl font-bold text-primary">98%</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-text-muted-light dark:text-text-muted-dark">ลดฝุ่น PM2.5</p>
                    <p className="text-4xl font-bold text-text-light dark:text-text-dark">99.9995%</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      icon: "sync",
                      title: "ระบบจ่าย-ระบายสมดุล",
                      desc: "ออกแบบตำแหน่งท่อลมให้สมดุลกับโครงสร้างบ้าน ทำให้อากาศสดชื่นแบบไม่ต้องเปิดหน้าต่างตลอดเวลา",
                    },
                    {
                      icon: "light_mode",
                      title: "เซ็ตค่าได้ตามไลฟ์สไตล์",
                      desc: "ปรับปริมาณลมให้เหมาะกับช่วงเวลาพักผ่อน เวิร์คฟรอมโฮม หรือวันที่อากาศแย่เป็นพิเศษ",
                    },
                  ].map((item) => (
                    <div className="flex gap-4" key={item.title}>
                      <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
                      <div>
                        <p className="font-semibold text-lg">{item.title}</p>
                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-dashed border-primary/40 px-6 py-5 bg-primary/5 dark:bg-primary/10">
                <div className="flex items-center gap-3 text-primary font-semibold">
                  <span className="material-symbols-outlined">support_agent</span>
                  ทีมผู้เชี่ยวชาญ Master House
                </div>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark text-center sm:text-left">
                  สำรวจหน้างานและออกแบบระบบที่ตอบโจทย์ปัญหาอากาศของบ้านคุณจริง ๆ ก่อนเริ่มติดตั้ง
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SmileO2 vs O2Airflow Section */}
      <section className="relative py-24 overflow-hidden" id="brands">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-100 dark:from-slate-950 dark:via-indigo-950/30 dark:to-slate-900" />
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4">
              SmileO2 vs O2Airflow ต่างกันอย่างไร?
            </h2>
            <p className="text-text-muted-light dark:text-text-muted-dark max-w-4xl mx-auto mb-4">
              SmileO2 และ O2Airflow เป็นเครื่องเติมอากาศระบบ PPV (Positive Pressure Ventilation) เหมือนกัน หน้าที่หลักคือการดึงอากาศจากภายนอก ผ่านการกรองประสิทธิภาพสูง แล้วเติมอากาศสะอาดเข้าสู่ภายในอาคารด้วยแรงดันบวก ช่วยลดการสะสมของฝุ่น PM2.5 กลิ่นอับ และก๊าซคาร์บอนไดออกไซด์ (CO₂) ภายในบ้านหรืออาคารได้อย่างมีประสิทธิภาพ
            </p>
            <p className="text-primary font-semibold">
              ความแตกต่างหลักของทั้งสองแบรนด์ อยู่ที่แนวทางการใช้งานและเทคโนโลยีเสริม
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* SmileO2 Card */}
            <div className="group relative rounded-3xl bg-white/80 dark:bg-slate-900/70 border border-white/50 dark:border-slate-800/70 shadow-xl backdrop-blur p-8 hover:shadow-2xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/o2-airflow.jpg"
                  alt="Smile O2 logo"
                  className="h-16 w-auto rounded-xl shadow-md"
                />
                <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">SmileO2</h3>
              </div>
              <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark">
                <p className="leading-relaxed">
                  เป็นเทคโนโลยี<strong className="text-text-light dark:text-text-dark">ห้องคลีนรูม (Clean Room)</strong> สำหรับเติมออกซิเจน เติมอากาศบริสุทธิ์ (Fresh Air) ที่เหมาะทั้งห้องนอน ห้องนั่งเล่น ห้องทำงาน ห้องประชุม สำนักงาน โรงงาน ห้องปลอดเชื้อ ห้องแลป ร้านยาเวชภัณฑ์ หรือพื้นที่ปิดต่างๆ
                </p>
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <p className="leading-relaxed">
                    โดยระบบจะเติมอากาศจากภายนอกผ่านระบบกรองอากาศเติมเข้าไปในห้องโดยตรง และผลักดันอากาศเสียภายในออกไปตามช่องต่างๆ ทำให้ในห้องจะมีแต่<strong className="text-primary">อากาศบริสุทธิ์อยู่ตลอดเวลา</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* O2Airflow Card */}
            <div className="group relative rounded-3xl bg-white/80 dark:bg-slate-900/70 border border-white/50 dark:border-slate-800/70 shadow-xl backdrop-blur p-8 hover:shadow-2xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/smile-o2.jpg"
                  alt="O2 Airflow logo"
                  className="h-16 w-auto rounded-xl shadow-md"
                />
                <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">O2Airflow</h3>
              </div>
              <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark">
                <p className="leading-relaxed mb-10">
                  เพิ่มความสะดวกด้วย<strong className="text-text-light dark:text-text-dark">เทคโนโลยี Mobile Application</strong> ผู้ใช้งานสามารถควบคุมการทำงานผ่านมือถือ ตั้งเวลาเปิด-ปิดอัตโนมัติ และปรับการใช้งานให้สอดคล้องกับไลฟ์สไตล์ได้ง่ายขึ้น
                </p>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <p className="leading-relaxed">
                    เหมาะกับผู้ที่ชอบความทันสมัย และต้องการ<strong className="text-primary">ควบคุมระบบอากาศภายในบ้านได้แบบเรียลไทม์</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden" id="faq">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-blue-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30" />
        <div className="absolute -top-24 right-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-950" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 bg-primary/20 text-primaryDark dark:text-primary rounded-full text-md font-bold tracking-wider mb-4 uppercase">
              คำถามที่พบบ่อย
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4">ตอบทุกคำถามเรื่องฝุ่น ครบจบในโพสต์เดียว</h2>
            <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
              รวมคำถามที่ลูกค้าถามบ่อยเกี่ยวกับระบบเติมอากาศ Master House เพื่อสุขภาพทางเดินหายใจที่ดีขึ้นของทั้งครอบครัว
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="group rounded-2xl bg-white/80 dark:bg-slate-900/70 p-6 border border-white/40 dark:border-slate-800/60 backdrop-blur hover:shadow-xl transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">1. เครื่องเติมอากาศ คืออะไร?</h3>
                <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="mt-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed space-y-3">
                <p>
                  เครื่องเติมอากาศคือระบบระบายอากาศแรงดันบวกที่ดึงอากาศภายนอกเข้ามา ผ่านการกรอง 6 ขั้นตอน (Pre-filter, ดักขน/ฝุ่นหยาบ,
                  Carbon, HEPA, ULPA, UVC) ก่อนอัดลมสะอาดเข้าสู่ห้อง ทำให้เกิดแรงดันบวกดันฝุ่น PM2.5 ออกจากรอยรั่วทุกจุด จึงรักษาค่าฝุ่นในห้องให้ใกล้ 0 ppm ตลอดเวลา
                </p>
              </div>
            </details>
            <details className="group rounded-2xl bg-white/80 dark:bg-slate-900/70 p-6 border border-white/40 dark:border-slate-800/60 backdrop-blur hover:shadow-xl transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">2. เครื่องฟอกอากาศ vs. เครื่องเติมอากาศ ต่างกันอย่างไร?</h3>
                <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="mt-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed space-y-4">
                <p>ตารางนี้ช่วยให้เห็นความต่างชัดเจน:</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border border-gray-200 dark:border-gray-800">
                    <thead className="bg-gray-50 dark:bg-gray-800/50 text-text-light dark:text-text-dark">
                      <tr>
                        <th className="p-3">คุณสมบัติ</th>
                        <th className="p-3">เครื่องเติมอากาศ (Master House)</th>
                        <th className="p-3">เครื่องฟอกอากาศทั่วไป</th>
                      </tr>
                    </thead>
                    <tbody className="text-text-muted-light dark:text-text-muted-dark">
                      <tr className="border-t border-gray-200 dark:border-gray-700">
                        <td className="p-3 font-semibold text-text-light dark:text-text-dark">การทำงาน</td>
                        <td className="p-3">เติมอากาศดีใหม่พร้อมไล่อากาศเสียออก</td>
                        <td className="p-3">หมุนเวียนและฟอกอากาศเดิมภายในห้อง</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-700">
                        <td className="p-3 font-semibold text-text-light dark:text-text-dark">การป้องกันฝุ่น</td>
                        <td className="p-3">สร้างแรงดันบวก กัน PM2.5 ไม่ให้เข้าบ้าน</td>
                        <td className="p-3">ลด PM2.5 เฉพาะอากาศภายใน ฝุ่นใหม่ยังเข้าได้ตลอด</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-700">
                        <td className="p-3 font-semibold text-text-light dark:text-text-dark">คุณภาพอากาศ</td>
                        <td className="p-3">เติมออกซิเจนใหม่ CO₂ ไม่สะสม</td>
                        <td className="p-3">CO₂ สะสม อาจทำให้รู้สึกง่วงหรืออับ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </details>
            <details className="group rounded-2xl bg-white/80 dark:bg-slate-900/70 p-6 border border-white/40 dark:border-slate-800/60 backdrop-blur hover:shadow-xl transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">3. เครื่องเติมอากาศ Master House มีกี่รุ่น?</h3>
                <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="mt-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed space-y-4">
                <p>เราโฟกัส 4 รุ่นหลักที่ครอบคลุมทุกขนาดพื้นที่:</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border border-gray-200 dark:border-gray-800">
                    <thead className="bg-gray-50 dark:bg-gray-800/50 text-text-light dark:text-text-dark">
                      <tr>
                        <th className="p-3">รุ่น</th>
                        <th className="p-3">พื้นที่แนะนำ</th>
                        <th className="p-3">การกรอง</th>
                        <th className="p-3">ประกันมอเตอร์</th>
                        <th className="p-3">ราคาเริ่มต้น*</th>
                      </tr>
                    </thead>
                    <tbody className="text-text-muted-light dark:text-text-muted-dark">
                      <tr className="border-t border-gray-200 dark:border-gray-700">
                        <td className="p-3 font-semibold text-text-light dark:text-text-dark">RRO 70 cfm</td>
                        <td className="p-3">ไม่เกิน 30 ตร.ม.</td>
                        <td className="p-3">6 ขั้นตอนครบ</td>
                        <td className="p-3">5 ปี</td>
                        <td className="p-3">฿27,500</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-700">
                        <td className="p-3 font-semibold text-text-light dark:text-text-dark">PRO 180 cfm</td>
                        <td className="p-3">50-60 ตร.ม.</td>
                        <td className="p-3">6 ขั้นตอนครบ</td>
                        <td className="p-3">5 ปี</td>
                        <td className="p-3">฿52,500</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-700">
                        <td className="p-3 font-semibold text-text-light dark:text-text-dark">STANDARD 200 cfm</td>
                        <td className="p-3">60-70 ตร.ม.</td>
                        <td className="p-3">2 ขั้นตอน</td>
                        <td className="p-3">2 ปี</td>
                        <td className="p-3">฿35,000</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-700">
                        <td className="p-3 font-semibold text-text-light dark:text-text-dark">STANDARD 380 cfm</td>
                        <td className="p-3">100-120 ตร.ม.</td>
                        <td className="p-3">2 ขั้นตอน</td>
                        <td className="p-3">2 ปี</td>
                        <td className="p-3">฿55,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark">*ราคารวมติดตั้ง รุ่น PRO เหมาะพื้นที่ที่มีปัญหากลิ่นเผาหรือมลพิษหนักเพราะมี Carbon + ULPA + UVC ครบ</p>
              </div>
            </details>
            <details className="group rounded-2xl bg-white/80 dark:bg-slate-900/70 p-6 border border-white/40 dark:border-slate-800/60 backdrop-blur hover:shadow-xl transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">4. จะเลือกรุ่นอย่างไร?</h3>
                <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="mt-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed space-y-3">
                <p>เลือกตามขนาดห้องและปัญหากลิ่น (ติดตั้งแบบแยกห้องเหมือนแอร์):</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>≤30 ตร.ม.: RRO 70 cfm ราคา 27,500 บาท</li>
                  <li>50-60 ตร.ม.: PRO 180 cfm ราคา 52,500 บาท</li>
                  <li>60-70 ตร.ม. และไม่มีปัญหากลิ่นหนัก: STANDARD 200 cfm ราคา 35,000 บาท</li>
                  <li>พื้นที่รวม/แยก 2 ห้อง 100-120 ตร.ม. และไม่มีปัญหากลิ่นหนัก: STANDARD 380 cfm ราคา 55,000 บาท</li>
                </ul>
              </div>
            </details>
            <details className="group rounded-2xl bg-white/80 dark:bg-slate-900/70 p-6 border border-white/40 dark:border-slate-800/60 backdrop-blur hover:shadow-xl transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">5. ตัวเครื่องกินไฟเยอะไหม?</h3>
                <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="mt-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed space-y-3">
                <p>ไม่ต้องกังวล! มอเตอร์พัดลมถูกออกแบบให้ประหยัดไฟ:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>เปิดทุกวัน 8-10 ชม.: รุ่นเล็กตกอยู่ที่ ~100-120 บาท/เดือน</li>
                  <li>รุ่นใหญ่ประมาณ ~150-170 บาท/เดือน</li>
                </ul>
                <p>จึงคุ้มค่าสำหรับการเปิดต่อเนื่องเพื่อรักษาแรงดันบวกทั้งวัน</p>
              </div>
            </details>
            <details className="group rounded-2xl bg-white/80 dark:bg-slate-900/70 p-6 border border-white/40 dark:border-slate-800/60 backdrop-blur hover:shadow-xl transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">6. เครื่องเดียวจ่ายลมได้หลายห้องไหม?</h3>
                <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="mt-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                ทำได้ โดยใช้เครื่องขนาดใหญ่แล้วออกแบบท่อแยกไป 2-3 ห้องพร้อมกัน ขึ้นอยู่กับพื้นที่รวมและการใช้งาน ทีมวิศวกรจะช่วยคำนวณให้สมดุลทั้งแรงดันและปริมาณลม
              </div>
            </details>
            <details className="group rounded-2xl bg-white/80 dark:bg-slate-900/70 p-6 border border-white/40 dark:border-slate-800/60 backdrop-blur hover:shadow-xl transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">7. ต้องบำรุงรักษาอย่างไรและมีค่าใช้จ่ายเท่าไหร่?</h3>
                <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="mt-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed space-y-3">
                <p>โดยทั่วไปเปลี่ยนไส้กรองครบชุดทุก 2-3 ปี เพื่อลดฝุ่นสะสมและยืดอายุเครื่อง (ตัวอย่าง PREMIUM 70 cfm ตลอด 3 ปีเฉลี่ย ~7,000 บาท)</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Pre-filter ล้างทุก 3 เดือน (ไม่มีค่าใช้จ่าย)</li>
                  <li>ชุด Non-ULPA ทุก 12 เดือน (ประมาณ 4,000 บาท)</li>
                  <li>ULPA ทุก 24 เดือน (ประมาณ 3,000 บาท)</li>
                </ul>
                <p>ทีมบริการจะนัดหมายและดูแลตามรอบเพื่อให้ระบบทำงานเต็มประสิทธิภาพ</p>
              </div>
            </details>
            <details className="group rounded-2xl bg-white/80 dark:bg-slate-900/70 p-6 border border-white/40 dark:border-slate-800/60 backdrop-blur hover:shadow-xl transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">8. เสียงเครื่องดังไหม?</h3>
                <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="mt-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed space-y-2">
                <p>เสียงเงียบกว่าพัดลมดูดอากาศในห้องน้ำ และยังมี “กล่องไซเรนเซอร์” ลดเสียงสะท้อนเพิ่มเติม</p>
                <p>สามารถสลับโหมด Low ตอนนอนเพื่อความเงียบสูงสุด เครื่องทำงานเนียนไม่รบกวนการพักผ่อน</p>
              </div>
            </details>
            <details className="group rounded-2xl bg-white/80 dark:bg-slate-900/70 p-6 border border-white/40 dark:border-slate-800/60 backdrop-blur hover:shadow-xl transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">9. เปิด/ปิด หรือปรับสปีดอย่างไร?</h3>
                <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="mt-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                ใช้รีโมทไร้สายควบคุมได้จากในห้องนอน ปรับสปีดพัดลมและสั่งเปิด/ปิดได้ง่ายไม่ต้องเดินไปที่ตัวเครื่อง
              </div>
            </details>
            <details className="group rounded-2xl bg-white/80 dark:bg-slate-900/70 p-6 border border-white/40 dark:border-slate-800/60 backdrop-blur hover:shadow-xl transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">10. เครื่องเติมอากาศในตลาดต่างกันแค่ไหน?</h3>
                <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="mt-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed space-y-2">
                <p>แตกต่างทั้งเกรดวัสดุ ชนิดไส้กรอง และประสบการณ์ติดตั้ง ระบบของเราให้ความสำคัญกับคุณภาพอากาศภายนอกที่ต้องเข้าบ้าน จึงจัดเต็ม 6 ขั้นกรองตั้งแต่ตะแกรงลวด, Carbon, HEPA, ULPA จนถึง UVC ฆ่าเชื้อ</p>
                <p>ลูกค้าจึงมั่นใจได้ว่าลมที่เข้าสู่ห้องสะอาด ปลอดกลิ่น และปลอดเชื้อ</p>
              </div>
            </details>
            <details className="group rounded-2xl bg-white/80 dark:bg-slate-900/70 p-6 border border-white/40 dark:border-slate-800/60 backdrop-blur hover:shadow-xl transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">11. ทำไมต้องเลือกบริษัทมาสเตอร์เฮ้าส์?</h3>
                <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="mt-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed space-y-3">
                <p>
                  เราเชี่ยวชาญระบบเติมอากาศและแรงดันบวก/ลบ ผ่านงานติดตั้งกว่า 1,200 ชุด ทั้งบ้านพัก โรงพยาบาล คลินิกทันตกรรม โรงเรียน และหน่วยงานราชการ
                  มีหน้าร้านให้ทดลองระบบจริง เปรียบเทียบไส้กรอง และห้องทดสอบแรงดันบวกก่อนตัดสินใจ
                </p>
                <div className="text-sm space-y-1">
                  <p>อย่าเพิ่งตัดสินใจ หากยังไม่ได้คุยกับเรา</p>
                  <p>085-495-6395 (คุณบอม) / 065-919-4403 (คุณเอ้)</p>
                  <p>บริษัท มาสเตอร์ เฮ้าส จำกัด 141/1 หมู่ 9 ต.สันผีเสื้อ อ.เมือง จ.เชียงใหม่ 50300</p>
                  <p>
                    แผนที่: <a className="text-primary hover:underline" href="https://maps.app.goo.gl/s57r6KaGEPCVq7acA" rel="noreferrer" target="_blank">Google Maps</a>
                  </p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden" id="reviews">
        <div className="absolute inset-0 bg-gradient-to-br from-background-light via-blue-50 to-indigo-100/60 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/40" />
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(37,99,235,0.4) 1px, transparent 0)', backgroundSize: '40px 40px' }}
        />
        <div className="absolute -bottom-24 -right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 bg-primary/20 text-primaryDark dark:text-primary rounded-full text-md font-bold tracking-wider mb-4 uppercase">
              รีวิวจากลูกค้า
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4">ลูกค้าพูดถึงเรา</h2>
            <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
              ความประทับใจจากลูกค้าที่ใช้งานเครื่องเติมอากาศ Master House
            </p>
          </div>
          {/* Slider */}
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${reviewSlideIndex * (100 / slidesPerView)}%)` }}
              >
                {customerReviews.map((src, index) => (
                  <button
                    key={`review-${index}`}
                    className={`${isMobile ? 'w-full' : 'w-1/3'} flex-shrink-0 px-2`}
                    type="button"
                    onClick={() => setActiveImage(src)}
                  >
                    <div className="group relative rounded-2xl overflow-hidden bg-white/85 dark:bg-slate-900/70 border border-white/50 dark:border-slate-800/60 shadow-xl backdrop-blur transition-all hover:-translate-y-1 hover:shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/0 via-transparent to-white/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                      <img alt={`รีวิวจากลูกค้า ${index + 1}`} className="w-full h-auto object-cover" src={src} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={() => setReviewSlideIndex((prev) => (prev - 1 + customerReviews.length) % customerReviews.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white/90 dark:bg-slate-800/90 shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              type="button"
              onClick={() => setReviewSlideIndex((prev) => (prev + 1) % customerReviews.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white/90 dark:bg-slate-800/90 shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {customerReviews.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  type="button"
                  onClick={() => setReviewSlideIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === reviewSlideIndex
                      ? "bg-primary w-6"
                      : "bg-slate-300 dark:bg-slate-600 hover:bg-primary/50"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="relative py-24 overflow-hidden" id="contact">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/5 via-white to-primary/5 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/50" />
        <div className="absolute -top-12 left-1/4 w-72 h-72 bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-10 right-0 w-80 h-80 bg-sky-400/10 blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primaryDark dark:text-primary text-xs font-semibold uppercase tracking-widest">
                ติดต่อ Master House
              </span>
              <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">
                ปรึกษาผู้เชี่ยวชาญด้านระบบอากาศผ่าน LINE Official
              </h2>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                แอด {lineHandle} เพื่อพูดคุยกับทีมงานแบบส่วนตัว นัดหมายสำรวจหน้างาน หรือขอคำแนะนำระบบระบายและเติมอากาศสำหรับบ้านคุณ
              </p>
              <div className="space-y-3">
                {contactPhones.map((phone) => (
                  <a key={phone.number} className="flex items-center gap-3 text-text-light dark:text-text-dark hover:text-primary" href={`tel:${phone.number.replace(/-/g, "")}`}>
                    <span className="material-symbols-outlined text-primary">call</span>
                    <span className="font-semibold">{phone.number}</span>
                    <span className="text-text-muted-light dark:text-text-muted-dark">({phone.name})</span>
                  </a>
                ))}
                <p className="flex items-center gap-3 text-text-muted-light dark:text-text-muted-dark">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  {officeAddress}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/40 transition-all hover:bg-primaryDark"
                  href={lineLink}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  คุย LINE {lineHandle}
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-primary px-8 py-3 text-sm font-semibold text-primary hover:bg-primary/10"
                  href="tel:+66854956395"
                >
                  <span className="material-symbols-outlined text-base">call</span>
                  โทรด่วน 085-495-6395
                </a>
              </div>
            </div>
            <div className="bg-white/90 dark:bg-slate-900/70 border border-white/50 dark:border-slate-800/60 rounded-3xl shadow-2xl backdrop-blur p-8 text-center space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-text-muted-light dark:text-text-muted-dark">Line Official</p>
              <img alt="Master House LINE QR" className="mx-auto max-w-xs rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg" src="/line-qr.png" />
              <p className="text-lg font-semibold text-text-light dark:text-text-dark">สแกน QR เพื่อแอด {lineHandle}</p>
              <a className="inline-flex items-center justify-center gap-2 rounded-2xl w-full bg-gradient-to-r from-emerald-400 to-primaryDark text-white py-3 font-semibold" href={lineLink} rel="noreferrer" target="_blank">
                <span className="material-symbols-outlined">qr_code_2</span>
                เปิด LINE Official
              </a>
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative py-24 overflow-hidden" id="installation">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[120%] h-64 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white dark:from-slate-950" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 bg-primary/20 text-primaryDark dark:text-primary rounded-full text-md font-bold tracking-wider mb-4 uppercase">
              ผลงานการติดตั้ง
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4">ภาพการติดตั้งจริง</h2>
            <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
              ตัวอย่างการติดตั้งเครื่องเติมอากาศ Master House ในสถานที่จริง
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {installationImages.map(({ src, caption }, index) => (
              <button
                key={`install-${caption}-${index}`}
                className="relative rounded-3xl overflow-hidden bg-white/80 dark:bg-slate-900/70 border border-white/40 dark:border-slate-800/60 shadow-xl backdrop-blur aspect-square transition-all hover:-translate-y-1 hover:shadow-2xl"
                type="button"
                onClick={() => setActiveImage(src)}
              >
                <img alt={caption} className="h-full w-full object-cover" src={src} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primaryDark"
              href={lineLink}
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              นัดประเมินติดตั้งทันที
            </a>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden" id="video">
        <div className="absolute inset-0 bg-gradient-to-br from-background-light via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute inset-x-0 top-10 h-40 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-3xl" />
        <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-sky-400/10 rounded-full blur-[110px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 bg-primary/20 text-primaryDark dark:text-primary rounded-full text-md font-bold tracking-wider mb-4 uppercase">
              วิดีโอแนะนำ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4">ดูการทำงานของเครื่องเติมอากาศ</h2>
            <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
              เรียนรู้เพิ่มเติมเกี่ยวกับระบบเติมอากาศ Master House ผ่านวิดีโอสาธิตการทำงานจริง
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_35px_120px_rgba(37,99,235,0.25)] border border-white/40 dark:border-slate-800/60 bg-black/50 backdrop-blur" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/CJRVnrjmq1I"
                title="Master House - เครื่องเติมอากาศ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-white py-16">
        <div className="container mx-auto px-6 grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img
                alt="Master House logo"
                className="h-16 w-auto object-contain rounded-lg"
                src="/master-house-logo.jpg"
              />
              <img
                alt="O2 Airflow logo"
                className="h-14 w-auto object-contain rounded-lg"
                src="/o2-airflow.jpg"
              />
              <img
                alt="Smile O2 logo"
                className="h-14 w-auto object-contain rounded-lg"
                src="/smile-o2.jpg"
              />
            </div>
            <p className="text-white/70 mb-4">"อย่าเพิ่งตัดสินใจติดตั้งระบบอากาศ หากคุณยังไม่ได้ปรึกษาผู้เชี่ยวชาญด้านระบบอากาศโดยตรง"
              ทีม Master House พร้อมประเมินปัญหาอากาศอับ ฝุ่น PM2.5 และกลิ่นรบกวน เพื่อออกแบบระบบที่ทำให้คุณหายใจโล่งขึ้นจริงในทุกห้องของบ้าน</p>
          </div>
          <div className="md:ml-15 ml-0">
            <h4 className="font-semibold mb-3  text-white">ติดต่อเรา</h4>
            <div className="space-y-2 text-white/80">
              {contactPhones.map((phone) => (
                <a key={phone.number} className="flex items-center gap-3 hover:text-primary" href={`tel:${phone.number.replace(/-/g, "")}`}>
                  <span className="material-symbols-outlined text-primary">call</span>
                  <span>{phone.number}</span>
                  <span className="text-white/60">({phone.name})</span>
                </a>
              ))}
              <p className="flex items-start gap-3 mb-5">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span>{officeAddress}</span>
              </p>
              <a
                href="https://line.me/R/ti/p/@masterhouse"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group hover:text-primary transition-colors"
              >
                <span className="w-6 h-6 flex items-center justify-center bg-[#06C755] rounded-full">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                </span>
                <span className="group-hover:underline text-green-500">@masterhouse</span>
              </a>
              <img alt="Master House LINE QR" className="max-w-[180px] rounded-2xl border border-white/20" src="/line-qr.png" />
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15105.118254958414!2d98.979504!3d18.8302334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3b033632d2f9%3A0x419523858e67c95f!2z4Lia4LiI4LiBLiDguKHguLLguKrguYDguJXguK3guKPguYwg4LmA4Liu4LmJ4Liy4Liq4LmMICjguYDguIrguLXguKLguIfguYPguKvguKHguYgp!5e0!3m2!1sen!2sth!4v1768976148795!5m2!1sen!2sth"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Master House. All rights reserved.
        </div>
      </footer>

      <button
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primaryDark text-white px-5 py-3 shadow-2xl shadow-primary/40 hover:scale-105 transition"
        onClick={() => setContactModalOpen(true)}
        type="button"
      >
        <span className="material-symbols-outlined">support_agent</span>
        ติดต่อเรา
      </button>

      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setActiveImage(null)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              aria-label="Close image preview"
              className="absolute -top-10 right-0 text-white text-2xl"
              onClick={() => setActiveImage(null)}
              type="button"
            >
              ×
            </button>
            <img alt="gallery full" className="w-full h-full object-contain rounded-3xl" src={activeImage} />
          </div>
        </div>
      )}

      {contactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setContactModalOpen(false)}>
          <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-text-muted-light dark:text-text-muted-dark" onClick={() => setContactModalOpen(false)} type="button">
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">ติดต่อทีม Master House</h3>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm">เลือกช่องทางที่สะดวกเพื่อพูดคุยกับผู้เชี่ยวชาญเรื่องอากาศ</p>
              </div>
            </div>
            <div className="grid gap-4">
              {facebookContacts.map((contact) => (
                <a
                  key={contact.url}
                  className="flex items-center gap-4 rounded-3xl border border-slate-200 dark:border-slate-800 p-4 hover:border-primary transition"
                  href={contact.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center text-2xl font-bold">
                    f
                  </div>
                  <div>
                    <p className="font-semibold text-text-light dark:text-text-dark">{contact.name}</p>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Facebook Page</p>
                  </div>
                  <span className="material-symbols-outlined text-primary ml-auto">open_in_new</span>
                </a>
              ))}
              <a
                className="flex items-center gap-4 rounded-3xl border border-emerald-400 bg-emerald-50 dark:bg-emerald-400/10 p-4 text-emerald-600 dark:text-emerald-300 transition"
                href={lineLink}
                rel="noreferrer"
                target="_blank"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center text-white text-xl font-semibold">
                  LINE
                </div>
                <div>
                  <p className="font-semibold">LINE {lineHandle}</p>
                  <p className="text-sm">เปิดแชตหรือสแกน QR ได้ทันที</p>
                </div>
                <span className="material-symbols-outlined ml-auto">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
