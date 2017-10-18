var React = require('react')
var ReactDOM = require('react-dom')
var TestUtils = require('react-addons-test-utils')
var expect = require('expect')
var $ = require('jquery')

var TodoApp = require('TodoApp')

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist()
    })

    it('should add todo to the todos state on handleAddTodo', () => {
        var todoText = 'test text'

        var todoApp = TestUtils.renderIntoDocument(<TodoApp />)

        todoApp.setState({todos: []})
        todoApp.handleAddTodo(todoText)

        expect(todoApp.state.todos[0].text).toBe(todoText)
        // expect new todo - create at should be a number
        expect(todoApp.state.todos[0].createdAt).toBeA('number')
    })

    it('should toggle completed value when handleToggle called', () => {
        var todoData = {
            id: 11,
            text: 'test features',
            completed: false,
            createdAt: 2433432,
            completedAt: undefined
        }
        
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />)

        todoApp.setState({todos: [todoData]})

        // check first item is false
        expect(todoApp.state.todos[0].completed).toBe(false)

        // call handle toggle
        todoApp.handleToggle(11)

        // check completed now true
        expect(todoApp.state.todos[0].completed).toBe(true)
        // expect completed at to be a number
        expect(todoApp.state.todos[0].completedAt).toBeA('number')

        // expect when toggle again completedAt gets removed
        todoApp.handleToggle(11)
        expect(todoApp.state.todos[0].completedAt).toNotExist()
    })

    
    
})