/**
 * Copyright © Shopigo. All rights reserved.
 * See LICENSE.txt for license details (http://opensource.org/licenses/osl-3.0.php).
 */
/*browser:true*/
/*global define*/
define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/shipping-rates-validator',
        'Magento_Checkout/js/model/shipping-rates-validation-rules',
        '../../model/shipping-rates-validator/express',
        '../../model/shipping-rates-validation-rules/express'
    ],
    function (
        Component,
        defaultShippingRatesValidator,
        defaultShippingRatesValidationRules,
        expressShippingRatesValidator,
        expressShippingRatesValidationRules
    ) {
        "use strict";
        defaultShippingRatesValidator.registerValidator('swisspostexpress', expressShippingRatesValidator);
        defaultShippingRatesValidationRules.registerRules('swisspostexpress', expressShippingRatesValidationRules);
        return Component;
    }
);
