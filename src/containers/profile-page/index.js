import React, { useEffect, useState } from "react";
import { fetchProfileData } from "./apis";
import ProfileCard from "../../components/profile-card";
import { Box, Grid } from "@material-ui/core";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState([]);

  const getProfileData = async () => {
    try {
      const { data = [] } = await fetchProfileData();
      setProfileData(data);
    } catch {
      console.log("Data not available !!!");
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <Grid container spacing={5} style={{ margin: "20px auto", width: "95%" }}>
      {profileData.map((data) => (
        <Grid item xs={12} sm={4} md={4} xl={4} lg={3}>
          <ProfileCard data={data} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProfilePage;
