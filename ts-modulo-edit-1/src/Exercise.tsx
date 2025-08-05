import React, { ReactNode } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface ExerciseProps {
  title: string;
  description: string;
  solution: string;
  children?: ReactNode;
}

const Exercise: React.FC<ExerciseProps> = ({
  title,
  description,
  solution,
  children,
}) => (
  <Box my={2}>
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {description}
        </Typography>
        <Box mb={1}>{children}</Box>
        <Typography
          variant="caption"
          color="success.main"
          style={{ display: "block", marginTop: 8 }}>
          <strong>Solution:</strong> {solution}
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default Exercise;
