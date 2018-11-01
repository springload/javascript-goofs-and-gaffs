import React from "react";
import Person from "./person";

export default ({ items }) => items.map((item, i) => <Person {...item} />);
