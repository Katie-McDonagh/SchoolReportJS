describe("schoolReport", function(){
  let schoolReport
  beforeEach(function() {
    schoolReport = new SchoolReport
  });

    it ("returns 'green: 1' when given 'green'", function (){
      expect(schoolReport.results("green")).toBe("green: 1")
    })

    it ("returns 'amber: 1' when given 'amber'", function(){
      expect(schoolReport.results("amber")).toBe("amber: 1")
    })

    it ("returns 'red: 1' when given 'red'", function(){
      expect(schoolReport.results("red")).toBe("red: 1")
    })

    it ("returns 'green: 2' when given 'green, green'", function(){
      expect(schoolReport.results("green, green")).toBe("green: 2")
    })

    it ("returns 'amber: 2' when given 2 ambers", function(){
      expect(schoolReport.results("amber, amber")).toBe("amber: 2")
    })

    it ("returns 'red: 2' when given 2 reds", function(){
      expect(schoolReport.results("red, red")).toBe("red: 2")
    })
})
