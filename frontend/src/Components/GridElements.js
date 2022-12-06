import { Grid, Box } from "@mui/material";
import { Container } from "@mui/system";
import Gameboard from "../Style/Gameboard.css";

import React from "react";


export default function GridElements() {
  const allElements = [];

  const createGridElements = () => {
    const gridRow = [];

    for (let i = 0; i < 10; i++) {
      const gridBox = {
        value: 0,
        isClicked: false
      }
      gridRow.push(gridBox)
    }
    allElements.push(gridRow)
  }

  const fillTheGrid = (num) => {
    const bomb = '💣'
    for (let i = 1; i <= num; i++) {
      createGridElements()
    }

    for (let i = 1; i <= num; i++) {
      let randNum1 = Math.floor(Math.random() * num)
      let randNum2 = Math.floor(Math.random() * num)
      if (allElements[randNum1][randNum2].value === bomb) {
        allElements[randNum1 - 1][randNum2 + 1].value = bomb
      }
      allElements[randNum1][randNum2].value = bomb
    }
  }

  const setValuesForBombProximity = () => {
    for (let i = 0; i < allElements.length; i++) {
      for (let x = 0; x < allElements[i].length; x++) {
        if (allElements[i][x].value === '💣') {
          continue;
        }

        if (i - 1 >= 0 && x - 1 >= 0 && i + 1 <= 9 && x + 1 <= 9 && allElements[i][x + 1] === '💣') allElements[i][x].value++;

        if (i - 1 >= 0 && x - 1 >= 0 && i + 1 <= 9 && x + 1 <= 9 && allElements[i][x - 1] === '💣') allElements[i][x].value++;

        if (i - 1 >= 0 && x - 1 >= 0 && i + 1 <= 9 && x + 1 <= 9 && allElements[i - 1][x - 1] === '💣') allElements[i][x].value++;

        if (i - 1 >= 0 && x - 1 >= 0 && i + 1 <= 9 && x + 1 <= 9 && allElements[i - 1][x] === '💣') allElements[i][x].value++;

        if (i - 1 >= 0 && x - 1 >= 0 && i + 1 <= 9 && x + 1 <= 9 && allElements[i - 1][x + 1] === '💣') allElements[i][x].value++;

        if (i - 1 >= 0 && x - 1 >= 0 && i + 1 <= 9 && x + 1 <= 9 && allElements[i + 1][x - 1] === '💣') allElements[i][x].value++;

        if (i - 1 >= 0 && x - 1 >= 0 && i + 1 <= 9 && x + 1 <= 9 && allElements[i + 1][x] === '💣') allElements[i][x].value++;

        if (i - 1 >= 0 && x - 1 >= 0 && i + 1 <= 9 && x + 1 <= 9 && allElements[i + 1][x + 1] === '💣') allElements[i][x].value++;
      }
    }
  }

  fillTheGrid(10)
  console.log(allElements)
  setValuesForBombProximity()

  return (
    <Container>
      <h1>Minesweeper</h1>
      <Box
        sx={{
          flexGrow: 1,
          width: 600,
          height: 600,
          backgroundColor: 'primary.main',
          justifySelf: 'center'
        }}>
        <Grid container rowSpacing={1} columnSpacing={0}>
          {allElements.map((row, idx) => (
            <div key={idx}>
              {row.map((r, i) => (
                <div key={i} className="gridBox">
                  <h2>{r.value}</h2>
                </div>
              ))}

            </div>


          ))}
        </Grid>
      </Box>

    </Container >
  );
}