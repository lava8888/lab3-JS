import { Component } from "react";

class SaladCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{display: 'flex', alignItems: 'center'}}>
        <input
          className="margin-right"
          id={this.props.selection}
          name={this.props.selection}
          type="checkbox"
          checked={this.props.selected}
          onChange={this.props.handling}
        />
        <label className="ml-3" style={{width: '100%'}} htmlFor={this.props.selection} >
          {this.props.selection}
        </label>
      </div>
    );
  }
}

export default SaladCheckbox;
