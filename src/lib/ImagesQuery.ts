
enum QueryParameters {
    fileName = 'file_name',
    width = 'width',
    height = 'height'
}

export default class ImagesQuery {

    fileName?: string
    width?: string
    height?: string

    constructor(reqQuery: {[key: string]: any}) {
        this.fileName = reqQuery[QueryParameters.fileName]
        this.width = reqQuery[QueryParameters.width]
        this.height = reqQuery[QueryParameters.height]
    }

    private _hasProperValue(prop?: string): boolean {
        return (prop || '').trim() != '' 
    }
    
    public hasFileName(): boolean {
        return this._hasProperValue(this.fileName)
    }

    public hasWidthAndHeight(): boolean {
        return this._hasProperValue(this.width)
            && this._hasProperValue(this.height)
    }
}