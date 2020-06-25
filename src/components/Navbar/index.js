import React from "react";

const styles = {
  navbarStyle: {
    background: "light-blue",
    justifyContent: "flex-end"
  }
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <a href="/">Search the Employee Directory by typing in the first or last name in the
          search bar. To Sort Employee Directory in alphabetical order, click on
          the "Name" header in the table. 
          </a>
    </nav>
  );
}

export default Navbar;

// function Navbar() {
//   return (
//     <div style={styles.card}>
//       <div style={styles.heading}>Search the Employee Directory by typing in the first or last name in the
//          search bar. To Sort Employee Directory in alphabetical order, click on
//          the "Name" header in the table. 
// </div>
//     </div>
//   );
// }




// import React from "react";

// export default function Navbar(props) {
//   return (
//     <>
//     <Navbar expand="lg" variant="light" bg="light">     
//         Search the Employee Directory by typing in the first or last name in the
//         search bar. To Sort Employee Directory in alphabetical order, click on
//         the "Name" header in the table.
//         </Navbar>
//     </>
//   );
// }


