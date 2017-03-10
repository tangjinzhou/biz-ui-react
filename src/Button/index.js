import classNames from 'classnames';
import React, {Component, PropTypes} from 'react';

export default class Button extends Component {
    static defaultProps = {
        prefixCls: 'biz-button',
        type: 'button',
        disabled: false,
        onClick: () => {
        },
        className: '',
    };

    handleOnClick(e) {
        const {disabled, onClick} = this.props;
        disabled || this.props.onClick(e);
    }

    render() {
        const {prefixCls, className, type, disabled, children, style} = this.props;
        const btnClass = classNames({
            [className]: true,
            [prefixCls]: true,
            [`${prefixCls}-disabled`]: disabled,
        });
        return (
            <button
                style={style}
                className={btnClass}
                type={type}
                disabled={disabled}
                onClick={(e) => this.handleOnClick(e)}
            >
                {children}
            </button>
        );
    }
}
Button.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
}