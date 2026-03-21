export type ResearchDocument = {
  slug: string
  title: string
  kicker: string
  description: string
  highlights: string[]
  loadMarkdown: () => Promise<string>
}

export const researchDocuments: ResearchDocument[] = [
  {
    slug: 'county-strategy',
    title: 'County Strategy',
    kicker: 'Core',
    description:
      'The new county-level top sheet covering Lancashire’s master proposition, hero content systems, music, people, products and event logic.',
    highlights: [
      'What Lancashire stands for',
      'Top-level content and people',
      'County sound and soundtrack rules',
      'How borough and reserve layers fit underneath',
    ],
    loadMarkdown: () =>
      import('../../content/lancashire_county_strategy.md?raw').then(
        (module) => module.default,
      ),
  },
  {
    slug: 'borough-strategy',
    title: 'Borough Strategy',
    kicker: 'Core',
    description:
      'A borough-council-area strategy layer showing the role, content, sound, people and proof points for each Lancashire borough or unitary area.',
    highlights: [
      '14 borough and unitary strategies',
      'Per-borough content and music logic',
      'People, business and product proof',
      'Geography anchors for planning',
    ],
    loadMarkdown: () =>
      import('../../content/lancashire_borough_strategy.md?raw').then(
        (module) => module.default,
      ),
  },
  {
    slug: 'reserve-pool',
    title: 'Reserve Pool',
    kicker: 'Core',
    description:
      'The preserved second-wave and maybe layer for people, content, music, events and discovery sources that do not belong in the top-tier strategy yet.',
    highlights: [
      'County and borough reserve people',
      'Reserve music and product cues',
      'Lower-confidence event hooks',
      'Discovery sources retained without losing them',
    ],
    loadMarkdown: () =>
      import('../../content/lancashire_reserve_pool.md?raw').then(
        (module) => module.default,
      ),
  },
  {
    slug: 'brand-strategy',
    title: 'Brand Platform & Talent Source Doc',
    kicker: 'Support',
    description:
      'The longer source strategy file behind the county-level top sheet, including deeper talent, product, civic and event logic.',
    highlights: [
      'Brand core and creative test',
      'Celebrity, creator and stakeholder tiers',
      'Lancashire-branded products and symbolic economy',
      'Division anchors for people, products and events',
    ],
    loadMarkdown: () =>
      import('../../content/lancashire_brand_platform_and_talent_strategy.md?raw').then(
        (module) => module.default,
      ),
  },
  {
    slug: 'borough-map',
    title: 'Borough Influence & Business Source Map',
    kicker: 'Support',
    description:
      'The deeper borough scan behind the new borough strategy layer, covering influence, legacy icons, businesses and innovation projects.',
    highlights: [
      '14 borough and unitary areas',
      'Current influence plus past legends',
      'Biggest businesses and innovation stories',
      'Division and ward anchors where geography is clean',
    ],
    loadMarkdown: () =>
      import('../../content/lancashire_borough_influence_and_business_map.md?raw').then(
        (module) => module.default,
      ),
  },
  {
    slug: 'footage-research',
    title: 'Footage Research',
    kicker: 'Support',
    description:
      'The main visual research pack for free reusable media, official tourism signals, best-practice destination marketing and major campaign hooks.',
    highlights: [
      'Free footage and media source links',
      'What to include in the hero film',
      'Global tourism-brand best practice',
      'Major 2026 and 2027 campaign hooks',
    ],
    loadMarkdown: () =>
      import('../../content/lancashire_civic_pride_footage_research.md?raw').then(
        (module) => module.default,
      ),
  },
  {
    slug: 'division-breakdown',
    title: 'County Council Division Breakdown',
    kicker: 'Support',
    description:
      'Division-level Lancashire County Council coverage with visual anchors and footage availability for all 82 current divisions.',
    highlights: [
      '82 current Lancashire County Council divisions',
      'Hero visuals per division',
      'Availability scoring',
      'Place-specific media starting points',
    ],
    loadMarkdown: () =>
      import(
        '../../content/lancashire_county_council_division_footage_breakdown.md?raw'
      ).then((module) => module.default),
  },
  {
    slug: 'burnley-creators',
    title: 'Burnley Creator Research',
    kicker: 'Support',
    description:
      'A supporting creator and talent scan used as a pilot for wider Lancashire ambassador and outreach work.',
    highlights: [
      'Burnley-linked public figures',
      'Creator and reach research',
      'Useful outreach shortlist',
    ],
    loadMarkdown: () =>
      import('../../content/burnley-social-following-research-2026-03-17.md?raw').then(
        (module) => module.default,
      ),
  },
  {
    slug: 'public-talent-map',
    title: 'Public Talent Map: Burnley + Padiham',
    kicker: 'Support',
    description:
      'A publishable public-talent layer focused on Burnley and Padiham, covering fashion, beauty, creator and style-business figures with usable division anchors.',
    highlights: [
      'Burnley public-facing talent shortlist',
      'Padiham beauty and founder map',
      'Discovery sources for the next pass',
      'Division anchors for production planning',
    ],
    loadMarkdown: () =>
      import('../../content/lancashire_public_talent_map_burnley_padiham.md?raw').then(
        (module) => module.default,
      ),
  },
  {
    slug: 'tour-monetisation',
    title: 'Tour de France Monetisation',
    kicker: 'Support',
    description:
      'A Lancashire-focused monetisation and legacy paper for the 2027 Tour de France, covering what LCC can capture, what it cannot, and what past host regions teach.',
    highlights: [
      'What LCC can monetise in practice',
      'Past host lessons from Yorkshire, Utrecht and Denmark',
      'Route-value map with division anchors',
      'How to fold the race into the Lancashire marketing plan',
    ],
    loadMarkdown: () =>
      import('../../content/lancashire_tour_de_france_monetisation_research.md?raw').then(
        (module) => module.default,
      ),
  },
  {
    slug: 'music-identity',
    title: 'Music and Sonic Identity',
    kicker: 'Support',
    description:
      'A Lancashire soundtrack brief covering the strongest county music associations, sonic references, licensing realities and what the main campaign should sound like.',
    highlights: [
      'Best Lancashire music codes',
      'What to use for the hero film',
      'Artist and heritage reference points',
      'Licensing guidance for commercial versus production music',
    ],
    loadMarkdown: () =>
      import('../../content/lancashire_music_and_sonic_identity.md?raw').then(
        (module) => module.default,
      ),
  },
]

