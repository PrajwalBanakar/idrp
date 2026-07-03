// ─────────────────────────────────────────────────────────────
// CONTACT TYPES
// ─────────────────────────────────────────────────────────────

export type ContactItem = {
  label: string // e.g. "Email", "Phone"
  value: string // e.g. "contact@idrp.in"
  href: string // e.g. "mailto:..." or "tel:..."
  emoji: string // icon representation (can later become icon component)
}

export type SocialLink = {
  name: string // e.g. "LinkedIn"
  url: string // external link
  icon: string // SVG string (can later be replaced with component/icon lib)
}
