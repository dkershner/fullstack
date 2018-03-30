import React, { Component } from 'react';

class ResultGrid extends Component{
  constructor(props){
    super(props)
    this.state = {results: null}
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps
      let url = 'https://www.eg.bucknell.edu/~amm042/service/q/?Semester=Fall&Year=2018&limit=9999'
      if (this.props.searchProfessor !== '')
        url += '&text=' + this.props.searchProfessor
      if (this.props.searchClass !== '')
        url += '&Department=' + this.props.searchClass
      if (this.props.searchNum !== '')
        url += '&CrseNum=' + this.props.searchNum
      fetch(url)
        .then(rsp => rsp.json())
        .then(results => {
          console.log('got classes', results)
          this.setState({results: results})
        })
        .catch(err=> console.log("ERR",err))
      }


  render(){
    var rows = ""
    if (this.state.results) {
    rows = this.state.results.message.map(r =>
      <tr>
        <td>{r.Course}</td>
        <td>{r.Title}</td>
        <td>{r.Instructor}</td>
        <td>{r.Room}</td>
        <td>{r["Meeting Time"]}</td>
      </tr>
    )
    }
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Course</th>
            <th scope="col">Title</th>
            <th scope="col">Professor</th>
            <th scope="col">Room</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
export default ResultGrid
