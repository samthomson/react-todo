var React = require('react')
var { connect } = require('react-redux')
var actions = require('actions')

export class AddTodo extends React.Component {

    constructor () {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (e) {
        e.preventDefault()
        var { dispatch } = this.props
        var strNewTodo = this.refs.todoText.value

        if (strNewTodo.length > 0) {
            this.refs.todoText.value = ''
            dispatch(actions.startAddTodo(strNewTodo))
        }else{
            this.refs.todoText.focus()
        }
    }

    render () {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="enter new item.." />
                    <button className="button expanded">Add</button>
                </form>
            </div>
        )
    }
}

export default connect()(AddTodo)