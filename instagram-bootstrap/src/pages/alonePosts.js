import React from "react";
import Page2 from "../components/page2.js";

function AlonePosts(prop) {
  return (
    <>
      <Page2 />
      <Page2 src="https://picsum.photos/id/100/200/300"/>
      <Page2 src="https://picsum.photos/id/104/200/300"/>
      <Page2 src="https://picsum.photos/id/108/200/300"/>
    </>
  );
}

export default AlonePosts;
