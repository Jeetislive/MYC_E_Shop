import {expect} from "chai"
import sinon from "sinon"
import itemInventoryService from "../../service/itemInventoryService.js";
import itemInventoryController from "../../controller/itemInventoryController.js";

describe('Item Inventory Controller', () => {
    let req, res, next;
    beforeEach(() => {
        req = {};
        res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub()
        };
        next = sinon.stub();
    });
    afterEach(() => {
        sinon.restore();
    });
    describe('add item', () => {
        it('should insert an item and return status 201',
            async () => {
                req.body = {
                    "item_code": "ITM001",
                    "item_name": "Nike Running Shoes",
                    "description": "High-quality running shoes designed for comfort and performance.",
                    "price": 99.99,
                    "stock_quantity": 50,
                    "status": "available",
                    "size_id": 1,
                    "brand_id": 1,
                    "color_id": 2
                };
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(itemInventoryService, "addItem").resolves('Success');

                    await itemInventoryController.addItem(req,res,next);
                    expect(res.status.calledWith(201)).to.be.true;
            });
    });
    describe('getAll items', () => {
        it('should fetch all existing items and return status 200',
            async () => {
                const items = [
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
                req.body = {};
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(itemInventoryService, "getAllItems").resolves(items);
                    await itemInventoryController.getAllItems(req,res,next);
                    expect(res.status.calledWith(200)).to.be.true;
                    expect(res.json.calledWith(items)).to.be.true;
            });
    });
    describe('get item by Id', () => {
        it('should fetch an existing item and return status 200',
            async () => {
                const item = {
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
                req.params = { itemId : 1 };
                req.body = {};
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(itemInventoryService, "getItemById").resolves(item);


                    await itemInventoryController.getItemById(req,res,next);
                    expect(res.status.calledWith(200)).to.be.true;
                    expect(res.json.calledWith(item)).to.be.true;
            });
    });
    describe('Update item by Id', () => {
        it('should update an existing item and return status 200 with updated message',
            async () => {
                const updatedItem = { message: 'Item updated successfully.'};
                req.params = { itemId: 1 };
                req.body = {
                    "item_code": "ITM001",
                    "item_name": "Nike Running Shoes",
                    "description": "High-quality running shoes designed for comfort and performance.",
                    "price": 99.99,
                    "stock_quantity": 50,
                    "status": "available",
                    "size_id": 1,
                    "brand_id": 1,
                    "color_id": 2
                };
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(itemInventoryService, "updateItem").resolves(updatedItem);
                    await itemInventoryController.updateItemById(req,res,next);
                    expect(res.status.calledWith(202)).to.be.true;
                    expect(res.json.calledWith(updatedItem)).to.be.true;
            });
    });
    describe('delete item', () => {
        it('should delete an existing item and return status 200 with delete message',
            async () => {
                const item = {"message": "Item deleted successfully."};
                req.params = { itemId: 1 };
                req.body = {};
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(itemInventoryService, "deleteItem").resolves(item);
                    await itemInventoryController.deleteItemById(req,res,next);
                    expect(res.status.calledWith(202)).to.be.true;
                    expect(res.json.calledWith(item)).to.be.true;
            });
    });
});
