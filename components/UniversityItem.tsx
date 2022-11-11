"use client";
import { useRouter } from "next/navigation";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PaidIcon from '@mui/icons-material/Paid';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';

export default function UniversityItem({ university }: { university: any }) {
  const router = useRouter();

  return (
    <div className="p-2">
      <Grid container alignItems="center" gap={2}>
        <Grid item xs={3}>
          <h1>{university.name}</h1>
        </Grid>
        <Grid item xs={2}>
          <AccessTimeIcon />
          <span>{` ${university.deadline}`}</span>
        </Grid>
        <Grid item xs={2}>
          <PaidIcon />
          <span>{` ${university.applicationFee}`}</span>
        </Grid>
        <Grid item xs={2}>
          <StarPurple500Icon />
          <span>{` ${university.status}`}</span>
        </Grid>
        <Grid item xs/>
        <Grid item>
          <IconButton onClick={() => router.push(university.name)}>
            <EditIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
