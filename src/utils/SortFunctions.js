

export const ascSortFunction = function(a,b, sortType) {
    if (a["name"].last < b["name"].last) {return -1;}
    else if (a["name"].last > b["name"].last) {return 1;}
    return 0;
  }

// To Sort by descending on double click of {name}

//   export const descSortFunction = function(a,b) {
//     if (a.lastName < b.lastName) {return 1;}
//     else if (a.lastName > b.lastName) {return -1;}
//     return 0;
//   }

// exporting this .js is not needed because we are already exporting the variable of ascFunction 