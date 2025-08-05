import React, { ReactNode, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

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
}) => {
  const [showSolution, setShowSolution] = useState(false);

  return (
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
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Button
              variant="outlined"
              size="small"
              onClick={() => setShowSolution(!showSolution)}
              startIcon={
                showSolution ? <VisibilityOffIcon /> : <VisibilityIcon />
              }>
              {showSolution ? "Hide Solution" : "Show Solution"}
            </Button>
          </Box>
          {showSolution && (
            <Typography
              variant="caption"
              color="success.main"
              style={{ display: "block", marginTop: 8 }}>
              <strong>Solution:</strong> {solution}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Exercise;
