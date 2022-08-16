export default class Icon {
    private _name: string;
    private _url: string;
    private _ext?: string;
    private _link: string;

    constructor(name: string, url: string, ext: string = "png", link: string) {
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
