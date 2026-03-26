import React, { useMemo, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronRight,
  Church,
  HeartHandshake,
  CalendarDays,
  Clock3,
  Users,
  Baby,
  Music4,
  Megaphone,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Coffee,
  Cross,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Quote,
} from "lucide-react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Horarios", href: "#horarios" },
  { label: "Ministerios", href: "#ministerios" },
  { label: "Eventos", href: "#eventos" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

const schedule = [
  {
    title: "Culto Dominical",
    time: "Domingos · 10:00 AM",
    desc: "Un encuentro de adoración, palabra y comunión para toda la familia.",
    icon: Church,
  },
  {
    title: "Oración Congregacional",
    time: "Miércoles · 7:00 PM",
    desc: "Un espacio reverente para interceder, agradecer y buscar dirección de Dios.",
    icon: HeartHandshake,
  },
  {
    title: "Estudio Bíblico",
    time: "Viernes · 7:30 PM",
    desc: "Formación espiritual con enseñanza clara, cercana y edificante.",
    icon: Cross,
  },
  {
    title: "Reunión de Jóvenes",
    time: "Sábados · 6:00 PM",
    desc: "Una atmósfera viva para crecer en fe, identidad y propósito.",
    icon: Users,
  },
];

const ministries = [
  {
    title: "Niños",
    icon: Baby,
    desc: "Un ministerio seguro, alegre y formativo donde cada niño aprende la Palabra con amor.",
  },
  {
    title: "Jóvenes",
    icon: Sparkles,
    desc: "Acompañamos a la nueva generación a vivir una fe firme, relevante y con propósito.",
  },
  {
    title: "Mujeres",
    icon: HeartHandshake,
    desc: "Espacios de crecimiento, cuidado mutuo y fortalecimiento espiritual entre hermanas.",
  },
  {
    title: "Hombres",
    icon: ShieldCheck,
    desc: "Formación de carácter, liderazgo piadoso y compromiso con el hogar y la congregación.",
  },
  {
    title: "Alabanza",
    icon: Music4,
    desc: "Servimos con excelencia para conducir a la iglesia a una adoración reverente y genuina.",
  },
  {
    title: "Evangelismo",
    icon: Megaphone,
    desc: "Llevamos esperanza, palabra y servicio a la comunidad con compasión y convicción.",
  },
];

const events = [
  {
    date: "06 Abril",
    title: "Domingo de Bienvenida",
    desc: "Una reunión especial para recibir a nuevas familias, compartir visión y orar juntos.",
  },
  {
    date: "12 Abril",
    title: "Vigilia de Oración",
    desc: "Una noche apartada para buscar la presencia de Dios con gratitud, clamor y adoración.",
  },
  {
    date: "20 Abril",
    title: "Encuentro de Familias",
    desc: "Un espacio de edificación, unidad y consejo bíblico para fortalecer el hogar cristiano.",
  },
];

const gallery = [
  {
    title: "Adoración congregacional",
    desc: "Momentos de alabanza reverente y comunión.",
    gradient: "from-[#0B3F91] via-[#155BB8] to-[#0A2458]",
  },
  {
    title: "Comunidad y bienvenida",
    desc: "Una iglesia cercana, cálida y servicial.",
    gradient: "from-[#E4B21B] via-[#F4CB58] to-[#A66A06]",
  },
  {
    title: "Palabra y enseñanza",
    desc: "Fundamento bíblico para cada etapa de la vida.",
    gradient: "from-[#10264D] via-[#234F94] to-[#B58A12]",
  },
  {
    title: "Ministerio infantil",
    desc: "Cuidado, alegría y formación desde temprano.",
    gradient: "from-[#0A2458] via-[#1C66C5] to-[#7AA9E8]",
  },
  {
    title: "Jóvenes con propósito",
    desc: "Fe viva, identidad y compañerismo.",
    gradient: "from-[#173768] via-[#245DB2] to-[#D6A21B]",
  },
  {
    title: "Oración e intercesión",
    desc: "Espacios de quietud, dependencia y esperanza.",
    gradient: "from-[#E5ECF7] via-[#B5CAE7] to-[#5D7CB3]",
  },
];

const siteConfig = {
  churchName: "IPUE Mula",
  slogan: "Un Señor, una fe, un bautismo.",
  location: "Mula · Murcia",
  phoneDisplay: "+34 600 000 000",
  phoneHref: "tel:+34600000000",
  whatsappDisplay: "+34 600 000 000",
  whatsappHref: "https://wa.me/34600000000",
  email: "contacto@ipuemula.org",
  emailHref: "mailto:contacto@ipuemula.org",
  address: "Calle Ejemplo 24, Mula, Murcia, España",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=IPUE%20Mula%20Murcia",
};

const brandAssets = {
  primaryLogo: "/logo-principal-ipue-mula.png",
  secondaryLogo: "/LOG_IPUE_MULA.png",
  heroImage: "/persona_orando.jpeg",
};

const contactItems = [
  { icon: Phone, label: "Teléfono", value: siteConfig.phoneDisplay, href: siteConfig.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: siteConfig.whatsappDisplay, href: siteConfig.whatsappHref, external: true },
  { icon: Mail, label: "Correo electrónico", value: siteConfig.email, href: siteConfig.emailHref },
  { icon: MapPin, label: "Dirección", value: siteConfig.address, href: siteConfig.mapsHref, external: true },
];

const socialLinks = [
  { label: "Instagram", href: null, Icon: InstagramIcon },
  { label: "Facebook", href: null, Icon: FacebookIcon },
  { label: "YouTube", href: null, Icon: YouTubeIcon },
];

function InstagramIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.25" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.65 20.5v-6.8h2.28l.35-2.66h-2.63v-1.7c0-.77.21-1.29 1.31-1.29h1.4V5.67a17 17 0 0 0-2.05-.1c-2.03 0-3.43 1.24-3.43 3.5v1.97H8.9v2.66h2.28v6.8z" />
    </svg>
  );
}

function YouTubeIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.2 8.25a2.8 2.8 0 0 0-1.97-1.98C17.5 5.8 12 5.8 12 5.8s-5.5 0-7.23.47A2.8 2.8 0 0 0 2.8 8.25 29 29 0 0 0 2.33 12c0 1.3.15 2.6.47 3.75a2.8 2.8 0 0 0 1.97 1.98c1.73.47 7.23.47 7.23.47s5.5 0 7.23-.47a2.8 2.8 0 0 0 1.97-1.98c.32-1.15.47-2.45.47-3.75s-.15-2.6-.47-3.75M10.25 15.2V8.8L15.8 12z" />
    </svg>
  );
}

function SocialIconLink({ href, label, icon }) {
  const Icon = icon;
  const className =
    "flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50/80 text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-[#0B3F91]/20 focus:ring-offset-2 focus:ring-offset-white";

  if (!href) {
    return (
      <button
        type="button"
        disabled
        title={`Añade la URL oficial de ${label} para activarlo.`}
        aria-label={`${label} pendiente de configurar`}
        className={`${className} cursor-not-allowed opacity-65`}
      >
        <Icon className="h-5 w-5" />
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`${className} hover:-translate-y-0.5 hover:border-[#0B3F91]/25 hover:text-[#0B3F91] active:translate-y-0 active:scale-[0.98]`}
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0B3F91]/8 bg-white/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0B3F91] shadow-[0_6px_18px_rgba(15,23,42,0.04)] backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-[#E4B21B] shadow-[0_0_0_4px_rgba(228,178,27,0.12)]" />
        {eyebrow}
      </div>
      <h2 className="text-[1.7rem] sm:text-[2.45rem] lg:text-[2.8rem] font-semibold tracking-[-0.035em] text-slate-950">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-[17px] sm:leading-8">
        {description}
      </p>
    </div>
  );
}

function SmoothAnchor({ href, children, className = "", onClick, active = false }) {
  return (
    <a
      href={href}
      className={className}
      aria-current={active ? "page" : undefined}
      onClick={(e) => {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          const y = el.getBoundingClientRect().top + window.scrollY - 84;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
        if (onClick) onClick(e);
      }}
    >
      {children}
    </a>
  );
}

function PremiumCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-[1.75rem] border border-white/70 bg-white/88 shadow-[0_18px_50px_rgba(15,23,42,0.05),0_2px_6px_rgba(15,23,42,0.03)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(15,23,42,0.07),0_6px_16px_rgba(15,23,42,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}

export default function IPUEOnePageSite() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const submitResetTimeoutRef = React.useRef(null);

  React.useEffect(() => {
    const ids = navItems.map((item) => item.href.replace("#", ""));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.3, 0.5, 0.8] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!menuOpen && !selectedImage) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, selectedImage]);

  React.useEffect(() => {
    document.body.style.overflow = menuOpen || selectedImage ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, selectedImage]);

  React.useEffect(
    () => () => {
      if (submitResetTimeoutRef.current) {
        window.clearTimeout(submitResetTimeoutRef.current);
      }
    },
    []
  );

  const errors = useMemo(() => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = "Por favor, escribe tu nombre.";
    if (!form.correo.trim()) e.correo = "Por favor, escribe tu correo.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) e.correo = "Introduce un correo válido.";
    if (!form.mensaje.trim()) e.mensaje = "Cuéntanos en qué podemos ayudarte.";
    else if (form.mensaje.trim().length < 12) e.mensaje = "Tu mensaje debe tener al menos 12 caracteres.";
    return e;
  }, [form]);

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched({ nombre: true, correo: true, mensaje: true });
    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
      if (submitResetTimeoutRef.current) {
        window.clearTimeout(submitResetTimeoutRef.current);
      }
      submitResetTimeoutRef.current = window.setTimeout(() => setSubmitted(false), 4000);
      setForm({ nombre: "", correo: "", mensaje: "" });
      setTouched({});
    }
  };

  return (
    <div className="min-h-screen scroll-smooth bg-[#F5F7FB] text-slate-900 selection:bg-[#E4B21B]/30 selection:text-slate-950">
      <div className="fixed inset-x-0 top-0 -z-20 h-136 bg-[radial-gradient(circle_at_top,rgba(27,91,184,0.16),transparent_44%),radial-gradient(circle_at_85%_8%,rgba(228,178,27,0.12),transparent_24%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-size-[54px_54px] opacity-[0.65]" />

      <header className="supports-backdrop-filter:bg-white/58 sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-2xl transition-[background-color,box-shadow,border-color] duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <SmoothAnchor href="#inicio" className="group flex items-center gap-3.5">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/40 bg-white/92 p-1.5 shadow-[0_14px_34px_rgba(11,63,145,0.16)] transition duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_18px_42px_rgba(11,63,145,0.2)]">
              <img
                src={brandAssets.primaryLogo}
                alt={`Logo principal de ${siteConfig.churchName}`}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.32em] text-[#0B3F91]">IGLESIA CRISTIANA</p>
              <p className="mt-0.5 text-xs text-slate-500">{siteConfig.slogan}</p>
            </div>
          </SmoothAnchor>

          <nav className="hidden items-center gap-2 xl:gap-3 lg:flex">
            {navItems.map((item) => {
              const current = activeSection === item.href.replace("#", "");
              return (
                <SmoothAnchor
                  key={item.href}
                  href={item.href}
                  active={current}
                  className={`rounded-full px-3 py-2 text-[13px] xl:text-[14px] font-medium transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-[#0B3F91]/20 focus:ring-offset-2 focus:ring-offset-[#F5F7FB] ${
                    current
                      ? "bg-white text-[#0B3F91] shadow-[0_10px_24px_rgba(15,23,42,0.05)]"
                      : "text-slate-700 hover:bg-white hover:text-[#0B3F91] hover:shadow-[0_10px_24px_rgba(15,23,42,0.05)]"
                  }`}
                >
                  {item.label}
                </SmoothAnchor>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 xl:gap-3 lg:flex">
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/90 px-4.5 py-2.5 text-sm font-medium text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#0B3F91]/20 hover:text-[#0B3F91] hover:shadow-[0_16px_34px_rgba(15,23,42,0.08)] active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#0B3F91]/20 focus:ring-offset-2 focus:ring-offset-[#F5F7FB]"
            >
              <Coffee className="h-4 w-4" />
              Invítame un café
            </a>
            <SmoothAnchor
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-[#0B3F91] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(11,63,145,0.24)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#0A3477] hover:shadow-[0_20px_40px_rgba(11,63,145,0.28)] active:translate-y-0 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#0B3F91]/40 focus:ring-offset-2 focus:ring-offset-[#F5F7FB]"
            >
              Visítanos
              <ChevronRight className="h-4 w-4" />
            </SmoothAnchor>
          </div>

          <button
            aria-label="Abrir menú"
            onClick={() => setMenuOpen((s) => !s)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/90 text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.05)] transition-all duration-200 ease-out hover:text-[#0B3F91] hover:shadow-[0_14px_28px_rgba(15,23,42,0.08)] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#0B3F91]/20 focus:ring-offset-2 focus:ring-offset-[#F5F7FB] lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <Motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-slate-200/80 bg-white/90 backdrop-blur-xl lg:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
                {navItems.map((item) => {
                  const current = activeSection === item.href.replace("#", "");
                  return (
                    <SmoothAnchor
                      key={item.href}
                      href={item.href}
                      active={current}
                      onClick={() => setMenuOpen(false)}
                      className={`rounded-2xl px-3.5 py-3 text-sm font-medium transition-all duration-200 ease-out ${
                        current ? "bg-[#0B3F91]/6 text-[#0B3F91]" : "text-slate-700 hover:bg-slate-50 hover:text-[#0B3F91]"
                      }`}
                    >
                      {item.label}
                    </SmoothAnchor>
                  );
                })}
                <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <a
                    href={siteConfig.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11.5 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-200 ease-out hover:border-[#0B3F91]/20 hover:text-[#0B3F91] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#0B3F91]/20"
                  >
                    <Coffee className="h-4 w-4" /> Invítame un café
                  </a>
                  <SmoothAnchor
                    href="#contacto"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex min-h-11.5 items-center justify-center gap-2 rounded-full bg-[#0B3F91] px-4 py-3 text-sm font-semibold text-white transition-all duration-200 ease-out hover:bg-[#0A3477] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#0B3F91]/30"
                  >
                    Visítanos <ChevronRight className="h-4 w-4" />
                  </SmoothAnchor>
                </div>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden scroll-mt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-14 pt-8 sm:px-6 sm:pb-16 sm:pt-10 md:gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-28 lg:pt-14 xl:pb-32 xl:pt-16">
            <div>
              <Motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/85 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_10px_28px_rgba(15,23,42,0.05)] backdrop-blur-xl"
              >
                <Quote className="h-4 w-4 text-[#E4B21B]" />
                Iglesia Pentecostal Unida en Europa · Mula
              </Motion.div>

              <Motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08 }}
                className="mt-6 max-w-3xl text-[2.15rem] font-semibold tracking-[-0.045em] text-slate-950 sm:text-[2.7rem] md:text-[3.1rem] lg:text-[4rem] lg:leading-[1.02] xl:text-[4.4rem]"
              >
                Una casa para adorar, crecer en la Palabra y caminar en comunidad.
              </Motion.h1>

              <Motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.16 }}
                className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 sm:mt-6 sm:text-[16px] sm:leading-8 lg:text-[18px]"
              >
                En IPUE queremos recibirte con cercanía, reverencia y excelencia. Somos una iglesia cristiana dominical donde cada persona encuentra un lugar para conocer a Dios, fortalecer su fe y compartir vida con otros.
              </Motion.p>

              <Motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.24 }}
                className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap"
              >
                <SmoothAnchor
                  href="#quienes-somos"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0B3F91] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(11,63,145,0.24)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#0A3477] hover:shadow-[0_20px_44px_rgba(11,63,145,0.28)] active:translate-y-0 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#0B3F91]/30 focus:ring-offset-2 focus:ring-offset-[#F5F7FB]"
                >
                  Conócenos <ChevronRight className="h-4 w-4" />
                </SmoothAnchor>
                <SmoothAnchor
                  href="#horarios"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/90 px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#0B3F91]/20 hover:text-[#0B3F91] hover:shadow-[0_16px_34px_rgba(15,23,42,0.08)] active:translate-y-0 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#0B3F91]/20 focus:ring-offset-2 focus:ring-offset-[#F5F7FB]"
                >
                  Ver horarios
                </SmoothAnchor>
              </Motion.div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 xl:grid-cols-3">
                {[
                  ["Comunidad viva", "Familias, jóvenes y niños creciendo juntos en fe."],
                  ["Espiritualidad reverente", "Ambientes de oración, adoración y enseñanza bíblica."],
                  ["Excelencia cercana", "Una experiencia acogedora, clara y bien cuidada desde el primer momento."],
                ].map(([title, text]) => (
                  <PremiumCard key={title} className="p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                    <p className="text-[15px] font-semibold tracking-[-0.02em] text-slate-900">{title}</p>
                    <p className="mt-2.5 text-sm leading-6 text-slate-600">{text}</p>
                  </PremiumCard>
                ))}
              </div>
            </div>

            <Motion.div
              initial={{ opacity: 0, scale: 0.965, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="relative"
            >
              <div className="absolute -left-8 top-10 hidden h-28 w-28 rounded-full bg-[#E4B21B]/18 blur-3xl sm:block" />
              <div className="absolute -right-10 bottom-8 hidden h-32 w-32 rounded-full bg-[#0B3F91]/18 blur-3xl sm:block" />

              <div className="relative overflow-hidden rounded-[2.2rem] border border-white/65 bg-white/72 shadow-[0_34px_100px_rgba(12,24,47,0.14),0_4px_12px_rgba(15,23,42,0.04)] backdrop-blur-2xl">
                <div className="relative h-[29rem] sm:h-[35rem] lg:h-[39rem] xl:h-[42rem]">
                  <img
                    src={brandAssets.heroImage}
                    alt="Persona orando durante un momento de adoración"
                    className="h-full w-full object-cover object-[center_35%]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,20,44,0.14)_0%,rgba(8,20,44,0.3)_42%,rgba(5,10,24,0.72)_100%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_22%,rgba(228,178,27,0.22),transparent_18%),radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.14),transparent_18%),linear-gradient(to_top,rgba(255,255,255,0.12),transparent_48%)]" />

                  <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-3 sm:inset-x-6 sm:top-6">
                    <div className="max-w-[17rem] rounded-[1.65rem] border border-white/16 bg-slate-950/16 px-4 py-4 text-white shadow-[0_24px_60px_rgba(2,6,23,0.24)] backdrop-blur-xl sm:max-w-sm sm:px-5 sm:py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
                          <img
                            src={brandAssets.secondaryLogo}
                            alt={`Logotipo institucional de ${siteConfig.churchName}`}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[11px] uppercase tracking-[0.24em] text-white/68">Iglesia local</p>
                          <p className="mt-1 text-[1.05rem] font-semibold tracking-[-0.03em] text-white sm:text-[1.18rem]">
                            {siteConfig.churchName}
                          </p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-6 text-white/80">
                        Una comunidad de adoración, oración y acompañamiento espiritual con identidad clara y trato cercano.
                      </p>
                    </div>

                    <div className="shrink-0 rounded-full border border-white/16 bg-white/12 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md shadow-[0_14px_34px_rgba(2,6,23,0.18)]">
                      {siteConfig.location}
                    </div>
                  </div>

                  <div className="absolute inset-x-4 bottom-4 grid gap-3 sm:inset-x-6 sm:bottom-6 lg:grid-cols-[1.08fr_0.54fr]">
                    <div className="rounded-[1.85rem] border border-white/18 bg-white/10 p-5 text-white shadow-[0_28px_70px_rgba(2,6,23,0.28)] backdrop-blur-xl sm:p-6 lg:p-7">
                      <p className="text-[11px] uppercase tracking-[0.3em] text-white/70">Lema central</p>
                      <h3
                        className="mt-4 text-[2.2rem] leading-none text-white sm:text-[2.8rem] lg:text-[3.55rem]"
                        style={{
                          fontFamily: '"Georgia", "Times New Roman", serif',
                          fontStyle: "italic",
                          textShadow: "0 12px 32px rgba(0,0,0,0.18)",
                        }}
                      >
                        Y Vimos
                        <span className="mt-1 block text-[#F4C84E] sm:mt-2">su Gloria</span>
                      </h3>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-white/82 sm:text-[15px]">
                        Un hogar espiritual para acercarse a Dios, ser fortalecido en la fe y compartir vida en comunidad.
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                      <div className="rounded-[1.45rem] border border-white/14 bg-slate-950/18 p-4 text-white shadow-[0_18px_44px_rgba(2,6,23,0.2)] backdrop-blur-lg">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-white/65">Bienvenida</p>
                        <p className="mt-2 text-[15px] font-semibold">Un lugar para ti y tu familia</p>
                      </div>
                      <div className="rounded-[1.45rem] border border-white/14 bg-slate-950/18 p-4 text-white shadow-[0_18px_44px_rgba(2,6,23,0.2)] backdrop-blur-lg">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-white/65">Encuentro principal</p>
                        <p className="mt-2 text-[15px] font-semibold">Domingos · 10:00 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Motion.div>
          </div>
        </section>

        <section id="quienes-somos" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-16 lg:px-8 lg:py-24 xl:py-28">
          <SectionHeading
            eyebrow="Quiénes somos"
            title="Una comunidad cristiana que sirve con amor, verdad y excelencia"
            description="IPUE es una iglesia cristiana dominical orientada a la enseñanza bíblica, la oración y la vida en comunidad. Deseamos que cada persona que llega se sienta recibida, acompañada y animada a dar pasos firmes en su fe."
          />

          <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6">
            <PremiumCard className="p-5 sm:p-7 lg:p-9">
              <p className="text-[17px] leading-8 text-slate-600 sm:text-[18px]">
                Creemos en una iglesia reverente en la presencia de Dios y cercana en el trato con las personas. Nuestro deseo es anunciar a Cristo con fidelidad, formar discípulos, fortalecer a las familias y servir a nuestra ciudad con una fe visible, compasiva y firme.
              </p>
              <div className="mt-7 grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Misión",
                    text: "Predicar el evangelio, discipular con verdad y acompañar a cada persona en su caminar con Dios.",
                  },
                  {
                    title: "Visión",
                    text: "Ser una iglesia saludable, acogedora y relevante, marcada por la presencia de Dios y el servicio a la comunidad.",
                  },
                  {
                    title: "Valores",
                    text: "Oración, santidad, unidad, compasión, integridad, servicio y excelencia en todo lo que hacemos.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-[1.15rem] sm:rounded-[1.35rem] border border-slate-100 bg-[linear-gradient(180deg,#FFFFFF_0%,#FAFBFD_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_10px_24px_rgba(15,23,42,0.03)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)]">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#0B3F91]">{item.title}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </PremiumCard>

            <div className="grid gap-5">
              <div className="rounded-[1.9rem] border border-white/15 bg-[linear-gradient(180deg,#0B3F91_0%,#0A2458_100%)] p-7 text-white shadow-[0_24px_70px_rgba(11,63,145,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_30px_80px_rgba(11,63,145,0.22)] sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 ring-1 ring-white/15 shadow-[0_12px_28px_rgba(0,0,0,0.10)] transition-transform duration-300 ease-out group-hover:scale-[1.03]">
                    <Sparkles className="h-6 w-6 text-[#F6D36C]" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">Nuestra esencia</p>
                    <h3 className="text-[1.4rem] font-semibold tracking-[-0.03em]">Fe viva, comunidad real</h3>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-white/82">
                  Queremos que cada visitante no solo asista a una reunión, sino que encuentre un hogar espiritual donde pueda crecer, servir y conocer más profundamente al Señor.
                </p>
              </div>

              <PremiumCard className="p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B3F91]/8 text-[#0B3F91] shadow-[0_10px_24px_rgba(11,63,145,0.08)] transition-all duration-300 ease-out hover:bg-[#0B3F91] hover:text-white">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Lo que encontrarás</p>
                    <h3 className="text-[1.4rem] font-semibold tracking-[-0.03em] text-slate-950">Una experiencia clara y acogedora</h3>
                  </div>
                </div>
                <ul className="mt-5 space-y-3.5 text-sm leading-6 text-slate-600">
                  {[
                    "Recepción amable y acompañamiento para nuevos asistentes.",
                    "Reuniones ordenadas, edificantes y centradas en la Palabra.",
                    "Espacios para niños, jóvenes, familias y ministerios de servicio.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#E4B21B] shadow-[0_0_0_5px_rgba(228,178,27,0.12)] transition-transform duration-300 ease-out group-hover:scale-110" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </PremiumCard>
            </div>
          </div>
        </section>

        <section id="horarios" className="scroll-mt-24 border-y border-white/70 bg-white/58 py-16 backdrop-blur-xl sm:py-16 lg:py-24 xl:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Horarios de reunión"
              title="Encuentra el momento ideal para visitarnos"
              description="Diseñado para leerse con claridad desde cualquier pantalla, este bloque reúne nuestras actividades principales y facilita una rápida consulta para nuevos asistentes y miembros de la congregación."
            />

            <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
              {schedule.map((item) => {
                const Icon = item.icon;
                return (
                  <Motion.article
                    whileHover={{ y: -7 }}
                    key={item.title}
                    className="group rounded-[1.8rem] border border-white/70 bg-white/92 p-5 sm:p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05),0_2px_6px_rgba(15,23,42,0.03)] transition-all duration-300 ease-out hover:shadow-[0_24px_60px_rgba(15,23,42,0.08),0_8px_18px_rgba(15,23,42,0.04)]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B3F91]/7 text-[#0B3F91] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-300 ease-out group-hover:bg-[#0B3F91] group-hover:text-white group-hover:shadow-[0_14px_34px_rgba(11,63,145,0.18)] group-hover:scale-[1.04]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-5 text-[1.18rem] sm:text-[1.26rem] lg:text-[1.32rem] font-semibold tracking-[-0.03em] text-slate-950">{item.title}</h3>
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#E4B21B]/12 px-3 py-1.5 text-sm font-medium text-[#9A6A00] transition-all duration-200 ease-out group-hover:bg-[#E4B21B]/16">
                      <Clock3 className="h-4 w-4" />
                      {item.time}
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
                  </Motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="ministerios" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-16 lg:px-8 lg:py-24 xl:py-28">
          <SectionHeading
            eyebrow="Ministerios"
            title="Áreas de servicio y acompañamiento para cada etapa"
            description="Cada ministerio ha sido pensado como una puerta de entrada a la comunidad, el crecimiento espiritual y el servicio. Las tarjetas integran consistencia visual, claridad y microinteracciones elegantes."
          />

          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-5">
            {ministries.map((item, index) => {
              const Icon = item.icon;
              return (
                <Motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -7 }}
                  className="group rounded-[1.95rem] border border-white/70 bg-white/92 p-5 sm:p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05),0_2px_6px_rgba(15,23,42,0.03)] transition-all duration-300 ease-out hover:shadow-[0_24px_60px_rgba(15,23,42,0.08),0_8px_18px_rgba(15,23,42,0.04)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#0B3F91]/8 to-[#E4B21B]/14 text-[#0B3F91] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-300 ease-out group-hover:from-[#0B3F91] group-hover:to-[#0A3477] group-hover:text-white group-hover:shadow-[0_14px_34px_rgba(11,63,145,0.18)] group-hover:scale-[1.04]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#E4B21B]" />
                  </div>
                  <h3 className="mt-5 text-[1.18rem] sm:text-[1.28rem] lg:text-[1.34rem] font-semibold tracking-[-0.03em] text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                  <button className="mt-5 inline-flex items-center gap-2 rounded-full px-1 text-sm font-semibold text-[#0B3F91] transition-all duration-200 ease-out hover:gap-3 focus:outline-none focus:text-[#0A3477] focus:ring-2 focus:ring-[#0B3F91]/15">
                    Saber más <ChevronRight className="h-4 w-4" />
                  </button>
                </Motion.div>
              );
            })}
          </div>
        </section>

        <section id="eventos" className="scroll-mt-24 bg-[linear-gradient(180deg,#0A2458_0%,#0B3F91_100%)] py-16 text-white sm: lg:py-24 xl:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Eventos destacados"
              title="Próximas actividades para compartir, crecer y servir"
              description="Una sección pensada para transmitir actividad real, cercanía institucional y utilidad. El diseño mantiene el tono premium con una jerarquía clara y visualmente sobria."
            />
            <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-3 lg:gap-5">
              {events.map((item) => (
                <article
                  key={item.title}
                  className="rounded-4xl border border-white/10 bg-white/9 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.14)] backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/13 hover:shadow-[0_26px_60px_rgba(0,0,0,0.18)]"
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 text-sm font-medium text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-200 ease-out hover:bg-white/15">
                    <CalendarDays className="h-4 w-4 text-[#F6D36C]" />
                    {item.date}
                  </div>
                  <h3 className="mt-5 text-[1.28rem] sm:text-[1.42rem] lg:text-[1.55rem] font-semibold tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/80">{item.desc}</p>
                  <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 ease-out hover:border-[#F6D36C]/40 hover:text-[#F6D36C] hover:bg-white/[0.14] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-white/25">
                    Reservar mi lugar
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="galeria" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-16 lg:px-8 lg:py-24 xl:py-28">
          <SectionHeading
            eyebrow="Galería"
            title="Vida congregacional, reverencia y comunidad"
            description="La galería se presenta en un grid responsive con apertura en vista ampliada. Aquí se han integrado paneles visuales estilizados para mostrar cómo luciría el sitio final con material fotográfico institucional."
          />

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-5">
            {gallery.map((item) => (
              <button
                key={item.title}
                onClick={() => setSelectedImage(item)}
                className="group relative overflow-hidden rounded-[1.9rem] border border-white/70 text-left shadow-[0_18px_50px_rgba(15,23,42,0.06),0_2px_6px_rgba(15,23,42,0.03)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.09),0_8px_18px_rgba(15,23,42,0.04)] focus:outline-none focus:ring-2 focus:ring-[#0B3F91]/30 focus:ring-offset-2 focus:ring-offset-[#F5F7FB] active:scale-[0.995]"
              >
                <div className={`h-64 bg-linear-to-br ${item.gradient} transition-transform duration-500 ease-out group-hover:scale-[1.03] group-focus-visible:scale-[1.03] sm:h-72`} />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,17,35,0.82),rgba(10,17,35,0.12)_45%,transparent)]" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[1.05rem] sm:text-[1.15rem] font-semibold tracking-[-0.02em] text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/80">{item.desc}</p>
                </div>
                <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/12 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur-sm transition-all duration-200 ease-out group-hover:bg-white/16">
                  Abrir
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.6rem] border border-white/80 bg-[linear-gradient(135deg,#FFFFFF_0%,#F8FBFF_38%,#EEF4FC_100%)] px-5 py-12 text-center sm:px-8 sm:py-14 lg:px-16 lg:py-16 shadow-[0_30px_90px_rgba(11,63,145,0.10),0_4px_12px_rgba(15,23,42,0.04)] transition-all duration-300 ease-out hover:shadow-[0_36px_100px_rgba(11,63,145,0.12),0_8px_20px_rgba(15,23,42,0.05)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(228,178,27,0.18),transparent_24%),radial-gradient(circle_at_18%_80%,rgba(11,63,145,0.10),transparent_24%),radial-gradient(circle_at_90%_24%,rgba(11,63,145,0.09),transparent_18%)]" />
            <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.6),transparent)]" />
            <div className="relative">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#0B3F91]">Bloque central de identidad</p>
              <h2
                className="mt-6 text-[2.3rem] leading-none text-slate-950 sm:text-[3rem] lg:text-[4rem] xl:text-[5rem]"
                style={{
                  fontFamily: '"Georgia", "Times New Roman", serif',
                  fontStyle: "italic",
                }}
              >
                Y Vimos <span className="text-[#0B3F91]">su</span>{" "}
                <span className="bg-linear-to-r from-[#B8860B] via-[#E4B21B] to-[#F7D97B] bg-clip-text text-transparent">
                  Gloria
                </span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-slate-600 sm:text-[17px]">
                Este mensaje se integra como un eje emocional y visual del sitio. Su tratamiento busca conservar la esencia de la referencia original, elevándola a una composición contemporánea, armónica y memorable.
              </p>
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-16 lg:px-8 lg:py-24 xl:py-28">
          <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">
            <div className="rounded-[2.05rem] border border-white/14 bg-[linear-gradient(160deg,#0A2458_0%,#0B3F91_55%,#1259B6_100%)] p-5 text-white shadow-[0_28px_80px_rgba(11,63,145,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_34px_90px_rgba(11,63,145,0.22)] sm:p-7 lg:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">Contacto y ubicación</p>
              <h2 className="mt-4 text-[1.7rem] sm:text-[1.9rem] lg:text-[2rem] font-semibold tracking-[-0.04em]">Queremos recibirte con alegría</h2>
              <p className="mt-4 text-sm leading-7 text-white/82">
                Si deseas visitarnos, resolver una duda o solicitar acompañamiento espiritual, puedes escribirnos y con gusto te responderemos.
              </p>

              <div className="mt-7 space-y-3.5 sm:mt-8 sm:space-y-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4 rounded-[1.15rem] border border-white/12 bg-white/10 p-4 backdrop-blur-md shadow-[0_14px_40px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:bg-white/13 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:rounded-[1.35rem]">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/12 text-[#F6D36C] shadow-[0_10px_24px_rgba(0,0,0,0.10)] transition-all duration-300 ease-out hover:scale-[1.03]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.18em] text-white/65">{item.label}</p>
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noreferrer" : undefined}
                          className="mt-1 inline-flex text-sm font-medium text-white transition-colors duration-200 ease-out hover:text-[#F6D36C] focus:outline-none focus:text-[#F6D36C]"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 overflow-hidden rounded-[1.7rem] border border-white/12 bg-white/8 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.10)] sm:mt-8">
                <div className="h-52 sm:h-60 rounded-[1.3rem] bg-[linear-gradient(135deg,#DCE6F5_0%,#F7FAFF_38%,#A2BDE3_100%)] p-4 text-slate-800">
                  <div className="flex h-full flex-col justify-between rounded-[1.05rem] border border-white/60 bg-white/55 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 ease-out hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-[#0B3F91]">Mapa de ubicación</p>
                      <MapPin className="h-5 w-5 text-[#E4B21B]" />
                    </div>
                    <div className="grid h-full place-items-center">
                      <div className="text-center">
                        <p className="text-[1.45rem] sm:text-[1.8rem] font-semibold tracking-[-0.03em] text-slate-900">{siteConfig.churchName}</p>
                        <p className="mt-2 text-sm text-slate-600">Acceso fácil, zona céntrica y bienvenida desde el primer momento.</p>
                      </div>
                    </div>
                    <a
                      href={siteConfig.mapsHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B3F91] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(11,63,145,0.18)] transition-all duration-200 ease-out hover:bg-[#0A3477] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#0B3F91]/30"
                    >
                      Cómo llegar <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <PremiumCard className="p-7 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0B3F91]">Escríbenos</p>
              <h3 className="mt-4 text-[1.7rem] sm:text-[1.9rem] lg:text-[2rem] font-semibold tracking-[-0.04em] text-slate-950">Estaremos encantados de ayudarte</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Formulario visualmente funcional con validación básica y estados claros. Ideal para presentar una experiencia completa y lista para implementación real.
              </p>

              <form onSubmit={onSubmit} className="mt-7 space-y-4 sm:mt-8 sm:space-y-5">
                <div>
                  <label htmlFor="nombre" className="mb-2 block text-sm font-medium text-slate-700">
                    Nombre completo
                  </label>
                  <input
                    id="nombre"
                    value={form.nombre}
                    onChange={(e) => setForm((s) => ({ ...s, nombre: e.target.value }))}
                    onBlur={() => setTouched((s) => ({ ...s, nombre: true }))}
                    className={`w-full rounded-2xl border bg-slate-50/80 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-200 ease-out focus:bg-white focus:ring-4 focus:shadow-[0_10px_26px_rgba(15,23,42,0.06)] placeholder:text-slate-400 sm:rounded-[1.2rem] ${
                      touched.nombre && errors.nombre
                        ? "border-rose-300 focus:ring-rose-100"
                        : "border-slate-200 focus:border-[#0B3F91] focus:ring-[#0B3F91]/10"
                    }`}
                    placeholder="Escribe tu nombre"
                  />
                  {touched.nombre && errors.nombre && <p className="mt-2 text-sm text-rose-600">{errors.nombre}</p>}
                </div>

                <div>
                  <label htmlFor="correo" className="mb-2 block text-sm font-medium text-slate-700">
                    Correo electrónico
                  </label>
                  <input
                    id="correo"
                    type="email"
                    value={form.correo}
                    onChange={(e) => setForm((s) => ({ ...s, correo: e.target.value }))}
                    onBlur={() => setTouched((s) => ({ ...s, correo: true }))}
                    className={`w-full rounded-2xl border bg-slate-50/80 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-200 ease-out focus:bg-white focus:ring-4 focus:shadow-[0_10px_26px_rgba(15,23,42,0.06)] placeholder:text-slate-400 sm:rounded-[1.2rem] ${
                      touched.correo && errors.correo
                        ? "border-rose-300 focus:ring-rose-100"
                        : "border-slate-200 focus:border-[#0B3F91] focus:ring-[#0B3F91]/10"
                    }`}
                    placeholder="nombre@correo.com"
                  />
                  {touched.correo && errors.correo && <p className="mt-2 text-sm text-rose-600">{errors.correo}</p>}
                </div>

                <div>
                  <label htmlFor="mensaje" className="mb-2 block text-sm font-medium text-slate-700">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    rows={6}
                    value={form.mensaje}
                    onChange={(e) => setForm((s) => ({ ...s, mensaje: e.target.value }))}
                    onBlur={() => setTouched((s) => ({ ...s, mensaje: true }))}
                    className={`w-full rounded-2xl border bg-slate-50/80 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-200 ease-out focus:bg-white focus:ring-4 focus:shadow-[0_10px_26px_rgba(15,23,42,0.06)] placeholder:text-slate-400 sm:rounded-[1.2rem] ${
                      touched.mensaje && errors.mensaje
                        ? "border-rose-300 focus:ring-rose-100"
                        : "border-slate-200 focus:border-[#0B3F91] focus:ring-[#0B3F91]/10"
                    }`}
                    placeholder="Queremos conocerte. Cuéntanos cómo podemos ayudarte."
                  />
                  {touched.mensaje && errors.mensaje && <p className="mt-2 text-sm text-rose-600">{errors.mensaje}</p>}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B3F91] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(11,63,145,0.22)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#0A3477] active:translate-y-0 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#0B3F91]/30 focus:ring-offset-2 focus:ring-offset-white"
                  >
                    Enviar mensaje <ChevronRight className="h-4 w-4" />
                  </button>
                  <a
                    href={siteConfig.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition-all duration-200 ease-out hover:border-[#0B3F91]/20 hover:text-[#0B3F91] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#0B3F91]/20 focus:ring-offset-2 focus:ring-offset-white"
                  >
                    Hablar por WhatsApp
                  </a>
                </div>

                <AnimatePresence>
                  {submitted && (
                    <Motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 shadow-[0_10px_24px_rgba(16,185,129,0.08)] sm:rounded-[1.2rem]"
                    >
                      Tu mensaje ha sido preparado correctamente. En una implementación real, este formulario quedaría listo para conectarse al backend o servicio de correo.
                    </Motion.div>
                  )}
                </AnimatePresence>
              </form>
            </PremiumCard>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/70 bg-white/82 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/50 bg-white p-1.5 shadow-[0_14px_34px_rgba(11,63,145,0.14)] transition-transform duration-300 ease-out hover:scale-[1.03]">
                <img
                  src={brandAssets.primaryLogo}
                  alt={`Logo principal de ${siteConfig.churchName}`}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.28em] text-[#0B3F91]">IGLESIA CRISTIANA</p>
                <p className="text-xs text-slate-500">{siteConfig.location}</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              Un diseño one-page premium, cálido y reverente, concebido para comunicar confianza, identidad espiritual y una experiencia moderna de presentación institucional.
            </p>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-900">Enlaces rápidos</p>
            <div className="mt-4 space-y-3">
              {navItems.map((item) => (
                <SmoothAnchor
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-slate-600 transition-all duration-200 ease-out hover:translate-x-0.5 hover:text-[#0B3F91] focus:outline-none focus:text-[#0B3F91]"
                >
                  {item.label}
                </SmoothAnchor>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-900">Síguenos</p>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((item) => (
                <SocialIconLink
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  icon={item.Icon}
                />
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              <a href={siteConfig.emailHref} className="transition-colors duration-200 ease-out hover:text-[#0B3F91]">
                {siteConfig.email}
              </a>{" "}
              ·{" "}
              <a href={siteConfig.phoneHref} className="transition-colors duration-200 ease-out hover:text-[#0B3F91]">
                {siteConfig.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-slate-200/80 px-4 py-4 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
          © 2026 IPUE Mula. Todos los derechos reservados.
        </div>
      </footer>

      <AnimatePresence>
        {selectedImage && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-70 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <Motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_28px_90px_rgba(0,0,0,0.25)] sm:rounded-4xl"
            >
              <div className={`h-60 bg-linear-to-br ${selectedImage.gradient} sm:h-80 lg:h-96`} />
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[1.35rem] sm:text-[1.6rem] lg:text-[1.8rem] font-semibold tracking-[-0.03em] text-slate-950">{selectedImage.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{selectedImage.desc}</p>
                  </div>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.05)] transition-all duration-200 ease-out hover:text-[#0B3F91] hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#0B3F91]/20"
                    aria-label="Cerrar imagen"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
