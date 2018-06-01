//based on https://medium.com/@agm1984/how-to-manage-page-transition-animations-in-react-ba09c66655c6

import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import matchPath from "react-router-dom/matchPath";
import Nav from "./components/Nav/Nav";
import About from "./containers/About/About";
import Products from "./containers/Products/Products";
import "./components/Nav/Nav.css";

// Declare the routes again, this time more serious
const routes = [
  {
    component: About,
    showInMenu: false,
    key: "home",
    path: "/",
    id: "home",
    title: "Learn about stuff | Site",
    description: "This is all about Lorem Ipsum",
    exact: true
  },
  {
    component: About,
    showInMenu: true,
    key: "about",
    path: "/about",
    id: "about",
    title: "Learn about stuff | Site",
    description: "This is all about Lorem Ipsum",
    exact: true
  },
  {
    component: Products,
    showInMenu: true,
    key: "products",
    path: "/products",
    id: "contact",
    title: "Check out our wares | Site",
    description: "This is all about my products",
    exact: true
  }
];
/**
 * filterRoutes returns true or false and compares
 * location.pathname with the path key
 * in each Object declared above in the routes Array.
 */
const filterRoutes = location => {
  return routes.filter(({ path, strict, exact }) => {
    return !!matchPath(location.pathname, {
      path,
      strict,
      exact
    });
  });
};

const getComponentByPath = path => {
  return routes.find(r => r.path === path).component;
};
// I set this up as a Class Component
// You may find yourself adding Class Methods for the transition stages, etc.
class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // First, generate a Menu Link only if showInMenu === true
    // showInMenu comes from the routes Array, above.
    return (
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Nav>
          {routes.map(({ showInMenu, path, key }) => {
            return (
              showInMenu && (
                <NavLink
                  key={`link-${key}`}
                  to={path}
                  className="Nav_link"
                  activeClassName="activeRoute"
                  activeStyle={{ color: "#FF5043" }}
                  style={{}}
                >
                  {key}
                </NavLink>
              )
            );
          })}
        </Nav>
        <Switch>
          <Route
            // using the render function will eliminate the undesired remounting
            render={({ location }) => {
              const path = `/${location.pathname.split("/")[1]}`;
              const component = getComponentByPath(path);
              const totalTime = 4500;
              return (
                //state machine for managing the mounting and unmounting of components over time
                <TransitionGroup appear>
                  {filterRoutes(location).map(({ key, ...props }) => (
                    //timeout is total time both Components will be rendered
                    <Transition key={"child-" + key} timeout={totalTime}>
                      {state => {
                        //depending on showing/hiding and type of animation,e.g. showAfterHide /crossfade, we can set it up here
                        //specific timing can be based on path too
                        const animationProps = { time: 0.5, delay: 0 };
                        let shouldAppear = false;
                        switch (state) {
                          case "entering":
                          case "entered":
                            animationProps.time = 2.5;
                            animationProps.delay = 1;
                            shouldAppear = true;
                            break;
                          case "exiting":
                          case "exited":
                            break;
                        }
                        return React.createElement(
                          component,
                          {
                            ...props,
                            location,
                            shouldAppear,
                            totalTime,
                            animationProps
                          },
                          null
                        );
                      }}
                    </Transition>
                  ))}
                </TransitionGroup>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}
export default Routes;
