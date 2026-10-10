import { useState, useEffect } from 'react'

// Put your photo in the "public" folder (for example public/photo.jpg), then set this to '/photo.jpg'
const PHOTO = ''
const EMAILS = ['gaviolabenedict@gmail.com', 'francisbenedict.gaviola@cit.edu']
// Replace each link with your real profile address
const LINKS = [
  ['GitHub', 'https://github.com/'],
  ['LinkedIn', 'https://www.linkedin.com/'],
  ['Facebook', 'https://www.facebook.com/'],
  ['Instagram', 'https://www.instagram.com/'],
  ['LeetCode', 'https://leetcode.com/'],
]
const SKILLS = [
  ['Leadership', 'Leading teams and organizations, from esports to robotics.'],
  ['Communication', 'I love meeting people and bringing them together.'],
  ['Games', 'Competitive and casual, and I enjoy organizing them for others.'],
]
const ORGS = [
  { t: 'Wildcats Esports League', d: 'President, A.Y. 2026-2027. I organize tournaments and build teams to compete in national games.', main: true },
  { t: 'Computer Students Society', d: 'Active member, working with fellow computer students on school activities.' },
  { t: 'Rotaract Club', d: 'Active member, taking part in service and community projects.' },
]
const GAMES = ['Valorant', 'Mobile Legends', 'Call of Duty: Mobile', 'Dota', 'Honor of Kings']
const HIGHLIGHTS = [
  { t: 'The Summer Invitational', c: 'Esports', d: 'I organized this interschool tournament, bringing teams from different schools together.' },
  { t: 'Imaginators Convention', c: 'Events', d: 'One of the student organizers who helped make the convention happen.' },
  { t: 'CESAFI robotics competition', c: 'Robotics', d: 'I competed in the CESAFI robotics competition.' },
  { t: 'Founded a robotics organization', c: 'Robotics', d: 'I started the robotics organization at my previous school, University of Cebu.' },
]
const CATS = ['All', 'Esports', 'Robotics', 'Events']
const NAV_LINKS = ['About', 'Orgs', 'Highlights', 'Contact']

// Shared Tailwind class groups (kept as full strings so Tailwind can detect them)
const WRAP = 'mx-auto max-w-[1040px] px-5'
const SECTION = 'mx-auto max-w-[1040px] px-5 py-[52px]'
const TITLE = 'mb-[22px] font-display text-[clamp(1.7rem,4.5vw,2.5rem)] font-semibold tracking-[-.01em]'
const PILL = 'rounded-full border-2 border-line bg-card px-4 py-1.5 font-semibold'
const BTN =
  'inline-block cursor-pointer rounded-full border-2 border-accent px-6 py-[11px] font-bold no-underline transition-transform duration-[120ms] ease-[ease] hover:-translate-y-0.5'
const CARD = 'flex flex-col gap-2 rounded-[22px] border-2 p-[22px]'
const GRID = 'grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[18px]'

