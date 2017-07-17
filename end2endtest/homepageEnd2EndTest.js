describe("Library Management", function(){
	it("Should Navigate to 'Admin Login' form when 'Admin' button is clicked",function(){
		browser.get("http://localhost:3000/");
		element(by.id('btnAdmin')).click();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/adminLogin');
	});
});