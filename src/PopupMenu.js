const PropTypes = require('prop-types');
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
    x: PropTypes.number,
    y: PropTypes.number,
    onClose: PropTypes.func
};
PopupMenu.contextTypes = Menu.contextTypes;

module.exports = PopupMenu;
