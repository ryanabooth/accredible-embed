'use strict';

describe('Service: CertificateService', function () {

  // load the service's module
  beforeEach(module('accredibleEmbedApp'));

  // instantiate service
  var CertificateService;
  beforeEach(inject(function (_CertificateService_) {
    CertificateService = _CertificateService_;
  }));

  it('should do something', function () {
    expect(!!CertificateService).toBe(true);
  });

});
