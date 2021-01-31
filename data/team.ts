interface team {
  name: string
  image: string
  social?: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
}

export const members: team[] = [
  {
    name: 'Adrich Laceste',
    image: 'adrich.jpg',
    social: {
      facebook: 'https://web.facebook.com/appllleee',
    },
  },
  {
    name: 'CJ Nicole Corpuz',
    image: 'cj.jpg',
    social: {
      facebook: 'https://web.facebook.com/staticourpse',
    },
  },
  {
    name: 'Erica Maduro',
    image: 'erica.jpg',
    social: {
      facebook: 'https://web.facebook.com/gapuzmaduro',
    },
  },
]
