import { useDeferredValue, useEffect, useState } from 'react'
import { parseDivisionMarkdown, type DivisionAvailability } from '../lib/parseDivisions'

const availabilityFilters: Array<DivisionAvailability | 'All'> = [
  'All',
  'Strong',
  'Medium',
  'Low',
]

export function DivisionsPage() {
  const [divisions, setDivisions] = useState(() =>
    parseDivisionMarkdown(''),
  )
  const [query, setQuery] = useState('')
  const [availability, setAvailability] = useState<DivisionAvailability | 'All'>(
    'All',
  )
  const deferredQuery = useDeferredValue(query.trim().toLowerCase())

  useEffect(() => {
    let cancelled = false

    import(
      '../../content/lancashire_county_council_division_footage_breakdown.md?raw'
    ).then((module) => {
      if (!cancelled) {
        setDivisions(parseDivisionMarkdown(module.default))
      }
    })

    return () => {
      cancelled = true
    }
  }, [])

  const filteredDivisions = divisions.filter((division) => {
    const matchesAvailability =
      availability === 'All' || division.availability === availability
    const matchesQuery =
      deferredQuery.length === 0 ||
      division.name.toLowerCase().includes(deferredQuery) ||
      division.description.toLowerCase().includes(deferredQuery) ||
      division.sourceLabels.some((label) =>
        label.toLowerCase().includes(deferredQuery),
      )

    return matchesAvailability && matchesQuery
  })

  return (
    <>
      <section className="surface hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Division explorer</p>
          <h1 className="hero-title">Ward-level grounding without losing the county story.</h1>
          <p className="lede">
            This view pulls the current Lancashire County Council division research
            into something easier to search and plan against. Use it for local
            cutdowns, partner outreach, production planning and route-based
            campaign work.
          </p>
        </div>

        <div className="hero-side">
          <article className="highlight-card">
            <span className="pill">Coverage</span>
            <h2 className="mini-heading">
              {filteredDivisions.length} of {divisions.length} divisions shown
            </h2>
            <p>
              Availability is carried over from the research pack:
              <strong> Strong</strong> means verified exact clips or very strong
              media pools, <strong>Medium</strong> is usable but patchier, and
              <strong>Low</strong> is where self-shot material will matter most.
            </p>
          </article>
        </div>
      </section>

      <section className="surface search-panel">
        <div className="search-grid">
          <input
            className="search-input"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by division, place, landmark or source label"
            type="search"
            value={query}
          />
          <div className="filter-row">
            {availabilityFilters.map((option) => (
              <button
                className="filter-pill"
                data-active={option === availability ? option : undefined}
                data-current={option === availability}
                key={option}
                onClick={() => setAvailability(option)}
                type="button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </section>

      {filteredDivisions.length === 0 ? (
        <section className="surface empty-state">
          No divisions match that search. Try a place name like `Morecambe`,
          `Pendle`, `Lytham`, `Fleetwood` or `Chorley`.
        </section>
      ) : (
        <section className="division-grid">
          {filteredDivisions.map((division) => (
            <article className="surface division-card" key={division.name}>
              <div className="division-head">
                <div>
                  <p className="eyebrow">{division.section}</p>
                  <h2 className="division-name">{division.name}</h2>
                </div>
                <span
                  className={`pill ${
                    division.availability === 'Strong'
                      ? 'pill-strong'
                      : division.availability === 'Medium'
                        ? 'pill-medium'
                        : division.availability === 'Low'
                          ? 'pill-low'
                          : ''
                  }`}
                >
                  {division.availability}
                </span>
              </div>

              <p className="division-description">{division.description}</p>

              {division.sourceLabels.length > 0 ? (
                <div className="division-meta">
                  {division.sourceLabels.map((sourceLabel) => (
                    <span className="tag" key={sourceLabel}>
                      {sourceLabel}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </section>
      )}
    </>
  )
}
