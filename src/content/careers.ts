import { email } from './global'

export const careers = {
  title: 'Careers',
  body: [
    'Aspirare Semi is a rapidly growing Canadian startup building a world-class team to advance the development of our vision of creating a sustainable AI computing solution. If you’re interested in joining our ambition to empower the AI enabled future, please reach out to us or view the current job postings at the link below.'
  ],
  positions: {
    text: 'Inquire about open positions',
    url: `mailto:${email}`
  }
}

export const values = {
  title: 'Our values',
  items: [
    {
      title: 'Challenge convention',
      body: 'Analog computing means rethinking assumptions that digital designs take for granted. When the established path doesn’t fit our problem, we’re quick to leave it behind for a better one.'
    },
    {
      title: 'Reason from first principles',
      body: 'Big architectural decisions deserve careful thought. Working through the consequences before committing is how we place bold bets with high confidence.'
    },
    {
      title: 'Build on trust',
      body: 'We’re a high-trust team that supports each other. Every contribution is taken seriously, and good ideas are heard even when they mean a major shift in direction.'
    },
    {
      title: 'Deliver quality work',
      body: 'From silicon to software, we value efficient, dependable work that solves real technical problems. We welcome talent at every experience level.'
    }
  ]
}
