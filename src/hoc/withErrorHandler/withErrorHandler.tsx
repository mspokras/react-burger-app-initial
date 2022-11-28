import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import Modal from "../../components/UI/Modal/Modal";
import Auxx from "../../hoc/Auxx/Auxx";

const withErrorHandler = (WrappedComponent: any, axios: any) => {
  return function (props: any) {
    const [state, setState] = useState<any>({ error: null });

    useEffect(() => {
      const reqInterceptor = axios.interceptors.request.use((req: any) => {
        setState({ error: null });
        return req;
      });
      const resInterceptor = axios.interceptors.response.use(
        (res: any) => res,
        (error: any) => {
          setState({ error: error });
        }
      );

      axios.interceptors.request.eject(reqInterceptor);
      axios.interceptors.response.eject(resInterceptor);
    }, []);

    const errorConfirmedHandler = () => {
      setState({ error: null });
    };

    return (
      <Auxx>
        <Modal show={state.error} modalClosed={errorConfirmedHandler}>
          {state.error ? state.error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Auxx>
    );
  };
};

export default withErrorHandler;
