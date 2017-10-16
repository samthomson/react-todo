var React = require('react')
var TodoList = require('TodoList')

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
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
    render: function () {
        var { todos } = this.state

        return (
            <div>
                <TodoList todos={todos} />
            </div>
        )
    }
})

module.exports = TodoApp