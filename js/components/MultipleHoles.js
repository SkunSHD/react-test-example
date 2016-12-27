import React from 'react'
import { SplitPane, Contacts, Chat } from './multipleHoles/SplitPane'

export default function multipleHoles() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}