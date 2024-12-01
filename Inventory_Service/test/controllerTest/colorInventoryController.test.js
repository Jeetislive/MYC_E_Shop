import {expect} from "chai"
import sinon from "sinon"
import colorInventoryService from "../../service/colorInventoryService.js";
import colorInventoryController from "../../controller/colorInventoryController.js";

describe('Color Inventory Controller', () => {
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
    describe('add color', () => {
        it('should insert an color and return status 201',
            async () => {
                req.body = {
                    "color_id": 1,
                    "color_name": "Blue"
                };
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(colorInventoryService, "addColor").resolves('Success');

                    await colorInventoryController.addColor(req,res,next);
                    expect(res.status.calledWith(201)).to.be.true;
            });
    });
    describe('getAll colors', () => {
        it('should fetch all existing colors and return status 200',
            async () => {
                const colors = [
                    {
                        "color_id": 1,
                        "color_name": "Blue",
                        "created_at": "2024-11-24T11:26:15.000Z",
                        "updated_at": "2024-11-24T11:31:28.000Z"
                    },
                    {
                        "color_id": 2,
                        "color_name": "Orange",
                        "created_at": "2024-11-24T12:36:15.000Z",
                        "updated_at": "2024-11-24T11:31:28.000Z"
                    }
                ];
                req.body = {};
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(colorInventoryService, "getAllColors").resolves(colors);
                    await colorInventoryController.getAllColors(req,res,next);
                    expect(res.status.calledWith(200)).to.be.true;
                    expect(res.json.calledWith(colors)).to.be.true;
            });
    });
    describe('get color by Id', () => {
        it('should fetch an existing color and return status 200',
            async () => {
                const color = {
                    "color_id": 1,
                    "color_name": "Blue",
                    "created_at": "2024-11-24T11:26:15.000Z",
                    "updated_at": "2024-11-24T11:31:28.000Z"
                };
                req.params = { colorId : 1 };
                req.body = {};
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(colorInventoryService, "getColorById").resolves(color);


                    await colorInventoryController.getColorById(req,res,next);
                    expect(res.status.calledWith(200)).to.be.true;
                    expect(res.json.calledWith(color)).to.be.true;
            });
    });
    describe('Update color by Id', () => {
        it('should update an existing color and return status 200 with updated message',
            async () => {
                const updatedColor = { message: 'Color updated successfully.'};
                req.params = { colorId: 1 };
                req.body = {
                    "color_name": "Green"
                };
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(colorInventoryService, "updateColor").resolves(updatedColor);
                    await colorInventoryController.updateColorById(req,res,next);
                    expect(res.status.calledWith(202)).to.be.true;
                    expect(res.json.calledWith(updatedColor)).to.be.true;
            });
    });
    describe('delete color', () => {
        it('should delete an existing color and return status 200 with delete message',
            async () => {
                const color = {"message": "Color deleted successfully."};
                req.params = { colorId: 1 };
                req.body = {};
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(colorInventoryService, "deleteColor").resolves(color);
                    await colorInventoryController.deleteColorById(req,res,next);
                    expect(res.status.calledWith(202)).to.be.true;
                    expect(res.json.calledWith(color)).to.be.true;
            });
    });
});
