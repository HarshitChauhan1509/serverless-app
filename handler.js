'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello Omkar successfully deployed our top company in aws!" }),
  };
};
