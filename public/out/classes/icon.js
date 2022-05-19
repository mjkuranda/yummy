export class Icon {
    _name;
    _url;
    _ext;
    _link;
    constructor(name, url, ext = "png", link) {
        this._name = name;
        this._url = url;
        this._ext = ext;
        this._link = link;
    }
    get name() {
        return this._name;
    }
    get url() {
        return this._url;
    }
    get link() {
        return this._link;
    }
    get fileName() {
        return this._name + "." + this._ext;
    }
    get src() {
        return "icons" + this.url + "/" + this.fileName;
    }
}
