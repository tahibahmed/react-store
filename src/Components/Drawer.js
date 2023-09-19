import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AlignItemsList from './Alignitems'

function TemporaryDrawer({ opendraw, setOpendraw ,CardData}) {

  
  return (
    <div>
    <React.Fragment>
      <Drawer anchor="right" open={opendraw} onClose={() => setOpendraw(false)}>
        <Box role="presentation">
          < AlignItemsList CardData={CardData}/>
        </Box>
      </Drawer>
    </React.Fragment>
    </div>
  );
}

export default TemporaryDrawer;
