import React, { Component } from 'react'

export default class Ninjas extends Component {
  render() {
    const { ninjas } = this.props;
    const ninjaList = ninjas.map((ninja) => {
        return (
            <div key={ninja.id} className="ninja">
            <div> {ninja.name} </div>
            <div> {ninja.age} </div>
            <div> {ninja.belt} </div>
            <hr />
            </div>
        )
    })
    // console.log(this.props)
    // return (
    //   <div className="ninja">
    //       <div> Name: {name} </div>
    //       <div> Age: {age} </div>
    //       <div> Belt: {belt} </div>
    //   </div>
    // )

    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
  }
}


