describe('this is index.js test', function() {
    it('isNum() should work fine.', function() {
      expect(isNum(1)).toBe(true)
      expect(isNum('1')).toBe(false)
    });
    it("reverse word",function(){
        expect("DCBA").toEqual(reverse("ABCD"));
    });
  })
  