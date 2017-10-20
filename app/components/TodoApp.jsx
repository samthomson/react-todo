var React = require('react')
var uuid = require('node-uuid')
var moment = require('moment')

var TodoList = require('TodoList')
var AddTodo = require('AddTodo')
var TodoSearch = require('TodoSearch')
var TodoAPI = require('TodoAPI')


var TodoApp = React.createClass({
    componentDidUpdate: function () {
        TodoAPI.setTodos(this.state.todos)
    },
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        }
    },
    handleAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text, 
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        })
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    handleToggle: function (id) {

        var updatedTodos = this.state.todos.map((todo) => {
            todo.completed = todo.id === id ? !todo.completed : todo.completed
            todo.completedAt = todo.completed ? moment().unix() : undefined
            return todo
        })

        this.setState({todos: updatedTodos})
    },
    render: function () {
        var { todos, showCompleted, searchText } = this.state
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)

        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch} />
                            <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
                            <AddTodo onAddTodo={this.handleAddTodo} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports = TodoApp