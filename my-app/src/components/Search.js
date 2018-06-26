import React, { Component } from 'react';

class Search extends Component {

    constructor(props){
      super(props);
        this.state = {
          keyword : ''
        }
    }

    onChange = (event) => {
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({
        [name] : value
      });
      console.log(target);
    }

    onSearch = () => {
      this.props.onSearch( this.state.keyword );
    }

    render() {
      var { keyword } = this.state;
      return (
            <div className="col-6 searchWrap">
                <input
                    type="text"
                    className="input_search"
                    placeholder="Nhập từ khóa..."
                    name="keyword"
                    value = { keyword }
                    onChange = { this.onChange }
                  />
                <button
                  type="button"
                  className="btn btn-primary btn_search"
                  onClick= { this.onSearch }
                >
                    <i className="fa fa-search" aria-hidden="true"></i> Tìm</button>
            </div>
        );
    }
  }

  export default Search;
