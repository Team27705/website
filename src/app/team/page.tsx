import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "~/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import Image from "next/image";
import {
  TeamMembers,
  TeamDepartments,
  getMembersByDeptartment,
  getTeamMemberInitials,
} from "~/components/team-members";

export default function TeamPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-[#032d64] to-[#15162c] text-white">
      <div className="relative container flex h-[35vh] max-h-[35vh] items-center justify-center px-4 pt-32">
        <div className="flex w-full max-w-[min(92vw,1200px)] flex-col items-center justify-center">
          <h1 className="text-center text-6xl font-bold text-yellow-400">
            Meet Our Team
          </h1>
        </div>
      </div>
      {TeamDepartments.map((department) => (
        <section
          key={department}
          className="relative container flex w-full flex-col items-center justify-center px-4 py-8"
          id={department.toLowerCase()}
        >
          <h2 className="mb-6 text-4xl font-semibold text-yellow-400">
            {department}
          </h2>
          <div className="flex w-full max-w-[min(92vw,1200px)] flex-col items-center justify-center gap-6 sm:flex-row">
            {getMembersByDeptartment(department).map((member) => (
              <Card
                key={member.name}
                className="h-36 sm:h-54 min-w-56 w-[80vw] sm:w-56 bg-gray-800 text-white shadow-lg"
              >
                <CardHeader className="flex flex-row items-center sm:flex-col gap-6 sm:gap-0">
                  <Avatar className="mb-4 size-24">
                    <AvatarImage
                      src={member.image}
                      alt={member.name}
                      className="rounded-full"
                    />
                    <AvatarFallback className="text-black">
                      {getTeamMemberInitials(member.name)}
                    </AvatarFallback>
                  </Avatar>
                    <div className="flex flex-col sm:items-center justify-center">
                    <CardTitle className="text-xl font-bold">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-yellow-400">
                      {member.role}
                    </CardDescription>
                    </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
