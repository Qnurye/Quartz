import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Qnurye's Notes",
    pageTitleSuffix: " | Qnury'es",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "umami",
      websiteId: "7489878c-0da8-456a-9301-75f2b04d196d",
    },
    locale: "en-US",
    baseUrl: "pad.qnury.es",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        title: "Arvo",
        header: "Baskervville",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#F9FAFB",
          lightgray: "#E5E7EB",
          gray: "#9CA3AF",
          darkgray: "#4B5563",
          dark: "#1F2937",
          secondary: "#5E85B7",
          tertiary: "#689CAB",
          highlight: "rgba(94, 133, 183, 0.15)",
          textHighlight: "#FFD6A588",
        },
        darkMode: {
          light: "#16181D",
          lightgray: "#2A2F3A",
          gray: "#8D96A0",
          darkgray: "#D1D5DB",
          dark: "#F3F4F6",
          secondary: "#7CA3D4",
          tertiary: "#689CAB",
          highlight: "rgba(94, 133, 183, 0.15)",
          textHighlight: "#FFD6A588",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "one-light",
          dark: "one-dark-pro",
        },
        keepBackground: true,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),

      Plugin.CustomOgImages(),
    ],
  },
}

export default config
