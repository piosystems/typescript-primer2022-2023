let firstName: string;
let age: number;
let height: number;
let alive: boolean;
let colour: 'red' | 'green' | 'blue' | undefined;
let anyColour: string;
//enum
enum Gender {
    'female' = 'f',
    'male' = 'm'
}
let gender: Gender;

firstName = 'Pius';
age = 100;
height = 1.72;
alive = true;
colour = undefined;
anyColour = 'brown';
gender = Gender.male;



console.log(firstName);