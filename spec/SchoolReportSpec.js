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

})
