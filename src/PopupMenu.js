const React = require('react');
const Menu = require('./Menu');

/**
 * Menu shown at a specific position.
 * @type {ReactClass}
 */
class PopupMenu extends Menu {
    componentDidMount() {
        this.onMenuUpdated();
    }

    componentDidUpdate() {
        this.onMenuUpdated();
    }

    componentWillUnmount() {

    }

    onMenuUpdated() {
        const { x, y, onClose } = this.props;
        const { electron } = this.context;
        const window = electron.remote.getCurrentWindow();

        if (!window) {
            return;
        }

        const menu = this.getMenu();
        menu.popup({
            window,
            x, y,
            callback: onClose
        });
    }
}

PopupMenu.propTypes = {
    ...Menu.propTypes,
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    onClose: React.PropTypes.func
};
PopupMenu.contextTypes = Menu.contextTypes;

module.exports = PopupMenu;
