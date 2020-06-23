

export const ascSortFunction = function(a,b, sortType) {
    if (a["name"].last < b["name"].last) {return -1;}
    else if (a["name"].last > b["name"].last) {return 1;}
    return 0;
  }
//   export const descSortFunction = function(a,b) {
//     if (a.lastName < b.lastName) {return 1;}
//     else if (a.lastName > b.lastName) {return -1;}
//     return 0;
//   }