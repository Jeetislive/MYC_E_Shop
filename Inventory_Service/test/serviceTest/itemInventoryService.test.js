import {expect} from "chai";
import sinon from "sinon";
import itemInventoryService from "../../service/itemInventoryService.js";
import itemInventoryRepository from "../../repository/itemInventoryRepository.js";

describe('Item Service', () => {
    afterEach(() => {
        sinon.restore();
    });
    describe('add item', () => {
        it('should insert an item and return status 201',
            async () => { 
                let item_code= 1; 
                let item_name =  "Blue";
                let description = "Comfortable and stylish running shoes.";
                let price = 99.99;
                let stock_quantity = 50;
                let status = "available";
                let size_id = 1;
                let brand_id = 1;
                let color_id = 2;
                
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(itemInventoryRepository, "addItem").resolves('Success');

                    await itemInventoryService.addItem( item_code, item_name, description, price, stock_quantity, status, size_id, brand_id, color_id);

                    expect(itemInventoryRepository.addItem.calledOnce).to.be.true;
            });
    });
    describe('get all items', () => {
        it('should get all items and return status 200',
            async () => {
                    let testGetAllItems = [
                        {
                            "item_id": 1,
                            "item_code": "ITM001",
                            "item_name": "Nike Running Shoes",
                            "description": "High-quality running shoes designed for comfort and performance.",
                            "price": "99.99",
                            "stock_quantity": 50,
                            "status": "available",
                            "size_id": 1,
                            "brand_id": 1,
                            "color_id": 2,
                            "created_at": "2024-11-24T12:25:31.000Z",
                            "updated_at": "2024-11-24T12:25:31.000Z"
                        }
                    ];
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(itemInventoryRepository, "getAllItems").resolves(testGetAllItems);


                    const result = await itemInventoryService.getAllItems();
                    expect(result).to.equal(testGetAllItems);
                    expect(itemInventoryRepository.getAllItems.calledOnce).to.be.true;
            });
    });
    describe('get item by Id', () => {
        it('should check an item by Id and return status 200',
            async () => {
                    let itemId = 1;
                    let testGetItemById = 
                    {
                        "item_id": 1,
                        "item_code": "ITM001",
                        "item_name": "Nike Running Shoes",
                        "description": "High-quality running shoes designed for comfort and performance.",
                        "price": "99.99",
                        "stock_quantity": 50,
                        "status": "available",
                        "size_id": 1,
                        "brand_id": 1,
                        "color_id": 2,
                        "created_at": "2024-11-24T12:25:31.000Z",
                        "updated_at": "2024-11-24T12:25:31.000Z"
                    };
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(itemInventoryRepository, "getItemById").resolves(testGetItemById);


                    const result = await itemInventoryService.getItemById(itemId);
                    expect(result).to.equal(testGetItemById);
                    expect(itemInventoryRepository.getItemById.calledOnce).to.be.true;
            });
    });
    describe('update item', () => {
        it('should update an item and return status 200',
            async () => {
                let itemId = 1;
                let item_code= 1; 
                let item_name =  "Blue";
                let description = "Comfortable and stylish running shoes.";
                let price = 99.99;
                let stock_quantity = 50;
                let status = "available";
                let size_id = 1;
                let brand_id = 1;
                let color_id = 2;
                    sinon.stub(itemInventoryRepository, "updateItem").resolves("success");
                    
                    const result = await itemInventoryService.updateItem(itemId, item_code, item_name, description, price, stock_quantity, status, size_id, brand_id, color_id);
                    expect(result).to.equal("success");
                    expect(itemInventoryRepository.updateItem.calledOnce).to.be.true;

        });
    });
    describe('delete item', () => {
        it('should delete an item and return status 200',
            async () => {
                    let itemId = 2;
                    sinon.stub(itemInventoryRepository, "deleteItem").resolves("success");
                    const result = await itemInventoryService.deleteItem(itemId);
                    expect(result).to.equal("success");
                    expect(itemInventoryRepository.deleteItem.calledOnce).to.be.true;
        });
    });
});
