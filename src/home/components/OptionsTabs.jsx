import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";

import { LiaTasksSolid } from "react-icons/lia";

export default function OptionsTabs({ currentTab, onSetCurrentTab }) {
  const handleChange = (event, newValue) => {
    onSetCurrentTab(newValue);
  };

  return (
    <Tabs
      value={currentTab}
      onChange={handleChange}
      aria-label="icon label tabs example"
      indicatorColor="#b197fc"
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
    >
      <Tab
        sx={{ color: "#b197fc" }}
        icon={<LiaTasksSolid size={30} />}
        label="My tasks"
      />
      <Tab
        sx={{ color: "#b197fc" }}
        icon={<FavoriteIcon />}
        label="Completed"
      />
      <Tab
        sx={{ color: "#b197fc" }}
        icon={<PersonPinIcon />}
        label="Not Completed"
      />
    </Tabs>
  );
}
