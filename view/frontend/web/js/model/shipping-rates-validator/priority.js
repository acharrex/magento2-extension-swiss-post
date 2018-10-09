/**
 * Copyright © Shopigo. All rights reserved.
 * See LICENSE.txt for license details (http://opensource.org/licenses/osl-3.0.php).
 */
/*global define*/
define(
    [
        'jquery',
        'mageUtils',
        '../shipping-rates-validation-rules/priority',
        'mage/translate'
    ],
    function ($, utils, validationRules, $t) {
        "use strict";
        return {
            validationErrors: [],
            validate: function(address) {
                var self = this;
                this.validationErrors = [];
                $.each(validationRules.getRules(), function(field, rule) {
                    if (rule.required && utils.isEmpty(address[field])) {
                        var message = $t('Field ') + field + $t(' is required.');
                        self.validationErrors.push(message);
                    }
                });
                return !Boolean(this.validationErrors.length);
            }
        };
    }
);
