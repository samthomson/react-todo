
var React = require('react')
var ReactDOM = require('react-dom')
var TestUtils = require('react-addons-test-utils')
var expect = require('expect')
var $ = require('jquery')

import * as actions from 'actions'
var { AddTodo } = require('AddTodo')

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist()
    })

    it('should dispath ADD_TODO when valid data', () => {
        var testText = 'Check mail'
        var action = actions.startAddTodo(testText)
        
        var spy = expect.createSpy()
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />)
        var $el = $(ReactDOM.findDOMNode(addTodo))

        
        addTodo.refs.todoText.value = testText
        TestUtils.Simulate.submit($el.find('form')[0])

        expect(spy).toHaveBeenCalledWith(action)
    })

    it('should not dispath ADD_TODO when invalid data', () => {
        var testText = ''
        var action = {
            type: 'ADD_TODO',
            text: testText
        }
        var spy = expect.createSpy()
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />)
        var $el = $(ReactDOM.findDOMNode(addTodo))

        
        addTodo.refs.todoText.value = testText
        TestUtils.Simulate.submit($el.find('form')[0])

        expect(spy).toNotHaveBeenCalled()
    })
})