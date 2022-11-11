"use client";

import Grid from "@mui/material/Grid";
import { useRouter } from "next/navigation";
import { getUniversityByName } from "../../utils/dataUtils";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PaidIcon from "@mui/icons-material/Paid";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";

export default function NavbarUniversityContent({
  universityName,
}: {
  universityName: string;
}) {
  const router = useRouter();
  const university = getUniversityByName(universityName);
  return (
    <ul className="flex items-center gap-5">
      {university && (
        <Grid container alignItems="center" gap={3}>
          <Grid item>
            <AccessTimeIcon />
            <span>{` ${university.deadline}`}</span>
          </Grid>
          <Grid item>
            <PaidIcon />
            <span>{` ${university.applicationFee}`}</span>
          </Grid>
          <Grid item>
            <StarPurple500Icon />
            <span>{` ${university.status}`}</span>
          </Grid>
        </Grid>
      )}
      <li onClick={() => router.push("/")}>Back</li>
    </ul>
  );
}
