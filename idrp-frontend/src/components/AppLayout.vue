<template>
  <div class="app-layout">
    <a v-if="!isAdminRoute" href="#main-content" class="skip-link">Skip to content</a>

    <header v-if="!isAdminRoute" class="site-header" :class="{ 'site-header--scrolled': isScrolled }">
      <div class="container header-inner">
        <RouterLink to="/" class="brand" @click="closeAllMenus">
          <img
            src="/idrp.jfif"
            alt="IDRP"
            class="brand-logo"
            fetchpriority="high"
          />
          <div class="brand-text">
            <span class="brand-title">IDRP</span>
            <span class="brand-subtitle">Ignite • Incubate • Innovate</span>
          </div>
        </RouterLink>

        <nav class="desktop-nav" aria-label="Main navigation">
          <div
            v-for="section in navSections"
            :key="section.key"
            class="nav-group"
            @mouseenter="openDropdown(section.key)"
            @mouseleave="scheduleDropdownClose"
          >
            <button
              type="button"
              class="nav-link nav-button"
              :class="{ 'nav-link--active': isSectionActive(section.items) }"
              :aria-expanded="activeDropdown === section.key"
              :aria-haspopup="true"
              @click="toggleDropdown(section.key)"
            >
              {{ section.label }}
              <span
                class="chevron"
                :class="{ 'chevron--open': activeDropdown === section.key }"
                aria-hidden="true"
              >
                ▾
              </span>
            </button>

            <transition name="fade-slide">
              <div
                v-if="activeDropdown === section.key"
                class="dropdown-menu"
                role="menu"
                @mouseenter="cancelDropdownClose"
                @mouseleave="scheduleDropdownClose"
              >
                <template v-for="item in section.items" :key="item.label">
                  <RouterLink
                    v-if="item.to"
                    :to="item.to"
                    class="dropdown-link"
                    :class="{
                      'dropdown-link--active': isExactNavMatch(item.to),
                      'dropdown-link--indented': item.indent,
                    }"
                    role="menuitem"
                    @click="closeAllMenus"
                  >
                    {{ item.label }}
                  </RouterLink>

                  <div v-else-if="item.children" class="dropdown-group has-children">
                    <div class="dropdown-link dropdown-link--parent" aria-hidden="true">
                      <span>{{ item.label }}</span>
                      <span class="submenu-arrow">›</span>
                    </div>

                    <div class="submenu" role="menu">
                      <template v-for="child in item.children" :key="child.label">
                        <RouterLink
                          v-if="child.to"
                          :to="child.to"
                          class="dropdown-link"
                          :class="{
                            'dropdown-link--active': isExactNavMatch(child.to),
                            'dropdown-link--indented': child.indent,
                          }"
                          role="menuitem"
                          @click="closeAllMenus"
                        >
                          {{ child.label }}
                        </RouterLink>
                        <div v-else class="dropdown-heading" role="presentation">
                          {{ child.label }}
                        </div>
                      </template>
                    </div>
                  </div>

                  <div v-else class="dropdown-heading" role="presentation">
                    {{ item.label }}
                  </div>
                </template>
              </div>
            </transition>
          </div>

          <RouterLink
            to="/"
            class="nav-link"
            :class="{ 'nav-link--active': isExactNavMatch('/') }"
          >
            Home
          </RouterLink>

          <RouterLink
            to="/community/startups"
            class="nav-link"
            :class="{ 'nav-link--active': isExactNavMatch('/community/startups') }"
          >
            Startups
          </RouterLink>

          <RouterLink
            to="/contact"
            class="nav-link nav-link--cta"
            :class="{ 'nav-link--active': isExactNavMatch('/contact') }"
          >
            Contact
          </RouterLink>
        </nav>

        <button
          ref="mobileToggleRef"
          type="button"
          class="mobile-toggle"
          :aria-expanded="isMobileMenuOpen"
          :aria-label="isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
          @click="toggleMobileMenu"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <transition name="mobile-menu">
        <nav
          v-if="isMobileMenuOpen"
          ref="mobileNavRef"
          class="mobile-nav"
          aria-label="Mobile navigation"
        >
          <div class="container mobile-nav-inner">
            <div v-for="section in navSections" :key="section.key" class="mobile-section">
              <button
                type="button"
                class="mobile-section-trigger"
                :class="{ 'mobile-section-trigger--active': isSectionActive(section.items) }"
                :aria-expanded="mobileSections[section.key]"
                @click="toggleMobileSection(section.key)"
              >
                <span>{{ section.label }}</span>
                <span aria-hidden="true">{{ mobileSections[section.key] ? '−' : '+' }}</span>
              </button>

              <div v-if="mobileSections[section.key]" class="mobile-submenu">
                <template v-for="item in section.items" :key="item.label">
                  <RouterLink
                    v-if="item.to"
                    :to="item.to"
                    class="mobile-sublink"
                    :class="{
                      'mobile-sublink--active': isExactNavMatch(item.to),
                      'mobile-sublink--indented': item.indent,
                    }"
                    @click="closeAllMenus"
                  >
                    {{ item.label }}
                  </RouterLink>

                  <div v-else-if="item.children" class="mobile-subgroup">
                    <div class="mobile-sublink mobile-sublink--parent" aria-hidden="true">
                      {{ item.label }}
                    </div>

                    <template v-for="child in item.children" :key="child.label">
                      <RouterLink
                        v-if="child.to"
                        :to="child.to"
                        class="mobile-sublink mobile-sublink--child"
                        :class="{
                          'mobile-sublink--active': isExactNavMatch(child.to),
                          'mobile-sublink--indented': child.indent,
                        }"
                        @click="closeAllMenus"
                      >
                        {{ child.label }}
                      </RouterLink>
                      <div
                        v-else
                        class="mobile-sublink mobile-sublink--child mobile-sublink--heading"
                        aria-hidden="true"
                      >
                        {{ child.label }}
                      </div>
                    </template>
                  </div>

                  <div v-else class="mobile-sublink mobile-sublink--heading" aria-hidden="true">
                    {{ item.label }}
                  </div>
                </template>
              </div>
            </div>

            <RouterLink
              to="/"
              class="mobile-link"
              :class="{ 'mobile-link--active': isExactNavMatch('/') }"
              @click="closeAllMenus"
            >
              Home
            </RouterLink>

            <RouterLink
              to="/community/startups"
              class="mobile-link"
              :class="{ 'mobile-link--active': isExactNavMatch('/community/startups') }"
              @click="closeAllMenus"
            >
              Startups
            </RouterLink>

            <RouterLink
              to="/contact"
              class="mobile-link mobile-link--cta"
              :class="{ 'mobile-link--active': isExactNavMatch('/contact') }"
              @click="closeAllMenus"
            >
              Contact
            </RouterLink>
          </div>
        </nav>
      </transition>
    </header>

    <main id="main-content" class="page-main">
      <RouterView />
    </main>

    <footer v-if="!isAdminRoute" class="site-footer">
      <div class="container footer-grid">
        <section class="footer-brand">
          <img
            src="/idrp.jfif"
            alt="IDRP"
            class="footer-logo"
            loading="lazy"
            width="60"
            height="60"
          />
          <h3>IDRP</h3>
          <p>
            Supporting innovation, incubation, acceleration, and ecosystem development through a
            strong startup and research platform.
          </p>
        </section>

        <section>
          <h4 class="footer-title">About</h4>
          <nav class="footer-links" aria-label="About links">
            <template v-for="item in aboutFooterLinks" :key="item.label">
              <RouterLink
                v-if="item.to"
                :to="item.to"
                class="footer-link"
                :class="{ 'footer-link--active': isExactNavMatch(item.to) }"
              >
                {{ item.label }}
              </RouterLink>

              <template v-else>
                <span class="footer-link footer-link--heading">{{ item.label }}</span>
                <template v-for="child in item.children" :key="child.label">
                  <RouterLink
                    v-if="child.to"
                    :to="child.to"
                    class="footer-link footer-link--child"
                    :class="{ 'footer-link--active': isExactNavMatch(child.to) }"
                  >
                    {{ child.label }}
                  </RouterLink>
                  <span v-else class="footer-link footer-link--child footer-link--heading">
                    {{ child.label }}
                  </span>
                </template>
              </template>
            </template>
          </nav>
        </section>

        <section>
          <h4 class="footer-title">Programs & Services</h4>
          <nav class="footer-links" aria-label="Programs and services links">
            <template v-for="item in programsFooterLinks" :key="item.label">
              <RouterLink
                v-if="item.to"
                :to="item.to"
                class="footer-link"
                :class="{ 'footer-link--active': isExactNavMatch(item.to) }"
              >
                {{ item.label }}
              </RouterLink>

              <template v-else>
                <span class="footer-link footer-link--heading">{{ item.label }}</span>
                <template v-for="child in item.children" :key="child.label">
                  <RouterLink
                    v-if="child.to"
                    :to="child.to"
                    class="footer-link footer-link--child"
                    :class="{ 'footer-link--active': isExactNavMatch(child.to) }"
                  >
                    {{ child.label }}
                  </RouterLink>
                  <span v-else class="footer-link footer-link--child footer-link--heading">
                    {{ child.label }}
                  </span>
                </template>
              </template>
            </template>
          </nav>
        </section>

        <section>
          <h4 class="footer-title">Quick Actions</h4>
          <nav class="footer-links" aria-label="Quick action links">
            <RouterLink
              v-for="link in quickActionLinks"
              :key="link.to"
              :to="link.to"
              class="footer-link"
              :class="{ 'footer-link--active': isExactNavMatch(link.to) }"
            >
              {{ link.label }}
            </RouterLink>
          </nav>
        </section>
      </div>

      <div class="footer-bottom">
        <div class="container footer-bottom-inner">
          <p>© {{ currentYear }} IDRP. All rights reserved.</p>
          <button type="button" class="footer-top-link" @click="scrollToTop">Back to top ↑</button>
        </div>
      </div>
    </footer>

    <transition name="fade">
      <button
        v-if="showScrollTop && !isAdminRoute"
        type="button"
        class="scroll-top"
        aria-label="Scroll to top"
        @click="scrollToTop"
      >
        ↑
      </button>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

