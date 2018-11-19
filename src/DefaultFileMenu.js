const React = require('react');
const PropTypes = require('prop-types');
const MenuItem = require('./MenuItem');

/**
 * Default file menu for the application.
 * @type {ReactClass}
 */
class DefaultFileMenu extends React.Component {
    static propTypes = {
        appName:  PropTypes.string.isRequired,
        onAbout:  PropTypes.func.isRequired,
        children: PropTypes.node
    };

    static contextTypes = {
        electron: PropTypes.object.isRequired
    };

    render() {
        const { appName, children, onAbout } = this.props;
        const { electron } = this.context;
        const os = electron.remote.require('os');
        const isMac = (os.platform() == 'darwin');

        return (
            <MenuItem id="file" label={appName}>
                <MenuItem
                    label={`About ${appName}`}
                    selector="orderFrontStandardAboutPanel"
                    onClick={onAbout}
                    role="about"
                />
                {children}
                <MenuItem role="toggledevtools" />
                {isMac ? <MenuItem.Separator /> : null}
                {isMac ? <MenuItem label="Services" submenu={[]} /> : null}
                {isMac ? <MenuItem.Separator /> : null}
                {isMac ? <MenuItem role="close"/> : null}
                {isMac ? <MenuItem role="hide" /> : null}
                {isMac ? <MenuItem role="hideothers"/> : null}
                {isMac ? <MenuItem role="unhide"/> : null}
                {isMac ? <MenuItem.Separator /> : null}
                <MenuItem role="quit" />
            </MenuItem>
        );
    }
}

module.exports = DefaultFileMenu;
