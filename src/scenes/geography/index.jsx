import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

const Geography = () => {
  return(
    <Box m="20px">
      <Header title="Geography Chart" subtitle="It's just a map"/>
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  )
}

export default Geography;