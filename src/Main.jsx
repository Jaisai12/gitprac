import React from "react";
import ReactDOM from "react-dom/client";

/* function Jai() {
  return (
    <div>
      <h1>I am jaisaikunar</h1>
    </div>
  );
} */

/* class Jai extends React.Component {
  render() {
    return <h1>Jai</h1>;
  }
} */

/* function Buttonclick() {
  let [count, setCount] = useState(0);
  const handleClicks = (num) => {
    setCount(count + num);
  };
  return (
    <div>
      <p>Number of clicks={count}</p>
      <button onClick={() => handleClicks(1)}> Click Here</button>
      <button onClick={() => handleClicks(-1)}> Click Here</button>
    </div>
  );
}
 */

/* class Buttonclick extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  handleClicks = (num) => {
    this.setState((prevState) => ({ count: prevState.count + num }));
  };
  render() {
    return (
      <div>
        <p>Number of clicks={this.state.count}</p>
        <button onClick={() => this.handleClicks(1)}> Click Here</button>
        <button onClick={() => this.handleClicks(-1)}> Click Here</button>
      </div>
    );
  }
} */

class Buttonclick extends React.Component {
  constructor() {
    super();
    this.state = { clicks: 0 };
  }
  handleClicks = () => {
    this.setState((prevState) => ({ clicks: prevState.clicks + 1 }));
  };
  render() {
    return (
      <div>
        <p>Number of clicks : {this.state.clicks}</p>
        <button
          onClick={() => {
            this.handleClicks();
          }}
        >
          Click me{" "}
        </button>
      </div>
    );
  }
}

const re = ReactDOM.createRoot(document.getElementById("root"));
re.render(<Buttonclick />);

//hello
