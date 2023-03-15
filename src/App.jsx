import React, { Component } from 'react';
import Messages from "../src/components/Messages";
import Input from "../src/components/Input";
import { randomName } from './helpers/RandomName';
import { randomHexColor } from './helpers/RandomColor';
import Header from './components/Header';

class App extends Component {
  state = {
    messages: [],
    member: {
      username: randomName(),
      color: randomHexColor()
    }
  }


  constructor() {
    super();
    this.drone = new window.Scaledrone("SnBh5hMrh7JD1Gco", {
      data: this.state.member
    });
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const member = {...this.state.member};
      member.id = this.drone.clientId;
      this.setState({member});
    });
    const room = this.drone.subscribe("observable-room");
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({member, text: data});
      this.setState({messages});
    });
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message
    });
  }

  render() {
    const {messages, member} = this.state
    return (
      <div className="container">
        <div className="App">
          <div className="App-header">
            <Header
            messages={messages}
            currentUser={member}/>
          </div>
          <Messages
            messages={messages}
            currentMember={member}
          />
          <Input
            onSendMessage={this.onSendMessage}
          />
        </div>
      </div>
    );
  }

}

export default App;