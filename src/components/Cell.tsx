import React, { useState } from 'react';
import classNames from 'classnames';

const Cell: React.FC<{ word: string }> = ({ word }) => {
  const [isStamped, setStamped] = useState(false);

  const toggleStamped = () => {
    setStamped(!isStamped)
  };

  var classes = classNames(
    "Cell",
    { "stamped": isStamped }
  )

  return(
    <td
      className={classes}
      onClick={toggleStamped}
    >
      {word}
    </td>
  )
}

export default Cell;
