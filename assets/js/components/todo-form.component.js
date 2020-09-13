/**
 * <ajax-button>
 * -----------------------------------------------------------------------------
 * A button with a built-in loading spinner.
 *
 * @type {Component}
 *
 * @event click   [emitted when clicked]
 * -----------------------------------------------------------------------------
 */

parasails.registerComponent("todoForm", {
  props: [],

  data: function () {
    return {
      todo: '',
    };
  },

  template: `
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="todo"></input>
    <input type="submit" value="Add"/>
  </form>
   `,

  methods: {
    onSubmit: function (e) {
      const todo = this.todo;
      this.todo = '';
      this.$emit('todo-submitted', todo)
    },
  },
});
