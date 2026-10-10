import { useState, useEffect, useRef } from 'react'

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
  { t: 'The Summer Invitational', c: 'Esports', role: 'Organizer', d: 'I organized this interschool tournament, bringing teams from different schools together.' },
  { t: 'Imaginators Convention', c: 'Events', role: 'Student organizer', d: 'One of the student organizers who helped make the convention happen.' },
  { t: 'CESAFI robotics competition', c: 'Robotics', role: 'Competitor', d: 'I competed in the CESAFI robotics competition.' },
  { t: 'Founded a robotics organization', c: 'Robotics', role: 'Founder', d: 'I started the robotics organization at my previous school, University of Cebu.' },
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

const SECTION_IDS = ['top', ...NAV_LINKS.map((x) => x.toLowerCase())]

// Tells which section is in the middle of the screen, so the nav can highlight it
function useActiveSection(ids) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id === 'top' ? '' : en.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    els.forEach((el) => io.observe(el))
    // The last section may never reach the middle band, so handle the very bottom of the page
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) setActive('contact')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [ids])
  return active
}

const BAR = 'block h-0.5 w-5 rounded-full bg-ink transition-transform duration-150'

function Nav({ dark, toggle, active }) {
  const [open, setOpen] = useState(false)

  // Let Escape close the mobile menu
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-20 bg-bg">
      <nav className={WRAP + ' flex flex-wrap items-center justify-between gap-4 py-[18px]'} aria-label="Main">
        <a className="font-display text-[1.3rem] font-semibold no-underline" href="#top">Francis Benedict Gaviola</a>
        <div className="flex flex-wrap items-center gap-5 max-[760px]:contents">
          <ul
            id="nav-menu"
            className={
              'm-0 flex list-none gap-5 p-0 max-[760px]:order-4 max-[760px]:w-full max-[760px]:flex-col max-[760px]:gap-0 max-[760px]:rounded-[18px] max-[760px]:border-2 max-[760px]:border-line max-[760px]:bg-card max-[760px]:px-4 max-[760px]:py-2' +
              (open ? '' : ' max-[760px]:hidden')
            }
          >
            {NAV_LINKS.map((x) => (
              <li key={x}>
                <a
                  className="font-semibold no-underline hover:underline hover:decoration-accent hover:underline-offset-[5px] aria-[current=location]:text-accent aria-[current=location]:underline aria-[current=location]:decoration-accent aria-[current=location]:underline-offset-[5px] max-[760px]:block max-[760px]:py-2"
                  href={'#' + x.toLowerCase()}
                  aria-current={active === x.toLowerCase() ? 'location' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {x}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="cursor-pointer rounded-full border-2 border-line bg-card px-3.5 py-[5px] font-semibold max-[760px]:order-2 max-[760px]:ml-auto"
            onClick={toggle}
            aria-pressed={dark}
          >
            {dark ? 'Light mode' : 'Dark mode'}
          </button>
          <button
            className="hidden cursor-pointer flex-col gap-1 rounded-full border-2 border-line bg-card px-3 py-2.5 max-[760px]:order-3 max-[760px]:flex"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span aria-hidden="true" className={BAR + (open ? ' translate-y-1.5 rotate-45' : '')} />
            <span aria-hidden="true" className={BAR + (open ? ' opacity-0' : '')} />
            <span aria-hidden="true" className={BAR + (open ? ' -translate-y-1.5 -rotate-45' : '')} />
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

// Pop-up with more details about one highlight. Add a photos: ['/photo1.jpg'] list to an item to show pictures.
function HighlightModal({ item, onClose }) {
  const ref = useRef(null)
  useEffect(() => {
    const dialog = ref.current
    if (!dialog.open) dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])
  return (
    <dialog
      ref={ref}
      className="m-auto max-h-[85vh] w-[min(92vw,560px)] overflow-auto rounded-[22px] border-2 border-accent bg-card p-0 text-ink backdrop:bg-black/50"
      aria-labelledby="highlight-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close()
      }}
    >
      <div className="flex flex-col gap-3 p-6">
        <span className="self-start rounded-full bg-soft px-3 py-0.5 text-[.85rem] font-bold">{item.c}</span>
        <h3 id="highlight-title" className="font-display text-[1.6rem] font-medium leading-tight">{item.t}</h3>
        <p className="font-bold text-accent">My role: {item.role}</p>
        <p className="text-muted">{item.d}</p>
        {item.photos && item.photos.length > 0 ? (
          <div className="grid grid-cols-2 gap-2.5">
            {item.photos.map((src, i) => (
              <img
                className="aspect-[4/3] w-full rounded-[14px] object-cover"
                key={src}
                src={src}
                alt={item.t + ' photo ' + (i + 1)}
              />
            ))}
          </div>
        ) : (
          <div className="grid h-36 place-items-center rounded-[18px] border-2 border-dashed border-line bg-soft text-muted">
            Photos coming soon
          </div>
        )}
        <button className={BTN + ' self-start bg-accent text-onaccent'} onClick={() => ref.current.close()}>
          Close
        </button>
      </div>
    </dialog>
  )
}

function Highlights() {
  const [cat, setCat] = useState('All')
  const [selected, setSelected] = useState(null)
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
            <button
              className="mt-auto cursor-pointer self-start rounded-full border-2 border-accent bg-transparent px-4 py-1 text-[.9rem] font-bold transition-transform duration-[120ms] ease-[ease] hover:-translate-y-0.5"
              onClick={() => setSelected(p)}
              aria-haspopup="dialog"
            >
              View details
            </button>
          </article>
        ))}
      </div>
      {selected && <HighlightModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}

const FIELD =
  'w-full rounded-[14px] border-2 border-onaccent bg-transparent px-3.5 py-2 text-onaccent placeholder:opacity-70 focus-visible:outline-onaccent'
const ACTION = 'cursor-pointer rounded-full border-2 border-onaccent px-[18px] py-1.5 font-bold'

function Contact() {
  const [msg, setMsg] = useState('')
  const [name, setName] = useState('')
  const [note, setNote] = useState('')
  const copy = (email) => {
    try {
      navigator.clipboard.writeText(email).then(
        () => setMsg('Copied ' + email),
        () => setMsg('Copy failed. Please copy it by hand.')
      )
    } catch (e) {
      setMsg('Copy failed. Please copy it by hand.')
    }
  }
  // Opens the visitor's email app with the message prefilled (nothing is sent from this site)
  const send = (e) => {
    e.preventDefault()
    const subject = 'Portfolio message from ' + name.trim()
    const body = note.trim() + '\n\n' + name.trim()
    window.location.href =
      'mailto:' + EMAILS[0] + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)
    setMsg('Opening your email app…')
  }
  return (
    <section className={SECTION} id="contact">
      <div className="grid grid-cols-[1.1fr_1fr] gap-7 rounded-[30px] bg-accent p-10 text-onaccent max-[760px]:grid-cols-1 max-[760px]:p-[26px]">
        <div>
          <h2 className="mb-2.5 font-display text-[clamp(1.6rem,4vw,2.3rem)] font-semibold">Let’s connect!</h2>
          <p className="mb-1.5">Want to collaborate on an event, a tournament, or a project? Message me.</p>
          <div className="mt-2.5 grid gap-2 font-bold">
            {EMAILS.map((e) => (
              <div className="flex flex-wrap items-center gap-3" key={e}>
                <a className="break-all underline" href={'mailto:' + e}>{e}</a>
                <button
                  className={ACTION + ' bg-transparent py-0.5 text-[.9rem] text-onaccent focus-visible:outline-onaccent'}
                  onClick={() => copy(e)}
                  aria-label={'Copy ' + e}
                >
                  Copy
                </button>
              </div>
            ))}
          </div>
          <form className="mt-5 grid gap-3" onSubmit={send}>
            <label className="grid gap-1 font-bold">
              Your name
              <input
                className={FIELD + ' font-normal'}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Juan Dela Cruz"
                required
              />
            </label>
            <label className="grid gap-1 font-bold">
              Message
              <textarea
                className={FIELD + ' min-h-28 resize-y font-normal'}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Tell me about your event, tournament, or project"
                required
              />
            </label>
            <button
              className={ACTION + ' justify-self-start bg-onaccent text-accent focus-visible:outline-onaccent'}
              type="submit"
            >
              Message me
            </button>
          </form>
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

  const active = useActiveSection(SECTION_IDS)

  return (
    <>
      <Nav dark={dark} toggle={() => setDark(!dark)} active={active} />
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