/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MixType } from 'Type/Common';
import { ProductType } from 'Type/ProductList';
import './AddToCart.style';

/**
 * Button for adding product to Cart
 * @class AddToCart
 */
class AddToCart extends PureComponent {
    renderPlaceholder() {
        const { isLoading, mix } = this.props;

        return (
            <div
              block="AddToCart"
              mods={ { isLoading, isPlaceholder: true } }
              mix={ mix }
            />
        );
    }

    render() {
        const {
            mix,
            product: { type_id },
            isLoading,
            buttonClick,
            isDisabled
        } = this.props;

        if (!type_id) this.renderPlaceholder();

        return (
            <button
              onClick={ buttonClick }
              block="Button AddToCart"
              mix={ mix }
              mods={ { isLoading } }
              disabled={ isDisabled }
            >
                <span>{ __('Add to cart') }</span>
                <span>{ __('Adding...') }</span>
            </button>
        );
    }
}

AddToCart.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool,
    product: ProductType,
    mix: MixType,
    buttonClick: PropTypes.func.isRequired
};

AddToCart.defaultProps = {
    product: {},
    mix: {},
    isLoading: false
};

export default AddToCart;
