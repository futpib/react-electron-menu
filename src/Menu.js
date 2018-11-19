const React = require('react');
const PropTypes = require('prop-types');
const { renderToMenu } = require('./render');

/**
 * Component to render a menu.
 * @type {ReactClass}
 */
class Menu extends React.Component {

    /**
     * Get current menu.
     * @return {Menu}
     */
    getMenu() {
        const { electron } = this.context;
        const { children } = this.props;
        this.menu = renderToMenu(<div>{children}</div>, electron);

        return this.menu;
    }

    render() {
        return null;
    }
}

Menu.propTypes = {
    children: PropTypes.node.isRequired
};

Menu.contextTypes = {
    electron: PropTypes.object.isRequired
};

module.exports = Menu;
