import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { researchDocuments } from '../data/siteContent'

type SiteFrameProps = {
  children: ReactNode
}

const primaryLinks = [
  { to: '/', label: 'Overview' },
  { to: '/divisions', label: 'Divisions' },
  { to: `/research/${researchDocuments[0].slug}`, label: 'Strategy' },
  { to: `/research/${researchDocuments[1].slug}`, label: 'Footage' },
]

export function SiteFrame({ children }: SiteFrameProps) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand-lockup" to="/">
            <span className="brand-rose" aria-hidden="true" />
            <span className="brand-copy">
              <span className="brand-name">Lancashire Marketing Project</span>
              <span className="brand-subtitle">
                Civic pride, tourism and ward-level research
              </span>
            </span>
          </Link>
          <nav className="header-nav" aria-label="Primary">
            {primaryLinks.map((item) => (
              <NavLink
                key={item.to}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="page-wrap">
        <div className="page-stack">{children}</div>
      </main>

      <footer className="site-footer">
        <div className="surface footer-panel">
          Built from the Lancashire research markdown so it can be read locally,
          pushed to GitHub and published on GitHub Pages without restructuring the
          source material.
        </div>
      </footer>
    </div>
  )
}