export const documentLookup = Object.fromEntries(
  researchDocuments.map((document) => [document.slug, document]),
) as Record<string, ResearchDocument>

export const keyStats = [
  {
    value: '68.6m',
    label: 'Tourism visits in 2024',
    note: 'From the latest official Lancashire STEAM infographic.',
  },
  {
    value: '£5.7bn',
    label: 'Visitor economy value',
    note: 'Used here as the headline proof that the county story has economic weight.',
  },
  {
    value: '57,068',
    label: 'FTE jobs supported',
    note: 'A strong civic-pride signal because tourism is tied to livelihoods, not just scenery.',
  },
  {
    value: '82',
    label: 'County divisions covered',
    note: 'The searchable breakdown is built around current Lancashire County Council geography.',
  },
  {
    value: '14',
    label: 'Boroughs and unitaries mapped',
    note: 'The research now has a second geography layer for influence, business and legend-led campaign planning.',
  },
]

export const campaignMoments = [
  {
    year: '2026',
    title: 'Blackpool Dance Festival 100th Anniversary',
    timing: 'May 16 to May 29, 2026',
    division: 'Outside Lancashire County Council divisions',
    description:
      'One of the county brand’s strongest glamour-and-spectacle moments, even though it sits in Blackpool unitary geography.',
  },
  {
    year: '2026',
    title: "Lytham Festival + AIG Women's Open",
    timing: 'Summer 2026',
    division: 'Lytham / St Annes South',
    description:
      'A polished coast-and-culture season with big crowd pull, premium hospitality and strong estuary imagery.',
  },
  {
    year: '2026',
    title: 'Eden Project Morecambe visible build year',
    timing: 'From late summer 2026',
    division: 'Morecambe Central',
    description:
      'The future-facing regeneration story that stops Lancashire marketing feeling trapped in nostalgia.',
  },
  {
    year: '2027',
    title: 'Tour de France through Lancashire',
    timing: 'July 3, 2027',
    division: 'Multi-division / county-scale',
    description:
      'A global visibility window spanning Morecambe, Lancaster, Bowland, Ribble Valley, Chorley and West Lancashire.',
  },
  {
    year: '2027',
    title: 'Tour de France Femmes',
    timing: 'July 30, 2027',
    division: 'County-scale',
    description:
      'A second cycling hook that makes summer 2027 a full campaign season rather than a one-off race weekend.',
  },
  {
    year: '2027',
    title: 'Baylight + Bay International Film Festival + Eden gardens',
    timing: 'January to spring 2027',
    division: 'Morecambe Central',
    description:
      'Morecambe becomes the clearest single place to anchor Lancashire’s 2027 cultural-confidence story.',
  },
]

