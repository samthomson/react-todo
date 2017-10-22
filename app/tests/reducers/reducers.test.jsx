var expect = require('expect')
var df = require('deep-freeze-strict')

var reducers = require('reducers')


describe('reducers', () => {
    describe('searchText', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            }
            var res = reducers.searchTextReducer(df(''), df(action))

            expect(res).toEqual(action.searchText)
        })
    })

    describe('showCompletedReducer', () => {
        it('should toggle show completed status', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            }
            var res = reducers.showCompletedReducer(df(false), df(action))

            expect(res).toEqual(true)
        })
    })

    describe('todosReducer', () => {
        it('should add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                text: 'something to do'
            }
            var res = reducers.todosReducer(df([]), df(action))

            expect(res.length).toEqual(1)
            expect(res[0].text).toEqual(action.text)
        })

        it('should toggle todo', () => {
            var todos = [
                {
                    id: 11,
                    text: 'test features',
                    completed: true,
                    createdAt: 2433432,
                    completedAt: undefined
                }
            ]
            var action = {
                type: 'TOGGLE_TODO',
                id: 11
            }
            var res = reducers.todosReducer(df(todos), df(action))

            expect(res[0].completed).toEqual(false)
            expect(res[0].completedAt).toEqual(undefined)
        })

        it('should add existing todos', () => {
            var todos = [
                {
                    id: 1,
                    text: 'Go to bed',
                    completed: false,
                    completedAt: undefined,
                    createdAt: 399
                }
            ]
            var action = {
                type: 'ADD_TODOS',
                todos
            }
            var res = reducers.todosReducer(df([]), df(action))

            expect(res.length).toEqual(1)
            expect(res[0]).toEqual(todos[0])
        })
    })
})