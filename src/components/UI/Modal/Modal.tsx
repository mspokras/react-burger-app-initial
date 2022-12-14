import React from "react";

import classes from "./Modal.module.css";
import Auxx from "../../../hoc/Auxx/Auxx";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props: any) => {
  return (
    <Auxx>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Auxx>
  );
};

const arePropsEqual = (prevProps: any, nextProps: any) => {
  return (
    nextProps.show !== prevProps.show ||
    nextProps.children !== prevProps.children
  );
};

export default React.memo(Modal, arePropsEqual);
