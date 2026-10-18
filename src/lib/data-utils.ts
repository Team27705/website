import { TeamMembers } from "./data";

export function getMembersByDepartment(department: string) {
  return TeamMembers.filter((member) => member.department === department);
}

export function getTeamMemberInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}
