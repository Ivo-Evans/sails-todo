module.exports = {


  friendlyName: 'View todo',


  description: 'Display "Todo" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/todo'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
