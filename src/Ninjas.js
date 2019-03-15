import React from 'react'
import './ninjas.css'

// export default class Ninjas extends Component {
    const Ninjas = ({ninjas, deleteNinja}) => {
    // const { ninjas } = props;
    const ninjaList = ninjas.map((ninja) => {
        return ninja.age > 15 ? (
            <div key={ninja.id} className="ninja">
            <div> {ninja.name} </div>
            <div> {ninja.age} </div>
            <div> {ninja.belt} </div>
            <button onClick = {() => {deleteNinja(ninja.id)}}> Delete Ninja</button>
            <hr />
            </div>
        ): null;
    });

    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
    }

    export default Ninjas   
//   render() {
//     const { ninjas } = this.props;
//     const ninjaList = ninjas.map((ninja) => {
//         return (
//             <div key={ninja.id} className="ninja">
//             <div> {ninja.name} </div>
//             <div> {ninja.age} </div>
//             <div> {ninja.belt} </div>
//             <hr />
//             </div>
//         )
//     })
//     // console.log(this.props)
//     // return (
//     //   <div className="ninja">
//     //       <div> Name: {name} </div>
//     //       <div> Age: {age} </div>
//     //       <div> Belt: {belt} </div>
//     //   </div>
//     // )

    
    
