export type ResourceItem = {
  title: string
  description: string
  type: string
  meta: string
  tag: string
}

export type ResourceCategory = {
  key: string
  title: string
  subtitle: string
  description: string
  icon: string
  iconBgClass: string
  textClass: string
  hoverBorderClass: string
  badgeClass: string
  items: ResourceItem[]
}

export type MatchmakingStep = {
  step: string
  title: string
  description: string
}
