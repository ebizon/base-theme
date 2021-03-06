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
import TextPlaceholder from 'Component/TextPlaceholder';
import Field from 'Component/Field';
import './CategorySort.style';

/**
 * Product Sort
 * @class ProductSort
 */
class CategorySort extends PureComponent {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        const { onSortChange } = this.props;
        const [direction, ...key] = value.split(' ');

        onSortChange(direction, key);
    }

    renderPlaceholder() {
        return (
            <p block="CategorySort" elem="Placeholder">
                <TextPlaceholder length="short" />
            </p>
        );
    }

    renderSortField() {
        const {
            sortKey, sortDirection, sortFields, selectOptions
        } = this.props;

        if (!sortFields.length) return this.renderPlaceholder();

        return (
            <Field
              id="category-sort"
              name="category-sort"
              type="select"
              label="SORT"
              mix={ { block: 'CategorySort', elem: 'Select' } }
              selectOptions={ selectOptions }
              value={ `${sortDirection} ${sortKey}` }
              onChange={ this.onChange }
            />
        );
    }

    render() {
        return (
            <div block="CategorySort">
                { this.renderSortField() }
            </div>
        );
    }
}

CategorySort.propTypes = {
    onSortChange: PropTypes.func.isRequired,
    sortKey: PropTypes.string.isRequired,
    sortDirection: PropTypes.string.isRequired,
    selectOptions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        disabled: PropTypes.bool,
        label: PropTypes.string
    })).isRequired,
    sortFields: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string
        }))
    ])
};

CategorySort.defaultProps = {
    sortFields: []
};

export default CategorySort;