type NavItem = {
  label: string
  to?: string
  children?: NavItem[]
  /** Non-clickable label used to group the items that follow it, without opening a submenu. */
  heading?: boolean
  /** Visually nests this item under the heading above it. */
  indent?: boolean
}

type SectionKey = 'about' | 'programs' | 'community'

type NavSection = {
  key: SectionKey
  label: string
  items: NavItem[]
}

const route = useRoute()

// Admin pages have their own AdminLayout (sidebar/header) and shouldn't be
// wrapped in the public marketing site's nav/footer chrome.
const isAdminRoute = computed(() => route.path.startsWith('/admin'))

const navSections: NavSection[] = [
  {
    key: 'about',
    label: 'About',
    items: [
      { label: 'About IDRP', to: '/about' },
      { label: 'Our Team', to: '/about/team' },
      { label: 'Mentors', to: '/about/mentors' },
      { label: 'Our Board', to: '/about/investment-committee' },
    ],
  },
  {
    key: 'programs',
    label: 'Programs',
    items: [
      {
        label: 'Incubation Programs',
        children: [
          { label: 'Yuva Udyami Pre Incubation Program', to: '/programs/pre-incubation' },
          { label: 'Udyami Incubation Program', to: '/programs/incubation' },
        ],
      },
      {
        label: 'Government Initiatives',
        children: [
          { label: 'NAIN 2.0', to: '/programs/nain' },
          { label: 'CIF', to: '/programs/cif' },
          { label: 'CoE', heading: true },
          { label: 'QAIC', to: '/programs/coe-quantum-ai', indent: true },
          { label: 'CBDE', to: '/programs/cbde' },
          { label: 'RGEP', to: '/programs/rgep' },
        ],
      },
      {
        label: 'Services',
        children: [
          { label: 'Industry Research and Consulting', to: '/ecosystem/industry-research' },
          { label: 'Technical Education Academy', to: '/ecosystem/technical-education-academy' },
        ],
      },
    ],
  },
  {
    key: 'community',
    label: 'Community',
    items: [
      { label: 'Events', to: '/community/events' },
      { label: 'Resources', to: '/resources' },
      { label: 'Partners', to: '/about/partners' },
      { label: 'Careers', to: '/careers' },
    ],
  },
]

