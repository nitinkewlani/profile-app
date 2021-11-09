import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    border: "1px solid #E9E9E9",
    borderRadius: "5px",
  },
  imageContainer: {
    width: "100%",
  },
  userDetailsContainer: {
    margin: "20px auto",
    width: "90%",
  },
  userName: {
    color: "#333333",
    fontWeight: "600",
    fontSize: "18px",
  },
  userDetailsRow: {
    display: "flex",
    alignItems: "center",
    padding: "5px",
    color: "#5E5E5E",
  },
  ellipsisClass: {
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  userActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    background: "#FAFAFA",
    border: "1px solid #E9E9E9",
  },
  redIcon: {
    color: "#FF0000",
  },
  otherIcon: {
    color: "#5E5E5E",
  },
  actionIconContainer: {
    padding: "15px",
  },
});
