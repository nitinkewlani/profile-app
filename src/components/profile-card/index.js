import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "../useStyles";
import UserDetails from "../user-details";
import ProfileActions from "../profile-actions";

const ProfileCard = ({ data }) => {
  const classes = useStyles();
  const {
    name = "NA",
    email = "NA",
    phone = "NA",
    website = "NA",
    username = "NA",
  } = data || {};

  const getUserImage = () => (
    <img
      src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
      alt={name}
      title={name}
      style={{ background: "#F5F5F5" }}
    />
  );

  return (
    <Box className={classes.container}>
      <Box className={classes.imageContainer}>{getUserImage()}</Box>
      <Box className={classes.userDetailsContainer}>
        <UserDetails {...{ name, email, phone, website }} />
      </Box>
      <Box className={classes.userActions}>
        <ProfileActions />
      </Box>
    </Box>
  );
};

export default ProfileCard;
