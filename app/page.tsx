"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [videoActive, setVideoActive] = useState(false);
  const videoSectionRef = useRef<HTMLDivElement | null>(null);
  const navLinks = [
    { href: "#", label: "Home", highlight: true },
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
  ];

  useEffect(() => {
    const target = videoSectionRef.current;
    if (!target) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVideoActive(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark">
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-6 pt-6">
          <div className="flex flex-col gap-4 rounded-[2.75rem] border border-white/15 bg-secondary/70 px-6 py-4 shadow-[0_32px_90px_rgba(15,23,42,0.55)] backdrop-blur-2xl lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-primary shadow-inner shadow-black/30">
                <span className="material-symbols-outlined text-3xl">air</span>
              </div>
              <div>
                <p className="text-xl font-bold text-white tracking-tight">O2 Airflow</p>
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Masterhouse</p>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
                Premium Care
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-white/80">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 transition-all duration-300 hover:bg-white/10 hover:text-white ${link.highlight ? "bg-white text-secondary shadow-lg shadow-primary/40" : ""}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button className="flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-sm font-bold text-secondary transition-all hover:shadow-[0_0_25px_rgba(163,230,53,0.7)]">
                <span>Book Consultation</span>
                <span className="material-symbols-outlined text-base">arrow_outward</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <header className="relative w-full h-screen min-h-[800px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Modern wind turbine landscape representing clean airflow"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7y7hjVn3gmCgDCAN0wY75bcN5P7CLsarMmjUSP4OavliVKUWbCjT1bL-qvhlGZ29EYeBqH9xWm54y3Z0VhFYn4RKCpU3mEdRnVb7Kr3F9BThjiwvjpLTHfcoUMJyIaVMTqR7oiNG8fotKI4WYO-M8fyHMDM0aWilibmyzCipkH1MS-jBb9WPvmRL83yq9lgQu0s6aQYDIUNkuzBH2sSNpJAdDAQRv1iVNAH5k4-OOurOmihxH_feY6gytaXjWedrESyjCLqoDTLE"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/40" />
        </div>
        <div className="container mx-auto px-6 relative z-10 pt-32 lg:pt-36">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Breathing Life into Your Space with <span className="text-primary">Pure Air Solutions.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Experience the ultimate in air purification technology. We transform your indoor environment into a sanctuary of health and freshness.
            </p>
            <button className="bg-primary text-secondary px-8 py-4 rounded-full font-bold text-lg hover:bg-primaryDark hover:text-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(163,230,53,0.5)] flex items-center gap-2 mx-auto">
              <span>Get A Free Consultation</span>
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
            <div className="mt-16 flex flex-col md:flex-row gap-6 justify-center items-center">
              <div className="glass-card p-4 rounded-2xl flex items-center gap-4 w-full md:w-auto max-w-xs text-left">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                  <img
                    alt="Air purifier device"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc1ruMriYxwHvfWD8RGVckIwBJx6OEWcjUuOsiPOJJJ1111kd4IoOPtTppd58ykVwc0YRZwU-u4zVi6qsrfRAi737IuoJ-qTNVyihDMCxxZspftj0Myd5x93b__HSXb76_6u2aYEBd1hmhxlXXicGUv0pnH4WsfkHszpw0VfJCdzBnnaDPg1erUTpLnMY8TLZ8UAE3Ch2tIc2ij69uQr1-tXRkcqs85ngrN1Zq9be-FvteSTGq93_rDQ6yIgCr2iNVq1lJRW8m2cc"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Smart Filtration</h3>
                  <p className="text-gray-300 text-xs mt-1">Discover HEPA technology that removes 99.9% of particles.</p>
                </div>
              </div>
              <div className="glass-card p-4 rounded-2xl flex items-center gap-4 w-full md:w-auto max-w-xs text-left">
                <div className="flex -space-x-3 shrink-0">
                  <img
                    alt="User avatar"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNyVp5TNROMLEUy-kdJ1NKekv35AyOKSOyTch26tOGFWTERkcpG_1_e4o5mzamHjb4hvgQgBQmmgEXXIYBufvNTuYepFAxfmw04Kl5RlgWphgs-wy7WFpzdqnkBrHr_pMMKOqJQn5U0tp3KiU-6cZ2oeLyXAFQ51kB_uzpBVnNI_LmL1tU-yTiASnuNouhoZ4zuFvhgP6dTS1mUHQt07_2YdFg5uSgDnvGPjcSwKoX_jNoWvL-dCa-b4ZWe6DC198_x3s9nXGGfoY"
                  />
                  <img
                    alt="User avatar"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuACC8WDLgXM1RJhOWdMKuQMg10dNy7u-SoCW2qx5gIuT4Un-ZrS9Fyw9t8QoiQcnscrlfuHoVPNpZUbcVutW6OgmQjtm9z3dZyOp4hqQHci1viOpJcQ1CGX9A9bTFrFVycXisqPHsXV-FWsvGyjIiCTqIUaFOyQAoar3WJSsM_xxGbaVEuOO_b-HfrN8yaCut6bTyxmghpatQj1b-tNh-t7FkK5CRZqB7jjtVxEDQyBIe3kV0dTRYKWl4md5B-UBfn0c6jUllRUnCs"
                  />
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-secondary text-xs font-bold">
                    +500
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Happy Customers</h3>
                  <p className="text-gray-300 text-xs mt-1">Over 500+ homes purified worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-24 bg-white dark:bg-card-dark relative overflow-hidden" id="about">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <span className="inline-block py-1 px-3 bg-primary/20 text-primaryDark dark:text-primary rounded-full text-xs font-bold tracking-wider mb-4 uppercase">
                About Us
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-light dark:text-text-dark">
                The Masterhouse Standard
              </h2>
              <p className="text-text-muted-light dark:text-text-muted-dark mb-6 leading-relaxed">
                O2 Airflow by Masterhouse is a leading provider of premium air purification systems. Dedicated to empowering individuals and businesses with clean, breathable air, we believe in the power of purity to transform lives and communities.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center text-yellow-500 font-bold">
                  <span className="material-symbols-outlined text-xl mr-1">star</span>
                  <span>Excellent 4.9/5</span>
                </div>
                <div className="h-4 w-px bg-gray-300 dark:bg-gray-600" />
                <div className="text-text-muted-light dark:text-text-muted-dark text-sm">Based on 1200+ Reviews</div>
              </div>
              <a
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-secondary font-semibold rounded-full hover:bg-primaryDark hover:text-white transition-colors"
                href="#"
              >
                <span>Learn More</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                <img
                  alt="Technician installing air system"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8Ne-B8YGCEpytgaZWSxwMtg8TFMEsNNTYSE_N2dzW_h1WixcaDtdECLgsAXaHBsLkqYbi7lxra7eGo0VbvJ-wxCbWvQh7ZTuarzndcRS0rERbkVg2nqsZ-Chtdk-mKdnTmaaD8METKVWOQAKaIaohmq-z4p139W53tc4N6K57GkdtbkeG7n3J83so9QkqzsPz67O-otJyEXXif_QBZaDibrCmdo34O6_G1OTx2BIbSkI51POc5hlnkjYjVupcWXgx30P6uXFzQHY"
                />
                <div className="absolute top-8 right-8 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl max-w-[200px]">
                  <h4 className="text-3xl font-bold text-primary mb-1">99%</h4>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                    Purity success rate in residential installations.
                  </p>
                </div>
                <div className="absolute bottom-8 left-8 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl max-w-[220px]">
                  <h4 className="text-3xl font-bold text-primary mb-1">10+</h4>
                  <p className="text-sm font-semibold text-text-light dark:text-text-dark">Years Experience</p>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-2">
                    Leading the market in sustainable air solutions.
                  </p>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background-light dark:bg-background-dark" id="products">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="inline-block py-1 px-3 bg-primary/20 text-primaryDark dark:text-primary rounded-full text-xs font-bold tracking-wider mb-4 uppercase">
                Our Products
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">Advanced Air Purifiers</h2>
            </div>
            <p className="text-text-muted-light dark:text-text-muted-dark max-w-md mt-4 md:mt-0 text-right md:text-left">
              We believe in the power of technology to improve health. Explore our range of cutting-edge devices designed for every space.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-card-dark shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                <img
                  alt="Home Series 300"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuASmH-QFSrvsAq7_t6-9tPp46M1Mqdkub0QLKWMdyFuy6kpZEgq_YNh_duumQJIm7sBl5zojjwaALlXGozGG3c_gPuIXZXI-MLmo5mY_yrutbum_WoOUq5-e3vOFh8sz8XMLa4HPHG2gaRPLvyg8x6VttjPbTD7XZz45_6i6U_1ZeW6itlzlyU97z5K7RKByA777hLTFyuYT4XkQC4wzS-yL-pLzs6rgPJ715SohSK-KcWb9SxggaX20BWFgkuPA_8LAJQ4Jggr6Dc"
                />
                <div className="absolute top-4 right-4 bg-primary text-secondary text-xs font-bold px-2 py-1 rounded">NEW</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-2">Home Series 300</h3>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-4">
                  Compact design for bedrooms and small offices.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primaryDark dark:text-primary">$299</span>
                  <button className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full hover:bg-primary hover:text-secondary transition-colors text-text-light dark:text-text-dark">
                    <span className="material-symbols-outlined text-sm">shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-card-dark shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  alt="Pro Air Tower"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCikvqYMQAXHbSqLgumA0shMJkHX1GrKqhY82qLEzDyfBadShar87B44tk1VsbdP_SY5AMmiJ-JoQdWeucijfdGF72aXQolXx0QCzhgytXxV13SVE-isIefLsgFMcOfBLDMN1l0xW4IlXa33DkY5krniCT4Au_bDbnAHYPkLEFxk9ndLL23h_AieJhvWdDRR4Xdb_8tq9rLsndLpcdBXDMq0Bty81gHkbtGQV8cYaPRjt7qTP7hriViLpLXGd4pl0kAmVUR17bZYuA"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-2">Pro Air Tower</h3>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-4">
                  Industrial strength for large living spaces.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primaryDark dark:text-primary">$549</span>
                  <button className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full hover:bg-primary hover:text-secondary transition-colors text-text-light dark:text-text-dark">
                    <span className="material-symbols-outlined text-sm">shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-card-dark shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  alt="Smart Sense"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe4JClY3xyo-7AQu4DqFpY0cUBg-3KFLB69CyqAm4bFtyjkgXQWe62hucCxA-sWR4KKYyiL96Q0T7-WdmtEq1U6WXkxA0Duo0X3hkPvLFmcKoZTK079tfZB5rVQ_VdbFh3m3zrI2d3bjly1hYcWuq_3M_8jElHs1482h4eH_6HBueP3kFbjz4EFNuW46VsWyQnLKk5sYMWVbKZB4hXRjI7qGxXONItCJxa0BZzxYzOCd0FpPtXtmH01IV5pamya170E5NKfHZoNx0"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-2">Smart Sense V2</h3>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-4">
                  AI-driven filtration that adapts to air quality.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primaryDark dark:text-primary">$429</span>
                  <button className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full hover:bg-primary hover:text-secondary transition-colors text-text-light dark:text-text-dark">
                    <span className="material-symbols-outlined text-sm">shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-card-dark shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  alt="Auto Portable"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz-PFLh3JVLDH0yIyMrQLrrlS3poJRVuGVMpqi9KBaqB-3mz87Hfc3v2Be2CdyhEJ2UY36bRKJstVO0yGrUogkXYJVphxPSJ4BREMsfN8z5gVuT_6Zv-lkWbPsTJhxSmeq3MbSFYEWOkRwXOmU2GRHYamsIHaT6k9-7QAQNxpH0zH76NytNIRHSkFxcD0h6xqupLrQmTHGw8ZDSDYc7OFlH9fY8VHa-MiXU_zsxxCpoHtUw4aDuQ7Bb2FXJosIsvcH_FRblcFR7Rw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-2">Auto Portable</h3>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-4">
                  Clean air on the go for your vehicle.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primaryDark dark:text-primary">$129</span>
                  <button className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full hover:bg-primary hover:text-secondary transition-colors text-text-light dark:text-text-dark">
                    <span className="material-symbols-outlined text-sm">shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-secondary dark:bg-card-light text-white dark:text-secondary font-semibold rounded-full hover:bg-opacity-90 transition-colors inline-flex items-center gap-2">
              <span>View All Products</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

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

      <section
        className="relative py-20 bg-background-light dark:bg-background-dark"
        ref={videoSectionRef}
      >
        <div className="container mx-auto px-6">
          <div className="mb-10 flex flex-col gap-4 text-center">
            <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-1 text-xs font-bold uppercase tracking-[0.4em] text-primary">
              <span className="material-symbols-outlined text-sm">play_circle</span>
              Watch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">
              Breathe the Difference
            </h2>
            <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
              Step inside a Masterhouse installation and see how O2 Airflow integrates seamlessly into modern living spaces.
            </p>
          </div>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/20 bg-secondary/90 shadow-[0_40px_120px_rgba(15,23,42,0.6)]">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/NCcbgEwDo3s?${videoActive ? "autoplay=1&" : ""}mute=1&playsinline=1&controls=1&rel=0&modestbranding=1`}
                title="O2 Airflow Experience"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-white/5" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-card-dark">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 rounded-full text-xs font-bold tracking-wider mb-8 uppercase text-text-muted-light dark:text-text-muted-dark">
            Testimonial
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark mb-12">
            Feedback From World Wide Customers
          </h2>
          <div className="max-w-4xl mx-auto bg-background-light dark:bg-background-dark p-10 rounded-3xl shadow-lg relative">
            <span className="material-symbols-outlined absolute top-8 left-8 text-6xl text-primary/20">format_quote</span>
            <p className="text-lg md:text-xl text-text-light dark:text-text-dark font-medium italic relative z-10 mb-6">
              &ldquo;Since installing the O2 Airflow system, my family&apos;s allergies have virtually disappeared. The air feels lighter, cleaner, and crisp. The service team was incredibly professional during installation. Highly recommended!&rdquo;
            </p>
            <div className="flex items-center justify-center gap-4">
              <img
                alt="Customer"
                className="w-12 h-12 rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc4XSqIDqucmOrJPRpM2QY3vio1RWCIQ0tusIyFOsfDNW__lc7W-Ce51Hs-_xRakqMqCZ664dJVWQqEpW2X1-iU5um-NZ6O0SYmbQJHCXNBlAlvLUM1_0cefK0gzJNSjxIyp9wVUMLRBTCD7mthKpFOt_eW44z576G3G18jq_d2zifeiwcA2kO7w0gicqcsfPOymBNqetiblj-jUQysPavOw14031-9HyJ-LmalTMrxXnlJGYnSGvw0hzygcS-r23_94hK-1_aULQ"
              />
              <div className="text-left">
                <div className="font-bold text-text-light dark:text-text-dark">Sarah Jenkins</div>
                <div className="text-xs text-text-muted-light dark:text-text-muted-dark">Homeowner, Seattle</div>
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
