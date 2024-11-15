

class UtilApplication{
    
    separateName(email:string):string{
        const arrayName: string[] = email.split("@");
        return arrayName[0];
    }

}


export default new UtilApplication();