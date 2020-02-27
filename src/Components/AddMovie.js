import React from "react";
import Modal from "react-modal";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

class AddMovie extends React.Component {
  state = {
    modalIsOpen: false,
    name: "",
    rating: 1,
    image: "",
    date: ""
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <button className="Add-btn" onClick={this.openModal}>
          +
        </button>
        <Modal
          className="add-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        >
          <h1>Add A Movie</h1>
          <form>
            <label>Movie Name</label>
            <input type="text" name="name" onChange={this.handleChange} />
            <label>Movie Rate</label>
            <input type="text" name="rating" onChange={this.handleChange} />
            <label>Movie Release Date</label>
            <input type="text" name="date" onChange={this.handleChange} />
            <label>Movie Image</label>
            <input type="text" name="image" onChange={this.handleChange} />
          </form>
          <button
            className="Modal-btn"
            onClick={() =>
              this.props.AddMovie({
                id: Math.random(),
                ...this.state,
                ...this.setState({ modalIsOpen: false })
              })
            }
          >
            Submit
          </button>
          <button className="Modal-btn" onClick={this.closeModal}>
            close
          </button>
        </Modal>
      </div>
    );
  }
}

export default AddMovie;
