import React from 'react'

export function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

export function Contacts() {
  return <div className="Contacts" />;
}

export function Chat() {
  return <div className="Chat" />;
}