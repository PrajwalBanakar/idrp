import {
  createRouter,
  createWebHistory,
  isNavigationFailure,
  NavigationFailureType,
  type NavigationGuardWithThis,
  type RouteLocationNormalized,
  type RouteLocationRaw,
  type RouteRecordRaw,
  type Router,
  type RouteRecordNameGeneric,
} from 'vue-router'
import { isAdminLoggedIn } from '@/services/authService'

export const ROUTE_NAMES = {
  HOME: 'home',
  ABOUT: 'about',
  BOARD: 'board',
  ADVISORY: 'advisory',
  INVESTORS: 'investors',
  TEAM: 'team',
  PARTNERS: 'partners',
  MENTORS: 'mentors',
  INCUBATION: 'incubation',
  ACCELERATION: 'acceleration',
  FUNDING: 'funding',
  MARKET_CONNECTS: 'market-connects',
  BUSINESS_SERVICES: 'business-services',
  CO_WORKING: 'co-working',
  EVENTS: 'events',
  STARTUPS: 'startups',
  APPLY: 'apply',
  CONTACT: 'contact',
  COMMUNITY_MEMBERSHIP_APPLY: 'community-membership-apply',
  PRE_INCUBATION: 'pre-incubation',
  COURSES: 'courses',
  INDUSTRY_RESEARCH: 'industry-research',
  PROTOTYPE_DEVELOPMENT: 'prototype-development',
  TECHNICAL_EDUCATION_ACADEMY: 'technical-education-academy',
  CONSULTING: 'consulting',
  RESOURCES: 'resources',
  MATCHMAKING: 'matchmaking',
  STARTUP_MATCHMAKING: 'startup-matchmaking',
  INVESTOR_MATCHMAKING: 'investor-matchmaking',
  CBDE: 'cbde',
  NAIN: 'nain',
  CIF: 'cif',
  COE_QUANTUM_AI: 'coe-quantum-ai',
  RGEP: 'rgep',
  EVENT_REGISTER: 'event-register',
  NEWSLETTER_DETAIL: 'newsletter-detail',
  COURSE_DETAIL: 'course-detail',
  COURSE_APPLY: 'course-apply',
  CERTIFICATION_COURSES: 'certification-courses',
  WORKSHOPS: 'workshops',
  WORKSHOP_APPLY: 'workshop-apply',
  ADMIN_LOGIN: 'admin-login',
  ADMIN_DASHBOARD: 'admin-dashboard',
  ADMIN_EVENTS: 'admin-events',
  ADMIN_STARTUPS: 'admin-startups',
  ADMIN_PROGRAMS: 'admin-programs',
  ADMIN_RESOURCES: 'admin-resources',
  ADMIN_PARTNERS: 'admin-partners',
  ADMIN_MENTORS: 'admin-mentors',
  ADMIN_TEAM_MEMBERS: 'admin-team-members',
  ADMIN_BOARD_MEMBERS: 'admin-board-members',
} as const

type AppRouteName = (typeof ROUTE_NAMES)[keyof typeof ROUTE_NAMES]

type RouteMetaInput = {
  title?: string
  [key: string]: unknown
}

type PageRouteExtra = {
  props?: boolean | object | ((route: RouteLocationNormalized) => object)
  alias?: string | string[]
  beforeEnter?: NavigationGuardWithThis<undefined> | NavigationGuardWithThis<undefined>[]
  meta?: RouteMetaInput
}

function createPageRoute(
  path: string,
  name: AppRouteName,
  viewName: string,
  title: string,
  extra: PageRouteExtra = {},
): RouteRecordRaw {
  return {
    path,
    name,
    component: () => import(`@/views/${viewName}.vue`),
    meta: {
      title,
      ...(extra.meta ?? {}),
    },
    ...(extra.props !== undefined ? { props: extra.props } : {}),
    ...(extra.alias !== undefined ? { alias: extra.alias } : {}),
    ...(extra.beforeEnter !== undefined ? { beforeEnter: extra.beforeEnter } : {}),
  }
}

function createRedirectByName(path: string, name: AppRouteName): RouteRecordRaw {
  return {
    path,
    redirect: { name },
  }
}

function createParamRedirect(
  path: string,
  name: AppRouteName,
  paramKeys: string[],
): RouteRecordRaw {
  return {
    path,
    redirect: (to) => {
      const params = Object.fromEntries(paramKeys.map((key) => [key, to.params[key]]))
      return {
        name,
        params,
      }
    },
  }
}

