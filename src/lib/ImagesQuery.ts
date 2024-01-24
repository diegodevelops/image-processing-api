export enum QueryParameters {
  fileName = 'file_name', // eslint-disable-line no-unused-vars
  width = 'width', // eslint-disable-line no-unused-vars
  height = 'height', // eslint-disable-line no-unused-vars
}

export default class ImagesQuery {
  fileName?: string;
  width?: number;
  height?: number;
  inputWidth?: string
  inputHeight?: string

  constructor(reqQuery: { [key: string]: unknown }) {
    this.fileName = reqQuery[QueryParameters.fileName] as string;
    this.width = this._getValidNumberIfAny(reqQuery[QueryParameters.width] as string);
    this.height = this._getValidNumberIfAny(reqQuery[QueryParameters.height]  as string);
    this.inputWidth = reqQuery[QueryParameters.width] as string
    this.inputHeight = reqQuery[QueryParameters.height]  as string
  }

  private _isValidInput(value: string | undefined): boolean {
    const possibleNumber = Number(value || '')
    return (isNaN(possibleNumber))
      ? false
      : (possibleNumber > 0)
  }

  private _getValidNumberIfAny(value: string | undefined): number | undefined {
    if (this._isValidInput(value)) { return Number(value || '') }
    return;
  }

  public hasFileName(): boolean {
    return (this.fileName || '').trim() != '';
  }

  public hasWidthAndHeight(): boolean {
    return this.width != undefined && this.height != undefined;
  }

  public didProvideInputWidthAndHeight(): boolean {
    return this.inputWidth != undefined && this.inputHeight != undefined;
  }

  public didProvideInputWidth(): boolean {
    return this.inputWidth != undefined;
  }

  public didProvideInputHeight(): boolean {
    return this.inputHeight != undefined;
  }

  public didProvideValidInputWidth(): boolean {
    return this._isValidInput(this.inputWidth)
  }

  public didProvideValidInputHeight(): boolean {
    return this._isValidInput(this.inputHeight)
  }
}
