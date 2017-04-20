'use strict';
module.exports = {
    getStoreDetails: function () {
        this.store = {
            name: 'VS Food',
            contactName: 'Gopi',
            telephone: '9999999999',
            user: 'admin'
        };
        return this.store;
    },
    getStoreAddress: function () {
        this.address = {
            addressType: 'Store',
            address1: 'NSL Arena',
            pinCode: '500032',
            address2: 'Uppal-Ramanthapur Road',
            city: 'Hyderabad',
        };
        return this.address;
    }
};

