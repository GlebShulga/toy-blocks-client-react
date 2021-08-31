import React from "react";

import {
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";

const Block = ({ block }) => {

  const index = block?.attributes.index.toString().padStart(3, "0");
  const text =
    block?.attributes.data.charAt(0).toUpperCase() +
    block?.attributes.data.slice(1);

  const classes = useStyles();
  return (
    <Box className={classes.block}>
      <Typography variant="subtitle1" className={classes.index}>
        {index}
      </Typography>
      <Typography variant="subtitle1" className={classes.text}>
        {text}
      </Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  block: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#e0e0e0",
    margin: "0.2rem 0.2rem",
    padding: "0.2rem 0.5rem",
  },
  index: {
    color: "#1976d2",
    fontWeight: "bold",
    fontSize: theme.typography.pxToRem(11),
  },

  text: {
    fontSize: theme.typography.pxToRem(14),
    lineHeight: 2,
  },
}));


export default Block;
