/**
 * action constructor
 *
 */

const sendAction = () => {
  return {
    type: "send_type",
    value: "I am a action",
  };
};

module.exports = {
  sendAction,
};
