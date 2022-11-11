"use client";
import { useRouter } from "next/navigation";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import SchoolIcon from '@mui/icons-material/School';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';

export default function ProfessorItem({ professor, showUniversity }: { professor: any, showUniversity?: boolean }) {
  const router = useRouter();

  return (
    <div className="p-2">
      <Grid container alignItems="center" gap={2}>
        <Grid item xs={3}>
          <h1>{professor.name}</h1>
        </Grid>
        {showUniversity && <Grid item xs={3}>
          <SchoolIcon />
          <span>{` ${professor.university}`}</span>
        </Grid>}
        <Grid item xs={3}>
          <ViewHeadlineIcon />
          <span>{` ${professor.field}`}</span>
        </Grid>
        <Grid item xs/>
        <Grid item>
          <IconButton onClick={() => router.push(professor.name)}>
            <EditIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
