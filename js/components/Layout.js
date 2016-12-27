import React from "react";

import Clock from './Clock'
import Toggle from './Toggle'
import LoginControl from './LoginControl'
// Keys used within arrays should be unique among their siblings. However they don't need to be globally unique
import { Blog, posts } from './Blog'
import CoolForm from './CoolForm'
import SelectFlavor from './SelectFlavor'
import UncontrolledForm from './UncontrolledForm'
import Calculator from './Calculator'
import WelcomeDialog from './WelcomeDialog'
import multipleHoles from './multipleHoles'

export default class Layout extends React.Component {

  render() {
    return(
       <div>
        <h2>Composition vs Inheritance</h2>
        <hr />
        <WelcomeDialog />
        <multipleHoles />

        <h2>State and Lifecycle</h2>
        <hr />
        <Clock />

        <h2>Lifting State Up</h2>
        <hr />
        <Calculator />



        <h2>LoginControl</h2>
        <hr />
        <LoginControl />

        <h2>Controlled component</h2>
        <hr />
        <CoolForm />

        <h2>Uncontrolled component</h2>
        <hr />
        <UncontrolledForm />

        <h2>Select/option tag</h2>
        <hr />
        <SelectFlavor />

        <h2>prevState in work</h2>
        <hr />
        <Toggle />

        <h2>Map filling, right using of keys</h2>
        <hr />
        <Blog posts={posts} />
      </div>
    );
  }
}