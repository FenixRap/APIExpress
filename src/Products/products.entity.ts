
export class Product {


    constructor(
        private _name: string,
        private _discountPrice: number,
        private _price: number,
        private _img: string,
        private _img2: string,
        private _img3: string,
        private _category: string,
        private _active1: string,
        private _active2: string,
        private _active3: string,
        private _active4: string,
        private _active5: string,
        private _active6: string,
        private _volume: string,
        private _count: number,
        private _sellCount: number,
        private _barCode: string,
        private _engName: string,
        private _skinType: string,
        private _madeCountry: string,
        private _howToUse: string,
        private _description: string,
        private _type: string,
        private _brand: string,
        private _rating: number
    ) {

    }
    get name(): string {
        return this._name;
    }
    get discountPrice(): number {
        return this._discountPrice;
    }
    get price(): number {
        return this._price;
    }
    get img(): string {
        return this._img;
    }
    get img2(): string {
        return this._img2;
    }
    get img3(): string {
        return this._img3;
    }
    get category(): string {
        return this._category;
    }
    get active1(): string {
        return this._active1;
    }
    get active2(): string {
        return this._active1;
    }
    get active3(): string {
        return this._active1;
    }
    get active4(): string {
        return this._active1;
    }
    get active5(): string {
        return this._active1;
    }
    get active6(): string {
        return this._active1;
    }
    get volume(): string {
        return this._volume;
    }
    get count(): number {
        return this._count;
    }
    get sellCount(): number {
        return this._sellCount;
    }
    get barCode(): string {
        return this._barCode;
    }
    get engName(): string {
        return this._engName;
    }
    get skinType(): string {
        return this._skinType;
    }
    get madeCountry(): string {
        return this._madeCountry;
    }
    get howToUse(): string {
        return this._howToUse;
    }
    get description(): string {
        return this._description;
    }
    get type(): string {
        return this._type;
    }
    get brand(): string {
        return this._brand;
    }
    get rating(): number {
        return this._rating;
    }


}