import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import TradeYa from "./components/TradeYa"

ReactDOM.render(
    <Router>
        <TradeYa />
    </Router>
    , document.getElementById('root'));
