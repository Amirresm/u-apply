'use client';

import ManageUniversity from "./ManageUniversity";
import ProfessorList from "./ProfessorList";

export default function UniversityDetails({universityName}:{universityName:string}) {
  return (
    <div className="p-4">
      <ManageUniversity universityName={universityName}/>
      <ProfessorList universityName={universityName}/>
    </div>
  )
};