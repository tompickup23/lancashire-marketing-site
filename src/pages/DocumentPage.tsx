import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { NavLink, useParams } from 'react-router-dom'
import { documentLookup, researchDocuments } from '../data/siteContent'
import { NotFoundPage } from './NotFoundPage'

export function DocumentPage() {
  const { slug } = useParams()
  const document = slug ? documentLookup[slug] : undefined
  const [loadedDocument, setLoadedDocument] = useState<{
    slug: string
    markdown: string
  } | null>(null)

  useEffect(() => {
    if (!document) {
      return
    }

    let cancelled = false

    document.loadMarkdown().then((value) => {
      if (!cancelled) {
        setLoadedDocument({ slug: document.slug, markdown: value })
      }
    })

    return () => {
      cancelled = true
    }
  }, [document])

  if (!document) {
    return <NotFoundPage />
  }

  const markdown =
    loadedDocument?.slug === document.slug ? loadedDocument.markdown : ''

  return (
    <section className="markdown-page">
      <aside className="doc-aside">
        <div className="surface doc-panel">
          <p className="eyebrow">{document.kicker}</p>
          <h1 className="section-title">{document.title}</h1>
          <p className="section-copy">{document.description}</p>
          <div className="tag-row">
            {document.highlights.map((highlight) => (
              <span className="tag" key={highlight}>
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div className="surface doc-panel">
          <h2 className="mini-heading">All documents</h2>
          <div className="doc-switcher">
            {researchDocuments.map((entry) => (
              <NavLink
                key={entry.slug}
                className={({ isActive }) =>
                  isActive
                    ? 'doc-switcher-link active'
                    : 'doc-switcher-link'
                }
                to={`/research/${entry.slug}`}
              >
                <span className="pill">{entry.kicker}</span>
                <strong>{entry.title}</strong>
                <span className="card-copy">{entry.description}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </aside>

      <article className="surface markdown-surface">
        <div className="markdown-prose">
          {markdown ? (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ href, children, ...props }) => {
                  const external = href?.startsWith('http')

                  return (
                    <a
                      {...props}
                      href={href}
                      rel={external ? 'noreferrer' : undefined}
                      target={external ? '_blank' : undefined}
                    >
                      {children}
                    </a>
                  )
                },
              }}
            >
              {markdown}
            </ReactMarkdown>
          ) : (
            <p>Loading document...</p>
          )}
        </div>
      </article>
    </section>
  )
}
