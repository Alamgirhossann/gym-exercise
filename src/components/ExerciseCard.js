import { Button, Stack, Typography } from "@mui/material";
import { fontSize } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#FFF",
            backgroundColor: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#FFF",
            backgroundColor: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography ml='21px' color='#000' fontWeight='bold' pb='10px' textTransform='capitalize' mt='11px' fontSize='22px'>
      {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