// Derived directly from navSections — no computed() needed for static data
const aboutFooterLinks = navSections.find((s) => s.key === 'about')?.items ?? []
const programsFooterLinks = navSections.find((s) => s.key === 'programs')?.items ?? []

const quickActionLinks = [
  { label: 'Apply Now', to: '/apply/incubation' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Events', to: '/community/events' },
  { label: 'Resources', to: '/resources' },
]

const activeDropdown = ref<SectionKey | null>(null)
const isMobileMenuOpen = ref(false)
const showScrollTop = ref(false)
const isScrolled = ref(false)
const mobileToggleRef = ref<HTMLButtonElement | null>(null)
const mobileNavRef = ref<HTMLElement | null>(null)

const mobileSections = reactive<Record<SectionKey, boolean>>({
  about: false,
  programs: false,
  community: false,
})

// Plain value — no reactivity needed for a year that never changes
const currentYear = new Date().getFullYear()

let dropdownCloseTimer: number | null = null

function normalizeQueryValue(value: unknown) {
  if (Array.isArray(value)) return value[0] ?? ''
  return value ?? ''
}

function isExactNavMatch(to: string) {
  const [targetPath, queryString] = to.split('?')

  if (route.path !== targetPath) return false

  if (!queryString) {
    return Object.keys(route.query).length === 0
  }

  const params = new URLSearchParams(queryString)

  for (const [key, value] of params.entries()) {
    if (String(normalizeQueryValue(route.query[key])) !== value) {
      return false
    }
  }

  return Array.from(params.keys()).length === Object.keys(route.query).length
}

function isPathPrefixMatch(to: string) {
  const [targetPath] = to.split('?')
  if (targetPath === '/') return route.path === '/'
  return route.path === targetPath || route.path.startsWith(`${targetPath}/`)
}

function isSectionActive(items: NavItem[]) {
  return items.some((item) => {
    if (item.to && (isExactNavMatch(item.to) || isPathPrefixMatch(item.to))) return true
    return (
      item.children?.some(
        (child) => !!child.to && (isExactNavMatch(child.to) || isPathPrefixMatch(child.to)),
      ) ?? false
    )
  })
}

function clearDropdownTimer() {
  if (dropdownCloseTimer !== null) {
    window.clearTimeout(dropdownCloseTimer)
    dropdownCloseTimer = null
  }
}

function openDropdown(name: SectionKey) {
  clearDropdownTimer()
  activeDropdown.value = name
}

function toggleDropdown(name: SectionKey) {
  clearDropdownTimer()
  activeDropdown.value = activeDropdown.value === name ? null : name
}

function scheduleDropdownClose() {
  clearDropdownTimer()
  dropdownCloseTimer = window.setTimeout(() => {
    activeDropdown.value = null
  }, 120)
}

function cancelDropdownClose() {
  clearDropdownTimer()
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (!isMobileMenuOpen.value) resetMobileSections()
}

function toggleMobileSection(section: SectionKey) {
  mobileSections[section] = !mobileSections[section]
}

function resetMobileSections() {
  mobileSections.about = false
  mobileSections.programs = false
  mobileSections.community = false
}

function closeAllMenus() {
  activeDropdown.value = null
  isMobileMenuOpen.value = false
  resetMobileSections()
  clearDropdownTimer()
}

// Used for Escape / outside-click, where focus can otherwise end up nowhere —
// returns focus to the toggle button so keyboard users aren't stranded.
function closeMobileMenuAndRefocus() {
  if (!isMobileMenuOpen.value) return
  isMobileMenuOpen.value = false
  resetMobileSections()
  mobileToggleRef.value?.focus()
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleScroll() {
  const y = window.scrollY
  isScrolled.value = y > 16
  showScrollTop.value = y > 400
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key !== 'Escape') return

  if (isMobileMenuOpen.value) {
    closeMobileMenuAndRefocus()
    return
  }

  if (activeDropdown.value) {
    activeDropdown.value = null
    clearDropdownTimer()
  }
}

function handleDocumentClick(event: MouseEvent) {
  if (!isMobileMenuOpen.value) return

  const target = event.target as Node
  if (mobileNavRef.value?.contains(target) || mobileToggleRef.value?.contains(target)) return

  closeMobileMenuAndRefocus()
}

watch(() => route.fullPath, closeAllMenus)

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', handleKeydown)
  document.addEventListener('click', handleDocumentClick)
})

