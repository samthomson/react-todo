var React = require('react')
var TodoList = require('TodoList')
var AddTodo = require('AddTodo')
var TodoSearch = require('TodoSearch')


var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: 'Go to bed'
                },
                {
                    id: 2,
                    text: 'finish react course'
                },
                {
                    id: 3,
                    text: 'graph ql course'
                },
                {
                    id: 4,
                    text: '500px some pics'
                }
            ]
        }
    },
    addTodo: function (text) {
        alert('new todo: '+ text)
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
                <AddTodo onAddTodo={this.addTodo} />
            </div>
        )
    }
})

module.exports = TodoApp