import React, { Component } from "react";

const list = [{
  name: "Marilyn Monroe",
  birth: "1926",
  death: "1962",
  role: "actress"
}, {
  "name": "Abraham Lincoln",
  "birth": "1809",
  "death": "1865",
  "role": "U.S. President"
}, {
  "name": "Martin Luther King, Jr",
  "birth": "1929",
  "death": "1963",
  "role": "Civil Rights leader"
}, {
  "name": "Nelson Mandela",
  "birth": "1918",
  "death": "2013",
  "role": "S.A. President"
}, {
  "name": "Vincent Van Gogh",
  "birth": "1853",
  "death": "1890",
  "role": "artist"
}, {
  "name": "J.K. Rowling",
  "birth": "1965",
  "death": "",
  "role": "British author"
}, {
  "name": "Eva Peron",
  "birth": "1919",
  "death": "1952",
  "role": "Argentina First Lady"
}, {
  "name": "George Orwell",
  "birth": "1903",
  "death": "1950",
  "role": "British author"
}, {
  "name": "Jesse Owens",
  "birth": "1913",
  "death": "1980",
  "role": "Olympian"
}];

// const People = ({people, index}) => {
//   return(
//     <li className="person" >
//       {people.name}, <span>{people.role}</span>
//       <ul>
//         <li>B:{people.birth}</li>
//         <li>D:{
//           people.death
//         }</li>
//       </ul>
//     </li>
//   );
// }

// class Aside extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       people: list
//     };
//   }
//   render () {
//     const {people} = this.state;
//     return (
//       <aside className="aside-section" >
//         <h3>Historical Figures</h3>
//         <ul>
//           {
//             people.map((people, index) => {
//               return <People key={people.name} href={people.name} index={index+1} people={people} />
//             })
//           }
//         </ul>
//       </aside>
//     );
//   }
// }

export default Aside;