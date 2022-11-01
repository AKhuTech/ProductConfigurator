import { TOption } from "../types/options";

export const configurationOptions: TOption[] = [
    {
        "optDescription": "Basic machine",
        "optType": "basic",
        "optNo": "1.524-541.2",
        "optVal": 0,
        "optName": "Basic machine HDS Trailer (350/500 bar)",
        "optComment": null,
        "optPrice": 7900
    },
    {
        "optDescription": "Pump",
        "optType": "pump",
        "optNo": "DE_20130307",
        "optVal": 0,
        "optName": "350 bar, 21,7 l/min",
        "optComment": null,
        "optPrice": 2850
    },
    {
        "optDescription": "Pump",
        "optType": "pump",
        "optNo": "DE_20130297",
        "optVal": 1,
        "optName": "500 bar, 15 l/min",
        "optComment": null,
        "optPrice": 3500
    },
    {
        "optDescription": "Pump",
        "optType": "pump",
        "optNo": "DE_2013317",
        "optVal": 2,
        "optName": "200 bar, 28,3 l/min",
        "optComment": null,
        "optPrice": 2200
    },
    {
        "optDescription": "Relief valve",
        "optType": "relief",
        "optNo": "NO_RELIEF",
        "optVal": 0,
        "optName": "Without relief valve",
        "optComment": null,
        "optPrice": 0
    },
    {
        "optDescription": "Relief valve",
        "optType": "relief",
        "optNo": "DE_20130497",
        "optVal": 1,
        "optName": "With relief valve",
        "optComment": "Highly recommended",
        "optPrice": 1190
    },
    {
        "optDescription": "Mobility",
        "optType": "mobility",
        "optNo": "DE_20130397",
        "optVal": 0,
        "optName": "Skid",
        "optComment": "На базовой раме без кожуха, бака для воды и шасси. Не сертифицирована!",
        "optPrice": 1180,
        "optImage": "https://s1.kaercher-media.com/media/image/file/15105/d3/hds-trailer-skid.webp"
    },
    {
        "optDescription": "Mobility",
        "optType": "mobility",
        "optNo": "DE_20130407",
        "optVal": 1,
        "optName": "Cab",
        "optComment": "",
        "optPrice": 3400,
        "optImage": "https://s1.kaercher-media.com/media/image/file/15106/d3/hds-trailer-cab.webp"
    },
    {
        "optDescription": "Mobility",
        "optType": "mobility",
        "optNo": "DE_20130417",
        "optVal": 2,
        "optName": "Trailer",
        "optComment": "",
        "optPrice": 172,
        "optImage": "https://s1.kaercher-media.com/media/image/file/9781/d3/hds-trailer.webp"
    },
    {
        "optDescription": "Shock absorbers",
        "optType": "absorbers",
        "optNo": "NO_ABSORBERS",
        "optVal": 0,
        "optName": "Without shock absorbers",
        "optComment": "",
        "optPrice": 0,
    },
    {
        "optDescription": "Shock absorbers",
        "optType": "absorbers",
        "optNo": "DE_20130167",
        "optVal": 1,
        "optName": "With shock absorbers",
        "optComment": "",
        "optPrice": 4270,
        "optRequired": "mobility=2"
    },
    {
        "optDescription": "Hose reels",
        "optType": "hoseReels",
        "optNo": "DE_20130427",
        "optVal": 0,
        "optName": "Without hose reels",
        "optComment": "",
        "optPrice": 353
    },
    {
        "optDescription": "Hose reels",
        "optType": "hoseReels",
        "optNo": "DE_20130017 + DE_20130027",
        "optVal": 1,
        "optName": "With hose reels (350/500 bar)",
        "optComment": "With hose reels",
        "optPrice": 960
    },
    {
        "optDescription": "Accessories set",
        "optType": "accessories",
        "optNo": "NO_ACCESSORIES",
        "optVal": 0,
        "optName": "Without accessories",
        "optComment": "",
        "optPrice": 0
    },
    {
        "optDescription": "Accessories set",
        "optType": "accessories",
        "optNo": "DE_20130317",
        "optVal": 1,
        "optName": "Accessories set for HDS 13/35",
        "optComment": "",
        "optPrice": 333,
        "optRequired": "pump=0"
    },
    {
        "optDescription": "Accessories set",
        "optType": "accessories",
        "optNo": "DE_20130217",
        "optVal": 2,
        "optName": "Accessories set for HDS 9/50",
        "optComment": "",
        "optPrice": 298,
        "optRequired": "pump=1"
    }
]