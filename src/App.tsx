import { useState } from 'react';
import {
  AppBar,
  Button,
  Dialog,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function App() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button variant='outlined' onClick={handleClickOpen}
      >Open full-screen dialog</Button>
      <Dialog fullScreen open={open} onClose={handleClose}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Full-screen Dialog
            </Typography>
          </Toolbar>
        </AppBar>
        <DemoList />
      </Dialog>
    </>
  )
}

function DemoList() {
  return (
    <List>
      {[...Array(100).keys()].map((i) => (
        <>
          <ListItemButton>
            <ListItemText primary={i} />
          </ListItemButton>
          <Divider />
        </>
      ))}
    </List>
  )
}
