import {expect} from "chai";
import sinon from "sinon";
import colorInventoryService from "../../service/colorInventoryService.js";
import colorInventoryRepository from "../../repository/colorInventoryRepository.js";

describe('Color Service', () => {
    afterEach(() => {
        sinon.restore();
    });
    describe('add color', () => {
        it('should insert an color and return status 201',
            async () => { 
                let color_id= 1; 
                let color_name =  "Blue";
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(colorInventoryRepository, "addColor").resolves('Success');

                    await colorInventoryService.addColor( color_id, color_name );

                    expect(colorInventoryRepository.addColor.calledOnce).to.be.true;
            });
    });
    describe('get all colors', () => {
        it('should get all colors and return status 200',
            async () => {
                    let testGetAllColors = [
                        {
                            "color_id": 1,
                            "color_name": "Blue",
                            "created_at": "2024-11-24T11:26:15.000Z",
                            "updated_at": "2024-11-24T11:31:28.000Z"
                        },
                        {
                            "color_id": 2,
                            "color_name": "Orange",
                            "created_at": "2024-11-24T11:26:15.000Z",
                            "updated_at": "2024-11-24T11:31:28.000Z"
                        }
                    ];
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(colorInventoryRepository, "getAllColors").resolves(testGetAllColors);


                    const result = await colorInventoryService.getAllColors();
                    expect(result).to.equal(testGetAllColors);
                    expect(colorInventoryRepository.getAllColors.calledOnce).to.be.true;
            });
    });
    describe('get color by Id', () => {
        it('should check an color by Id and return status 200',
            async () => {
                    let colorId = 1;
                    let testGetColorById = 
                    {
                        "color_id": 1,
                        "color_name": "Blue",
                        "created_at": "2024-11-24T11:26:15.000Z",
                        "updated_at": "2024-11-24T11:31:28.000Z"
                    };
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(colorInventoryRepository, "getColorById").resolves(testGetColorById);


                    const result = await colorInventoryService.getColorById(colorId);
                    expect(result).to.equal(testGetColorById);
                    expect(colorInventoryRepository.getColorById.calledOnce).to.be.true;
            });
    });
    describe('update color', () => {
        it('should update an color and return status 200',
            async () => {
                let color_id= 2; 
                let color_name =  "Green";
                    sinon.stub(colorInventoryRepository, "updateColor").resolves("success");
                    const result = await colorInventoryService.updateColor(color_id, color_name);
                    expect(result).to.equal("success");
                    expect(colorInventoryRepository.updateColor.calledOnce).to.be.true;

        });
    });
    describe('delete color', () => {
        it('should delete an color and return status 200',
            async () => {
                    let colorId = 2;
                    sinon.stub(colorInventoryRepository, "deleteColor").resolves("success");
                    const result = await colorInventoryService.deleteColor(colorId);
                    expect(result).to.equal("success");
                    expect(colorInventoryRepository.deleteColor.calledOnce).to.be.true;
        });
    });
});
