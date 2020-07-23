export interface Weather {
    coord: {
        lon: number, 
        lat: number
    };
    main: {
        pressure: number,
        humidity: number
        temp: number
    };
    name: string;
    sys: {
        country: string
    };
    weather: [
        {
            description: string
            icon: string
            id: number
            main: string
        }
    ];
    wind: {
        speed: number
    };
}