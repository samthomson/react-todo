var $ = require('jquery')

module.exports = {
    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos

        // filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted
        })

        // filter by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            // if no search text return all (true)
            var text = todo.text.toLowerCase()
            return searchText === '' || text.indexOf(searchText.toLowerCase()) > -1
        })

        // sort todos with non-completed false
        filteredTodos.sort((a, b) => {
            if(!a.completed && b.completed)
            {
                return -1
            } else if (a.completed && !b.completed) {
                return 1
            } else {
                return 0
            }
        })

        return filteredTodos
    },
    getTodos: function () {
        let todos = []
        try{
            todos = JSON.parse(localStorage.getItem('todos'))
        } catch (e) {
            console.log(e)
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