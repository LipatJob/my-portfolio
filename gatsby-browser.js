import "./src/styles/global.css";
import Layout from "./src/components/Layout";
import React from "react";

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;
