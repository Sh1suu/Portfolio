# Francis Benedict Gaviola | Portfolio

Personal portfolio website built with React, Vite and Tailwind CSS.

## Features

- Light and dark theme toggle that remembers your choice
- Responsive layout with a mobile hamburger menu
- Sticky nav bar that highlights the section you are viewing
- Highlights section with category filters and a details pop-up
- Contact section with copy buttons and a message form that opens a prefilled email
- Back-to-top button and fade-in animations on scroll (respects reduced motion)

## Tech stack

- React 19
- Vite
- Tailwind CSS v3 (with PostCSS and Autoprefixer)

## Run it locally

```bash
npm install
npm run dev
```

To make a production build:

```bash
npm run build
```

## Class diagram

Components marked "new" were added in the second activity.

```mermaid
classDiagram
    direction LR

    class App {
        <<component>>
        -dark boolean
        -active string
        +toggleTheme()
        +syncTheme()
    }
    class Nav {
        <<component>>
        -open boolean
        +props dark, toggle, active
        +toggleMenu()
    }
    class Hero {
        <<component>>
        -photo string
        +render()
    }
    class About {
        <<component>>
        -games string[]
        -skills Skill[]
        +render()
    }
    class Orgs {
        <<component>>
        -orgs Org[]
        +render()
    }
    class Highlights {
        <<component>>
        -cat string
        -selected Highlight
        -list Highlight[]
        +setCat(cat)
        +openDetails(item)
    }
    class HighlightModal {
        <<component, new>>
        +props item, onClose
        -ref dialog
        +showModal()
        +close()
    }
    class Contact {
        <<component>>
        -msg string
        -name string
        -note string
        +copy(email)
        +send(event)
    }
    class BackToTop {
        <<component, new>>
        -visible boolean
        +onScroll()
        +scrollToTop()
    }
    class Hooks {
        <<hooks, new>>
        +useActiveSection() string
        +useReveal() ref, shown
    }
    class PortfolioData {
        <<constants>>
        PHOTO
        EMAILS
        LINKS
        NAV_LINKS
        SKILLS
        ORGS
        GAMES
        HIGHLIGHTS
        CATS
    }

    App *-- Nav
    App *-- Hero
    App *-- About
    App *-- Orgs
    App *-- Highlights
    App *-- Contact
    App *-- BackToTop
    Highlights *-- HighlightModal

    Nav ..> PortfolioData : uses
    Hero ..> PortfolioData : uses
    About ..> PortfolioData : uses
    Orgs ..> PortfolioData : uses
    Highlights ..> PortfolioData : uses
    Contact ..> PortfolioData : uses

    App ..> Hooks : useActiveSection
    About ..> Hooks : useReveal
    Orgs ..> Hooks : useReveal
    Highlights ..> Hooks : useReveal
    Contact ..> Hooks : useReveal
```