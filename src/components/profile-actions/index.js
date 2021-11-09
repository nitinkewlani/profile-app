import React from "react";
import { Box } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import clsx from "clsx";
import { useStyles } from "../useStyles";

const ProfileActions = () => {
  const classes = useStyles();
  const userActions = [
    // { Icon: FavoriteIcon },
    { Icon: FavoriteBorderIcon },
    { Icon: EditOutlinedIcon },
    { Icon: DeleteIcon },
  ];

  return (
    <>
      {userActions.map(({ Icon }, index) => (
        <Box
          className={clsx(
            { [classes.redIcon]: [0].includes(index) },
            { [classes.otherIcon]: ![0].includes(index) },
            classes.actionIconContainer
          )}
        >
          <Icon />
        </Box>
      ))}
    </>
  );
};

export default ProfileActions;
