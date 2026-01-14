"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

export default function Home() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const galleryFolder = "ภาพการติดตั้งและรีวิวการใช้งานจริง";

  const installationFiles = [
    "ติดตั้ง 1 .png",
    "ติดตั้ง 2 .png",
    "ติดตั้ง 3.png",
    "ติดตั้ง 4.jpg",
    "ติดตั้ง 5.jpg",
    "ติดตั้ง 6.jpg",
    "ติดตั้ง 7.jpg",
    "ติดตั้ง 8.png",
    "ติดตั้ง 9.jpg",
    "ติดตั้ง 10.png",
  ];
  const installationImages = installationFiles.map((file) => ({
    src: encodeURI(`/gal/${galleryFolder}/${file}`),
    caption: file.replace(/\.[^.]+$/, ""),
  }));

  const reviewFiles = [
    "REVIEW 1.jpg",
    "REVIEW2.png",
  ];
  const reviewImages = reviewFiles.map((file) => ({
    src: encodeURI(`/gal/${galleryFolder}/${file}`),
    caption: file.replace(/\.[^.]+$/, ""),
  }));
  const serviceFolder = "/service-20260105T101027Z-1-001/service";
  const lineLink = "https://lin.ee/ahTlruO";
  const lineHandle = "@masterhouse";
  const contactPhones = [
    { name: "คุณบอม", number: "085-495-6395" },
    { name: "คุณเอ้", number: "065-919-4403" },
  ];
  const officeAddress = "บริษัท มาสเตอร์ เฮ้าส จำกัด 141/1 หมู่ 9 ต.สันผีเสื้อ อ.เมือง จ.เชียงใหม่ 50300";
  const services = [
    {
      title: "การประเมินหน้างาน",
      description:
        "ตรวจสอบพื้นที่จริง สภาพแวดล้อม และรูปแบบการใช้งาน เพื่อคำนวณปริมาณลมและเลือกอุปกรณ์ได้ตรงจุด",
      image: `${serviceFolder}/1.png`,
    },
    {
      title: "ออกแบบและวางตำแหน่งการติดตั้ง",
      description:
        "วางแผนเส้นทางท่อและตำแหน่งเครื่องเติมอากาศให้เหมาะกับโครงสร้าง เพื่อให้เกิดแรงดันบวกและการหมุนเวียนอากาศที่ดีที่สุด",
      image: `${serviceFolder}/2.png`,
    },
    {
      title: "ดูแลหลังการขายและให้คำปรึกษา",
      description:
        "ติดตามผลการใช้งาน ตรวจสอบอุปกรณ์ และให้คำแนะนำตลอดอายุการใช้งาน เพื่อให้ระบบทำงานได้เต็มประสิทธิภาพเสมอ",
      image: `${serviceFolder}/3.png`,
    },
  ];
  const partnerLogos = [
    { src: "/o2-airflow.jpg", alt: "O2 Airflow logo", sizeClass: "max-h-32" },
    { src: "/smile-o2.jpg", alt: "Smile O2 logo", sizeClass: "max-h-44" },
  ];
  const facebookContacts = [
    { name: "O2 AirFlow", url: "https://www.facebook.com/O2airflow" },
    { name: "Smile O2", url: "https://www.facebook.com/smileO2cm" },
    { name: "Master House", url: "https://www.facebook.com/masterhousecmi" },
  ];

  return (
    <main className="bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark">
      <section className="relative py-24 overflow-hidden" id="partners">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/70 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/15 to-transparent blur-3xl" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.25) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-primary to-primaryDark text-white text-sm md:text-base tracking-[0.35em] uppercase font-semibold shadow-xl shadow-primary/30">
              <span className="w-3 h-3 rounded-full bg-white animate-pulse" />
              Powered by Master House
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mt-5">
              ระบบ O2 Airflow ที่ได้รับความไว้วางใจจากพันธมิตรคุณภาพ
            </h3>
            <p className="text-text-muted-light dark:text-text-muted-dark mt-4">
              ติดตั้งและออกแบบโดยทีม Master House พร้อมดูแลแบรนด์ที่โฟกัสคุณภาพอากาศอย่างจริงจัง
            </p>
          </div>
          <div className="mt-12 w-full flex flex-col sm:flex-row items-stretch justify-between gap-6">
            {partnerLogos.map((logo) => (
              <div
                key={logo.src}
                className="group relative flex-1 min-h-[10rem] rounded-3xl bg-white/80 dark:bg-slate-900/70 border border-white/50 dark:border-slate-800/70 shadow-xl backdrop-blur flex items-center justify-center overflow-hidden"
              >
                <img
                  alt={logo.alt}
                  className={`max-w-[75%] object-contain transition-transform duration-300 group-hover:scale-105 ${logo.sizeClass ?? "max-h-32"}`}
                  src={logo.src}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <span className="inline-block py-1 px-3 bg-white/80 dark:bg-slate-800/80 text-primaryDark dark:text-primary rounded-full text-xs font-bold tracking-wider mb-4 uppercase shadow-sm">
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
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="inline-block py-1 px-3 bg-primary/20 text-primaryDark dark:text-primary rounded-full text-xs font-bold tracking-wider mb-4 uppercase">
                ผลิตภัณฑ์ของเรา
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">เครื่องเติมอากาศ O2 Airflow</h2>
            </div>
            <p className="text-text-muted-light dark:text-text-muted-dark max-w-md mt-4 md:mt-0 text-right md:text-left">
              ระบบเครื่องเติมอากาศบริสุทธิ์แบบแรงดันบวก (Positive Pressure Ventilation) เพื่อช่วยยกระดับคุณภาพการอยู่อาศัยและสร้างสภาพแวดล้อมที่ดีต่อสุขภาพในระยะยาว
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-card-dark border-2 border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <div className="absolute inset-0 bg-primary/5" />
                <img
                  alt="MH-70 cfm Pro"
                  className="relative w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 p-6"
                  src="/products/70 (1).png"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-primaryDark text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  กรอง 6 ขั้นตอน
                </div>
              </div>
              <div className="p-6 space-y-5">
                <div>
                  <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2 group-hover:text-primary transition-colors">MH-70 cfm Pro</h3>
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
                  <button className="w-full bg-gradient-to-r from-primary to-primaryDark text-white px-6 py-3.5 rounded-2xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-bold text-sm flex items-center justify-center gap-2 group-hover:scale-105">
                    <span>ติดต่อเรา</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-card-dark border-2 border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <div className="absolute inset-0 bg-primary/5" />
                <img
                  alt="MH-180 cfm Pro"
                  className="relative w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 p-6"
                  src="/products/180 (1).png"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-primaryDark text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  กรอง 6 ขั้นตอน
                </div>
              </div>
              <div className="p-6 space-y-5">
                <div>
                  <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2 group-hover:text-primary transition-colors">MH-180 cfm Pro</h3>
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
                  <button className="w-full bg-gradient-to-r from-primary to-primaryDark text-white px-6 py-3.5 rounded-2xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-bold text-sm flex items-center justify-center gap-2 group-hover:scale-105">
                    <span>ติดต่อเรา</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-card-dark border-2 border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <div className="absolute inset-0 bg-primary/5" />
                <img
                  alt="MH-200 cfm Eco"
                  className="relative w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 p-6"
                  src="/products/200.jpg"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-secondary to-slate-700 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  กรอง 2 ขั้นตอน
                </div>
              </div>
              <div className="p-6 space-y-5">
                <div>
                  <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2 group-hover:text-primary transition-colors">MH-200 cfm Eco</h3>
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
                  <button className="w-full bg-gradient-to-r from-primary to-primaryDark text-white px-6 py-3.5 rounded-2xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-bold text-sm flex items-center justify-center gap-2 group-hover:scale-105">
                    <span>ติดต่อเรา</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-card-dark border-2 border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <div className="absolute inset-0 bg-primary/5" />
                <img
                  alt="MH-380 cfm Eco"
                  className="relative w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 p-6"
                  src="/products/380 (แก้ไข).jpg"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-secondary to-slate-700 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  แยกจ่าย 2 ห้อง
                </div>
              </div>
              <div className="p-6 space-y-5">
                <div>
                  <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2 group-hover:text-primary transition-colors">MH-380 cfm Eco</h3>
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
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">380 CFM / 646 CMH / ท่อ 110 มม. × 2 หัวจ่าย</p>
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
                  <button className="w-full bg-gradient-to-r from-primary to-primaryDark text-white px-6 py-3.5 rounded-2xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-bold text-sm flex items-center justify-center gap-2 group-hover:scale-105">
                    <span>ติดต่อเรา</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
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
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-5/12 space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primaryDark dark:text-primary text-xs font-semibold uppercase tracking-widest">
                Sale Page
              </span>
              <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">
                หายใจโล่งขึ้นจริง นอนหลับสนิท และลดกลิ่นได้สูงสุดถึง 98%
              </h2>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                หายใจโล่งขึ้นจริง แก้ปัญหาอากาศอับในบ้าน และฝุ่น PM2.5 อย่างได้ผล นอนหลับสนิท ลดกลิ่นไม่พึงประสงค์จากภายนอกได้สูงสุดถึง 98%
              </p>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                ด้วยระบบระบายอากาศและระบบเติมอากาศสำหรับบ้านพักอาศัยที่ออกแบบเฉพาะตามโครงสร้างและการใช้งานจริงของบ้านคุณ โดยทีมผู้เชี่ยวชาญด้านระบบอากาศภายในอาคาร (Indoor Air Quality) จาก Master House
              </p>
            </div>
            <div className="lg:flex-1 space-y-6 text-text-light dark:text-text-dark text-base leading-relaxed">
              <p>
                Master House มีเครื่องเติมอากาศ เครื่องฟอกอากาศ เครื่องลดความชื้น เครื่องปรับอากาศ และระบบควบคุมอากาศหลากหลายรูปแบบ พร้อมห้องตัวอย่างให้ทดลองสัมผัสอากาศบริสุทธิ์จริงก่อนตัดสินใจติดตั้ง
              </p>
              <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/70 border border-white/40 dark:border-slate-800/60 shadow-lg backdrop-blur">
                <p className="font-semibold text-lg">
                  “อย่าเพิ่งตัดสินใจติดตั้งระบบอากาศ หากคุณยังไม่ได้ปรึกษาผู้เชี่ยวชาญด้านระบบอากาศโดยตรง”
                </p>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-3">
                  ทีม Master House พร้อมประเมินปัญหาอากาศอับ ฝุ่น PM2.5 และกลิ่นรบกวน เพื่อออกแบบระบบที่ทำให้คุณหายใจโล่งขึ้นจริงในทุกห้องของบ้าน
                </p>
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
            <span className="inline-block py-1 px-3 bg-primary/20 text-primaryDark dark:text-primary rounded-full text-xs font-bold tracking-wider mb-4 uppercase">
              FAQ เรื่องฝุ่น
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
            <span className="inline-block py-1 px-3 bg-primary/20 text-primaryDark dark:text-primary rounded-full text-xs font-bold tracking-wider mb-4 uppercase">
              รีวิวจากลูกค้า
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4">ลูกค้าพูดถึงเรา</h2>
            <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
              ความประทับใจจากลูกค้าที่ใช้งานเครื่องเติมอากาศ Master House
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {reviewImages.map(({ src, caption }, index) => (
              <button
                key={`review-${caption}-${index}`}
                className="group relative rounded-3xl overflow-hidden bg-white/85 dark:bg-slate-900/70 border border-white/50 dark:border-slate-800/60 shadow-xl backdrop-blur transition-all hover:-translate-y-1 hover:shadow-2xl"
                type="button"
                onClick={() => setActiveImage(src)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/0 via-transparent to-white/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                <img alt={caption} className="w-full h-auto object-cover" src={src} />
              </button>
            ))}
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
            <span className="inline-block py-1 px-3 bg-primary/20 text-primaryDark dark:text-primary rounded-full text-xs font-bold tracking-wider mb-4 uppercase">
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
              href="tel:+66854956395"
            >
              <span className="material-symbols-outlined text-base">call</span>
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
            <span className="inline-block py-1 px-3 bg-primary/20 text-primaryDark dark:text-primary rounded-full text-xs font-bold tracking-wider mb-4 uppercase">
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
                src="https://www.youtube.com/embed/FGSsiL3qxzM"
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
            <h3 className="text-2xl font-bold mb-4">Master House</h3>
            <p className="text-white/70 mb-4">ผู้เชี่ยวชาญระบบระบายและเติมอากาศภายในบ้าน ออกแบบเฉพาะบ้านคุณเพื่อให้หายใจโล่งขึ้นจริง</p>
            <a className="inline-flex items-center gap-2 text-primary font-semibold" href={lineLink} rel="noreferrer" target="_blank">
              <span className="material-symbols-outlined">chat</span>
              LINE {lineHandle}
            </a>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">ติดต่อทีมงาน</h4>
            <div className="space-y-2 text-white/80">
              {contactPhones.map((phone) => (
                <a key={phone.number} className="flex items-center gap-3 hover:text-primary" href={`tel:${phone.number.replace(/-/g, "")}`}>
                  <span className="material-symbols-outlined text-primary">call</span>
                  <span>{phone.number}</span>
                  <span className="text-white/60">({phone.name})</span>
                </a>
              ))}
              <p className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span>{officeAddress}</span>
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-green-400">Line OA</h4>
            <img alt="Master House LINE QR" className="max-w-[180px] rounded-2xl border border-white/20" src="/line-qr.png" />
            <p className="text-white/70 mt-3">สแกนเพื่อเพิ่มเพื่อน {lineHandle} หรือกดปุ่ม LINE เพื่อเริ่มแชตทันที</p>
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
