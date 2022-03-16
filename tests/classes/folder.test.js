import { readdir, readdirSync} from "fs"
import CFolder from '../../src/classes/cFolder.ts'


describe("Class : CFolder",()=>{
   

    test("Count number of files",()=>{
        const pathFolder = "./assets"
        let expectedResult = readdirSync(pathFolder).length

        const folder= new CFolder(pathFolder)
        expect(folder.numberOfFiles()).toBe(expectedResult)

    })


    
})
