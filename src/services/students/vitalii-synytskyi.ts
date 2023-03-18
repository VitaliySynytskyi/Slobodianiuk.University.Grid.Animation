import IAnimationConfig from "../../models/animation-config";
import { IConfigLoaderService } from "../config-loader-interface";
import Constants from "../../constants/constants";
import IFrame from "../../models/frame";
import IPixelState from "../../models/pixel-state";
import { Colour } from "../../models/colour";

export class VitaliiSynytskyiConfigLoaderService implements IConfigLoaderService {

    public getStudentName(): string {
        return 'Vitalii Synytskyi';
    }

    public getStudentEmail(): string {
        return 'howery1337@gmail.com';
    }

    public loadConfig(): IAnimationConfig {
        return {
            name: 'Vitalii',
            surname: 'Synytskyi',
            email: this.getStudentEmail(),
            projectName: 'Circle',
            personalProjectLink: 'https://witty-plant-0f1aca810.2.azurestaticapps.net',
            header: getDefaultCircleFrame(0),
            frames: [...Array(32).keys()].map(x => getDefaultCircleFrame(x))
        }
    }
}
export const getDefaultCircleFrame = (frameNumber: number): IFrame => {
    let result: IFrame = {
        frameNumber: frameNumber,
        pixels: []
    };

    for (let x = 0; x < Constants.GridRows; x++) {
        for (let y = 0; y < Constants.GridColumns; y++) {

            if (Constants.GridColumns - x > frameNumber) {
                if (x === y || x + y === Constants.GridColumns - 1) {
                    result.pixels.push({
                        color: Colour.White,
                        x: x,
                        y: y
                    });
                }
            }

            if (frameNumber > Constants.GridColumns && Constants.GridColumns - x < frameNumber - Constants.GridColumns) {
                if (x === y || x + y === Constants.GridColumns - 1) {
                    result.pixels.push({
                        color: Colour.White,
                        x: x,
                        y: y
                    });
                }
            }
        }
    }

    return result;
}
