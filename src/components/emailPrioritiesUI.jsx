import React, { useState } from "react";
import {
  Grid, Box, Typography, FormControl, InputLabel,
  Select, MenuItem, Paper, Chip
} from "@mui/material";

export default function EmailPrioritiesUI() {
  const SUB_Components = ["CaaS", "SDQ", "Airflow", "ELK"];
  const Frequency = ["7 Days", "14 Days", "30 Days"];
  const statuses = ["All","High", "Medium", "Low","ReClassify"];

  const [selectedComponent, setSelectedComponent] = useState("");
  const [selectedFrequency, setSelectedFrequency] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
      <Grid container spacing={2} alignItems="flex-start">
        {/* LEFT */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" color="warning">Components</Typography>
          <FormControl fullWidth sx={{ mt: 1 }}>
            <InputLabel>Select Component</InputLabel>
            <Select
                value={selectedComponent}
                label="Select Component"
                onChange={(e) => setSelectedComponent(e.target.value)}
            >
                {SUB_Components.map((c) => 
                <MenuItem key={c} value={c}>
                 {c}
                </MenuItem>
                )}

            </Select>
          </FormControl>
        </Grid>

        {/* MIDDLE */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" align="center" color="primary">Email Priorities</Typography>
          <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1, mt: 2 }}>
            {statuses.map((s) => (
              <Chip
                key={s}
                label={s}
                color={selectedStatus === s ? "primary" : "default"}
                onClick={() => setSelectedStatus(s)}
              />
            ))}
          </Box>
        </Grid>

        {/* RIGHT */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" color="primary">Number of Days</Typography>
          <FormControl fullWidth sx={{ mt: 1 }}>
            <InputLabel>Select Range</InputLabel>
            <Select 
            value={selectedFrequency}
            label="Select Range"
            onChange={(e) => setSelectedFrequency(e.target.value)}
            >
            {Frequency.map((f)=> <MenuItem key={f} value={f}>{f}</MenuItem>)}  
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
}
