var React = require('react')
var { connect } = require('react-redux')
var actions = require('actions')

export var AddTodo = React.createClass({
    onSubmit: function (e) {
        e.preventDefault()
        var { dispatch } = this.props
        var strNewTodo = this.refs.todoText.value

        if (strNewTodo.length > 0) {
            this.refs.todoText.value = ''
            dispatch(actions.addTodo(strNewTodo))
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

export default connect()(AddTodo)