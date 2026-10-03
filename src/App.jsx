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

function Nav({ dark, toggle }) {
  return (
    <header className="wrap">
      <nav className="nav" aria-label="Main">
        <a className="logo" href="#top">Francis Benedict Gaviola</a>
        <div className="nav-r">
          <ul>
            {NAV_LINKS.map((x) => (
              <li key={x}><a href={'#' + x.toLowerCase()}>{x}</a></li>
            ))}
          </ul>
          <button className="theme" onClick={toggle} aria-pressed={dark}>
            {dark ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div>
        <h1>Hi, I’m Francis!</h1>
        <p className="role">President, Wildcats Esports League • CIT-U</p>
        <p className="intro">
          I’m a friendly, outgoing 3rd-year student at Cebu Institute of Technology - University.
          I love bringing people together, whether it’s for a game, a robot, or a big event.
        </p>
        <div className="cta">
          <a className="btn fill" href="#highlights">See what I’ve done</a>
          <a className="btn" href="#contact">Say hi</a>
        </div>
      </div>
      <div className="photo">
        <div className="arch">
          {PHOTO ? (
            <img src={PHOTO} alt="Francis Benedict Gaviola" />
          ) : (
            <div><b>FG</b><span>Your photo goes here</span></div>
          )}
        </div>
        <span className="badge b1">Esports</span>
        <span className="badge b2">Robotics</span>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="wrap s" id="about">
      <h2 className="title">About me</h2>
      <div className="about">
        <div>
          <p>
            I’m Francis Benedict B. Gaviola, but most people call me Sh1su online. I’m the kind of
            person who thrives around people, and I’m happiest when I’m helping a group do something
            great together.
          </p>
          <p>
            I’m involved in many organizations, and I enjoy leading teams and organizing events. I
            love games, and I play and help run tournaments in:
          </p>
          <div className="games">
            {GAMES.map((g) => <span className="game" key={g}>{g}</span>)}
          </div>
        </div>
        <div className="skills">
          {SKILLS.map(([name, desc]) => (
            <div className="skill" key={name}><b>{name}</b><span>{desc}</span></div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Orgs() {
  return (
    <section className="wrap s" id="orgs">
      <h2 className="title">Organizations</h2>
      <div className="grid">
        {ORGS.map((o) => (
          <article className={'card' + (o.main ? ' main' : '')} key={o.t}>
            <h3>{o.t}</h3>
            <p>{o.d}</p>
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
    <section className="wrap s" id="highlights">
      <h2 className="title">Highlights</h2>
      <div className="chips" role="group" aria-label="Filter highlights">
        {CATS.map((c) => (
          <button key={c} aria-pressed={c === cat} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <div className="grid">
        {list.map((p) => (
          <article className="card" key={p.t}>
            <span className="tag">{p.c}</span>
            <h3>{p.t}</h3>
            <p>{p.d}</p>
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
    <section className="wrap s" id="contact">
      <div className="contact">
        <div>
          <h2>Let’s connect!</h2>
          <p>Want to collaborate on an event, a tournament, or a project? Message me.</p>
          <div className="mail">
            {EMAILS.map((e) => (
              <a key={e} href={'mailto:' + e} style={{ color: 'inherit' }}>{e}</a>
            ))}
          </div>
          <button className="copy" onClick={copy}>Copy my email</button>
          <span className="msg" role="status">{msg}</span>
        </div>
        <div className="links">
          {LINKS.map(([name, url]) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer">{name}</a>
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
      <footer className="wrap">© 2026 Francis Benedict B. Gaviola. Built with React and CSS.</footer>
    </>
  )
}