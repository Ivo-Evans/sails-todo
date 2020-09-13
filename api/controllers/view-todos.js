module.exports = {
  friendlyName: 'View TODOs',
  description: 'View TODOs',
  exits: {
    success: {
      viewTemplatePath: 'pages/todos/todos',
    },
  },
  fn: async function () {
    return {};
  },
};
