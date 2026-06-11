const alphaBody = [
  'Our first generation AI chip brings our innovative analog compute cores to edge applications. The Aspirare Semi Gen 1 provides up to 2x higher performance at 10x reduction in energy consumption compared to traditional solutions.'
]

const betaBody = [
  'Our next generation AI accelerator presents significant improvements over Aspirare Semi Gen 1. Innovative architecture improvements results in up to 6x improved performance in comparison with flagship AI accelerators in the market with up to 4x reduction in energy consumption. Notably, the Aspirare Gen 2 improves on the Aspirare Gen 1 performance by up to 30x with only a 5x increase in energy consumption.'
]

const edgeBody = [
  'Aspirare Semi’s analog computing design is uniquely suited to enable data center quality AI computing directly at the edge. Aspirare Semi Edge can be directly integrated on edge, wearables, mobile and IoT devices empowering AI applications where on-device low-latency processing is critical. Our analog architecture is uniquely suited for small form factor applications, and our reduced energy consumption and thermal dissipation requirements can reduce the size of supporting battery and cooling requirements.'
]

export const hero = {
  title: 'Sustainably empowering the AI enabled future.',
  body: [
    'AI developments are constrained by two major factors - compute and energy.',
    'Aspirare Semi aims to empower the next generation of AI with our power efficient AI compute hardware. With the future explosive growth of edge applications, our product brings next-generation computing to the forefront of the AI future.'
  ]
}

export const products = {
  title: 'Our Product',
  productCards: [
    {
      title: 'Aspirare Semi Gen 1',
      body: alphaBody
    }
    // {
    //   title: 'Aspirare Semi Gen 2',
    //   body: betaBody
    // },
    // {
    //   title: 'Aspirare Semi Edge',
    //   body: edgeBody
    // }
  ]
}

export const about = {
  title: 'About',
  body: [
    'Our mission is to breathe life into the next evolution computing to optimize energy efficiency for AI. Our innovative approach removes the energy consumption and thermal constraints in place with current generation designs, empowering the potential of high-performance compute as AI continues to scale.'
  ]
}

// Home page rows, styled after matx.com. "Target workloads" and "Investors"
// hold sample placeholder content until real content is provided.
export const homeRows = [
  {
    label: 'What we offer',
    items: [
      'Aspirare Semi Gen 1: our first generation AI chip brings our innovative analog compute cores to edge applications.',
      'Up to 2x higher performance at 10x reduction in energy consumption compared to traditional solutions.',
      'An analog architecture uniquely suited for small form factor applications, reducing supporting battery and cooling requirements.'
    ]
  },
  {
    label: 'Target workloads',
    items: [
      'AI inference at the edge: wearables, mobile, and IoT devices where on-device, low-latency processing is critical.',
      'Power and thermally constrained applications where data center quality AI compute is needed directly on device.',
      'Energy efficient AI compute as models continue to scale.'
    ]
  },
  {
    label: 'Investors',
    body: [
      'Aspirare Semi is a member of ventureLAB, a leading global founder community for hardware technology and enterprise software companies in Canada. For investment inquiries, please contact us.'
    ]
  }
]

export const news = {
  title: 'News',
  newsCards: [
    {
      title: 'Aspirare Semi joins ventureLAB',
      body: 'Aspirare Semi has joined ventureLAB - a leading global founder community for hardware technology and enterprise software companies in Canada.'
    },
    {
      title: 'Aspirare Semi files patents',
      body: 'Aspirare Semi has filed patents for its innovative analog design in AI semiconductors for data center use.'
    },
    {
      title: 'Aspirare Semi completes prototype chip',
      body: 'Aspirare Semi successfully taped out its first analog multiply engine chip to address AI workloads.'
    }
  ]
}
