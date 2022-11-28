import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";

const asyncComponent = (importComponent: any) => {
  return function (props: any) {
    const [state, setState] = useState<any>({
      component: null,
    });

    useEffect(() => {
      importComponent().then((cmp: any) => {
        setState({ component: cmp.default });
      });
    }, []);

    const C = state.component;

    return C ? <C {...props} /> : null;
  };
};

export default asyncComponent;
