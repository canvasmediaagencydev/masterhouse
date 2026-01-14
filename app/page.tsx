"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

export default function Home() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
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
  const services = [
    {
      title: "การประเมินหน้างาน",
      description:
        "ตรวจสอบพื้นที่จริง สภาพแวดล้อม และรูปแบบการใช้งาน เพื่อคำนวณปริมาณลมและเลือกอุปกรณ์ได้ตรงจุด",
      image: encodeURI(`${serviceFolder}/การประเมินหน้างาน.jpg`),
    },
    {
      title: "ออกแบบและวางตำแหน่งการติดตั้ง",
      description:
        "วางแผนเส้นทางท่อและตำแหน่งเครื่องเติมอากาศให้เหมาะกับโครงสร้าง เพื่อให้เกิดแรงดันบวกและการหมุนเวียนอากาศที่ดีที่สุด",
      image: encodeURI(`${serviceFolder}/การออกแบบและวางตำแหน่งการติดตั้ง.jpg`),
    },
    {
      title: "ดูแลหลังการขายและให้คำปรึกษา",
      description:
        "ติดตามผลการใช้งาน ตรวจสอบอุปกรณ์ และให้คำแนะนำตลอดอายุการใช้งาน เพื่อให้ระบบทำงานได้เต็มประสิทธิภาพเสมอ",
      image: encodeURI(`${serviceFolder}/การดูแลหลังการขาย.jpg`),
    },
  ];

  return (
    <main className="bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark">
      <section className="py-24 bg-white dark:bg-card-dark" id="services">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 bg-primary/20 text-primaryDark dark:text-primary rounded-full text-xs font-bold tracking-wider mb-4 uppercase">
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
                className="p-8 rounded-3xl bg-background-light dark:bg-background-dark hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="relative h-40 w-full rounded-2xl overflow-hidden mb-6">
                  <img
                    alt={service.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    src={service.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
                </div>
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">{service.title}</h3>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background-light dark:bg-background-dark" id="products">
        <div className="container mx-auto px-6">
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
                <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-primaryDark text-secondary text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
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
                  <button className="w-full bg-gradient-to-r from-primary to-primaryDark text-secondary px-6 py-3.5 rounded-2xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-bold text-sm flex items-center justify-center gap-2 group-hover:scale-105">
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
                <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-primaryDark text-secondary text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
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
                  <button className="w-full bg-gradient-to-r from-primary to-primaryDark text-secondary px-6 py-3.5 rounded-2xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-bold text-sm flex items-center justify-center gap-2 group-hover:scale-105">
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
                  <button className="w-full bg-gradient-to-r from-primary to-primaryDark text-secondary px-6 py-3.5 rounded-2xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-bold text-sm flex items-center justify-center gap-2 group-hover:scale-105">
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
                  <button className="w-full bg-gradient-to-r from-primary to-primaryDark text-secondary px-6 py-3.5 rounded-2xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-bold text-sm flex items-center justify-center gap-2 group-hover:scale-105">
                    <span>ติดต่อเรา</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-card-dark" id="faq">
        <div className="container mx-auto px-6">
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
          <details className="group rounded-2xl bg-background-light dark:bg-background-dark p-6 hover:shadow-lg transition-shadow">
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
          <details className="group rounded-2xl bg-background-light dark:bg-background-dark p-6 hover:shadow-lg transition-shadow">
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
          <details className="group rounded-2xl bg-background-light dark:bg-background-dark p-6 hover:shadow-lg transition-shadow">
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
                      <td className="p-3 font-semibold text-text-light dark:text-text-dark">PREMIUM 70 cfm</td>
                      <td className="p-3">ไม่เกิน 30 ตร.ม.</td>
                      <td className="p-3">6 ขั้นตอนครบ</td>
                      <td className="p-3">5 ปี</td>
                      <td className="p-3">฿27,500</td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <td className="p-3 font-semibold text-text-light dark:text-text-dark">PREMIUM 180 cfm</td>
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
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark">*ราคารวมติดตั้ง รุ่น PREMIUM เหมาะพื้นที่ที่มีปัญหากลิ่นเผาหรือมลพิษหนักเพราะมี Carbon + ULPA + UVC ครบ</p>
            </div>
          </details>
          <details className="group rounded-2xl bg-background-light dark:bg-background-dark p-6 hover:shadow-lg transition-shadow">
            <summary className="flex justify-between items-center cursor-pointer list-none">
              <h3 className="text-lg font-bold text-text-light dark:text-text-dark">4. จะเลือกรุ่นอย่างไร?</h3>
              <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="mt-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed space-y-3">
              <p>เลือกตามขนาดห้องและปัญหากลิ่น (ติดตั้งแบบแยกห้องเหมือนแอร์):</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>≤30 ตร.ม.: PREMIUM 70 cfm ราคา 27,500 บาท</li>
                <li>50-60 ตร.ม.: PREMIUM 180 cfm ราคา 52,500 บาท</li>
                <li>60-70 ตร.ม. และไม่มีปัญหากลิ่นหนัก: STANDARD 200 cfm ราคา 35,000 บาท</li>
                <li>พื้นที่รวม/แยก 2 ห้อง 100-120 ตร.ม. และไม่มีปัญหากลิ่นหนัก: STANDARD 380 cfm ราคา 55,000 บาท</li>
              </ul>
            </div>
          </details>
          <details className="group rounded-2xl bg-background-light dark:bg-background-dark p-6 hover:shadow-lg transition-shadow">
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
          <details className="group rounded-2xl bg-background-light dark:bg-background-dark p-6 hover:shadow-lg transition-shadow">
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
          <details className="group rounded-2xl bg-background-light dark:bg-background-dark p-6 hover:shadow-lg transition-shadow">
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
          <details className="group rounded-2xl bg-background-light dark:bg-background-dark p-6 hover:shadow-lg transition-shadow">
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
          <details className="group rounded-2xl bg-background-light dark:bg-background-dark p-6 hover:shadow-lg transition-shadow">
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
          <details className="group rounded-2xl bg-background-light dark:bg-background-dark p-6 hover:shadow-lg transition-shadow">
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
          <details className="group rounded-2xl bg-background-light dark:bg-background-dark p-6 hover:shadow-lg transition-shadow">
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

      <section className="py-24 bg-background-light dark:bg-background-dark" id="reviews">
        <div className="container mx-auto px-6">
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
                className="rounded-2xl overflow-hidden bg-white dark:bg-card-dark shadow-md"
                type="button"
                onClick={() => setActiveImage(src)}
              >
                <img alt={caption} className="w-full h-auto object-cover" src={src} />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-card-dark" id="installation">
        <div className="container mx-auto px-6">
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
                className="rounded-2xl overflow-hidden bg-background-light dark:bg-background-dark shadow-md aspect-square"
                type="button"
                onClick={() => setActiveImage(src)}
              >
                <img alt={caption} className="h-full w-full object-cover" src={src} />
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

      <section className="py-24 bg-background-light dark:bg-background-dark" id="video">
        <div className="container mx-auto px-6">
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
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
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

    </main>
  );
}