const organizationRoutes: RouteRecordRaw[] = [
  createPageRoute('/about', ROUTE_NAMES.ABOUT, 'AboutView', 'About IDRP'),
  createPageRoute('/about/board', ROUTE_NAMES.BOARD, 'OurBoardView', 'Our Board'),
  createPageRoute('/about/advisory', ROUTE_NAMES.ADVISORY, 'AdvisoryBoardView', 'Advisory Board'),
  createPageRoute('/about/team', ROUTE_NAMES.TEAM, 'OurTeamView', 'Our Team'),
  createPageRoute('/about/partners', ROUTE_NAMES.PARTNERS, 'OurPartnersView', 'Our Partners'),
  createPageRoute('/about/mentors', ROUTE_NAMES.MENTORS, 'MentorsView', 'Mentors'),
  createPageRoute(
    '/about/investment-committee',
    ROUTE_NAMES.INVESTORS,
    'InvestmentCommitteeView',
    'Investment Committee',
  ),
]

const programRoutes: RouteRecordRaw[] = [
  createPageRoute(
    '/programs/pre-incubation',
    ROUTE_NAMES.PRE_INCUBATION,
    'PreIncubationView',
    'Pre Incubation',
  ),
  createPageRoute('/programs/incubation', ROUTE_NAMES.INCUBATION, 'IncubationView', 'Incubation'),
  createPageRoute(
    '/programs/acceleration',
    ROUTE_NAMES.ACCELERATION,
    'AccelerationView',
    'Acceleration',
  ),
  createPageRoute('/programs/funding', ROUTE_NAMES.FUNDING, 'AccessFundingView', 'Access Funding'),
  createPageRoute('/programs/nain', ROUTE_NAMES.NAIN, 'NainView', 'New Age Innovation Network'),
  createPageRoute('/programs/cif', ROUTE_NAMES.CIF, 'CifView', 'Common Instrumentation Facility'),
  createPageRoute(
    '/programs/coe-quantum-ai',
    ROUTE_NAMES.COE_QUANTUM_AI,
    'QuantumAIView',
    'Centre of Excellence in Quantum AI and Computing',
  ),
  createPageRoute(
    '/programs/cbde',
    ROUTE_NAMES.CBDE,
    'CbdeView',
    'Capacity Building for Design and Entrepreneurship',
  ),
  createPageRoute(
    '/programs/rgep',
    ROUTE_NAMES.RGEP,
    'RgepView',
    'Rajiv Gandhi Entrepreneurship Program',
  ),
]

const courseRoutes: RouteRecordRaw[] = [
  createPageRoute(
    '/courses',
    ROUTE_NAMES.COURSES,
    'TechnicalEducationAcademyView',
    'Technical Education Academy',
  ),

  createPageRoute(
    '/courses/certification',
    ROUTE_NAMES.CERTIFICATION_COURSES,
    'CertificationCoursesView',
    'Certification Courses',
  ),

  createPageRoute(
    '/courses/certification/:slug',
    ROUTE_NAMES.COURSE_DETAIL,
    'CourseDetailView',
    'Course Detail',
  ),

  createPageRoute(
    '/courses/certification/:slug/apply',
    ROUTE_NAMES.COURSE_APPLY,
    'CourseApplyView',
    'Apply for Certification Course',
  ),

  createPageRoute('/courses/workshops', ROUTE_NAMES.WORKSHOPS, 'WorkshopsView', 'Workshops'),

  createPageRoute(
    '/courses/workshops/:slug/apply',
    ROUTE_NAMES.WORKSHOP_APPLY,
    'WorkshopApplyView',
    'Apply for Workshop',
  ),
]

const ecosystemRoutes: RouteRecordRaw[] = [
  createPageRoute(
    '/ecosystem/market-connects',
    ROUTE_NAMES.MARKET_CONNECTS,
    'MarketConnectsView',
    'Market Connects',
  ),
  createPageRoute(
    '/ecosystem/business-services',
    ROUTE_NAMES.BUSINESS_SERVICES,
    'BusinessServicesView',
    'Business Services',
  ),
  createPageRoute('/ecosystem/co-working', ROUTE_NAMES.CO_WORKING, 'CoWorkingView', 'Co-Working'),
  createPageRoute(
    '/ecosystem/industry-research',
    ROUTE_NAMES.INDUSTRY_RESEARCH,
    'IndustryResearchView',
    'Industry Research',
  ),
  createPageRoute(
    '/ecosystem/prototype-development',
    ROUTE_NAMES.PROTOTYPE_DEVELOPMENT,
    'PrototypeDevelopmentView',
    'Prototype Development',
  ),
  createPageRoute(
    '/ecosystem/technical-education-academy',
    ROUTE_NAMES.TECHNICAL_EDUCATION_ACADEMY,
    'TechnicalEducationAcademyView',
    'Technical Education Academy',
  ),
  createPageRoute('/ecosystem/consulting', ROUTE_NAMES.CONSULTING, 'ConsultingView', 'Consulting'),
]

