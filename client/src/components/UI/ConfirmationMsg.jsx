import React from "react";
import styled, { css } from "styled-components/macro";

const backgroundColour = css`
  background-color: ${({ status }) => {
    switch (status) {
      case "success":
        return "var(--success);";
      case "fail":
        return "var(--fail);";
      default:
        return "var(--warning);";
    }
  }};
`;

const colourTrans = css`
  transition: all 2s;
`;

const ConfirmMsg = styled.div`
  ${backgroundColour}
  overflow: hidden;
  ${colourTrans}
`;

const StatusMsg = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

const ConfirmationMsg = ({ status, statusMessages }) => {
  return (
    <ConfirmMsg data-testid="container" status={status}>
      <StatusMsg data-testid="statusMsg">{statusMessages[status]}</StatusMsg>
    </ConfirmMsg>
  );
};

export default ConfirmationMsg;