onBeforeUnmount(() => {
  clearDropdownTimer()
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  document.removeEventListener('click', handleDocumentClick)
})
</script>

<style scoped>
:global(*) {
  box-sizing: border-box;
}

:global(html) {
  scroll-behavior: smooth;
}

:global(body) {
  margin: 0;
  color: var(--color-text-primary);
  background: var(--color-bg-page);
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
}

:global(a) {
  color: inherit;
  text-decoration: none;
}

:global(button) {
  font: inherit;
}

.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-main {
  flex: 1;
}

.container {
  width: min(1240px, calc(100% - 2rem));
  margin: 0 auto;
}

/* ================= HEADER ================= */

.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  transition:
    box-shadow 0.25s ease,
    background-color 0.25s ease,
    border-color 0.25s ease;
}

.site-header--scrolled {
  box-shadow: 0 12px 30px rgba(7, 56, 99, 0.08);
}

.header-inner {
  min-height: 88px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

/* ================= BRAND ================= */

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.brand-logo,
.footer-logo {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 12px;
  flex-shrink: 0;
}

.brand-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.1;
}

.brand-title {
  display: block;
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  color: var(--color-primary);
}

.brand-subtitle {
  display: block;
  margin-top: 0.2rem;
  color: var(--color-text-secondary);
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  white-space: nowrap;
}

