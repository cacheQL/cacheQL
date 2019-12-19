const TestRunner = require("jest-runner")

describe("Authentication function", () => {
    test("it should log into redis successfully", () => {
        const credentials = {} //insert our actual credentials
        expect(functionname(credentials).toEqual('something about connecting to redis successfully'))
    })
})