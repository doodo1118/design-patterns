module.exports = class Singleton{
    private constructor(){};
    private static singletonInstance :Singleton = new Singleton();

    private count : number = 0;

    public static getInstance() : Singleton{
        return this.singletonInstance;
    }

    public addCount(){
        this.count++;
        console.log(this.count);
    }
}
