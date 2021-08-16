'use strict';

const supertest = require('supertest');
const {server} = require('../src/server');
const request = supertest(server);

describe('middleware server', () => {
    it('shoud check every thing works successfully', async () => {
        let param = '/';
        let status = 200;
        let text = 'Hello World!, all working';

        const response = await request.get(param);

        expect(response.status).toBe(status);
        expect(response.text).toBe(text);
    });
    

    it('shoud check the data it works successfully', async () => {
        let param = '/person?name=mariam';
        let status = 200;

        const response = await request.get(param);

        expect(response.status).toBe(status);
        expect(typeof response.body).toEqual('object');
    });

    it('should check 500 errors', async () => {
        let param = '/bad';
        let status = 500;
        
        const response = await request.get(param);

        expect(response.status).toBe(status);
        // expect(response.body.route).toBe(param);
    });

    it('shoud check 404 not found errors', async () => {
        let param = '/notfound';
        let status = 404;

        const response = await request.get(param);

        expect(response.status).toBe(status);
    });
});