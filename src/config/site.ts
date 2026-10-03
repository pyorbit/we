const platformRepository = "https://github.com/pyorbit/pyorbit";
const configuredPlatformUrl = import.meta.env.PUBLIC_PLATFORM_URL?.trim();

export const site = {
  name: "PyOrbit",
  title: "PyOrbit — Open-source Python learning",
  description:
    "Explore PyOrbit, an open-source project for learning Python through structured lessons, clear examples, and community-built practice.",
  platformUrl: configuredPlatformUrl || platformRepository,
  hasLivePlatform: Boolean(configuredPlatformUrl),
  platformRepository,
  websiteRepository: "https://github.com/pyorbit/we",
  organization: "https://github.com/pyorbit",
  issues: `${platformRepository}/issues`,
  contributing: `${platformRepository}/blob/master/CONTRIBUTING.md`,
  documentation: `${platformRepository}/blob/master/README.md`,
  contentGuide: `${platformRepository}/blob/master/docs/content/authoring.md`,
  security: `${platformRepository}/blob/master/SECURITY.md`,
  license: "https://github.com/pyorbit/we/blob/main/LICENSE",
} as const;

const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");

export function localUrl(path = ""): string {
  return `${base}${path.replace(/^\/+/, "")}`;
}
