describe('Library Management System', function(){
	it('Should navigate to"Admin Login" form when "Admin" button is clicked', function(){
		browser.get('http://localhost:3000');
		element(by.id('btnAdmin')).click();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#!/adminLogin');
	})
})