const communityRoutes: RouteRecordRaw[] = [
  createPageRoute('/community/events', ROUTE_NAMES.EVENTS, 'EventsView', 'Events'),
  createPageRoute('/community/startups', ROUTE_NAMES.STARTUPS, 'StartupsView', 'Startups'),
  createPageRoute(
    '/community/matchmaking',
    ROUTE_NAMES.MATCHMAKING,
    'MatchmakingView',
    'Investor Startup Matchmaking',
  ),
  createPageRoute(
    '/community/matchmaking/startup',
    ROUTE_NAMES.STARTUP_MATCHMAKING,
    'StartupMatchmakingFormView',
    'Startup Matchmaking Form',
  ),
  createPageRoute(
    '/community/matchmaking/investor',
    ROUTE_NAMES.INVESTOR_MATCHMAKING,
    'InvestorMatchmakingFormView',
    'Investor Matchmaking Form',
  ),
]

const eventRoutes: RouteRecordRaw[] = [
  createPageRoute(
    '/community/events/:id/register',
    ROUTE_NAMES.EVENT_REGISTER,
    'EventRegistrationView',
    'Event Registration',
  ),
]

const resourceRoutes: RouteRecordRaw[] = [
  createPageRoute('/resources', ROUTE_NAMES.RESOURCES, 'ResourcesView', 'Resources'),
  createPageRoute(
    '/resources/newsletters/:slug',
    ROUTE_NAMES.NEWSLETTER_DETAIL,
    'NewsletterDetailView',
    'Newsletter Detail',
  ),
]

const actionRoutes: RouteRecordRaw[] = [
  createPageRoute('/contact', ROUTE_NAMES.CONTACT, 'ContactView', 'Contact'),
  createPageRoute(
    '/community-membership/apply',
    ROUTE_NAMES.COMMUNITY_MEMBERSHIP_APPLY,
    'CommunityMembershipApplyView',
    'Community Membership Application',
  ),
  createPageRoute('/apply/:program', ROUTE_NAMES.APPLY, 'ApplyView', 'Apply', {
    props: (route) => ({
      program: String(route.params.program ?? ''),
    }),
  }),
]

const adminRoutes: RouteRecordRaw[] = [
  createPageRoute('/admin/login', ROUTE_NAMES.ADMIN_LOGIN, 'AdminLoginView', 'Admin Login'),
  createPageRoute('/admin/dashboard', ROUTE_NAMES.ADMIN_DASHBOARD, 'AdminDashboardView', 'Admin Dashboard'),
  createPageRoute('/admin/events', ROUTE_NAMES.ADMIN_EVENTS, 'AdminEventsView', 'Admin Events'),
  createPageRoute('/admin/startups', ROUTE_NAMES.ADMIN_STARTUPS, 'AdminStartupsView', 'Admin Startups'),
  createPageRoute('/admin/programs', ROUTE_NAMES.ADMIN_PROGRAMS, 'AdminProgramsView', 'Admin Programs'),
  createPageRoute('/admin/resources', ROUTE_NAMES.ADMIN_RESOURCES, 'AdminResourcesView', 'Admin Resources'),
  createPageRoute('/admin/partners', ROUTE_NAMES.ADMIN_PARTNERS, 'AdminPartnersView', 'Admin Partners'),
  createPageRoute('/admin/mentors', ROUTE_NAMES.ADMIN_MENTORS, 'AdminMentorsView', 'Admin Mentors'),
  createPageRoute('/admin/team-members', ROUTE_NAMES.ADMIN_TEAM_MEMBERS, 'AdminTeamMembersView', 'Admin Team Members'),
  createPageRoute('/admin/board-members', ROUTE_NAMES.ADMIN_BOARD_MEMBERS, 'AdminBoardMembersView', 'Admin Board Members'),
]

