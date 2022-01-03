import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";

import { StandsList } from "../components/stands_list";
import { Header } from "../components/header";
import { Modal } from "../components/modal";

import { Layout } from "../components/layout";
import reducers from "../reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const IndexPage = () => {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Layout>
        <Header />
        <StandsList />
        <Modal />
      </Layout>
    </Provider>
  );
};

export default IndexPage;
