
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const TheAppbar: typeof import("../app/components/TheAppbar.vue").default
export const TheFooter: typeof import("../app/components/TheFooter.vue").default
export const TheSidebar: typeof import("../app/components/TheSidebar.vue").default
export const CoreCodeBlock: typeof import("../app/components/core/CodeBlock.vue").default
export const CoreInfoPageFooter: typeof import("../app/components/core/InfoPageFooter.vue").default
export const CoreSimpleTable: typeof import("../app/components/core/simpleTable/SimpleTable.vue").default
export const CoreSimpleTableTypes: typeof import("../app/components/core/simpleTable/types").default
export const HomeExpoForm: typeof import("../app/components/home/ExpoForm.vue").default
export const HomeValidationSchemaPreview: typeof import("../app/components/home/ValidationSchemaPreview.vue").default
export const NuxtWelcome: typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/welcome.vue").default
export const NuxtLayout: typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-layout").default
export const NuxtErrorBoundary: typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default
export const ClientOnly: typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/client-only").default
export const DevOnly: typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/dev-only").default
export const ServerPlaceholder: typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/server-placeholder").default
export const NuxtLink: typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-link").default
export const NuxtLoadingIndicator: typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default
export const NuxtTime: typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-time.vue").default
export const NuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-route-announcer").default
export const NuxtImg: typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg
export const NuxtPicture: typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture
export const Button: typeof import("../app/components/ui/button/index").Button
export const Tabs: typeof import("../app/components/ui/tabs/index").Tabs
export const TabsContent: typeof import("../app/components/ui/tabs/index").TabsContent
export const TabsList: typeof import("../app/components/ui/tabs/index").TabsList
export const TabsTrigger: typeof import("../app/components/ui/tabs/index").TabsTrigger
export const NuxtPage: typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/pages/runtime/page").default
export const NoScript: typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").NoScript
export const Link: typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Link
export const Base: typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Base
export const Title: typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Title
export const Meta: typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Meta
export const Style: typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Style
export const Head: typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Head
export const Html: typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Html
export const Body: typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Body
export const NuxtIsland: typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-island").default
export const LazyTheAppbar: LazyComponent<typeof import("../app/components/TheAppbar.vue").default>
export const LazyTheFooter: LazyComponent<typeof import("../app/components/TheFooter.vue").default>
export const LazyTheSidebar: LazyComponent<typeof import("../app/components/TheSidebar.vue").default>
export const LazyCoreCodeBlock: LazyComponent<typeof import("../app/components/core/CodeBlock.vue").default>
export const LazyCoreInfoPageFooter: LazyComponent<typeof import("../app/components/core/InfoPageFooter.vue").default>
export const LazyCoreSimpleTable: LazyComponent<typeof import("../app/components/core/simpleTable/SimpleTable.vue").default>
export const LazyCoreSimpleTableTypes: LazyComponent<typeof import("../app/components/core/simpleTable/types").default>
export const LazyHomeExpoForm: LazyComponent<typeof import("../app/components/home/ExpoForm.vue").default>
export const LazyHomeValidationSchemaPreview: LazyComponent<typeof import("../app/components/home/ValidationSchemaPreview.vue").default>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/welcome.vue").default>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-layout").default>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/client-only").default>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/dev-only").default>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/server-placeholder").default>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-link").default>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-time.vue").default>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-route-announcer").default>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture>
export const LazyButton: LazyComponent<typeof import("../app/components/ui/button/index").Button>
export const LazyTabs: LazyComponent<typeof import("../app/components/ui/tabs/index").Tabs>
export const LazyTabsContent: LazyComponent<typeof import("../app/components/ui/tabs/index").TabsContent>
export const LazyTabsList: LazyComponent<typeof import("../app/components/ui/tabs/index").TabsList>
export const LazyTabsTrigger: LazyComponent<typeof import("../app/components/ui/tabs/index").TabsTrigger>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/pages/runtime/page").default>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").NoScript>
export const LazyLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Link>
export const LazyBase: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Base>
export const LazyTitle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Title>
export const LazyMeta: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Meta>
export const LazyStyle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Style>
export const LazyHead: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Head>
export const LazyHtml: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Html>
export const LazyBody: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Body>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-island").default>

export const componentNames: string[]