const legacyRedirects: RouteRecordRaw[] = [
  createRedirectByName('/about-idrp', ROUTE_NAMES.ABOUT),
  createRedirectByName('/our-board', ROUTE_NAMES.BOARD),
  createRedirectByName('/advisory-board', ROUTE_NAMES.ADVISORY),
  createRedirectByName('/our-team', ROUTE_NAMES.TEAM),
  createRedirectByName('/our-partners', ROUTE_NAMES.PARTNERS),
  createRedirectByName('/mentors', ROUTE_NAMES.MENTORS),
  createRedirectByName('/investment-committee', ROUTE_NAMES.INVESTORS),

  createRedirectByName('/pre-incubation', ROUTE_NAMES.PRE_INCUBATION),
  createRedirectByName('/incubation', ROUTE_NAMES.INCUBATION),
  createRedirectByName('/acceleration', ROUTE_NAMES.ACCELERATION),
  createRedirectByName('/funding', ROUTE_NAMES.FUNDING),

  createRedirectByName('/market-connects', ROUTE_NAMES.MARKET_CONNECTS),
  createRedirectByName('/business-services', ROUTE_NAMES.BUSINESS_SERVICES),
  createRedirectByName('/co-working', ROUTE_NAMES.CO_WORKING),
  createRedirectByName('/industry-research', ROUTE_NAMES.INDUSTRY_RESEARCH),
  createRedirectByName('/prototype-development', ROUTE_NAMES.PROTOTYPE_DEVELOPMENT),
  createRedirectByName('/technical-education-academy', ROUTE_NAMES.TECHNICAL_EDUCATION_ACADEMY),
  createRedirectByName('/consulting', ROUTE_NAMES.CONSULTING),

  createRedirectByName('/events', ROUTE_NAMES.EVENTS),
  createParamRedirect('/events/:id/register', ROUTE_NAMES.EVENT_REGISTER, ['id']),
  createRedirectByName('/startups', ROUTE_NAMES.STARTUPS),
  createRedirectByName('/matchmaking', ROUTE_NAMES.MATCHMAKING),
  createRedirectByName('/matchmaking/startup', ROUTE_NAMES.STARTUP_MATCHMAKING),
  createRedirectByName('/matchmaking/investor', ROUTE_NAMES.INVESTOR_MATCHMAKING),

  createRedirectByName('/careers', ROUTE_NAMES.HOME),

  createRedirectByName('/courses/online-mtech', ROUTE_NAMES.CERTIFICATION_COURSES),
  createRedirectByName('/courses/fdp', ROUTE_NAMES.WORKSHOPS),
  createRedirectByName('/courses/3dw', ROUTE_NAMES.WORKSHOPS),
  {
    path: '/courses/iet',
    redirect: {
      name: ROUTE_NAMES.COURSE_DETAIL,
      params: { slug: 'iet' },
    },
  },

  {
    path: '/courses/iet/apply',
    redirect: {
      name: ROUTE_NAMES.COURSE_APPLY,
      params: { slug: 'iet' },
    },
  },
]

const routes: RouteRecordRaw[] = [
  createPageRoute('/', ROUTE_NAMES.HOME, 'HomeView', 'Home'),

  ...organizationRoutes,
  ...programRoutes,
  ...courseRoutes,
  ...ecosystemRoutes,
  ...communityRoutes,
  ...eventRoutes,
  ...resourceRoutes,
  ...actionRoutes,
  ...adminRoutes,
  ...legacyRedirects,

  {
    path: '/:pathMatch(.*)*',
    redirect: { name: ROUTE_NAMES.HOME },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

router.afterEach((to) => {
  const baseTitle = 'IDRP'
  const pageTitle =
    typeof to.meta.title === 'string' && to.meta.title.trim().length > 0
      ? `${to.meta.title} | ${baseTitle}`
      : baseTitle

  document.title = pageTitle
})

function enhanceRouterPush(routerInstance: Router) {
  const originalPush = routerInstance.push.bind(routerInstance)

  routerInstance.push = async function push(to: RouteLocationRaw) {
    try {
      return await originalPush(to)
    } catch (error) {
      if (isNavigationFailure(error, NavigationFailureType.duplicated)) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
        return error
      }

      throw error
    }
  }
}

enhanceRouterPush(router)



router.beforeEach((to) => {
  const isAdminRoute = to.path.startsWith('/admin')
  const isLoginRoute = to.name === ROUTE_NAMES.ADMIN_LOGIN

  if (isAdminRoute && !isLoginRoute && !isAdminLoggedIn()) {
    return { name: ROUTE_NAMES.ADMIN_LOGIN }
  }

  if (isLoginRoute && isAdminLoggedIn()) {
    return { name: ROUTE_NAMES.ADMIN_DASHBOARD }
  }

  return true
})

export default router
