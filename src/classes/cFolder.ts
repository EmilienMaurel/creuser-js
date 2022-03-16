import { readdirSync } from "fs"

export default class CFolder{
    private readonly _directoryPath:string
    private readonly _filesNames:string[]
    
    constructor(directoryPath:string){
        this._directoryPath=directoryPath
        this._filesNames = readdirSync(this._directoryPath)
    }


    numberOfFiles():number{
        return this._filesNames.length
    }

    get files():string[]{
        return this._filesNames
    }

}