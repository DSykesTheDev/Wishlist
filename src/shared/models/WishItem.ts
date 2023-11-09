export class WishItem {

    constructor(private _text: string, private _complete: boolean = false)
    {

    }

    public get Text() {
        return this._text;
    }

    public set Text(value: string) 
    {
        this._text = value;
    }

    public isComplete() 
    {
        return this._complete;
    }

    public Complete()
    {
        this._complete = !this._complete;
    }
}