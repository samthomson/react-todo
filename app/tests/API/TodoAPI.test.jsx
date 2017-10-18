var expect = require('expect')
var TodoAPI = require('TodoAPI')

describe('TodoAPI', () => {
    it('should exist', () => {
        expect(TodoAPI).toExist()
    })

    describe('getTodos', () => {
        
        it('should return empty array for bad local storage data', () => {
            expect(TodoAPI.getTodos()).toEqual([])
        })

        it('should return todos if valid array in local storage', () => {
            var todos = [{
                id: 23,
                text: 'test api',
                completed: false
            }]
            localStorage.setItem('todos', JSON.stringify(todos))

            expect(TodoAPI.getTodos()).toEqual(todos)
        })

    })

    describe('setTodos', () => {
        beforeEach(() => {
            localStorage.removeItem('todos')
        })

        it('should set valid todos array', () => {
            
            var todos = [{
                id: 23,
                text: 'test api',
                completed: false
            }]
            TodoAPI.setTodos(todos)

            var actualTodos = JSON.parse(localStorage.getItem('todos'))

            expect(actualTodos).toEqual(todos)
        })

        it('should not set invalid todos array', () => {
            
            var badTodos = 'girafe'

            TodoAPI.setTodos(badTodos)

            expect(localStorage.getItem('todos')).toBe(null)
        })
    })
})