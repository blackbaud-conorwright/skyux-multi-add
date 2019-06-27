import {
  Component,
  Input,
  forwardRef
} from '@angular/core';

import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'sky-multi-add',
  templateUrl: './multi-add.component.html',
  styleUrls: ['./multi-add.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // tslint:disable-next-line: no-forward-ref
      useExisting: forwardRef(() => SkyMultiAddComponent),
      multi: true
    }
  ]
})
export class SkyMultiAddComponent implements ControlValueAccessor {
  public valueAdd: string;

  @Input()
  public get values(): string[] {
    return this._values;
  }
  public set values(value: string[]) {
    if (value && value !== this._values) {
      this._values = value;
      this.onTouch();
      this.onChange(this._values);
    }
  }

  @Input()
  public isValid: Function;

  @Input()
  public placeholder: string = '';

  @Input()
  public inputId: string;

  @Input()
  public disabled = false;

  private _values: string[] = [];

  public addValue() {
    if (this.checkIfValid(this.valueAdd)) {
      this.values.push(this.valueAdd);
      this.valueAdd = '';
    }
  }

  public removeValue(value: string) {
    let newList = this.values.filter(item => item !== value);
    this.values = newList;
  }

  public keyDownEvent(event: KeyboardEvent) {
    if (event.key.toLowerCase() === 'enter') {
      this.addValue();
    }
  }

  public writeValue(values: string[]): void {
    this.values = values;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private checkIfValid(value: string) {
    let isValid = this.isValid ? this.isValid(this.valueAdd) : this.valueAdd;
    let isUnique = this.values.filter(val => val === value).length === 0;
    return isValid && isUnique;
  }

  private onTouch = () => {};
  private onChange = (val: any) => {};
}
