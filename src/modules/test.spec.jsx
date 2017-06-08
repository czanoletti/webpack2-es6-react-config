let TestUtils = require('react-dom/test-utils');
import {Welcome} from './my.component';

describe('Testing react code', () => {

    it("renders an h1", function () {
        var component = TestUtils.renderIntoDocument(
            <Welcome />
        );

        var h1 = TestUtils.findRenderedDOMComponentWithTag(
            component, 'h1'
        );

        expect(h1.textContent)
            .toEqual("Hello");
    });

});
