// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//Unit tests for sayHello function
describe("sayHello", function(){
    it("should be a defined function", function(){
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called", function() {
        expect(typeof sayHello()).toBe("string");
    });
    it("should return 'Hello, Jane!'", function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should return 'Hello, Alex!", function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return 'Hello, Pat!'", function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should return 'Hello, World!'", function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' if the input is 'true'", function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' if the input is 'true'", function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' if the input is 'null'", function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' if the input is ('')", function() {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' if the input is ('5')", function() {
        expect(sayHello("5")).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' if the input is '2.3'", function() {
        expect(sayHello('2.3')).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' if the input is an array", function() {
        expect(sayHello([])).toBe("Hello, World!");
    });
});

//Unit tests for isFive function
describe("isFive", function() {
    it("should be a defined function", function() {
        expect(typeof isFive).toBe("function");
    });
    it("should return a boolean no matter what the input", function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it("should return 'true' if the input is '5'", function() {
        expect(isFive(5)).toBe(true);
    });
    it("should return 'true' if the input is ('5')", function() {
        expect(isFive('5')).toBe(true);
    });
});

//Unit tests for isEven function
describe("isEven", function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it("should return a boolean no matter what the input", function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it("should return 'true' if the input is '2'", function() {
        expect(isEven(2)).toBe(true);
    });
    it("should return 'true' if the input is '-4'", function() {
        expect(isEven(-4)).toBe(true);
    });
    it("should return 'false' if the input is '3'", function() {
        expect(isEven(3)).toBe(false);
    });
    it("should return 'false' if the input is 'banana'", function() {
        expect(isEven('banana')).toBe(false);
    });
    it("should return 'true' if the input is ('8')", function() {
        expect(isEven("8")).toBe(true);
    });
    it("should return 'false' if the input is 'Infinity'", function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it("should return 'false' if the input is a boolean", function() {
        expect(isEven(false)).toBe(false);
    });
    it("should return 'false' if there is no input", function() {
        expect(isEven()).toBe(false);
    });
});
