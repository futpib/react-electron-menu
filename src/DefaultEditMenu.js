const React = require('react');
const PropTypes = require('prop-types');
const MenuItem = require('./MenuItem');

/**
 * Default edit menu for the application.
 * @type {ReactClass}
 */
class DefaultEditMenu extends React.Component {
    static propTypes = {
        children: PropTypes.node
    };

    static contextTypes = {
        electron: PropTypes.object.isRequired
    };

    render() {
        const { children } = this.props;

        return (
            <MenuItem id="edit" label="Edit">
                <MenuItem role="undo" />
                <MenuItem role="redo" />
                <MenuItem.Separator />
                <MenuItem role="cut" />
                <MenuItem role="copy" />
                <MenuItem role="paste" />
                <MenuItem role="pasteandmatchstyle" />
                <MenuItem role="delete" />
                <MenuItem role="selectall" />
                {children}
            </MenuItem>
        );
    }
}

module.exports = DefaultEditMenu;
