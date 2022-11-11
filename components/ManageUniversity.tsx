"use client";

import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { getUniversityByName, updateUniversityByName } from "../utils/dataUtils";

export default function ManageUniversity({
  universityName,
}: {
  universityName: string;
}) {
  const [university, setUniversity] = useState(
    getUniversityByName(universityName)
  );

  const updateField = (field: string) => (event: any) => {
    setUniversity((ps: any) => ({ ...ps, [field]: event.target.value }));
  };

  const save = () => {
    updateUniversityByName(universityName, university);
  }

  return (
    <div>
      <Grid container alignItems="center">
        {Object.keys(university || {}).map((key) => (
          <Grid key={key} item xs={12} sm={4} md={3} lg={2}>
            <div
              className="p-2"
              >
            <TextField
              label={key}
              value={university[key]}
              onChange={updateField(key)}
              size="small"
              fullWidth
            />
            </div>
          </Grid>
        ))}
        <Grid item xs={12} className="p-2">
          <Button variant="contained" onClick={save}>save</Button>
        </Grid>
      </Grid>
    </div>
  );
}
