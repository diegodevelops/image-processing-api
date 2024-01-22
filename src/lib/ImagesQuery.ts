enum QueryParameters {
  fileName = 'file_name',
  width = 'width',
  height = 'height',
}

export default class ImagesQuery {
  fileName?: string;
  width?: number;
  height?: number;

  constructor(reqQuery: { [key: string]: any }) {
    this.fileName = reqQuery[QueryParameters.fileName] as string;
    this.width = this._getValidNumberIfAny(reqQuery[QueryParameters.width]);
    this.height = this._getValidNumberIfAny(reqQuery[QueryParameters.height]);
  }

  private _getValidNumberIfAny(value: string | undefined): number | undefined {
    let possibleNumber = parseInt(value ?? '');
    return isNaN(possibleNumber) ? undefined : possibleNumber;
  }

  public hasFileName(): boolean {
    return (this.fileName || '').trim() != '';
  }

  public hasWidthAndHeight(): boolean {
    return this.width != undefined && this.height != undefined;
  }
}