export const productSignals = [
  {
    title: 'Lancashire Tea',
    note: 'Everyday brand ritual, strong for hospitality, gifting and accommodation welcome packs.',
  },
  {
    title: 'Lancashire hotpot',
    note: 'Emotionally legible county dish with real warmth and zero fake-posh energy.',
  },
  {
    title: "Fiddler's Lancashire Crisps",
    note: 'A modern farm-to-shelf Lancashire product story tied to actual place and ingredients.',
  },
  {
    title: "Mrs Kirkham's Lancashire Cheese",
    note: 'Premium proof point that links craftsmanship, land and county identity.',
  },
  {
    title: 'Lancashire Sauce',
    note: 'Funny, distinctive and properly regional. Good shorthand for county character.',
  },
  {
    title: 'Lancashire Life',
    note: 'Editorial identity matters too. This shows Lancashire already operates as a consumer lifestyle brand.',
  },
]

export const spotlightPoints = [
  {
    title: 'Borough and ward views both exist',
    description:
      'The site now has both a borough-level campaign map and a division-level planning layer, so local cutdowns can stay accurate without flattening the county story.',
  },
  {
    title: 'There is now a three-layer strategy',
    description:
      'The site now has a clear county strategy, borough strategy and reserve pool, with the older docs preserved underneath as supporting research rather than the main structure.',
  },
  {
    title: 'There is now a public talent layer',
    description:
      'Burnley and Padiham now have a publishable talent-and-style document that is tighter than a raw influencer scrape and more useful for campaign outreach.',
  },
  {
    title: 'The Tour now has a business case',
    description:
      'The 2027 Tour de France is now treated as a Lancashire monetisation and legacy platform, not just a spectacle or awareness moment.',
  },
  {
    title: 'The brand now has a sound',
    description:
      'The music layer now treats Lancashire as a sonic identity built from choir, ballroom, coast and modern production, rather than a random playlist.',
  },
  {
    title: 'The source docs stay readable',
    description:
      'Each major research file is rendered directly from markdown so the underlying analysis remains intact and shareable.',
  },
  {
    title: 'This is GitHub Pages-ready',
    description:
      'The site uses HashRouter and a Vite base path, so it can be published to a repo-backed GitHub Pages site without extra rewrite rules.',
  },
  {
    title: 'Morecambe and Lytham are early hero anchors',
    description:
      'The current material points strongly toward Morecambe, Lytham, the Ribble Valley and East Lancashire as the highest-value story clusters.',
  },
]
