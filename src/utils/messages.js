const generateMessage = (username, message) => {
  return {
    username,
    text: message,
    createdAt: new Date().toDateString,
  };
};

const generateLocationMessage = (username, url) => {
  return {
    username,
    url,
    createdAt: new Date().toString,
  };
};

module.exports = {
  generateMessage,
  generateLocationMessage,
};
