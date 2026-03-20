export type DivisionAvailability = 'Strong' | 'Medium' | 'Low' | 'Unknown'

export type DivisionRecord = {
  section: string
  name: string
  description: string
  availability: DivisionAvailability
  sourceLabels: string[]
}

export function parseDivisionMarkdown(markdown: string): DivisionRecord[] {
  const records: DivisionRecord[] = []
  let currentSection = ''

  for (const rawLine of markdown.split('\n')) {
    const line = rawLine.trim()

    if (line.startsWith('## ')) {
      currentSection = line.replace(/^##\s+/, '').trim()
      continue
    }

    if (!line.startsWith('- `')) {
      continue
    }

    const nameMatch = line.match(/^- `([^`]+)`: (.+)$/)

    if (!nameMatch) {
      continue
    }

    const fullText = nameMatch[2].trim()
    const sourcesText = fullText.match(/Sources:\s*(.+?)\.\s*Availability:/i)?.[1] ?? ''
    const sourceLabels = [...sourcesText.matchAll(/\[([^\]]+)\]/g)].map(
      ([, label]) => label,
    )
    const availability =
      fullText.match(/Availability:\s*(Strong|Medium|Low)\./i)?.[1] ?? 'Unknown'
    const description = fullText
      .replace(/\s*Sources:\s*.+$/i, '')
      .trim()

    records.push({
      section: currentSection,
      name: nameMatch[1],
      description,
      availability: availability as DivisionAvailability,
      sourceLabels,
    })
  }

  return records
}
