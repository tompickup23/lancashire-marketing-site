import { Link } from 'react-router-dom'
import {
  campaignMoments,
  keyStats,
  productSignals,
  researchDocuments,
  spotlightPoints,
} from '../data/siteContent'

export function HomePage() {
  return (
    <>
      <section className="surface hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">County brand platform</p>
          <h1 className="hero-title">Lancashire, packaged for the web.</h1>
          <p className="lede">
            This repo turns the current Lancashire tourism, civic-pride,
            borough-level, division-level and public-talent research into a
            website that is easier to scan, share and publish. It keeps the
            source markdown intact while adding a clearer overview, a readable
            document layer and a searchable geography view.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/divisions">
              Browse division data
            </Link>
            <Link
              className="button button-secondary"
              to={`/research/${researchDocuments[0].slug}`}
            >
              Open the strategy
            </Link>
          </div>
        </div>

        <div className="hero-side">
          <div className="highlight-card">
            <span className="pill">Why this matters</span>
            <h2 className="mini-heading">One county, multiple proof layers.</h2>
            <p>
              The strongest Lancashire story here is not just landscape. It is
              <strong> coast + food + culture + proud towns + future momentum</strong>,
              with borough, division and public-talent planning data underneath it.
            </p>
            <div className="pill-row">
              <span className="pill">Tourism</span>
              <span className="pill">Economic development</span>
              <span className="pill">Civic pride</span>
              <span className="pill">GitHub Pages-ready</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-header">
          <div>
            <h2 className="section-title">Key proof points</h2>
            <p className="section-copy">
              These are the headline numbers and planning anchors surfaced through
              the current official Lancashire material.
            </p>
          </div>
        </div>
        <div className="metric-grid">
          {keyStats.map((stat) => (
            <article className="surface stat-card" key={stat.label}>
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-note">{stat.note}</div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="section-header">
          <div>
            <h2 className="section-title">Research stack</h2>
            <p className="section-copy">
              The site is driven directly from the markdown research files, so the
              narrative layer and the raw analysis stay in sync.
            </p>
          </div>
        </div>
        <div className="doc-grid">
          {researchDocuments.map((document) => (
            <article className="surface doc-card" key={document.slug}>
              <div className="pill">{document.kicker}</div>
              <h3 className="doc-card-title">{document.title}</h3>
              <p className="doc-copy">{document.description}</p>
              <div className="tag-row">
                {document.highlights.map((highlight) => (
                  <span className="tag" key={highlight}>
                    {highlight}
                  </span>
                ))}
              </div>
              <div className="card-actions">
                <Link
                  className="button button-secondary"
                  to={`/research/${document.slug}`}
                >
                  Open document
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="section-header">
          <div>
            <h2 className="section-title">2026 and 2027 campaign hooks</h2>
            <p className="section-copy">
              The current research points to a clear rhythm: 2026 builds food,
              coast, glamour and future momentum; 2027 adds genuine global
              attention through cycling and Morecambe-led place change.
            </p>
          </div>
        </div>
        <div className="moment-grid">
          {campaignMoments.map((moment) => (
            <article className="surface moment-card" key={moment.title}>
              <div className="moment-year">{moment.year}</div>
              <h3 className="moment-title">{moment.title}</h3>
              <div className="moment-meta">
                <span className="pill">{moment.timing}</span>
                <span className="pill">{moment.division}</span>
              </div>
              <p className="moment-copy">{moment.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel-grid">
        <div className="surface search-panel">
          <div className="section-header">
            <div>
              <h2 className="section-title">Lancashire-branded products</h2>
              <p className="section-copy">
                The strongest place brands live in cupboards, hampers, hotel rooms
                and menus as much as they do in advertising.
              </p>
            </div>
          </div>
          <div className="spotlight-grid">
            {productSignals.map((product) => (
              <article className="spotlight-card" key={product.title}>
                <h3 className="spotlight-title">{product.title}</h3>
                <p className="spotlight-copy">{product.note}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="stack">
          {spotlightPoints.map((point) => (
            <article className="surface spotlight-card" key={point.title}>
              <h3 className="spotlight-title">{point.title}</h3>
              <p className="spotlight-copy">{point.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
