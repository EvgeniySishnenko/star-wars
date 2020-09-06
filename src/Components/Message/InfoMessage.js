import React, { useState } from "react";
import Message from "./Message";
function InfoMessage(props) {
  return <Message {...props} type="info" />;
}
export default InfoMessage;
