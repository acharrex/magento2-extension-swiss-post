/**
 * Copyright © Shopigo. All rights reserved.
 * See LICENSE.txt for license details (http://opensource.org/licenses/osl-3.0.php).
 */
/*global define*/
define(
    [],
    function () {
        "use strict";
        return {
            getRules: function() {
                return {
                    'country_id': {
                        'required': true
                    }
                };
            }
        };
    }
);
