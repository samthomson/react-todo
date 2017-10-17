var React = require('react')
var TodoList = require('TodoList')
var AddTodo = require('AddTodo')
var TodoSearch = require('TodoSearch')

var uuid = require('node-uuid')


var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Go to bed',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'finish react course',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'graph ql course',
                    completed: false
                },
                {
                    id: uuid(),
                    text: '500px some pics',
                    completed: true
                }
            ]
        }
    },
    handleAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text, 
                    completed: false
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
            return todo
        })

        this.setState({todos: updatedTodos})
    },
    render: function () {
        var { todos } = this.state

        return (
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={todos} onToggle={this.handleToggle} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        )
    }
})

module.exports = TodoApp