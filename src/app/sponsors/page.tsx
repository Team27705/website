import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "~/components/ui/card";
import Image from "next/image";

const sponsors = [
  {
    name: "Ike Heller Robotics Center",
    logo: "/sponsors/ike-heller.png",
  },
  {
    name: "The DEKA Foundation",
  },
  {
    name: "Jabil Cares Foundation",
    logo: "/sponsors/jabil-cares.png",
    website: "https://jabil.com/about-us/in-the-community/jabil-cares-foundation.html",
  },
  {
    name: "BOSCH",
    logo: "/sponsors/bosch.svg",
    website: "https://www.bosch.com",
  },
  {
    name: "MakeLab",
    logo: "/sponsors/makelab.svg",
    website: "https://makelab.com",
  },
  {
    name: "Brooklyn Tech Alumni Foundation (special thanks to Dr. Landry)",
    logo: "/sponsors/bths-alumni.svg",
    website: "https://bthsalumni.org",
  },
];

export default function SponsorsPage() {
  return (
    <main className="flex min-h-[85vh] flex-col items-center justify-center bg-linear-to-b from-[#032d64] to-[#15162c] text-white">
      <div className="relative container flex h-[35vh] max-h-[35vh] items-center justify-center px-4 pt-32">
        <div className="flex w-full max-w-[min(92vw,1200px)] flex-col items-center justify-center">
          <h1 className="text-center text-6xl font-bold text-yellow-400">
            Our Sponsors
          </h1>
        </div>
      </div>
      <section
        className="relative container flex w-full flex-col items-center justify-center px-4 py-8"
        id="sponsors"
      >
        <div className="flex w-full max-w-[min(92vw,1200px)] flex-col flex-wrap items-center justify-center gap-6 sm:flex-row">
          {sponsors.map((sponsor) => (
            <Card
              key={sponsor.name}
              className="flex h-60 w-full sm:w-[16rem] min-w-[16rem] items-center justify-center bg-gray-800 text-white shadow-lg text-center"
            >
              <CardContent>
                {sponsor.website ? (
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {sponsor.logo ? (
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={200}
                        height={100}
                        className="object-contain w-full h-auto"
                      />
                    ) : (
                      <span className="text-4xl sm:text-2xl">{sponsor.name}</span>
                    )}
                  </a>
                ) : sponsor.logo ? (
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={200}
                    height={100}
                    className="object-contain w-full h-auto"
                  />
                ) : (
                  <span className="text-4xl sm:text-2xl">{sponsor.name}</span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
