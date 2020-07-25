import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Link from "next/link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "0px",
    padding: "0px",
    position: "fixed",
    width: "100%",
    zIndex: "999",
  },
  appbar: {
    backgroundColor: "rgba(255,255,255,0.1)",
    margin: "0px",
    padding: "0px",
    color: "#fff",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
  },
  toolbar: {
    textAlign: "left",
    margin: "0px",
    padding: "0px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    paddingTop: "5px",
  },
  cross: {
    position: "absolute",
    top: "20px",
    fontSize: "40px",
    cursor: "pointer",
  },
  listitem: {
    fontSize: "30px",
    color: "#000",
    textDecoration: "none",
    fontWeight: "500",
  },
}));

export default function Mainnav() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <img
            src="/favicon.ico"
            alt="."
            style={{
              height: "45px",
              marginLeft: "10px",
              left: "0",
              position: "relative",
            }}
          />
          <Typography variant="h6" className={classes.title}>
            ZAFFRE
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleOpen}
          >
            <MenuIcon />
          </IconButton>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className="modal"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className="modalpaper">
                <ClearIcon className={classes.cross} onClick={handleClose} />
                <List>
                  <ListItem button key="Home">
                    <Link href="/">
                      <div className={classes.listitem}>HOME</div>
                    </Link>
                  </ListItem>

                  <ListItem button key="About">
                    <Link href="/about">
                      <div className={classes.listitem}>ABOUT</div>
                    </Link>
                  </ListItem>

                  <ListItem button key="Team">
                    <Link href="/team">
                      <div className={classes.listitem}>TEAM</div>
                    </Link>
                  </ListItem>
                  <ListItem button key="Contact">
                    <Link href="/contact">
                      <div className={classes.listitem}>CONTACT</div>
                    </Link>
                  </ListItem>
                </List>
              </div>
            </Fade>
          </Modal>
        </Toolbar>
      </AppBar>
    </div>
  );
}
