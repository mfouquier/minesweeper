import { Grid, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import GridElements from "./GridElements";

export default function Gameboard() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#FFFFFF',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: 25,
  }));

  return (

    <>
      <GridElements />
    </>

  );
}