export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  rating: number
  reviewCount: number
  url: string
  featured?: boolean
}

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "Mr.Play",
    logo: "/mr.play.png",
    bonus: "BET €5 GET €20",
    rating: 4.9,
    reviewCount: 25472,
    url: "https://ie.mrplay.com/sport/",
    featured: true,
  },
  {
    id: 2,
    name: "Betiton",
    logo: "/betiton.png",
    bonus: "BET €10 GET €50",
    rating: 4.8,
    reviewCount: 23892,
    url: "https://www.betiton.com/en-ie/sport/#/",
    featured: true,
  },
]
