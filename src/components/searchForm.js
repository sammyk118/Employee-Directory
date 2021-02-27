import React, { useState, useEffect } from "react";
import API from "../utils/API";

function SearchForm(props) {
    return (
        <div className="input-group">
            <input className="form-control" type="text" {...props} />
        </div>
    )
}

export default SearchForm;