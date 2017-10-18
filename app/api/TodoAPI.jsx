var $ = require('jquery')

module.exports = {
    getTodos: function () {
        let todos = []
        try{
            todos = JSON.parse(localStorage.getItem('todos'))
        } catch (e) {

        }
         
        return $.isArray(todos) ? todos : []
    },
    setTodos: function (todos) {
        // only save arrays
        if ($.isArray(todos)){
            localStorage.setItem('todos', JSON.stringify(todos))
        }
    }
}