function Nav({ dark, toggle }) {
  return (
    <header className={WRAP}>
      <nav className="flex flex-wrap items-center justify-between gap-4 py-[18px]" aria-label="Main">
        <a className="font-display text-[1.3rem] font-semibold no-underline" href="#top">Francis Benedict Gaviola</a>
        <div className="flex flex-wrap items-center gap-5">
          <ul className="m-0 flex list-none gap-5 p-0">
            {NAV_LINKS.map((x) => (
              <li key={x}>
                <a
                  className="font-semibold no-underline hover:underline hover:decoration-accent hover:underline-offset-[5px]"
                  href={'#' + x.toLowerCase()}
                >
                  {x}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="cursor-pointer rounded-full border-2 border-line bg-card px-3.5 py-[5px] font-semibold"
            onClick={toggle}
            aria-pressed={dark}
          >
            {dark ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section
      className="mx-auto grid max-w-[1040px] grid-cols-[1.2fr_.8fr] items-center gap-10 px-5 pb-16 pt-9 max-[760px]:grid-cols-1 max-[760px]:pt-4"
      id="top"
    >
      <div>
        <h1 className="mb-2 font-display text-[clamp(2.4rem,7vw,4.6rem)] font-semibold leading-[1.02] tracking-[-.02em]">
          Hi, I’m Francis!
        </h1>
        <p className="mb-4 text-[1.1rem] font-bold text-accent">President, Wildcats Esports League • CIT-U</p>
        <p className="mb-[26px] max-w-[48ch] text-muted">
          I’m a friendly, outgoing 3rd-year student at Cebu Institute of Technology - University.
          I love bringing people together, whether it’s for a game, a robot, or a big event.
        </p>
        <div className="flex flex-wrap gap-3">
          <a className={BTN + ' bg-accent text-onaccent'} href="#highlights">See what I’ve done</a>
          <a className={BTN + ' bg-transparent'} href="#contact">Say hi</a>
        </div>
      </div>
      <div className="relative w-[min(100%,340px)] justify-self-center">
        <div className="grid aspect-[4/5] place-items-center overflow-hidden rounded-[999px_999px_28px_28px] border-[3px] border-accent bg-arch p-6 text-center">
          {PHOTO ? (
            <img className="-m-6 block h-full w-full object-cover" src={PHOTO} alt="Francis Benedict Gaviola" />
          ) : (
            <div>
              <b className="block font-display text-[4rem] leading-none text-accent">FG</b>
              <span className="text-[.95rem] font-semibold text-muted">Your photo goes here</span>
            </div>
          )}
        </div>
        <span className="absolute -left-3.5 bottom-[22%] rounded-full border-2 border-line bg-card px-3.5 py-1.5 text-[.9rem] font-bold shadow-[0_4px_0_var(--line)] max-[760px]:left-0">Esports</span>
        <span className="absolute -right-2.5 bottom-[6%] rounded-full border-2 border-line bg-card px-3.5 py-1.5 text-[.9rem] font-bold shadow-[0_4px_0_var(--line)] max-[760px]:right-0">Robotics</span>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className={SECTION} id="about">
      <h2 className={TITLE}>About me</h2>
      <div className="grid grid-cols-[1.4fr_1fr] gap-9 max-[760px]:grid-cols-1">
        <div>
          <p className="mb-3.5 max-w-[56ch]">
            I’m Francis Benedict B. Gaviola, but most people call me Sh1su online. I’m the kind of
            person who thrives around people, and I’m happiest when I’m helping a group do something
            great together.
          </p>
          <p className="mb-3.5 max-w-[56ch]">
            I’m involved in many organizations, and I enjoy leading teams and organizing events. I
            love games, and I play and help run tournaments in:
          </p>
          <div className="mt-1.5 flex flex-wrap gap-2.5">
            {GAMES.map((g) => <span className={PILL} key={g}>{g}</span>)}
          </div>
        </div>
        <div className="grid content-start gap-3">
          {SKILLS.map(([name, desc]) => (
            <div className="rounded-[18px] border-2 border-line bg-card px-[18px] py-3.5" key={name}>
              <b className="block font-display text-[1.1rem] font-medium">{name}</b>
              <span className="text-[.95rem] text-muted">{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Orgs() {
  return (
    <section className={SECTION} id="orgs">
      <h2 className={TITLE}>Organizations</h2>
      <div className={GRID}>
        {ORGS.map((o) => (
          <article className={CARD + (o.main ? ' border-accent bg-card-main' : ' border-line bg-card')} key={o.t}>
            <h3 className="font-display text-[1.25rem] font-medium leading-tight">{o.t}</h3>
            <p className="text-[.98rem] text-muted">{o.d}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Highlights() {
  const [cat, setCat] = useState('All')
  const list = HIGHLIGHTS.filter((p) => cat === 'All' || p.c === cat)
  return (
    <section className={SECTION} id="highlights">
      <h2 className={TITLE}>Highlights</h2>
      <div className="mb-5 flex flex-wrap gap-2" role="group" aria-label="Filter highlights">
        {CATS.map((c) => (
          <button
            className={PILL + ' cursor-pointer aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-onaccent'}
            key={c}
            aria-pressed={c === cat}
            onClick={() => setCat(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className={GRID}>
        {list.map((p) => (
          <article className={CARD + ' border-line bg-card'} key={p.t}>
            <span className="self-start rounded-full bg-soft px-3 py-0.5 text-[.85rem] font-bold">{p.c}</span>
            <h3 className="font-display text-[1.25rem] font-medium leading-tight">{p.t}</h3>
            <p className="text-[.98rem] text-muted">{p.d}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [msg, setMsg] = useState('')
  const copy = () => {
    try {
      navigator.clipboard.writeText(EMAILS[0]).then(
        () => setMsg('Email copied.'),
        () => setMsg('Copy failed. Please copy it by hand.')
      )
    } catch (e) {
      setMsg('Copy failed. Please copy it by hand.')
    }
  }
  return (
    <section className={SECTION} id="contact">
      <div className="grid grid-cols-[1.1fr_1fr] gap-7 rounded-[30px] bg-accent p-10 text-onaccent max-[760px]:grid-cols-1 max-[760px]:p-[26px]">
        <div>
          <h2 className="mb-2.5 font-display text-[clamp(1.6rem,4vw,2.3rem)] font-semibold">Let’s connect!</h2>
          <p className="mb-1.5">Want to collaborate on an event, a tournament, or a project? Message me.</p>
          <div className="mt-2.5 grid gap-2 font-bold">
            {EMAILS.map((e) => (
              <a className="break-all underline" key={e} href={'mailto:' + e}>{e}</a>
            ))}
          </div>
          <button
            className="mt-3 cursor-pointer rounded-full border-2 border-onaccent bg-transparent px-[18px] py-1.5 font-bold text-onaccent"
            onClick={copy}
          >
            Copy my email
          </button>
          <span className="mt-2 block text-[.95rem]" role="status">{msg}</span>
        </div>
        <div className="flex flex-wrap content-start gap-2.5">
          {LINKS.map(([name, url]) => (
            <a
              className="rounded-full bg-onaccent px-[18px] py-2 font-bold text-accent no-underline hover:-translate-y-0.5 dark:bg-[#1F1739] dark:text-[#B79CFF]"
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [dark, setDark] = useState(() => {
    try {
      const t = localStorage.getItem('theme')
      if (t) return t === 'dark'
    } catch (e) {}
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch (e) {}
  }, [dark])

  return (
    <>
      <Nav dark={dark} toggle={() => setDark(!dark)} />
      <main>
        <Hero />
        <About />
        <Orgs />
        <Highlights />
        <Contact />
      </main>
      <footer className={WRAP + ' text-muted'}>© 2026 Francis Benedict B. Gaviola. Built with React and CSS.</footer>
    </>
  )
}
