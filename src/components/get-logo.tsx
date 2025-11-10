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
} as const;

export type LogoVariant = (typeof LOGO_VARIANTS)[keyof typeof LOGO_VARIANTS];

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
  const filename = overrideFilename ?? `${variant}.svg`;
  return `/icons/${season}/${filename}`;
}

export default function GetLogo({
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

  return (
    <Image
      src={src}
      alt={
        alt ??
        `Team 27705's ${chosenVariant} logo for the ${chosenSeason} season`
      }
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
