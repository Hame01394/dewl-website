"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Phone,
  Wallet,
  User,
  Globe2,
  ChevronDown,
  Plus,
  ShieldCheck,
  Zap,
  CreditCard,
  Mic,
  Grid3X3,
  Volume2,
  PhoneOff,
  Headphones,
  ArrowRight,
  Home,
  CircleHelp,
  Languages,
  Smartphone,
} from "lucide-react";

type Language = "en" | "ti" | "am";

const translations = {
  en: {
    home: "Home",
    rates: "Rates",
    how: "How It Works",
    faq: "FAQ",
    contact: "Contact",
    account: "My Account",
    heroTitle: "Affordable Calls to Eritrea",
    heroText:
      "Stay close to your family and friends. Make clear, affordable international calls with DEWL.",
    start: "Get Started",
    welcome: "Welcome to DEWL!",
    balance: "Your current balance",
    addCredit: "Add Credit",
    accountNote: "Demo balance — payments are not connected yet.",
    ourRates: "Our Rates",
    mobile: "Mobile",
    landline: "Landline",
    comingSoon: "Coming soon",
    ratesNote: "Rates will be published when calling service is activated.",
    makeCall: "Make a Call",
    destination: "Destination",
    phoneNumber: "Phone Number",
    enterNumber: "Enter phone number",
    call: "Call",
    callNote: "Demonstration mode. No call will be placed.",
    activeCall: "Active Call",
    noActiveCall: "No active call",
    callPreview: "Your call controls will appear here when a call is connected.",
    mute: "Mute",
    keypad: "Keypad",
    speaker: "Speaker",
    end: "End",
    simple: "Simple to Use",
    secure: "Secure Account",
    international: "International Calling",
    prepaid: "Prepaid Wallet",
    multilingual: "Three Languages",
    slogan: "CALL HOME. STAY CONNECTED. PAY LESS.",
    rights: "All rights reserved.",
    demo: "DEMO",
    selectLanguage: "Language",
    destinations: {
      Eritrea: "Eritrea",
      Ethiopia: "Ethiopia",
      Sudan: "Sudan",
      Kenya: "Kenya",
    },
  },

  ti: {
    home: "ቀዳማይ ገጽ",
    rates: "ዋጋታት",
    how: "ከመይ ይሰርሕ",
    faq: "ሕቶታት",
    contact: "ርኸቡና",
    account: "ሕሳበይ",
    heroTitle: "ብተመጣጣኒ ዋጋ ናብ ኤርትራ ደውሉ",
    heroText:
      "ምስ ስድራኹምን ፈተውትኹምን ቀረባ ኩኑ። ብDEWL ጽሩይን ብተመጣጣኒ ዋጋን ናይ ወጻኢ ሃገር ስልኪ ጻውዒት ግበሩ።",
    start: "ጀምሩ",
    welcome: "እንቋዕ ናብ DEWL ብደሓን መጻእኩም!",
    balance: "ናይ ሕጂ ቀሪ ሕሳብ",
    addCredit: "ክረዲት ወስኹ",
    accountNote: "እዚ ናይ ምርኢት ቀሪ ሕሳብ እዩ። ክፍሊት ገና ኣይተራኸበን።",
    ourRates: "ዋጋታትና",
    mobile: "ሞባይል",
    landline: "ስልኪ ገዛ",
    comingSoon: "ኣብ ቀረባ ግዜ",
    ratesNote: "ኣገልግሎት ስልኪ ምስ ተጀመረ ዋጋታት ክንሕትም ኢና።",
    makeCall: "ስልኪ ደውሉ",
    destination: "መድረሻ",
    phoneNumber: "ቁጽሪ ስልኪ",
    enterNumber: "ቁጽሪ ስልኪ ኣእትዉ",
    call: "ደውሉ",
    callNote: "እዚ ንምርኢት ጥራይ እዩ። ናይ ሓቂ ጻውዒት ኣይክግበርን እዩ።",
    activeCall: "ኣብ ምክያድ ዘሎ ጻውዒት",
    noActiveCall: "ንጡፍ ጻውዒት የለን",
    callPreview: "ጻውዒት ምስ ተራኸበ መቆጻጸሪታት ኣብዚ ክረኣዩ እዮም።",
    mute: "ድምጺ ዕጸዉ",
    keypad: "መፍትሕ ቁጽሪ",
    speaker: "ድምጺ ኣውጽእ",
    end: "ደው ኣብል",
    simple: "ቀሊል ኣጠቓቕማ",
    secure: "ውሑስ ሕሳብ",
    international: "ኣህጉራዊ ጻውዒት",
    prepaid: "ቅድሚ ክፍሊት ዘለዎ ሕሳብ",
    multilingual: "ሰለስተ ቋንቋታት",
    slogan: "ናብ ገዛ ደውሉ። ርክብኩም ሓልዉ። ውሑድ ክፈሉ።",
    rights: "ኩሉ መሰላት ተሓልዩ እዩ።",
    demo: "ናይ ምርኢት",
    selectLanguage: "ቋንቋ",
    destinations: {
      Eritrea: "ኤርትራ",
      Ethiopia: "ኢትዮጵያ",
      Sudan: "ሱዳን",
      Kenya: "ኬንያ",
    },
  },

  am: {
    home: "መነሻ",
    rates: "ታሪፍ",
    how: "እንዴት ይሠራል",
    faq: "ጥያቄዎች",
    contact: "ያግኙን",
    account: "የእኔ መለያ",
    heroTitle: "ወደ ኤርትራ በተመጣጣኝ ዋጋ ይደውሉ",
    heroText:
      "ከቤተሰብዎና ከጓደኞችዎ ጋር ቅርብ ይሁኑ። በDEWL ግልጽ እና ተመጣጣኝ የዓለም አቀፍ ስልክ ጥሪ ያድርጉ።",
    start: "ይጀምሩ",
    welcome: "ወደ DEWL እንኳን በደህና መጡ!",
    balance: "አሁን ያለዎት ቀሪ ሂሳብ",
    addCredit: "ብር ይጨምሩ",
    accountNote: "ይህ የሙከራ ቀሪ ሂሳብ ነው። የክፍያ ስርዓት ገና አልተገናኘም።",
    ourRates: "የእኛ ታሪፎች",
    mobile: "ሞባይል",
    landline: "ቋሚ ስልክ",
    comingSoon: "በቅርቡ",
    ratesNote: "የጥሪ አገልግሎቱ ሲጀመር ታሪፎችን እናሳውቃለን።",
    makeCall: "ጥሪ ያድርጉ",
    destination: "መዳረሻ",
    phoneNumber: "ስልክ ቁጥር",
    enterNumber: "ስልክ ቁጥር ያስገቡ",
    call: "ደውል",
    callNote: "ይህ ለማሳያ ብቻ ነው። እውነተኛ ጥሪ አይደረግም።",
    activeCall: "በመካሄድ ላይ ያለ ጥሪ",
    noActiveCall: "ንቁ ጥሪ የለም",
    callPreview: "ጥሪ ሲገናኝ የጥሪ መቆጣጠሪያዎቹ እዚህ ይታያሉ።",
    mute: "ድምፅ ዝጋ",
    keypad: "የቁጥር ቁልፎች",
    speaker: "ድምፅ አጉላ",
    end: "ጥሪ ጨርስ",
    simple: "ቀላል አጠቃቀም",
    secure: "ደህንነቱ የተጠበቀ መለያ",
    international: "ዓለም አቀፍ ጥሪ",
    prepaid: "ቅድመ ክፍያ ቦርሳ",
    multilingual: "በሶስት ቋንቋዎች",
    slogan: "ወደ ቤት ይደውሉ። ግንኙነትዎን ይጠብቁ። ያነሰ ይክፈሉ።",
    rights: "መብቱ በሕግ የተጠበቀ ነው።",
    demo: "ማሳያ",
    selectLanguage: "ቋንቋ",
    destinations: {
      Eritrea: "ኤርትራ",
      Ethiopia: "ኢትዮጵያ",
      Sudan: "ሱዳን",
      Kenya: "ኬንያ",
    },
  },
};

