"use client";

import { getProfessorList } from "../utils/dataUtils";
import ProfessorItem from "./ProfessorItem";

export default function ProfessorList({
  universityName,
}: {
  universityName?: string;
}) {
  return (
    <div className="flex flex-col">
      {getProfessorList()
        .filter((professor) =>
          universityName ? professor.university === universityName : true
        )
        .map((professor) => (
          <ProfessorItem
            key={professor.name}
            professor={professor}
            showUniversity
          />
        ))}
    </div>
  );
}
