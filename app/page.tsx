"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark">
      <section className="py-24 bg-white dark:bg-card-dark" id="services">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 bg-primary/20 text-primaryDark dark:text-primary rounded-full text-xs font-bold tracking-wider mb-4 uppercase">
              Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4">Complete Air Care</h2>
            <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
              We don&apos;t just sell products; we provide comprehensive solutions to maintain your air quality systems for years to come.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-8 rounded-3xl bg-background-light dark:bg-background-dark hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl group text-center md:text-left">
              <div className="w-14 h-14 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center mb-6 shadow-sm mx-auto md:mx-0 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-secondary transition-colors">
                  build_circle
                </span>
              </div>
              <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">Installation</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed">
                Professional setup of your air purification system to ensure optimal airflow and maximum efficiency from day one.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-background-light dark:bg-background-dark hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl group text-center md:text-left">
              <div className="w-14 h-14 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center mb-6 shadow-sm mx-auto md:mx-0 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-secondary transition-colors">
                  calendar_month
                </span>
              </div>
              <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">Filter Replacement</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed">
                Scheduled filter deliveries and replacement services so you never have to worry about reduced air quality.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-background-light dark:bg-background-dark hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl group text-center md:text-left">
              <div className="w-14 h-14 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center mb-6 shadow-sm mx-auto md:mx-0 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-secondary transition-colors">
                  speed
                </span>
              </div>
              <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">Performance Audit</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed">
                Comprehensive testing of your indoor air quality to identify pollutants and optimize device settings.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-background-light dark:bg-background-dark hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl group text-center md:text-left">
              <div className="w-14 h-14 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center mb-6 shadow-sm mx-auto md:mx-0 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-secondary transition-colors">
                  support_agent
                </span>
              </div>
              <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">24/7 Support</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed">
                Round-the-clock technical assistance for any issues, ensuring uninterrupted clean air for your home.
              </p>
            </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">ระบบฟอกอากาศ O2 Airflow</h2>
            </div>
            <p className="text-text-muted-light dark:text-text-muted-dark max-w-md mt-4 md:mt-0 text-right md:text-left">
              เครื่องฟอกอากาศติดผนังภายนอกอาคาร ไม่เสียพื้นที่ภายใน พร้อมระบบกรองที่มีประสิทธิภาพสูง
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-card-dark border-2 border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <div className="absolute inset-0 bg-primary/5" />
                <img
                  alt="PRO 70 CFM"
                  className="relative w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 p-6"
                  src="/products/70.png"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-primaryDark text-secondary text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  กรอง 6 ขั้นตอน
                </div>
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
                      <p className="text-xs font-semibold text-text-light dark:text-text-dark mb-0.5">ระบบกรอง</p>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Pre / Medium / Carbon / ULPA / UVC</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-text-light dark:text-text-dark mb-0.5">การติดตั้ง</p>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark">ภายนอกอาคาร ไม่เสียพื้นที่</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">straighten</span>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-text-light dark:text-text-dark mb-0.5">ขนาด</p>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark">15×15 ซม. (รูเจาะ 4")</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">home</span>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-text-light dark:text-text-dark mb-0.5">พื้นที่</p>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark">สูงสุด 30 ตร.ม.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">verified_user</span>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-text-light dark:text-text-dark mb-0.5">รับประกัน</p>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark">มอเตอร์ 5 ปี / อื่นๆ 1 ปี</p>
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
                  alt="PRO 180 CFM"
                  className="relative w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 p-6"
                  src="/products/180.png"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-primaryDark text-secondary text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  กรอง 6 ขั้นตอน
                </div>
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
                      <p className="text-xs font-semibold text-text-light dark:text-text-dark mb-0.5">ระบบกรอง</p>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Pre / Medium / Carbon / ULPA / UVC</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-text-light dark:text-text-dark mb-0.5">การติดตั้ง</p>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark">ภายนอกอาคาร ไม่เสียพื้นที่</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">straighten</span>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-text-light dark:text-text-dark mb-0.5">ขนาด</p>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Ø20 ซม. (รูเจาะ 5")</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">home</span>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-text-light dark:text-text-dark mb-0.5">พื้นที่</p>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark">สูงสุด 50-60 ตร.ม.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">verified_user</span>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-text-light dark:text-text-dark mb-0.5">รับประกัน</p>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark">มอเตอร์ 5 ปี / อื่นๆ 1 ปี</p>
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
                  alt="STANDARD 200 CFM"
                  className="relative w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 p-6"
                  src="/products/200.jpg"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-secondary to-slate-700 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  กรอง 2 ขั้นตอน
                </div>
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
                      <p className="text-xs font-semibold text-text-light dark:text-text-dark mb-0.5">ระบบกรอง</p>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Pre-filter / HEPA filter</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-text-light dark:text-text-dark mb-0.5">การติดตั้ง</p>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark">ภายนอกอาคาร ไม่เสียพื้นที่</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">straighten</span>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-text-light dark:text-text-dark mb-0.5">ขนาด</p>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Ø20 ซม. (รูเจาะ 5")</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">home</span>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-text-light dark:text-text-dark mb-0.5">พื้นที่</p>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark">สูงสุด 60-70 ตร.ม.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">verified_user</span>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-text-light dark:text-text-dark mb-0.5">รับประกัน</p>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark">มอเตอร์ 2 ปี / อื่นๆ 1 ปี</p>
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
                  alt="STANDARD 380 CFM"
                  className="relative w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 p-6"
                  src="/products/380 (แก้ไข).jpg"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-secondary to-slate-700 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  แยกจ่าย 2 ห้อง
                </div>
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
                      <p className="text-xs font-semibold text-text-light dark:text-text-dark mb-0.5">ระบบกรอง</p>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Pre-filter / HEPA filter</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-text-light dark:text-text-dark mb-0.5">การติดตั้ง</p>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark">ภายนอกอาคาร ไม่เสียพื้นที่</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">straighten</span>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-text-light dark:text-text-dark mb-0.5">ขนาด</p>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Ø20 ซม. x 2 หัว (รูเจาะ 5" x 2)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">home</span>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-text-light dark:text-text-dark mb-0.5">พื้นที่</p>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark">สูงสุด 100-120 ตร.ม.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">verified_user</span>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-text-light dark:text-text-dark mb-0.5">รับประกัน</p>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark">มอเตอร์ 2 ปี / อื่นๆ 1 ปี</p>
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
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-secondary dark:bg-card-light text-white dark:text-secondary font-semibold rounded-full hover:bg-opacity-90 transition-colors inline-flex items-center gap-2">
              <span>ดูผลิตภัณฑ์ทั้งหมด</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-card-dark" id="faq">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 bg-primary/20 text-primaryDark dark:text-primary rounded-full text-xs font-bold tracking-wider mb-4 uppercase">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
              Find answers to common questions about our air purification systems and services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="group rounded-2xl bg-background-light dark:bg-background-dark p-6 hover:shadow-lg transition-shadow">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">How often should I replace the filters?</h3>
                <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <p className="mt-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                We recommend replacing HEPA filters every 6-12 months depending on usage and air quality. Our scheduled replacement service ensures you never miss a change.
              </p>
            </details>
            <details className="group rounded-2xl bg-background-light dark:bg-background-dark p-6 hover:shadow-lg transition-shadow">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">What area does each unit cover?</h3>
                <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <p className="mt-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                Coverage varies by model: Home Series 300 covers up to 300 sq ft, Pro Air Tower covers up to 800 sq ft, and Smart Sense V2 adapts to spaces up to 500 sq ft.
              </p>
            </details>
            <details className="group rounded-2xl bg-background-light dark:bg-background-dark p-6 hover:shadow-lg transition-shadow">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Is professional installation required?</h3>
                <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <p className="mt-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                While our units are designed for easy setup, we offer professional installation to ensure optimal placement and performance. This service is included with Pro Air Tower purchases.
              </p>
            </details>
            <details className="group rounded-2xl bg-background-light dark:bg-background-dark p-6 hover:shadow-lg transition-shadow">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">What is the warranty coverage?</h3>
                <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <p className="mt-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                All O2 Airflow products come with a 2-year manufacturer warranty covering parts and labor. Extended warranty options are available for up to 5 years of coverage.
              </p>
            </details>
            <details className="group rounded-2xl bg-background-light dark:bg-background-dark p-6 hover:shadow-lg transition-shadow">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Do you offer financing options?</h3>
                <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <p className="mt-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                Yes, we partner with leading financing providers to offer flexible payment plans. Options include 0% APR for 12 months or extended terms up to 36 months.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background-light dark:bg-background-dark relative" id="gallery">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="inline-block py-1 px-3 bg-primary/20 text-primaryDark dark:text-primary rounded-full text-xs font-bold tracking-wider mb-4 uppercase">
                Community Gallery
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4">See The Difference</h2>
              <p className="text-text-muted-light dark:text-text-muted-dark text-lg">
                Real homes, real fresh air. Join our community of happy customers who have upgraded their living spaces.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-secondary transition-all text-text-muted-light dark:text-text-muted-dark">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center hover:bg-primaryDark hover:text-white transition-all shadow-lg shadow-primary/30">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            <div className="md:col-span-2 md:row-span-2 group relative rounded-3xl overflow-hidden cursor-pointer">
              <img
                alt="Living room setup"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuARUy8CMmwrgJdUu70TN2gJGKVy6PvkugX_rKfvljzneSdejvgj9VAxy65vFguDF23ADDz5K9hCf25a52nDBkS63wD5ZR4b5UEHAkBVb-sgCUnDlGVqyHK1Fzhr6siSBsGJsgq2blICa9UgCQKdmAfhgLhnlLqHet2yuqlX8rKXnRgLcr9nDWfMtZMw_Oa3vDvfaDSEDXyaUdMtJCEblbgYaWZ0Id7edNfhR2yhebWKlaTJ2A65hFeTHJIp8QnyfD2ER_61RFEHcGQ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 md:translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Verified Purchase</span>
                </div>
                <p className="text-white text-xl md:text-2xl font-bold leading-tight">
                  &ldquo;Finally, a purifier that looks as good as it works.&rdquo;
                </p>
                <p className="text-gray-300 text-sm mt-2 font-medium">@sarah.designs_ • Seattle, WA</p>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-2 group relative rounded-3xl overflow-hidden cursor-pointer">
              <img
                alt="Tower unit"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCikvqYMQAXHbSqLgumA0shMJkHX1GrKqhY82qLEzDyfBadShar87B44tk1VsbdP_SY5AMmiJ-JoQdWeucijfdGF72aXQolXx0QCzhgytXxV13SVE-isIefLsgFMcOfBLDMN1l0xW4IlXa33DkY5krniCT4Au_bDbnAHYPkLEFxk9ndLL23h_AieJhvWdDRR4Xdb_8tq9rLsndLpcdBXDMq0Bty81gHkbtGQV8cYaPRjt7qTP7hriViLpLXGd4pl0kAmVUR17bZYuA"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-6 transform translate-y-4 md:translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-bold text-lg">Perfect for corners</p>
                <p className="text-gray-300 text-xs mt-1">Minimal footprint, max airflow.</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="material-symbols-outlined text-white">favorite</span>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-1 group relative rounded-3xl overflow-hidden cursor-pointer">
              <img
                alt="Bedroom unit"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASmH-QFSrvsAq7_t6-9tPp46M1Mqdkub0QLKWMdyFuy6kpZEgq_YNh_duumQJIm7sBl5zojjwaALlXGozGG3c_gPuIXZXI-MLmo5mY_yrutbum_WoOUq5-e3vOFh8sz8XMLa4HPHG2gaRPLvyg8x6VttjPbTD7XZz45_6i6U_1ZeW6itlzlyU97z5K7RKByA777hLTFyuYT4XkQC4wzS-yL-pLzs6rgPJ715SohSK-KcWb9SxggaX20BWFgkuPA_8LAJQ4Jggr6Dc"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-6 left-6">
                <span className="px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg text-xs font-bold text-text-light dark:text-text-dark shadow-lg">
                  Bedroom
                </span>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-1 group relative rounded-3xl overflow-hidden cursor-pointer">
              <img
                alt="Office unit"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe4JClY3xyo-7AQu4DqFpY0cUBg-3KFLB69CyqAm4bFtyjkgXQWe62hucCxA-sWR4KKYyiL96Q0T7-WdmtEq1U6WXkxA0Duo0X3hkPvLFmcKoZTK079tfZB5rVQ_VdbFh3m3zrI2d3bjly1hYcWuq_3M_8jElHs1482h4eH_6HBueP3kFbjz4EFNuW46VsWyQnLKk5sYMWVbKZB4hXRjI7qGxXONItCJxa0BZzxYzOCd0FpPtXtmH01IV5pamya170E5NKfHZoNx0"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-6 left-6">
                <span className="px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg text-xs font-bold text-text-light dark:text-text-dark shadow-lg">
                  Home Office
                </span>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-1 bg-primary rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 transform scale-150 group-hover:scale-125 transition-transform duration-700">
                <span className="material-symbols-outlined text-9xl text-white">linked_camera</span>
              </div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-3xl text-secondary mb-4">add_a_photo</span>
                <h3 className="text-2xl font-bold text-secondary mb-2">Share Your Space</h3>
                <p className="text-secondary/80 text-sm font-medium">Tag #O2Airflow for a chance to be featured.</p>
              </div>
              <div className="relative z-10 mt-4">
                <button className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-white hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">air</span>
                <div className="text-2xl font-bold text-white tracking-tight">O2 Airflow</div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Providing sustainable and efficient air purification solutions for a healthier tomorrow.
              </p>
              <div className="flex space-x-4">
                <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors text-xs font-semibold" href="#">
                  Tw
                </a>
                <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors text-xs font-semibold" href="#">
                  In
                </a>
                <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors text-xs font-semibold" href="#">
                  Fb
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Our Team
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    News
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Services</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Installation
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Maintenance
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Air Quality Testing
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Consultation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">Subscribe to get the latest updates on air quality tech.</p>
              <div className="flex">
                <input
                  className="bg-white/10 border-none text-white placeholder-gray-500 rounded-l-lg py-2 px-4 focus:ring-1 focus:ring-primary w-full text-sm"
                  placeholder="Your Email"
                  type="email"
                />
                <button className="bg-primary text-secondary px-4 py-2 rounded-r-lg font-bold hover:bg-primaryDark transition-colors">
                  Go
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2023 Masterhouse O2 Airflow. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a className="hover:text-white" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-white" href="#">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
      <button
        type="button"
        onClick={() => setContactOpen(true)}
        className="fixed bottom-8 right-6 z-40 flex items-center gap-3 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-[0_15px_45px_rgba(15,23,42,0.55)] transition-all hover:bg-primary hover:text-secondary"
      >
        <span className="material-symbols-outlined text-base">call</span>
        Contact Us
      </button>
      {contactOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setContactOpen(false)}
          />
          <div className="fixed bottom-24 right-6 z-50 w-[320px] rounded-3xl bg-white p-6 text-left shadow-2xl dark:bg-card-dark">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-primaryDark">
                  Contact
                </p>
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">
                  Talk With Our Team
                </h3>
              </div>
              <button
                type="button"
                className="rounded-full bg-background-light p-1 text-text-muted-light transition hover:text-primary dark:bg-background-dark"
                onClick={() => setContactOpen(false)}
                aria-label="Close contact panel"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 rounded-2xl bg-primary/10 p-3">
                <span className="material-symbols-outlined text-base text-primary">call</span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-text-muted-light">Hotline</p>
                  <a href="tel:+1234567890" className="font-semibold text-text-light">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-secondary/5 p-3">
                <span className="material-symbols-outlined text-base text-secondary">mail</span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-text-muted-light">Email</p>
                  <a href="mailto:hello@o2airflow.com" className="font-semibold text-text-light">
                    hello@o2airflow.com
                  </a>
                </div>
              </div>
              <form className="space-y-3">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-text-muted-light">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Sarah Johnson"
                    className="mt-1 w-full rounded-2xl border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-text-muted-light">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="mt-1 w-full rounded-2xl border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
                  />
                </div>
                <button
                  type="button"
                  className="w-full rounded-2xl bg-primary py-2 text-sm font-bold text-secondary transition hover:bg-primaryDark"
                >
                  Request Callback
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
