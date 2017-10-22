var React = require('react')
var ReactDOM = require('react-dom')
var { Provider } = require('react-redux')
var TestUtils = require('react-addons-test-utils')
var expect = require('expect')
var $ = require('jquery')

import { configure } from 'configureStore'
import ConnectedTodoList, { TodoList } from 'TodoList'
import ConnectedTodo, { Todo } from 'Todo'


describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist()
    })

    it('should render a todo for each todo item', () => {

        var todos = [
            {
                id: 1,
                text: 'Go to bed',
                completed: false,
                completedAt: undefined,
                createdAt: 399
            },
            {
                id: 2,
                text: 'finish react course',
                completed: false,
                completedAt: undefined,
                createdAt: 399
            },
            {
                id: 3,
                text: 'graph ql course',
                completed: false,
                completedAt: undefined,
                createdAt: 399
            },
            {
                id: 4,
                text: '500px some pics',
                completed: false,
                completedAt: undefined,
                createdAt: 399
            }
        ]

        var store = configure({
            todos
        })
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList />
            </Provider>
        )
        var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0]
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo)

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