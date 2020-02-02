import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Card
} from "@material-ui/core";
import { ThumbUpAltRounded } from "@material-ui/icons";
import { styleList } from "./styles"; 

const customList = makeStyles(styleList());

export default function CardFeedback() {

  return (
    <Card className={customList().card}>
      <Typography variant="h5" component="h2" gutterBottom align="center">
        Feedback <ThumbUpAltRounded />
      </Typography>
      <List className={customList().root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBMxyAg9hl69ZUyDaSbnCW2ET7pc_6q_AsC5VD0XaWJxoHW6Z-IA&s"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Will Smith"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={customList().inline}
                  color="textPrimary"
                >
                  10:04 hrs
                </Typography>
                {" — Ótimos resultados apresentados este mês :)"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Travis Howard"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFljs6YFrJbR5d_DVR-7-k9jgmam6y0RpizVKQDTl3LsUGhJPYA&s"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Joseph"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={customList().inline}
                  color="textPrimary"
                >
                  01/02/2020
                </Typography>
                {" — Cade os meus Leads???"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Travis Howard"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFljs6YFrJbR5d_DVR-7-k9jgmam6y0RpizVKQDTl3LsUGhJPYA&s"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Joseph"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={customList().inline}
                  color="textPrimary"
                >
                  30/01/2020
                </Typography>
                {" — Gostei mais consegue me enviar por fax?"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Card>
  );
}
