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
                    text: 'Go to bed'
                },
                {
                    id: uuid(),
                    text: 'finish react course'
                },
                {
                    id: uuid(),
                    text: 'graph ql course'
                },
                {
                    id: uuid(),
                    text: '500px some pics'
                }
            ]
        }
    },
    handleAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {id: uuid(), text}
            ]
        })
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    render: function () {
        var { todos } = this.state

        return (
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        )
    }
})

module.exports = TodoApp