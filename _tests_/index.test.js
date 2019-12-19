// const test = require("jest-runner")
// import redis from 'redis';
// import jest from 'jest-runner'
// import redis_mock from 'redis-mock';
// import {auth, set, checkify, cachify} from '../cacheql';
const redis = require('redis');
const cacheql = require('../cacheql');
const {auth, set, checkify, cachify} = require('../cacheql')

//mauybe we just rebuild the one in cacheql
jest.spyOn(redis, 'createClient').mockImplementation(red_mock.createClient);

describe("Authentication function", () => {
    it("should log into redis successfully", () => {
        const credentials = {
            port: 2343,

        } //insert our actual credentials
        expect(auth(credentials)).toEqual(true) //connected to redis cache 
    })
})

describe('cacheql', () => {
    it('should pass', () => {expect(true).toBe(true)})
  })
