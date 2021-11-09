import React from "react";
import { Box } from "@material-ui/core";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PhoneEnabledOutlinedIcon from "@material-ui/icons/PhoneEnabledOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import clsx from "clsx";
import { useStyles } from "../useStyles";

const UserDetails = (props) => {
  const {
    name = "NA",
    email = "NA",
    phone = "NA",
    website = "NA",
  } = props || {};
  const classes = useStyles();
  const userData = [
    { value: name },
    { value: email, Icon: EmailOutlinedIcon },
    { value: phone, Icon: PhoneEnabledOutlinedIcon },
    { value: website, Icon: LanguageOutlinedIcon },
  ];
  return (
    <>
      {userData.map(({ value, Icon }, index) => (
        <Box className={classes.userDetailsRow}>
          {Icon && (
            <Box
              style={{
                marginRight: "10px",
                marginTop: "4px",
              }}
            >
              <Icon />
            </Box>
          )}
          <Box
            className={clsx(
              { [classes.userName]: index === 0 },
              classes.ellipsisClass
            )}
          >
            {value}
          </Box>
        </Box>
      ))}
    </>
  );
};

export default UserDetails;
