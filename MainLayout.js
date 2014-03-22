const St = imports.gi.St;
const Lang = imports.lang;


const MainLayout = new Lang.Class({
    Name: 'MainLayout',
    _init: function() {
        this.actor = new St.Table({ homogeneous: false, style_class: 'main-layout', reactive: true });
        this._setupLayout();
    },
    _setupLayout: function() {
        let self = this;
        this.actor.destroy_all_children();

        this._leftBox = new St.BoxLayout();
        this.actor.add(this._topBox, { row: 0, col: 0 });

        this._sampleLabelForLeftBox = new St.Label({text: 'Left Box', style_class: 'sample-label', can_focus: false });
        this._leftBox.add(this._sampleLabelForLeftBox, { expand: true, x_fill: false, x_align: St.Align.MIDDLE });

        this._rightBox = new St.BoxLayout();
        this.actor.add(this._rightBox, { row: 0, col: 1 });

        this._sampleLabelForRightBox = new St.Label({text: 'Right Box', style_class: 'sample-label', can_focus: false });
        this._rightBox.add(this._sampleLabelForRightBox, { expand: true, x_fill: false, x_align: St.Align.MIDDLE });
    }
});