/* ================= NAV ================= */

.desktop-nav {
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.35rem;
  padding-left: 1.5rem;
}

.nav-group {
  position: relative;
}

.nav-link,
.nav-button {
  color: var(--color-text-primary);
  padding: 0.72rem 0.95rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.nav-button {
  border: 0;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.nav-link:hover,
.nav-button:hover,
.nav-link--active {
  background: var(--color-primary-soft);
  color: var(--color-primary);
}

.nav-link--cta {
  color: #ffffff;
  background: var(--color-primary);
}

.nav-link--cta:hover {
  color: #ffffff;
  background: var(--color-primary-dark);
}

.chevron {
  font-size: 0.78rem;
  transition: transform 0.2s ease;
}

.chevron--open {
  transform: rotate(180deg);
}

/* ================= DESKTOP DROPDOWN ================= */

.dropdown-menu {
  position: absolute;
  top: calc(100% + 0.75rem);
  left: 0;
  min-width: 280px;
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 18px 40px rgba(7, 56, 99, 0.12);
}

.dropdown-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.82rem 0.95rem;
  color: var(--color-text-primary);
  border-radius: 12px;
  font-weight: 500;
  transition:
    background-color 0.18s ease,
    color 0.18s ease;
}

.dropdown-link:hover,
.dropdown-link--active {
  background: var(--color-primary-soft);
  color: var(--color-primary);
}

.dropdown-heading {
  padding: 0.82rem 0.95rem;
  color: var(--color-text-secondary);
  font-weight: 500;
  cursor: default;
}

.dropdown-link--indented {
  padding-left: 1.6rem;
}

.dropdown-group {
  position: relative;
}

.dropdown-link--parent {
  cursor: default;
}

.has-children:hover > .dropdown-link--parent {
  background: var(--color-primary-soft);
  color: var(--color-primary);
}

.submenu-arrow {
  font-size: 1rem;
  color: var(--color-text-secondary);
}

.submenu {
  position: absolute;
  top: 0;
  left: calc(100% + 0.45rem);
  min-width: 270px;
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 18px 40px rgba(7, 56, 99, 0.12);
  opacity: 0;
  visibility: hidden;
  transform: translateX(6px);
  transition:
    opacity 0.18s ease,
    transform 0.18s ease,
    visibility 0.18s ease;
  z-index: 20;
}

.has-children:hover > .submenu {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
}

/* ================= MOBILE ================= */

.mobile-toggle {
  display: none;
  margin-left: auto;
  width: 46px;
  height: 46px;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background: #ffffff;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.28rem;
  cursor: pointer;
}

.mobile-toggle span {
  width: 18px;
  height: 2px;
  border-radius: 999px;
  background: var(--color-text-primary);
}

.mobile-nav {
  border-top: 1px solid var(--color-border);
  background: #ffffff;
}

.mobile-nav-inner {
  padding: 1rem 0 1.25rem;
}

.mobile-section + .mobile-section {
  margin-top: 0.45rem;
}

.mobile-section-trigger,
.mobile-link,
.mobile-sublink {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0;
  background: transparent;
  color: var(--color-text-primary);
  padding: 0.9rem 0;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
}

.mobile-section-trigger {
  cursor: pointer;
}

.mobile-submenu {
  padding: 0 0 0.6rem 0.9rem;
}

.mobile-sublink {
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.72rem 0;
}

.mobile-sublink--parent {
  color: var(--color-primary);
  font-weight: 700;
  padding-top: 0.95rem;
  padding-bottom: 0.4rem;
}

.mobile-sublink--child {
  padding-left: 0.85rem;
  color: var(--color-text-secondary);
}

.mobile-sublink--heading {
  color: var(--color-text-secondary);
  cursor: default;
}

.mobile-sublink--indented {
  padding-left: 0.85rem;
}

.mobile-link--cta {
  margin-top: 0.6rem;
  padding: 0.95rem 1rem;
  border-radius: 14px;
  background: var(--color-primary);
  color: #ffffff;
  justify-content: center;
}

.mobile-link--active,
.mobile-sublink--active,
.mobile-section-trigger--active {
  color: var(--color-primary);
}

/* ================= FOOTER ================= */

.site-footer {
  margin-top: auto;
  color: #dbe7f2;
  background: linear-gradient(180deg, var(--color-primary-dark) 0%, #04213b 100%);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 0.9fr;
  gap: 2rem;
  padding: 3.5rem 0 2.5rem;
}

.footer-brand h3 {
  margin: 1rem 0 0.75rem;
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff;
}

.footer-brand p {
  margin: 0;
  font-size: 0.96rem;
  line-height: 1.75;
  color: #c9d8e7;
  max-width: 320px;
}

.footer-title {
  margin: 0 0 1rem;
  font-size: 0.98rem;
  font-weight: 700;
  color: #ffffff;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer-link {
  font-size: 0.94rem;
  color: #c9d8e7;
  transition: color 0.2s ease;
}

.footer-link:hover,
.footer-link--active {
  color: #ffffff;
}

.footer-link--heading {
  margin-top: 0.35rem;
  font-weight: 700;
  color: #ffffff;
}

.footer-link--child {
  padding-left: 0.9rem;
  color: #aecdde;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom-inner {
  min-height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.footer-bottom-inner p {
  margin: 0;
  font-size: 0.9rem;
  color: #b8cadc;
}

.footer-top-link {
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
  border-radius: 999px;
  padding: 0.6rem 1rem;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
}

.footer-top-link:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.26);
}

/* ================= SCROLL BUTTON ================= */

.scroll-top {
  position: fixed;
  right: 1.2rem;
  bottom: 1.2rem;
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 999px;
  color: #ffffff;
  background: var(--color-primary);
  box-shadow: 0 16px 32px rgba(7, 56, 99, 0.3);
  cursor: pointer;
  z-index: 1000;
}

/* ================= TRANSITIONS ================= */

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 0.22s ease,
    transform 0.22s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ================= RESPONSIVE ================= */

@media (max-width: 1180px) {
  .desktop-nav {
    gap: 0.2rem;
  }

  .nav-link,
  .nav-button {
    padding: 0.68rem 0.78rem;
    font-size: 0.92rem;
  }
}

@media (max-width: 1080px) {
  .desktop-nav {
    display: none;
  }

  .mobile-toggle {
    display: inline-flex;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 720px) {
  .header-inner {
    min-height: 74px;
  }

  .brand-logo,
  .footer-logo {
    width: 48px;
    height: 48px;
  }

  .brand-title {
    font-size: 1.16rem;
  }

  .brand-subtitle {
    font-size: 0.66rem;
    letter-spacing: 0.05em;
    white-space: normal;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    padding: 2.5rem 0 2rem;
  }

  .footer-bottom-inner {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem 0;
  }
}
</style>
