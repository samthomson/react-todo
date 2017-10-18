var $ = require('jquery')

module.exports = {
    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos

        // filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted
        })

        // filter by searchText

        // sort todos with non-completed false

        return filteredTodos
    },
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