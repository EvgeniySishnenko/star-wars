import React, { useState, useEffect } from "react";

function Message(props) {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    if (props.children) {
      setIsShow(true);
    }
  }, [props.children]);
  const hideModal = (e) => {
    e.preventDefault();
    setIsShow(false);
    props.onResetInfo();
  };
  return (
    <div className={`modal fade ${isShow ? "show" : null} modal-${props.type}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hideModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={hideModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Message;