const countries = [
  { name: "Eritrea", code: "+291", flag: "🇪🇷" },
  { name: "Ethiopia", code: "+251", flag: "🇪🇹" },
  { name: "Sudan", code: "+249", flag: "🇸🇩" },
  { name: "Kenya", code: "+254", flag: "🇰🇪" },
];

const keypad = [
  { digit: "1", letters: "" },
  { digit: "2", letters: "ABC" },
  { digit: "3", letters: "DEF" },
  { digit: "4", letters: "GHI" },
  { digit: "5", letters: "JKL" },
  { digit: "6", letters: "MNO" },
  { digit: "7", letters: "PQRS" },
  { digit: "8", letters: "TUV" },
  { digit: "9", letters: "WXYZ" },
  { digit: "*", letters: "" },
  { digit: "0", letters: "+" },
  { digit: "#", letters: "" },
];

export default function DEWLPage({
  language,
}: {
  language: Language;
}) {
  const router = useRouter();
  const t = translations[language];

  const [country, setCountry] = useState(countries[0]);
  const [number, setNumber] = useState("");
  const [notice, setNotice] = useState("");

  function changeLanguage(value: Language) {
    const routes = {
      en: "/",
      ti: "/ti",
      am: "/am",
    };

    router.push(routes[value]);
  }

  function pressDigit(digit: string) {
    setNumber((current) => current + digit);
    setNotice("");
  }

  function handleCall() {
    if (!number.trim()) {
      setNotice(
        language === "ti"
          ? "በጃኹም ቁጽሪ ስልኪ ኣእትዉ።"
          : language === "am"
            ? "እባክዎ ስልክ ቁጥር ያስገቡ።"
            : "Please enter a phone number."
      );
      return;
    }

    setNotice(t.callNote);
  }

  return (
    <main className="dewl-page">
      <header className="site-header">
        <a href="/" className="logo" aria-label="DEWL home">
          <span className="logo-icon">
            <Phone />
          </span>
          <span className="logo-text">
  DEWL
  <small>{t.slogan}</small>
</span>
        </a>

        <nav className="main-nav">
          <a href="/" className={language === "en" ? "nav-current" : ""}>
            <Home size={15} />
            {t.home}
          </a>
          <a href="#rates">
            <Wallet size={15} />
            {t.rates}
          </a>
          <a href="#features">
            <Globe2 size={15} />
            {t.how}
          </a>
          <a href="#faq">
            <CircleHelp size={15} />
            {t.faq}
          </a>
          <a href="#contact">{t.contact}</a>
        </nav>

        <div className="header-actions">
          <div className="language-select">
            <Languages size={15} />
            <select
              aria-label={t.selectLanguage}
              value={language}
              onChange={(event) =>
                changeLanguage(event.target.value as Language)
              }
            >
              <option value="en">English</option>
              <option value="ti">ትግርኛ</option>
              <option value="am">አማርኛ</option>
            </select>
          </div>

          <a href="#account" className="account-link">
            <User size={16} />
            {t.account}
          </a>
        </div>
      </header>

      <section className="hero-banner">
        <div className="hero-overlay">
          <span className="hero-kicker">DEWL · CALL HOME</span>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroText}</p>
          <a href="#dialer" className="hero-button">
            {t.start}
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className="main-panels">
        {/* ACCOUNT AND RATES */}
        <aside className="panel account-panel" id="account">
          <div className="panel-header">
            <span>
              <Wallet size={19} />
              {t.account}
            </span>
            <span className="demo-tag">{t.demo}</span>
          </div>

          <div className="account-content">
            <div className="greeting-box">
              <h2>{t.welcome}</h2>
              <p>{t.balance}</p>
            </div>

            <div className="balance-line">
              <strong>€12.50</strong>
              <button
                className="add-credit"
                onClick={() => setNotice(t.accountNote)}
              >
                <Plus size={17} />
                {t.addCredit}
              </button>
            </div>

            <span className="demo-label">{t.accountNote}</span>

            <div className="rates-section" id="rates">
              <h3>
                <Globe2 size={17} />
                {t.ourRates}
              </h3>

              <div className="rate-card">
                <span className="rate-flag">🇪🇷</span>
                <div className="rate-description">
                  <strong>{t.mobile}</strong>
                  <small>{t.destinations.Eritrea}</small>
                </div>
                <strong className="rate-price">{t.comingSoon}</strong>
              </div>

              <div className="rate-card" style={{ marginTop: 8 }}>
                <span className="rate-flag">🇪🇷</span>
                <div className="rate-description">
                  <strong>{t.landline}</strong>
                  <small>{t.destinations.Eritrea}</small>
                </div>
                <strong className="rate-price">{t.comingSoon}</strong>
              </div>

              <div className="rate-note">
                <ShieldCheck size={18} />
                {t.ratesNote}
              </div>
            </div>
          </div>
        </aside>

        {/* CALLING DIALER */}
        <section className="panel dialer-panel" id="dialer">
          <div className="panel-header">
            <span>
              <Phone size={19} />
              {t.makeCall}
            </span>
            <span className="demo-tag">{t.demo}</span>
          </div>

          <div className="dialer-content">
            <label className="input-label">{t.destination}</label>

            <div className="destination-select">
              <span className="destination-flag">{country.flag}</span>
              <select
                value={country.name}
                onChange={(event) => {
                  const selected = countries.find(
                    (item) => item.name === event.target.value
                  );
                  if (selected) setCountry(selected);
                }}
              >
                {countries.map((item) => (
                  <option key={item.name} value={item.name}>
                    {t.destinations[
                      item.name as keyof typeof t.destinations
                    ]}
                  </option>
                ))}
              </select>
              <ChevronDown size={17} />
            </div>

            <label className="input-label">{t.phoneNumber}</label>

            <div className="phone-entry">
              <span className="phone-code">{country.code}</span>
              <input
                type="tel"
                inputMode="tel"
                value={number}
                onChange={(event) => {
                  setNumber(event.target.value);
                  setNotice("");
                }}
                placeholder={t.enterNumber}
              />
            </div>

            <div className="number-pad">
              {keypad.map((item) => (
                <button
                  key={item.digit}
                  type="button"
                  onClick={() => pressDigit(item.digit)}
                  aria-label={`Enter ${item.digit}`}
                >
                  <strong>{item.digit}</strong>
                  {item.letters && <small>{item.letters}</small>}
                </button>
              ))}
            </div>

            <button className="main-call-button" onClick={handleCall}>
              <Phone size={19} />
              {t.call}
            </button>

            {notice && (
              <p className="call-notice" role="status">
                {notice}
              </p>
            )}
          </div>
        </section>

        {/* ACTIVE CALL */}
        <aside className="active-call-panel">
          <div className="call-status">
            <span className="status-dot" />
            {t.activeCall}
          </div>

          <div className="caller-avatar">
            <Headphones size={48} />
          </div>

          <h2>{t.noActiveCall}</h2>
          <p className="caller-number">{t.callPreview}</p>

          <p className="call-demo-warning">
            {t.demo} · {t.callNote}
          </p>

          <div className="call-controls">
            <button disabled>
              <Mic size={20} />
              <small>{t.mute}</small>
            </button>

            <button disabled>
              <Grid3X3 size={20} />
              <small>{t.keypad}</small>
            </button>

            <button disabled>
              <Volume2 size={20} />
              <small>{t.speaker}</small>
            </button>

            <button className="end-call" disabled>
              <PhoneOff size={20} />
              <small>{t.end}</small>
            </button>
          </div>

          <p className="call-panel-foot">{t.callNote}</p>
        </aside>
      </section>

      {/* FEATURES */}
      <section className="feature-strip" id="features">
        <div className="feature-item">
          <Zap size={23} />
          <span>{t.simple}</span>
        </div>

        <div className="feature-item">
          <ShieldCheck size={23} />
          <span>{t.secure}</span>
        </div>

        <div className="feature-item">
          <Globe2 size={23} />
          <span>{t.international}</span>
        </div>

        <div className="feature-item">
          <CreditCard size={23} />
          <span>{t.prepaid}</span>
        </div>

        <div className="feature-item">
          <Smartphone size={23} />
          <span>{t.multilingual}</span>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <span>© 2026 DEWL. {t.rights}</span>
        <strong>{t.slogan}</strong>
        <span>English · ትግርኛ · አማርኛ</span>
        <a href="mailto:support@dewl.com">
          {t.contact}
          <ArrowRight size={13} />
        </a>
      </footer>
    </main>
  );
}