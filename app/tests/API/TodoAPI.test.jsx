var expect = require('expect')
var TodoAPI = require('TodoAPI')

describe('TodoAPI', () => {
    it('should exist', () => {
        expect(TodoAPI).toExist()
    })

    describe('filterTodos', () => {

        var todos = [{
            id: 1,
            text: 'test 1',
            completed: true
        },{
            id: 2,
            text: 'text 2',
            completed: false
        },{
            id: 3,
            text: 'test 3',
            completed: true
        }]
        
        it('should show all items if showCompleted is true', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '')

            expect(filteredTodos.length).toEqual(3)
        })
        
        it('should show only incompleted items if showCompleted is false', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, false, '')

            expect(filteredTodos.length).toEqual(1)
        })
        
        it('should sort by completed status', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '')

            expect(filteredTodos.length).toEqual(3)
            expect(filteredTodos[0].completed).toEqual(false )
        })

        it('should filter todos by search text', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, 'Test')

            expect(filteredTodos.length).toEqual(2)
        })

        it('should return all todos if search text is empty', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '')

            expect(filteredTodos.length).toEqual(3)
        })
    })
})