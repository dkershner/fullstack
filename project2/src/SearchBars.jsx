import React, { Component } from 'react';
import SearchInput from './SearchInput.jsx'
import ResultGrid from './ResultGrid.jsx'

class SearchBars extends Component{
  constructor(props) {
    super(props);
    this.handleClassChange = this.handleClassChange.bind(this);
    this.handleProfessorChange = this.handleProfessorChange.bind(this);
    this.handleNumChange = this.handleNumChange.bind(this);
    this.state = {
      classInput: '',
      professorInput: '',
      numInput: ''
    }
  }

    handleClassChange(value) {
      this.setState({classInput: value});
    }

    handleProfessorChange(value) {
      this.setState({professorInput: value});
    }

    handleNumChange(value) {
      this.setState({numInput: value});
    }

  render(){
    return (
      <div className="container">
        <div className="row">
          <h1 className="text-center col-12 text-secondary">Bucknell University Fall 2018 Course Lookup</h1>
        </div>
        <div className="row">
          <div className="col-4">
            <SearchInput label="Department:" class="form-control" id="classSearch"
                        placeholder="Department" value={this.state.classInput}
                        onChange={this.handleClassChange}/>
          </div>

          <div className="col-4">
            <SearchInput label="Number:" class="form-control" id="numSearch"
                        placeholder="Class Number" value={this.state.numInput}
                        onChange={this.handleNumChange}/>
          </div>

          <div className="col-4">
          <SearchInput label="Professor:" class="form-control" id="professorSearch"
                      placeholder="Professor Name" value={this.state.professorInput}
                      onChange={this.handleProfessorChange}/>
          </div>
        </div>
        <ResultGrid searchClass={this.state.classInput}
                    searchProfessor={this.state.professorInput}
                    searchNum={this.state.numInput}/>
      </div>
    )
  }
}


export default SearchBars
