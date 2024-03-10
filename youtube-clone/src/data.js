export const API_KEY = 'AIzaSyC3Wwna7YcVJ45rflLjamy_-Y4Tn21kTmc';

export const value_converter = (value) =>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}
