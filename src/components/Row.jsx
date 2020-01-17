import React from "react";
import { number, arrayOf, oneOf } from "prop-types";

const Row = ({ type, primeNumberIndex, primeNumberHeaderArray }) => {
  let constructRow = () => {
    let rowArr = [];
    if (type === "header") {
      rowArr = primeNumberHeaderArray.map((prime, index) => (
        <th key={`${prime}${index}`}>{prime} </th>
      ));
      rowArr.unshift(<th key={`${Math.random()}-head`}></th>);
    } else {
      rowArr.push(<th key={`${primeNumberIndex}`}>{primeNumberIndex}</th>);
      primeNumberHeaderArray.map((prime, index) =>
        rowArr.push(
          <td key={`${prime}${index}${primeNumberIndex}`}>
            {prime * primeNumberIndex}
          </td>
        )
      );
    }
    return rowArr;
  };

  return <tr>{constructRow()}</tr>;
};

Row.defaultProps = {
  type: "row",
  primeNumberIndex: 0
};

Row.propTypes = {
  type: oneOf(["row", "header"]),
  primeNumberIndex: number,
  primeNumberHeaderArray: arrayOf(number).isRequired
};

export default Row;
