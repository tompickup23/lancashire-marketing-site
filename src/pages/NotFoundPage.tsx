import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="surface search-panel">
      <p className="eyebrow">Not found</p>
      <h1 className="section-title">That page does not exist in this research site.</h1>
      <p className="section-copy">
        The quickest route back is the overview page or the divisions explorer.
      </p>
      <div className="hero-actions">
        <Link className="button button-primary" to="/">
          Back to overview
        </Link>
        <Link className="button button-secondary" to="/divisions">
          Open divisions
        </Link>
      </div>
    </section>
  )
}
