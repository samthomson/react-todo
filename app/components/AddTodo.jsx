var React = require('react')


var AddTodo = React.createClass({
    onSubmit: function (e) {
        e.preventDefault()
        var strNewTodo = this.refs.todoText.value

        if (strNewTodo.length > 0) {
            this.refs.todoText.value = ''
            this.props.onAddTodo(strNewTodo)
        }else{
            this.refs.todoText.focus()
        }
    },

    render: function () {
        return (
            <div className="container__footer">
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref="todoText" placeholder="enter new item.." />
                    <button className="button expanded">Add</button>
                </form>
            </div>
        )
    }
})

module.exports = AddTodo