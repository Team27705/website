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
    name: "The DEKA Foundation",
    logo: "/sponsors/deka-foundation.png",
    website: "",
  },
  {
    name: "BOSCH",
    logo: "/sponsors/bosch.png",
    website: "https://bosch.com",
  },
  {
    name: "Jabil Cares Foundation",
    logo: "/sponsors/jabil-cares-foundation.png",
    website: "https://jabil.com",
  },
  {
    name: "Brooklyn Technical High School",
    logo: "/sponsors/bths.png",
    website: "https://bths.edu",
  },
  {
    name: "Brooklyn Tech Alumni Foundation (special thanks to Dr. Landry)",
    logo: "/sponsors/bths-alumni.png",
    website: "https://bthsalumni.org",
  }
];

export default function SponsorsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-[#032d64] to-[#15162c] text-white">
      <div
        className="relative container flex h-[35vh] max-h-[35vh] items-center justify-center px-4 pt-32"
      >
        <div className="flex w-full max-w-[min(92vw,1200px)] flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-yellow-400">Our Sponsors</h1>
        </div>
      </div>
      <section
        className="relative container flex w-full flex-col items-center justify-center px-4 py-8"
        id="sponsors"
      >
        <div className="flex w-full max-w-[min(92vw,1200px)] gap-x-6 items-center justify-center">
          {sponsors.map((sponsor) => (
            <Card
              key={sponsor.name}
              className="bg-gray-800 text-white shadow-lg min-w-64 h-60 flex items-center justify-center"
            >
              <CardContent>
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
