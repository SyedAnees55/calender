#! /usr/bin/env node
import inquirer from "inquirer"

let dateAns=await inquirer.prompt([{
    name:"Day",
    message:"Enter a Day without space and zero is not allowed please do not enter zero for left side",
    type:"input"
},
{name:"Month",
    message:"Enter a Month without space and zero is not allowed please do not enter zero for left side",
    type:"input"
},
{name:"Year",
    mesage:"Enter a year",
    type:"input"
}
]);
//may first week
if(dateAns.Day==1 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay (Labour day)`);
}else if(dateAns.Day==2 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==3 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==4 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==5 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//secound week
else if(dateAns.Day==6 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==7 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==8 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==9 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==10 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==11 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==12 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//third week
else if(dateAns.Day==13 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==14 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==15 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==16 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==17 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==18 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==19 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//fourth week
else if(dateAns.Day==20 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==21 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==22 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==23 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday (Buddha Purima)`);
}else if(dateAns.Day==24 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==25 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==26 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
} 
// may month and haulf week
else if(dateAns.Day==27 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==28 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==29 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==30 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==31 && dateAns.Month==5 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}
//jun first week
else if(dateAns.Day==1 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==2 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
} 
//secound week
else if(dateAns.Day==3 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==4 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==5 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==6 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==7 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==8 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==9 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//third week
else if(dateAns.Day==10 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==11 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==12 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==13 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==14 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==15 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==16 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//fourth week
else if(dateAns.Day==17 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday (Eid al-Adha)`);
}else if(dateAns.Day==18 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday (Eid al-Adha)`);
}else if(dateAns.Day==19 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay (Eid al-Adha)`);
}else if(dateAns.Day==20 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==21 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==22 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==23 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//last week this month
else if(dateAns.Day==24 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==25 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==26 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==27 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==28 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==29 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==30 && dateAns.Month==6 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//july first week
else if(dateAns.Day==1 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday (July 1 Bank Holiday)`);
}else if(dateAns.Day==2 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==3 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==4 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==5 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==6 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==7 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//secound week
else if(dateAns.Day==8 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==9 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==10 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==11 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==12 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==13 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==14 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//third week
else if(dateAns.Day==15 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==16 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday (Ashura)`);
}else if(dateAns.Day==17 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay (Ashura Holiday)`);
}else if(dateAns.Day==18 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==19 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==20 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==21 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//fourth week and last week this month
else if(dateAns.Day==22 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==23 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==24 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==25 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==26 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==27 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==28 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//August first week start and with the last month of the year
else if(dateAns.Day==29 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==30 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==31 && dateAns.Month==7 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==1 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==2 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==3 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==4 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//secound week
else if(dateAns.Day==5 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==6 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==7 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==8 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==9 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==10 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==11 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//third week
else if(dateAns.Day==12 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==13 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==14 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay (independence Day)`);
}else if(dateAns.Day==15 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==16 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==17 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==18 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//fouth week
else if(dateAns.Day==19 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==20 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday (Brithday of Lord Zoroaster{Khordad sal})`);
}else if(dateAns.Day==21 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==22 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==23 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==24 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==25 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//fivth week
else if(dateAns.Day==26 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday(Chelum)`);
}else if(dateAns.Day==27 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday (Chelum)`);
}else if(dateAns.Day==28 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==29 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==30 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==31 && dateAns.Month==8 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}
//september first week
else if(dateAns.Day==1 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}else if(dateAns.Day==2 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==3 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==4 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==5 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==6 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday (Defence Day)`);
}else if(dateAns.Day==7 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==8 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//seound week
else if(dateAns.Day==9 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==10 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==11 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==12 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==13 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==14 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==15 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday (Giarhwin Sharief)`);
}
//third week
else if(dateAns.Day==16 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday (Eid Milad un-Nabi)`);
}else if(dateAns.Day==17 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==18 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==19 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==20 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==21 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==22 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}//fourth week
else if(dateAns.Day==23 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==24 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==25 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==26 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==27 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==28 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==29 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//october first week 
else if(dateAns.Day==30 && dateAns.Month==9 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==1 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==2 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==3 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==4 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==5 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==6 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//secound week
else if(dateAns.Day==7 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==8 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==9 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==10 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==11 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday  (Durga Puja)`);
}else if(dateAns.Day==12 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday (Dussehra)`);
}else if(dateAns.Day==13 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday (Dussehra)`);
}
//third week
else if(dateAns.Day==14 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==15 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==16 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay (Giarhwin Sharif)`);
}else if(dateAns.Day==17 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday (Birthday of Guru Balmik sawami Ji)`);
}else if(dateAns.Day==18 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==19 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==20 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//fourth week
else if(dateAns.Day==21 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==22 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==23 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==24 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==25 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==26 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==27 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//last 4 days in th week and new month start from friday November
else if(dateAns.Day==28 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==29 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==30 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==31 && dateAns.Month==10 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==1 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday (Diwali/Deepavali)`);
}else if(dateAns.Day==2 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==3 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//first week navember
else if(dateAns.Day==4 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==5 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==6 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==7 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==8 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==9 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday (Iqbal Day)`);
}else if(dateAns.Day==10 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//secound week
else if(dateAns.Day==11 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==12 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==13 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==14 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==15 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday (Guru Nanak's Birthday)`);
}else if(dateAns.Day==16 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==17 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//third week
else if(dateAns.Day==18 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==19 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==20 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==21 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==22 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==23 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==24 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//fourth week
else if(dateAns.Day==25 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==26 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==27 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==28 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==29 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==30 && dateAns.Month==11 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}
//first week December 
else if(dateAns.Day==1 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}else if(dateAns.Day==2 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==3 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==4 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==5 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==6 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==7 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==8 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
// secound week
else if(dateAns.Day==9 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==10 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==11 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==12 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==13 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==14 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==15 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//third week
else if(dateAns.Day==16 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==17 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday`);
}else if(dateAns.Day==18 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay`);
}else if(dateAns.Day==19 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday`);
}else if(dateAns.Day==20 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==21 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==22 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//fourth week
else if(dateAns.Day==23 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==24 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday (Christmas Eve)`);
}else if(dateAns.Day==25 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Wednesay (Quaid-e-Azam Day and Christmas Day)`);
}else if(dateAns.Day==26 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Thursday (Day After Christmas(christians only))`);
}else if(dateAns.Day==27 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Friday`);
}else if(dateAns.Day==28 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Saturday`);
}else if(dateAns.Day==29 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Sunday`);
}
//last week this month and this year 2024
else if(dateAns.Day==30 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Monday`);
}else if(dateAns.Day==31 && dateAns.Month==12 && dateAns.Year==2024){
    console.log(`${dateAns.Day}|${dateAns.Month}|${dateAns.Year} your day is Tuesday (New year Event)`);
}else{console.log(`sorry this date not collected only (May to Dec 2024) are collected please try again`)};