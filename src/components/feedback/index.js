import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function Feedback() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBMxyAg9hl69ZUyDaSbnCW2ET7pc_6q_AsC5VD0XaWJxoHW6Z-IA&s" />
        </ListItemAvatar>
        <ListItemText
          primary="Will Smith"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
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
          <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFljs6YFrJbR5d_DVR-7-k9jgmam6y0RpizVKQDTl3LsUGhJPYA&s" />
        </ListItemAvatar>
        <ListItemText
          primary="Joseph"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
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
          <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFljs6YFrJbR5d_DVR-7-k9jgmam6y0RpizVKQDTl3LsUGhJPYA&s" />
        </ListItemAvatar>
        <ListItemText
          primary="Joseph"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
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
  );
}
