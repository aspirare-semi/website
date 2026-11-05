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
  title: 'Sustainably powering the future of intelligence',
  body: [
    'AI inference is constrained by energy.',
    'Aspirare Semi aims to empower the next generation of AI with our energy efficient AI compute hardware. Data centers are capped by the megawatts they can get, and machines that move are capped by the battery and the heat they can carry, Aspirare Semi leverages physics to tackle the energy problem.'
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
    'Our mission is to make AI inference radically more energy-efficient by changing the physics of how compute is done.'
  ]
}

export const homeRows = [
  {
    label: 'What we offer',
    items: [
      'Our AI chip brings our innovative compute cores to physical AI applications and data center inference.',
      'A digital-in and digital-out model means it can easily and quickly be integrated into your existing solution.',
      'An experienced engineering team that can help you with your customized workloads.'
    ]
  },
  {
    label: 'Target workloads',
    items: [
      'Data center inference: the matrix-multiply kernels inside custom AI accelerators, where every watt saved equates to more tokens',
      'Physical AI: perception and control for humanoids, industrial robots, drones, and autonomous machines, where single digit-watt and thermals are paramount',
      'Edge inference at scale: CNN and transformer perception models running on-device, where cloud round-trips is not ideal'
    ]
  },
  {
    label: 'Investors',
    body: [
      'Aspirare Semi is headquartered in Ottawa with presence in Toronto and the San Francisco Bay Area. For investment inquiries, please contact us.'
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
