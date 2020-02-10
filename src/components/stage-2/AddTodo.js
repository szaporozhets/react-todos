import React from 'react'

class AddTodo extends React.Component {
  render() {
    const { onClick } = this.props;

    return (
      <div>
        <input ref={node => {
          this.input = node;
        }} />
        <button
          onClick={() => {
            onClick(this.input.value);
            this.input.value = '';
          }}
        >Add todo</button>
      </div>
    )
  }
}

export default AddTodo;