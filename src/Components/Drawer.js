import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

export default function TemporaryDrawer({ open, setOpen }) {
  return (
      <React.Fragment>
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <Box 
          role ="presentation">
            
            <h1>Hello world</h1>
          </Box>
        </Drawer>
      </React.Fragment>
  );
}
