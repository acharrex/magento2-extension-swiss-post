<?php
/**
 * Copyright © Shopigo. All rights reserved.
 * See LICENSE.txt for license details (http://opensource.org/licenses/osl-3.0.php).
 */

namespace Shopigo\SwissPost\Model\Carrier\Calculator;

use Magento\Quote\Model\Quote\Address\RateRequest;

class ItemPrice
{
    /**
     * @param RateRequest $request
     * @param int $basePrice
     * @param int $freeBoxes
     * @return float
     */
    public function getShippingPricePerItem(
        \Magento\Quote\Model\Quote\Address\RateRequest $request,
        $basePrice,
        $freeBoxes
    ) {
        return $request->getPackageQty() * $basePrice - $freeBoxes * $basePrice;
    }

    /**
     * @param RateRequest $request
     * @param int $basePrice
     * @param int $freeBoxes
     * @return float
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function getShippingPricePerOrder(
        \Magento\Quote\Model\Quote\Address\RateRequest $request,
        $basePrice,
        $freeBoxes
    ) {
        return $basePrice;
    }
}
