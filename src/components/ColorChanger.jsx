import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { ColorLensRounded } from '@material-ui/icons';
import { Fab } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: "0px 0px"
  },
  paper: {
    marginRight: theme.spacing(2),

  },
}));

export default function ColorChanger(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  function handleColorRed(event){
    const color = event.target.id;
    props.ChangeColor(color);
    handleClose(event);
  };
  const handleColorGreen = (event) => {
    const color = event.target.id;
    props.ChangeColor(color);
    handleClose(event);
    
  };
  const handleColorBlue = (event) => {
    const color = event.target.id;
    props.ChangeColor(color);
    handleClose(event);
  };
  const handleColorViolet = (event) => {
    const color = event.target.id;
    props.ChangeColor(color);
    handleClose(event);
  };
  const handleColorWhite = (event) => {
    const color = event.target.id;
    props.ChangeColor(color);
    handleClose(event);
  };

function handleClose (event) {

    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Fab
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className = "colorChanger"
        >
         <ColorLensRounded />
        </Fab>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleColorRed}  id="red">Red</MenuItem>
                    <MenuItem onClick={handleColorGreen} id="green"> Green</MenuItem>
                    <MenuItem onClick={handleColorBlue} id="blue">Blue</MenuItem>
                    <MenuItem onClick={handleColorViolet} id="violet">Violet</MenuItem>
                    <MenuItem onClick={handleColorWhite} id="white">White</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
