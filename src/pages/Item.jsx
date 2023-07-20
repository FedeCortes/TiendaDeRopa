import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Item = (props) => {
  return (
    <Card sx={{ width: 340, height: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.p.image}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "200px",
            display: "block",
            margin: "auto",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.p.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.p.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ marginBottom: "auto" }}>
        <Button size="small" color="primary">
          details
        </Button>
      </CardActions>
    </Card>
  );
};
export default Item;
