export interface LolFrame {
  blue: LolTeamStats
  red: LolTeamStats
  paused: boolean
  current_timestamp: number
  game: {
    finished: boolean
    id: number
    winner_id: id | null
  }
  match: {
    id: number
  }
  tournament: {
    id: number
  }
}

export interface LolPlayerChampion {
  id: number
  name: string
  image_url: string | null
}

export interface LolPlayerItem {
  id: number
  name: string
  type: 'item' | 'trinket'
}

export interface LolPlayerSpell {
  id: number
  name: string
}

export interface LolTeamPlayer {
  id: number
  name: string
  champion: LolPlayerChampion
  level: number
  kills: number
  deaths: number
  assists: number
  hp: number
  cs: number
  items: (LolPlayerItem | null)[]
  summoner_spells: LolPlayerSpell[]
}

export interface LolTeamStats {
  name: string
  acronym: string | null
  drakes: number
  gold: number
  herald: number
  id: number
  inhibitors: number
  kills: number
  nashors: number
  score: number
  towers: number
  players: {
    top: LolTeamPlayer
    mid: LolTeamPlayer
    jun: LolTeamPlayer
    adc: LolTeamPlayer
    sup: LolTeamPlayer
  }
}

