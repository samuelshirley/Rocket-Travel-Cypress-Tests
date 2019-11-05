describe('Tests JSON API', function(){
    it('hits /posts and checks response back', function(){

        cy
        .request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('userId')
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('title')
            expect(response.body).to.have.property('body')
        })

        cy
        .request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
            expect(response.body.userId).to.eq(1)
        })

        cy
        .request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
            expect(response.body.title).to.eq('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
        })
    })

//     it('posts a new comment, asserts new comment', function(){
//         cy
//         .request('POST', 'https://jsonplaceholder.typicode.com/post/new', {  
//         title: 'I like bikes',
//         body: 'I wish I was riding my bike',
//         userId: 1 })
//         .then((response) => {
//         expect(response.body.userId).to.eq(1)
//         expect(response.body.title).to.eq('I like bikes')
//         expect(response.body.body).to.eq('I wish I was riding my bike')

//   })
    // })


})