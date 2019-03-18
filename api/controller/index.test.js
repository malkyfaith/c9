
import api from './index';
import * as httpMocks from 'node-mocks-http';
import * as SERVICE_REQUEST from './__test_mocks__/sample-request.json';
describe('filter service', function () {
  it("should have a funciton", () => {
    expect(api.filter).toBeInstanceOf(Function);
  });

  it('should filter request object and return array with new fields of image, slug, title', () => {
    const req = httpMocks.createRequest({
      method: 'POST',
      body: SERVICE_REQUEST
    });

    const res = httpMocks.createResponse();
    api.filter(req, res);

    const data = JSON.parse(res._getData());
    expect(data).toBeDefined();
    expect(data.response).toBeDefined();
    expect(data.response.length).toBe(2);
    data.response.forEach(d => {
      expect(d.image).toBeDefined();
      expect(d.slug).toBeDefined();
      expect(d.title).toBeDefined();
    });
  });

});
