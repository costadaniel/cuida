import styled, { css } from 'styled-components';

const dragActive = css`
  border-color: #78e5d5;
  padding: 40px 0;
`;

export const DropContainer = styled.div`
  border: 2px dashed #0f4c81;
  border-radius: 4px;
  padding: 20px 0;
  cursor:pointer;

  transition: padding 0.2s ease;

  ${props => props.isDragActive && dragActive};
`;

const messageColorDragActive = css`
  color: #78e5d5;
`;

export const UploadMessage = styled.p`
  display: flex;
  color: #0f4c81;
  justify-content: center;
  align-items:center;
  padding: 15px;

  ${props => props.type === "active" && messageColorDragActive};
`;