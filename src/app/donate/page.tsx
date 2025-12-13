import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "~/components/ui/alert";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "~/components/ui/card";
import Image from "next/image";
import { Info } from "lucide-react";

export default function DonatePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-[#032d64] to-[#15162c] text-white">
      <div
        className="relative container flex h-[35vh] max-h-[35vh] items-center justify-center px-4 pt-32"
      >
        <div className="flex w-full max-w-[min(92vw,1200px)] flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-yellow-400">Donate</h1>
        </div>
      </div>
      <section className="flex flex-col w-[90vw] gap-6 sm:flex-row sm:space-x-8 sm:max-w-[65vw]">
        <Card className="bg-gray-800 text-white shadow-lg flex-1 text-center m-2">
          <CardHeader>
            <CardTitle>
              <h2 className="text-4xl font-semibold text-yellow-400 mb-4">
                Online Donations
              </h2>
            </CardTitle>
            <CardDescription className="text-xl font-semibold text-white max-w-[80%] mx-auto">
              Make a secure online donation through the Brooklyn Tech Alumni Foundation.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 flex flex-col items-center justify-center sm:max-w-[80%] mx-auto">
            <ol className="list-decimal list-inside space-y-3">
              <li>
                Visit{" "}
                <a
                  href="https://bthsalumni.org/donate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  bthsalumni.org/donate
                </a>
              </li>
              <li>
                Select <b>"Robotics"</b> from the <b>"Designation"</b> dropdown
                menu.
              </li>
            </ol>
            <Image
              src="/donate-designation.png"
              alt="Selecting 'Robotics' from the Designation dropdown"
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <ol start={3} className="list-decimal list-inside space-y-3">
              <li>
                Under the <b>"Leave a comment"</b> section, write{" "}
                <b>"FTC Robotics Team"</b>.
              </li>
            </ol>
            <Image
              src="/donate-comment.png"
              alt="Writing 'FTC Robotics Team' in the Leave a comment section"
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
          </CardContent>
        </Card>
        <Card className="bg-gray-800 text-white shadow-lg flex-1 text-center mx-2">
          <CardHeader>
            <CardTitle>
              <h2 className="text-4xl font-semibold text-yellow-400 mb-4">
                Mail-in Donations
              </h2>
            </CardTitle>
            <CardDescription className="text-xl font-semibold text-white max-w-[80%] mx-auto">
              Send your contribution via a check to the Brooklyn Tech Alumni Foundation.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 flex flex-col items-center justify-center sm:max-w-[80%] mx-auto">
            <p>
              Please make checks payable to{" "}
              <b>"Brooklyn Tech Alumni Foundation"</b> with{" "}
              <b>"FTC Robotics Team"</b> in the memo line, and mail to:
            </p>
            <address className="not-italic text-center">
              Brooklyn Tech Alumni Foundation
              <br />
              Attn: FTC Robotics Team
              <br />
              P.O. Box 26608
              <br />
              Brooklyn, NY 11202-6608
            </address>
            <Alert className="bg-gray-800 text-white shadow-lg flex-1 text-left mx-2">
              <Info />
              <AlertTitle className=" font-bold">
                Tax Information
              </AlertTitle>
              <AlertDescription>
                The Brooklyn Tech Alumni Foundation is a 501(c)(3) nonprofit organization, with tax ID 11-2739496. All donations are tax deductible and a W-9 form can be provided on request.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}