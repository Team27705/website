import Image from "next/image";

// Canonical season slugs. Add new seasons here.
export const SEASONS = {
  INTO_THE_DEEP: "into-the-deep",
  DECODE: "decode",
} as const;

export type Season = (typeof SEASONS)[keyof typeof SEASONS];

// Supported logo variants. Extend if you add more files.
export const LOGO_VARIANTS = {
  ORCA: "orca",
  LOCKUP: "lockup",
  TAGLINE: "tagline",
  GAMEWORDMARK: "gamewordmark",
} as const;

export type LogoVariant = (typeof LOGO_VARIANTS)[keyof typeof LOGO_VARIANTS];

// Whether a logo belongs to the team or to FIRST.
export type LogoOwnership = "team" | "first";

export const LOGO_OWNERSHIPS: Record<LogoVariant, LogoOwnership> = {
  orca: "team",
  lockup: "team",
  tagline: "team",
  gamewordmark: "first",
};

// Optional per-season filename overrides. Useful when file names don't match the variant name.
const ASSET_OVERRIDES: Partial<
  Record<Season, Partial<Record<LogoVariant, string>>>
> = {
  // example: public/icons/into-the-deep/intodeep-vector.svg exists in project
  // so we map WORDMARK variant to that filename:
  // [SEASONS.INTO_THE_DEEP]: {
  //   [LOGO_VARIANTS.WORDMARK]: "intodeep-vector.svg",
  // },
};

const DEFAULT_SEASON: Season = SEASONS.INTO_THE_DEEP;
const DEFAULT_VARIANT: LogoVariant = LOGO_VARIANTS.ORCA;

export interface GetLogoProps {
  season?: Season; // season slug
  variant?: LogoVariant; // variant of the logo
  width?: number; // width in pixels
  height?: number; // height in pixels
  alt?: string; // alt text override
  className?: string;
}

/**
 * Resolve an asset path under /icons/{season}/{filename}.
 * - By default filename is `${variant}.svg`.
 * - ASSET_OVERRIDES allows per-season filenames.
 */
export function resolveLogoPath(season: Season, variant: LogoVariant): string {
  const overridesForSeason = ASSET_OVERRIDES[season];
  const overrideFilename = overridesForSeason?.[variant];
  // attempt svg by default (or use override)
  let filename = overrideFilename ?? `${variant}.svg`;
  if (variant === LOGO_VARIANTS.GAMEWORDMARK) {
    filename = overrideFilename ?? `${variant}.png`;
  }

  return `/meta/${season}/${filename}`;
}

export function Logo({
  season = DEFAULT_SEASON,
  variant = DEFAULT_VARIANT,
  width = 100,
  height = 50,
  alt,
  className = "",
}: GetLogoProps) {
  // Validate (narrow) inputs at runtime in case callers pass dynamic strings.
  const validSeasons = Object.values(SEASONS) as Season[];
  const validVariants = Object.values(LOGO_VARIANTS) as LogoVariant[];

  const chosenSeason: Season = validSeasons.includes(season as Season)
    ? (season as Season)
    : DEFAULT_SEASON;
  const chosenVariant: LogoVariant = validVariants.includes(
    variant as LogoVariant,
  )
    ? (variant as LogoVariant)
    : DEFAULT_VARIANT;

  const src = resolveLogoPath(chosenSeason, chosenVariant);
  const altText = alt
    ? alt
    : `Team 27705's ${chosenVariant} logo for the ${chosenSeason} season`;
  // if image is FIRST property, use different alt text
  const isFirstLogo =
    LOGO_OWNERSHIPS[chosenVariant] === "first";
  const finalAlt =
    isFirstLogo
      ? `FIRST's ${chosenVariant} logo for the ${chosenSeason} season`
      : altText;

  return (
    <Image
      src={src}
      alt={finalAlt}
      width={width}
      height={height}
      className={className}
    />
  );
}

/**
 * Convenience helper: return the logo asset path for the requested season/variant.
 * Use this when you only need the path (e.g. to set src on an <img>, background-image, or for other logic).
 */
export function getLogoSrc(
  season: Season = DEFAULT_SEASON,
  variant: LogoVariant = DEFAULT_VARIANT,
): string {
  // runtime-narrowing using canonical values
  const validSeasons = Object.values(SEASONS) as Season[];
  const validVariants = Object.values(LOGO_VARIANTS) as LogoVariant[];

  const chosenSeason: Season = validSeasons.includes(season as Season)
    ? (season as Season)
    : DEFAULT_SEASON;
  const chosenVariant: LogoVariant = validVariants.includes(
    variant as LogoVariant,
  )
    ? (variant as LogoVariant)
    : DEFAULT_VARIANT;

  return resolveLogoPath(chosenSeason, chosenVariant);
}

/*
Usage examples:

import GetLogo, { SEASONS, LOGO_VARIANTS } from "src/components/get-logo";

// JSX examples:
<GetLogo season={SEASONS.INTO_THE_DEEP} variant={LOGO_VARIANTS.WORDMARK} width={240} height={60} />
<GetLogo variant={LOGO_VARIANTS.ORCA} />

Design notes:
- Use the exported `Season` and `LogoVariant` types in other components to keep values correct.
- Add any filename that doesn't match the variant name to `ASSET_OVERRIDES`.
- Files are expected under `public/icons/{season}/`.
*/
