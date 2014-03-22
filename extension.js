
const St = imports.gi.St;
const Main = imports.ui.main;
const Tweener = imports.ui.tweener;
const Lang = imports.lang;
const PanelMenu = imports.ui.panelMenu;

let layoutPrototype;

const MainLayout = new Lang.Class({
    Name: 'MainLayout',
    _init: function() {
        this.actor = new St.Table({ homogeneous: false, style_class: 'main-layout', reactive: true });
        this._setupLayout();
    },
    _setupLayout: function() {
        let self = this;
        this.actor.destroy_all_children();

        this._leftBox = new St.BoxLayout({style_class: 'left-box'});
        this.actor.add(this._leftBox, { row: 0, col: 0 });

        global.log('left box added');

        this._sampleLabelForLeftBox = new St.Label({text: 'Left Box', style_class: 'sample-label', can_focus: false });
        this._leftBox.add(this._sampleLabelForLeftBox, { expand: true, x_fill: false, x_align: St.Align.MIDDLE });

        this._rightBox = new St.BoxLayout({style_class: 'right-box'});
        this.actor.add(this._rightBox, { row: 0, col: 1 });

        global.log('right box added');

        this._sampleLabelForRightBox = new St.Label({text: 'Right Box', style_class: 'sample-label', can_focus: false });
        this._rightBox.add(this._sampleLabelForRightBox, { expand: true, x_fill: false, x_align: St.Align.MIDDLE });
    }
});

const LayoutPrototype = new Lang.Class({
    Name: 'LayoutPrototype',
    Extends: PanelMenu.Button,
    _init: function() {
        PanelMenu.Button.prototype._init.call(this, 0.0);
        this._label = new St.Label({ style_class: 'panel-label', text: _('Layout Prototype') });

        this.actor.label_actor = this._label;
        this.actor.add_actor(this._label);

        let hbox, vbox;

        hbox = new St.BoxLayout({ name: 'layoutPrototypeArea' });
        this.menu.box.add_child(hbox);

        vbox = new St.BoxLayout({vertical: true});
        hbox.add(vbox);

        this._layoutPrototype = new MainLayout();
        global.log(this._layoutPrototype);
        vbox.add(this._layoutPrototype.actor);

    }
});

function enable() {
    layoutPrototype = new LayoutPrototype();
	Main.panel.addToStatusArea('LayoutPrototype', layoutPrototype);
}

function disable() {
    layoutPrototype.destroy();
    layoutPrototype = null;
}
