import { Color } from "../../../models/color";

interface ColorRendering {
    classNameColor: string;
    label: string;
}

export function getColorRendering(color: Color): ColorRendering {
    switch(color) {
        case Color.Red:
            return {
                classNameColor: 'bg-red-400',
                label: 'R'
            };
        case Color.Green:
            return {
                classNameColor: 'bg-green-400',
                label: 'G'
            };
        case Color.Blue:
            return {
                classNameColor: 'bg-blue-400',
                label: 'B'
            };
    }
}