import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "~/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import Image from "next/image";
import { TeamMembers, TeamDepartments, getMembersByDeptartment, getTeamMemberInitials } from "~/components/team-members";

export default function TeamPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-[#032d64] to-[#15162c] text-white">
      <div
        className="relative container flex h-[35vh] max-h-[35vh] items-center justify-center px-4 pt-32"
        id="hero"
      >
        <div className="flex w-full max-w-[min(92vw,1200px)] flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-yellow-400">Meet Our Team</h1>
        </div>
      </div>
      {
        TeamDepartments.map((department) => (
          <section
            key={department}
            className="relative container flex w-full flex-col items-center justify-center px-4 py-8"
            id={department.toLowerCase()}
          >
            <h2 className="mb-6 text-4xl font-semibold text-yellow-400">
              {department}
            </h2>
            <div className="flex w-full max-w-[min(92vw,1200px)] gap-x-6 items-center justify-center">
              {getMembersByDeptartment(department).map((member) => (
                <Card
                  key={member.name}
                  className="bg-gray-800 text-white shadow-lg min-w-64 h-60"
                >
                  <CardHeader className="flex flex-col items-center">
                    <Avatar className="mb-4 h-24 w-24">
                      <AvatarImage
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="rounded-full"
                      />
                      <AvatarFallback>
                        {getTeamMemberInitials(member.name)}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl font-bold">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-yellow-400">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
        ))
      }
      {/* Header is rendered in the layout to keep it fixed to the viewport */}
      {
        /* Stuff to make this scroll */
        Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="my-8 h-32 w-full" />
        ))
      }
    </main>
  );
}
