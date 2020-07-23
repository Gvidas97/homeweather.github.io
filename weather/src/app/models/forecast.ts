export interface Forecast {
    daily: [
        {
            temp: {
                day: number,
                night: number,
            },
            weather: [
                {
                id: number,
                main: string,
                escription: string,
                icon: number
                }
            ]
        }
    ]
}