var React = require('react')
var ReactDOM = require('react-dom')
var TestUtils = require('react-addons-test-utils')
var expect = require('expect')
var $ = require('jquery')

var TodoList = require('TodoList')
var Todo = require('Todo')

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist()
    })

    it('should render a todo for each todo item', () => {

        var todos = [
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
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />)
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo)

        expect(todosComponents.length).toEqual(todos.length)
    })

    it('should render empty message if no todos', () => {

        var todos = []

        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />)
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo)
        var $el = $(ReactDOM.findDOMNode(todoList))

        

        expect($el.find('.container__message').length).toEqual(1)
    })
})