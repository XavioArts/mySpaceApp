import { Tab, Tabs } from "@mui/material";
import React, { useContext } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const NavBar = () => {

    const { authenticated } = useContext(AuthContext);

    const useRouteMatch = (patterns) => {
        const { pathname } = useLocation();
      
        for (let i = 0; i < patterns.length; i += 1) {
          const pattern = patterns[i];
          const possibleMatch = matchPath(pattern, pathname);
          if (possibleMatch !== null) {
            return possibleMatch;
          }
        }
      
        return null;
    }

    const routeMatch = useRouteMatch(["/", "/public", "/protected"]);
    const currentTab = routeMatch?.pattern?.path;

    return (
        <div style={styles.container} > 
            <Tabs value={currentTab} >
                <Tab label="Home" value="/" to="/" component={Link} />
                <Tab label="Public" value="/public" to="/public" component={Link} />
                {authenticated && <Tab label="Protected" value="/protected" to="/protected" component={Link} />}
            </Tabs>
            {/* <Link to="/" style={styles.link} >Home</Link>
            <Link to="/public" style={styles.link} >Public</Link>
            {authenticated && <Link to="/protected" style={styles.link} >Protected</Link>} */}
        </div>
    );
};

const styles = {
    container: {
        margin: "0px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "#DBF3FA",
    },
    link: {
        textDecoration: "none",
        margin: "10px",
        color: "white",
    }
}

export default NavBar;