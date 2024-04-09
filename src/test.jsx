import React, { Component } from 'react'

export default class Test extends Component {
  state = {
    count:0
  }
  componentDidMount() {
    this.stateRenderMerge()
  }
  stateRenderMerge = () => {
    this.setState({ count: this.state.count + 1 }, () => { console.log(this.state.count) })
    console.log('11',this.state.count)
    this.setState({count:this.state.count+2},()=>{console.log(this.state.count)})
    console.log('22',this.state.count)
    this.setState({count:this.state.count+5},()=>{console.log(this.state.count)})
    console.log('33', this.state.count)
    
    /**
     * 输出：0 0 0 5 5 5
     * 
     */
  }
  render() {
    return (
      <div>{this.state.count}</div>
    )
  }
}
