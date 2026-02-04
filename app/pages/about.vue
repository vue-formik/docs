<script setup lang="ts">
import pkgJson from "../../package.json";
import Links from "@/constants/Links.ts";

const { dependencies } = pkgJson;
const version = dependencies["vue-formik"]?.replace(/^\^/, "");
const links = [
  {
    title: "Github",
    url: Links.Github,
    color: "text-gray-100",
  },
  {
    title: "Documentation",
    url: Links.Documentation,
    color: "text-green-500",
  },
  {
    title: "Playground",
    url: Links.Playground,
    color: "text-blue-500",
  },
  {
    title: "NPM",
    url: Links.NPM,
    color: "text-red-500",
  },
  {
    title: "Issues",
    url: Links.Issues,
    color: "text-yellow-500",
  },
  {
    title: "Pull Requests",
    url: Links.PullRequests,
    color: "text-purple-500",
  },
];
const author = {
  name: "Kiran Parajuli",
  email: "kiranparajuli589@gmail.com",
  linkedIn: Links.KiranLinkedIn,
};
const birth = "2024-12-28T18:22:01.000Z";
const fromNow = new Date(birth).toLocaleString();

useSEO({
  title: "About - Vue Formik",
  description:
    "Learn more about Vue Formik, its author, version information, and links to resources.",
  keywords: ["vue-formik", "about", "author", "version"],
});
</script>

<template>
  <div class="flex flex-col gap-4 w-full items-center text-center py-16">
    <h1 class="text-lg font-bold">Vue Formik</h1>

    <img
      alt="Vue Formik Logo"
      src="/logo.png"
      class="size-24 rounded-full border border-gray-200 shadow-lg my-8"
    />

    <ul class="flex flex-col gap-2">
      <li>
        <strong>Version: </strong>
        <code class="border rounded-lg px-2 py-1 border-red-500 text-red-400">{{ version }}</code>
      </li>
      <li><strong>Author:</strong> {{ author.name }}</li>
      <li><strong>Email:</strong> {{ author.email }}</li>
      <li>
        <strong>LinkedIn:</strong>
        <a
          :href="author.linkedIn"
          class="text-[var(--color-primary)] hover:underline"
          target="_blank"
        >
          Kiran Parajuli
        </a>
      </li>
      <li><strong>Birth:</strong> {{ fromNow }}</li>
    </ul>

    <div class="flex flex-wrap justify-center gap-4 max-w-[300px] mt-12">
      <a
        v-for="link in links"
        :key="link.url"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        :class="{
          'text-sm hover:underline': true,
          'border rounded-2xl px-4 py-2': true,
          [link.color]: true,
        }"
      >
        {{ link.title }}
      </a>
    </div>
  </div>
</template>
