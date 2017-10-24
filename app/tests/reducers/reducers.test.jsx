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
                text: 'something to do',
                todo: {
                    id: 'abc123',
                    text: 'something to do',
                    completed: false,
                    createdAt: 234
                }
            }
            var res = reducers.todosReducer(df([]), df(action))

            expect(res.length).toEqual(1)
            expect(res[0]).toEqual(action.todo)
        })

        it('should update todo', () => {
            var todos = [
                {
                    id: 11,
                    text: 'test features',
                    completed: true,
                    createdAt: 2433432,
                    completedAt: undefined
                }
            ]
            var updates = {
                completed: false,
                completedAt: null
            }
            var action = {
                type: 'UPDATE_TODO',
                id: todos[0].id,
                updates
            }
            var res = reducers.todosReducer(df(todos), df(action))

            expect(res[0].completed).toEqual(updates.completed)
            expect(res[0].completedAt).toEqual(updates.completedAt)
            expect(res[0].text).toEqual(todos[0].text)
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

    describe('authReducer', () => {
        it('should store uid on login', () => {
            var action = {
                type: 'LOGIN',
                uid: '342'
            }
            var res = reducers.authReducer(undefined, df(action))

            expect(res).toEqual({uid: action.uid})
        })

        it('should with auth on logout', () => {
            const authData = {
                uid: '435tg435'
            }
            const action = {
                type: 'LOGOUT'
            }

            const res = reducers.authReducer(df(authData), df(action))

            expect(res).toEqual({})
        })
    })
})