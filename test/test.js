process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);
describe('E2E testing', () => {
    describe('/GET product', () => {
        it('it should get all the products', done => {
            chai.request(app)
                .get('/api/product')
                .end((err, res) => {
                    res.should.have.status(200), res.body.should.be.a('array');
                    res.body.length.should.be.eql(4);
                    done();
                });
        });
    });

    describe('/POST order', () => {
        it('it should post a new order', () => {
            const order = {
                customer: {
                    firstName: 'Jozef',
                    lastName: 'Mrkvicka',
                    email: 'jozefmrkvicka@gmail.com',
                    phone: '0901123321',
                    city: 'Bratislava',
                    zipCode: '81101',
                    street: 'Hlavna 1',
                },
                items: [
                    {
                        id: 1,
                        quantity: 2,
                    },
                    {
                        id: 2,
                        quantity: 1,
                    },
                ],
                state: 'payed',
            };
            chai.request(app)
                .post('/api/order')
                .send(order)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('id');
                    res.body.id.should.be.a('number');
                    done();
                });
        });
    });
});
