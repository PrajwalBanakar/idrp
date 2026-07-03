export type PartnerKey =
  | 'academic'
  | 'technology'
  | 'ecosystem'
  | 'investor'
  | 'media'
  | 'other'

export type Partner = {
  name: string
  abbr: string
  color: string
  category: PartnerKey
  description?: string
  logo?: string
  websiteUrl?: string
}

export type PartnerCategory = {
  key: PartnerKey
  title: string
  subtitle: string
  description: string
  icon: string
  iconBgClass: string
  textClass: string
  hoverBorderClass: string
  partners: Partner[]
}

export type PartnerForm = {
  orgName: string
  name: string
  email: string
  phone: string
  partnerType: string
  url: string
  description: string
  consent: boolean
}
