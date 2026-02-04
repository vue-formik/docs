
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

interface _GlobalComponents {
  'TheAppbar': typeof import("../../app/components/TheAppbar.vue").default
  'TheFooter': typeof import("../../app/components/TheFooter.vue").default
  'TheSidebar': typeof import("../../app/components/TheSidebar.vue").default
  'CoreCodeBlock': typeof import("../../app/components/core/CodeBlock.vue").default
  'CoreInfoPageFooter': typeof import("../../app/components/core/InfoPageFooter.vue").default
  'CoreSimpleTable': typeof import("../../app/components/core/simpleTable/SimpleTable.vue").default
  'CoreSimpleTableTypes': typeof import("../../app/components/core/simpleTable/types").default
  'HomeExpoForm': typeof import("../../app/components/home/ExpoForm.vue").default
  'HomeValidationSchemaPreview': typeof import("../../app/components/home/ValidationSchemaPreview.vue").default
  'NuxtWelcome': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/welcome.vue").default
  'NuxtLayout': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-layout").default
  'NuxtErrorBoundary': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default
  'ClientOnly': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/client-only").default
  'DevOnly': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/dev-only").default
  'ServerPlaceholder': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/server-placeholder").default
  'NuxtLink': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-link").default
  'NuxtLoadingIndicator': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default
  'NuxtTime': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-time.vue").default
  'NuxtRouteAnnouncer': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-route-announcer").default
  'NuxtImg': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg
  'NuxtPicture': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture
  'Button': typeof import("../../app/components/ui/button/index").Button
  'Tabs': typeof import("../../app/components/ui/tabs/index").Tabs
  'TabsContent': typeof import("../../app/components/ui/tabs/index").TabsContent
  'TabsList': typeof import("../../app/components/ui/tabs/index").TabsList
  'TabsTrigger': typeof import("../../app/components/ui/tabs/index").TabsTrigger
  'NuxtPage': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/pages/runtime/page").default
  'NoScript': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").NoScript
  'Link': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Link
  'Base': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Base
  'Title': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Title
  'Meta': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Meta
  'Style': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Style
  'Head': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Head
  'Html': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Html
  'Body': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Body
  'NuxtIsland': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-island").default
  'LazyTheAppbar': LazyComponent<typeof import("../../app/components/TheAppbar.vue").default>
  'LazyTheFooter': LazyComponent<typeof import("../../app/components/TheFooter.vue").default>
  'LazyTheSidebar': LazyComponent<typeof import("../../app/components/TheSidebar.vue").default>
  'LazyCoreCodeBlock': LazyComponent<typeof import("../../app/components/core/CodeBlock.vue").default>
  'LazyCoreInfoPageFooter': LazyComponent<typeof import("../../app/components/core/InfoPageFooter.vue").default>
  'LazyCoreSimpleTable': LazyComponent<typeof import("../../app/components/core/simpleTable/SimpleTable.vue").default>
  'LazyCoreSimpleTableTypes': LazyComponent<typeof import("../../app/components/core/simpleTable/types").default>
  'LazyHomeExpoForm': LazyComponent<typeof import("../../app/components/home/ExpoForm.vue").default>
  'LazyHomeValidationSchemaPreview': LazyComponent<typeof import("../../app/components/home/ValidationSchemaPreview.vue").default>
  'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/welcome.vue").default>
  'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-layout").default>
  'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default>
  'LazyClientOnly': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/client-only").default>
  'LazyDevOnly': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/dev-only").default>
  'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/server-placeholder").default>
  'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-link").default>
  'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default>
  'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-time.vue").default>
  'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-route-announcer").default>
  'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg>
  'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture>
  'LazyButton': LazyComponent<typeof import("../../app/components/ui/button/index").Button>
  'LazyTabs': LazyComponent<typeof import("../../app/components/ui/tabs/index").Tabs>
  'LazyTabsContent': LazyComponent<typeof import("../../app/components/ui/tabs/index").TabsContent>
  'LazyTabsList': LazyComponent<typeof import("../../app/components/ui/tabs/index").TabsList>
  'LazyTabsTrigger': LazyComponent<typeof import("../../app/components/ui/tabs/index").TabsTrigger>
  'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/pages/runtime/page").default>
  'LazyNoScript': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").NoScript>
  'LazyLink': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Link>
  'LazyBase': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Base>
  'LazyTitle': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Title>
  'LazyMeta': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Meta>
  'LazyStyle': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Style>
  'LazyHead': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Head>
  'LazyHtml': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Html>
  'LazyBody': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/head/runtime/components").Body>
  'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@types+node@25.0.3_@vue+compiler-sfc@3.5.26_cac@6.7.14_a32dee90f0e11f6f9951cf2262c76671/node_modules/nuxt/dist/app/components/nuxt-island").default>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
