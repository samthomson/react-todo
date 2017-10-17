
var React = require('react')
var ReactDOM = require('react-dom')
var TestUtils = require('react-addons-test-utils')
var expect = require('expect')
var $ = require('jquery')

var Todo = require('Todo')

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist()
    })

    it('should call onToggle when clicked', () => {
        var todoData = {
            id: 45,
            text: 'test features',
            completed: true
        }

        let spy = expect.createSpy()
        
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />)

        var $el = $(ReactDOM.findDOMNode(todo))

        TestUtils.Simulate.click($el[0])

        expect(spy).toHaveBeenCalledWith(45)
    })
})