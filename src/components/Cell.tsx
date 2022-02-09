import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    setStamped(false)
  }, [word])

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
