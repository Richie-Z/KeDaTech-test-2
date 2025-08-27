import React from 'react';
import "./Button.scss";

type ButtonProps = {
  name: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
  return <button className="cstm-btn" onClick={() => onClick}>{name}</button>;
};

export default Button;
