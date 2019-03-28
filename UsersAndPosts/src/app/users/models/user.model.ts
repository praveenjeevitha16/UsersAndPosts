export interface User {
	id: string;	
    name: string;
    username: string
    email: string;
    phone: string;
    address: Address,
    website: string,
    company: Company
}

interface Address {
	street: string,
	suite: string,
	city: string,
	zipcode: string,
	geo: {
		lat: string,
		lng: string
	}
}

interface Company {
	name: string,
	catchPhrase: string,
	bs: string
}