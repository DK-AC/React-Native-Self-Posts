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
    })

})
