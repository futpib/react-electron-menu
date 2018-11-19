const React = require('react');
const PropTypes = require('prop-types');
const MenuItem = require('./MenuItem');

/**
 * Default window menu to control the window.
 * @type {ReactClass}
 */
class DefaultWindowMenu extends React.Component {
    static propTypes = {
        children: PropTypes.node
    };

    static contextTypes = {
        electron: PropTypes.object.isRequired
    };

    render() {
        const { children } = this.props;
        const { electron } = this.context;
        const os = electron.remote.require('os');
        const isMac = (os.platform() == 'darwin');

        return (
            <MenuItem role="window">
                <MenuItem role="minimize" />
                {children}
                {isMac ? <MenuItem.Separator /> : null}
                {isMac ? <MenuItem role="front" /> : null}
            </MenuItem>
        );
    }
}

module.exports = DefaultWindowMenu;
