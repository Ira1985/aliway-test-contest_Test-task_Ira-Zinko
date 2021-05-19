export default class Field<T> {
  private _label: keyof T;
  private _sortable: boolean;
  private _sortBy: 'desc' | 'asc'
  private _alias: string
  private _unit: string | null

  constructor (label: keyof T, sortable: boolean, alias: string, unit: string | null) {
    this._label = label
    this._alias = alias
    this._sortable = sortable
    this._sortBy = 'desc'
    this._unit = unit
  }

  get sortBy (): 'desc' | 'asc' {
    return this._sortBy
  }

  set sortBy (value: 'desc' | 'asc') {
    this._sortBy = value
  }

  get label (): keyof T {
    return this._label
  }

  get sortable (): boolean {
    return this._sortable
  }

  get alias (): string {
    return this._alias
  }

  get unit (): string | null {
    return this._unit
  }
}
