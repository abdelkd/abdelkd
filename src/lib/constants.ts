

type Project = {
  name: string,
  year: number,
  link: string,
  description: string
}

const usernames = {
  github: 'abdelkd',
  x: 'abdelkd_'
}

export const socials = {
  email: 'abdelkarimdjelalda@gmail.com',
  github: `https://github.com/${usernames.github}`,
  x: `https://x.com/${usernames.x}`,
  linkedin: 'https://www.linkedin.com/in/abdelkarim-djelalda-a6b938250/',
  readcv: 'https://read.cv/abdelkarimdjelalda',
}

export const projects: Project[] = [
  { name: 'quanta', description: 'rate your project idea', year: 2024, link: `https://quanta-ten.vercel.app/` },
  { name: 'linkan', description: 'shorten your links, written in go', year: 2024, link: `https://github.com/${usernames.github}/linkan` },
]