import React from "react";

class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      styles: {
        textDecoration: "none",
        dp: ""
      }
    };
    this.setStyles = this.setStyles.bind(this);
    this.remove = this.remove.bind(this);
  }

  remove() {
    this.setState(
      {
        styles: {
          dp: "none"
        }
      },
      () => console.log(this.state.dp)
    );
  }

  setStyles() {
    let st = "";
    if (this.state.styles.textDecoration === "none") {
      st = "line-through";
    } else {
      st = "none";
    }
    this.setState({
      styles: {
        textDecoration: st
      }
    });
  }

  render() {
    var bgColor = "lightblue";
    if (this.props.item.id % 2 === 0) {
      bgColor = "lightgray";
    }
    return (
      <div
        style={{
          height: "2em",
          display: this.state.styles.dp,
          backgroundColor: bgColor
        }}
      >
        <span
          style={{
            position: "absolute",
            right: "0",
            padding: "1px 15px 0 0",
            color: "red",
            cursor: "pointer"
          }}
          onClick={this.remove}
        >
          X
        </span>
        <input
          type="checkbox"
          className="Todocheckbox"
          onChange={this.setStyles}
        />
        <span
          style={{ textDecoration: this.state.styles.textDecoration }}
          className="Todotxt"
        >
          {this.props.item.item}
        </span>
      </div>
    );
  }
}

export default TodoItem;
