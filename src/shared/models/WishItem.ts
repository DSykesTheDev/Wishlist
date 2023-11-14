export class WishItem {

    constructor(private _text: string, private _complete: boolean = false, private _personal?: boolean, private _public?: boolean)
    {

    }

    public get Text() {
        return this._text;
    }

    public set Text(value: string) 
    {
        this._text = value;
    }

    public get Complete() 
    {
        return this._complete;
    }

    public set Complete(value : boolean) { this._complete = value }
}