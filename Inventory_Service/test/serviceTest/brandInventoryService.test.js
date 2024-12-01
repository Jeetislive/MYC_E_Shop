import {expect} from "chai";
import sinon from "sinon";
import brandInventoryService from "../../service/brandInventoryService.js";
import brandInventoryRepository from "../../repository/brandInventoryRepository.js";

describe('Brand Service', () => {
    afterEach(() => {
        sinon.restore();
    });
    describe('add brand', () => {
        it('should insert an brand and return status 201',
            async () => { 
                let brand_id= 1; 
                let brand_name =  "Nike";
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(brandInventoryRepository, "addBrand").resolves('Success');

                    await brandInventoryService.addBrand( brand_id, brand_name );

                    expect(brandInventoryRepository.addBrand.calledOnce).to.be.true;
            });
    });
    describe('get all brands', () => {
        it('should get all brands and return status 200',
            async () => {
                    let testGetAllBrands = [
                        {
                            "brand_id": 1,
                            "brand_name": "Jordan",
                            "created_at": "2024-11-24T11:26:15.000Z",
                            "updated_at": "2024-11-24T11:31:28.000Z"
                        }
                    ];
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(brandInventoryRepository, "getAllBrands").resolves(testGetAllBrands);


                    const result = await brandInventoryService.getAllBrands();
                    expect(result).to.equal(testGetAllBrands);
                    expect(brandInventoryRepository.getAllBrands.calledOnce).to.be.true;
            });
    });
    describe('get brand by Id', () => {
        it('should check an brand by Id and return status 200',
            async () => {
                    let brandId = 1;
                    let testGetBrandById = 
                    {
                        "brand_id": 1,
                        "brand_name": "Jordan",
                        "created_at": "2024-11-24T11:26:15.000Z",
                        "updated_at": "2024-11-24T11:31:28.000Z"
                    };
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(brandInventoryRepository, "getBrandById").resolves(testGetBrandById);


                    const result = await brandInventoryService.getBrandById(brandId);
                    expect(result).to.equal(testGetBrandById);
                    expect(brandInventoryRepository.getBrandById.calledOnce).to.be.true;
            });
    });
    describe('update brand', () => {
        it('should update an brand and return status 200',
            async () => {
                let brand_id= 2; 
                let brand_name =  "Nike";
                    sinon.stub(brandInventoryRepository, "updateBrand").resolves("success");
                    const result = await brandInventoryService.updateBrand(brand_id, brand_name);
                    expect(result).to.equal("success");
                    expect(brandInventoryRepository.updateBrand.calledOnce).to.be.true;

        });
    });
    describe('delete brand', () => {
        it('should delete an brand and return status 200',
            async () => {
                    let brandId = 2;
                    sinon.stub(brandInventoryRepository, "deleteBrand").resolves("success");
                    const result = await brandInventoryService.deleteBrand(brandId);
                    expect(result).to.equal("success");
                    expect(brandInventoryRepository.deleteBrand.calledOnce).to.be.true;
        });
    });
});
