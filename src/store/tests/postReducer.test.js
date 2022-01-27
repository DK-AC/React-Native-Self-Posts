import {postReducer} from "../reducers/postReducer";
import {changeBookedAC, deletePostAC} from "../actions/postActions";

let startState

beforeEach(() => {
    startState = {
        allPosts: [
            {
                id: '1',
                img:
                    'https://www.belarus.by/apimages/30917.jpg',
                text: 'Awesome text for post 1',
                date: new Date().toJSON(),
                booked: true
            }, {
                id: '2',
                img:
                    'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg',
                text: 'Awesome text for post 2',
                date: new Date().toJSON(),
                booked: true
            }, {
                id: '3',
                img:
                    'https://i2.wp.com/www.menstylefashion.com/wp-content/uploads/2020/03/dubai-panoramica-t.jpg?fit=750%2C450&ssl=1',
                text: 'Awesome text for post 3',
                date: new Date().toJSON(),
                booked: false
            },],
        bookedPosts: [],
    }
})

describe('postReducer tests', () => {

    test('all posts must be uploaded', () => {
        const allPosts = startState.allPosts
        const filteredBookedPost = allPosts.filter(post => post.booked)


        expect(allPosts).toEqual(startState.allPosts)
        expect(allPosts.length).toBe(3)
        expect(filteredBookedPost.length).toBe(2)
    })


    test('booked should be change', () => {

        expect(startState.allPosts[2].booked).toBe(false)

        const endState = postReducer(startState, changeBookedAC('3'))

        expect(startState.allPosts[2].id).toBe('3')
        expect(endState.allPosts[2].booked).toBeTruthy()
        expect(startState.bookedPosts.length).toBe(0)
        expect(endState.bookedPosts.length).toBe(3)
    })

    test('correct post should be remove', () => {
        const endState = postReducer(startState, deletePostAC('1'))

        expect(startState.allPosts.length).toBe(3)
        expect(endState.allPosts.length).toBe(2)
        expect(startState.allPosts[0].id).toBe('1')
        expect(endState.allPosts[0].id).toBe('2')
    })

})
