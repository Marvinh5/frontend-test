export class ApiUrl {
    constructor(public  url: string) {}

    addQueryParams(query: object ) {
        Object.entries(query).forEach(([key, val])=> {
            if(val){
                this.url += `${this.url.includes('?') ? '&' : '?'}${key}=${val}`;
            }
        });
    }

    get parsedUrl(){
        return this.url;
    }
}