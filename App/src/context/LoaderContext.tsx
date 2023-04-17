import React, { createContext, useState } from "react";

// --------------------------------------------------------------------
import Children from "../models/children.models";

export const LoaderContext = createContext({});

export const LoaderProvider = ({ children }: Children) => {
    const [showLoader, setShowLoader] = useState(false);

    return (
        <LoaderContext.Provider value={{ showLoader, setShowLoader }}>
            {children}
        </LoaderContext.Provider>
    );
};
