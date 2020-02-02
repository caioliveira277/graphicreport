import React, { useState } from "react";
import {
  withStyles,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { NotificationsActive } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";

const StyledMenu = withStyles({})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

export default function Notifications() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <Badge badgeContent={2} color="secondary">
          <NotificationsActive htmlColor="var(--color-text1)"/>
        </Badge>
      </IconButton>

      <StyledMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <ListItemAvatar>
            <Avatar
              alt="Mark"
              src="https://uploaddeimagens.com.br/images/002/257/965/original/Mark_Zuckerberg.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Markinho"
            secondary="I know where you live - Jan 9, 2014"
          />
        </MenuItem>

        <Divider />

        <MenuItem>
          <ListItemAvatar>
            <Avatar
              alt="Joseph"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFljs6YFrJbR5d_DVR-7-k9jgmam6y0RpizVKQDTl3LsUGhJPYA&s"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Joseph Stranger"
            secondary={<> <Rating name="read-only" value={3} readOnly /> <span> - Fev 1, 2025</span></>}
          />
        </MenuItem>
      </StyledMenu>
    </>
  );
}
