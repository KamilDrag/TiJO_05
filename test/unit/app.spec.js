describe('app', function () {
    'use strict';

    var app = window.app;

    describe('generateMessage', function () {
        it(' ', function () {
            expect(app.generateMessage("javascript")).toEqual({vowel: 3, palindrome: false});
        });
        it(' ', function () {
            expect(app.generateMessage("ada")).toEqual({vowel: 2, palindrome: true});
        });
    });

    describe('isPalindrome', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function () {
                spyOn(app, 'isPalindrome');
                app.isPalindrome('ada');
            });
            it('should call isPalindrome function', function () {
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('ada');
            });
        });

        describe('and.callThrough', function () {
            beforeAll(function () {
                spyOn(app, 'isPalindrome').and.callThrough();
                app.generateMessage('qwertytrewq');
            });
            it('should call isPalindrome, vowelCount functions when generateMessage function is call', function () {
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('qwertytrewq');
            });
        });

        describe('and.returnValue', function () {
            var returns;
            beforeAll(function () {
                spyOn(app, 'isPalindrome').and.returnValue(true);
            });
            it('should call generateMessage and return values 2 and true', function () {
                returns = app.generateMessage('rotator');
                expect(returns).toEqual({vowel: 3, palindrome: true});
            });
            it('should call isPalindrome and vowelCount should return true and 3', function () {
                returns = app.isPalindrome('rotator');
                expect(returns).toEqual(true);
            });
        });

        describe('and.callFake', function () {
            beforeAll(function () {
                spyOn(app, 'isPalindrome').and.callFake(function () {
                    return 'fake'
                });
            });
            it('should call isPalindrome fake function', function () {
                expect(app.isPalindrome('test')).toEqual('fake');
            });
            it('should call isPalindrome and generateMessage fake function', function () {
                expect(app.generateMessage('ala')).toEqual({vowel: 2, palindrome: 'fake'});
            });
        });

        describe('calls.count()', function () {
            var returns;
            beforeAll(function () {
                spyOn(app, 'isPalindrome').and.callThrough();
            });
            it('should notice that isPalindrome is call', function () {
                returns = app.isPalindrome('ada');
                expect(app.isPalindrome.calls.count()).toBe(1);
            });
            it('should notice when generateMessage and isPalindrome is call', function () {
                returns = app.generateMessage('kajak');
                expect(app.isPalindrome.calls.count()).toBe(2);
            });
        });
    });

    describe('vowelCount', function () {
        describe('toHaveBeenCalled', function () {
            beforeAll(function () {
                spyOn(app, 'vowelCount');
                app.vowelCount('ada');
            });
            it('should call vowelCount function', function () {
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith('ada');
            });
        });

        describe('and.callThrough', function () {
            beforeAll(function () {
                spyOn(app, 'vowelCount').and.callThrough();
                app.generateMessage('rotator');
            });
            it('should call vowelCount and vowelCount functions when generateMessage function is call', function () {
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith('rotator');
            });
        });

        describe('and.returnValue', function () {
            var returns;
            beforeAll(function () {
                spyOn(app, 'vowelCount').and.returnValue(1);
            });
            it('should call generateMessage and return values 1 and true', function () {
                returns = app.generateMessage('mam');
                expect(returns).toEqual({vowel: 1, palindrome: true});
            });
            it('should call vowelCount and return 1', function () {
                returns = app.vowelCount('mam');
                expect(returns).toEqual(1);
            });
        });

        describe('and.callFake', function () {
            beforeAll(function () {
                spyOn(app, 'vowelCount').and.callFake(function () {
                    return 'test';
                });
            });
            it('should call vowelCount fake function', function () {
                expect(app.vowelCount('javascript')).toEqual('test');
            });
            it('should call vowelCount and generateMessage fake function', function () {
                expect(app.generateMessage('ada')).toEqual({vowel: 'test', palindrome: true});
            });
        });

        describe('calls.count()', function () {
            var returns;
            beforeAll(function () {
                spyOn(app, 'vowelCount').and.callThrough();
            });
            it('should notice that vowelCount is called', function () {
                returns = app.vowelCount('ada');
                expect(app.vowelCount.calls.count()).toBe(1);
            });
            it('should notice that vowelCount and generateMessage is called', function () {
                returns = app.generateMessage('mam');
                expect(app.vowelCount.calls.count()).toBe(2);
            });
        });
    });
});

