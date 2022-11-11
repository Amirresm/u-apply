"use client";

import { getUniversityList } from "../utils/dataUtils";
import UniversityItem from "./UniversityItem";

export default function UniversityList({}: {}) {
  return (
    <div className="p-4 flex flex-col">
      {getUniversityList().map((university) => (
        <UniversityItem key={university.name} university={university} />
      ))}
    </div>
  );
}
