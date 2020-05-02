export class FilterDto
{
    CharacherName:string;
    CharacterGender:string;

    constructor(name:string,gender:string)
    {
        this.CharacherName = name;
        this.CharacterGender = gender;
    }
}