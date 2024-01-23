export enum QueryParameters {
  fileName = 'file_name', // eslint-disable-line no-unused-vars
  width = 'width', // eslint-disable-line no-unused-vars
  height = 'height', // eslint-disable-line no-unused-vars
}

export default class ImagesQuery {
  fileName?: string;
  width?: number;
  height?: number;

  constructor(reqQuery: { [key: string]: unknown }) {
    this.fileName = reqQuery[QueryParameters.fileName] as string;
    this.width = this._getValidNumberIfAny(reqQuery[QueryParameters.width] as string);
    this.height = this._getValidNumberIfAny(reqQuery[QueryParameters.height]  as string);
  }

  private _getValidNumberIfAny(value: string | undefined): number | undefined {
    const possibleNumber = parseInt(value ?? '');
    return isNaN(possibleNumber) ? undefined : possibleNumber;
  }

  public hasFileName(): boolean {
    return (this.fileName || '').trim() != '';
  }

  public hasWidthAndHeight(): boolean {
    return this.width != undefined && this.height != undefined;
  }
}
